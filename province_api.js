
var errorCounter = 0;

async function getProvinceStats() {
  // showLoadingSpinner();
  const apiUrl = 'https://indonesia-covid-19.mathdro.id/api/provinsi'
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // var datajson = JSON.parse();

    console.log(data.data);
    // console.log(datajson);
    // removeLoadingSpinner();

    data.data.forEach(obj => {
      console.log(obj.fid)
      // createElements(obj);
    });
  } catch (error) {
    if(errorCounter<10){
      errorCounter+=1;
      // getQuote();
    }
    else alert('Something is Wrong')
  }
}

function createElements(obj) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('blog-post');
  const title = document.createElement('h3');
  title.classList.add('blog-title');
  title.innerHTML = obj['provinsi'];
  // const text = document.createElement('p');
  // text.classList.add('blog-text');
  // text.innerHTML = obj['text'];
  // const date = document.createElement('div');
  // date.classList.add('blog-date');
  // date.innerHTML = obj['date'];
  mainDiv.appendChild(title);
  // mainDiv.appendChild(text);
  // mainDiv.appendChild(date);
  document.querySelector('body').appendChild(mainDiv);
}

getProvinceStats();