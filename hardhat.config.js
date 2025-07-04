// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.28",
// };

// require("@nomicfoundation/hardhat-toolbox");

// module.exports = {
//   solidity: "0.8.18",
//   networks: {
//     hardhat: {},
//   },
// };

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.8.28",
      },
    ],
  },
};

