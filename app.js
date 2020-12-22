const request = require('request')
const geocode = require('./utils/geocode')
const weatherstack_url = 'http://api.weatherstack.com/current?access_key=c99ccfaabc20c162b579559fd619d40a&query=37.8261,-122.4233&units=m'


// 37.8261,-122.4233

// request({ url: weatherstack_url, json: true }, (error, response) => {
//     try {
//         const w_description = response.body.current.weather_descriptions[0]
//         const current_temp = response.body.current.temperature
//         const apparent_temp = response.body.current.feelslike
//         console.log(w_description, "atmosphere. It is", current_temp, "degrees. It feels like", apparent_temp, "out there.")
//     } catch {
//         if (error) {
//             console.log('Unable to connect to weather services. Check your internet connectivity.')
//         } else if (response.body.error) {
//             console.log('Unable to find the location.')
//         }
//     }

// })

geocode('Surat Gujarat', (error, data) => {
    console.log(error)
    console.log(data)
})