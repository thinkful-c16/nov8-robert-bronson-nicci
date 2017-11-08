'use strict';

function getUserInput(){
  //get submitted value from the user and clear the input field
  $('.js-search-form').submit(function(event){
    event.preventDefault();
    const searchTerm = $('.js-search-input').val();
    buildJSON(searchTerm);
  });
}

function buildJSON(str){
  //receives the searchTerm and builds the .getJSON request
  const endpoint = 'https://www.googleapis.com/youtube/v3/search';
  const query = {
    q: `${str} in:name`,
    key: 'AIzaSyBTVA9IpirPat_W80y0Abl5N9qoaXOTlq0',
    part: 'snippet'
  };
  $.getJSON(endpoint, query, getJSONResponse);
}

function getJSONResponse(data){
  //callback function for .getJSON request
  const results = data;
  renderJSONResults(results);
}

function renderJSONResults(results){
  //this function will format/display the .getJSON response data
  const html = results.items.map(function(item){
    const thumbnail = item.snippet.thumbnails.default.url;
    return `
    <img src="${thumbnail}" alt="Thumbnail" height="90" width="120">
    `;
  });

  $('.content').append(html); 
}

function main(){
  getUserInput();
}

$(main);



