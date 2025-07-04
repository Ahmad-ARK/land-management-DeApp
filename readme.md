Absolutely! Here's your polished `README.md` content — just copy and paste this into your `README.md` file in the root of your project folder:

````markdown
# 🏡 Blockchain Land Registration System

A secure, decentralized land registration system built as a **Final Year Project** using **Ethereum**, **IPFS**, **Node.js**, and **EJS**.  
This DApp enables users to register land, upload documents, transfer ownership, and view land records via a clean, wallet-connected interface — all backed by blockchain smart contracts.

---

## 🚀 Features

- 📝 Register land with location, size, and land document (stored on IPFS)
- 🔐 Authenticate and sign using MetaMask wallet
- 🔁 Transfer land ownership securely on blockchain
- 🔎 View land record by ID (location, size, IPFS hash, owner)
- 📊 View all registered lands in a dashboard table
- 📤 Export land records as CSV
- 💾 IPFS integration via Pinata (document storage)
- 🛡️ Immutable and transparent data using Ethereum smart contracts

---

## 🧰 Tech Stack

| Layer         | Technologies |
|---------------|--------------|
| **Smart Contract** | Solidity, Hardhat |
| **Backend**        | Node.js, Express.js |
| **Frontend**       | HTML, CSS, EJS |
| **Blockchain**     | Ethers.js, MetaMask |
| **File Storage**   | IPFS via Pinata API |

---

## 📦 Setup Instructions

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/yourusername/blockchain-land-registration.git
cd blockchain-land-registration
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Local Blockchain (Hardhat)

```bash
npx hardhat node
```

### 4️⃣ Deploy Smart Contract to Local Blockchain

```bash
npx hardhat run scripts/deploy.js --network localhost
```

> 📝 Note the deployed contract address and update it in `public/contract.js`

### 5️⃣ Start the Server

```bash
node server/app.js
```

Then open your browser at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 MetaMask Setup (Localhost)

1. Open MetaMask and click "Networks" → "Add Network"
2. Add:

```
Network Name: Hardhat Localhost
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Currency Symbol: ETH
```

3. Import a test private key from Hardhat (printed when you run `npx hardhat node`)

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret
```

---

## 📊 Dashboard Preview

> (Insert screenshots inside a `screenshots/` folder)

| Register Land                 | View Dashboard                 |
| ----------------------------- | ------------------------------ |
| ![](screenshots/register.png) | ![](screenshots/dashboard.png) |

---

## ✨ Future Enhancements

* 🌐 Deploy to Polygon Mumbai or Sepolia Testnet
* 🎨 Modern UI with Bootstrap or Tailwind
* 📄 PDF export of land ownership certificate
* 🧾 Admin-only registration approval
* 🧪 Smart contract test cases (using Hardhat)

---

## 📁 Project Structure

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

---

## 👨‍💻 Author

**Ahmad Khalid**
Final Year Computer Science Student
University of Engineering and Technology

---

## 📜 License

This project is licensed under the MIT License.

---

> ⭐️ Star this repo if you found it helpful. Good luck with your FYP submission!

```

---

Let me know if you'd like a version with:
- Screenshot placeholders removed
- Your actual GitHub URL inserted
- Auto-deploy instructions for Netlify or Vercel

You're now ready to make your GitHub repo shine for FYP submission and portfolio 🚀✅
```
