'use strict';

var operHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tableElement = document.getElementById('sales-table');
var sellingAreas = [];
var form= document.getElementById('fm');

function CookieStore(
    locName,
    minNumCustPerHour,
    maxNumCustPerHour,
    avgCooPerCust,
) {
    this.locName = locName;
    this.minNumCustPerHour = minNumCustPerHour;
    this.maxNumCustPerHour = maxNumCustPerHour;
    this.avgCooPerCust = avgCooPerCust;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    this.dailyTotal = 0;
    sellingAreas.push(this);
}


CookieStore.prototype.getCustomerPerHour = function () {
    for (var i = 0; i < operHours.length; i++) {
        this.customerPerHour.push(getRandomNumber(this.minNumCustPerHour, this.maxNumCustPerHour));
        
    }

};
CookieStore.prototype.getCookiesPerHour = function () {
    this.getCustomerPerHour();
    for (var i = 0; i < operHours.length; i++) {
        var cookiesPerHour = Math.ceil(this.customerPerHour[i] * this.avgCooPerCust);
        this.cookiesPerHour.push(cookiesPerHour);
       // console.log(cookiesPerHour);
        this.dailyTotal += cookiesPerHour;
    }

};
CookieStore.prototype.render = function () {
    this.getCookiesPerHour();
    var tr2El = document.createElement('tr');
    tableElement.appendChild(tr2El);
    var data1 = document.createElement('td');
    tr2El.appendChild(data1);
    data1.textContent = this.locName;
    for (var t = 0; t < operHours.length; t++) {
        var data12 = document.createElement('td');
        tr2El.appendChild(data12);
        data12.textContent = this.cookiesPerHour[t];
    }
    var totalEl = document.createElement('td');
    tr2El.appendChild(totalEl);
    totalEl.textContent = this.dailyTotal;

};
function createHeaderRow() {
    var headerRowEl = document.createElement('tr');
    tableElement.appendChild(headerRowEl);
    var tableHeaderEl = document.createElement('th');
    headerRowEl.appendChild(tableHeaderEl);
    tableHeaderEl.textContent = ' ';

    for (var t = 0; t < operHours.length; t++) {
        var hr2El = document.createElement('th');
        headerRowEl.appendChild(hr2El);
        hr2El.textContent = operHours[t];
       
    }
    var hrfEl = document.createElement('th');
    headerRowEl.appendChild(hrfEl);
    hrfEl.textContent = 'total';
}
//------
function createFooterRow(){
    var trEl = document.createElement('tr');
   tableElement.appendChild(trEl);
    var tdEl = document.createElement('td');
   trEl.appendChild(tdEl);
   tdEl.textContent = 'total';
   for(var f=0;f<operHours.length;f++)
   {
    var hourlyTotal =0;
    for(var j=0;j<sellingAreas.length;j++){
        hourlyTotal=hourlyTotal + sellingAreas[j].cookiesPerHour[f];
    }

    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = hourlyTotal;
    

   }
   tdEl = document.createElement('td');
   trEl.appendChild(tdEl);
   tdEl.textContent=totalOfTotal();
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//-------------------
function totalOfTotal(){
var totalOfTotal=0;
for(var t=0;t<sellingAreas.length;t++)
{
totalOfTotal+=sellingAreas[t].dailyTotal;
}
return totalOfTotal
}





new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

function renderTable(){
    createHeaderRow();
    for (var i = 0; i<sellingAreas.length; i++){
        sellingAreas[i].render();
    }
    createFooterRow();
}

renderTable();


form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    var location = event.target.NAm.value;
    console.log(location);
    var Min = event.target.minV.value;
    console.log(Min);
    var Max = event.target.maxV.value;
    console.log(Max);
    var Avg = event.target.avgV.value;
    console.log(Avg);
    var confirm = event.target.conf.checked;
    console.log(confirm);
 tableElement.removeChild(tableElement.lastChild);

   var newCookie = new CookieStore(location,Min  ,Max ,Avg );

   newCookie.render();
   createFooterRow();
   
   
   form.reset();
   
   

});