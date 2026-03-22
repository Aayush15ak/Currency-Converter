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
    <div className="bg-zinc-900 border border-white/30 p-4 rounded-xl flex justify-between items-center">

      <div className="flex flex-col">
        <label className="text-gray-300 text-sm mb-1">
          {label}
        </label>

        <input
          type="number"
          value={amount}
          placeholder="Amount"
          className="outline-none bg-transparent text-white text-lg"
          onChange={(e)=>changeAmount(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-end">
        <p className="text-gray-300 text-sm mb-1">Currency</p>

        <select 
        className="bg-zinc-800 text-white px-3 py-1 rounded-md outline-none border border-white/20"
        value={newcurr}
        onChange={(e)=>currChanged(e.target.value)}
        >
          {currencyOptions.map((currencyName)=>(
            <option key={currencyName} value={currencyName}>{currencyName}</option>
          ))} 
        </select>
      </div>

    </div>
  );
}

export default InputBox;