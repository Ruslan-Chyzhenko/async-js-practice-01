let someInterval = setInterval(() => {
  console.log('виконалася операція з інтервалом');
}, 500);

clearInterval(someInterval);

const numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

numbers.forEach(number => {
  doubledNumbers.push(number * 2);
})

console.log(doubledNumbers);

doubledNumbers = numbers.map(number => {
  return number * 2;
})

console.log(doubledNumbers);

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

const found = numbers.find(number => {
  return number > 3;
});

console.log(found);

fetch('https://api.chucknorris.io/jokes/random')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data.value);
  })

//   Pizza

const storeRoom = {
  ingredients: ['гриби', 'салямі', 'бекон', 'курка', 'кукурудза', 'томати', 'ананаси', 'пармезан'],
  souses: ['білий', 'червоний'],
};

let orderFulfillment = (ingredients, sous, production) => {
  setTimeout(() => {
    const missingIngredients = ingredients.filter(ingredient => {
      return !storeRoom.ingredients.includes(ingredient);
    });

    if (missingIngredients.length) {
      console.log(`Вибачте, але наразі у нас відсутні такі інградієнти: ${missingIngredients.join(', ')}.
      Спробуйте використати інший набір продуктів.`);
    } else {
      const ingredientsToAdd = storeRoom.ingredients.filter(ingredient => {
        return ingredients.includes(ingredient);
      });
      console.log(`Починаємо виготовлення піцци з таких продуктів: ${ingredientsToAdd.join(', ')}.
       Для основи використовуємо ${sous} соус.`);

      production();
    }
  }, 1000)
}

let preparePizza = () => {
  setTimeout(() => {
    console.log('Приготування інградієнтів для піцци завершено.');

    setTimeout(() => {
      console.log('На основу нанесено соус.');

      setTimeout(() => {
        console.log('Випікання завершено.');

        setTimeout(() => {
          console.log('Піццу порізано та видано клієнту. Смачного!');
        }, 1000);
      }, 3000);
    }, 1000);
  }, 2000);
}

orderFulfillment(['курка', 'бекон', 'томати', 'пармезан'], 'білий', preparePizza);
