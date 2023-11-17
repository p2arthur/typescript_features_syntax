const profile = {
  userName: 'alex',
  age: 20,
  coords: { lat: 0, lng: 15 },
  setAge(newAge: number): void {
    this.age = newAge;
  },
};

const { userName } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
