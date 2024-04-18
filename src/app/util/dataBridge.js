import CATEGORIES from "../context/categories";

/**
 * Bridge CSV to `products` entry for context data
 */
export const products = [
  {
    name: "chair",
    price: 299,
    brand: "branch",
    description: "You can sit on it",
    purchasers: ["Phil", "Alice"],
    category: CATEGORIES.comfort,
    testimonials: ["I like to sit on chair", "Chair makes happy"],
    imgUrl:
      "https://ih1.redbubble.net/image.3076102465.2435/st,small,845x845-pad,1000x1000,f8f8f8.jpg",
  },
];

export const purchasers = {
  Phil: {
    image:
      "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
  },
  Alice: {
    image:
      "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
  },
};
