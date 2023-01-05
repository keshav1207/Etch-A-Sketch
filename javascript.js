let squPerSide = 10;

document.querySelector('#btn1').addEventListener('click', function(){
      squPerSide = prompt("Please provide the desired number of squares per side");
      while(squPerSide >= 100 || squPerSide < 2){
        squPerSide = prompt("Enter a number between 2 and 99");
      }
      createGrid();
});

document.querySelector('#btn2').addEventListener('click', function(){
    for(let i = 1; i<(squPerSide*squPerSide)+1; i++){
        document.getElementById(i).style.backgroundColor = 'grey';
    }   
    
});



createGrid();


function createGrid(){
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${squPerSide},1fr)`;
    container.style.gridTemplateRows = `repeat(${squPerSide},1fr)`;

    for(let i = 1; i<(squPerSide*squPerSide)+1; i++){
        let x = 'div';
        x.concat(i);

        x = document.createElement('div');
        x.id = i;
        
        x.classList.add('grid-item');
        container.appendChild(x);

        const randomBetween = (min,max) => min + Math.floor(Math.random()*(max-min+1));
        let r = randomBetween(0,255);
        let g = randomBetween(0,255);
        let b = randomBetween(0,255);
        document.getElementById(i).addEventListener('mouseover', function(){
            document.getElementById(i).style.backgroundColor = `rgb(${r},${g},${b})`;
            });
    }
}






