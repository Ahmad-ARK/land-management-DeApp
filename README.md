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
```

### 2. Install Dependencies
```
npm install
```
### Run Local Blockchain (Hardhat)
```
npx hardhat node
```
### Deploy Smart Contract to Local Blockchain
```
npx hardhat run scripts/deploy.js --network localhost
```
### Start the Server
```
node server/app.js
```
Then open your browser at: http://localhost:3000

## MetaMask Setup (Localhost)

1. Open MetaMask and click "Networks" → "Add Network"
2. Add:
   ```
   Network Name: Hardhat Localhost
   RPC URL: http://127.0.0.1:8545
   Chain ID: 31337
   Currency Symbol: ETH
   ```
3. Import a test private key from Hardhat (printed when you run ``` npx hardhat node ```).

## Environment Variables
Create a ``` .env ``` file in the root:
```
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret
```

## Future Enhancements
1. Deploy to Polygon Mumbai or Sepolia Testnet
2. Modern UI with Bootstrap or Tailwind
3. PDF export of land ownership certificate
4. Admin-only registration approval
5. Smart contract test cases (using Hardhat)

## Project Structure
```
blockchain-land-registration/
├── contracts/           # Solidity smart contracts
├── scripts/             # Deployment scripts
├── server/
│   ├── app.js           # Express server
│   ├── routes/          # Route handlers
│   ├── views/           # EJS frontend views
│   └── public/          # JS, CSS, client-side files
├── .env                 # Pinata keys (ignored)
├── package.json
├── hardhat.config.js
└── README.md
```

## Author
Ahmad Khalid
Computer Science Student
University of Engineering and Technology

## License
This project is licensed under the MIT License.

## ⭐️ Star this repo if you found it helpful. Good luck with your first block chain project








