class SuperMath {
    constructor() {}

    check(obj) {
        const validOperators = ["+", "-", "*", "/", "%"]

        if (!validOperators.includes(obj.znak)) {
            console.log("Некоректний оператор. Допустимі оператори:", validOperators.join(", "))
            return
        }

        if (isNaN(obj.X) || isNaN(obj.Y)) {
            console.log("Введені значення не є числами.")
            return
        }

        const confirmation = prompt(
            `Ви хочете виконати операцію ${obj.znak} з числами ${obj.X} та ${obj.Y}? (так/ні)`
        )

        if (confirmation.toLowerCase() === "так") {
            const result = this.performOperation(obj)
            console.log("Результат:", result)
        } else {
            this.input(obj)
        }
    }

    performOperation(obj) {
        switch (obj.znak) {
            case "+":
                return obj.X + obj.Y
            case "-":
                return obj.X - obj.Y
            case "*":
                return obj.X * obj.Y
            case "/":
                return obj.X / obj.Y
            case "%":
                return obj.X % obj.Y
        }
    }

    input(obj) {
        obj.X = parseFloat(prompt("Введіть нове значення для X:"))
        obj.Y = parseFloat(prompt("Введіть нове значення для Y:"))
        obj.znak = prompt("Введіть операцію (+, -, *, /, %):")

        this.check(obj)
    }
}

// Створення об'єкта і виклик методу
const p = new SuperMath()
const obj = { X: 12, Y: 3, znak: "/" }
p.check(obj)
