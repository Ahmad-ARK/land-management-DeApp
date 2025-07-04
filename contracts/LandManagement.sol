// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract LandManagement {
    uint256 public landIdCounter;

    struct Land {
        uint256 id;
        address owner;
        string location;
        uint256 size;
        string ipfsHash; // for storing documents
    }

    mapping(uint256 => Land) public lands;

    event LandRegistered(uint256 id, address owner);
    event LandTransferred(uint256 id, address from, address to);

    function registerLand(string memory location, uint256 size, string memory ipfsHash) public {
        landIdCounter++;
        lands[landIdCounter] = Land(landIdCounter, msg.sender, location, size, ipfsHash);
        emit LandRegistered(landIdCounter, msg.sender);
    }

    function transferLand(uint256 landId, address newOwner) public {
        require(lands[landId].owner == msg.sender, "Not the owner");
        lands[landId].owner = newOwner;
        emit LandTransferred(landId, msg.sender, newOwner);
    }

    function getLand(uint256 landId) public view returns (Land memory) {
        return lands[landId];
    }

    // ✅ New function to return all registered lands
    function getAllLands() public view returns (Land[] memory) {
        Land[] memory all = new Land[](landIdCounter);
        for (uint i = 0; i < landIdCounter; i++) {
            all[i] = lands[i + 1]; // IDs start from 1
        }
        return all;
    }
}
