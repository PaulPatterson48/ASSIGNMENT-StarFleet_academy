const starship = [
  {
    id:1,
    title: "Enterprise",
    imageUrl: "/images/EnterpriseA.png",
    shipClass: "Constitution-class",
    message:"Congrats, you're on the Enterprise!",
    color: "Grey",
    cadet: "",
    onboard: true
  },
  {
    id: 2,
    title:"Voyager",
    imageUrl: "/images/Voyager.png",
    shipClass: "Intrepid-class",
    message:"Congrats, you're on the Voyager" ,
    color: "Blue",
    cadet: "",
    onboard: true
  },
  {
    id: 3,
    title: "Excalibur",
    imageUrl: "/images/USSExcalibur.png",
    shipClass: "Ambassador-class",
    message:"Congrats, you're onboard Excalibur"  ,
    color: "purple", 
    cadet: "",
    onboard: true 
  },
  {
    id: 4,
    title: "Excelsior",
    imageUrl: "/images/USSExcelsior.png",
    shipClass: "Excelsior-class",
    message:"Congrats, you're on Excelsior!" ,
    color: "green",
    cadet: "",
    onboard: true
  },
 
];
const expelShip = [
  {
    id:5,
    title: "Bird of Prey",
    imageUrl: "/images/KlingonBirdOfPrey.png",
    shipClass: "B'rel-class",
    message:"Today is a good day to die",
    color: "orange",
    cadet: "",
    onboard: false
  }
];
// Data structure to hold students and their houses
const students = [];
const expelledStudent = [];

// Function to render students and expelled students
const renderToDom =(containerId, data) =>{
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  data.forEach((cadet) => {
    const card = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <div class="card-body">
          <img src="${cadet.image}" class="car-img-top"> </img>
            <h5 class="card-title">Cadet: ${cadet.name}</h5>
            <p class="card-text">Ship: ${cadet.ship}</p>
            <p class="card-text">Message: ${cadet.message}</p>
            ${cadet.isExpelled ? "" : `<button id="expel-btn--${cadet.id}" class="btn btn-danger  btn-sm btn-expel">Expel</button>`}
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Function to start sorting process
const startSorting = () => {
  document.getElementById('sortingAICard').classList.add('containerId','text-center', 'mb-3');
  document.getElementById('sortingForm').classList.remove('d-none');
}

// Function to sort a student
const sortStudent =(e) => {
  e.preventDefault();
  const randomShips = starship[Math.floor(Math.random() * starship.length)];
  const studentObj = {
    id: starship.length + 1,
    image: randomShips.imageUrl,
    studentName: document.getElementById('studentName').value,
    ship: randomShips.title,
    message: randomShips.message,
    isExpelled: false
  }

  students.push({id: studentObj.id, image: studentObj.image, name: studentObj.studentName, ship: studentObj.ship, message: studentObj.message})


  document.getElementById('sortingForm').classList.add('d-none');
  renderToDom('studentsContainer', students);
}

const filterStudentsByShip=(ships) =>{
  if (ships.target.id.includes('Enterprise')){
    const enterprise = starship.filter(item.title.toLowerCase() === 'enterprise')
    renderCards(enterprise)
    //console.log('enterprise')
  }
  if(ships.target.id.includes('Voyager')){
    const voyager = starship.filter(item.title.toLowerCase() === 'voyager' )
    renderCards(voyager)
    console.log('voyager')
  }
  if(ships.target.id.includes('Excalibur')){
    const excalibur = starship.filter(item.title.toLowerCase() === 'excalibur')
    renderCards(excalibur)
    console.log('excalibur')
  }
  if(ships.target.id.includes('Excelsior')){
    const excelsior = starship.filter(item.title.toLowerCase() === 'excelsior')
    renderCards( excelsior)
    console.log('excelsior')
  }
  shipList().sort(((a,b) => a.title.localeCompare(b.title))).forEach(item => {
    table += tableRow(item)
    
  })
  `</tbody></table>`
  renderToDom('#cards', table)
}
const shipList = () => {
  return starship.map(s => ({
    image: s.imageUrl,
    ship: s.title,
    message: s.message
  }))
}

// Event listeners
document.getElementById('startSortingBtn').addEventListener('click', startSorting);
document.getElementById('sortBtn').addEventListener('click', sortStudent);

document.getElementById('studentsContainer').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-expel')){
    e.preventDefault();
    const expelCadet = students.find((e) => e);
    const eShip = expelShip.find((a) => a);
    expelledStudent.push({id: expelCadet.id, image:eShip.imageUrl , name: expelCadet.name, ship: eShip.title, message: eShip.message, isExpelled: true })
     renderToDom('expelledContainer', expelledStudent)
  }

})
  
const startApp = () =>{
  document.querySelector('#btnRow').addEventListener('click', filterStudentsByShip)
}
startApp();
