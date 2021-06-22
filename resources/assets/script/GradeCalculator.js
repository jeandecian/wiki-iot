function getCategories() {
  return [
    [
      "device_known_hardware_tampering",
      "device_known_vulnerabilities",
      "device_prior_attacks",
      "device_updatability",
    ],
    [
      "system_authentication_with_other_systems",
      "system_communications",
      "system_storage",
    ],
    [
      "user_authentication_account_management",
      "user_authentication_authentication",
      "user_authentication_brute-force_protection",
      "user_authentication_event_logging",
      "user_authentication_passwords",
    ],
  ];
}

function getCritera() {
  return [
    {
      category: "Device",
      name: "Known hardware tampering",
      values: ["None", "Rare", "Very common"],
    },
    {
      category: "Device",
      name: "Known vulnerabilities",
      values: ["None", "Rare", "Very common"],
    },
    {
      category: "Device",
      name: "Prior attacks",
      values: ["None", "Rare", "Very common"],
    },
    {
      category: "Device",
      name: "Updatability",
      values: ["Very common", "Rare", "None"],
    },
    {
      category: "System",
      name: "Authentication with other systems",
      values: ["Full", "Partial", "No"],
    },
    {
      category: "System",
      name: "Communications",
      values: [
        "Encrypted with up-to-date encryption",
        "Encrypted with obsolete encryption",
        "No encryption",
      ],
    },
    {
      category: "System",
      name: "Storage",
      values: [
        "Encrypted with up-to-date encryption",
        "Encrypted with obsolete encryption",
        "No encryption",
      ],
    },
    {
      category: "User Authentication",
      name: "Account management",
      values: ["Full", "Basic", "Absent"],
    },
    {
      category: "User Authentication",
      name: "Authentication",
      values: ["Secure", "Basic", "Absent"],
    },
    {
      category: "User Authentication",
      name: "Brute-force protection",
      values: ["Exist", "Basic", "Absent"],
    },
    {
      category: "User Authentication",
      name: "Event logging",
      values: ["Access event logged", "Partial logging", "Absent"],
    },
    {
      category: "User Authentication",
      name: "Passwords",
      values: [
        "Require change after setup with complexity requirements",
        "Require change after setup",
        "Default common easy to guess",
      ],
    },
  ];
}

function trim(text) {
  return text.toLowerCase().replace(/\s/gm, "_");
}

function selectGrade(gras) {
  return ["A+", "A", "A-", "B", "C", "D", "F"][gras - 3];
}

function calculateGrade() {
  var categories = getCategories();

  var gras = 0.0;
  categories.forEach((category) => {
    var cats = 0.0;
    category.forEach((criterion) => {
      cats += parseInt($('input[name="' + criterion + '"]:checked').val());
    });
    gras += Math.ceil(cats / category.length);
  });

  alert("Grade " + selectGrade(gras));
}

function createForm() {
  var criteria = getCritera();

  var div = document.getElementById("gradeCalculator");
  var form = document.createElement("form");
  form.setAttribute("id", "gradeCalculatorForm");
  form.setAttribute("onsubmit", "return false");
  var table = document.createElement("table");

  var rowHeader = document.createElement("tr");

  ["Category", "Criterion", 1, 2, 3].forEach((col) => {
    header = document.createElement("th");
    header.innerText = col;

    rowHeader.appendChild(header);
  });

  table.appendChild(rowHeader);

  criteria.forEach((criterion) => {
    var rowData = document.createElement("tr");

    var data = document.createElement("th");
    data.innerText = criterion.category;
    rowData.appendChild(data);

    var data = document.createElement("th");
    data.innerText = criterion.name;
    rowData.appendChild(data);

    criterion.values.forEach((value, index) => {
      var data = document.createElement("td");

      var formattedName = trim(criterion.category).concat(
        "_",
        trim(criterion.name)
      );

      var inputId = formattedName.concat("_", trim(value));

      var input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("id", inputId);
      input.setAttribute("name", formattedName);
      input.setAttribute("value", index + 1);
      data.appendChild(input);

      var label = document.createElement("label");
      label.setAttribute("for", inputId);
      label.innerText = value;
      data.appendChild(label);

      rowData.appendChild(data);
    });

    table.appendChild(rowData);
  });

  form.appendChild(table);

  var button = document.createElement("button");
  button.setAttribute("onclick", "calculateGrade()");
  button.innerText = "Calculate Grade";
  form.appendChild(button);

  div.appendChild(form);
}

function createStyle() {
  var style = document.createElement("style");
  style.innerHTML = `
      #gradeCalculator table, #gradeCalculator th, #gradeCalculator td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      #gradeCalculator th, #gradeCalculator td {
        padding: 15px;
        text-align: center;
      }
      #gradeCalculator th {
        background-color: lightgray;
      }
      #gradeCalculator label {
        margin-left: 5px;
      }
      #gradeCalculator button {
        background-color: #4CAF50;
        border: 3px solid #4CAF50;
        border-radius: 8px;
        color: white;
        font-size: 20px;
        height: 50px;
        margin-top: 10px;
        transition-duration: 0.4s;
        width: 100%;
      }
      #gradeCalculator button:hover {
        background-color: white;
        color: black;
      }
    `;
  document.head.appendChild(style);
}

$(createStyle);
$(createForm);
