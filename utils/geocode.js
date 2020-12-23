const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoib21jaGV2bGkiLCJhIjoiY2tpcjczeXgyMGc5ZzJxcDRzcGVpMWQ0YyJ9.KA2OpWqVrlnKKwGs87HkfA&limit=1'

    request({ url, json: true }, (error, { body } = {}) => {
        try {
            const lon = body.features[0].center[0]
            const lat = body.features[0].center[1]
            const location = body.features[0].place_name

            callback(undefined, { lon, lat, location })
        } catch {
            if (error) {
                callback('Unable to connect to MapBox. Check your internet connectivity.', undefined)
            } else if (body.features.length === 0) {
                callback('Unable to find coordinates.', undefined)
            }
        }
    })
}

module.exports = geocode