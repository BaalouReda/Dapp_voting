const hre = require("hardhat");
/** 
 * in this file we deploy the two contracts 
 * ( in the systeme will deploy 4  because voter contract use
 *  Ownable.sol contract in openzeppelin also  the same for u
 * seelctionvotecontract)
 * the contract after deploying will generate a .json compiled version in src/artifacts(as we mentioned in the config file)
 * and a an adress that we will collect
 * **/
async function main() {
  const Voter = await hre.ethers.getContractFactory("Voter");
  
  const voter = await Voter.deploy();
  await voter.deployed();

  console.log("voter deployed to:", voter.address);

  const UsElectionVote = await hre.ethers.getContractFactory("UsElectionVote");
  
  const uselectionvote = await UsElectionVote.deploy();
  await uselectionvote.deployed();

  console.log("election vote deployed to:", uselectionvote.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
