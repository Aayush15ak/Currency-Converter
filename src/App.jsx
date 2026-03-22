import React, { useState } from "react";
import InputBox, { useInfo } from "./components/InputBox";
import bgImage from "./components/background1.jpg"; 

function App() {
  const [amount, setamount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const info = useInfo(from)
  const options = Object.keys(info)
  const convertedamount = amount * (info[to] || 0);
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      
      <div className="w-full max-w-md space-y-4 bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30">
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          changeAmount={(temp) => setamount(temp)}
          currChanged={(temp) => setFrom(temp)}
          newcurr={from}
        />
        <InputBox 
          label="To"
          amount={convertedamount}
          currencyOptions={options}
          changeAmount={(temp) => setamount(temp)}
          currChanged={(temp)=>setTo(temp)}
          newcurr={to}
        />
      </div>
    </div>
  );
}

export default App;