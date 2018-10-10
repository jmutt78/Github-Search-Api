'use strict'

const apiKey =

const searchUrl = `https://api.github.com/users/jmutt78/repos`;

//Event listerner that gets users submission//
function inputSubmit(){
$('#search-bar').on('keyup', function(e){
  let searchQeury = e.target.value;
});

}

//Ajax request to get object information
function getGetHubData(){


  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson, maxResults))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });

}
//dispalys thumbnail and title
function dataDisplay(){

}

//function handler
function handleGethubApi(){
inputSubmit();

}

$(handleGethubApi);
