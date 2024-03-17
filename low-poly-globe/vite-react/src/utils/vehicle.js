export class Vehicle {
    constructor(name, speed, carbonEmissionRate, icon) {
        this.name = name;
        this.speed = speed; // in mph for simplicity
        this.carbonEmissionRate = carbonEmissionRate; // in grams of CO2 per km
        this.icon = icon; // a string that could be a path to an icon image
        this.milesTraveled = 0;
        this.color = {'red':[255,0,0],'green':[0,255,0],'blue':[0,0,255]}[icon];
    }
  
    displayInfo() {
        console.log(`Speed: ${this.speed} km/h, Carbon Emission: ${this.carbonEmissionRate} g/km, Icon: ${this.icon}`);
    }
}

export const vehicles = {
    air: [
        new Vehicle('plane',500,10,'red'),
    ],
    land: [
        new Vehicle('car',75,1,'green'),
    ],
    sea: [
        new Vehicle('cargo ship',5,100,'blue'),
    ]
};
