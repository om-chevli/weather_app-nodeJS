const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]
if (city === null || city === undefined || city === "") {
    console.log('Please Enter City.')
} else {
    const logic = geocode(city, (error, data) => {
        if (error)
            return console.log(error)

        forecast(data.lon, data.lat, (error, forecastData) => {
            if (error)
                return console.log(error)
            console.log(data.location)
            console.log(forecastData)
        })
    })
}