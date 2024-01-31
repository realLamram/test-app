import { UserRole } from "@prisma/client";
import axios from "axios";
import { OAuth2Client, UserRefreshClient } from "google-auth-library";
import { jwtDecode } from "jwt-decode";
import { v4 as uuid } from "uuid";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI } from "../env";
import { clientPrisma } from "../prisma";

const oAuth2Client = new OAuth2Client({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  redirectUri: REDIRECT_URI,
});

export const checkUser = async (accessToken: string): Promise<false | string> => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`
    );
    if (!response.data.email || !response.data.email_verified) {
      return false;
    } else {
      return response.data.email;
    }
  } catch (error: any) {
    console.error("Chyba při ověřování tokenu:", error.response.data);
    return false;
  }
};

export const checkAuthToken = async (accessToken?: string, email?: string): Promise<boolean> => {
  if (!email || !accessToken) return false;
  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`
    );
    const tokenemail = response.data.email;
    return tokenemail === email ? true : false;
  } catch (error: any) {
    console.error("Chyba při ověřování tokenu:", error.response.data);
    return false;
  }
};

export const authGoogle = async (req: any, res: any) => {
  const { tokens } = await oAuth2Client.getToken(req.body.code);
  const decoded: any = tokens.id_token ? jwtDecode(tokens.id_token) : null;
  let user = null;

  if (decoded) {
    user = await clientPrisma.user.findUnique({
      where: {
        email: decoded.email,
      },
      include: {
        roles: true,
      },
    });

    if (!user) {
      const sid = uuid();
      const userToInsert = {
        id: sid,
        email: decoded.email,
        name: decoded.given_name,
        surName: decoded.family_name,
        fullName: decoded.name,
        roles: {
          create: [{ type: UserRole.USER }],
        },
        loginType: "google",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      try {
        user = await clientPrisma.user.create({
          data: userToInsert,
          include: {
            roles: true,
          },
        });
      } catch (error) {
        console.error("Chyba při vytváření uživatele:", error);
        res.status(500).json({ error: "Chyba při vytváření uživatele" });
      }
    }
  }

  const userToSend = {
    id: user?.id,
    email: user?.email,
    email_verified: decoded?.email_verified,
    name: user?.name,
    surName: user?.surName,
    fullName: user?.fullName,
    roles: user?.roles.map((role) => role.type),
    picture: decoded?.picture,
  };

  res.cookie("at", `Bearer ${tokens.access_token}`, { path: "/" });
  res.cookie("idt", tokens.id_token, { path: "/" });
  res.json(userToSend);
};

export const authGoogleUrl = async (req: any, res: any) => {
  const url = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });
  res.json({ url });
};

export const checkToken = async (req: any, res: any) => {
  try {
    const at = req.cookies["at"];

    if (!at) {
      return res.status(401).json({ message: "Chybí authorization token." });
    }

    const [bearer, token] = at.split(" ");

    if (bearer.toLowerCase() !== "bearer" || !token) {
      return res.status(401).json({ message: "Neplatný formát Bearer tokenu." });
    }

    const check = await checkAuthToken(token, req.body.email);
    res.send(check);
  } catch (err) {
    console.log("Error ", err);
  }
};

export const checkLogin = async (req: any, res: any) => {
  const at = req.cookies["at"];
  const idToken = req.cookies["idt"];
  const idt: any = idToken ? jwtDecode(idToken) : null;

  try {
    if (!at) {
      return res.status(401).json({ message: "Chybí authorization token." });
    }

    const [bearer, token] = at.split(" ");

    if (bearer.toLowerCase() !== "bearer" || !token) {
      return res.status(401).json({ message: "Neplatný formát Bearer tokenu." });
    }

    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`
    );
    const r = response.data;

    if (r.email) {
      const user = await clientPrisma.user.findUnique({
        where: {
          email: r.email,
        },
        include: {
          roles: true,
        },
      });

      if (r.email !== user?.email) return;

      const userToSend = {
        id: user?.id,
        email: user?.email,
        email_verified: r.email_verified,
        name: user?.name,
        surName: user?.surName,
        fullName: user?.fullName,
        roles: user?.roles.map((role) => role.type),
        picture: idt?.picture,
      };
      res.json(userToSend);
    }
  } catch (err) {
    console.log("Error Check Login ", err);
  }
};

export const logout = (req: any, res: any) => {
  res.clearCookie("at");
  res.clearCookie("idt");
  res.send("Logout successful.");
};

export const refreshToken = async (req: any, res: any) => {
  try {
    const bearer = req.cookies["at"];

    if (!bearer) {
      throw new Error("Chybí authorization token.");
    }

    const at = bearer.split(" ")[1];

    if (!at) {
      throw new Error("Neplatný formát Bearer tokenu.");
    }

    const user = new UserRefreshClient(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, at);

    if (!user) {
      throw new Error("Chyba při vytváření uživatele");
    }

    const { credentials } = await user.refreshAccessToken();

    if (!credentials.access_token) {
      throw new Error("Chyba při obnově tokenu");
    }

    res.cookie("at", `Bearer ${credentials.access_token}`, { path: "/" });
    res.json("Refreshed authorization token.");
  } catch (err: any) {
    console.error("Chyba při obnově tokenu:", err.message);
    res.status(401).json("Authorization failed.");
  }
};
