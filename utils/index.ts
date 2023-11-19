import { CarProps, FilterProps } from '@/types'

export async function fetchCars(filters: FilterProps) {

  const { manufacturer, year, model, fuel, limit } = filters

  const headers = {
      'X-RapidAPI-Key': '764d290df7msh71c363c3c9ed388p143c12jsn08e608baa86a',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  )

  const result = await response.json()

  return result
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  const { make, year, model } = car

  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('year', `${year}`)
  url.searchParams.append('angle', `${angle}`)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', "fullscreen")

  return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type, value)
  

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName
}