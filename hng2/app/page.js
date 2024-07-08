import Image from 'next/image';
import logo from '../public/img1.svg'
import pagi from '../public/pagi.png'
import Footer from './components/Footer';
import Link from 'next/link'

import no3 from '@/public/no3.png';
import no4 from '@/public/no4.png';
import no5 from '@/public/no5.png';
import no6 from '@/public/no6.png';
import no7 from '@/public/no7.png';
import no8 from '@/public/no8.png';
import no9 from '@/public/no9.png';


export default function Home() {
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

  return (
    <main>
      <div className="flex items-center justify-center min-h-fit py-3 md:py-8 text-white bg-[#F09A1F]">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Dreamella Emporium</h1>
                <p className="text-2xl mt-4">Enhancing confidence levels</p>
            </div>
        </div>
        <div className="flex items-center justify-center py-8">
  <ul className="flex w-full overflow-x-auto md:overflow-visible px-5 space-x-4 md:space-x-0 md:flex-wrap">
    <li className="flex-none md:flex-grow text-center border-b-2 w-20 md:w-auto border-black">Item 1</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Item 2</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Item 3</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Item 4</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Item 5</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Item 6</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Item 7</li>
  </ul>
</div>


<div className="md:flex md:flex-wrap justify-center p-4 font-medium">
  {products.map(product => (
    <div key={product.id} className="w-full sm:w-full lg:w-1/3 p-5 md:p-20">
      <Link href={`/product/${product.id}`} className=''>
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            layout="responsive"
            width={100}
            height={300}
            className="rounded-t-md"
          />
        </div>
        <div className="py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="font-semibold text-lg text-gray-800">{product.price}</p>
        </div>
        <div className="px-6 py-4">
          <button className="w-full bg-white border border-orange-500 text-orange-500 hover:bg-[#F09A1F] hover:text-white font-semibold py-2 px-4 rounded-lg">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  ))}
  <Image className="my-5" src={pagi} alt="Logo" width={400} height={400} />
</div>

       
    </main>
  );
}
