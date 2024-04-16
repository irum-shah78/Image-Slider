const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container')

async function fetchImages() {
  try {
    const response = await fetch('https://picsum.photos/v2/list?page=2&limit=5', { method: 'GET' });

    const imagesList = await response.json();
    if (imagesList && imagesList.length > 0) displayImages(imagesList);

    console.log(imagesList);

  } catch (error) {
    console.log(error);
  }
}

function displayImages(getImagesList) {
  slider.innerHTML = getImagesList.map((item) => `
   <div class="slide">
   <img src=${item.download_url} alt=${item.id}
   </div>`).join(' ');

  dotsContainer.innerHTML = getImagesList.map((item, index) => `
   <span class="dot" data-slide="${index}">
   </span>`).join(' ');
}





fetchImages();