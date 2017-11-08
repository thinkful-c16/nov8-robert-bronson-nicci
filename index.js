'use strict';

function getUserInput(){
  //get submitted value from the user and clear the input field
  $('.js-search-form').submit(function(event){
    event.preventDefault();
    const searchTerm = $('.js-search-input').val();
    $('.js-search-input').val('');
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
  renderJSONResults(data);
}

function renderJSONResults(results){
  //this function will format/display the .getJSON response data
  console.log(results);
  const jsonHTML = results.items.map(function(item){
    const thumbnail = item.snippet.thumbnails.default.url;
    const height = item.snippet.thumbnails.default.height;
    const width = item.snippet.thumbnails.default.width;
    const videoURL = `https://youtu.be/${item.id.videoId}`;
    const altText = item.snippet.title;
    const channelURL = `https://youtube.com/channel/${item.snippet.channelId}`;
    //console.log(videoURL);
    return `
    <a href="${videoURL}" target="_blank"><img src="${thumbnail}" alt="${altText}" height="${height}" width="${width}"></a><p><a href="${channelURL}" target="_blank">More from this channel</a></p>
    `;
  });

  $('.displayResults').html(jsonHTML); 
}

function main(){
  getUserInput();
}

$(main);



