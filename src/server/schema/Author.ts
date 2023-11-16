import { clientPrisma } from "../../prisma";
import { authorCreate, authorUpdate } from "../../validation/schema/Authors";
import { builder } from "../builder";
import yupValidation from "../yupValidation";

export const Author = builder.prismaObject("Author", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    surName: t.exposeString("surName"),
    books: t.relation("books"),
  }),
});

builder.queryField("author", (t) => {
  return t.prismaField({
    type: Author,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _, { id }: any) => {
      return clientPrisma.author.findUniqueOrThrow({
        ...query,
        where: { id },
      });
    },
  });
});

builder.queryField("authors", (t) => {
  return t.prismaField({
    type: [Author],
    nullable: true,
    args: {
      // orderBy: t.arg({ type: [BudgetProposalOrderByInput] }),
      search: t.arg.string(),
      skip: t.arg.int(),
      take: t.arg.int(),
      // where: t.arg({ type: BudgetProposalWhereInput }),
    },
    resolve: async (query, _, {}: any) => {
      return await clientPrisma.author.findMany({
        ...query,
      });
    },
  });
});

const AuthorInput = builder.inputType("AuthorInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    surName: t.string({ required: true }),
  }),
});

builder.mutationField("createAuthor", (t) =>
  t.prismaField({
    type: Author,
    args: {
      input: t.arg({ type: AuthorInput, required: true }),
    },
    resolve: async (query, _, { input }) => {
      const { isValid, errorMessages } = await yupValidation(authorCreate, input);
      if (!isValid) {
        throw new Error(errorMessages?.join(", "));
      }

      return await clientPrisma.author.create({
        ...query,
        data: { ...input },
      });
    },
  })
);

builder.mutationField("updateAuthor", (t) =>
  t.prismaField({
    type: Author,
    args: {
      id: t.arg.id({ required: true }),
      input: t.arg({ type: AuthorInput, required: true }),
    },

    resolve: async (query, _, { id, input }) => {
      const { isValid, errorMessages } = await yupValidation(authorUpdate, {
        ...input,
        id,
      });

      if (!isValid) {
        throw new Error(errorMessages?.join(", "));
      }

      const user = await clientPrisma.author.update({
        ...query,
        data: input,
        where: { id: id ? String(id) : "" },
      });
      return user;
    },
  })
);
