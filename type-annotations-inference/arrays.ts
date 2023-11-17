const carMakers = ['ford', 'gm', 'toyota'];
const cars: string[] = [];

const dates = [new Date(), new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake2: string[][] = [];

//Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
