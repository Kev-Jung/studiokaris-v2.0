import HisHer from "../../assets/vowbooks/his-her.png";
import ToMyHusbandWife from "../../assets/vowbooks/to-my-husband-wife.png";
import ToMyBrideGroom from "../../assets/vowbooks/to-my-bride-groom.png";
import ToMyFuture from "../../assets/vowbooks/to-my-future.png";
import Vows from "../../assets/vowbooks/vows.png";
import LetterHusbandWife from "../../assets/vowbooks/letter-husband-wife.png";

import PersonalizedClassStyle from "../../assets/vowbooks/personalized/classic-style.png";
import PersonalizedElegantStyle from "../../assets/vowbooks/personalized/elegant-style.png";
import PersonalizedToMyBrideGroom from "../../assets/vowbooks/personalized/to-my-bride-groom.png";
import PersonalizedToMyHusbandWife from "../../assets/vowbooks/personalized/to-my-husband-wife.png";
import PersonalizedHisHer from "../../assets/vowbooks/personalized/his-her.png";
import PersonalizedToMyFuture from "../../assets/vowbooks/personalized/to-my-future.png";
import PersonalizedLetterHusbandWife from "../../assets/vowbooks/personalized/letter-husband-wife.png";
import PersonalizedVows from "../../assets/vowbooks/personalized/vows.png";

import { v4 as uuid } from "uuid";

const ribbonColor = [
  "ivory",
  "beige",
  "mocha",
  "black",
  "grey",
  "light grey",
  "lilac",
  "navy",
  "dusty blue",
  "burgundy",
  "blush",
];

const defaultSetOption = [
  {
    value: { set: "single (husband)", price: 20 },
    label: "single (husband) ($20.00)",
  },
  {
    value: { set: "single (wife)", price: 20 },
    label: "single (wife) ($20.00)",
  },
  {
    value: { set: "set (husband + wife)", price: 40 },
    label: "set (husband + wife) ($40.00)",
  },
  {
    value: { set: "set (x2 husband)", price: 40 },
    label: "set (x2 husband) ($40.00)",
  },
  {
    value: { set: "set (x2 wife)", price: 40 },
    label: "set (x2 wife) ($40.00)",
  },
];

const personalizedSetOption = [
  {
    value: { set: "single (1 booklet)", price: 24 },
    label: "single (1 booklet) ($24.00)",
  },
  {
    value: { set: "set (2 booklets)", price: 48 },
    label: "set (2 booklets) ($48.00)",
  },
];

const vowbooks = [
  {
    id: uuid(),
    collection: "vowbooks",
    name: "His and Her Vows, Modern Vow Books, Wedding Keepsake",
    img: HisHer,
    price: 20,
    defaultSetOption,
    ribbonColor,
    personalized: false,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "Vows To My Husband/Wife, Modern Vow Books, Wedding Keepsake",
    img: ToMyHusbandWife,
    price: 20,
    defaultSetOption,
    ribbonColor,
    personalized: false,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "To My Bride/Groom On Our Wedding Day, Modern Vow Books, Wedding Keepsake",
    img: ToMyBrideGroom,
    price: 20,
    defaultSetOption,
    ribbonColor,
    personalized: false,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "To My Future Husband/Wife On Our Wedding Day, Modern Vow Books, Wedding Keepsake",
    img: ToMyFuture,
    price: 20,
    defaultSetOption,
    ribbonColor,
    personalized: false,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "Vows, Modern Vow Books, Wedding Keepsake",
    img: Vows,
    price: 20,
    defaultSetOption,
    ribbonColor,
    personalized: false,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "A Letter To My Husband/Wife, Love Letters, Modern Vow Books, Wedding Keepsake",
    img: LetterHusbandWife,
    price: 20,
    defaultSetOption,
    ribbonColor,
    personalized: false,
  },
  // Personalized Vow Books
  {
    // named
    id: uuid(),
    collection: "vowbooks",
    name: "Personalized Vow Books, Modern Classic Style, Wedding Keepsake",
    img: PersonalizedClassStyle,
    price: 24,
    personalizedSetOption,
    ribbonColor,
    personalized: true,
    customName: true,
  },
  {
    // named
    id: uuid(),
    collection: "vowbooks",
    name: "Personalized Vow Books, Elegant Script Style, Wedding Keepsake",
    img: PersonalizedElegantStyle,
    price: 24,
    personalizedSetOption,
    ribbonColor,
    personalized: true,
    customName: true,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "Personalized To My Bride/Groom On Our Wedding Day, Modern Vow Books, Wedding Keepsake",
    img: PersonalizedToMyBrideGroom,
    price: 24,
    personalizedSetOption,
    ribbonColor,
    personalized: true,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "Personalized Vows To My Husband/Wife, Modern Minimalist Vow Books, Wedding Keepsake",
    img: PersonalizedToMyHusbandWife,
    price: 24,
    personalizedSetOption,
    ribbonColor,
    personalized: true,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "Personalized His and Her Vows, Modern Minimalist Vow Books, Wedding Keepsake",
    img: PersonalizedHisHer,
    price: 24,
    personalizedSetOption,
    ribbonColor,
    personalized: true,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "Personalized To My Future Husband/Wife On Our Wedding Day, Modern Minimalist Vow Books, Wedding Keepsake",
    img: PersonalizedToMyFuture,
    price: 24,
    personalizedSetOption,
    ribbonColor,
    personalized: true,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "Personalized A Letter To My Husband/Wife, Love Letters, Modern Minimalist, Wedding Keepsake",
    img: PersonalizedLetterHusbandWife,
    price: 24,
    personalizedSetOption,
    ribbonColor,
    personalized: true,
  },
  {
    id: uuid(),
    collection: "vowbooks",
    name: "Personalized Vows, Modern Minimalist Vow Books, Wedding Keepsake",
    img: PersonalizedVows,
    price: 24,
    personalizedSetOption,
    ribbonColor,
    personalized: true,
  },
];

export default vowbooks;
