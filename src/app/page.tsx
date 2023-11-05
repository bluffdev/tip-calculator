'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(5);
  const [tipAmount, setTipAmount] = useState('0.00');
  const [total, setTotal] = useState('0.00');

  useEffect(() => {
    if (bill !== '') {
      setTipAmount(calculateTip(bill, tipPercentage).toFixed(2));
      setTotal((Number(bill) + Number(tipAmount)).toFixed(2));
    }
  }, [bill, tipAmount, tipPercentage]);

  function isNumberAValidDollarAmount(number: string): boolean {
    const dollarPattern = /^\d+(\.\d{0,2})?$/;

    if (!dollarPattern.test(number) && number !== '') {
      return false;
    }

    return true;
  }

  function calculateTip(bill: string, tip: number): number {
    if (bill === '') {
      return 0;
    }

    const billNumber = Number(bill);
    const tipNumber = billNumber * (tip / 100);

    return tipNumber;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col border rounded-sm p-3 gap-2">
        <label className="text-white">Enter bill</label>
        <input
          type="text"
          value={bill}
          placeholder="0.00"
          onChange={(e) => {
            if (isNumberAValidDollarAmount(e.target.value)) {
              setBill(e.target.value);
            }
          }}
          className="bg-black border"
        />
        <label className="text-white">{`Tip Percentage: ${tipPercentage}%`}</label>
        <input
          type="range"
          min={5}
          max={25}
          value={tipPercentage}
          onChange={(e) => {
            setTipPercentage(Number(e.target.value));
          }}
        />
        <span>{`Tip Amount: ${tipAmount}`}</span>
        <span>{`Total: ${total}`}</span>
      </div>
      <div></div>
    </main>
  );
}
