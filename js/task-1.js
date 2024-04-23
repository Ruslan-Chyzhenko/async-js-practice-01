console.log('перший виклик');
console.log('другий виклик');
console.log('третій виклик');

console.log('перший виклик');
setTimeout( () => {
  console.log('другий виклик')
}, 2000);
console.log('третій виклик');

console.log('перший виклик');
setTimeout( () => {
  console.log('другий виклик')
}, 0);
console.log('третій виклик');

function greet(name, callback) {
  console.log(`Привіт ${name} !`);
  callback()
}

function sayGoodbye() {
  console.log('Бувай!');
}

greet('Юлія', sayGoodbye);
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let successful = false;
    if (successful) {
      resolve('Операція виконана успішно');
    } else {
      reject('Під час виконання операції виникла помилка');
    };
  }, 2000)
});

promise.then((message) => {
  console.log(`Success: ${message}`);
}).catch((message) => {
  console.log(`Error: ${message}`);
});

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('виконано');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('викликається');
  const result = await resolveAfter2Seconds();
  console.log(result);
  console.log('виклик завершено');
}

asyncCall();