import exifr from "exifr";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { builder } from "../builder";
import { v4 as uuidv4 } from "uuid";

export class Info {
  latitude?: number;
  longitude?: number;

  constructor(latitude?: number, longitude?: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class Thumbnail {
  id: string = uuidv4();
  thumbnailURL: string;
  info?: Info;

  constructor(thumbnailURL: string, info?: Info) {
    this.thumbnailURL = thumbnailURL;
    this.info = info;
  }
}

builder.objectType(Info, {
  name: "Info",
  description: "Thumbnail info.",
  fields: (t) => ({
    latitude: t.exposeFloat("latitude", { nullable: true }),
    longitude: t.exposeFloat("longitude", { nullable: true }),
  }),
});

builder.objectType(Thumbnail, {
  name: "Thumbnail",
  description: "Info.",
  fields: (t) => ({
    id: t.exposeID("id"),
    thumbnailURL: t.exposeString("thumbnailURL"),
    info: t.expose("info", { type: Info, nullable: true }),
  }),
});

const folderPath = path.join("./", "public", "images", "gallery");

const getImageFileNames = () => {
  try {
    const fileNames = fs.readdirSync(folderPath);
    return fileNames;
  } catch (error) {
    console.error("Error reading image files:", error);
    return [];
  }
};

builder.queryField("thumbnails", (t) => {
  return t.field({
    type: [Thumbnail],
    args: {},
    resolve: async (query, {}: any) => {
      const imageFileNames = getImageFileNames();

      const thumbnails = await Promise.all(
        imageFileNames.map(async (fileName) => {
          const imagePath = `public/images/gallery/${fileName}`;
          const { latitude, longitude } = await exifr.gps(imagePath);

          const thumbnailBuffer = await sharp(imagePath)
            .resize(200)
            .toFormat("jpeg")
            .jpeg({ quality: 80 })
            .toBuffer();

          return {
            id: uuidv4(),
            thumbnailURL: "data:image/jpg;base64, " + thumbnailBuffer.toString("base64"),
            info: {
              latitude: latitude,
              longitude: longitude,
            },
          };
        })
      );

      return thumbnails;
    },
  });
});
