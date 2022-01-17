function sum(n) {
    return function sum2(n2) {
        return function sum3(n3) {
            return n + n2 + n3
        }
    }
}


function makeCounter() {
    let result = 0
    return function () {
        return result++
    }
}

const counter = makeCounter()
const counter2 = makeCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter2())
// console.log(counter2())

function makeCounter2(n) {
    let result = n
    return {
        inc: function inc() {
            return result++
        },
        decr: function inc() {
            return result -= 1
        },
        reset: function inc() {
            return result = 0
        },
        set: function inc() {
            return result = n
        },
    }
}

const counter_ = makeCounter2(5)
const counter_2 = makeCounter2(5)

// console.log(counter_.inc())
// console.log(counter_.inc())
// console.log(counter_.inc())
// console.log(counter_.decr())
// console.log(counter_.decr())
// console.log(counter_.reset())
// console.log(counter_.set())
// console.log(counter_2.inc())
// console.log(counter_2.inc())
// console.log(counter_2.inc())
// console.log(counter_2.reset())

// ЗАДАЧИ С LEARN.JS

// ЗАДАЧА 1
// первый способ
function sumFoo(n) {  // цикл
    let sum = 0
    for (let i = n; i >= 0; i--) {
        sum = sum + i
    }
    return sum
}

console.log(sumFoo(100))

// второй способ
function sumFoo2(n) {  // рекурсия
    if (n === 1) return 1
    return n + sumFoo2(n - 1)
}

console.log(sumFoo2(100))

// третий способ
function sumTo3(n) {  // формула арифметической прогрессии
    return n * (n + 1) / 2
}

console.log(sumTo3(100))

// ЗАДАЧА 2

function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))
console.log(factorial(2))

// ЗАДАЧА 3 // сам не решил

function fibonacciNumbers(n) {
    if (n <= 1) return n
    return fibonacciNumbers(n - 1) + fibonacciNumbers(n - 2)
}

function fib(n) {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}

console.log(fib(7))
console.log(fib(2))


// ЗАДАЧА 5
console.log('задача 4')

console.log('1 вариант')

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
};

function listFoo(n) {
    if (n.next === null) return n.value
    console.log(n.value)
    return listFoo(n.next)
}

console.log(listFoo(list))

console.log('2 вариант')

function listFoo2(n) {
    while (n) {
        console.log(n.value)
        n = n.next
    }
}

listFoo2(list)

// ЗАДАЧА 6 // решил с подсказкой, рекурсию понял
console.log('задача 5')

console.log('1 вариант')

function listFooReverse(n) {
    if (n.next) {
        listFooReverse(n.next)
    }
    console.log(n.value)
}

listFooReverse(list)

console.log('2 вариант')

function listFooReverse2(n) {
    let arr = []
    while (n) {
        arr.push(n.value)
        n = n.next
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}

listFooReverse2(list)

// let arr = [1, 2, 3, 4, 5, [5, 2, [1, 2, 8, 6], 89, 25, 2, 5, [23, 3, 121], 32]]
//
// // arr.reduce((n, acc) => {typeof n === 'number' ? acc + n : n.reduce())
//
// function foo(n) {
//     let sum = 0
//     return n.map(num => {
//         if (typeof num === 'number'){
//             sum += num
//         }  else foo(n)
//     })
//
// }
//
// foo(arr)
