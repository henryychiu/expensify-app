//
// Object destructuring
//

const person = {
  name: 'Henry',
  age: 16,
  location: {
    city: 'Union City',
    temp: 71
  }
};
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);
const { city, temp: temperature } = person.location
console.log(`It's ${temperature} in ${city}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};
const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

//
// Array destructuring
//

const address = ['1738 Pablo Street', 'Union City', 'California', '94587'];
const [, cityName, state = 'New York'] = address;
console.log(`You are in ${cityName} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
