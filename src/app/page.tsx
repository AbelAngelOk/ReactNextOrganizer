'use client'
import React from 'react';
import MyContextProvider from '@/app/Context';
import Main from './main';

export default function () {
  
  return (
    <MyContextProvider>
      <Main />
    </MyContextProvider>
  );
}

