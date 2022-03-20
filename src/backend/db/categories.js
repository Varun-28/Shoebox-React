import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Casual (M)",
    categoryImage: "../../assets/casual_1.webp",
    description:
      "casual shoes for male",
  },
  {
    _id: uuid(),
    categoryName: "Formal (M)",
    categoryImage: "../../assets/formal_1.webp",
    description:
      "formal shoes for male",
  },
  {
    _id: uuid(),
    categoryName: "Sports (M)",
    categoryImage: "../../assets/sports_1.webp",
    description:
      "sports shoes for male",
  },
  {
    _id: uuid(),
    categoryName: "Casual (F)",
    categoryImage: "../../assets/casual_1f.webp",
    description:
      "casual shoes for female",
  },
  {
    _id: uuid(),
    categoryName: "Boots (F)",
    categoryImage: "../../assets/boot_1.webp",
    description:
      "boots for female",
  }
];
