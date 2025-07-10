// Hent "knappen" som skal aktivere noe
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", function () {
  // Hente elementet som skal bli synlig
  const navList = document.querySelector("#navList");
  console.log(navList);

  navList.classList.remove("hidden");
  navList.classList.add("navList");
});

const sunIcon = document.querySelector("#sunIcon");
console.log(sunIcon);

sunIcon.addEventListener("click", function () {
  const body = document.querySelector("body");

  body.classList.remove("light");
  body.classList.add("dark");
});

//
//

async function fetchCatFacts() {
  try {
    // All JS som skal skje i funksjonen
    const response = await fetch("https://catfact.ninja/facts");
    console.log(response);

    const data = await response.json();
    //console.log(data.data[4].fact);
    //console.log(data);

    return data;
} catch (error) {
  //feilmelding
  console.error(`${error}: Noe galt har skjedd.`)
}
}

async function displayAllFacts() {
  const catFacts = await fetchCatFacts();
  console.log(catFacts);

  const factList = document.querySelector("#factList");
  console.log(factList);

  catFacts.data.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item.fact;

  factList.appendChild(listItem);
  }) 
};

displayAllFacts();