/* global $ */
'use strict';

/******************************************************** 
 Questions and answers data 
********************************************************/
// $.getJSON('https://www.googleapis.com/youtube/v3/search', (response) => {
//     console.log(response);
// });

// function handleResponse(response) {
//     // do something with `response`
//     const elements = response.map(item => `<li>${item.title}</li>`);
//     $('.results').html(elements);
// }

// $.getJSON('https://www.googleapis.com/youtube/v3/search', handleResponse);
/******************************************************** 
 All global variables here. 
********************************************************/
// const STORE = {
//     results {

//     }
// }

// const query = {
//     q: $(),
//     part:,
//     key:
// }

/******************************************************** 
Step 1: Render the DOM. 
********************************************************/



/******************************************************** 
 * Step 2: Listen for user interactions.
 ********************************************************/
//function that listens to button inputRobert Frazier9:31 AM
function addListeners() {
  console.log('add addlisteners works!!');
  $('#js-searchForm').on('submit', (event) => { 
    event.preventDefault();
    const searchString = $('.js-search-entry').val(); 
    console.log(searchString); 
  });
  $('.js-searchButton').on('click', 'button', () => { 
  }); 
}




/******************************************************** 
 * Step 3: Change the state of the STORE. 
 ********************************************************/





/******************************************************** 
 * Step 0: Wait for page to load, then begin. Once only.
 ********************************************************/

$(()=>{
  // console.log('Begin the Quiz program.');
  addListeners();
});

// Render -> User Input (Event Listener) -> State Changes (Update the STORE) -> Re-Render