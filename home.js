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



function onMouseMove(areaSelector, hoverSelector, cursorSelector) {
    let area = document.querySelector(areaSelector);

    area.addEventListener('mousemove', getMousePosition);

}
onMouseMove('#dropdown-body', '.a-drop', '#cursor-drop');

function getMousePosition(event) {
  
    let x = event.clientX;
    let y = event.clientY;
      
   changeMouseStyle('#cursor-drop', x, y);
}


function changeMouseStyle(cursorSelector, x, y) { 
    let cursor = document.querySelector(cursorSelector);
    // cursor.style.top = (`${y - 180}px`);
    // cursor.style.left = (`${x - 140}px`);

    cursor.style.transform = 
        `translate( calc(${x}px - 1320%), calc(${y}px - 250%))`;

}


function changeHoverStyle( areaSelector, hoverSelector, cursorSelector ){
    let area = document.querySelector(areaSelector);
    let hoverItems = document.querySelectorAll(hoverSelector);
    let cursor = document.querySelector(cursorSelector)

    hoverItems.forEach(hover => {
        hover.addEventListener('mouseover', function(e){
            cursor.style.opacity = '0.4';
        })
    })

    hoverItems.forEach(hover => {
        hover.addEventListener('mouseout', function(e){
            cursor.style.opacity = '1';
        })
    })
  
}
changeHoverStyle('#dropdown-body','.u-drop', '#cursor-drop');

function handleMouseOut(cursorSelector, areaSelector) {
    let cursor = document.querySelector(cursorSelector);
    let area = document.querySelector(areaSelector)
    area.addEventListener('mouseout', function(e){
        cursor.style.transform = 'translate(0)';
        // cursor.style.transitionDuration = '400ms';
        
    })
}
handleMouseOut('#cursor-drop','#dropdown-body');








