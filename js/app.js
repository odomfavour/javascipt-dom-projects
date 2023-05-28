let cars = [
  {
    name: "Volvo",
    year: 1987,
  },
  {
    name: "Ford",
    year: 1980,
  },
  {
    name: "Jeep",
    year: 1990,
  },
  {
    name: "Camry",
    year: 1990,
  },
];

let cardContainer = document.querySelector(".card-container");
let carString = "";

// cars.forEach((car) => {
//   // console.log(car)
//   carString += `
//     <div class="card">
//         <img src="" alt="" srcset="">
//         <div class="car-info">
//             <h2>${car.name}</h2>
//             <p>${car.year}</p>
//         </div>
//     </div>
//     `;
// });
// cardContainer.innerHTML = carString;

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
  carString += `
    <div class="card">
        <img src="" alt="" srcset="">
        <div class="car-info">
             <h2>${cars[i].name}</h2>
           <p>${cars[i].year}</p>
        </div>
    </div>
    `;
}

cardContainer.innerHTML = carString;

let searchForm = document.querySelector("#filter-form");
let searchTerm = document.querySelector("#searchTerm");

searchForm.addEventListener("submit", searchArray);

function searchArray(e) {
  e.preventDefault();

  console.log(searchTerm.value);
  if (searchTerm.value.trim()) {
    let filtered = cars.filter(
      (car) => car.name.toLowerCase() === searchTerm.value.toLowerCase()
    );
    cars = filtered;
    console.log(cars);
    let carString = "";
    for (let i = 0; i < cars.length; i++) {
      console.log(cars[i]);
      carString += `
            <div class="card">
                <img src="" alt="" srcset="">
                <div class="car-info">
                     <h2>${cars[i].name}</h2>
                   <p>${cars[i].year}</p>
                </div>
            </div>
            `;
    }

    cardContainer.innerHTML = carString;
  } else {
    alert('Please put a valid car name')
  }
}
