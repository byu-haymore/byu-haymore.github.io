const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
// let section = document.querySelector('.town-events');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;
  populateEvents(townData);
}

function populateEvents(jsonObj) {
  let towns = jsonObj['towns'];
  for (let i = 0; i < towns.length; i++) {
    townName = towns[i].name;
    if ( townName == 'Preston') {
      let events = towns[i].events;
      console.log(events);
      for (let e = 0; e < events.length; e++) {
        let par = document.createElement('p');
        par.textContent = events[e];
        console.log(events[e]);
        // section.appendChild(par);
        document.getElementById('town-events').appendChild(par);
      }
    }
  }

}
