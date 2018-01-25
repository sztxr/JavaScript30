const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello, I am a %s string!', ':)');

// Styled
console.log('%c I am some great text', 'font-size:30px; background:grey; text-shadow: 5px 5px 0 white;');

// warning!
console.warn('OH NOOO!');

// Error :|
console.error('ERROR!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(1 === 1, 'That is wrong!'); // does't show bc it's true

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    //console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Bos');
console.count('Bos');
console.count('Wes');
console.count('Wes');
console.count('Bos');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/szter')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// table
console.table(dogs);
