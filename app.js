const sum = (a,b) => {
    return a+b
}

const fromDollarToYen = (dollar) => {
    return dollar*(127.9/1.2)
}

const fromEuroToDollar = (euro) => {
    return euro*1.2
}

const fromYenToPound = (yen) => {
    return yen*(0.8/127.9)
}

module.exports = { sum , fromDollarToYen , fromEuroToDollar , fromYenToPound};