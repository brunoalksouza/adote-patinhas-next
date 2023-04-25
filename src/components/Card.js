import Button from "./Botao";

export default function Card({animals, close, open, corClose, corOpen}) {

  function openModal() {
    console.log('oi')
  }
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {animals.map((product) => (
            <div
            onClick={openModal}
              key={product.id}
              className="group relative bg-[#F2F1EB] rounded min-h-300"
            >
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t bg-gray-200 flex justify-center lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-80 w-full rounded-t object-cover object-center lg:h-full lg:w-full"
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
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Raça: {product.race}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Vacinado: {product.vacinade}
                  </p>
                </div>
                <div>
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Distancia: {product.distance}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Idade: {product.age}
                  </p>{" "}
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Castrado: {product.castrated}
                  </p>
                </div>
              </div>
              <Button close={close} open={open} corClose={corClose} corOpen={corOpen}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
