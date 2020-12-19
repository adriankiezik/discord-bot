const { get } = require("mongoose")

getSilver(1123)

function getSilver(currency) {
    var silver = Math.floor(currency/100)
    var bronze = currency % 100
    console.log(silver, bronze)
}