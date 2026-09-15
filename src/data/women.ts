import leila from "@/assets/leila-hormozi.jpg";
import christina from "@/assets/christina-koch.jpg";
import riyam from "@/assets/riyam-ojaimi.jpg";
import codie from "@/assets/codie-sanchez.jpg";
import judit from "@/assets/judit-polgar.jpg";
import eileen from "@/assets/eileen-gu.jpg";
import type { Woman } from "@/components/WomanSection";

export type { Woman };

export const women: Woman[] = [
  {
    name: "Leila Hormozi",
    image: leila,
    quote:
      "Life becomes 100x better when you stop letting your mood dictate your behavior and start doing what you committed to doing.",
    category: "Discipline",
    chips: ["Discipline", "Ownership", "Consistency"],
    index: "01",
    total: "06",
  },
  {
    name: "Christina Koch",
    image: christina,
    quote:
      "Always do the things that might even scare you. When you achieve them, you learn the most about yourself and bring the most back to the world.",
    category: "Courage",
    chips: ["Courage", "Curiosity"],
    index: "02",
    total: "06",
  },
  {
    name: "Riyam Ojaimi",
    image: riyam,
    quote:
      "You need to realize that people's limitation is their problem, and you decide that it either makes you or breaks you — and I hope you decide it makes you.",
    category: "Resilience",
    chips: ["Resilience", "Voice", "Conviction"],
    index: "03",
    total: "06",
  },
  {
    name: "Codie Sanchez",
    image: codie,
    quote:
      "Real wealth is simplicity. Most people spend their lives chasing freedom, then build a life that makes freedom impossible.",
    category: "Independence",
    chips: ["Leadership", "Clarity"],
    index: "04",
    total: "06",
  },
  {
    name: "Judit Polgár",
    image: judit,
    quote:
      "You can never win by playing it safe. Take risks and think outside the box.",
    category: "Risk",
    chips: ["Risk", "Genius", "Strategy"],
    imagePosition: "50% 22%",
    index: "05",
    total: "06",
  },
  {
    name: "Eileen Gu",
    image: eileen,
    quote:
      "You can control what you think. You can control how you think, and therefore, you can control who you are. And especially as a young person, I'm 22, so with neuroplasticity on my side, I can literally become exactly who I want to be. How cool is that? How empowering is that?",
    category: "Self-Mastery",
    chips: ["Mindset", "Potential", "Self-Mastery"],
    imagePosition: "50% 35%",
    index: "06",
    total: "06",
  },
];
