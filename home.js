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

}
onMouseMove('#dropdown-body');

function getMousePosition(event) {
    let x = event.clientX;
    let y = event.clientY;

    let area = document.querySelector('#dropdown-body');
    let offsetX = area.offsetWidth;
    let offsetY = area.offsetHeight;
   
  
   changeMouseStyle('#dropdown-page', '#cursor-drop', x, y);
}


function changeMouseStyle(areaSelector,cursorSelector, x, y) {
    let area = document.querySelector(areaSelector);
    let cursor = document.querySelector(cursorSelector);

    let offsetX = area.offsetWidth;
    let offsetY = area.offsetHeight;
    console.log(offsetX,offsetY)
    cursor.style.transform = `translate3d(calc(${x}px - 100%), 
    calc(${y}px - 150%), 0)`; 
    
}

function getOffset(areaSelector) {
    let area = document.querySelector(areaSelector);
    let offsetX = area.offsetWidth;
    let offsetY = area.offsetHeight;

    
}



