const loadPage = (() => {
  console.log("This is page load!");

  const contentElement = document.querySelector("#content");

  const headerElement = document.createElement("header");

  headerElement.innerHTML = '<div>Hello World!<div>'

  contentElement.appendChild(headerElement);
})();

export { loadPage };
