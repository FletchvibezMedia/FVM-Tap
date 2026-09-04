export type ClientProfile = {
  slug: string;
  businessName: string;
  eyebrow: string;
  headline: string;
  message: string;
  logo: string;
  logoAlt: string;
  colors: { primary: string; secondary: string; glow: string; surface: string };
  reviewUrl: string;
  website?: string;
  phone?: string;
  location?: string;
  social?: string;
  socialLabel?: string;
  demo?: boolean;
};

export const clients: Record<string, ClientProfile> = {
  "detail-masters": {
    slug: "detail-masters",
    businessName: "Detail Masters",
    eyebrow: "Thanks for trusting our team",
    headline: "Love the result?",
    message: "A quick review helps other Orlando drivers find detailing they can trust.",
    logo: "/assets/detail-masters.png",
    logoAlt: "Detail Masters logo",
    colors: { primary: "#ed1c24", secondary: "#a80910", glow: "237, 28, 36", surface: "#000000" },
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJqZronx1l54gR-VfjfDZfE-s",
    website: "https://www.detailmastersfla.com",
    phone: "+14078640237",
    location: "185 S Semoran Blvd · Orlando, Florida"
  },
  aquaflow: {
    slug: "aquaflow",
    businessName: "AquaFlow Water Solutions",
    eyebrow: "Thank you for choosing local",
    headline: "How did we do?",
    message: "Your feedback helps neighbors choose with confidence and helps our team continue delivering dependable water solutions.",
    logo: "/assets/aquaflow.jpg",
    logoAlt: "AquaFlow Water Solutions logo",
    colors: { primary: "#24b9f2", secondary: "#0878bd", glow: "36, 185, 242", surface: "#071a27" },
    reviewUrl: "#demo",
    website: "https://example.com",
    phone: "+14075550184",
    location: "Central Florida",
    demo: true
  },
  "drl-suns": {
    slug: "drl-suns",
    businessName: "DRL Suns",
    eyebrow: "You showed up. Now tell us how we did.",
    headline: "Leave the Suns some love.",
    message: "A quick review helps our program grow, supports our athletes and lets future families know what the DRL Suns experience is all about.",
    logo: "/assets/drl-suns.jpg",
    logoAlt: "DRL Suns basketball logo",
    colors: { primary: "#ff7818", secondary: "#ffac2f", glow: "255, 120, 24", surface: "#1b0c04" },
    reviewUrl: "#demo",
    social: "https://instagram.com",
    socialLabel: "Follow the Suns",
    location: "Orlando, Florida",
    demo: true
  }
};
