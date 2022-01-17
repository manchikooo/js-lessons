console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0
console.log('1')
const f = () => {
    console.log('111')
}
f()
// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// 1 СПОСОБ

function sum(n: number) {
    let result = n
    return function sum2(n2: number) {
        let result2 = result + n2
        return function sum3(n3: number) {
            let result3 = result2 + n3
            return result3
        }
    }
}

// 2 СПОСОБ

// function sum(n) {
//     return function sum2(n2) {
//         return function sum3(n3) {
//             return n + n2 + n3
//         }
//     }
// }

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3


function makeCounter() {
    let result = 0
    return function () {
        return result++
    }
}

const counter = makeCounter()
const counter2 = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter2())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2(n: number) {
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

console.log(counter_.inc())
console.log(counter_.inc())
console.log(counter_.inc())
console.log(counter_.decr())
console.log(counter_.decr())
console.log(counter_.reset())
console.log(counter_.set())
console.log(counter_2.inc())
console.log(counter_2.inc())
console.log(counter_2.inc())
console.log(counter_2.reset())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

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

function listFoo(n: any): Function {
    if (n.next === null) return n.value
    console.log(n.value)
    return listFoo(n.next)
}

console.log(listFoo(list))

console.log('2 вариант')

function listFoo2(n: any) {
    while (n) {
        console.log(n.value)
        n = n.next
    }
}

listFoo2(list)


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

console.log('1 вариант')

function listFooReverse(n: any) {
    if (n.next) {
        listFooReverse(n.next)
    }
    console.log(n.value)
}

listFooReverse(list)

console.log('2 вариант')

function listFooReverse2(n: any) {
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

// just a plug
export default () => {
};