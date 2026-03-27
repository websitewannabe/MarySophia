export interface OgPageConfig {
  title: string;
  meta: string;
  background: string;
}

const BG = {
  default: "/images/bluerosebackground.jpeg",
  services: "/images/servicesbackground.jpg",
  readings: "/images/angelbackground.jpeg",
  counseling: "/images/dovebackground.jpeg",
  school: "/images/dovebackground.jpeg",
  order: "/images/bluerosebackground.jpeg",
};

export const ogConfig: Record<string, OgPageConfig> = {
  home: {
    title: "Mary Sophia",
    meta: "Divine Feminine Channel & Spiritual Guide",
    background: BG.default,
  },
  "about-us": {
    title: "About Mary Sophia",
    meta: "Divine Feminine Teacher & Messenger",
    background: BG.default,
  },
  services: {
    title: "Sacred Services",
    meta: "Readings, Counseling & Wisdom Teachings",
    background: BG.services,
  },
  readings: {
    title: "Private Readings",
    meta: "Channeled Divine Guidance",
    background: BG.readings,
  },
  counseling: {
    title: "Spiritual Counseling",
    meta: "Sacred Healing & Support",
    background: BG.counseling,
  },
  school: {
    title: "School of Sophia",
    meta: "Divine Feminine Spiritual Formation",
    background: BG.school,
  },
  order: {
    title: "Order of the Blue Rose",
    meta: "Sacred Sisterhood & Divine Remembrance",
    background: BG.order,
  },
  "contact-us": {
    title: "Contact Mary Sophia",
    meta: "Connect & Begin Your Journey",
    background: BG.default,
  },
};

export function getOgConfig(slug: string): OgPageConfig {
  return (
    ogConfig[slug] ?? {
      title: "Mary Sophia",
      meta: "Divine Feminine Channel & Spiritual Guide",
      background: BG.default,
    }
  );
}
