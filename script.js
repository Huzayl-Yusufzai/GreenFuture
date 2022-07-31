var option1;
var option2;
var option3;
var option4;
var option5;
var contgreen = 0;
var contyellow = 0;
var contred = 0;

function clearDiv(elementID) {
  document.getElementById(elementID).innerHTML = "";
  contgreen = 0;
  contyellow = 0;
  contred = 0;
}

function onClick() {
  option1 = document.getElementById("quan").value;
  console.log(option1);
  option2 = document.getElementById("type").value;
  option3 = document.getElementById("long").value;
  option4 = document.getElementById("How").value;
  option5 = document.getElementById("many").value;

  if (
    option1 == "-- No selection --" ||
    option2 == "-- No selection --" ||
    option3 == "-- No selection --" ||
    option4 == "-- No selection --" ||
    option5 == "-- No selection --"
  ) {
    alert(
      "One or more of the sections has not been filled. Please select an option for each question before proceding"
    );
  } else {
    sitch1();
    sitch2();
    sitch3();
    sitch4();
  }
}

function sitch1() {
  if (
    option1 == "Small" &&
    option2 == "Land" &&
    option3 == "Less than half a day" &&
    option4 == "In person" &&
    option5 == "Just me"
  ) {
    contgreen = contgreen + 1;

    document.getElementById("greenNum").innerHTML = `- ${contgreen}`;

    const newDiv = document.createElement("div");

    newDiv.id = "TheDiv";

    // and give it some content
    const newContent = document.createTextNode(
      "Goal: Collect 20 pieces of trash from around your nieghborhood and place them in their proper bins"
    );

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.querySelector("#goalMaster").appendChild(newDiv);
  }
}

function sitch2() {
  if (
    option1 == "Small" &&
    option2 == "Air" &&
    option3 == "Less than half a day" &&
    option4 == "Via the internet" &&
    option5 == "Just me"
  ) {
    contgreen = contgreen + 1;

    document.getElementById("greenNum").innerHTML = `- ${contgreen}`;

    const newDiv = document.createElement("div");

    newDiv.id = "TheDiv";

    // and give it some content
    const newContent = document.createTextNode(
      "Goal: Do some research online about the effects of fossil fuels on the atmosphere and tell a friend"
    );

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.querySelector("#goalMaster").appendChild(newDiv);
  }
}

function sitch3() {
  if (
    option1 == "Medium" &&
    option2 == "Sea" &&
    option3 == "Around 1 day" &&
    option4 == "In person" &&
    option5 == "A few people"
  ) {
    contyellow = contyellow + 1;

    document.getElementById("yellowNum").innerHTML = `- ${contyellow}`;

    const newDiv = document.createElement("div");

    newDiv.id = "TheDivMed";

    // and give it some content
    const newContent = document.createTextNode(
      "Goal: Put up posters around your town which has information on how sea life benefits us humans"
    );

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.querySelector("#goalMaster").appendChild(newDiv);
  }
}

function sitch4() {
  if (
    option1 == "Large" &&
    option2 == "Land" &&
    option3 == "More than 1 day" &&
    option4 == "In person" &&
    option5 == "A large group of people"
  ) {
    contred = contred + 1;

    document.getElementById("redNum").innerHTML = `- ${contred}`;

    const newDiv = document.createElement("div");

    newDiv.id = "TheDivLar";

    // and give it some content
    const newContent = document.createTextNode(
      "Goal: Oraganize a protest/large meet up in your province/state in order to speak out against deforestation and habitat loss"
    );

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.querySelector("#goalMaster").appendChild(newDiv);
  }
}

function newFunction() {
  document.querySelector("#btn1").addEventListener("click", () => {
    var anchor = document.createElement("a");
    anchor.href = "https://www.google.com";
    anchor.innerText = "Huzayl";
    console.log(anchor);
    document.querySelector("#para").appendChild(anchor);
  });
}
