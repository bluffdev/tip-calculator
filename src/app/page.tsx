'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('0');
  const [tipAmount, setTipAmount] = useState('0.00');
  const [total, setTotal] = useState('0.00');
  const [otherSelected, setOtherSelected] = useState(false);

  useEffect(() => {
    if (bill !== '') {
      setTipAmount(calculateTip(bill, tipPercentage).toFixed(2));
      setTotal((Number(bill) + Number(tipAmount)).toFixed(2));
    } else if (bill === '') {
      setTipAmount('0.00');
      setTotal('0.00');
    }
  }, [bill, tipAmount, tipPercentage]);

  function isNumberAValidDollarAmount(number: string): boolean {
    const dollarPattern = /^\d+(\.\d{0,2})?$/;

    if (!dollarPattern.test(number) && number !== '') {
      return false;
    }

    return true;
  }

  function isValidPercent(number: string): boolean {
    return /^\d+$/.test(number) || number === '';
  }

  function calculateTip(bill: string, tip: string): number {
    if (bill === '') {
      return 0;
    }

    const billNumber = Number(bill);
    const tipNumber = billNumber * (Number(tip) / 100);

    return tipNumber;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 mt-[2vh] lg:justify-center lg:mt-0">
      <div className="flex flex-col p-6 gap-4 lg:border lg:rounded-md">
        <label htmlFor="bill-input" className="text-white text-lg">
          Enter Bill
        </label>
        <input
          id="bill-input"
          type="text"
          inputMode="decimal"
          value={bill}
          placeholder="0.00"
          onChange={(e) => {
            if (isNumberAValidDollarAmount(e.target.value)) {
              setBill(e.target.value);
            }
          }}
          className="bg-neutral-900 focus:outline-none focus:ring-offset-1 focus:ring focus:ring-offset-neutral-300 focus:ring-neutral-500 rounded-md text-md p-2"
        />
        <label htmlFor="tipPercentage" className="flex justify-between text-white text-lg">
          <span>Tip Percentage:</span>
          <span id="tipPercentage" className="ml-2">{`${tipPercentage}%`}</span>
        </label>

        <div className="flex gap-2 text-black">
          <button
            onClick={() => {
              setOtherSelected(false);
              setTipPercentage('15');
            }}
            className="bg-white border rounded-md px-3 py-1"
          >
            15%
          </button>
          <button
            onClick={() => {
              setOtherSelected(false);
              setTipPercentage('18');
            }}
            className="bg-white border rounded-md px-3 py-1"
          >
            18%
          </button>
          <button
            onClick={() => {
              setOtherSelected(false);
              setTipPercentage('20');
            }}
            className="bg-white border rounded-md px-3 py-1"
          >
            20%
          </button>
          <button
            aria-label="Enter other percentage"
            onClick={() => setOtherSelected(!otherSelected)}
            className="bg-white border rounded-md px-3 py-1"
          >
            Other
          </button>
        </div>
        {otherSelected && (
          <input
            type="text"
            inputMode="decimal"
            value={tipPercentage}
            placeholder="0"
            onChange={(e) => {
              if (isValidPercent(e.target.value)) {
                setTipPercentage(e.target.value);
              }
            }}
            className="bg-neutral-900 focus:outline-none focus:ring-offset-1 focus:ring focus:ring-offset-neutral-300 focus:ring-neutral-500 rounded-md text-md p-2"
          />
        )}
        <hr />
        <div className="flex justify-between">
          <span className="text-lg">Tip Amount:</span>
          <span className="text-lg">{`$${tipAmount}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg">Total:</span>
          <span className="text-lg">{`$${total}`}</span>
        </div>
      </div>
    </main>
  );
}
