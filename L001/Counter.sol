// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
contract Counter {

    uint public count;

    constructor() {
        count = 0;
    }

    function countNum()  public returns(uint) {
        count = count + 1;
        return count;
    }

    function add(uint256 amount) public {
        count = count + amount;
    }
}