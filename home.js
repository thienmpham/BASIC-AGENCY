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
    cursor.style.top = (`${y - 180}px`);
    cursor.style.left = (`${x - 140}px`);
}


function changeHoverStyle( areaSelector, cursorSelector ){
    let area = document.querySelector(areaSelector)
    let cursor = document.querySelector(cursorSelector);

    cursor.addEventListener('mouseover', function(e){
        if(cursor){
            console.log('hovering...')
            cursor.style.opacity = '0.4;';
        }

        else {
            cursor.style.opacity = '1';;
        }
    });

}
changeHoverStyle('#dropdown-body','#cursor-drop')







