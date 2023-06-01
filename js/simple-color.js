const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "brown",
    "pink",
    "chocolate"
  ];

  const triggerBtn = document.querySelector('.btn');
  const color = document.querySelector('.color');

  triggerBtn.addEventListener('click', changeBackground)


  function changeBackground() {
    // console.log('Here')

    let randomNumber = Math.floor(Math.random() * colors.length);
    // console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.innerHTML = colors[randomNumber]
  }