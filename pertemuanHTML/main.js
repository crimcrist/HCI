// Deklarasi variabel
let a = 'a' 
let b = 1   
var c = 2.1 
let d = [1, 2, 3, "string", "a", true] 

// Menampilkan variabel ke konsol
console.log(a, b, c, d)

// Percabangan if-else
if (a == 'a') { 
    console.log("a adalah 'a'")
} 
else if (a == 'b') {
    console.log("a adalah 'b'")
} 
else {
    console.log("a bukan 'a' atau 'b'")
}

// Percabangan switch
switch (a) { 
    case 'B':
        console.log('value B')
        break
    case 'C':
        console.log('value C')
        break
    default:
        console.log('default case executed')
}

// Perulangan while
while (true) { 
    console.log('Loop berhenti')
    break;
}

// Perulangan for
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Fungsi dengan callback
var z = 'z'

function printSomething(text, callback) {
    console.log(text) 
    callback()
}

// Arrow function
const someFunction = () => { 
    console.log(z) 
    console.log('this is a function')
}

// Memanggil fungsi
printSomething('this is a text', someFunction)
someFunction()

// Fungsi dengan parameter
function add(a, b) {
    return a + b
}

// Memanggil fungsi
console.log(add(1, 2))  // Output: 3

