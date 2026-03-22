import React, { useState } from "react";
import InputBox, { useInfo } from "./components/InputBox";



function App() {
  const [amount, setamount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const info = useInfo(from)
  const options = Object.keys(info)
  const convertedamount = amount * (info[to] || 0);
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-100 space-y-4">
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