import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
import Modal from "./Modal";

import { useRouter } from "next/router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const apoiaSeModal = {
    title: "Apoie nosso projeto no site apoia-se",
    description:
      "Nos ajude com qualquer quantia para conseguirmos continuar com esse projeto e garantir um lar para mais bichinhos!",
    cancelButton: "Quero ajudar encontrar mais lares para bichinhos",
    nameButton: "NOS APOIE",
  };

  const [open, setOpen] = useState(false);

  return (
    <header className="text-[#5A3938] bg-[#f2f1eb]">
      <nav
        className="mx-auto flex flex-row max-w-7xl items-center justify-between lg:px-8 px-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <button
            className="-m-1.5 p-1.5 flex flex-col lg:flex-row lg:items-center"
            onClick={() => router.push("/home")}
          >
            <img
              className="w-32"
              src="https://i.pinimg.com/originals/63/b9/c2/63b9c20b506b655b7f6b52d4fdeab06e.png"
              alt="Adote Patinhas"
            />
          </button>
        </div>
        <div className="flex lg:hidden  items-center ">
          <button
            type="button"
            className=" flex items-center  rounded-md text-gray-700 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <button
            onClick={() => router.push("/home")}
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7   text-[#5A3938]"
          >
            INÍCIO
          </button>
          <button
            onClick={() => router.push("/doeUmBichinho")}
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-[#5A3938]"
          >
            DOE UM BICHINHO
          </button>
          <button
            onClick={() => router.push("/perfil")}
            href="https://www.d20loja.com.br/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#5A3938]"
          >
            PERFIL
          </button>
          <button
            onClick={() => router.push("/interesses")}
            href="https://www.d20loja.com.br/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#5A3938]"
          >
            INTERESSES
          </button>
          <button
            onClick={() => setOpen(true)}
            href=""
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#5A3938]"
          >
            {typeof window === "undefined" ? (
              <Modal {...apoiaSeModal} suppressHydrationWarning={true} />
            ) : (
              <Modal {...apoiaSeModal} />
            )}
          </button>
          <button
            onClick={() => router.push("/login")}
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#5A3938]"
          >
            SAIR
          </button>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <button
                  onClick={() => router.push("/home")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 text-[#5A3938]"
                >
                  INÍCIO
                </button>
                <button
                  onClick={() => router.push("/doeUmBichinho")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 text-[#5A3938]"
                >
                  DOE UM BICHINHO
                </button>
                <button
                  onClick={() => router.push("/perfil")}
                  href="https://www.d20loja.com.br/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 text-[#5A3938]"
                >
                  PERFIL
                </button>
                <button
                  onClick={() => router.push("/interesses")}
                  href="https://www.d20loja.com.br/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 text-[#5A3938]"
                >
                  INTERESSES
                </button>
                <button
                  onClick={() => setOpen(true)}
                  href=""
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#5A3938]"
                >
                  {typeof window === "undefined" ? (
                    <Modal {...apoiaSeModal} suppressHydrationWarning={true} />
                  ) : (
                    <Modal {...apoiaSeModal} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
