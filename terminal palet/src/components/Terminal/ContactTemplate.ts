const contactTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  Email: 
  <a href="mailto:ayushraina617@gmail.com" class="text-emerald-400">
    ayushraina617@gmail.com
  </a>
  <br />
  Mobile: 
  <a href="tel:+917780840915" class="text-emerald-400">
    +917780840915
  </a>
  <br />
  `;
  return parentDiv;
};
export default contactTemplate;
