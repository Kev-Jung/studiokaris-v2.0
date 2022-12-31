import CoupleLetterHusbandWife from "../../assets/cards/couple/letter-husband-wife.png";
import CoupleToMyFuture from "../../assets/cards/couple/to-my-future.png";
import CoupleToMyBrideGroom from "../../assets/cards/couple/to-my-bride-groom.png";
import CoupleLetterBrideGroom from "../../assets/cards/couple/letter-bride-groom.png";

import FamilyGrandmaGrandpa from "../../assets/cards/family/grandma-grandpa.png";
import FamilyGrandparents from "../../assets/cards/family/grandparents.png";
import FamilyBrother from "../../assets/cards/family/brother.png";
import FamilyParents from "../../assets/cards/family/parents.png";
import FamilyMotherFatherInLaw from "../../assets/cards/family/mother-father-in-law.png";
import FamilyStepDad from "../../assets/cards/family/stepdad.png";
import FamilyParentsInLaw from "../../assets/cards/family/parents-in-law.png";
import FamilyMomDad from "../../assets/cards/family/mom-dad.png";
import FamilySister from "../../assets/cards/family/sister.png";
import FamilyBrotherinLaw from "../../assets/cards/family/brother-in-law.png";
import FamilyAuntUncle from "../../assets/cards/family/aunt-uncle.png";
import FamilyStepMom from "../../assets/cards/family/stepmom.png";

import WeddingBridesmaidClassic from "../../assets/cards/wedding/bridesmaid-classic.png";
import WeddingBridesmaidSerif from "../../assets/cards/wedding/bridesmaid-serif.png";
import WeddingOfficiant from "../../assets/cards/wedding/officiant.png";
import WeddingPersonalizedBridesmaidClassic from "../../assets/cards/wedding/personalized-bridesmaid-classic.png";
import WeddingPersonalizedBridesmaidSerif from "../../assets/cards/wedding/personalized-bridesmaid-serif.png";
import WeddingThankYouBridesmaidSerif from "../../assets/cards/wedding/thank-you-bridesmaid-serif.png";
import WeddingUsher from "../../assets/cards/wedding/usher.png";

import ThankYouClassic from "../../assets/cards/thank-you/thank-you-classic.png";
import ThankYouPersonalized from "../../assets/cards/thank-you/personalized-thank-you.png";

import { v4 as uuid } from "uuid";

const defaultSetOption = (her, him) => {
  return [
    `single (${him}) ($6.00)`,
    `single (${her}) ($6.00)`,
    `set (${him} + ${her}) ($12.00)`,
    `set (x2 ${him}) ($12.00)`,
    `set (x2 ${her}) ($12.00)`,
  ];
};

const packSize = (minBulkPrice, maxBulkPrice) => {
  return [`20 ($${minBulkPrice})`, `100 ($${maxBulkPrice})`];
};

const envelopeColor = [
  "white",
  "pale grey",
  "beige",
  "black",
  "blush",
  "dusty blue",
  "amethyst",
  "navy",
];

const cards = [
  // Couple
  {
    id: uuid(),
    type: "couple",
    name: "A Letter To My Husband/Wife, Wedding Day Of Cards, Classic Collection",
    img: CoupleLetterHusbandWife,
    price: 6,
    defaultSetOption: defaultSetOption("wife", "husband"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "couple",
    name: "To My Future Husband/Wife On Our Wedding Day Cards, Classic Collection",
    img: CoupleToMyFuture,
    price: 6,
    defaultSetOption: defaultSetOption("wife", "husband"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "couple",
    name: "To My Bride/Groom On Our Wedding Day Cards, Classic Collection",
    img: CoupleToMyBrideGroom,
    price: 6,
    defaultSetOption: defaultSetOption("groom", "bride"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "couple",
    name: "A Letter To My Bride/Groom, Wedding Cards, Classic Collection",
    img: CoupleLetterBrideGroom,
    price: 6,
    defaultSetOption: defaultSetOption("groom", "bride"),
    envelopeColor,
    personalized: false,
  },
  // Family
  {
    id: uuid(),
    type: "family",
    name: "To My Grandma and Grandpa On My Wedding Day Cards, Classic Collection",
    img: FamilyGrandmaGrandpa,
    price: 6,
    defaultSetOption: defaultSetOption("grandpa", "grandma"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Grandparents On My Wedding Day Cards, Classic Collection",
    img: FamilyGrandparents,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Brother On My Wedding Day Cards, Classic Collection",
    img: FamilyBrother,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Parents On My Wedding Day Cards, Classic Collection",
    img: FamilyParents,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Mother-In-Law and Father-In-Law On My Wedding Day Cards, Classic Collection",
    img: FamilyMotherFatherInLaw,
    price: 6,
    defaultSetOption: defaultSetOption("father", "mother"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Step-Dad On My Wedding Day Cards, Classic Collection",
    img: FamilyStepDad,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Parents-In-Law On My Wedding Day Cards, Classic Collection",
    img: FamilyParentsInLaw,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Mom and Dad On My Wedding Day Cards, Classic Collection",
    img: FamilyMomDad,
    price: 6,
    defaultSetOption: defaultSetOption("dad", "mom"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Sister On My Wedding Day Cards, Classic Collection",
    img: FamilySister,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Brother-In-Law On My Wedding Day Cards, Classic Collection",
    img: FamilyBrotherinLaw,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Aunt and Uncle On My Wedding Day Cards, Classic Collection",
    img: FamilyAuntUncle,
    price: 6,
    defaultSetOption: defaultSetOption("uncle", "aunt"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    name: "To My Stepmom On My Wedding Day Cards, Classic Collection",
    img: FamilyStepMom,
    price: 6,
    envelopeColor,
    personalized: false,
  },

  // Wedding
  {
    id: uuid(),
    type: "wedding",
    name: "Will You Be Our Officiant, Proposal Card, Modern Collection",
    img: WeddingOfficiant,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "wedding",
    name: "Will You Be Our Usher, Proposal Card, Modern Collection",
    img: WeddingUsher,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "wedding",
    name: "Thank You For Being My Bridesmaid, Bridesman, Maid/Matron/ Man of Honor, Flower Girl, House Party, Wedding Card, Modern Collection",
    img: WeddingThankYouBridesmaidSerif,
    price: 6,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "wedding",
    name: "Thank You For Being My Bridesmaid, Bridesman, Maid/Matron/Man of Honor, Flower Girl, House Party, Wedding Card, Classic Collection",
    img: WeddingBridesmaidClassic,
    price: 6,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "wedding",
    name: "Personalized Will You Be My Bridesmaid, Bridesman, Maid/Matron/Man of Honor, Flower Girl, House Party, Proposal Card, Modern Collection",
    img: WeddingPersonalizedBridesmaidSerif,
    price: 6,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "wedding",
    name: "Will You Be My Bridesmaid, Bridesman, Maid/Matron/Man of Honor, Flower Girl, House Party, Proposal Card, Modern Collection",
    img: WeddingBridesmaidSerif,
    price: 6,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "wedding",
    name: "Personalized Will You Be My Bridesmaid, Bridesman, Maid/Matron/Man of Honor, Flower Girl, House Party, Proposal Card, Classic Collection",
    img: WeddingPersonalizedBridesmaidClassic,
    price: 6,
    envelopeColor,
    personalized: true,
  },

  // Thank You
  {
    id: uuid(),
    type: "thank you",
    name: "Thank You Card, Classic Collection",
    img: ThankYouClassic,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "thank you",
    name: "Bulk Personalized Thank You Cards, Classic Collection",
    img: ThankYouPersonalized,
    price: 100,
    envelopeColor,
    packSize: packSize(100, 300),
    personalized: true,
  },
  {
    id: uuid(),
    type: "thank you",
    name: "Personalized Thank You Card, Classic Collection",
    img: ThankYouPersonalized,
    price: 7,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "thank you",
    name: "Bulk Thank You Cards, Classic Collection",
    img: ThankYouClassic,
    price: 90,
    envelopeColor,
    packSize: packSize(90, 280),
    personalized: false,
  },
];

export default cards;
