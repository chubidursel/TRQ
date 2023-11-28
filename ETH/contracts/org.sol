// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Organization {

    // There are 2 type of users (owner or employer) probably gonna add more
    address public owner;

    mapping(address => bool) public employers;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyOwnerOrEmployer {
        require(msg.sender == owner || employers[msg.sender], "Not authorized");
        _;
    }

 
    function addEmployer(address _employer) external onlyOwner {
        employers[_employer] = true;
    }

    function removeEmployer(address _employer) external onlyOwner {
        employers[_employer] = false;
    }

    function transferOwnership(address _newOwner) external onlyOwner {
        owner = _newOwner;
    }
}