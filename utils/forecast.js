const request = require('request')

const forecast = (long, lat, callback) => {
    const weatherstack_url = 'http://api.weatherstack.com/current?access_key=c99ccfaabc20c162b579559fd619d40a&query=' + long + ',' + lat + '&units=m'
    request({ url: weatherstack_url, json: true }, (error, response) => {
        try {
            const w_description = response.body.current.weather_descriptions[0]
            const current_temp = response.body.current.temperature
            const apparent_temp = response.body.current.feelslike
            callback(undefined, w_description, "atmosphere. It is", current_temp, "degrees. It feels like", apparent_temp, "out there.")
        } catch {
            if (error) {
                callback('Unable to connect to weather services. Check your internet connectivity.', undefined)
            } else if (response.body.error) {
                console.log('Unable to find the location.', undefined)
            }
        }
    })
}


module.exports = forecast