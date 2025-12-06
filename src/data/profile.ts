export interface ProfileData {
  name: string;
  title: string;
  description: string;
  email: string;
  cvPath: string;
  github: string;
  linkedin: string;
  skills: {
    title: string;
    primary: string;
    secondary: string;
  };
  whatIDo: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    location: string;
    email: string;
  };
}

export const profileData: ProfileData = {
  name: "Antonin Cezard",
  title: "Web & Mobile Developer",
  description: "React / React Native / TypeScript. Building fast, clean interfaces. Currently open to front-end or full-stack roles.",
  email: "acezard@gmail.com",
  cvPath: "cv.pdf",
   github: "https://github.com/acezard",
  linkedin: "https://www.linkedin.com/in/antonin-cezard/",
  skills: {
    title: "Skills Overview",
    primary: "React, React Native, TypeScript, Node.js",
    secondary: "Mobile UI / cross-platform, accessibility, performance tuning, clean architecture.",
  },
  whatIDo: {
    title: "What I Do",
    items: [
      "Front-end & mobile apps with React / React Native.",
      "Performance tuning and UI architecture.",
    ],
  },
  contact: {
    title: "Contact",
    location: "Based in Bordeaux, France · Available for remote roles.",
    email: "acezard@gmail.com",
  },
};
