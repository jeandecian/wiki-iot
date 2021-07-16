function removeClassificationCategories() {
  var grades = ["A+", "A", "A-", "B", "C", "D", "F"];
  var div = document.getElementById("categories-main");
  var list = div.childNodes[1].firstChild.childNodes;
  for (item of list) {
    if (item.childNodes.length) {
      var classification = item.firstChild.innerHTML.split(" ");
      if (grades.includes(classification[classification.length - 1])) {
        item.remove();
      } else {
        item.firstChild.innerHTML = item.firstChild.innerHTML.replace(
          "Category:",
          ""
        );
        if (["Classification", "Product"].includes(item.firstChild.innerHTML)) {
          item.remove();
        }
      }
    }
  }
}

$(removeClassificationCategories);
