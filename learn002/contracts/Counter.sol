// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.0.8;

contract Counter {

   uint256 public amount;

   address public owner;

    constructor() {
        amount = 0;
        owner = msg.sender;
    }

   function add(uint256 num) internal () {
        amount = amount + num;
   }

   function count()  public view returns(uint256 memory) {
        require(msg.sender == owner);
        amount = amount + 1;
        return amount;
   }
}