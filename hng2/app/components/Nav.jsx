"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';
import logo from '../../public/logo.svg';
import search from '../../public/search.svg';
import cart from '../../public/cart.svg';
import cartItemImage from '../../public/cart.svg';
import img1 from '@/public/img1.svg';

import { DeleteOutlined } from '@ant-design/icons';


const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement('.dd'); // Ensure DOM is ready before setting app element
  }, []);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <nav className="bg-white shadow dd">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 md:px-10">
          <Link href="/">
            <div className="flex items-center">
              <Image src={logo} alt="Logo" width={50} height={50} className="md:w-20 md:h-20" />
            </div>
          </Link>
          <div className="flex-grow mx-4 flex justify-center">
            <div className="relative flex w-full max-w-xs md:max-w-md lg:max-w-lg">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#FBF9F9] p-2 pl-10 rounded-2xl focus:outline-none"
              />
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <Image src={search} alt="Search" width={20} height={20} />
              </div>
            </div>
          </div>
          <div className="text-gray-800 flex items-center">
            <Image
              src={cart}
              alt="Cart"
              width={30}
              height={30}
              className="md:w-10 md:h-10 cursor-pointer"
              onClick={openModal}
            />
          </div>
        </div>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Cart Modal"
        className="modal"
        overlayClassName="overlay"
      >
        
        <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Image src={img1} alt="Product" width={200} height={200} />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Riggs Spray</h2>
          </div>
        </div>
       
      </div>
      <div className="flex justify-between items-center border-t pt-6">
        <div>
          <p className="text-lg">Cart Total</p>
          <p className="text-sm text-gray-600">
            Shipping fee will be added when checking out.
          </p>
        </div>
        <div className="text-xl font-bold">N3,500</div>
      </div>
      <div className="flex justify-between mt-6">
       
        
   

        <Link href="/">
         <button onClick={closeModal} className="bg-yellow-500 text-white px-6 py-2 rounded">Continue Shopping</button>
        </Link>
       
        <Link href="/shipping" onClick={closeModal}>   <button className="bg-yellow-500 text-white px-6 py-2 rounded">Proceed to Checkout</button>     </Link>
      </div>
    </div>
      </Modal>

      <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          max-width: 500px;
          width: 90%;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </>
  );
};

export default Nav;
