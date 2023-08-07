var starship = [
  {
    id:1,
    title: "enterprise",
    imageUrl: "./image/EnterpriseA.png",
    shipClass: "Constitution-class",
    message:"Congrats, you're on the Enterprise!",
    cadet: Boolean  
  },
  {
    id: 2,
    title:"voyager",
    imageUrl: "./image/Voyager.png",
    shipClass: "Intrepid-class",
    message:"Congrats, you're on the Voyager" ,
    cadet: Boolean
  },
  {
    id: 3,
    title: "excalibur",
    imageUrl: "./image/USSExcalibur.png",
    shipClass: "Ambassador-class",
    message:"Congrats, you're Excalibur"  ,
    cadet: Boolean   
  },
  {
    id: 4,
    title: "excelsior",
    imageUrl: "./image/USSExcelsior.png",
    shipClass: "Excelsior-class",
    message:"Congrats, you're on Excelsior!" ,
    cadet: Boolean
  },
  {
    id:5,
    title: "birdofprey",
    imageUrl: "./image/KlingonBirdOfPrey.png",
    shipClass: "B'rel-class",
    message:"Today is a good day to die",
    cadet: boolean
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
}
