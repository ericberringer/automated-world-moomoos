// import { useCity } from './cities/CityDataProvider.js' NOW IN CityList.js
// useCity()
import { useCity } from './cities/CityDataProvider.js'
import { cityList } from './cities/CityList.js'


// console.log(useCity()) Used to test

import { useLandmark } from './locations/LandmarkDataProvider.js'
import { landmarkList } from './locations/LandmarkList.js'

import { useCelebrity } from './celebrities/CelebritiesDataProvider.js'
import { celebrityList } from './celebrities/CelebritiesList.js'
// useLandmark()
cityList()
landmarkList()

// useCelebrity()
celebrityList()
