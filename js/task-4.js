function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function asyncFunc() {
  console.log('Початок виконання функції');

  await wait(1000);
  console.log('Пройшла одна секунда');

  await wait(1000);
  console.log('Пройшло дві секунди');

  return 'Виконання завершено';
}

asyncFunc()
.then(result => console.log(result));

const url = 'https://api.chucknorris.io/jokes/random';

function fetchJoke() {
  console.log('Жарт завантажується...');
  return wait(2000)
    .then(() => {
      return fetch(url);
    })
    .then(response => response.json());
}

fetchJoke()
  .then(data => {
    console.log(data.value);
  })
  .catch(error => {
    console.log(error);
  });

async function fetchAsyncJoke() {
  console.log('Жарт завантажується...');

  try {
    await wait(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Це повідомлення зʼявиться незалежно від результату');
  }

}

fetchAsyncJoke();


async function parallelTasks() {
  try {
    const [response1, response2] = await Promise.all([
      fetch(url),
      fetch(url),
    ]);

    const result1 = await response1.json();
    const result2 = await response2.json();

    console.log(result1.value);
    console.log(result2.value);
  } catch (error) {
    console.log(error);
  }
}

parallelTasks();

async function asuncFunc() {
  await operation1();
  await operation2();
  await operation3();
}

asuncFunc();


async function parallelExecution() {
  const result1 = operation1();
  const result2 = operation2();
  const result3 = operation3();

  await Promise.all([result1, result2, result3]);
}

parallelExecution();


async function errorHandling() {
  try {
    const result = await asyncOperation();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

errorHandling();

// Pizza

const storeRoom = {
  ingredients: ['гриби', 'салямі', 'бекон', 'курка', 'кукурудза', 'томати', 'ананаси', 'пармезан'],
  souses: ['білий', 'червоний'],
};

let isAllGood = false;
let missingIngredients = [];
let selectedIngredients = [];
let selectedSous = '';

let getOrder = (ingredients, sous) => {
  missingIngredients = ingredients.filter(ingredient => !storeRoom.ingredients.includes(ingredient));
  isAllGood = !missingIngredients.length;
  selectedIngredients = storeRoom.ingredients.filter(ingredient => ingredients.includes(ingredient));
  selectedSous = sous;
}

let preparePizza = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isAllGood) {
      setTimeout(() => {
        resolve(work());
      }, time)
    } else {
      reject(`Вибачте, але наразі у нас відсутні такі інградієнти: ${missingIngredients.join(', ')}.
       Спробуйте використати інший набір продуктів.`);
    }
  })
}

let prepareOrder = () => {
  console.log(`Починаємо виготовлення піцци з таких продуктів: ${selectedIngredients.join(', ')}.
        Для основи використовуємо ${selectedSous} соус.`);
}

let prepareIngredients = () => {
  console.log('Приготування інградієнтів для піцци завершено.');
}

let addSous = () => {
  console.log('На основу нанесено соус.');
}

let bake = () => {
  console.log('Випікання завершено.');
}

let orderCompletion = () => {
  console.log('Піццу порізано та видано клієнту. Смачного!');
}

let orderFulfillment = async () => {
  getOrder(['курка', 'бекон', 'томати', 'пармезан', 'цибуля', 'груша'], 'білий');

  try {
    await preparePizza(1000, prepareOrder);
    await preparePizza(2000, prepareIngredients);
    await preparePizza(1000, addSous);
    await preparePizza(3000, bake);
    await preparePizza(1000, orderCompletion);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Гарного дня і приходьте до нас ще!');
  }
}

orderFulfillment();