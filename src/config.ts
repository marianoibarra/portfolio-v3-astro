const config = {
  URL: "https://marianoibarra.com",
  SOCIAL_MEDIA: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/marianoibarra",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/marianoibarra",
    },
    {
      name: "Email",
      icon: "email",
      url: "marianoibarratesta@outlook.com",
      copy: true,
    },
  ],
  NAV_LINKS: ["#about", "#jobs", "#projects"],
  SKILLS: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Astro",
    "React",
    "React Native",
    "Angular",
    "Next.js",
    "Gatsby",
    "Node.js",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
  ],
  SECTION_HEIGHT_RATIO: 0.35,
  PROJECTS_LIMIT: 3,
  COLORS: {
    green: "#64ffda",
    navy: "#0f172a",
    darkNavy: "#020c1b",
  },
};

export const { SOCIAL_MEDIA, NAV_LINKS, SKILLS, SECTION_HEIGHT_RATIO, PROJECTS_LIMIT, COLORS, URL } = config;
