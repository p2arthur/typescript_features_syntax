class Vehicle {
  protected honk(): void {
    console.log('Biiiiiiiii');
  }
}

// Extends - Vehicle is the "super class" or "parent class"
class Car extends Vehicle {
  private drive(): void {
    console.log('vruuum from car!');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
