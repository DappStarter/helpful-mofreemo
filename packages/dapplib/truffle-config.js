require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth remember under include clinic forget tent'; 
let testAccounts = [
"0x9d45e0da81cb19bede1c643c7a256180b770cc5848fe6ea7036fa8a72e9c783c",
"0x8ea749a787680c909f4f66e16d8b79a0628877e675623953ee2d6e107d074e1a",
"0x1357df93476315361bcdd2349fdaabde19daa740744de336a1b4cb275aba0484",
"0x25235a26ac3171c04dcbbd793021e70a15fbf17a9630741b83af2e6dfabf63c9",
"0x9c549c126ac168f52a91a61afd074ab1366cf6e0567aa4e9ebe3e9e465377fdd",
"0x190524e3879d734766611bf5b81e171e0d80957212d718d561c61b35cb639502",
"0x28cac914c30450ac69598caedcd856b277ff784984479edc52e97b3b772c7123",
"0xe2aac9194678611f43d3d14aac6cdbd58a5a2a4f1ce89f2d6bfa396b1251483f",
"0x1c4884e2f25c42a8db42e3c7be28561d84081b65d35b62d3954e7e4a6ee26e63",
"0x098905da0ff7b4765bdd09767070bae8f777cc787176b25c00b7148a0337806a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
