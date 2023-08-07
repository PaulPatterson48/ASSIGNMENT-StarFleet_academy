var starship = [
  {
    id:1,
    title: "enterprise",
    imageUrl: "./image/EnterpriseA.png",
    shipClass: "Constitution-class",
    message:"Congrats, you're on the Enterprise!",
    cadet: "",
    onboard: Boolean 
  },
  {
    id: 2,
    title:"voyager",
    imageUrl: "./image/Voyager.png",
    shipClass: "Intrepid-class",
    message:"Congrats, you're on the Voyager" ,
    cadet: "",
    onboard: boolean
  },
  {
    id: 3,
    title: "excalibur",
    imageUrl: "./image/USSExcalibur.png",
    shipClass: "Ambassador-class",
    message:"Congrats, you're Excalibur"  ,
    cadet: "",
    onboard: boolean 
  },
  {
    id: 4,
    title: "excelsior",
    imageUrl: "./image/USSExcelsior.png",
    shipClass: "Excelsior-class",
    message:"Congrats, you're on Excelsior!" ,
    cadet: "",
    onboard: boolean
  },
  {
    id:5,
    title: "birdofprey",
    imageUrl: "./image/KlingonBirdOfPrey.png",
    shipClass: "B'rel-class",
    message:"Today is a good day to die",
    cadet: "",
    onboard: boolean
  }
];
const renderToDom =(divId, html)=> {
  const starShip = document.querySelector(divId)
  selectAShip.innerHTML = html;
};
//This will allow me to access the starship array above

const cardsOnDom = (array) =>{
let domString = ""; //Set the domString to empty
for(const ship of array){
  domString +=`
  <div class="card" style="width: 18rem;">
  <div class="expelled">
  <button type="button" id="exp-btn-ship--${ship.id}" class="btn-danger">expelled</button>
  </div>
  <div class="card-header"> <h5 class="card-title">${ship.title}</h5></div>
  <img src="${ship.imageUrl}" class="card-img-top" alt="${ship.title}></img>
  <div class="card-body"> <p class="card-text"> ${ship.message}</p></div>
  </div>

  `
}
renderToDom('#card', domString);
};
cardsOnDom(ship);

const filterTheShips = (ships) =>{
  const filterTheShips = starship.filter((f) => f.title === ships)
  cardsOnDom(filterTheShips)
}

let ships = document.querySelector("all-button")
ships.addEventListener("click", (e) =>{
  switch (e.target.id){
    case "enterprise-btn": filterTheShips("enterprise")
    break;
    case "voyager-btn": filterTheShips("voyager")
    break;
    case "excalibur-btn": filterTheShips("excalibur")
    break;
    case "excelsior-btn": filterTheShips("excelsior")
    break;
    default:cardsOnDom(starship)
  }
})
const show = document.querySelector("#show-form")
const form = document.querySelector('form')
const cadetForm = () => {
  let domString = ""; //Can domString be a taco? Ask Aja later
  domString += `
  <div class="mb-3"><label for="cadet" class="form-label">Enter Cadet Name</label>
  <input type = "text" class="form-control" id = "cadet"  
  </div>
  <button type="submit" class="btn btn-primary mb-3 submit">Sort</button>
  `
 renderToDom("cadetForm", domString);
};
show.addEventListener("click",() => {
  cadetForm()
})

const selectShip = () => {
  let selection = starship[Math.floor(Math.random() * starship.length)];
  document.getElementById("message").innerHTML = selection.message;
  //document.body.style.backgroundImage = selection.
}
//
sortButton.addEventListener("click", function(){
  selectShip();
  sortButton.remove();
});

const startApp = () => {
  renderCards(starship)

  //Select button row div
  document.querySelector('#btnRow').addEventListener('click', buttonFilter);
}
startApp();
