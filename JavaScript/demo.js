'use strict';

//constructor function | factory function
//1 name start with CAPS
//2 the use of `new` keyword to instantiate objects
//3 prototype method

function Cat(name, age, likes, goodWithDogs, goodWithCats, goodWithKids, breed, imagePath) {
  this.name = name;
  this.age = age;
  this.likes = likes;
  this.goodWithDogs = goodWithDogs;
  this.goodWithCats = goodWithCats;
  this.goodWithKids = goodWithKids;
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
