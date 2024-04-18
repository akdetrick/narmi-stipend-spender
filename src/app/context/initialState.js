import views from "./views";

export default {
  view: views.EXPLORE,
  products: [
    {
      name: "chair",
      price: 299,
      brand: "branch",
      description: "You can sit on it",
      purchasers: ["Phil", "Alice"],
      testimonials: [
         "I like to sit on chair",
         "Chair makes happy",
      ],
    },
  ],
  purchasers: {
    Phil: {
      image:
        "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
    },
    Alice: {
      image:
        "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
    },
  },
};
