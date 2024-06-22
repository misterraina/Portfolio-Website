const projectsTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  <span class="text-sky-400 font-medium">Projects</span>
  <br />
  1. 
  <a
    class="text-emerald-400 cursor-pointer"
    href="https://i-read-books-6jqm8zddd-ayush-rainas-projects.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    I-Read-Books
  </a> 
  - Full stack project - React Node.js Express and Postgresql, Please Visit
  <br />
  2. 
  <a
    class="text-emerald-400 cursor-pointer"
    href="https://react.app.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    React-To-Do app
  </a> 
  - To-Do-App using React.js with Sign.in Log.in and connected to DataBase
  <br />
  3. 
  <a
    class="text-emerald-400 cursor-pointer"
    href="https://github.com/Deveploment-Testing-ENV/Application-V1.git"
    target="_blank"
    rel="noreferrer"
  >
    Streaming Platform
  </a> 
  - Me and my DevOps friends are planning to complete this as a project
  <br />
  4. 
  <a
    class="text-emerald-400 cursor-pointer"
    href="https://github.com/misterraina/HandyHub.git"
    target="_blank"
    rel="noreferrer"
  >
    HandyHub
  </a> 
  - A Full-Stack website for local service provider as my personal project
  <br />
  <p class="mt-2">
    Type &quot;<span class="text-cyan">pr projcetNumber</span>&quot; or
    &quot;<span class="text-cyan">project projcetNumber</span>
    &quot; to view project details.
    <br />
    Example: &quot;<span class="text-cyan">pr 1</span>&quot;
  </p>
`;

  return parentDiv;
};

export default projectsTemplate;
