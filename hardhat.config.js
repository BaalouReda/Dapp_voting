// in this file we have the configartion of the hardhat 
// we set up a fake local network that we will use to test and work with the project the interaction will be 
// in browser with a  react front & ethers.js and metamsak
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  // the local network runing in port 8485 on the local host
  networks: {
    hardhat: {
      chainId: 1337,
    },
  }
}; 