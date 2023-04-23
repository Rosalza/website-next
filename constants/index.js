import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "./../assets";
import language from "./language";

export const navLinks = [
  {
    id: "home",
    titleDE: language.de.navbar.home,
    titleEN: language.en.navbar.home,
  },
  {
    id: "about",
    titleDE: language.de.navbar.about,
    titleEN: language.en.navbar.about,
  },
  {
    id: "contact",
    titleDE: language.de.navbar.book,
    titleEN: language.en.navbar.book,
  },
  {
    id: "form",
    titleDE: language.de.navbar.contact,
    titleEN: language.en.navbar.contact,
  },
];

export const features = [
  {
    id: "feature-1",
    icon: "Star.svg",
    titleDE: language.de.about.features.first.headline,
    contentDE: language.de.about.features.first.text,
    titleEN: language.en.about.features.first.headline,
    contentEN: language.en.about.features.first.text,
  },
  {
    id: "feature-2",
    icon: "Shield.svg",
    titleDE: language.de.about.features.second.headline,
    contentDE: language.de.about.features.second.text,
    titleEN: language.en.about.features.second.headline,
    contentEN: language.en.about.features.second.text,
  },
  {
    id: "feature-3",
    icon: "Send.svg",
    titleDE: language.de.about.features.third.headline,
    contentDE: language.de.about.features.third.text,
    titleEN: language.en.about.features.third.headline,
    contentEN: language.en.about.features.third.text,
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    titleDE: language.de.footer.linktree1Head,
    titleEN: language.en.footer.linktree1Head,
    links: [
      {
        name: "Impressum",
        link: "/imprint",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: "instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: "facebook.svg",
    link: "https://www.facebook.com/",
  }
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];