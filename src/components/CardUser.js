const user = [
  {
    id: 1,
    name: "Lurdes Aparecida da Silva",
    email: "lurdinha77@gmail.com",
    contact: "(99) 9 9999-7777",
    imageSrc:
      "https://media.gazetadopovo.com.br/viver-bem/2016/09/cat-e1474480323245-fc48cf70.jpg",
  },
];
export default function CardUser() {
  return (
    <div className="h-full">
      <div className=" h-full">
        {user.map((user) => (
          <div
            key={user.id}
            className=" max-w-lg group flex flex-col bg-[#F2F1EB] sm:px-24 sm:py-28"
          >
            <div className="min-h-80 aspect-h-1 aspect-w-1 overflow-hidden rounded-t flex justify-center lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={user.imageSrc}
                alt={user.imageAlt}
                className="h-80 p-4 w-full rounded-t object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="p-4">
              <div>
                <h3 className="text-sm font-medium text-[#5A3938]">
                  <a href={user.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Nome: {user.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm font-medium text-[#5A3938]">
                  E-mail: {user.email}
                </p>
                <p className="mt-2 text-sm font-medium text-[#5A3938]">
                  Contato: {user.contact}
                </p>
                <div className="mt-2 flex flex-row justify-between">
                  <p className="mt-2 text-sm font-medium text-[#5A3938]">
                    Sair da conta
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#5A3938]">
                    Excluir a conta
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
