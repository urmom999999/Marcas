//npm run dev
//http://localhost:3000
// https://nerdcave.com/tailwind-cheat-sheet
"use client";
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex
                    items-center
                    justify-center
                    min-h-screen
                    bg-blue-200
                    "
                    >

      <div className="p-8
                    w-128
                    h-64
                    space-y-8
flex
flex-col
                    items-center
                    justify-center

                      bg-white
                      rounded-2xl">

        <h1 className="text-2xl 
                       text-black
                       font-bold 
                       
                       
                       
                       text-center ">Contador</h1>
<span className="text-3xl 
                           font-bold 
                           w-12 
                           text-black
                           text-center">{count}</span>
                           
        <div className="flex items-center 
                        justify-center 
                        space-x-4
                        ">
                          
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 
                       py-2 
                       bg-red-500 
                       text-blue-950 
                       rounded 
                       hover:bg-red-600">
            Restar
          </button>
          
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 
                       py-2 
                       bg-green-500
                       text-blue-950 
                       rounded 
                       hover:bg-green-600">
            Sumar
          </button>
        </div>
      </div>
    </div>
  );
}