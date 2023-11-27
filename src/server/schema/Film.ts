import { OMDB_API_KEY } from "../../env";
import { builder } from "../builder";

export class Film {
  imdbID?: string;
  Title?: string;
  Year?: string;
  Country?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Language?: string;
  Plot?: string;
  Type?: string;
  Poster?: string;
  Error?: string;
  Response?: boolean;

  constructor(
    imdbID?: string,
    Title?: string,
    Year?: string,
    Genre?: string,
    Director?: string,
    Writer?: string,
    Actors?: string,
    Country?: string,
    Language?: string,
    Plot?: string,
    Type?: string,
    Poster?: string
  ) {
    this.imdbID = imdbID;
    this.Title = Title;
    this.Year = Year;
    this.Country = Country;
    this.Genre = Genre;
    this.Director = Director;
    this.Writer = Writer;
    this.Actors = Actors;
    this.Language = Language;
    this.Plot = Plot;
    this.Type = Type;
    this.Poster = Poster;
  }
}

export class FilmsOutput {
  Search?: Film[];
  totalResults?: number;
  Response?: string;
  Error?: string;

  constructor(Search?: Film[], totalResults?: number, Response?: string, Error?: string) {
    this.Search = Search;
    this.totalResults = totalResults;
    this.Response = Response;
    this.Error = Error;
  }
}

builder.objectType(Film, {
  name: "Film",
  description: "Film info.",
  fields: (t) => ({
    imdbID: t.exposeString("imdbID", { nullable: true }),
    title: t.exposeString("Title", { nullable: true }),
    year: t.exposeString("Year", { nullable: true }),
    genre: t.exposeString("Genre", { nullable: true }),
    director: t.exposeString("Director", { nullable: true }),
    writer: t.exposeString("Writer", { nullable: true }),
    actors: t.exposeString("Actors", { nullable: true }),
    country: t.exposeString("Country", { nullable: true }),
    language: t.exposeString("Language", { nullable: true }),
    plot: t.exposeString("Plot", { nullable: true }),
    type: t.exposeString("Type", { nullable: true }),
    poster: t.exposeString("Poster", { nullable: true }),
  }),
});

builder.objectType(FilmsOutput, {
  name: "FilmsOutput",
  description: "Complete films info.",
  fields: (t) => ({
    Search: t.field({
      type: [Film],
      resolve: (parent) => {
        return parent?.Search ?? [];
      },
    }),
    totalResults: t.exposeInt("totalResults", { nullable: true }),
    response: t.exposeString("Response", { nullable: true }),
    error: t.exposeString("Error", { nullable: true }),
  }),
});

builder.queryField("filmsOutput", (t) => {
  return t.field({
    type: FilmsOutput,
    args: {
      searchName: t.arg.string(),
      searchYear: t.arg.int(),
      page: t.arg.int(),
    },
    resolve: async (query, { searchName, searchYear, page }: any) => {
      const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(
        searchName
      )}&y=${encodeURIComponent(searchYear)}&page=${encodeURIComponent(page ?? 1)}`;

      try {
        const response = await fetch(apiUrl);
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

builder.queryFields((t) => ({
  film: t.field({
    type: Film,
    args: {
      id: t.arg.string(),
    },
    resolve: async (_, { id }) => {
      const apiUrl = `http://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("API request failed");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`${error}`);
      }
    },
  }),
}));
