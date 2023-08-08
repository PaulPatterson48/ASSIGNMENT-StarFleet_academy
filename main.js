const starship = [
  {
    id:1,
    title: "Enterprise",
    imageUrl: "/images/EnterpriseA.png",
    shipClass: "Constitution-class",
    message:"Congrats, you're on the Enterprise!",
    cadet: "",
    onboard: true
  },
  {
    id: 2,
    title:"Voyager",
    imageUrl: "/images/Voyager.png",
    shipClass: "Intrepid-class",
    message:"Congrats, you're on the Voyager" ,
    cadet: "",
    onboard: true
  },
  {
    id: 3,
    title: "Excalibur",
    imageUrl: "/images/USSExcalibur.png",
    shipClass: "Ambassador-class",
    message:"Congrats, you're onboard Excalibur"  ,
    cadet: "",
    onboard: true 
  },
  {
    id: 4,
    title: "Excelsior",
    imageUrl: "/images/USSExcelsior.png",
    shipClass: "Excelsior-class",
    message:"Congrats, you're on Excelsior!" ,
    cadet: "",
    onboard: true
  },
 
];
const expelShip = [
  {
    id:5,
    title: "Birdofprey",
    imageUrl: "/image/KlingonBirdOfPrey.png",
    shipClass: "B'rel-class",
    message:"Today is a good day to die",
    cadet: "",
    onboard: false
  }
];
// Data structure to hold students and their houses
const students = [];
const expelledStudent = [...students];


// Function to render students and expelled students
function renderToDom(containerId, sortStudent) {
  const container = document.getElementById(containerId);
  sortStudent.innerHTML = '';
  sortStudent.forEach((item) => {
    const card = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <div class="card-body">
            <img src="${item.image}" class="car-img-top"></img>
            <h5 class="card-title">Cadet: ${item.name}</h5>
            <p class="card-text">Ship: ${item.ship}</p>
            <p class="card-text">Message: ${item.message}</p>
            ${item.isExpelled ? "" : '<button class="btn btn-danger onclick="expelStudent(${index}) btn-sm btn-expel">Expel</button>'}
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}
//Function to start sorting process
function startSorting() {
  document.getElementById('sortingAICard').classList.add('containerId', 'text-center', 'mb-3');
  document.getElementById('sortingForm').classList.remove('d-none');
}

function shuffleShips() {
  return selection = starship[Math.floor(Math.random() * starship.length)]
}



// Function to sort a student
function sortStudent(e) {
  e.preventDefault();
  const studentName = document.getElementById('studentName').value.trim();
  const ships = shuffleShips();
  const randomShip= selection[1];

  if (studentName === '') {
    nameError.classList.remove('d-none');//classList property returns the CSS classnames of an element
    return;
  }
  //nameError.classList.add('d-none');

  // Add the student to the array of sorted students
  students.push({ Name: studentName, ship: ships.title, message: ships.message, image: ships.imageUrl});
  document.getElementById('sortingForm').classList.add('d-none')//Display nothing
  renderToDom('studentsContainer', students);

}  

// Function to expel a student
function expelStudent(studentIndex) {
  const expelledStudent = students.splice(studentIndex , 1)[0];
  console.log(expelStudent)
  expelledStudent.push({Name: expelledStudent, ship: "Bird of Prey", message: "Today is a good Day to Die", image: "/images/KlingonBirdOfPrey.png"});
  renderToDom('studentsContainer', students);
  renderToDom('expelledContainer', expelStudent);
}
//Filter students by house
function filterShip(starship){
  const filterStudents = students.filter((student) => student.starship === starship);
  renderToDom('studentsContainer', filterStudents)
} 


// Event listeners
document.getElementById('startSortingBtn').addEventListener('click', startSorting);
document.getElementById('sortBtn').addEventListener('click', sortStudent);
document.getElementById('studentsContainer').addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-expel')) {
     const studentIndex = e.target.closest('.col-md-3').dataset.index; //Returns closest ancestor element or itself
    expelStudent(studentIndex);
  }
});
document.getElementById('filterEnterprise').addEventListener('click', () => filterShip('Enterprise'));
document.getElementById('filterVoyager').addEventListener('click', () => filterShip('Voyager'));
document.getElementById('filterExcalibur').addEventListener('click', () => filterShip('Excalibur'));
document.getElementById('filterExcelsior').addEventListener('click', () => filterShip('Excelsior'));

const startApp = () => {

};
startApp();
