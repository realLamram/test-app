import { clientPrisma } from "../../prisma";
import { todoCreate, todoUpdate } from "../../validation/schema/Todos";
import { checkAuthToken, checkUser, refreshToken } from "../authorization";
import { builder } from "../builder";
import yupValidation from "../yupValidation";

const checkAuth = async (context: any) => {
  const { headers } = context.req;

  try {
    if (!headers.authorization) {
      throw new Error("No auth header");
    }
    const at = headers.authorization.split(" ")[1];

    if (!at) {
      throw new Error("No auth token");
    }

    const userEmail = await checkUser(at);

    const user = await clientPrisma.user.findUnique({
      where: {
        email: userEmail,
      },
      include: {
        roles: true,
      },
    });

    if (!user?.email) {
      throw new Error("No user email found!");
    }
  } catch (err) {
    console.error("Chyba při ověřování:", (err as Error).message);
    throw new Error("Unauthorized");
  }
};

export const Todo = builder.prismaObject("Todo", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    userId: t.exposeString("userId"),
  }),
});

builder.queryField("todo", (t) => {
  return t.prismaField({
    type: Todo,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _, { id }, context) => {
      try {
        await checkAuth(context);

        return clientPrisma.todo.findUniqueOrThrow({
          ...query,
          where: { id },
        });
      } catch (error: any) {
        console.error("Chyba při získávání úkolu:", error.message);
        throw new Error("Chyba při získávání úkolu");
      }
    },
  });
});

const TodoWhereInput = builder.inputType("TodoWhereInput", {
  fields: (t) => ({
    userId: t.id(),
  }),
});

builder.queryField("todos", (t) => {
  return t.prismaField({
    type: [Todo],
    nullable: true,
    args: {
      where: t.arg({ type: TodoWhereInput }),
    },
    resolve: async (query, _, args: any, context: any) => {
      try {
        const { headers } = context.req;

        const at = headers.authorization.split(" ")[1];

        await checkAuth(context);

        const user = await clientPrisma.user.findUnique({
          where: {
            id: args.where.userId,
          },
          include: {
            roles: true,
          },
        });

        return await clientPrisma.todo.findMany({
          ...query,
          where: {
            userId: user?.id,
          },
        });
      } catch (error: any) {
        console.error("Chyba při získávání úkolů:", error.message);
        throw new Error("Chyba při získávání úkolů");
      }
    },
  });
});

const TodoCreateInput = builder.inputType("TodoCreateInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    userId: t.id({ required: true }),
  }),
});

builder.mutationField("createTodo", (t) =>
  t.prismaField({
    type: Todo,
    args: {
      input: t.arg({ type: TodoCreateInput, required: true }),
    },
    resolve: async (query, _, args, context: any) => {
      try {
        const { input } = args;
        const { headers } = context.req;

        if (!headers.authorization) {
          throw new Error("No auth!");
        }
        const at = headers.authorization.split(" ")[1];

        if (!at) {
          throw new Error("No token!");
        }

        const user = await clientPrisma.user.findUnique({
          where: {
            id: input.userId,
          },
        });

        const can = await checkAuthToken(at, user?.email);
        const { isValid, errorMessages } = await yupValidation(todoCreate, {
          ...input,
        });

        if (!isValid || !can) {
          throw new Error(errorMessages?.join(", "));
        }

        const todo = await clientPrisma.todo.create({
          ...query,
          data: {
            ...input,
          },
        });

        return todo;
      } catch (error: any) {
        console.error("Chyba při vytváření úkolu:", error.message);
        throw new Error("Chyba při vytváření úkolu");
      }
    },
  })
);

const TodoUpdateInput = builder.inputType("TodoUpdateInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
  }),
});

builder.mutationField("updateTodo", (t) =>
  t.prismaField({
    type: Todo,
    args: {
      id: t.arg.id({ required: true }),
      input: t.arg({ type: TodoUpdateInput, required: true }),
    },
    resolve: async (query, _, args, context) => {
      try {
        const { id, input } = args;

        await checkAuth(context);

        const { isValid, errorMessages } = await yupValidation(todoUpdate, {
          ...input,
        });

        if (!isValid) {
          throw new Error(errorMessages?.join(", "));
        }

        const todo = await clientPrisma.todo.update({
          ...query,
          data: {
            ...input,
          },
          where: { id },
        });

        return todo;
      } catch (error: any) {
        console.error("Chyba při aktualizaci úkolu:", error.message);
        throw new Error("Chyba při aktualizaci úkolu");
      }
    },
  })
);

builder.mutationField("deleteTodo", (t) =>
  t.prismaField({
    type: Todo,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _, { id }, context) => {
      try {
        await checkAuth(context);

        const todo = await clientPrisma.todo.delete({
          ...query,
          where: { id },
        });

        return todo;
      } catch (error: any) {
        console.error("Chyba při mazání úkolu:", error.message);
        throw new Error("Unauthorized");
      }
    },
  })
);
