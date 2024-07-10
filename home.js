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


function getMousePosition(areaSelector){
    let area = document.querySelector(areaSelector);

    document.addEventListener('mousemove', function(e){
        let x = e.clientX;
        let y = e.clientY;
        
        changeMouseCursor( area, '#dropdown-body', '#cursor-drop', x, y);

    })
    
}
getMousePosition();

function changeMouseStyle(){

}
function changeMouseCursor( cursorSelector, x, y) {
    area.addEventListener('mousemove',function(e){
        let x = e.clientX;
        let y = e.clientY;
        let cursor = document.querySelector(cursorSelector);
        cursor.style.transform = `translate3d(calc(${x}px - 150%), 
        calc(${y}px - 150%), 0)`;
        

    });
}
// changeMouseCursor('#dropdown-body', '#cursor-drop');

function changeMouseScroll(areaSelector) {
    let area = document.querySelector(areaSelector);
    area.addEventListener('scroll', function(e){

    })
}
changeMouseScroll('#dropdown-page');



