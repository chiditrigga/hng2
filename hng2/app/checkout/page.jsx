import React from 'react';
import pay from '@/public/pay.png';
import verve from '@/public/verve.png';
import visa from '@/public/visa.png';
import Image from 'next/image';

const PaymentForm = () => {
  return (
    <div className="max-w-lg mx-auto p-8 lg:my-10 bg-white shadow-md rounded-lg">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-600">adeolaelizabeth40@gmail.com</div>
          <div className="text-black font-bold">NGN43,000</div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold">Payment Method</h2>
        <div className="flex space-x-4">
          <Image src={visa} alt="Visa" height={100} width={100} />
          <Image src={verve} alt="Verve"height={100} width={100}/>
          <Image src={pay} alt="PayPal" height={100} width={100} />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold">Payment Details</h2>
        <div className="mt-4">
          <label className="block text-gray-700">CARD NUMBER</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="0000 0000 0000 0000" />
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex-1">
            <label className="block text-gray-700">Card Expiry</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="MM/YY" />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">CVV</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="***" />
          </div>
        </div>
      </div>
      <button className="w-full bg-yellow-500 text-white p-4 rounded-lg">Pay NGN43,000</button>
    </div>
  );
};

export default PaymentForm;
