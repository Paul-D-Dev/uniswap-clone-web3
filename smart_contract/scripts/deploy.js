const hre = require("hardhat");

const main = async () => {
    const transactionFactory = await hre.ethers.getContractFactory('Transactions');
    const transactionContract = await transactionFactory.deploy();

    await transactionContract.deployed();
    console.log('Transactions.sol contract deployed to', transactionContract.address);
}

// Evoke the main function
;(async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
