document.addEventListener("DOMContentLoaded", async () => {
    const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"; // Replace with your actual address
    ethereum.request({ method: 'eth_accounts' }).then(accounts => {
        console.log("🧭 Current MetaMask account:", accounts[0]);
    });

    const abi = [
        {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "LandRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "LandTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getAllLands",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "size",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "ipfsHash",
              "type": "string"
            }
          ],
          "internalType": "struct LandManagement.Land[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "landId",
          "type": "uint256"
        }
      ],
      "name": "getLand",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "size",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "ipfsHash",
              "type": "string"
            }
          ],
          "internalType": "struct LandManagement.Land",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "landIdCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "lands",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "name": "registerLand",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "landId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferLand",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
    ];

    let provider, signer, contract;

    // ✅ Utility to connect and update address/contract
    async function connectAndUpdate() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        if (!accounts || accounts.length === 0) {
            document.getElementById("walletAddress").innerText = "🛑 No wallet connected";
            return;
        }

        const connectedAddress = accounts[0];
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, abi, signer);

        document.getElementById("walletAddress").innerText = `Connected: ${connectedAddress}`;
        console.log("🔌 Wallet synced:", connectedAddress);
    }




    // ✅ Initial connect
    if (window.ethereum) {
        try {
            await connectAndUpdate();
        } catch (err) {
            console.error("MetaMask connection error:", err);
        }
    } else {
        alert("🦊 MetaMask not found!");
        return;
    }

    // ✅ Live account change detection
    // window.ethereum.on("accountsChanged", async (accounts) => {
    //     if (accounts.length === 0) {
    //         document.getElementById("walletAddress").innerText = "🛑 Wallet disconnected";
    //         return;
    //     }

    //     const newAccount = accounts[0];
    //     provider = new ethers.providers.Web3Provider(window.ethereum);
    //     signer = provider.getSigner();
    //     contract = new ethers.Contract(contractAddress, abi, signer);

    //     document.getElementById("walletAddress").innerText = `Switched: ${newAccount}`;
    //     console.log("🔁 MetaMask switched to:", newAccount);
    // });
    window.ethereum.on("accountsChanged", async (accounts) => {
        console.log("🔁 Account switched:", accounts[0]);
        await connectAndUpdate(); // always reconnect signer and update UI
    });



    // ✅ Manual "Connect Wallet" button
    const connectBtn = document.getElementById("connectWalletBtn");
    if (connectBtn) {
        connectBtn.addEventListener("click", async () => {
            try {
                // 👇 This prompts MetaMask to let the user select accounts again
                await ethereum.request({
                    method: "wallet_requestPermissions",
                    params: [{ eth_accounts: {} }],
                });

                // 👇 This now returns the *selected* account correctly
                await connectAndUpdate();
            } catch (err) {
                console.error("Permission request failed:", err);
            }
        });
    }

    // ✅ Register Land
    const regForm = document.getElementById("registerForm");
    if (regForm) {
        regForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const location = document.getElementById("location").value.trim();
            const size = document.getElementById("size").value.trim();
            const fileInput = document.getElementById("landDoc");
            const file = fileInput && fileInput.files ? fileInput.files[0] : null;

            console.group("🚀 Register Inputs");
            console.log("Location:", location);
            console.log("Size:", size);
            console.log("File:", file);
            console.groupEnd();

            if (!location || !size || isNaN(size) || !file) {
                alert("⚠️ Please fill all fields and select a file.");
                return;
            }

            const formData = new FormData();
            formData.append("landDoc", file);

            let ipfsHash = null;

            try {
                const res = await fetch("/ipfs/upload", {
                    method: "POST",
                    body: formData,
                });

                const data = await res.json();
                ipfsHash = data.ipfsHash;

                if (!ipfsHash || typeof ipfsHash !== "string") {
                    alert("❌ IPFS upload failed — check server.");
                    return;
                }

                console.log("✅ IPFS Hash returned:", ipfsHash);
            } catch (err) {
                console.error("Upload error:", err);
                alert("❌ Upload failed.");
                return;
            }

            try {
                const tx = await contract.registerLand(location, size, ipfsHash, {
                    gasLimit: 3000000,
                });
                await tx.wait();
                document.getElementById("registerStatus").innerText = `✅ Registered! IPFS: ${ipfsHash}`;
            } catch (err) {
                console.error("Smart contract error:", err);
                alert("❌ MetaMask transaction failed. Check inputs.");
            }
        });
    }

    // ✅ View Land
    const viewForm = document.getElementById("viewForm");
    if (viewForm) {
        viewForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const landId = document.getElementById("viewLandId").value;
            console.log("📄 Fetching land ID:", landId);

            try {
                const land = await contract.getLand(landId);
                console.log("✅ Land found:", land);

                document.getElementById("landDetails").innerHTML = `
          <p><strong>ID:</strong> ${land.id}</p>
          <p><strong>Owner:</strong> ${land.owner}</p>
          <p><strong>Location:</strong> ${land.location}</p>
          <p><strong>Size:</strong> ${land.size} sqft</p>
          <p><strong>Document:</strong> <a href="https://ipfs.io/ipfs/${land.ipfsHash}" target="_blank">${land.ipfsHash}</a></p>
        `;
            } catch (err) {
                console.error("❌ Failed to fetch land:", err);
                document.getElementById("landDetails").innerHTML =
                    `<p style="color: red;">❌ Land with ID ${landId} not found.</p>`;
            }
        });
    }

    // ✅ Transfer Land
    const transForm = document.getElementById("transferForm");
    if (transForm) {
        transForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const landId = document.getElementById("landId").value.trim();
            const newOwner = document.getElementById("newOwner").value.trim();

            console.log("🔁 Transfer Attempt");
            console.log("Land ID:", landId);
            console.log("New Owner:", newOwner);

            if (!landId || !newOwner) {
                alert("⚠️ Please fill in both fields.");
                return;
            }

            try {
                const tx = await contract.transferLand(landId, newOwner, {
                    gasLimit: 3000000,
                });
                await tx.wait();
                document.getElementById("transferStatus").innerText =
                    `✅ Land ID ${landId} transferred to ${newOwner}`;
            } catch (err) {
                console.error("❌ Transfer failed:", err);
                document.getElementById("transferStatus").innerText =
                    "❌ Transfer failed. Are you the current owner?";
            }
        });
    }


    const loadBtn = document.getElementById("loadLands");
    const exportBtn = document.getElementById("exportCsv");
    const landTableBody = document.querySelector("#landTable tbody");

    if (loadBtn && landTableBody) {
        loadBtn.addEventListener("click", async () => {
            try {
                const lands = await contract.getAllLands();
                landTableBody.innerHTML = ""; // clear table

                lands.forEach((land) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
          <td>${land.id}</td>
          <td>${land.owner}</td>
          <td>${land.location}</td>
          <td>${land.size} sqft</td>
          <td><a href="https://ipfs.io/ipfs/${land.ipfsHash}" target="_blank">View Doc</a></td>
        `;
                    landTableBody.appendChild(row);
                });
            } catch (err) {
                console.error("Error loading lands:", err);
                alert("Failed to fetch land records.");
            }
        });
    }

    if (exportBtn && landTableBody) {
        exportBtn.addEventListener("click", () => {
            const rows = Array.from(landTableBody.querySelectorAll("tr"));
            const csv = [
                ["ID", "Owner", "Location", "Size", "IPFS Hash"]
            ];

            rows.forEach(row => {
                const cols = Array.from(row.querySelectorAll("td"));
                csv.push(cols.map(cell => cell.textContent));
            });

            const blob = new Blob([csv.map(e => e.join(",")).join("\n")], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "land-records.csv";
            a.click();
            URL.revokeObjectURL(url);
        });
    }

if (loadBtn && landTableBody) {
  loadBtn.addEventListener("click", async () => {
    try {
      const lands = await contract.getAllLands();
      landTableBody.innerHTML = ""; // Clear table

      lands.forEach((land) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${land.id}</td>
          <td>${land.owner}</td>
          <td>${land.location}</td>
          <td>${land.size}</td>
          <td><a href="https://ipfs.io/ipfs/${land.ipfsHash}" target="_blank">View Doc</a></td>
        `;
        landTableBody.appendChild(row);
      });
    } catch (err) {
      console.error("Error loading lands:", err);
      alert("❌ Failed to fetch land records.");
    }
  });
}
window.contract = contract;


});
