import { builder } from "../builder";

export class Character {
  id?: string;
  name?: string;
  birth_year?: string;
  height?: string;
  skin_color?: string;
  eye_color?: string;
  gender?: string;

  constructor(
    id?: string,
    name?: string,
    birth_year?: string,
    height?: string,
    skin_color?: string,
    eye_color?: string,
    gender?: string
  ) {
    this.id = id;
    this.name = name;
    this.birth_year = birth_year;
    this.height = height;
    this.eye_color = eye_color;
    this.skin_color = skin_color;
    this.gender = gender;
  }
}

export class PeopleOutput {
  results?: Character[];
  count?: number;
  next?: string;
  previous?: string | null;

  constructor(results?: Character[], count?: number, next?: string, previous?: string | null) {
    this.results = results;
    this.count = count;
    this.next = next;
    this.previous = previous;
  }
}

builder.objectType(Character, {
  name: "Character",
  description: "Character info.",
  fields: (t) => ({
    id: t.exposeString("id", { nullable: true }),
    name: t.exposeString("name", { nullable: true }),
    birth_year: t.exposeString("birth_year", { nullable: true }),
    eye_color: t.exposeString("eye_color", { nullable: true }),
    skin_color: t.exposeString("skin_color", { nullable: true }),
    gender: t.exposeString("gender", { nullable: true }),
  }),
});

builder.objectType(PeopleOutput, {
  name: "PeopleOutput",
  description: "People info.",
  fields: (t) => ({
    results: t.expose("results", { type: [Character], nullable: true }),
    count: t.exposeInt("count", { nullable: true }),
    next: t.exposeString("next", { nullable: true }),
    previous: t.exposeString("previous", { nullable: true }),
  }),
});

builder.queryField("people", (t) => {
  return t.field({
    type: PeopleOutput,
    args: {
      searchName: t.arg.string(),
      page: t.arg.int(),
    },
    resolve: async (query, { searchName, page = 1 }: any) => {
      // const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(
      //   searchName
      // )}&y=${encodeURIComponent(searchYear)}&page=${encodeURIComponent(page ?? 1)}`;
      console.log("object");
      const apiUrl = `https://swapi.dev/api/people/?search=${searchName}&page=${page}&format=json`;

      //   &s=${encodeURIComponent(
      //     searchName
      //   )}

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("API request failed");
        }
        const data = await response.json();
        console.log(data);
        const newResults = data.results.map((item: any) => ({
          ...item,
          id: item.url.split("/")[5],
        }));
        const newData = { ...data, results: newResults };
        return newData;
      } catch (error) {
        throw new Error(`${error}`);
      }
    },
  });
});

builder.queryField("character", (t) => {
  return t.field({
    type: Character,
    nullable: true,
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, { id }: any) => {
      console.log("POooo ", id);
      if (!id) {
        throw new Error("API request failed - No ID!");
      }
      const url = `https://swapi.dev/api/people/${id}/?format=json`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("API request failed");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`${error}`);
      }
    },
  });
});
