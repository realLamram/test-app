import Astronauts from "./Astronauts";
import Books from "./Books";
import Employees from "./Employees";
import Films from "./Films";
import Gallery from "./Gallery";
import Home from "./Home";
import Login from "./Login";
import Swapi from "./Swapi";

const modules: { [key: string]: any } = {
  astronauts: Astronauts,
  books: Books,
  employees: Employees,
  home: Home,
  films: Films,
  gallery: Gallery,
  swapi: Swapi,
  login: Login,
};

export default modules;
