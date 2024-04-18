import VIEWS from "./views";
import CATEGORIES from "./categories";

const comfortProducts = [
  {
    name: "Ergonomic Chair",
    price: 299,
    brand: "Branch",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "ergonomic-chair.png"
  },
  {
    name: "ErgoChair Pro",
    price: 399,
    brand: "Autonomous",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "ergo-chair.png"
  },
  {
    name: "Duo Standing Desk",
    price: 359,
    brand: "Branch",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "standing-desk.png"
  },
  {
    name: "Georgio Desk",
    price: 499,
    brand: "Rove Concepts",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "georgio-desk.png"
  },
  {
    name: "Medidation Chair",
    price: 299,
    brand: "Pipersong",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "meditation-chair.png"
  },
  {
    name: "Worland DesK",
    price: 409,
    brand: "Fezibo",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "georgio-desk.png"
  },
];

export const purchasers = {
  Phil: {
    department: "Engineering",
    image:
      "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
  },
  Alice: {
    department: "Product",
    image:
      "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
  },
};

export default {
  view: VIEWS.EXPLORE,
  currentProduct: null,
  remainingBalance: 500,
  cart: {}, // products will be added and removed (by name)
  products: [...comfortProducts],
  purchasers,
};
