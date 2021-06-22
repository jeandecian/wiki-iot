function colorGrade() {
  var gradeColors = {
    "A+": "green",
    A: "green",
    "A-": "green",
    B: "greenyellow",
    C: "yellow",
    D: "orange",
    F: "orangered",
  };
  for (elem of document.getElementsByClassName("grade")) {
    elem.style.backgroundColor = gradeColors[elem.innerText];
    elem.style.fontWeight = "bold";
    elem.style.textAlign = "center";
  }
  for (elem of document
    .getElementById("mw-subcategories")
    .getElementsByTagName("li")) {
    var classification = elem.firstChild.innerHTML.split(" ");
    var grade = classification[classification.length - 1];
    if (["A+", "A", "A-", "B", "C", "D", "F"].includes(grade)) {
      elem.style.backgroundColor = gradeColors[grade];
      elem.style.textAlign = "center";
      elem.firstChild.style.color = "black";
    }
  }
}

$(colorGrade);
