'use client'
import React, { useContext } from 'react';
import {MyContext} from '@/app/Context';
import RenderPermitidos from '@/renders/renderPermitidos'

interface MainProps {
  // Define los tipos de las props de Home
}

interface Item {
  id: number;
  texto: string;
  finalizada: boolean;
}
const Main: React.FC<MainProps> = () => {
  
  const {lsItems} = useContext(MyContext)

  const itemsDisponibles = lsItems.filter( (item:Item) => !item.finalizada);
  const itemsUtilizados = lsItems.filter( (item:Item) => item.finalizada);

  return (
    <main className="w-full flex min-h-screen h-auto justify-center items-center box-content bg-slate-200">
      <section className="w-2/3 h-4/5 flex flex-wrap gap-5 p-5 rounded-lg ">

        <div className='w-full h-20 flex justify-between items-center bg-slate-100 p-5 rounded-lg'>
          <h1 className=""> Inventario Semanal de Permitidos </h1>
          <button type='button' className="w-40 h-10 border rounded-lg border-cyan-900"> Add + </button>
        </div>
        
        <div id="Box01" className="w-full h-auto min-h-60 p-5 bg-slate-100 flex-col rounded-lg transition-height duration-500 ease-in-out">
          <h2 className=""> Disponibles </h2>
          <RenderPermitidos lsItems={itemsDisponibles} />
        </div>
        
        <div id="Box02" className="w-full h-auto min-h-60 p-5 bg-slate-100 rounded-lg transition-height duration-500 ease-in-out">
          <h2 className=""> Utilizado </h2>
          <RenderPermitidos lsItems={itemsUtilizados} />
        </div>

      </section>
    </main>
  );
}

export default Main; 
