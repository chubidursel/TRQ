import { ethers, run } from "hardhat";

// npx hardhat run scripts/Test/doApply.ts

async function main() {
  console.log("🏃 Starting ..... ")

  const [deployer, user1, user2, user3] = await ethers.getSigners();

  const Contract = await ethers.getContractFactory("Apply");
  const contract = await Contract.deploy();

  const contractDeployed = await contract.deployed();

  console.log("👨 The owner of smart contract is: ", deployer.address);
  console.log(`🔥 SC Deployed! Address: ${contract.address}`);

  await contractDeployed.deployTransaction.wait(1)
  console.log("✅ Deployment done ")

  //-------- Test function applying ------------

  const tx1 = await contract.doRequest(321)
  await tx1.wait()

  console.log("📄 Info about request")
  console.log(await contract.requestList(deployer.address))

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});