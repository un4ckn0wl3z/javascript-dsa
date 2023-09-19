function analyzeCarMileage(cars) {
    

    const result = cars.reduce((result, car, index) => {

        if(car.mileage > result.highestMileageCar.mileage){
            result.highestMileageCar = car
        }

        if(car.mileage < result.lowestMileageCar.mileage){
            result.lowestMileageCar = car
        }

        result.totalMileage += car.mileage
        result.averageMileage = parseFloat((result.totalMileage / ( index +1 )).toFixed(2))
        return result
    }, {
        averageMileage: 0,
        highestMileageCar: {
            mileage: 0
        },
        lowestMileageCar: cars[0],
        totalMileage: 0
    })

   return result
}

module.exports = analyzeCarMileage;
