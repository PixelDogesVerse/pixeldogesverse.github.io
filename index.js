// setup
const connectButton = document.getElementById("connect_wallet")
const mintButton = document.getElementById("mint")
const PixelDogesAddress = "DNqR1Phr1gRSjjHQgRiK1KbXJQMsKv3zs4"

// configure buttons
window.addEventListener("DOMContentLoaded", () => {
    connectButton.onclick = connect
    mintButton.onclick = mintPixels
})

// connect function
async function connect() {
    const doge = window?.DogeApi;
    const { status } = await doge.enable();
    if ( status === 'success') {
        const { userAddress } = await doge.userAddress();
        // const { network } = await doge.network();
        connectButton.innerText = userAddress;
        connectButton.disabled = true;
      }
      
      // or check isEnabled
      if (doge && (await doge.isEnabled())) {
        const { userAddress } = await doge.userAddress();
        // const { network } = await doge.network();
        connectButton.innerText = userAddress;
        connectButton.disabled = true;
      }
}

// mintPixels function
async function mintPixels(){
    const doge = window?.DogeApi;
    const mintCount = document.getElementById('mint-count').value;
    if (await doge.isEnabled()) {
        const rs = await doge.useDoge(mintCount * 100, PixelDogesAddress, 'Mint PixelDoges');
        if (rs?.txid) {
          // successed
          // you can track the transaction is confirmed by txid in doge chain
          // for example use chain.so or orther doge api serveices
          // curl "https://chain.so/api/v3/transaction/DOGE/597bafa25fcbb081467bdeb030a42bf441dbfcc054bdcfad31a829d7db5d931f" -H "API-KEY: {{api_key}}"
          // https://chain.so/api/ 
        }
      }
}

// async function check(address){
//     fetch(`http://localhost:8886/pic.txt`)
//         .then(response => response.text())
//         .then(data => {
//           const mintCountElement = document.querySelector('.text-line1 .mint-count');
//           mintCountElement.textContent = data;
//         });
// }