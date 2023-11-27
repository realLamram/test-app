import Astronauts from "./Astronauts";
import Books from "./Books";
import Employees from "./Employees";
import Films from "./Films";
import Home from "./Home";

const modules: { [key: string]: any } = {
  astronauts: Astronauts,
  books: Books,
  employees: Employees,
  home: Home,
  films: Films,
};

export default modules;
