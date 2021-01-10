const pageContainer = document.getElementById('container')
const provinceContainer = document.getElementById('province-container')
const inputBox = document.querySelector('.search-box');
inputBox.value =""
var errorCounter = 0;
var data;

function showLoadingSpinner(){
  loader.hidden = false;
  pageContainer.hidden = true;
}
function removeLoadingSpinner(){
  if(!loader.hidden){
    pageContainer.hidden = false;
    loader.hidden = true;
  }
}

async function getProvinceStats() {
  showLoadingSpinner();
  const apiUrl = 'https://indonesia-covid-19.mathdro.id/api/provinsi'
  try {
    const response = await fetch(apiUrl);
    data = await response.json();

    data.data.forEach(obj => {
      var index = data.data.indexOf(obj);
      createElements(obj,index+1);
    });
    removeLoadingSpinner();
  } catch (error) {
    alert('Something is Wrong')
  }
}

function createElements(obj,index) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('province-box');
  const title = document.createElement('h3');
  title.classList.add('province-title')
  const provinceNum = document.createElement('h3');
  provinceNum.classList.add('province-num');
  provinceNum.innerText = '#'+index
  const minibox = document.createElement('div');
  minibox.classList.add('prov-minibox');

  const positiveNum = document.createElement('h6');
  const positive = document.createElement('h6');
  positiveNum.innerText = obj.kasusPosi
  positive.innerText = 'Positive'
  
  const recoveredNum = document.createElement('h6');
  const recovered = document.createElement('h6');
  recoveredNum.innerText = obj.kasusSemb
  recovered.innerText = 'Recovered'

  const deathNum = document.createElement('h6');
  const death = document.createElement('h6');
  deathNum.innerText = obj.kasusMeni
  death.innerText = 'Recovered'
  minibox.appendChild(positiveNum)
  minibox.appendChild(positive)
  minibox.appendChild(recoveredNum)
  minibox.appendChild(recovered)
  minibox.appendChild(deathNum)
  minibox.appendChild(death)

  title.innerText = obj.provinsi;
  mainDiv.appendChild(title);
  mainDiv.appendChild(provinceNum)
  mainDiv.appendChild(minibox);
  provinceContainer.appendChild(mainDiv);
}

function filterSearch() {
  var filter, a, i, txtValue;
  filter = inputBox.value.toUpperCase();
  items = document.querySelectorAll('.province-title')
  nodes = Array.prototype.slice.call(items);
  data2 = data.data.filter(stats => stats.provinsi.toUpperCase().includes(filter))
  provinceContainer.innerHTML = ""
  data2.forEach(obj => {
    var index = data.data.indexOf(obj);
    createElements(obj,index+1);
  });
}

getProvinceStats();