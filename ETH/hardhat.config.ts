import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";
dotenv.config();


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    goerli: {                        
      url: `${process.env.ALCHEMY_API}`, 
      accounts: [`${process.env.PRIVATE_KEY_DADDY}`]
    },
    sepolia : {
      url: `${process.env.ALCHEMY_SEPOLIA}`,
      accounts:  [`${process.env.PRIVATE_KEY_DADDY}`]
    },
  },
    etherscan: {
      apiKey: process.env.ETHERSCAN_VERIFY,   
    },

};

export default config;
