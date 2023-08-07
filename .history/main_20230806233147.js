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
// Data structure to hold students and their houses
const students = [];
//const expelstudent =[];

const renderCards = (array) =>{
  const newShip ="";
  array.forEach((s) => {
    newShip += card(s)
  })
  renderToDom("#cards", newShip)
}
//UPDATE / Expelled Students
const toggleCart = (e) => {
  if (e.target.id.includes("btn-danger")) {
    const [,id] = e.target.id.split('')
    const index=  starship.findIndex(i => i.id === Number(id))

    starship[index].onboard = !starship[index].onboard
    renderCards(starship);
  }
}



// Function to render students and expelled students
function renderToDom(containerId, data) {
  const container = document.getElementById(containerId);
  data.innerHTML = '';
  data.forEach((item) => {
    const card = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <div class="card-body">
            <img src="${item.imageUrl}" class="car-img-top"></img>
            <h5 class="card-title">${item.name}</h5>

            <button class="btn btn-danger" onclick="expelStudent($(index)) btn-sm btn-expel">Expel</button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Function to start sorting process
function startSorting() {
  document.getElementById('startSortingBtn').addEventListener('click' ,function(){
    document.getElementById('sortingHatCard').classList.add('d-none');
    document.getElementById('sortingForm').classList.remove('d-none');
  })
 document.getElementById('studentForm').addEventListener('submit', sortStudent);
}
function shuffleShips() {
  return selection = starship[Math.floor(Math.random() * starship.length)]

// Function to filter the array

}
// Function to sort a student
function sortStudent() {
  const studentName = document.getElementById('studentName').value.trim();
  const ships = shuffleShips();
  const randomShip= selection[1]
  const nameError = document.getElementById('nameError');
  
  if (studentName === '') {
    nameError.classList.remove('d-none');
    return;
  }

  nameError.classList.add('d-none');
  
  
  students.push({ name: studentName, ship: shuffleShips.title, message: shuffleShips.message, isExpelled: false });
  document.getElementById('sortingForm').classList.add('d-none');
  renderToDom('studentsContainer', students);
}

// Function to expel a student
function expelStudent(studentIndex) {
  students[studentIndex].isExpelled = true;
  const expelledStudent = students.splice(studentIndex, 1)[0];
  expelledStudent.isExpelled = true;
  expelledStudents.push(expelledStudent);
  renderToDom('studentsContainer', students);
  renderToDom('expelledContainer', expelledStudents);
}

// Filter students by house
function filterStudentsByHouse(ship) {
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
document.getElementById('filterEnterprise').addEventListener('click', () => filterStudentsByHouse('Enterprise'));
document.getElementById('filterVoyager').addEventListener('click', () => filterStudentsByHouse('Voyager'));
document.getElementById('filterExcalibur').addEventListener('click', () => filterStudentsByHouse('Excalibur'));
document.getElementById('filterExcelsior').addEventListener('click', () => filterStudentsByHouse('Excelsior'));

const startApp = () => {
 //renderCards(chooseShip)

 //document.querySelector('#cards').addEventListener('click', toggleCart)

 //document.querySelector('#searchInput').addEventListener('keyup', search)

 //document.querySelector('#btnRow').addEventListener('click', buttonFilter);
};
startApp();
