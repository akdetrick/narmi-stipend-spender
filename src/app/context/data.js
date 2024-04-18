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
    description: "Improve bloodflow with this stylish standing desk",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["I stand", "I like to stand", "look at me, i'm standing"],
    imgFile: "standing-desk.png"
  },
  {
    name: "Georgio Desk",
    price: 499,
    brand: "Rove Concepts",
    description: "A desk with a beautiful modern design",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["My cats sit on it"],
    imgFile: "georgio-desk.png"
  },
  {
    name: "Medidation Chair",
    price: 299,
    brand: "Pipersong",
    description: "Designed in Italy and featuring eight points of adjustment, the Pipersong Ergonomic Chair delivers an exceptional range of ergonomic support for bodies of all shapes and sizes.",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: [
      "This chair has been a real game changer for me. It's incredibly comfortable and has allowed me to focus fully on unearthing core endpoints we never thought would see the light of day",
      "One reason consumers open accounts in branches.. THE CHAIRS! People love comfortable chairs!"
    ],
    imgFile: "meditation-chair.png"
  },
  {
    name: "Worland Desk",
    price: 409,
    brand: "Fezibo",
    description: "It's a desk that you can put in a corner.",
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
    description: "Great looking aquarium for your desk",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.companionship,
    testimonials: ["I put fish in it! I'm not sure if you're supposed to do that"],
    imgFile: "walnut-aquarium.png"
  },
  {
    name: "Reptile aquarium",
    price: 199,
    brand: "Repti-Zoo",
    description: "Suitable for damp and humid conditions, hygencis, and easy to clean, making it the perfect choice for pet parents looking to give their scaly sidekick a save and comfortable home\n\nDesigned to maintain the correct heat gradient more safely and easily, which is essential for your little buddy's health and well-being.",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.companionship,
    testimonials: [
      "Working from home can get lonely. But since joining Narmi and using my WFH stipend on this aquarium, my iguano Coco has been by my side and calming my nerves during late evenings of incident response",
      "Chair makes happy"
    ],
    imgFile: "reptile-aquarium.png"
  },
  {
    name: "Not-too-sharp cactus",
    price: 224,
    brand: "Cactus Co.",
    description: "Ouch",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.companionship,
    testimonials: ["Not too sharp, but still sharp enough to wake you up"],
    imgFile: "cactus.png"
  },
  {
    name: "Hamster Wheel",
    price: 45,
    brand: "HamsterCo",
    description: "The perfect exercise routine for you pet hamster, Cheddar",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.companionship,
    testimonials: ["little man is chuffed"],
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
