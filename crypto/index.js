async function main() {
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
    const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/njRSo0DNQEQ2-15q8x9N3bJlaDVjTJF6")
    const blockNumber = await web3.eth.getBlockNumber()
    console.log("The latest block number is " + blockNumber)
  }
  main()
  