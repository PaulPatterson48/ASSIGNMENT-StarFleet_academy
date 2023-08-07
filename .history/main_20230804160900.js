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
//Render the buttons on HTML 
const shipbuttons = () =>{
  const domString = `
  <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ex astris, scientia - From the stars, knowledge</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body">
      <form>
      <div class="form-floating mb-3"></div>
      </form>
        <p>Filter Cadets</p>
      </div>
      <div class="modal-footer">
      <div id = "btnRow" class="d-flex justify-content-between mb-3 btnRow">
      <button id="enterprise-btn" class="btn btn-primary" btn>Enterprise</button>
      <button id="voyager-btn" class="btn btn-primary" btn>Voyager</button>
      <button id="excalibur-btn" class="btn btn-primary" btn>Excalibur</button>
      <button id="excelsior-btn" class="btn btn-primary" btn>Excelsior</button>
    </div>
      </div>
    </div>
  </div>
</div>  
  `;
  renderToDom('createBtnContainer', domString);
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
  //mb-3 = sets margin or padding to 1rem(16px if font-size is 16px)
  domString += `
  <div class"mb-3"><title>Welcome to Starfleet Academy Star Ship Selection</title><style>text-align: center</style></div>
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
