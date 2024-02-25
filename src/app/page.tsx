import React from 'react';
import MyContextProvider from '@/app/Context';
import Main from './main';

function Page() {
  return (
    <MyContextProvider>
      <Main />
    </MyContextProvider>
  );
}

Page.displayName = 'Page';

export default Page;
