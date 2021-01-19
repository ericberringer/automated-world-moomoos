// import { useCity } from './cities/CityDataProvider.js' NOW IN CityList.js
// useCity()
import { useCity } from './cities/CityDataProvider.js'
import { cityList } from './cities/CityList.js'
cityList()

// console.log(useCity()) Used to test

import { useLocation } from './locations/LandmarkDataProvider.js'
useLocation()