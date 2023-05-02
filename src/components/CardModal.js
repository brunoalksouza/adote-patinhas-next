import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "./Botao";
import Card from "./Card";

export default function CardModal({
  isOpen,
  handleClose,
  animal,
  close,
  open,
  corClose,
  corOpen,
}) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
              <div className="group relative bg-[#F2F1EB] rounded min-h-300">
                <button
                  className="absolute z-50 text-white end-1"
                  onClick={handleClose}
                >
                  &#215;
                </button>
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t bg-gray-200 flex justify-center lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={animal.imageSrc}
                    alt={animal.imageAlt}
                    className="h-80 w-full rounded-t object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 p-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-[#5A3938]">
                      <a>
                        <span aria-hidden="true" className=" inset-0" />
                        Nome: {animal.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#5A3938]">
                      Raça: {animal.race}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#5A3938]">
                      Vacinado: {animal.vacinade}
                    </p>
                  </div>
                  <div>
                    <p className="mt-1 text-sm font-medium text-[#5A3938]">
                      Distancia: {animal.distance}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#5A3938]">
                      Idade: {animal.age}
                    </p>{" "}
                    <p className="mt-1 text-sm font-medium text-[#5A3938]">
                      Castrado: {animal.castrated}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Descrição : {animal.description}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Sexo : {animal.sex}
                  </p>{" "}
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Porte : {animal.port}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Email : {animal.email}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Telefone : {animal.telephone}
                  </p>
                </div>
              </div>
              <Button
                close={close}
                open={open}
                corClose={corClose}
                corOpen={corOpen}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
