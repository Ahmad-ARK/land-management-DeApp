const hre = require("hardhat");

async function main() {
  const LandManagement = await hre.ethers.getContractFactory("LandManagement");
  
  // Deploy the contract
  const land = await LandManagement.deploy();

  // Wait for the contract to be deployed
  await land.waitForDeployment();

  // Get the deployed address
  const contractAddress = await land.getAddress();

  console.log(`LandManagement deployed to: ${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
