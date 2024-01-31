import { clientPrisma } from "../prisma";
import { checkUser } from "./authorization";

export const checkAuth = async (context: any) => {
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

    if (!userEmail) {
      throw new Error("No user email found!");
    }

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
