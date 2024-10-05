import logo from "./logo.svg";
import "./App.css";
//1. import Web3 module
import { Web3 } from "web3";
import { useState } from "react";

const ADDRESS = "0x3BF2990f3D54B9e20DBc5234A5d761a0f08C4308";
const ABI = [
  { inputs: [{ internalType: "uint256", name: "_startingPoint", type: "uint256" }], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "dicreaseCounter", outputs: [], stateMutability: "nonpayable", type: "function" },
  { inputs: [], name: "getCounter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
  { inputs: [], name: "increaseCounter", outputs: [], stateMutability: "nonpayable", type: "function" },
];

function App() {
  const [counter, setCounter] = useState("none");

  //2. initialize the web3 object with injected provider
  const web3 = new Web3(window.ethereum);

  //3. initialize the contract ABI + ADDRESS
  const myContract = new web3.eth.Contract(ABI, ADDRESS);

  //4. interact with reading functions
  async function callContract() {
    const result = await myContract.methods.getCounter().call();

    // render front end
    setCounter(result.toString());
  }

  //5. connect accounts and writing functions
  async function increaseCounter() {}

  async function dicreaseCounter() {}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={callContract}>Get current counter</button>
        <button onClick={increaseCounter}>Increase counter</button>
        <button onClick={dicreaseCounter}>Dicrease counter</button>
        <p>Counter: {counter}</p>
      </header>
    </div>
  );
}

export default App;
