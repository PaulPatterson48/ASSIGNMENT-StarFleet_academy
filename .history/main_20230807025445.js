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
    message:"Congrats, you're Excalibur"  ,
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
    imageUrl: "/Users/paulpatterson/workspace/foundations/inclass/ASSIGNMENT-StarFleet-Academy/images//image/KlingonBirdOfPrey.png",
    shipClass: "B'rel-class",
    message:"Today is a good day to die",
    cadet: "",
    onboard: false
  }
]
// Data structure to hold students and their houses
const students = [];
const expelledCadet = [];


// Function to render students and expelled students
function renderToDom(containerId, data) {
  const container = document.getElementById(containerId);
  data.innerHTML = '';
  data.forEach((item) => {
    const card = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <div class="card-body">
            <img src="${item.image}" class="car-img-top"></img>
            <h5 class="card-title">Cadet: ${item.name}</h5>
            <p class="card-text">Ship: ${item.ship}</p>
            <p class="card-text">Message: ${item.message}</p>
            ${item.isExpelled ? '<button class="btn btn-danger btn-sm btn-expel">Expel</button>' : '<button class="btn btn-danger btn-sm btn-expel">Expel</button>'}
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function startSorting() {
  document.getElementById('sortingHatCard').classList.add('containerId','text-center', 'mb-3');
  document.getElementById('sortingForm').classList.remove('d-none');
}

function shuffleShips() {
  return selection = starship[Math.floor(Math.random() * starship.length)]

// Function to filter the array

}
// Function to sort a student
function sortStudent(e) {
  e.preventDefault();
  const studentName = document.getElementById('studentName').value;
  const ships = shuffleShips();
  const randomShip= selection[1];

  if (studentName === '') {
    nameError.classList.remove('d-none');
    return;
  }

  // Add the student to the array of sorted students
  students.push({ name: studentName, ship: ships.title, message: ships.message, image: ships.imageUrl, isExpelled: false });
  document.getElementById('sortingForm').classList.add('d-none');
  renderToDom('studentsContainer', students);

}  
//Get the value of the expelled student
// const btn = document.getElementById('submit');
// btn.addEventListener('click', func)

// function func(){
//   console.log(document.getElementById("number").value)
// }
//Function to expel a student
function expelStudent(){
  const studentCard = document.querySelector('.student-card')
  const expelledCard= document.querySelector('.expelled-card')

  if (expelledCard){
    const expelledStudentCard = studentCard.cloneNode(true)
    studentCard.parentNode.removeChild(studentCard)

    expelledCard.appendChildId(expelledCard)
  }else{
    return("No expelled Cadets");
  }
}



// Filter students by house
function filterShip(ship) {
  const filteredStudents = students.filter((student) => student.ship === ship);
  renderToDom('studentsContainer', filteredStudents);
}

// Event listeners
document.getElementById('startSortingBtn').addEventListener('click', startSorting);
document.getElementById('sortBtn').addEventListener('click', sortStudent);
document.getElementById('studentsContainer').addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-expel')) {
    const studentIndex = e.target.closest('.col-md-3').dataset.index;
    expelStudent(studentIndex);
  }
});
document.getElementById('filterEnterprise').addEventListener('click', () => filterShip('Enterprise'));
document.getElementById('filterVoyager').addEventListener('click', () => filterShip('Voyager'));
document.getElementById('filterExcalibur').addEventListener('click', () => filterShip('Excalibur'));
document.getElementById('filterExcelsior').addEventListener('click', () => filterStudentsByHouse('Excelsior'));

const startApp = () => {
document.querySelector
};
startApp();