import { ActionView, IndexView, ShowView } from "./View";
import { DatePicker } from "./DatePicker";
import Form from "./Form/Form";
import { Grid } from "./Grid";
import { InputString } from "./Input";
import { Component } from "./utils";
import { Autocomplete } from "./Autocomplete";

export default {
  [Component.INPUT_STRING]: InputString,
  [Component.FORM]: Form,
  [Component.GRID]: Grid,
  [Component.SHOW_VIEW]: ShowView,
  [Component.ACTION_VIEW]: ActionView,
  [Component.INDEX_VIEW]: IndexView,
  [Component.DATE_PICKER]: DatePicker,
  [Component.AUTOCOMPLETE]: Autocomplete,
};
