const container = document.querySelector('.container');
const eraseGridBtn = document.querySelector('.eraseGridBtn');



let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);




function makeGrid(){
    for(let i = 1; i < 17; i++){      
        for(let j = 1; j < 17; j++){
            let square = document.createElement('div');      
            square.classList.add('square');
            square.setAttribute('style', 'display: inline-block; background: #fff; border: 1px solid black; width: 50px; height: 50px;');
            square.addEventListener('mouseover', changeColor);
            square.addEventListener('mousedown', changeColor);
            function eraseGrid() {
                square.style.backgroundColor = "#fff";               
            }
            eraseGridBtn.addEventListener('click', eraseGrid);
            container.appendChild(square);
                     
        } 
        
    }
    
    

}

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return e.target.style.backgroundColor = "#FBE7C6";
}




function main() {
    makeGrid();
}


main();