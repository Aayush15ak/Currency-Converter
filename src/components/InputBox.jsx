import React, { useEffect, useState } from "react";

 export function useInfo(currency){
    const [data, setdata] = useState({})
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
        setdata(res[currency])
      })
    }, [currency])

    return data;
}

function InputBox({
    label,
    amount,
    currencyOptions=[],
    changeAmount,
    currChanged,
    newcurr
}) {
  return (
    <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-xl flex justify-between items-center shadow-lg">

        <div className="flex flex-col">
            <label className="text-black text-sm mb-1">
            {label}
            </label>

            <input
            type="number"
            value={amount}
            placeholder="Amount"
            className="outline-none bg-white/30 text-black placeholder-black/60 px-3 py-2 rounded-md backdrop-blur-md border border-white/30"
            onChange={(e) => changeAmount(e.target.value)}
            />
        </div>

        <div className="flex flex-col items-end">
            <p className="text-black text-sm mb-1">Currency</p>

            <select 
            className="bg-white/30 text-black px-3 py-2 rounded-md outline-none backdrop-blur-md border border-white/30"
            value={newcurr}
            onChange={(e) => currChanged(e.target.value)}
            >
            {currencyOptions.map((currencyName) => (
                <option key={currencyName} value={currencyName}>
                {currencyName}
                </option>
            ))}
            </select>
        </div>

    </div>
  );
}

export default InputBox;