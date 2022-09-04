const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            contructorArguments: args,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { verify }
