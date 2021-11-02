import Web3 from 'web3';

function getWeb3(): Web3
{
  const web3: any = (window as any).web3;
  const ethereum: any = (window as any).ethereum;
  const currentProvider: any = web3.currentProvider;

  // Is there an injected web3 instance?
  if (typeof web3 !== 'undefined') {
    return new Web3(web3.currentProvider);
  }
  // Is there a web3 instance in the current window?
  if (typeof ethereum !== 'undefined') {
    return new Web3(ethereum);
  }
  // Is there a web3 instance in the current window?
  if (typeof web3 !== 'undefined') {
    return new Web3(currentProvider);
  }
  // If none of the above, we'll just use the default
  // web3 (no provider)
  return new Web3();
}

// const getWeb3: Promise<Web3> = () =>
//   new Promise((resolve, reject) => {
//     // Wait for loading completion to avoid race conditions with web3 injection timing.
//     window.addEventListener('load', async () => {
//       // Modern dapp browsers...
//       if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         try {
//           // Request account access if needed
//           await window.ethereum.enable();
//           // Accounts now exposed
//           resolve(web3);
//         } catch (error) {
//           reject(error);
//         }
//       }
//       // Legacy dapp browsers...
//       else if (window.web3) {
//         // Use Mist/MetaMask's provider.
//         const web3 = window.web3;
//         console.log("Injected web3 detected.");
//         resolve(web3);
//       }
//       // Fallback to localhost; use dev console port by default...
//       else {
//         const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
//         const web3 = new Web3(provider);
//         console.log('No web3 instance injected, using Local web3.');
//         resolve(web3);
//       }
//     });
//   });

export default getWeb3;
