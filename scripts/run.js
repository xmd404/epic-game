const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Luffy", "Naruto", "Goku"],       // Names
      ["https://i.imgur.com/JXFsFoT.jpg", // Images
      "https://i.imgur.com/2yynTFa.jpg", 
      "https://i.imgur.com/C6ljeYC.jpg"],
      [1000, 2000, 3000],                    // HP values
      [1000, 500, 250]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
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