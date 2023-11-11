import Astronauts from "./Astronauts";
import Books from "./Books";
import Employees from "./Employees";
import Home from "./Home";

const modules: { [key: string]: any } = {
  astronauts: Astronauts,
  books: Books,
  employees: Employees,
  home: Home,
};

export default modules;
