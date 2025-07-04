# 🏡 Blockchain Land Registration System

A secure, decentralized land registration system built as a **Final Year Project** using **Ethereum**, **IPFS**, **Node.js**, and **EJS**.  
This DApp enables users to register land, upload documents, transfer ownership, and view land records — all backed by blockchain smart contracts.

---

## Features

- Register land with location, size, and land document (stored on IPFS)
- Authenticate and sign using MetaMask wallet
- Transfer land ownership securely on blockchain
- View land record by ID (location, size, IPFS hash, owner)
- View all registered lands in a dashboard table
- Export land records as CSV
- IPFS integration via Pinata (document storage)
- Immutable and transparent data using Ethereum smart contracts

---

## Tech Stack

| Layer           | Technologies             |
|-----------------|--------------------------|
| Smart Contract  | Solidity, Hardhat        |
| Backend         | Node.js, Express.js      |
| Frontend        | HTML, CSS, EJS           |
| Blockchain Conn | Ethers.js, MetaMask      |
| File Storage    | IPFS via Pinata          |

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blockchain-land-registration.git
cd blockchain-land-registration
