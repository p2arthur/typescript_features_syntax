class Vehicle {
  constructor(public color: string, public horsePower: number) {}

  protected honk(): void {
    console.log('Biiiiiiiii');
  }

  protected logCarColor(): void {
    console.log(this.color);
  }

  protected logCarHorsePower(): void {
    console.log(this.horsePower);
  }
}

//----------------------------------------------------------------------------

// Extends - Vehicle is the "super class" or "parent class"
class Car extends Vehicle {
  constructor(public wheels: number, color: string, horsePower: number) {
    super(color, horsePower);
  }

  private drive(): void {
    console.log('vruuum from car!');
  }

  public startDrivingProcess(): void {
    this.logCarColor();
    this.logCarHorsePower();
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'orange', 15000);
car.startDrivingProcess();
