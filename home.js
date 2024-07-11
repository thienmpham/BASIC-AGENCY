function exitDrop(buttonSelector, parentSelector) {
    
    let button = document.querySelector(buttonSelector);
    let parent = document.querySelector(parentSelector);
    button.addEventListener('click', function(){
        parent.classList.toggle('visible');
    })
}
exitDrop('#exit-button', '#dropdown-page');
exitDrop('#dropdown', '#dropdown-page');

function dropdownAnimation() {
    let exitBtn = document.querySelector('#exit-button');
    let dropdownBtn = document.querySelector('#dropdown');
    let animation = document.querySelector('#animation-slide');
    let dropdownBody = document.querySelector('#dropdown-body');

    dropdownBtn.addEventListener('click', function(){
            animation.classList.add('slider');  
            dropdownBody.classList.add('slider')      
    })

    exitBtn.addEventListener('click', function(){
        animation.classList.remove('slider');
        dropdownBody.classList.remove('slider')  
       
    })
}
dropdownAnimation();


function onMouseMove(areaSelector) {
    let area = document.querySelector(areaSelector)
    area.addEventListener('mousemove', getMousePosition);
    area.addEventListener('scroll', getMousePosition);
}
onMouseMove('#dropdown-body');
function getMousePosition(event) {
    let x = event.clientX;
    let y = event.clientY;
   
  
   changeMouseStyle('#cursor-drop', x, y);
}


function changeMouseStyle(cursorSelector, x, y) {
    let cursor = document.querySelector(cursorSelector);
    cursor.style.transform = `translate3d(calc(${x}px - 100%), 
    calc(${y}px - 150%), 0)`; 
}



