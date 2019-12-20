/*
  info from:
    https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'TaoCoin',
  per1: 1e8,
  unit: 'TAO',
  messagePrefix: '\x18Tao Signed Message:\n'
}

var main = Object.assign({}, {
  hashGenesisBlock: '0000c1c4b036f822bd91dc2006b5575b9c3617903925b8e738803e094cd23f20',
  // nDefaultPort
  port: 8333,
  portRpc: 8332,
  protocol: {
    // pchMessageStart
    magic: 0xd9b4bef9 // careful, sent over wire as little endian
  },
  bech32: 'bc',
  // vSeeds
  seedsDns: [
    'taoexplorer.com',
    'seed1.tao.network',
    'seed2.tao.network',
    'seed3.tao.network',
    'seed4.tao.network',
    'seed5.tao.network',
    'seed6.tao.network'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 0,
    private: 0x4c,
    public: 0x42,
    scripthash: 0x03
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943',
  port: 18333,
  portRpc: 18332,
  protocol: {
    magic: 0x0709110b
  },
  bech32: 'tb',
  seedsDns: [
    'testnet-seed.alexykot.me',
    'testnet-seed.bitcoin.schildbach.de',
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test
}