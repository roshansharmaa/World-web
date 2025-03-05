// https://restcountries.com/v3.1/all?fields=name,population,region,capital,flagsrestcountries.com
import axios from 'axios'
const apix= axios.create({
baseURL:'https://restcountries.com/v3.1'

})


// get method
export const getapiogdata=()=>{
  return apix.get('/all?fields=name,population,region,capital,flags')
}