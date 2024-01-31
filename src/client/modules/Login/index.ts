import { Component } from "../utils";
import ChangeUserRole from "./ChangeUserRole";
import Form from "./Form";
import Login from "./Login";

export default {
  [Component.INDEX]: Login,
  [Component.NEW]: Form,
  [Component.EDIT]: Form,
  changeUserRole: ChangeUserRole,
};
