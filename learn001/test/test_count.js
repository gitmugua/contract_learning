const Counter = artifacts.require("Counter");
contract("Counter", function(accounts){
    var countInstance;
    it("Counter", function () {
        return Counter.deployed()
        .then(function (instance) {
            countInstance = instance;
            return instance.countNum()
        }).then(function () {
            return countInstance.count();
        }).then(function(count){
            assert.equal(count, 1)
        })
    })
})