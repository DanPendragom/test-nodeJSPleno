const MARKERS = require('../data/markers.json')

exports.markerController = {
    async index(req, res){
        try {
            myfilter = (place) => {
                 let resp = JSON.parse(req.query.placemarked)
                 if (place.latitude <= resp.lat[0] && place.longitude <= resp.lng[0]) {
                      if (place.latitude >= resp.lat[1] && place.longitude >= resp.lng[1]) {
                           return place
                      }
                 }
            }
  
            const filtered = MARKERS.filter(myfilter)
            
            req.io.emit('place', filtered)
            return res.send(filtered)
       }
       catch (err) {
            console.log(err)
            return res.status(400).send({ err: 'Get Makers failed' })
       }
    }
}