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

const companionProducts = [
  {
    name: "Walnut aquarium",
    price: 299,
    brand: "Odpaltoy",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.companionship,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "walnut-aquarium.png"
  },
  {
    name: "Reptile aquarium",
    price: 199,
    brand: "Repti-Zoo",
    description: "Suitable for damp and humid conditions, hygencis, and easy to clean, making it the perfect choice for pet parents looking to give their scaly sidekick a save and comfortable home\n\nDesigned to maintain the correct heat gradient more safely and easily, which is essential for your little buddy's health and well-being.",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.companionship,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "reptile-aquarium.png"
  },
  {
    name: "Not-too-sharp cactus",
    price: 224,
    brand: "Cactus Co.",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.companionship,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "cactus.png"
  },
  {
    name: "Hamster Wheel",
    price: 45,
    brand: "HamsterCo",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.companionship,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgFile: "hamp.png"
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
  isCartOpen: false,
  remainingBalance: 500,
  cart: [], 
  products: [...comfortProducts, ...companionProducts],
  purchasers,
};
