interface Calculator {
    calc: Function;
}

class InterestCalculator implements Calculator {
    constructor(private principal: number = 1, private rate: number = 7, private time: number = 1) { }

    public calc(): number {
        return this.principal * this.rate * (this.time / 100);
    }
}

class ShapeCalculator implements Calculator {
    constructor(private sides: number = 3) { }

    calc(): String {

        switch (this.sides) {
            case 3:
                return "Triangle";
            case 4:
                return "Quadilateral";
            case 5:
                return "Pentagon";
            case 6:
                return "Hexagon";
            case 0:
                return "Circle";
            default:
                return "Invaid shape detected!";
        }
    }
}    


let interestCalculator = new InterestCalculator(50000, 10, 4);
let shapeCalculator = new ShapeCalculator(6);

console.log(`Interest: ${interestCalculator.calc()}`);
console.log(`Shape: ${shapeCalculator.calc()}`);
