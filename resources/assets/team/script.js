function populateTeam() {
  var row = document.getElementById("team");

  [
    {
      picture: "https://via.placeholder.com/150",
      name: "Lorem ipsum",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      linkedin: "https://www.linkedin.com/",
    },
  ].forEach((member) => {
    var col = document.createElement("div");
    col.setAttribute("class", "col-4");

    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.width = "18rem";

    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", member.picture);
    img.setAttribute("alt", member.name);
    card.appendChild(img);

    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    var h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    h5.innerHTML = member.name;
    cardBody.appendChild(h5);

    var p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerHTML = member.title;
    cardBody.appendChild(p);

    var linkedin = document.createElement("a");
    linkedin.setAttribute("href", member.linkedin);
    linkedin.setAttribute("class", "btn btn-primary");
    linkedin.innerHTML = "<span class='bi bi-linkedin'></span>";
    cardBody.appendChild(linkedin);

    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });
}

window.onload = populateTeam;
