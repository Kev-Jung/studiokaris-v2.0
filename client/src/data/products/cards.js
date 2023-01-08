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
    {
      value: { set: `single (${him})`, price: 6 },
      label: `single (${him}) ($6.00)`,
    },
    {
      value: { set: `single (${her})`, price: 6 },
      label: `single (${her}) ($6.00)`,
    },
    {
      value: { set: `set (${him} + ${her})`, price: 12 },
      label: `set (${him} + ${her}) ($12.00)`,
    },
    {
      value: { set: `set (x2 ${him})`, price: 12 },
      label: `set (x2 ${him}) ($12.00)`,
    },
    {
      value: { set: `set (x2 ${her})`, price: 12 },
      label: `set (x2 ${her}) ($12.00)`,
    },
  ];
};

const packSize = (minBulkPrice, maxBulkPrice) => {
  return [
    {
      value: { set: "20", price: minBulkPrice },
      label: `20 ($${minBulkPrice})`,
    },
    {
      value: { set: "100", price: maxBulkPrice },
      label: `100 ($${maxBulkPrice})`,
    },
  ];
};

const envelopeColor = [
  "white",
  "pale grey",
  "beige",
  "black",
  "blush",
  "dusty rose",
  "dusty blue",
  "dusty green",
  "tan",
  "amethyst",
  "burgundy",
  "navy",
];

const cards = [
  // Couple
  {
    id: uuid(),
    type: "couple",
    collection: "cards",
    name: "A Letter To My Husband/Wife, Wedding Day Of Cards",
    img: CoupleLetterHusbandWife,
    price: 6,
    defaultSetOption: defaultSetOption("wife", "husband"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "couple",
    collection: "cards",
    name: "To My Future Husband/Wife On Our Wedding Day Cards",
    img: CoupleToMyFuture,
    price: 6,
    defaultSetOption: defaultSetOption("wife", "husband"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "couple",
    collection: "cards",
    name: "To My Bride/Groom On Our Wedding Day Cards",
    img: CoupleToMyBrideGroom,
    price: 6,
    defaultSetOption: defaultSetOption("groom", "bride"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "couple",
    collection: "cards",
    name: "A Letter To My Bride/Groom, Wedding Cards",
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
    collection: "cards",
    name: "To My Grandma and Grandpa On My Wedding Day Cards",
    img: FamilyGrandmaGrandpa,
    price: 6,
    defaultSetOption: defaultSetOption("grandpa", "grandma"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Grandparents On My Wedding Day Cards",
    img: FamilyGrandparents,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Brother On My Wedding Day Cards",
    img: FamilyBrother,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Parents On My Wedding Day Cards",
    img: FamilyParents,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Mother-In-Law and Father-In-Law On My Wedding Day Cards",
    img: FamilyMotherFatherInLaw,
    price: 6,
    defaultSetOption: defaultSetOption("father", "mother"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Step-Dad On My Wedding Day Cards",
    img: FamilyStepDad,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Parents-In-Law On My Wedding Day Cards",
    img: FamilyParentsInLaw,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Mom and Dad On My Wedding Day Cards",
    img: FamilyMomDad,
    price: 6,
    defaultSetOption: defaultSetOption("dad", "mom"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Sister On My Wedding Day Cards",
    img: FamilySister,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Brother-In-Law On My Wedding Day Cards",
    img: FamilyBrotherinLaw,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Aunt and Uncle On My Wedding Day Cards",
    img: FamilyAuntUncle,
    price: 6,
    defaultSetOption: defaultSetOption("uncle", "aunt"),
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "family",
    collection: "cards",
    name: "To My Stepmom On My Wedding Day Cards",
    img: FamilyStepMom,
    price: 6,
    envelopeColor,
    personalized: false,
  },

  // Wedding
  {
    id: uuid(),
    type: "wedding",
    collection: "cards",
    name: "Will You Be Our Officiant, Proposal Card",
    img: WeddingOfficiant,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "wedding",
    collection: "cards",
    name: "Will You Be Our Usher, Proposal Card",
    img: WeddingUsher,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "wedding",
    collection: "cards",
    name: "Thank You For Being My Bridesmaid, Bridesman, Maid/Matron/ Man of Honor, Flower Girl, House Party, Wedding Card",
    img: WeddingThankYouBridesmaidSerif,
    price: 6,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "wedding",
    collection: "cards",
    name: "Thank You For Being My Bridesmaid, Bridesman, Maid/Matron/Man of Honor, Flower Girl, House Party, Wedding Card",
    img: WeddingBridesmaidClassic,
    price: 6,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "wedding",
    collection: "cards",
    name: "Personalized Will You Be My Bridesmaid, Bridesman, Maid/Matron/Man of Honor, Flower Girl, House Party, Proposal Card",
    img: WeddingPersonalizedBridesmaidSerif,
    price: 6,
    envelopeColor,
    personalized: true,
    customName: true,
  },
  {
    id: uuid(),
    type: "wedding",
    collection: "cards",
    name: "Will You Be My Bridesmaid, Bridesman, Maid/Matron/Man of Honor, Flower Girl, House Party, Proposal Card",
    img: WeddingBridesmaidSerif,
    price: 6,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "wedding",
    collection: "cards",
    name: "Personalized Will You Be My Bridesmaid, Bridesman, Maid/Matron/Man of Honor, Flower Girl, House Party, Proposal Card",
    img: WeddingPersonalizedBridesmaidClassic,
    price: 6,
    envelopeColor,
    personalized: true,
    customName: true,
  },

  // Thank You
  {
    id: uuid(),
    type: "thank you",
    collection: "cards",
    name: "Thank You Card",
    img: ThankYouClassic,
    price: 6,
    envelopeColor,
    personalized: false,
  },
  {
    id: uuid(),
    type: "thank you",
    collection: "cards",
    name: "Bulk Personalized Thank You Cards",
    img: ThankYouPersonalized,
    price: 100,
    envelopeColor,
    packSize: packSize(100, 300),
    personalized: true,
    bulk: true,
  },
  {
    id: uuid(),
    type: "thank you",
    collection: "cards",
    name: "Personalized Thank You Card",
    img: ThankYouPersonalized,
    price: 7,
    envelopeColor,
    personalized: true,
  },
  {
    id: uuid(),
    type: "thank you",
    collection: "cards",
    name: "Bulk Thank You Cards",
    img: ThankYouClassic,
    price: 90,
    envelopeColor,
    packSize: packSize(90, 280),
    personalized: false,
    bulk: true,
  },
];

export default cards;
