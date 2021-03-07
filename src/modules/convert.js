function convertNumber(bin, length) {

    let counter = 0
    let _bases = []
    let bases = []

    let decimal = 0

    initBasesArray()

    for (var i = 0; i < length; i++) {
        if (bin[i] === "0") {
            counter += 1
        }
    }

    if (counter === length) {
        return -1
    }

    for (var i = 0; i < length; i++) {
        if (bin[i] === "0") { 
            counter += 1
        } else if (bin[i] === "1") {
            counter += 1
        }
    }

    if (counter !== length) {
        return false
    }

    for (var w = length; w >= 0; w--) {
        
        if (bin[w] === "1") {
            decimal += bases[w]
        }

    }

    

    function initBasesArray() {

        var base = 1

        _bases.push(base)

        for (var i = 0; i < length - 1; i++) {
            _bases.push(base * 2)
            base *= 2
        }

        for (var a = _bases.length - 1; a >= 0; a--) {
            bases.push(_bases[a])
        }

    }

    return decimal

}

module.exports = {
    convertNumber,
}