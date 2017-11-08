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
const STORE = {
  endpoint: 'https://www.googleapis.com/youtube/v3/search',
  searchString: ''

};

/******************************************************** 
Step 1: Render the DOM. 
********************************************************/

function buildJSON(searchString) {
  // Recieves the searchString and builds the .getJSON request
  console.log('In buildJSON() function');
  const query = {
    q: `${searchString} in:name`,
    key: 'AIzaSyBTVA9IpirPat_W80y0Abl5N9qoaXOTlq0',
    part: 'snippet'
  };
  $.getJSON(STORE.endpoint, query, getJSONResponse);  // getJSONResponse is the callback function.
}

function getJSONResponse(data){
  console.log('In getJSONResponse() function');
  renderJSONResults(data);
}

function renderJSONResults(results){
  console.log('In renderJSONResults() function');
  console.log(results);
  const jsonHTML=results.items.map(function(item){
    const thumbnail=item.snippet.thumbnails.default.url;
    const height=item.snippet.thumbnails.default.height;
    const width=item.snippet.thumbnails.default.width;
    const videoURL = `https://youtu.be/${item.id.videoId}`;
    const altText = item.snippet.title;
    const channelURL=`https://youtube.com/channel/${item.snippet.channelId}`;
    console.log(videoURL);
    return `
    <a href="${videoURL}" target="_blank"><img src="${thumbnail}" alt="${altText}" height="${height}" width="${width}">
    </a><p><a href="${channelURL}" target="_blank">More from this channel</a></p>
    `;
  });

  $('.displayResults').html(jsonHTML);
}


/******************************************************** 
 * Step 2: Listen for user interactions.
 ********************************************************/
//function that listens to button input
function addListeners() {
  console.log('In addlisteners() function');
  $('#js-searchForm').on('submit', (event) => { 
    event.preventDefault();
    STORE.searchString = $('.js-search-entry').val(); 
    console.log(STORE.searchString);
    buildJSON(STORE.searchString);
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