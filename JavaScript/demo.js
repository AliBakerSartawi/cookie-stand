'use strict';

//constructor function | factory function
//1 name start with CAPS
//2 the use of `new` keyword to instantiate objects
//3 prototype method

function Cat(name, age, likes, goodWithCats, goodWithKids, goodWithDogs, breed) {
  this.name = name;
  this.age = age;
  this.likes = likes;
  this.goodWithCats = goodWithCats;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.breed = breed;
  this.imagePath = './images/${this.name).jpeg';

}

//methods should be outside the constructor method
Cat.prototype.func = function() {
  //do not forget to use 'this.' to refer to the properties in object Cat

};
Cat.prototype.render = function(){
  const container = document.getElementById('cats');
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);

  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);

  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const th1El = document.createElement('th');
  headerRowEl.appendChild(th1El);
  th1El.textContent = 'Name';
  const th2El = document.createElement('th');
  headerRowEl.appendChild(th2El);
  th2El.textContent = 'Age';
  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'Likes';

  const dataRow1El = document.createElement('tr');
  tableEl.appendChild(dataRow1El);
  const td1El = document.createElement('td');
  dataRow1El.appendChild(td1El);
  td1El.textContent = this.name;
  const td2El = document.createElement('td');
  dataRow1El.appendChild(td2El);
  td2El.textContent = this.age;
  const td3El = document.createElement('td');
  dataRow1El.appendChild(td3El);
  td3El.textContent = this.likes;

};


// console.log(Cat('frankie', 3, ['cuddling', 'running'], false, true, true, 'Siamese', '../images/salmon.png'));
const frankie = new Cat('frankie', 3, ['cuddling', 'running'], false, true, true, 'Siamese', '../images/salmon.png');
console.log(frankie);
frankie.render();

const form = document.getElementById('cats-form');
form.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event.target);

  const name = event.target.name.value;
  const breed = event.target.breed.value;
  //split to make multiple values as an array
  // or can make it like split('-') or split(' ') to state the type of allowed separator, a dash or a space, default is comma I guess
  const likes = event.target.likes.value.split(',');
  //for booleans we use checked instead of value
  const likesCats = event.target.likescats.checked;
  const likesKids = event.target.likeskids.checked;
  const likesDogs = event.target.likesdogs.checked;
  const cattie = new Cat(name, 11, likes, likesCats, likesKids, likesDogs, breed);
  cattie.render();
  form.reset(); //to reset form values after submitting
});

