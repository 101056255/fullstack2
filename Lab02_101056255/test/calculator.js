const chai = require('chai')
const {add, sub, div, mul} = require("../app/calculator");

let assert = chai.assert

describe("Addition", function (){
    it("Adds 2 numbers", function (){
        assert.equal(add(5, 2), 7);
    })
    it("Adds 2 numbers", function (){
        assert.equal(add(5,2), 8);
    })
})

describe("Subtraction", function (){
    it("Subtracts 2 numbers", function (){
        assert.equal(sub(5, 2), 3);
    })
    it("Subtracts 2 numbers", function (){
        assert.equal(sub(5,2), 5);
    })
})

describe("Multiplication", function (){
    it("Multiplies 2 numbers", function (){
        assert.equal(mul(5, 2), 10);
    })
    it("Multiplies 2 numbers", function (){
        assert.equal(mul(5,2), 13);
    })
})

describe("Division", function (){
    it("Divides 2 numbers", function (){
        assert.equal(div(10, 2), 5);
    })
    it("Divides 2 numbers", function (){
        assert.equal(div(10,2), 13);
    })
})
