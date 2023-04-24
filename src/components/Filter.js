export default function Filter() {
  return (
    <nav id="header" className="w-full py-1 bg-[#516953]">
      <div className="flex-wrap text-zinc-200 mx-auto flex max-w-7xl  justify-between p-6 lg:px-8">
        <div
          className="px-0 md:mx-auto md:flex w-full order-3 text-gray-50"
          id="menu"
        >
          <nav>
            <ul className="flex flex-row md:items-center justify-between pt-4 md:pt-0">
              <li>
                <a
                  className="inline-block no-underline font-medium text-lg py-2 px-4 lg:-ml-2"
                  href="#"
                >
                  ESTADO
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline font-medium text-lg py-2 px-4 lg:-ml-2"
                  href="#"
                >
                  CIDADE
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline font-medium text-lg py-2 px-4 lg:-ml-2"
                  href="#"
                >
                  ANIMAIS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
