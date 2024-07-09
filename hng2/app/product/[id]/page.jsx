"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import no2 from '@/public/no2.png';
import no3 from '@/public/no3.png';
import no4 from '@/public/no4.png';
import no5 from '@/public/no5.png';
import no6 from '@/public/no6.png';
import no7 from '@/public/no7.png';
import no8 from '@/public/no8.png';
import no9 from '@/public/no9.png';
import star from '@/public/star.png';
import plus from '@/public/plus.png';
import minus from '@/public/minus.png';
import back from '@/public/back.png';
import Link from 'next/link';

function Post({ params: { id } }) {
  const products = [
    { id: 1, name: 'Riggs Spray', price: 'N3,500', image: logo },
    { id: 2, name: 'Suger', price: 'N20,000', image: no2 },
    { id: 3, name: '100ml Mousuf', price: 'N17,000', image: no3 },
    { id: 4, name: 'Ophylia', price: 'N16,000', image: no4 },
    { id: 5, name: 'Hayaati Oud', price: 'N22,000', image: no5 },
    { id: 6, name: 'Maahir', price: 'N32,000', image: no6 },
    { id: 7, name: 'Ramz', price: 'N20,000', image: no7 },
    { id: 8, name: 'Avanit', price: 'N15,000', image: no8 },
    { id: 9, name: 'Saheb', price: 'N25,000', image: no9 },
  ];

  const product = products.find(product => product.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className='flex items-center mt-8 ml-6 md:mt-12 md:ml-12'>
        <Link href='/'>
          <Image src={back} alt='Back' className='cursor-pointer' />
        </Link>
        <Link href='/'>
          <span className='ml-2 text-xl font-bold'>Back</span>
        </Link>
      </div>
      <div className='flex flex-col md:flex-row md:mx-12 lg:mx-32 md:mt-8 lg:mt-12 md:p-8 lg:p-12 p-4'>
        <div className='flex-shrink-0'>
          <Image width={400} height={400} src={product.image} alt={product.name} />
        </div>
        <div className='mt-4 md:mt-0 md:ml-10 flex flex-col items-center md:items-start'>
          <h3 className="text-center md:text-left border-b border-black text-3xl font-bold w-fit my-3">
            {product.name}
          </h3>
          <h3 className="text-center md:text-left border-b border-black text-3xl font-bold w-fit py-2 my-3">
            {product.price}
          </h3>
          <div className='flex items-center my-3'>
            <Image width={150} height={150} src={star} alt='Rating' className='mr-2' />
            <h3 className="text-xl font-bold">
              (No Ratings)
            </h3>
          </div>
          <h3 className="border-b border-black text-xl font-bold text-[#0A8224] w-fit my-5">
            Available
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={decrement}
              className="border border-[#E8E8E8] text-white font-bold py-2 px-4 rounded"
            >
              <Image width={20} height={20} src={minus} alt='Minus' />
            </button>
            <span className="text-2xl font-bold bg-[#E8E8E8] py-2 px-6 rounded-md">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="border border-[#E8E8E8] text-white font-bold py-2 px-4 rounded"
            >
              <Image width={20} height={20} src={plus} alt='Plus' />
            </button>
          </div>
          <button
            className="bg-[#F09A1F] hover:bg-white hover:text-[#F09A1F] border hover:border-[#F09A1F] text-white font-bold py-3 px-20 md:px-28 mt-5 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Post;
