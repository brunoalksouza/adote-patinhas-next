import { useState } from "react";
import Button from "./Botao";

export default function AnimalsUser({ animals }) {
  return (
    <div className="bg-[#A5C282]">
      <div className="bg-[#F2F1EB] text-center font-medium my-2">
        <p className="text-[#5A3938]">Animais Cadastrados</p>
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-row justify-items-start  flex-wrap justify-around sd:justify-around xl:justify-between xl:items-center overflow-y-auto h-[37rem]	">
          {animals.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#F2F1EB] rounded h-72 w-80 flex flex-col justify-between my-3"
            >
              <div className="min-h-44  overflow-hidden rounded-t bg-gray-200 flex justify-center lg:aspect-none group-hover:opacity-75 lg:h-44">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-80 w-full rounded-t object-cover object-center "
                />
              </div>
              <div className="mt-4 p-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-[#5A3938]">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      Nome: {product.name}
                    </a>
                  </h3>                  
                </div>                
              </div>
              <Button close="remover" open="retornar" corClose="#5A3938" corOpen="#516953"/> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
