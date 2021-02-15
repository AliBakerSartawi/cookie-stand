// 'use strict';

// //helper function

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCust: 0,
//   avgPerCustSales: 6.3,
//   salesPerHour: [],
//   totalSales: 0,
//   getAvgCust: function () {
//     this.avgCust = getRandomNumber(this.minCust, this.maxCust);
//   },
//   render: function() {
//     const container = document.getElementById('sales');
//     console.log(container);
//     // <main>
//     //     <h1>Shop Location</h1>
//     //     <ul>
//     //         <li>6am: 16 cookies</li>
//     //         <li>7pm: 30 cookies</li>
//     //         <li>Total: 875 cookies</li>
//     //     </ul>
//     // </main>
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent = this.name;

//     const unEl = document.createElement('ul');
//     sectionEl.appendChild(unEl);

//     const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       this.getAvgCust();
//       let perHourCookies = this.avgCust * this.avgPerCustSales;
//       this.salesPerHour.push(`${hours[i]}: ${Math.ceil(perHourCookies)}`);
//       totalCookies = totalCookies + perHourCookies; //or better make it totalCookies += perHourCookies
//       const liEl = document.createElement('li');
//       unEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${Math.ceil(perHourCookies)}`;
//     }
//     const liEl = document.createElement('li');
//     unEl.appendChild(liEl);
//     liEl.textContent = `Total: ${Math.ceil(totalCookies)}`;

//     this.totalSales = Math.ceil(totalCookies);
//   },
// };

// console.log(seattle);
// seattle.render();


// const tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCust: 0,
//   avgPerCustSales: 1.2,
//   salesPerHour: [],
//   totalSales: 0,
//   getAvgCust: function () {
//     this.avgCust = getRandomNumber(this.minCust, this.maxCust);
//   },
//   render: function() {
//     const container = document.getElementById('sales');
//     console.log(container);
//     // <main>
//     //     <h1>Shop Location</h1>
//     //     <ul>
//     //         <li>6am: 16 cookies</li>
//     //         <li>7pm: 30 cookies</li>
//     //         <li>Total: 875 cookies</li>
//     //     </ul>
//     // </main>
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent = this.name;

//     const unEl = document.createElement('ul');
//     sectionEl.appendChild(unEl);

//     const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       this.getAvgCust();
//       let perHourCookies = this.avgCust * this.avgPerCustSales;
//       this.salesPerHour.push(`${hours[i]}: ${Math.ceil(perHourCookies)}`);
//       totalCookies = totalCookies + perHourCookies;
//       const liEl = document.createElement('li');
//       unEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${Math.ceil(perHourCookies)}`;
//     }
//     const liEl = document.createElement('li');
//     unEl.appendChild(liEl);
//     liEl.textContent = `Total: ${Math.ceil(totalCookies)}`;

//     this.totalSales = Math.ceil(totalCookies);
//   },
// };

// console.log(tokyo);
// tokyo.render();



// const dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCust: 0,
//   avgPerCustSales: 3.7,
//   salesPerHour: [],
//   totalSales: 0,
//   getAvgCust: function () {
//     this.avgCust = getRandomNumber(this.minCust, this.maxCust);
//   },
//   render: function() {
//     const container = document.getElementById('sales');
//     console.log(container);
//     // <main>
//     //     <h1>Shop Location</h1>
//     //     <ul>
//     //         <li>6am: 16 cookies</li>
//     //         <li>7pm: 30 cookies</li>
//     //         <li>Total: 875 cookies</li>
//     //     </ul>
//     // </main>
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent = this.name;

//     const unEl = document.createElement('ul');
//     sectionEl.appendChild(unEl);

//     const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       this.getAvgCust();
//       let perHourCookies = this.avgCust * this.avgPerCustSales;
//       this.salesPerHour.push(`${hours[i]}: ${Math.ceil(perHourCookies)}`);
//       totalCookies = totalCookies + perHourCookies;
//       const liEl = document.createElement('li');
//       unEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${Math.ceil(perHourCookies)}`;
//     }
//     const liEl = document.createElement('li');
//     unEl.appendChild(liEl);
//     liEl.textContent = `Total: ${Math.ceil(totalCookies)}`;

//     this.totalSales = Math.ceil(totalCookies);
//   },
// };

// console.log(dubai);
// dubai.render();



// const paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCust: 0,
//   avgPerCustSales: 2.3,
//   salesPerHour: [],
//   totalSales: 0,
//   getAvgCust: function () {
//     this.avgCust = getRandomNumber(this.minCust, this.maxCust);
//   },
//   render: function() {
//     const container = document.getElementById('sales');
//     console.log(container);
//     // <main>
//     //     <h1>Shop Location</h1>
//     //     <ul>
//     //         <li>6am: 16 cookies</li>
//     //         <li>7pm: 30 cookies</li>
//     //         <li>Total: 875 cookies</li>
//     //     </ul>
//     // </main>
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent = this.name;

//     const unEl = document.createElement('ul');
//     sectionEl.appendChild(unEl);

//     const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       this.getAvgCust();
//       let perHourCookies = this.avgCust * this.avgPerCustSales;
//       this.salesPerHour.push(`${hours[i]}: ${Math.ceil(perHourCookies)}`);
//       totalCookies = totalCookies + perHourCookies;
//       const liEl = document.createElement('li');
//       unEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${Math.ceil(perHourCookies)}`;
//     }
//     const liEl = document.createElement('li');
//     unEl.appendChild(liEl);
//     liEl.textContent = `Total: ${Math.ceil(totalCookies)}`;

//     this.totalSales = Math.ceil(totalCookies);
//   },
// };

// console.log(paris);
// paris.render();



// const lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCust: 0,
//   avgPerCustSales: 4.6,
//   salesPerHour: [],
//   totalSales: 0,
//   getAvgCust: function () {
//     this.avgCust = getRandomNumber(this.minCust, this.maxCust);
//   },
//   render: function() {
//     const container = document.getElementById('sales');
//     console.log(container);
//     // <main>
//     //     <h1>Shop Location</h1>
//     //     <ul>
//     //         <li>6am: 16 cookies</li>
//     //         <li>7pm: 30 cookies</li>
//     //         <li>Total: 875 cookies</li>
//     //     </ul>
//     // </main>
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent = this.name;

//     const unEl = document.createElement('ul');
//     sectionEl.appendChild(unEl);

//     const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       this.getAvgCust();
//       let perHourCookies = this.avgCust * this.avgPerCustSales;
//       this.salesPerHour.push(`${hours[i]}: ${Math.ceil(perHourCookies)}`);
//       totalCookies = totalCookies + perHourCookies;
//       const liEl = document.createElement('li');
//       unEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${Math.ceil(perHourCookies)}`;
//     }
//     const liEl = document.createElement('li');
//     unEl.appendChild(liEl);
//     liEl.textContent = `Total: ${Math.ceil(totalCookies)}`;

//     this.totalSales = Math.ceil(totalCookies);
//   },
// };

// console.log(lima);
// lima.render();
