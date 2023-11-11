import { Component } from "../utils";
import Employees from "./Employees";
import Form from "./Form";
import ShowCard from "./ShowCard";

export default {
  [Component.INDEX]: Employees,
  [Component.NEW]: Form,
  [Component.EDIT]: Form,
  [Component.SHOW]: ShowCard,
};
