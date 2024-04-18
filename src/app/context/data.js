import VIEWS from "./views";
import { products, purchasers } from "../util/dataBridge";

export default {
  view: VIEWS.EXPLORE,
  currentProduct: null,
  cart: {}, // products will be added and removed (by name)
  products,
  purchasers,
};
