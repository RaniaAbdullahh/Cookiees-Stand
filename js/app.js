'use strict';

var operHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Seattle = {

    minNumCustPerHour: 23,
    maxNumCustPerHour: 65,
    avgCooPerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],
    total: 0,
    locName: "Seattle",

    getCustomerPerHour: function () {
        for (var i = 0; i < operHours.length; i++) {
            this.customerPerHour.push(getRandom(this.minNumCustPerHour, this.maxNumCustPerHour));
           this.cookiesPerHour.push( Math.ceil(this.avgCooPerCust * this.customerPerHour[i]));
            

            this.total += this.cookiesPerHour[i];

        }


    },
    render: function () {
        var container = document.getElementById('container');
        var unOrdList = document.createElement('ul');
        var titleLiEl = document.createElement('p');
        container.appendChild(titleLiEl);
        container.appendChild(unOrdList);
        titleLiEl.textContent = this.locName;
        var listEl = document.createElement('li');
        console.log(operHours[0]);
        for (var i = 0; i < operHours.length; i++) {
            listEl = document.createElement('li');
            listEl.textContent = `${operHours[i]} : ${this.cookiesPerHour[i]}`;
            unOrdList.appendChild(listEl);
        }



    },
};


Seattle.getCustomerPerHour();
Seattle.render();


function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}



var Tokyo = {

    minNumCustPerHour: 3,
    maxNumCustPerHour: 24,
    avgCooPerCust: 1.2,
    customerPerHour: [],
    cookiesPerHour: [],
    total: 0,
    locName: "Tokyo",

    getCustomerPerHour: function () {
        for (var i = 0; i < operHours.length; i++) {
            this.customerPerHour.push(getRandom(this.minNumCustPerHour, this.maxNumCustPerHour));
           this.cookiesPerHour.push( Math.ceil(this.avgCooPerCust * this.customerPerHour[i]));
            

            this.total += this.cookiesPerHour[i];

        }


    },
    render: function () {
        var container = document.getElementById('container');
        var unOrdList = document.createElement('ul');
        var titleLiEl = document.createElement('p');
        container.appendChild(titleLiEl);
        container.appendChild(unOrdList);
        titleLiEl.textContent = this.locName;
        var listEl = document.createElement('li');
        console.log(operHours[0]);
        for (var i = 0; i < operHours.length; i++) {
            listEl = document.createElement('li');
            listEl.textContent = `${operHours[i]} : ${this.cookiesPerHour[i]}`;
            unOrdList.appendChild(listEl);
        }



    },
};
Tokyo.getCustomerPerHour();
Tokyo.render();

var Dubai = {

    minNumCustPerHour: 11,
    maxNumCustPerHour: 38,
    avgCooPerCust: 3.7,
    customerPerHour: [],
    cookiesPerHour: [],
    total: 0,
    locName: "Dubai",

    getCustomerPerHour: function () {
        for (var i = 0; i < operHours.length; i++) {
            this.customerPerHour.push(getRandom(this.minNumCustPerHour, this.maxNumCustPerHour));
           this.cookiesPerHour.push( Math.ceil(this.avgCooPerCust * this.customerPerHour[i]));
            

            this.total += this.cookiesPerHour[i];

        }


    },
    render: function () {
        var container = document.getElementById('container');
        var unOrdList = document.createElement('ul');
        var titleLiEl = document.createElement('p');
        container.appendChild(titleLiEl);
        container.appendChild(unOrdList);
        titleLiEl.textContent = this.locName;
        var listEl = document.createElement('li');
        console.log(operHours[0]);
        for (var i = 0; i < operHours.length; i++) {
            listEl = document.createElement('li');
            listEl.textContent = `${operHours[i]} : ${this.cookiesPerHour[i]}`;
            unOrdList.appendChild(listEl);
        }



    },
};


Dubai.getCustomerPerHour();
Dubai.render();


var Paris = {

    minNumCustPerHour: 20,
    maxNumCustPerHour: 38,
    avgCooPerCust: 2.3,
    customerPerHour: [],
    cookiesPerHour: [],
    total: 0,
    locName: "Paris",

    getCustomerPerHour: function () {
        for (var i = 0; i < operHours.length; i++) {
            this.customerPerHour.push(getRandom(this.minNumCustPerHour, this.maxNumCustPerHour));
           this.cookiesPerHour.push( Math.ceil(this.avgCooPerCust * this.customerPerHour[i]));
            

            this.total += this.cookiesPerHour[i];

        }


    },
    render: function () {
        var container = document.getElementById('container');
        var unOrdList = document.createElement('ul');
        var titleLiEl = document.createElement('p');
        container.appendChild(titleLiEl);
        container.appendChild(unOrdList);
        titleLiEl.textContent = this.locName;
        var listEl = document.createElement('li');
        console.log(operHours[0]);
        for (var i = 0; i < operHours.length; i++) {
            listEl = document.createElement('li');
            listEl.textContent = `${operHours[i]} : ${this.cookiesPerHour[i]}`;
            unOrdList.appendChild(listEl);
        }



    },
};


Paris.getCustomerPerHour();
Paris.render();

var Lima = {

    minNumCustPerHour: 23,
    maxNumCustPerHour: 65,
    avgCooPerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],
    total: 0,
    locName: "Lima",

    getCustomerPerHour: function () {
        for (var i = 0; i < operHours.length; i++) {
            this.customerPerHour.push(getRandom(this.minNumCustPerHour, this.maxNumCustPerHour));
           this.cookiesPerHour.push( Math.ceil(this.avgCooPerCust * this.customerPerHour[i]));
            

            this.total += this.cookiesPerHour[i];

        }


    },
    render: function () {
        var container = document.getElementById('container');
        var unOrdList = document.createElement('ul');
        var titleLiEl = document.createElement('p');
        container.appendChild(titleLiEl);
        container.appendChild(unOrdList);
        titleLiEl.textContent = this.locName;
        var listEl = document.createElement('li');
        console.log(operHours[0]);
        for (var i = 0; i < operHours.length; i++) {
            listEl = document.createElement('li');
            listEl.textContent = `${operHours[i]} : ${this.cookiesPerHour[i]}`;
            unOrdList.appendChild(listEl);
        }



    },
};




Lima.getCustomerPerHour();
Lima.render();