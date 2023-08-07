const starship = [
  {
    id:1,
    title: "enterprise",
    imageUrl: "/images/EnterpriseA.png",
    shipClass: "Constitution-class",
    message:"Congrats, you're on the Enterprise!",
    cadet: "",
    onboard: true
  },
  {
    id: 2,
    title:"voyager",
    imageUrl: "/images/Voyager.png",
    shipClass: "Intrepid-class",
    message:"Congrats, you're on the Voyager" ,
    cadet: "",
    onboard: true
  },
  {
    id: 3,
    title: "excalibur",
    imageUrl: "/images/USSExcalibur.png",
    shipClass: "Ambassador-class",
    message:"Congrats, you're Excalibur"  ,
    cadet: "",
    onboard: true 
  },
  {
    id: 4,
    title: "excelsior",
    imageUrl: "/images/USSExcelsior.png",
    shipClass: "Excelsior-class",
    message:"Congrats, you're on Excelsior!" ,
    cadet: "",
    onboard: true
  },
  {
    id:5,
    title: "birdofprey",
    imageUrl: "/Users/paulpatterson/workspace/foundations/inclass/ASSIGNMENT-StarFleet-Academy/images//image/KlingonBirdOfPrey.png",
    shipClass: "B'rel-class",
    message:"Today is a good day to die",
    cadet: "",
    onboard: false
  }
];
//Array to store sorted students
const students = [];



const renderCards = (array) =>{
  const newShip = "";
  array.forEach((s) => {
    newShip += card(s); //Passing the entire object in the array
  })
  renderToDom("#cards", newShip)
}

function shuffleShips() {
  return selection = starship[Math.floor(Math.random() * starship.length)]
}
// Function to sort a student
function sortStudent(e) {
  e.preventDefault();
  const studentName = document.getElementById('studentName').value;
  const ships = shuffleShips();
  const randomShip= selection[1];

  

  // Add the student to the array of sorted students
  students.push({ name: studentName, ships: ships.title, message: ships.message});

  // Clear the form
  document.getElementById('studentForm').reset(); //found reset on https://www.w3schools.com/jsref/met_form_reset.asp

  // Display the sorted student cards
  displaySortedStudents();
}

// Function to display sorted students
function displaySortedStudents() {
  const sortedStudentsDiv = document.getElementById('sortedStudents');
  sortedStudentsDiv.innerHTML = '';

  students.forEach((student, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'text-center', 'mb-3');
    cardDiv.innerHTML = `
      <div class="card-body">
      <image 
        <img src="${starship.imageUrl}" class = "card-img-top">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">Ship: ${student.ships}</p>
        <p class="card-text">Message: ${student.message}</p>
        <button class="btn btn-danger" onclick="expelStudent(${index})">Expel</button>
      </div>
    `;
    sortedStudentsDiv.appendChild(cardDiv);
  });
}
//UPDATE / Expelled Students
const toggleCart = (e) => {
  if (e.target.id.includes("btn-danger")) {
    const [,id] = e.target.id.split('')
    const index = starship.findIndex(i => i.id === Number(id))

    starship[index].onboard = !starship[index].onboard
    renderCards(starship);
  }
}
//Array for Expelled Students
const expelledStudents = [];
//expelledStudents.push({name: studentName, ships: ships.title, message: ships.message})

const expelFilter = (e) =>{
  if(e.target.id.includes('expel')){
    const expel = starship.filter(ship => ship.onboard);
    renderCards(expel);
  }
}
const buttonFilter = (e) =>{
  if(e.target.id.includes('enterprise')){
    const enterprise = starship.filter(s => s.title.toLowerCase() === 'enterprise')
    renderCards(enterprise);
  }
  if(e.target.id.includes('voyager')){
    const voyager = starship.filter(s => s.title.toLowerCase() ==='voyager')
    renderCards(voyager)
  }
  if(e.target.id.includes('excalibur')){
    const excalibur = starship.filter(s => s.title.toLowerCase() ==='excalibur')
    renderCards(excalibur)
  }
  if(e.target.id.includes('excelsior')){
    const excelsior = starship.filter(s => s.title.toLowerCase() === 'excelsior')
    renderCards(excelsior)
  }
}

//Filter Button Row
const filterButtons = () => {
  const domString = `
  <div class="d-flex flex-wrap justify-content-between mb-3">
  <button class="btn btn-secondary btn-lg buttonRow" id="all">all</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="enterprise">Enterprise</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="voyager">Voyager</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="excalibur">Excalibur</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="excelsior">Excelsior</button>
  </div>
  `;
  renderToDom('#filterContainer',domString);
};

//Event Listeners
const el = () =>{
  const formModal = new bootstrap.Modal(document.querySelector('#addExpelled'));
}



//expelStudent.push({ name: studentName, ships: ships.title, message: ships.message});
//document.getElementById('expeledstudentForm').reset();


// Function to expel a student
function expelStudent(index) {
  students.splice(index, 4);
  displaySortedStudents();
}

// Event listeners

document.getElementById('startSortingBtn').addEventListener('click', function() {
  document.getElementById('sortingCadetCard').classList.add('d-none');
  document.getElementById('sortingForm').classList.remove('d-none');
});

document.getElementById('studentForm').addEventListener('submit', sortStudent);

const startApp = () => {
 //renderCards(chooseShip)

 //document.querySelector('#cards').addEventListener('click', toggleCart)

 //document.querySelector('#searchInput').addEventListener('keyup', search)

 document.querySelector('#btnRow').addEventListener('click', buttonFilter);
};
startApp();
