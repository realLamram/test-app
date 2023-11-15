import { BookEntryType } from "@prisma/client";
import { builder } from "../builder";

const BookImageType = builder.enumType("BookImageType", { values: Object.values(BookEntryType) });

export const Entry = builder.prismaObject("Entry", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    extension: t.exposeString("extension"),
    path: t.exposeString("path"),
    type: t.expose("type", { type: BookImageType }),
    size: t.expose("size", { type: "BigInt" }),
  }),
});

//TODO - sjednotit

// builder.mutationField("uploadEntries", (t) =>
//   t.prismaField({
//     type: [Entry],
//     args: {
//       files: t.arg({ required: true, type: ["Upload"] }),
//     },
//     resolve: async (query, _, { files }) => {
//       const ids: string[] = [];
//       for (const file of files) {
//         const { filename, createReadStream } = await file;
//         // ids.push(await createEntryFile(filename, createReadStream()));
//       }
//       return clientPrisma.entry.findMany({
//         ...query,
//         // where: { id: { in: ids } },
//       });
//     },
//   })
// );
