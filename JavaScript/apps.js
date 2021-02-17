'use strict';

//helper function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//important arrays
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const footerTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


//constructor object for shop locations
function ShopLocation(name, minCust, maxCust, avgPerCustSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCustSales = avgPerCustSales;
  this.randomCust = 0;
  this.salesPerHour = [];
}
ShopLocation.prototype.getRandomCust = function(){
  this.randomCust = getRandomNumber(this.minCust, this.maxCust);
};
ShopLocation.prototype.render = function (){
  let totalCookies = 0;

  const container = document.getElementById('sales');
  const tableRow = document.createElement('tr');
  container.appendChild(tableRow);

  const tableHeadingEl = document.createElement('th');
  tableRow.appendChild(tableHeadingEl);
  tableHeadingEl.setAttribute('scope', 'row');
  tableHeadingEl.textContent = this.name;

  for (let i = 0; i < hours.length; i++) {
    this.getRandomCust();
    let perHourCookies = this.randomCust * this.avgPerCustSales;
    footerTotals[i] += Math.ceil(perHourCookies);
    this.salesPerHour.push(`${hours[i]}: ${Math.ceil(perHourCookies)}`);
    totalCookies = totalCookies + perHourCookies;

    const dataEl = document.createElement('td');
    tableRow.appendChild(dataEl);
    dataEl.textContent = Math.ceil(perHourCookies);
  }
  footerTotals[14] += Math.ceil(totalCookies);
  const dataEl = document.createElement('td');
  tableRow.appendChild(dataEl);
  dataEl.textContent = Math.ceil(totalCookies);
};


//instantiating shop locations
const seattle = new ShopLocation('Seattle', 23, 65, 6.3);
const tokyo = new ShopLocation('Tokyo', 3, 24, 1.2);
const dubai = new ShopLocation('Dubai', 11, 38, 3.7);
const paris = new ShopLocation('Paris', 20, 38, 2.3);
const lima = new ShopLocation('Lima', 2, 16, 4.6);


//table header function
function renderHeader(){
  const container = document.getElementById('sales');
  const tableRow = document.createElement('tr');
  container.appendChild(tableRow);

  const tableHeadingEl = document.createElement('th');
  tableRow.appendChild(tableHeadingEl);
  tableHeadingEl.textContent = 'Location';

  for (let i = 0; i < hours.length; i++) {
    const tableHeadingEl = document.createElement('th');
    tableRow.appendChild(tableHeadingEl);
    tableHeadingEl.textContent = hours[i];
  }
  const lastTableHeadingEl = document.createElement('th');
  tableRow.appendChild(lastTableHeadingEl);
  lastTableHeadingEl.textContent = 'Daily Location Total';
}


//table renders
renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();




// footerTotals function
function renderFooterTotals(){

  const footerContainer = document.getElementById('sales');
  const footerRow = document.createElement('tr');
  // footerContainer.removeChild(footerRow)[0];
  footerContainer.appendChild(footerRow);
  // footerRow.setAttribute('id', 'footer-remove');
  
  const tableHeadingEl = document.createElement('th');
  footerRow.appendChild(tableHeadingEl);
  tableHeadingEl.setAttribute('scope', 'row');
  tableHeadingEl.textContent = 'Totals';
  
  for (let i = 0; i < footerTotals.length; i++) {
    const tableHeadingEl = document.createElement('th');
    footerRow.appendChild(tableHeadingEl);
    tableHeadingEl.textContent = Math.ceil(footerTotals[i]);
  }
}


const form = document.getElementById('new-shop');
form.addEventListener('submit', function(event){
  event.preventDefault();
  
  const name = event.target.name.value;
  const min = event.target.min.value;
  const max = event.target.max.value;
  const avg = event.target.avg.value;
  const newShop = new ShopLocation(name, min, max, avg);
  // remove here by Id
  // footerContainer.removeChild(footerRow);
  
  const container = document.getElementById('sales');
  const rowCount = container.rows.length;
  container.deleteRow(rowCount -1);
  newShop.render();
  form.reset();

  renderFooterTotals();
});

renderFooterTotals();

// function newFooter() {
//   const newContainer = document.getElementById('sales');
//   const newFooter = document.createElement('tr');
//   newContainer.appendChild(newFooter);

//   const tableHeadingEl = document.createElement('th');
//   newFooter.appendChild(tableHeadingEl);
//   tableHeadingEl.setAttribute('scope', 'row');
//   tableHeadingEl.textContent = 'Totals';

//   for (let i = 0; i < footerTotals.length; i++) {
//     const tableHeadingEl = document.createElement('th');
//     newFooter.appendChild(tableHeadingEl);
//     tableHeadingEl.textContent = Math.ceil(footerTotals[i]);
//   }
// }
// newFooter();