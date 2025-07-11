const getIdAdvice = (id) => id;
const getBodyAdvice = (advice) => advice;

const getAdvice = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const idAdvice = getIdAdvice(data.slip.id);
    const bodyAdvice = getBodyAdvice(data.slip.advice);
    adviceIdElement.textContent = `ADVICE #${idAdvice}`;
    adviceTextElement.textContent = `"${bodyAdvice}"`;
  } catch (error) {
    console.log('error');
  }
};

const adviceIdElement = document.getElementById('adviceId');
const adviceTextElement = document.getElementById('adviceText');
const circleElement = document.getElementById('circle');
circleElement.addEventListener('click', () => {
  getAdvice('https://api.adviceslip.com/advice');
});
