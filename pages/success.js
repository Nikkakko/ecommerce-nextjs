import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>
          You will receive an email confirmation shortly.
        </p>
        <p className='description'>
          Your order will be shipped to the address you provided. If you have
          any questions, please contact us at{' '}
          <a href='mailto:test@example.com' className='email'>
            test@example.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='320px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
