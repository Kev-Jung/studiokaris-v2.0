import HandmadePaper from "../../assets/paper-ribbon/handmade-paper.png";
import Ribbon from "../../assets/paper-ribbon/ribbon.png";

import { v4 as uuid } from "uuid";

const packSize = (minBulkPrice, maxBulkPrice) => {
  return [`20 sheets ($${minBulkPrice})`, `100 sheets ($${maxBulkPrice})`];
};

const paper = [
  {
    id: uuid(),
    name: '150gsm - 4.25x6" Handmade Cotton Rag Paper With Deckled Edges - Perfect for Wedding Stationery',
    img: HandmadePaper,
    price: 12,
    packSize: packSize(12, 50),
    personalized: false,
  },
  {
    id: uuid(),
    name: '150gsm - 3.5x5" Handmade Cotton Rag Paper With Deckled Edges - Perfect for Wedding Stationery',
    img: HandmadePaper,
    price: 11,
    packSize: packSize(11, 46),
    personalized: false,
  },
  {
    id: uuid(),
    name: '200gsm - 6x8.25" Handmade Cotton Rag Paper With Deckled Edges - Perfect for Wedding Stationery',
    img: HandmadePaper,
    price: 22,
    packSize: packSize(22, 100),
    personalized: false,
  },
  {
    id: uuid(),
    name: '300gsm - 4.25x6" Handmade Cotton Rag Paper With Deckled Edges - Perfect for Letterpress Wedding Stationery',
    img: HandmadePaper,
    price: 16,
    packSize: packSize(16, 74),
    personalized: false,
  },
  // Ribbon
  {
    id: uuid(),
    name: "1.5 inch, Frayed Chiffon Ribbon for Floral Bouquets and Wedding Flatlay and Styling, **No Seams, One Continuous Piece**",
    img: Ribbon,
    price: 3,
    packSize: packSize(16, 74),
    personalized: false,
    ribbonColor: [
      "ivory",
      "beige",
      "black",
      "grey",
      "light grey",
      "lilac",
      "navy",
      "dusty blue",
      "burgundy",
      "blush",
    ],
    length: ["sample (1ft) ($3.00)", "2 yards ($8.00)", "5 yards ($16.00)"],
  },
];

export default paper;
