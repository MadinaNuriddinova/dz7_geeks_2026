    class Car {
    constructor(obj) {
      this.brand = obj.brand
      this.model = obj.model
      this.year = obj.year
      this.color = obj.color
      this.speed = obj.speed
      this.fuel = obj.fuel
      this.isStarted = obj.isStarted
    }
  
    start() {
      this.isStarted = true
      console.log(this.brand + " заведена")
    }
  
    drive() {
      if (this.isStarted && this.fuel > 0) {
        this.speed += 20
        this.fuel -= 10
        console.log(this.brand + " едет. Скорость: " + this.speed)
      } else {
        console.log("Машина не может ехать")
      }
    }
  
    repaint(newColor) {
      this.color = newColor
      console.log(this.brand + " перекрашена в " + this.color)
    }
  }

  class ElectricCar extends Car {
    drive() {
      if (this.isStarted && this.fuel > 0) {
        this.speed += 30
        this.fuel -= 5
        console.log(this.brand + " (электро) едет быстро. Скорость: " + this.speed)
      } else {
        console.log("Машина не может ехать")
      }
    }
  }
  
  class SportCar extends Car {
    drive() {
      if (this.isStarted && this.fuel > 0) {
        this.speed += 50
        this.fuel -= 20
        console.log(this.brand + " (спорт) мчится! Скорость: " + this.speed)
      } else {
        console.log("Машина не может ехать")
      }
    }
  }

  const car1 = new Car({
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "белый",
    speed: 0,
    fuel: 100,
    isStarted: false
  })
  
  const car2 = new Car({
    brand: "Tesla",
    model: "Model 3",
    year: 2022,
    color: "чёрный",
    speed: 0,
    fuel: 80,
    isStarted: false
  })
  
  const car3 = new Car({
    brand: "BMW",
    model: "M5",
    year: 2021,
    color: "синий",
    speed: 0,
    fuel: 90,
    isStarted: false
  })

  car1.start()
  car1.drive()
  
  // car2.start()
  // car2.drive()
  
  // car3.start()
  // car3.drive()
  
  // car1.repaint("красный")