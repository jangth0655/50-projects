const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const data = await (await fetch('https://icanhazdadjoke.com', config)).json();
  jokeEl.textContent = data.joke;
};

/* generateJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
};
 */
jokeBtn.addEventListener('click', generateJoke);
