function convertCurrency(currency) {
    switch(true) {
        case (currency == "0"):
            return "Wow, literally nothing."
        case (currency == "1"):
            return `${currency} bronze coin.`
        case (currency.length == 1):
            return `${currency} bronze coins.`
        case (currency.length == 2):
            return `${currency} bronze coins.`
        case (currency == "100"):
            return `1 silver coin.`;
        case (currency.length == 3):
            if(currency.slice(1) !== "00") {
                if(currency.slice(1, 2) !== "0") {
                    return `${currency.slice(0, 1)} silver and ${currency.slice(1)} bronze coins.`
                } else {
                    return `${currency.slice(0, 1)} silver and ${currency.slice(2)} bronze coin.`
                }
            } else {
                return `${currency.slice(0, 1)} silver coins.`
            }
        case (currency.length == 4):
            if(currency.slice(2) !== "00") {
                if(currency.slice(2, 3) == "0") {
                    return `${currency.slice(0, 2)} silver and ${currency.slice(3, 4)} bronze coin.`
                } else {
                    return `${currency.slice(0, 2)} silver and ${currency.slice(2, 4)} bronze coins.`
                }
            } else {
                return `${currency.slice(0, 2)} silver coins.`
            }
        case (currency == "10000"):
            return `1 gold coin.`
        case (currency.length == 5):
            if(currency.slice(1, 2) !== "0") {
                if(currency.slice(3, 4) !== "0") {
                    return `${currency.slice(0, 1)} gold, ${currency.slice(1,3)} silver and ${currency.slice(3, 5)} bronze coins.`
                } else {
                    if(currency.slice(4, 5) !== "1") {
                        return `${currency.slice(0, 1)} gold, ${currency.slice(1,3)} silver and ${currency.slice(4, 5)} bronze coins.`
                    } else {
                        return `${currency.slice(0, 1)} gold, ${currency.slice(1,3)} silver and ${currency.slice(4, 5)} bronze coin.`
                    }
                }
            } else {
                if(currency.slice(3, 4) !== "0") {
                    return `${currency.slice(0, 1)} gold, ${currency.slice(2,3)} silver and ${currency.slice(3, 5)} bronze coins.`
                } else {
                    if(currency.slice(4, 5) !== "1") {
                        return `${currency.slice(0, 1)} gold, ${currency.slice(2,3)} silver and ${currency.slice(4, 5)} bronze coins.`
                    } else {
                        return `${currency.slice(0, 1)} gold, ${currency.slice(2,3)} silver and ${currency.slice(4, 5)} bronze coin.`
                    }
                }
            }
        default:
            return 'NaN'
    }
}

module.exports = convertCurrency;