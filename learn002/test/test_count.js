const {expect} = require("chai");

describe("Counter", function(){
    it("Counter test", async function(){
        const Counter = await ethers.getContractFactory("Counter");
        const _counter = await Counter.deploy();
        await _counter.deployed();

        expect(await _counter.get()).to.equal("Hello world");
        await _counter.add(1);
        expect(await _counter.count()).amount.equal(1);
    })
});