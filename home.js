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

let mouseValues1 = initializeMouseValues('#dropdown-body', '.a-drop', '#cursor-drop');



function initializeMouseValues(areaSelector, hoverSelector, cursorSelector) {
    let area = document.querySelector(areaSelector);
    let hover = document.querySelector(hoverSelector);
    let cursor = document.querySelector(cursorSelector);

    return {
        area: area,
        hover: hover, 
        cursor: cursor,
    }
}

function getMouseValues(elements) {
    let { area, hover, cursor} = elements;
    console.log(area)
}
getMouseValues(mouseValues1);



function onMouseMove(elements) {
    let { area, hover, cursor} = elements;
    area.addEventListener('mousemove', getMousePosition);
}
onMouseMove(mouseValues1);


function getMousePosition(event) {
   changeMouseStyle(mouseValues1);

   
   handleScrollLeft(event, mouseValues1);

}


function changeMouseStyle(elements) { 
    let { area, hover, cursor} = elements;
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.transform = 
        `translate( calc(${event.clientX}px - 120%), calc(${event.clientY}px - 160%))`;
    
    if(cursor.classList.contains('drag')) {
        cursor.style.transform = 
        `translate( calc(${event.clientX}px - 120%), calc(${event.clientY}px - 160%)) scale(0.6)`;
        console.log('drag is moving');
    }
}
    


function changeHoverStyle( elements, hoverSelector ){
    let { area, hover, cursor} = elements;
    let hoverItems = document.querySelectorAll(hoverSelector);

    hoverItems.forEach(hover => {
        hover.addEventListener('mouseover', function(e){
            cursor.style.opacity = '0.4';
        })
    })

    hoverItems.forEach(hover => {
        hover.addEventListener('mouseleave', function(e){
            cursor.style.opacity = '1';
        })
    })
  
}
changeHoverStyle(mouseValues1,'.u-drop');


function handleMouseOut(elements) {
    let {area, hover, cursor} = elements;

    area.addEventListener('mouseleave', function(e){
        cursor.style.top = '20%';
        cursor.style.left = '90%';
        cursor.style.transform = 'translate(0)'; 
    })
}
handleMouseOut(mouseValues1);


function handleMouseDown(elements, x, y) {
    let { area, hover, cursor} = elements;
    

    area.addEventListener('mousedown', function(e){
        cursor.classList.add('drag');
        console.log('mouse press');

        changeMouseStyle(mouseValues1);
       
    })  
}
handleMouseDown(mouseValues1);


function handleMouseUp(elements) {
    let { area, hover, cursor} = elements;

    area.addEventListener('mouseup', function(e){
        cursor.classList.remove('drag');
        changeMouseStyle(mouseValues1);
       

    })  
}
handleMouseUp(mouseValues1);


function handleScrollLeft(e, elements) {
    let { area, hover, cursor } = elements;
    let width = area.offsetWidth;
    if( cursor.classList.contains('drag') && (e.clientX > width/2) ) {
        area.scrollLeft -= 10;
        console.log(e.clientX)
    }
    if( cursor.classList.contains('drag') && (e.clientX < width/2) ) {
        area.scrollLeft += 10;
    }
}
