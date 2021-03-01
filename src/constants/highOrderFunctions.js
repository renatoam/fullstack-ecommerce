
const array1 = ["orange", "blue", 3, 2]
const array2 = ["red", "pink", 7, 3]
const array3 = ["yellow", 8, 5]

function funcInternaMap(cadaItem) {
  return {
    item: cadaItem
  }
}

function funcInternaFilter(cadaItem) {
  return typeof cadaItem === "number"
}

function funcInternaReduce(cadaItem) {
  return cadaItem === "yellow" ?
    "é uma string" :
    ["no es string"]
}

const map = array1.map(funcInternaMap)
const filter = array2.filter(funcInternaFilter)
const reduce = array3.reduce(funcInternaReduce)

console.log("map", map)
console.log("filter", filter)
console.log("reduce", reduce)

const names = ["Tadeo", "Lucas", "Renato"]

function nameMap(name) {
  return {
    name: name
  }
}

const myNames = names.map(nameMap)


const ages = ["40", "50", "60"]

// function toNumber(age) {
//   return Number(age)
// }

// const myAges = ages.map((age) => {
//   return Number(age)
// })

const myAges = ages.map((age) => Number(age))

// function pegarNumerosMaioresQue50(cadaNumero) {
//   return cadaNumero >= 50
// }

// const bigger50 = myAges.filter((cadaNumero) => {
//   return cadaNumero >= 50
// })

const bigger50 = myAges.filter((cadaNumero) => cadaNumero >= 50)


