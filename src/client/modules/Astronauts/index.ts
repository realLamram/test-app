import { Component } from "../utils";
import Astronauts from "./Astronauts";
import Form from "./Form";
import ShowCard from "./ShowCard";

export default {
  [Component.INDEX]: Astronauts,
  [Component.NEW]: Form,
  [Component.EDIT]: Form,
  [Component.SHOW]: ShowCard,
};
