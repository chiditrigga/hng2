import React from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';

import no3 from '@/public/no3.png';
import no4 from '@/public/no4.png';
import no5 from '@/public/no5.png';
import no6 from '@/public/no6.png';
import no7 from '@/public/no7.png';
import no8 from '@/public/no8.png';
import no9 from '@/public/no9.png';

function Post({ params }) {
  const products = [
    { id: 1, name: 'Product 1', price: 'N3,500', image: logo },
    { id: 2, name: 'Product 2', price: 'N3,500', image: logo },
    { id: 3, name: 'Product 3', price: 'N3,500', image: no3 },
    { id: 4, name: 'Product 4', price: 'N3,500', image: no4 },
    { id: 5, name: 'Product 5', price: 'N3,500', image: no5 },
    { id: 6, name: 'Product 6', price: 'N3,500', image: no6 },
    { id: 7, name: 'Product 7', price: 'N3,500', image: no7 },
    { id: 8, name: 'Product 8', price: 'N3,500', image: no8 },
    { id: 9, name: 'Product 9', price: 'N3,500', image: no9 },
  ];

  const product = products.find(product => product.id === parseInt(params.id));

  if (!product) return <div>Product not found</div>;

  return ( 
    <div className='md:mx-32 md:p-5 p-2 md:flex'>
        <div>
            <Image width={400} height={400} src={product.image}/>
        </div>
        <div className='ps-5 flex items-center h-full'>
  <h3 className="text-center">{product.name}</h3>
</div>
    </div>
  );
}

export default Post;
