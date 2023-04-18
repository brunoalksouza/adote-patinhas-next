const products = [
  {
    id: 1,
    name: "Mayllon",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "rajado",
    vacinade: "sim",
  },
  {
    id: 2,
    name: "Bruno",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "caramelo",
    vacinade: "sim",
  },
  {
    id: 3,
    name: "Talles",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "22km",
    race: "bulldog frances",
    vacinade: "sim",
  },
];

export default function Card() {
  return (
    <div className="bg-[#A5C282]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#F2F1EB] p-2 rounded min-h-96"
            >
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-80 w-80 object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-[#5A3938]">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />Nome: {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#5A3938]">
                    Raça:{product.race}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#5A3938]"> 
                     Vacinado: {product.vacinade}
                  </p>
                </div>
                <p className="text-sm font-medium text-[#5A3938]"> 
                     Distancia: {product.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
