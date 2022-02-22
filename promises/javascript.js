
const API_URL = 'https://dog.ceo/api/breeds/image/random';

const getPuppy = () => {
    const promiseddata = fetch(API_URL);
    promiseddata.then(response => response.json())
                .then(addNewPuppy);
}


function addNewPuppy(data) {
    const container = document.querySelector('.main-area');

    const img = document.createElement('img');
    img.src = data.message;
    img.classList.add('thumbnail');
    
    container.appendChild(img);
}

// Add event listener to request data 
const buttonRequest = document.querySelector('.btn-request');
buttonRequest.addEventListener('click', getPuppy);
