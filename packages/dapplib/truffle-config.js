require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note mad snake inner process slot general'; 
let testAccounts = [
"0xae41da87df6a5b598de95fbeefcb6b2df69d8f444e69f9493097be96a70aa7e7",
"0x92e98a29c26e239010ef5ba7b3069fc63d3eb8ac431de17c7faa08db15455a2f",
"0x07dbb0ae439d29745a541ed09cc537f42bb2a53a636ff24001c0b480633e8d29",
"0x1aef511e4ff4ad14ed155239c133a76fdce38a0bbc43fb7a5dae9c3d28e51d6e",
"0xf491fc1407aa2192f714e4cc44ace6aaa947ea0a90c60a457d60b44ecf70166a",
"0x6ca2177bd9866dfbd60242a86dbb1f13b56b5ad47d6b48014efa24ac7c3c2baf",
"0xa8750323abdba13c032e89114988ee47f30c6297bccc92d0fafa9795614c4b17",
"0x562442ee05decf87ae3fa279e122b28d642e7d7d09fb0daf35d8ae37cb862b46",
"0x65071cb9f69f0c5c83b3838da74e38ee6fd2eed38c187ad9c0589fb1174d7508",
"0x9af203609440a5e90a831845a1b372a422fa3a525bb96816729c959e41fc52d2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


