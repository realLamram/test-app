import Astronauts from "./Astronauts";
import Books from "./Books";
import Employees from "./Employees";
import Films from "./Films";
import Gallery from "./Gallery";
import Home from "./Home";
import Swapi from "./Swapi";

const modules: { [key: string]: any } = {
  astronauts: Astronauts,
  books: Books,
  employees: Employees,
  home: Home,
  films: Films,
  gallery: Gallery,
  swapi: Swapi,
};

export default modules;
