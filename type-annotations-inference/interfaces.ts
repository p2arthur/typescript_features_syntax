interface Broken {
  isBroken: boolean;
  brokenPart: string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: { isBroken: true, brokenPart: 'engine' },
  summary(): string {
    return `Car name: ${this.name}, Car year: ${this.year}, Is car broken? ${this.broken.isBroken}, Broken part: ${this.isBroken.brokenPart}`;
  },
};

const drink = {
  color: 'orange',
  carbonated: true,
  sugar: 40,
  summary() {
    return `Drink color: ${this.color}, Drink is carbonated: ${this.carbonated}, Sugar grams: ${this.sugar} grams`;
  },
};

const printSummary = (item: Reportable): void => {
  const summary = item.summary();
  console.log(summary);
};

printSummary(oldCivic);
printSummary(drink);

//--------------------------------------------------------------------------

interface Turnable {
  turnOn(): string;
}

const computer = {
  gpu: 'RTX 1080',
  motherboard: 'Asus',
  screen: 'LG HDMI',
  turnOn() {
    return `Someone just turned on a computer with a ${this.gpu} and an ${this.motherboard} motherboard and a ${this.screen} screen`;
  },
};

const phone = {
  maker: 'Apple',
  memory: '300GB',
  owner: 'Marcelin capa preta',
  turnOn() {
    return `${this.owner} just turned on his ${this.maker} phone that has ${this.memory} storage space`;
  },
};

const turnOnElectronic = (electronic: Turnable) => {
  const turnOnMessage = electronic.turnOn();
  console.log(turnOnMessage);
};

turnOnElectronic(computer);
turnOnElectronic(phone);
