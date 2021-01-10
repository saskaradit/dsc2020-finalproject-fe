// https://indonesia-covid-19.mathdro.id/api/
const heroContainer = document.getElementById('hero-container')
const heroCase = document.getElementById("total-case")
const recovered = document.getElementById("hero-recovered")
const positive = document.getElementById("hero-positive")
const death = document.getElementById("hero-death")
const loader = document.getElementById('loader');

var errorCounter = 0;

function showLoadingSpinner(){
  loader.hidden = false;
  heroContainer.hidden = true;
}
function removeLoadingSpinner(){
  if(!loader.hidden){
    heroContainer.hidden = false;
    loader.hidden = true;
  }
}

async function getStats() {
  showLoadingSpinner();
  const apiUrl = 'https://indonesia-covid-19.mathdro.id/api/'
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    heroCase.innerText = data.jumlahKasus;
    recovered.innerText = data.sembuh;
    positive.innerText = data.perawatan;
    death.innerText = data.sembuh;

    removeLoadingSpinner();
    // console.log(data);
  } catch (error) {
    if(errorCounter<10){
      errorCounter+=1;
      // getQuote();
    }
    else alert('Something is Wrong')
  }
}

getStats();