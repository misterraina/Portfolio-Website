const allDetails = [
  {
    title: "I-Read-Books",
    description:
      "It&apos;s my personal website. After I complete or read a book, i post notes there also i put ratings, reviews and other other details.",
    technology: [
      "ReactJS",
      "Axios",
      "TailwindCSS",
      // "Sass",
      // "Recoil",
      // "Yup",
      "Postgresql",
    ],
    liveLink: "https://i-read-books-6jqm8zddd-ayush-rainas-projects.vercel.app/",
    github: "https://github.com/misterraina/I-Read-Books.git",
  },
  {
    title: "React-To-Do-App",
    description:
      "This is a app to-do list with checkbox. Login and SignUp details are provided please visit.",
    technology: [
      "ReactJS",
      // "React Hook Form",
      // "React Bootstrap",
      // "Sass",
      // "Framer Motion",
      "PostgreSql"
    ],
    liveLink: "https://cedsejdsx.vercel.app/",
    github: "https://github.com/fokauasel/cedex",
  },
  {
    title: "Streaming Platform",
    description: "This is a Video and Streaming platform we decided to make from scratch to undetstand the technologies from deep.",
    technology: ["HTML", "JavaScript", "Azure"],
    liveLink: "https://mobile-galleries.web.app/",
    github: "https://github.com/Deveploment-Testing-ENV/Application-V1.git",
  },
  {
    title: "Handy-Hub",
    description:
      "HandyHub is the project I've chosen to enhance my full-stack journey, aiming to bolster my skills and confidence in web development. It bridges gaps between local service providers and users, offering a streamlined platform connecting skilled professionals with individuals needing services in the community",
    technology: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "Backend",
      "Bootstrap",
      "Tailwind Css"
    ],
    liveLink: "https://bdphotowala.web.app/",
    github: "https://github.com/misterraina/HandyHub.git",
  },
];

const projectDetailsTemplate = (index: number) => {
  index--;
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  <span class="text-emerald-400 font-medium">${allDetails[index].title}</span>
  <br />
  <span>${allDetails[index].description}</span>
  <br />
  <span>Technology:</span>
  ${allDetails[index].technology?.map(
    (data) => `<span class="text-indigo-400"> ${data}</span>`
  )}.
  <br/>
  <a
    href="${allDetails[index].liveLink}"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 cursor-pointer"
  >
    Live Link
  </a>
  ,
  <a
    href="${allDetails[index].github}"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 cursor-pointer"
  > Github
  </a>
    `;
  return parentDiv;
};
export default projectDetailsTemplate;
