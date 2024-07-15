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
    area.addEventListener('scroll',getMousePosition);
}
onMouseMove('#dropdown-body');

function getScrollPosition(event){
    let area = document.querySelector('#dropdown-body');
    let x = area.scrollLeft;
    let y = area.scrollTop;
    console.log(x, y)
    changeMouseStyle( '#cursor-drop', x, y);

}
function getMousePosition(event) {
  
    let area = document.querySelector('#dropdown-body');
    let x = event.pageX;
    let y = event.pageY;

    console.log(x, y, area.scrollLeft)
   
    
   changeMouseStyle('#cursor-drop', x, y);
}


function changeMouseStyle(cursorSelector, x, y) {
  
    let cursor = document.querySelector(cursorSelector);

    cursor.style.top(`${y}px`);
    cursor.style.left(`${x}px`);
    // cursor.setAttribute("style", "top: ", +y+"px; left: "+x+"px;");
    // cursor.style.transform = `translate3d(calc(${x}px), 
    // calc(${y}px), 0)`; 
    

}

// function getOffset(areaSelector) {
//     let area = document.querySelector(areaSelector);
//     let offsetX = area.offsetWidth;
//     let offsetY = area.offsetHeight;
    
//     return {
//         offsetX: offsetX,
//         offsetY: offsetY,
//     }


// }
// const {offsetX, offsetY} = getOffset('#dropdown-body');






