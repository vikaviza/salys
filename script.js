// var countries = ["Grenada", "Malawi", "Lesotho", "Switzerland", "Tonga"]
// var size = [344, 118484, 30355, 41284, 747]
// var population = [112523, 19129952, 2142249, 8654622, 105695]
// var Density = size * 1000000

var countries = [
    {
        country: "Grenada",
        size: 344,
        population: 112.523,
    },
    {
        country: "Malawi",
        size: 118484,
        population: 19.129952,
    },
    {
        country: "Lesotho",
        size: 30355,
        population: 2.142249,
    },
    {
        country: "Switzerland",
        size: 41284,
        population: 8.654622,
    },
    {
        country: "Tonga",
        size: 747,
        population: 105.695,
    },
]


for(var x of countries){

var density = x.population / x.size
var result = density * 1000000

console.log("Šalis: " + x.country + ", joje gyvena " + x.population.toFixed(2) + "mln. gyventojų.")
console.log("Valstybės plotas: " + x.size + " km², plotas tenkantis vienam gyventojui: " + result.toFixed(2) + " m².(Taip, vis dėl to matematika mano silpnoji vieta :D)")
console.log("=======================================================================")
}