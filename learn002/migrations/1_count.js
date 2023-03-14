const hdt = require("hardhat");

async function main () {
    const Counter = await hdt.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    console.log(
        `Counter deployed to ${counter.address}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})