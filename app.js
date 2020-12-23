const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]

if (city === null || city === undefined || city === "") {
    console.log('Please Enter City.')

} else {
    geocode(city, (error, { lon, lat, location } = {}) => {
        if (error)
            return console.log(error)

        forecast(lon, lat, (error, forecastData) => {
            if (error)
                return console.log(error)

            console.log(location)
            console.log(forecastData)
        })
    })
}