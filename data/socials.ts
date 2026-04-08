export interface Social {
  platform: string;
  url: string;
  username: string;
  icon: string;
  color: string;
  description: string;
}

export const socials: Social[] = [
  {
    platform: "GitHub",
    url: "https://github.com/NinjaAadi",
    username: "@NinjaAadi",
    icon: "Github",
    color: "#e2e8f0",
    description: "Open source work & side projects",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/aaditya-pal-7903",
    username: "Aaditya Pal",
    icon: "Linkedin",
    color: "#0077b5",
    description: "Professional network & updates",
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/aaditya-pal",
    username: "aaditya-pal",
    icon: "Code2",
    color: "#ffa116",
    description: "Competitive programming — Knight (Rating 2048)",
  },
  {
    platform: "CodeChef",
    url: "https://codechef.com/users/ninjaaadi7903",
    username: "ninjaaadi7903",
    icon: "Trophy",
    color: "#5b4638",
    description: "Competitive programming — 5-star (Rating 2077)",
  },
  {
    platform: "Email",
    url: "mailto:aadityapal.info@gmail.com",
    username: "aadityapal.info@gmail.com",
    icon: "Mail",
    color: "#6366f1",
    description: "Best way to reach me",
  },
];
