import React from 'react';
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

function Post({ params }) {
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

  const product = products.find(product => product.id === parseInt(params.id));

  if (!product) return <div>Product not found</div>;

  return ( 
    <div className='md:mx-32 md:p-12 p-2 md:flex'>
    <div>
      <Image width={400} height={400} src={product.image} />
    </div>
    <div className='ps-5  h-full md:mt-16 md:ms-6'>
      <h3 className="text-center border-b border-black text-3xl font-bold md-6 w-fit my-3">
        {product.name}
     
      </h3>
      <h3 className="text-center border-b border-black text-3xl font-bold w-fit py-2 my-3">
      
        {product.price}
      </h3> 
      <span className='flex align-middle'>
        <Image width={150} height={150} src={star} className=' me-2' />  <h3 className=" border-b border-black text-xl font-bold ">
      
         (No Ratings)
      
     
    </h3> 
        </span>
    <span>
    <h3 className=" border-b border-black text-xl font-bold text-[#0A8224] w-fit my-3">
      
         Available
    </h3> 
    </span>
    <span>

      
    </span>
    </div>
    
  </div>
  
  );
}

export default Post;
