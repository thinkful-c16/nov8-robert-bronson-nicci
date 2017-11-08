/* global $ */
'use strict';

/******************************************************** 
 Questions and answers data 
********************************************************/
$.getJSON('https://www.googleapis.com/youtube/v3/search', (response) => {
    console.log(response);
});


/******************************************************** 
 All global variables here. 
********************************************************/
const STORE = []

/******************************************************** 
Step 1: Render the DOM. 
********************************************************/



/******************************************************** 
 * Step 2: Listen for user interactions.
 ********************************************************/
//function that listens to button inputRobert Frazier9:31 AM
function addListeners() {
  $('#js-search-entry').on('submit', 'form', () => { 
    const searchString = $('input').val(); 
    checkGuess(searchString); 
    render(); 
});

  $('#js-search-entry').on('click', 'button', () => { 
    changePage('guess'); 
    render(); 
  }); 
};




/******************************************************** 
 * Step 3: Change the state of the STORE. 
 ********************************************************/





/******************************************************** 
 * Step 0: Wait for page to load, then begin. Once only.
 ********************************************************/

$(()=>{
  // console.log('Begin the Quiz program.');
  addListeners();
}

// Render -> User Input (Event Listener) -> State Changes (Update the STORE) -> Re-Render