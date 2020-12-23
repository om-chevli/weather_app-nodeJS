const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c99ccfaabc20c162b579559fd619d40a&query=' + lat + ',' + long + '&units=m'
    request({ url, json: true }, (error, { body } = {}) => {
        try {
            const w_description = body.current.weather_descriptions[0]
            const current_temp = body.current.temperature
            const apparent_temp = body.current.feelslike
            callback(undefined, w_description + " atmosphere. It is " + current_temp + " degrees. It feels like " + apparent_temp + " out there.")
        } catch {
            if (error) {
                callback('Unable to connect to weather services. Check your internet connectivity.', undefined)
            } else if (body.error) {
                console.log('Unable to find the location.', undefined)
            }
        }
    })
}


module.exports = forecast