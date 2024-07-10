import Link from 'next/link';
import React from 'react';

const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="bg-[#F09A1F] text-white w-8 h-8 flex items-center justify-center rounded-full">1</div>
          <span>Cart</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-[#F09A1F] text-white w-8 h-8 flex items-center justify-center rounded-full">2</div>
          <span>Shipping</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-300 text-white w-8 h-8 flex items-center justify-center rounded-full">3</div>
          <span>Payment</span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700">First name</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md hover:border-orange-500" placeholder="Enter your first name" />
        </div>
        <div>
          <label className="block text-gray-700">Last name</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md hover:border-orange-500" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md hover:border-orange-500" placeholder="Enter your phone number" />
        </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md hover:border-orange-500" placeholder="Enter your email address" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md hover:border-orange-500" placeholder="Enter your address" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-gray-700">Country</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md hover:border-orange-500">
            <option>Nigeria</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">State</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md hover:border-orange-500">
            <option>Abia</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">City</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md hover:border-orange-500" placeholder="Input city" />
        </div>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <label className="text-gray-700">Save the above shipping information</label>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Shipping Method</h2>
      <div className="mb-4">
        <label className="flex items-center hover:text-orange-500">
          <input type="radio" name="shipping" className="mr-2" />
          <span className="text-gray-700">Lagos Mainland</span>
        </label>
        <p className="text-gray-500 ml-6">Yaba, Ebute Meta, Bariga, Shomolu...</p>
        <p className="text-gray-700 ml-6">₦1,500</p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Coupon</h2>
      <div className="mb-4">
  <label className="block text-gray-700">If you have a coupon code, you can input it here</label>
  <div className="relative mt-1 flex items-center">
    <input 
      type="text" 
      className="block w-full p-3 border border-gray-300 rounded-md pr-20" 
      placeholder="Enter coupon code" 
    />
    <button 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F09A1F] text-white p-2 rounded-md hover:opacity-80 mr-2"
    >
      Apply
    </button>
  </div>
</div>


      <div className="mb-4">
        <p className="text-gray-700">Shipping fee: ₦1,500</p>
        <p className="text-gray-700">Total Price: ₦43,000</p>
      </div>
      <div className="flex justify-between">
        <button className="bg-white text-[#F09A1F] border border-[#F09A1F] p-2 rounded-md hover:bg-[#F09A1F] hover:text-white">Continue Shopping</button>
        <Link href="/checkout" className="bg-[#F09A1F] text-white rounded-md hover:opacity-80"> <button className="bg-[#F09A1F] text-white p-2 rounded-md hover:opacity-80">Proceed to Checkout</button></Link>
       
      </div>
    </div>
  );
};

export default Shipping;

