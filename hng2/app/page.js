import Image from 'next/image';
import logo from '../public/img1.svg'
import pagi from '../public/pagi.png'
import Footer from './components/Footer';


export default function Home() {
  const products = [
    { id: 1, name: 'Product 1', price: 'N3,500', image: logo, },
    { id: 2, name: 'Product 1', price: 'N3,500', image: logo, },
    { id: 3, name: 'Product 1', price: 'N3,500', image: logo, },
    { id: 4, name: 'Product 1', price: 'N3,500', image: logo, },
    { id: 5, name: 'Product 1', price: 'N3,500', image: logo, },
    { id: 6, name: 'Product 1', price: 'N3,500', image: logo, },
    { id: 7, name: 'Product 1', price: 'N3,500', image: logo, },
    { id: 8, name: 'Product 1', price: 'N3,500', image: logo, },
    { id: 9, name: 'Product 1', price: 'N3,500', image: logo, },
 
];

  return (
    <main>
      <div className="flex items-center justify-center min-h-fit py-3 md:py-8 text-white bg-[#F09A1F]">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Dreamella Emporium</h1>
                <p className="text-2xl mt-4">Enhancing confidence levels</p>
            </div>
        </div>
        <div className="flex items-center justify-center  py-8 ">
            <ul className="flex w-full px-5">
                <li className="flex-grow text-center border-b-2 w-10 border-black">Item 1</li>
                <li className="flex-grow text-center">Item 2</li>
                <li className="flex-grow text-center">Item 3</li>
                <li className="flex-grow text-center">Item 4</li>
                <li className="flex-grow text-center">Item 5</li>
                <li className="flex-grow text-center">Item 6</li>
                <li className="flex-grow text-center">Item 7</li>
            </ul>
        </div>
        <div className="flex flex-wrap justify-center p-4">
            {products.map(product => (
                <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="max-w-xs rounded overflow-hidden  bg-[#FEFCFC] p-5">
                        <div className="relative h-48">
                            <Image
                                src={product.image}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                               
                                className="rounded-t-md"
                            />
                        </div>
                        <div className=" py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="font-semibold text-lg text-gray-800">{product.price}</p>
                        </div>
                        <div className="px-6 py-4">
                            <button className="w-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 px-4 rounded-lg">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            
            <Image className='my-5' src={pagi} alt="Logo" width={400} height={400} />
        </div>
        <Footer />
    </main>
  );
}
