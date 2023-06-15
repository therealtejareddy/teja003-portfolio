import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "ICRACS 2021",
    desc: "Official site of ICRACS 2021 conference organized by CSE department of Saveetha Engineering College",
    img: "/static/projects/icracs.png",
    link: "http://teja1435.pythonanywhere.com/",
    github: "https://github.com/teja003/icracs2021",
    tags: ["HTML", "CSS", "Python", "Django"],
  },
  {
    id: 1,
    title: "React Firebase Group Chat",
    desc: "Realtime Chat application built using latest technologies",
    img: "/static/projects/react-chat.png",
    link: "https://react-firebase-chat-teja.netlify.app/",
    github: "https://github.com/teja003/react-firebase-group-chat",
    tags: ["React", "CSS", "Javascript", "Firebase"],
  },
  {
    id: 2,
    title: "Netflix Clone",
    desc: "Netflix User Interface Clone application using API",
    img: "/static/projects/netflix-clone.png",
    link: "https://netflix-clone-10v3r.netlify.app/",
    github: "https://github.com/teja003/netflix-clone",
    tags: ["React", "CSS", "API"],
  },
  {
    id: 3,
    title: "EAIS 2022",
    desc: "Built website for 2022 IEEE International Conference on Evolving and Adaptive Intelligent Systems using NextJS",
    img: "/static/projects/eais.PNG",
    link: "https://eais-2022-pn5e1r78g-teja003.vercel.app/",
    github:"https://github.com/teja003/eais-2022",
    tags: ["React", "NextJS", "CSS"],
  },
  {
    id: 4,
    title: "Image Colorization using Deep Learning",
    desc: "Converts the black and white images to beautiful color images using the deep learning technology",
    img: "/static/projects/image-colorization.PNG",
    tags: ["Python"],
  },
  {
    id: 5,
    title: "Gender Identification Using Deep Learning",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/static/projects/gender-identification.PNG",
    github: "https://github.com/teja003/gender-classifier",
    tags: ["Python", "OpenCV"],
  },
  {
    id: 6,
    title: "Eloquent Quotes",
    desc: "Generates a random Inspiration Quotes by using the public API",
    img: "/static/projects/eloquent.PNG",
    link: "https://eloquent-quotes.netlify.app/",
    github: "https://github.com/teja003/random-quotes-generator-with-api",
    tags: ["Javascript", "HTML","CSS"],
  },
  {
    id: 7,
    title: "Fylo landing Page",
    desc: "Developed a simple landing page",
    img: "/static/projects/fylo-landing-page.PNG",
    link: "https://fylo-landing-page-html-css.netlify.app/",
    github: "https://github.com/teja003/first-html-css-landing-page",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 8,
    title: "Kryptonit - All your Web3 At One Place for Polygon",
    desc: "Worlds first web3 decentralised application introduced portfolio tracking includes both tokens and NFT, swapping protocol to swap assets, fait onramp, transaction history viewer and transfers history viewer built on Polygon.",
    img: "/static/projects/kryptonit.PNG",
    link: "https://kryptonit.vercel.app/",
    github: "https://github.com/teja003/kryptonit",
    tags: ["HTML", "CSS", "Javascript", "Svelte", "Sveltekit", "Tailwind"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
