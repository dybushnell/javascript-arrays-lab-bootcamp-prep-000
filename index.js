var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens = kittens.concat(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens = [name,...kittens]
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens = kittens.slice(0,kittens.length-1)
}

