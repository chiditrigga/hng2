import Image from 'next/image';
import logo from '../public/img1.svg'
import pagi from '../public/pagi.png'
import Footer from './components/Footer';
import Link from 'next/link'


import no2 from '@/public/no2.png';
import no3 from '@/public/no3.png';
import no4 from '@/public/no4.png';
import no5 from '@/public/no5.png';
import no6 from '@/public/no6.png';
import no7 from '@/public/no7.png';
import no8 from '@/public/no8.png';
import no9 from '@/public/no9.png';


export default function Home() {
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
    <li className="flex-none md:flex-grow text-center border-b-2 w-20 md:w-auto border-black">All</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Mini Perfumes</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Oil Perfumes</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Designers Perfumes</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Arabian Perfumes </li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">Deodorants</li>
    <li className="flex-none md:flex-grow text-center w-20 md:w-auto">More</li>
  </ul>
</div>


<div className=" justify-center p-4 font-medium md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
  {products.map(product => (
    <div key={product.id} className="w-full sm:w-full p-5 md:p-14 xl:p-20 bg-[#FEFCFC] rounded-lg mb-4 lg:mb-0">
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
 
</div>
<div className="flex justify-center my-5 w-full">
  <Image src={pagi} alt="Logo" width={400} height={400} />
</div>



       
    </main>
  );
}
