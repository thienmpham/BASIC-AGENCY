function exitDrop(buttonSelector, parentSelector) {
    
    let button = document.querySelector(buttonSelector);
    let parent = document.querySelector(parentSelector);
    button.addEventListener('click', function(){
        parent.style.visibility = 'hidden';
        parent.style.pointerEvents = 'none';
    })
}
exitDrop('#exit-button', '#dropdown-page');