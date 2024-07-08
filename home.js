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

function getPositionMouseY(e) {
    let y = e.clientY;
    return y;
    
}

function getPositionMouseX(e) {
    let x = e.clientX;
    return x;
}
function styleMouse(cursorSelector) {
    let y = getPositionMouseY();
    // let x = getPositionMouseX();

    console.log(x, y)
    let cursor = document.querySelector(cursorSelector);
    // cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
}

function selectMouseArea(selector) {
    let selection = document.querySelector(selector);
    selection.addEventListener('mousemove',getPositionMouseY);
  

}


function handleMouse() {
    selectMouseArea('#dropdown-page');
    styleMouse('#cursor-drop');

}
handleMouse();
