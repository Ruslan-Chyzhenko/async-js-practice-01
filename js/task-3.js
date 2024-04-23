const promise1 = Promise.resolve('Перший успішно виконаний');
const promise2 = 42;
const promise3 = new Promise(resolve => {
  setTimeout(resolve, 1000, 'Третій успішно виконаний через 1 секунду');
});

Promise.all([promise1, promise2, promise3])
.then(values => {
  console.log(values);
})

const promises = [
  fetch('https://api.chucknorris.io/jokes/random'),
  fetch('https://api.chucknorris.io/jokes/random'),
  fetch('https://api.chucknorris.io/jokes/random'),
]

Promise.race(promises)
.then(response => response.json())
.then(data => {
  console.log(data.value);
})

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

getOrder(['курка', 'бекон', 'томати', 'пармезан'], 'білий');
preparePizza(1000, prepareOrder)
  .then(() => {
    return preparePizza(2000, prepareIngredients);
  })
  .then(() => {
    return preparePizza(1000, addSous);
  })
  .then(() => {
    return preparePizza(3000, bake);
  })
  .then(() => {
    return preparePizza(1000, orderCompletion);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Гарного дня і приходьте до нас ще!');
  });
