const provinceContainer = document.getElementById('province-container')

var errorCounter = 0;

async function getProvinceStats() {
  // showLoadingSpinner();
  const apiUrl = 'https://indonesia-covid-19.mathdro.id/api/provinsi'
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.data);

    data.data.forEach(obj => {
      var index = data.data.indexOf(obj);
      createElements(obj,index+1);
    });
  } catch (error) {
    alert('Something is Wrong')
  }
}

function createElements(obj,index) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('province-box');
  const title = document.createElement('h3');
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
  // document.querySelector('body').appendChild(mainDiv);
}

getProvinceStats();