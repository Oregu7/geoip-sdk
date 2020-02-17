const colors = require("colors");
const { Geoip } = require("../index");
const ipList = require("./ipList");

const geoip = new Geoip();

function testGeolocationIP(ip) {
    geoip.getLocation(ip)
        .then((geo) =>
            console.log(`Geolocation[${ip}] - ${geo}`)
        )
        .catch((err) =>
            console.error(`Error[${ip}] - ${err.statusCode}`.red)
        );
}

((ipList) => {
    for (let ip of ipList) {
        testGeolocationIP(ip);
    }
})(ipList);