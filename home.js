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
            dropdownBody.classList.add('slider');      
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
    area.addEventListener('mousemove', function(e){
        changeMouseStyle(mouseValues1);
     
    });
}
onMouseMove(mouseValues1);


// function getMousePosition(event) {
//    changeMouseStyle(mouseValues1);
// }


function changeMouseStyle(elements) { 
    let { area, hover, cursor} = elements;
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.transform = 
        `translate( calc(${event.clientX}px - 50%), calc(${event.clientY}px - 180%))`;
    
    if(cursor.classList.contains('drag')) {
        cursor.style.transform = 
        `translate( calc(${event.clientX}px - 50%), calc(${event.clientY}px - 180%)) scale(0.6)`;
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
        cursor.classList.remove('drag');
    })
}
handleMouseOut(mouseValues1);


function handleMouseDown(elements, callback) {
    let { area, hover, cursor} = elements;
    

    area.addEventListener('mousedown', function(e){
        cursor.classList.add('drag');
        console.log('mouse press');

        changeMouseStyle(mouseValues1);
        

       
    })  
}
handleMouseDown(mouseValues1);


function scrollLeft(elements) {
    let { area, hover, cursor} = elements;
    let startX;
    let x; 
    let isDown = false;
    let scrollLeft;

    area.addEventListener('mouseleave', function(e) {
        isDown = false;
    });

    area.addEventListener('mousemove', function(e) {
        if( !isDown ) return;
        x = e.pageX;
        let walk = (x - startX) * 1 ;
        
    
       

        area.scrollLeft = scrollLeft - e.pageX;

        var prevScrollLeft = area.scrollLeft; 

        area.scrollLeft = scrollLeft - walk;
        velX = area.scrollLeft - prevScrollLeft; 
        console.log(velX)

      
    })
    area.addEventListener('mousedown', function(e){
        isDown = true;
        startX = e.pageX;
        scrollLeft = area.scrollLeft;
        console.log('startX:', startX)
        cancelMomentumTracking(); // Stop the drag momentum loop

    })

    area.addEventListener('mouseup', function(e){
        isDown = false;
        beginMomentumTracking();
    })

    // Listen for mouse wheel events
    area.addEventListener('wheel', (e) => {
        cancelMomentumTracking(); // Stop the drag momentum loop
    });  

    // Momentum
    var momentumID; 
    let velX;
    function beginMomentumTracking(){
        cancelMomentumTracking();
        momentumID = requestAnimationFrame(momentumLoop); 
      }
      
      function cancelMomentumTracking(){
        cancelAnimationFrame(momentumID);
      }
      
      function momentumLoop(){
        area.scrollLeft += velX; // Apply the velocity to the scroll position
        velX *= 0.95; // Slow the velocity slightly
        if (Math.abs(velX) > 0.5){ // Still moving?
          momentumID = requestAnimationFrame(momentumLoop); // Keep looping 
        }
      }

}
scrollLeft(mouseValues1);


function handleMouseUp(elements) {
    let { area, hover, cursor} = elements;

    area.addEventListener('mouseup', function(e){
        cursor.classList.remove('drag');
        changeMouseStyle(mouseValues1);
    })  
}
handleMouseUp(mouseValues1);


function handleScrollLeft(elements) {
    
    let { area, hover, cursor} = elements;

    let isDown = false;
    let startX;
    let scrollLeft;

    area.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - area.offsetLeft;
        scrollLeft = area.scrollLeft;
    });

    area.addEventListener('mouseleave', () => {
        isDown = false;
    });

    area.addEventListener('mouseup', () => {
        isDown = false;
    });

    area.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - area.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        var prevScrollLeft = area.scrollLeft;
        // area.scrollLeft = scrollLeft - walk;

        if( (scrollLeft - walk) < 0 ) {
            area.scrollLeft = scrollLeft * 10;
            console.log(area.scrollLeft)
        }
        else {
            area.scrollLeft += 1000;
        }
        // console.log('walk:', walk, 'scrollLeft:', area.scrollLeft)
        
    });
        
    
}
// handleScrollLeft(mouseValues1)

function handleVelocityScroll(elements) {
    let { area, hover, cursor} = elements;
    let isDown = false;
    let startX;
    let scrollLeft;
  
    area.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - area.offsetLeft;
        scrollLeft = area.scrollLeft;
        cancelMomentumTracking();
    });
    
    
    area.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    
    area.addEventListener('mouseup', () => {
        isDown = false;
        beginMomentumTracking();
    });
    
    area.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - area.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        var prevScrollLeft = area.scrollLeft;
        // area.scrollLeft = scrollLeft - walk;

        if( (scrollLeft - walk) < 0 ) {
            area.scrollLeft = -1000;
        }
        else {
            area.scrollLeft = 1000;
        }
        velX = area.scrollLeft - prevScrollLeft;
        console.log('walk:', walk, 'scrollLeft:', area.scrollLeft)

    
    });
    
    // Momentum 
    
    var velX = 0;
    var momentumID;
    
    area.addEventListener('wheel', (e) => {
        cancelMomentumTracking();
    });  
    
    function beginMomentumTracking(){
        cancelMomentumTracking();
        momentumID = requestAnimationFrame(momentumLoop);
        console.log('begin momentum');
    }
    function cancelMomentumTracking(){
        cancelAnimationFrame(momentumID);
        console.log('cancel momentum');
    }
    function momentumLoop(){
        area.scrollLeft += velX;
        velX *= 0.95; 
        if (Math.abs(velX) > 0.5){
            momentumID = requestAnimationFrame(momentumLoop);
            console.log('momentum > 0.5')
        }
    }
}
// handleVelocityScroll(mouseValues1);
