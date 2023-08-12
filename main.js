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



// Function to render students and expelled students
const renderToDom =(containerId, data)  =>{
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
            ${item.isExpelled ? "" : '<button id="expel-btn--${starship.id}" class="btn btn-danger  btn-sm btn-expel">Expel</button>'}
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}
//Function to start sorting process
const startSorting =()  =>{
  document.getElementById('sortingAICard').classList.add('containerId', 'text-center', 'mb-3');
  document.getElementById('sortingForm').classList.remove('d-none');
  const form = document.querySelector('#sortingForm')
  sortingForm.reset();
}

const shuffleShips = ()  =>{
  return selection = starship[Math.floor(Math.random() * starship.length)]
}



// Function to sort a student
const sortStudent =(e) => {
  e.preventDefault();
  
  const studentName = document.getElementById('studentName').value;
  const ships = shuffleShips();
  const randomShip= selection[1];

  if (studentName === '') {
    nameError.classList.remove('d-none');//classList property returns the CSS classnames of an element
    return;
  }

  // Add the student to the array of sorted students
  students.push({ name: studentName, ship: ships.title, message: ships.message, image: ships.imageUrl});
  renderToDom('studentsContainer', students);
}  


// Function to expel a student
const expelStudent =(studentIndex) => {
  studentIndex.preventDefault();
  const expelledStudent = studentIndex.splice(studentIndex,1);
  expelledStudent.isExpelled = true; 
  console.log(expelStudent)
  expelledStudent.push({name:expelledStudent, ship: "Bird of Prey", message: "Today is a good Day to Die", image: "/images/KlingonBirdOfPrey.png"});
  renderToDom('expelledContainer', expelledStudent);
}
//Filter students by house
const filterShip = (starship) =>{
  const filterStudents = students.filter((student) => student.starship === starship);
} 


// Event listeners
document.getElementById('startSortingBtn').addEventListener('click', startSorting);
document.getElementById('sortBtn').addEventListener('click', sortStudent);
document.getElementById('studentsContainer').addEventListener('click',(e)  => {
  if (e.target.classList.contains('btn-expel')) {
    const [, id] = e.target.id.split('--')
    const studentIndex = students.findIndex(item => item.id === Number(id))
    students.splice(studentIndex,0)
    //const studentIndex = e.target.closest('.card-body').dataset.index; 
    console.log(studentIndex)
    //const eStudent = document.getElementById('studentName').value
    //epelledStudent(studentIndex);

  }
 });
// document.querySelector('studentsContainer')
//  studentsContainer.addEventListener('click', (e) =>{
  // if (e.target.id.includes("expel-btn")){
    // const [,id] =e.target.id.split('--')
    // const studentIndex = students.findIndex(item => item.id === Number(id))
    // students.splice(studentIndex,1);
    // console.log(studentIndex)
  // } 
//  })

document.getElementById('filterEnterprise').addEventListener('click', () => filterShip('Enterprise'));
document.getElementById('filterVoyager').addEventListener('click', () => filterShip('Voyager'));
document.getElementById('filterExcalibur').addEventListener('click', () => filterShip('Excalibur'));
document.getElementById('filterExcelsior').addEventListener('click', () => filterShip('Excelsior'));
//document.getElementById('')

const startApp = () => {
//document.querySelector('#expel').addEventListener('click', expel)
};
startApp();
