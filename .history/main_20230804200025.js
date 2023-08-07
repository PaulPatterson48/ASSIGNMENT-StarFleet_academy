var starship = [
  {
    id:1,
    title: "enterprise",
    imageUrl: "./image/EnterpriseA.png",
    shipClass: "Constitution-class",
    message:"Congrats, you're on the Enterprise!",
    cadet: "",
    onboard: true
  },
  {
    id: 2,
    title:"voyager",
    imageUrl: "./image/Voyager.png",
    shipClass: "Intrepid-class",
    message:"Congrats, you're on the Voyager" ,
    cadet: "",
    onboard: true
  },
  {
    id: 3,
    title: "excalibur",
    imageUrl: "./image/USSExcalibur.png",
    shipClass: "Ambassador-class",
    message:"Congrats, you're Excalibur"  ,
    cadet: "",
    onboard: true 
  },
  {
    id: 4,
    title: "excelsior",
    imageUrl: "./image/USSExcelsior.png",
    shipClass: "Excelsior-class",
    message:"Congrats, you're on Excelsior!" ,
    cadet: "",
    onboard: true
  },
  {
    id:5,
    title: "birdofprey",
    imageUrl: "./image/KlingonBirdOfPrey.png",
    shipClass: "B'rel-class",
    message:"Today is a good day to die",
    cadet: "",
    onboard: false
  }
];
const renderToDom =(divId, html)=> {
  const starShip = document.querySelector(divId)
  selectAShip.innerHTML = html;
};
//This will allow me to access the starship array above



const filterTheShips = (ship) =>{
  const filterTheShips = starship.filter((f) => f.title === ship)
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
      <input class="form-control form-control-lg" type="text" placeholder="Cadet" id="cadet" aria-label="Cadet" required>
      <label for="title">Title</label>
      </div>
      <div class="form-floating mb-3">
      <select class="form-select form-control-lg" id="category" aria-label="category" required>
              <option value="">Select a StarShip</option>
              <option value="enterprise">Enterprise</option>
              <option value="voyager">Voyager</option>
              <option value="excalibur">Excalibur</option>
              <option value="excelsior">Excelsior</option>
            </select>
            <label for="category">Category</label>
      </div>
      <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" value="" id="onboard">
      <label class="form-check-label" for="onboard">OnBoard</label>
      </div>
      <button type="submit" class="brn btn-success">Submit</button>
      </form>
        
      </div>
      <div class="modal-footer">
      
    </div>
      </div>
    </div>
  </div>
</div>  
  `;
  renderToDom('createBtnContainer', domString);
}

const filterButtons = () =>{
  const domString = `
  <div id = "btnRow" class="d-flex flex-wrap justify-content-between mb-3 btnRow">
      <button id="" class="btn btn-primary" btn>ALL</button>
      <button id="enterprise-btn" class="btn btn-primary" btn>Enterprise</button>
      <button id="voyager-btn" class="btn btn-primary" btn>Voyager</button>
      <button id="excalibur-btn" class="btn btn-primary" btn>Excalibur</button>
      <button id="excelsior-btn" class="btn btn-primary" btn>Excelsior</button>
      <button id="sortButton" class="btn-primary" btn>Sort</button>
  </div>
  `;
  renderToDom('#filterContainer', domString);
};

// const renderCards= (array) =>{
//   let fleetShips = ""; //Set the domString to empty
//   array.forEach((item) =>{
//     fleetShips += starship(item);
//   })
  
//     renderToDom("#cardContainer", domString)
//   };
  //cardsOnDom(ship);

// let fleetShips = document.querySelector("#all-button")
// fleetShips.addEventListener("click", (e) =>{
//   switch (e.target.id){
//     case "enterprise-btn": filterTheShips("enterprise")
//     break;
//     case "voyager-btn": filterTheShips("voyager")
//     break;
//     case "excalibur-btn": filterTheShips("excalibur")
//     break;
//     case "excelsior-btn": filterTheShips("excelsior")
//     break;
//     default:cardsOnDom(starship)
//   }
// })
// const show = document.querySelector("#show-form")
// const form = document.querySelector('form')
// const cadetForm = () => {
//   let domString = ""; //Can domString be a taco? Ask Aja later
//   //mb-3 = sets margin or padding to 1rem(16px if font-size is 16px)
//   domString += `
//   <div class"mb-3"><title>Welcome to Starfleet Academy Star Ship Selection</title><style>text-align: center</style></div>
//   <div class="mb-3"><label for="cadet" class="form-label">Enter Cadet Name</label>
//   <input type = "text" class="form-control" id = "cadet"  
//   </div>
//   <button type="submit" class="btn btn-primary mb-3 submit">Sort</button>
//   `
//  renderToDom("cadetForm", domString);
// };
// show.addEventListener("click",() => {
//   cadetForm()
// })



const selectShip = () => {
  let selection = starship[Math.floor(Math.random() * starship.length)];
  document.getElementById("message").innerHTML = selection.message;
  //document.body.style.backgroundImage = selection.
}

// sortButton.addEventListener('click', function(){
//   selectShip();
//   sortButton.remove();
// });

const startApp = () => {
  // renderCards(starship)

  //Select button row div
  //document.querySelector('#btnRow').addEventListener('click', buttonFilter);
}
startApp();
