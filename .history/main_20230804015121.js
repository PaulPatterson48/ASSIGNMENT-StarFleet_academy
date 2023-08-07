var starship = [
  {
    id:1,
    title: "enterprise",
    imageUrl: "./image/EnterpriseA.png",
    shipClass: "Constitution-class",
    message:"Congrats, you're on the Enterprise!"  ,
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
  
  </div>
  `
}
}
