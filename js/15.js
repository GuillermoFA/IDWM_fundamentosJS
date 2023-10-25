const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const nuevoArray = tecnologias.map(tech => {
  if (tech === "HTML") {
    return "GraphQL";
  } else {
    return tech;
  }
});

const nuevoArray2 = tecnologias.filter((tech) => tech !== "React");

// console.table(nuevoArray);
console.table(nuevoArray2)
