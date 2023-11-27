import { stat, writeFile } from "fs/promises";
import path from "path";
import { clientPrisma } from "../../prisma";
import { builder } from "../builder";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import util from "util";
import { BookEntryType } from "@prisma/client";
import yupValidation from "../yupValidation";
import { bookCreate, bookUpdate } from "../../validation/schema/Books";
const readdir = util.promisify(fs.readdir);

export const Book = builder.prismaObject("Book", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    released: t.exposeInt("released"),
    author: t.relation("author"),
    files: t.relation("files"),
  }),
});

builder.queryField("book", (t) => {
  return t.prismaField({
    type: Book,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _, { id }: any) => {
      return clientPrisma.book.findUniqueOrThrow({
        ...query,
        where: { id },
      });
    },
  });
});

// export const SearchInput = inputObjectType({
//   name: 'SearchInput',
//   definition(t) {
//     t.string('title', { nullable: true });
//     t.string('author', { nullable: true });
//     // Další pole podle potřeby
//   },
// });

const SearchInput = builder.inputType("SearchInput", {
  fields: (t) => ({
    title: t.string(),
    author: t.string(),
  }),
});

builder.queryField("books", (t) => {
  return t.prismaField({
    type: [Book],
    nullable: true,
    args: {
      // orderBy: t.arg({ type: [BudgetProposalOrderByInput] }),
      search: t.arg({
        type: SearchInput,
      }),
      skip: t.arg.int(),
      take: t.arg.int(),
      // where: t.arg({ type: BudgetProposalWhereInput }),
    },
    resolve: async (query, _, { search }: any) => {
      return await clientPrisma.book.findMany({
        ...query,
        where: {
          OR: [
            {
              title: { contains: search.title },

              OR: [
                { author: { name: { contains: search.author } } },
                { author: { surName: { contains: search.author } } },
              ],
            },
          ],
        },
      });
    },
  });
});

const BookCreateInput = builder.inputType("BookCreateInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    released: t.int({ required: true }),
    authorId: t.id({ required: true }),
  }),
});

builder.mutationField("createBook", (t) =>
  t.prismaField({
    type: Book,
    args: {
      input: t.arg({ type: BookCreateInput, required: true }),
      file: t.arg({ type: "Upload", required: true }),
    },

    resolve: async (query, _, args) => {
      const { input, file } = args;

      const { isValid, errorMessages } = await yupValidation(bookCreate, {
        ...input,
        file,
      });

      if (!isValid) {
        throw new Error(errorMessages?.join(", "));
      }

      const book = await clientPrisma.book.create({
        ...query,
        data: {
          ...input,
          authorId: input.authorId,
        },
      });

      const { filename, createReadStream } = await file;

      const parts = filename.split(".");
      const extension = parts[parts.length - 1];

      const uuid = uuidv4().substring(0, 8);

      if (extension === "jpg" || extension === "png" || extension === "jpeg") {
        const name = `${book.id}_cover__${uuid}.${extension}`;
        const p = path.join("public/images", name);
        await writeFile(p, createReadStream());
        const { size } = await stat(p);

        await clientPrisma.entry.create({
          data: {
            name,
            size,
            bookId: book.id,
            path: p.replace("public/", ""),
            extension,
            type: BookEntryType.cover,
          },
        });
      }

      return book;
    },
  })
);

// const BookUpdateInput = builder.inputType("BookUpdateInput", {
//   fields: (t) => ({
//     title: t.string({ required: true }),
//     released: t.int({ required: true }),
//   }),
// });

builder.mutationField("updateBook", (t) =>
  t.prismaField({
    type: Book || undefined,
    args: {
      id: t.arg.id({ required: true }),
      input: t.arg({
        type: builder.inputType("BookUpdateInput", {
          fields: (t) => ({
            title: t.string({ required: true }),
            released: t.int({ required: true }),
          }),
        }),
        required: true,
        description: "Data for updating the book",
      }),
      // input: t.arg({ type: BookUpdateInput, required: true }),
      file: t.arg({ type: "Upload" }),
    },

    resolve: async (query, _, { id, input, file }) => {
      const _file = await file;
      let extension = null;

      const { isValid, errorMessages } = await yupValidation(bookUpdate, {
        ...input,
        id,
        file: _file,
      });

      if (!isValid) {
        throw new Error(errorMessages?.join(", "));
      }

      if (_file) {
        const { filename, createReadStream } = _file;
        const parts = filename.split(".");
        extension = parts[parts.length - 1];
        if (extension === "jpg" || extension === "png" || extension === "jpeg") {
          const fileToDelete = id + "_cover_";
          const dir = "public/images";

          const readDir = async () => {
            try {
              const files = await readdir(dir);
              files.forEach((file) => {
                const filePath = path.join(dir, file);

                if (file.startsWith(fileToDelete)) {
                  fs.unlinkSync(filePath);
                  console.log(`${file} byl smazán.`);
                }
              });
            } catch (err) {
              console.log(err);
            }
          };

          await readDir();

          const uuid = uuidv4().substring(0, 8);
          const name = `${id}_cover__${uuid}.${extension}`;
          const p = path.join("public/images", name);
          await writeFile(p, createReadStream());
          const { size } = await stat(p);

          const entry = await clientPrisma.entry.findFirst({
            where: { bookId: id, type: BookEntryType.cover },
          });

          if (entry) {
            await clientPrisma.entry.updateMany({
              data: {
                name,
                size,
                path: p.replace("public/", ""),
                extension,
              },
              where: { bookId: id },
            });
          } else {
            await clientPrisma.entry.create({
              data: {
                name,
                size,
                bookId: id,
                path: p.replace("public/", ""),
                extension,
                type: BookEntryType.cover,
              },
            });
          }
        }
      }

      return await clientPrisma.book.update({
        ...query,
        data: { ...input },
        where: { id },
      });
    },
  })
);

builder.mutationField("deleteBook", (t) =>
  t.prismaField({
    type: Book,
    args: {
      id: t.arg.id({ required: true }),
      path: t.arg.string(),
    },
    resolve: async (query, _, { id, path }) => {
      if (path) {
        fs.unlink(`public/${path}`, (err) => {
          if (err) {
            console.error("Nepodařilo se smazat soubor:", err);
          } else {
            console.log("Soubor byl úspěšně smazán.");
          }
        });
      }

      const book = await clientPrisma.book.delete({
        ...query,
        where: { id },
      });

      return book;
    },
  })
);
