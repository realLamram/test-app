const Astronaut = {
  id: "string",
  name: "string",
  surName: "string",
  skill: "string",
  birth: "Date",
  hair: "string",
  eyes: "string",
};

const Employee = {
  id: "string",
  name: "string",
  surName: "string",
  skill: "string",
  birth: "Date",
};

const Book = {
  id: "string",
  idAuthor: "string",
  name: "string",
  surName: "string",
  title: "string",
  released: "int",
};

const types: { [key: string]: any } = {
  Astronaut,
  Employee,
  Book,
};

export default types;
