import { Component } from "../utils";
import BookEditForm from "./BookEditForm";
import BookNewForm from "./BookNewForm";
import Books from "./Books";
import CustomerView from "./CustomerView";

export default {
  [Component.INDEX]: Books,
  [Component.NEW]: BookNewForm,
  [Component.EDIT]: BookEditForm,
  [Component.CUSTOMER_VIEW]: CustomerView,
};
