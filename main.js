const car = {
    name: 'car',
    start() {
      console.log('Start the ' + this.name);
    },
    speedUp() {
      console.log('Speed up the ' + this.name);
    },
    stop() {
      console.log('Stop the ' + this.name);
    },
  };
  
  //console.log(car);

  const aircraft = {
    name: 'aircraft',
    fly() {
      console.log('Fly');
    },
  }

  car.start.call(aircraft)
  car.speedUp.call(aircraft)
  aircraft.fly.call(aircraft)

//output
//   Start the aircraft
// Speed up the aircraft
// Fly"