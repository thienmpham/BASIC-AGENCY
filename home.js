

function exitDrop(buttonSelector, parentSelector) {
    
    let button = document.querySelector(buttonSelector);
    let parent = document.querySelector(parentSelector);
    button.addEventListener('click', function(){
        parent.classList.toggle('visible');
    })
}
exitDrop('#exit-button', '#dropdown-page');
exitDrop('#dropdown', '#dropdown-page');
exitDrop('#button-main_menu', '#dropdown-page');

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
let mouseValues2 = initializeMouseValues('#video-container', '.a-drop', '#cursor-video');
let mouseValues3 = initializeMouseValues('#featured-card_container', '.span-here', '#featured-card_cursor');

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


function onMouseMove(elements) {
    let { area, hover, cursor} = elements;
    area.addEventListener('mousemove', function(e){
        changeMouseStyle(mouseValues1, '50', '180');
        changeMouseStyle(mouseValues2, '50', '40');
        changeMouseStyle(mouseValues3, '80', '210');
     
    });
}
onMouseMove(mouseValues1);
onMouseMove(mouseValues2);
onMouseMove(mouseValues3);






function changeMouseStyle(elements, numX, numY) { 
    let { area, hover, cursor} = elements;
    let x = numX;
    let y = numY;
   
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.transform = 
        `translate( calc(${event.clientX}px - ${x}%), calc(${event.clientY}px - ${y}%))`;
    
    if(cursor.classList.contains('drag')) {
        cursor.style.transform = 
        `translate( calc(${event.clientX}px - ${x}%), calc(${event.clientY}px - ${y}%)) scale(0.6)`;
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
changeHoverStyle(mouseValues3, '.span-here');


function handleMouseOut(elements, numX, numY) {
    let {area, hover, cursor} = elements;
    let x = numX;
    let y = numY;
    area.addEventListener('mouseleave', function(e){ 
        cursor.style.top = `${x}%`;
        cursor.style.left = `${y}%`;
        cursor.style.transform = 'translate(0)';
        cursor.classList.remove('drag');
    })
}
handleMouseOut(mouseValues1, '20', '90');
handleMouseOut(mouseValues2, '30', '50');
handleMouseOut(mouseValues3, '20', '90');



function handleMouseDown(elements, callback) {
    let { area, hover, cursor} = elements;

    area.addEventListener('mousedown', function(e){
        cursor.classList.add('drag');

        // changeMouseStyle(mouseValues1);
        // changeMouseStyle(mouseValues3);
    })  
}
handleMouseDown(mouseValues1);
handleMouseDown(mouseValues3);




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
       
        let totalX = x - startX; 
        let walk = (x - startX) * 1;

        var prevScrollLeft = area.scrollLeft; 
        
        console.log(area.scrollLeft)
        area.scrollLeft = scrollLeft - walk;
        
        velX = area.scrollLeft - prevScrollLeft; 
        console.log('walk:',walk);

       
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
        area.scrollLeft += velX * 2; // Apply the velocity to the scroll position
        velX *= 0.95; // Slow the velocity slightly
        if (Math.abs(velX) > 0.5){ // Still moving?
          momentumID = requestAnimationFrame(momentumLoop); // Keep looping 
        }
      }

}
scrollLeft(mouseValues1);
scrollLeft(mouseValues3);





function handleMouseUp(elements) {
    let { area, hover, cursor} = elements;

    area.addEventListener('mouseup', function(e){
        cursor.classList.remove('drag');
        changeMouseStyle(mouseValues1);
    })  
}
handleMouseUp(mouseValues1);
handleMouseUp(mouseValues3);

function addScrollEvent(areaSelector, textSelector, num) {
    let area = document.querySelector(areaSelector);
    let text = document.querySelector(textSelector);

    window.addEventListener('scroll', function(){
    // RELATES TO ABOUT SECTION
        
    console.log('area top:',area.getBoundingClientRect().top)
    console.log('area bottom:',area.getBoundingClientRect().bottom);
     
        if(area.getBoundingClientRect().top > 0) {
            //top of about section is scrolled past 
            this.document.querySelector('#nav-main').style = 'color: black'            

        } 

        if(area.getBoundingClientRect().top <= 0 && area.getBoundingClientRect().bottom >= 0){
            
            
            // console.log("TRIGGER: top of div reached.", area.getBoundingClientRect().top);
            // console.log('about section top reached', area.getBoundingClientRect().top);
            document.documentElement.style.setProperty('--bg-color', '#252422');   


            document.body.classList.add('featuredAnim');
            document.documentElement.style.setProperty('--border-color', '#f9cdcd');   
            this.document.querySelector('#button_anim-news').classList.add('news'); 
            this.document.querySelector('#header-button').style = 'filter: brightness(0) saturate(100%) invert(80%) sepia(7%) saturate(927%) hue-rotate(314deg) brightness(106%) contrast(95%);)';
            this.document.querySelector('#nav-main').style = 'color: #f9cdcd'            
            this.document.querySelector('#dropdown').style = "filter: brightness(0) saturate(100%) invert(80%) sepia(7%) saturate(927%) hue-rotate(314deg) brightness(106%) contrast(95%);"
            this.document.querySelector('#button-main_menu').style = 'color: #f9cdcd;';
            document.documentElement.style.setProperty('--u-color', '#f9cdcd');   

        }
        if(area.getBoundingClientRect().top >= num){
            // console.log("TRIGGER: top of div has left.", area.getBoundingClientRect().top);
            
            document.body.classList.remove('featuredAnim');
            document.documentElement.style.setProperty('--border-color', 'black');            
            this.document.querySelector('#button_anim-news').classList.remove('news');        
            document.querySelector('#header-container').style.background = 'black;' ;      
            document.documentElement.style.setProperty('--bg-color', '#f4f4f4');  
            this.document.querySelector('#header-button').style = 'filter: brightness(0) saturate(100%)';
            this.document.querySelector('#button-main_menu').style = 'color: black;';
            this.document.querySelector('#dropdown').style = 'filter: brightness(0) saturate(100%)';
            document.documentElement.style.setProperty('--u-color', '#000000');   

        }
        //BOTTOM
        if(area.getBoundingClientRect().bottom <= 0){
            document.body.classList.remove('featuredAnim');
            document.documentElement.style.setProperty('--border-color', 'black');  
            this.document.querySelector('#button_anim-news').classList.remove('news');  
            document.documentElement.style.setProperty('--bg-color', '#f4f4f4');  
            this.document.querySelector('#header-button').style = 'filter: brightness(0) saturate(100%)';
            this.document.querySelector('#button-main_menu').style = 'color: black;';
            this.document.querySelector('#nav-main').style = 'color: black'            
            this.document.querySelector('#dropdown').style = 'filter: brightness(0) saturate(100%)';
            document.documentElement.style.setProperty('--u-color', '#000000'); 

            

        }
        

    })
}
addScrollEvent('#about-container', '#about-text_container', 250);

// addScrollEvent('#video-header_container', '#about-text_container', 250);



function addScrollEventHeader(areaSelector, num, headerSelector) {
    let area = document.querySelector(areaSelector);
    let header = document.querySelector(headerSelector);
     let prevScroll = 0;
     let currScroll = 0;
    window.addEventListener('scroll', function(e){
    // RELATES TO HEADER SECTION
        currScroll = window.scrollY; // Get current scroll position
        if ( currScroll > prevScroll ) {
            
            // header.style = `transform: translateY(-${currScroll - prevScroll}rem); transition: transform 0.5s ease;`;
            header.style = `transform: translateY(-10rem);`;


        }

        if ( currScroll < prevScroll ) {

            // header.style = `transform: translateY(${prevScroll - currScroll}rem); transition: transform 0.5s ease;`;
            header.style = `transform: translateY(0); `;

        }


        prevScroll = currScroll; // Update prevScroll for next event

        console.log('header is scrolling')
       

        if(area.getBoundingClientRect().top > -num){
            this.document.querySelector('#header-button').style = 'filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7476%) hue-rotate(188deg) brightness(108%) contrast(100%);';
            this.document.querySelector('#button-main_menu').style = 'color: white;';
            console.log('1', area.getBoundingClientRect().top);
            // console.log("HEADER: top of div reached.", area.getBoundingClientRect().top);
            this.document.querySelector('#dropdown').style = "filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(10deg) brightness(117%) contrast(108%);"
            this.document.querySelector('#nav-main').style = 'color: white;';
            document.documentElement.style.setProperty('--bg-color', 'transparent');   


            document.documentElement.style.setProperty('--u-color', '#f4f4f4');   

        }
        if(area.getBoundingClientRect().top > num){
            // console.log("HEADER: top of div has left.", area.getBoundingClientRect().top);
            this.document.querySelector('#header-button').style = 'filter: brightness(0) saturate(100%)';
            this.document.querySelector('#button-main_menu').style = 'color: black;';
            console.log('2');
            document.documentElement.style.setProperty('--u-color', '#000000');   


        }
        //BOTTOM
        if(area.getBoundingClientRect().bottom <= 0 &&  area.getBoundingClientRect().bottom > -num){
            // console.log("HEADER: bottom of div has left.", area.getBoundingClientRect().bottom);
            header.style.background = 'var(--bg-color)';
            // header.style = ` transition:  background-color 0.5s ease;`;
            this.document.querySelector('#header-button').style = 'filter: brightness(0) saturate(100%)';
            this.document.querySelector('#button-main_menu').style = 'color: black;';
            console.log('3');
            this.document.querySelector('#nav-main').style = 'color: black'            
            this.document.querySelector('#dropdown').style = "filter: brightness(0) saturate(100%);"
        }

        

    })

   
}

addScrollEventHeader('#video-header_container', 200, '#header-container'); 

