const aboutTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `Hello, my name is <span class="text-tahiti">Ayush Raina</span>. I am an Engineer and Programmer specializing in <span class="text-tahiti">MERN/PERN</span> stack development. I am passionate about creating unique web applications and strive to write reusable, clean code. I have a strong desire to continuously learn and deepen my understanding of technology. Currently seeking professional experience through an internship where I can apply my skills effectively.`;
  return parentDiv;
};
export default aboutTemplate;
