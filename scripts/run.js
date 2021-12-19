const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Luffy", "Naruto", "Goku"], // Hero Names
        ["https://i.imgur.com/JXFsFoT.jpg", // Hero Images
        "https://i.imgur.com/2yynTFa.jpg", 
        "https://i.imgur.com/C6ljeYC.jpg"],
        [1000, 2000, 3000], // Hero HP
        [1000, 500, 250], // Hero Attack Damage
        "OMNICRON", // Boss Name
        "https://i.imgur.com/ycNjqkz.jpg", // Boss Image
        10000, // Boss HP
        50 // Boss Attack Damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log('Done!')
};
  
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
  
runMain();