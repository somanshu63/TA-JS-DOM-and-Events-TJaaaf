const cardsArray = [
    {
      name: 'shell',
      img: 'assetsMario/shell.jpeg',
    },
    {
      name: 'star',
      img: 'assetsMario/star.jpg',
    },
    {
      name: 'bobomb',
      img: 'assetsMario/bobomb.jpg',
    },
    {
      name: 'mario',
      img: 'assetsMario/mario.png'
    },
    {
      name: 'luigi',
      img: 'assetsMario/Luigi.png',
    },
    {
      name: 'peach',
      img: 'assetsMario/peach.png',
    },
    {
      name: '1up',
      img: 'assetsMario/1up.jpeg',
    },
    {
      name: 'mushroom',
      img: 'assetsMario/mushroom.jpeg',
    },
    {
      name: 'thwomp',
      img: 'assetsMario/thwomp.jpeg',
    },
    {
      name: 'bulletbill',
      img: 'assetsMario/bullet.jpeg',
    },
    {
      name: 'coin',
      img: 'assetsMario/coin.jpeg',
    },
    {
      name: 'goomba',
      img: 'assetsMario/goomba.jpeg',
    },
    {
      name: 'shell',
      img: 'assetsMario/shell.jpeg',
    },
    {
      name: 'star',
      img: 'assetsMario/star.jpg',
    },
    {
      name: 'bobomb',
      img: 'assetsMario/bobomb.jpg',
    },
    {
      name: 'mario',
      img: 'assetsMario/mario.png'
    },
  ]
  let countNumberOfSteps = 0;
  const game = document.getElementById(`game`);
  const grid = document.createElement(`section`);
  
  grid.setAttribute(`class`, `grid`);
  game.appendChild(grid);
  let count = 0;
    let firstGuess = '';
    let secondGuess = '';

  cardsArray.forEach((item) => {
    const card = document.createElement(`div`);
    card.classList.add("card");
    card.dataset.name = item.name;
    const front = document.createElement('div');
    front.classList.add('front');
    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

  let gameGrid = cardsArray;
  gameGrid.sort(() => 0.5 - Math.random());

  gameGrid.forEach((item) => {
    const card = document.createElement(`div`);
      card.classList.add("card");
      card.dataset.name = item.name;
      const front = document.createElement('div');
      front.classList.add('front');
      const back = document.createElement('div');
      back.classList.add('back');
      back.style.backgroundImage = `url(${item.img})`;
      grid.appendChild(card);
      card.appendChild(front);
      card.appendChild(back);
  });

  let previousTarget = null;
let matched = [];
if (countNumberOfSteps == 0) {
    var begin = Date.now();
} else{}



  grid.addEventListener("click", function(event) {
      countNumberOfSteps = countNumberOfSteps + 1;
      steps.innerText = `total number of steps = ${countNumberOfSteps}`;
      
        var end = Date.now();
   
    
      time.innerText = (end-begin)/1000+"secs";

    let clicked = event.target;
    if(clicked.nodeName === 'SECTION' || 
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected')){
        return
    }

    if (count < 2) {
        count++;
        if(count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if (firstGuess != '' && secondGuess != '') {
            if(firstGuess == secondGuess) {
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
            } else {
                setTimeout(resetGuesses, delay);
            }
        }
        previousTarget = clicked;
      }
    
  });

  const match = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach((card) => {
      card.classList.add('match');
    });
  }

  
  
  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
      card.classList.remove('selected');
    });
    }
    
    let delay = 1200

  let steps = document.createElement("p");
  steps.classList.add("step");
  game.append(steps);
  let time = document.createElement("p");
  time.classList.add("time");
  game.append(time);