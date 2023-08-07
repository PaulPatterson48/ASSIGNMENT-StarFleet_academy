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
//Array to store sorted students
const students = [];

//Function to shuffle the ships
const renderShips = (array) =>{
  const shuffleShips = "";
  array.forEach(item) => {
    shuffleShips += starship(item);
  }
  return starship.sort(() => Math.random() * ships.length);

}


// Function to sort a student
function sortStudent(event) {
  event.preventDefault();
  const studentName = document.getElementById('studentName').value;
  const ships = shuffleShip();
  const randomShip= ships[0];

  // Add the student to the array of sorted students
  students.push({ name: studentName, ships: randomHouse });

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
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">House: ${student.house}</p>
        <button class="btn btn-danger" onclick="expelStudent(${index})">Expel</button>
      </div>
    `;
    sortedStudentsDiv.appendChild(cardDiv);
  });
}
//Add Modal for Ships taken from youtube player
const myBtnModal = () => {
  const domString = `
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body">
          <div class="form-floating mb-3">
          <select class="form-select from control-lg" id="title" aria-label="title" required>
          <option value="">Select a title</option>
          <option value=
          </select>
          
          
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  `

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

// Function to expel a student
function expelStudent(index) {
  students.splice(index, 1);
  displaySortedStudents();
}

// Event listeners
document.getElementById('startSortingBtn').addEventListener('click', function() {
  document.getElementById('sortingHatCard').classList.add('d-none');
  document.getElementById('sortingForm').classList.remove('d-none');
});

document.getElementById('studentForm').addEventListener('submit', sortStudent);

const startApp = () => {

};
startApp();