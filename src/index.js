module.exports = function reverse (n) { 
    const strRepr = n.toString();
    const reversedStrRepr = strRepr.split("").reverse().join("");
    return Number.parseInt(reversedStrRepr);
}
