// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
      const ul = document.querySelector('ul');
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML = data.joke;
      console.log(data);
    });
};

window.onload = () => getJoke();


const getJoke = async () => {
  await fetchJoke();
  await fetchJoke();
  await fetchJoke();
  await fetchJoke();
}