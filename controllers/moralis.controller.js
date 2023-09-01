// controllers/userController.js
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const Moralis = require("moralis").default;

const chain = EvmChain.SEPOLIA;

// Sample controller with a simple function
exports.getAcountBalance = async (req, res) => {
  const address = req.body.address;

  try {
    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
      address,
      chain,
    });
    const native = nativeBalance.result;
    res.json(native);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

exports.getTransacrions = async (req, res) => {
  const address = req.body.address;
  try {
    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      address,
      chain,
    });
    res.json(response);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

exports.getChainActivities = async (req, res) => {
  const chains = [
    EvmChain.ETHEREUM,
    EvmChain.BSC,
    EvmChain.POLYGON,
  ];
  const address = req.body.address;
  try {
    const response = await Moralis.EvmApi.wallets.getWalletActiveChains({
      address,
      chains,
    });
    res.json(response);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

exports.getNFTs = async (req, res) => {
  const address = req.body.address;
  try {
    const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
      address,
      chain,
    });
    res.json(response);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};
