export async function fetchCars() {
  const headers = {
      'X-RapidAPI-Key': '764d290df7msh71c363c3c9ed388p143c12jsn08e608baa86a',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', { headers: headers })

  const result = await response.json()
}

export const calculateCarRent = (city_mpg: number, year:number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const milageRate = city_mpg * mileageFactor;
  const ageRate = year * ageFactor;
  const rentalRatePerDay = basePricePerDay + milageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
} ;