'use client'
import React, { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

// Definir el tipo para los items
interface Item {
  id: number;
  texto: string;
  finalizada: boolean;
}

// Definir el tipo para el objeto de contexto
interface MyContextType {
  lsItems: Item[];
  setLsItems: Dispatch<SetStateAction<Item[]>>;
}

// Crear un contexto con el tipo de valor definido
const MyContext = createContext<MyContextType | undefined>(undefined);

// Componente proveedor que proporciona valores para el contexto
const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [lsItems, setLsItems] = useState<Item[]>([
    { id: 1, texto: 'Primer Delivery (puede incluir gaseosa)', finalizada: false },
    { id: 2, texto: 'Segundo Delivery (puede incluir gaseosa)', finalizada: false },
    { id: 3, texto: 'Cafe capsula I', finalizada: false },
    { id: 4, texto: 'Cafe capsula II', finalizada: false },
    { id: 5, texto: 'Cafe capsula III', finalizada: false },
    { id: 6, texto: 'Coca-cola 1.5L (solo en vidrio y solo fin de semanas)', finalizada: false },
    { id: 7, texto: 'Chocolates', finalizada: true }
  ]);

  return (
    <MyContext.Provider value={{ lsItems, setLsItems }}>
      {children}
    </MyContext.Provider>
  );
};

// Definir los tipos para el componente proveedor
type MyContextProviderProps = {
  children: ReactNode;
};

export default MyContextProvider;
export {MyContext};