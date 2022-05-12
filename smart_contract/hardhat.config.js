require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/znBQ_GlE2IR2FN4qriiY1ijVnBrc1PG8',
      accounts: [
        '49a2cdb709979836d6babffa41d2df985775f905501a08836796ab2b8655597f',
      ],
    }
  }
};
