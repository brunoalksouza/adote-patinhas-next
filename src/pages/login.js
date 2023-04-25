import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="bg-[#516953]">
      <div className="lg:flex justify-center h-screen">
        <div
          className="h-3/5 bg-cover lg:block lg:w-2/3 lg:h-screen"
          style={{
            backgroundImage: `url(https://i.pinimg.com/originals/4b/6a/7d/4b6a7d37654c47783ac18eebb9a3218e.png)`,
          }}
        >
          <div className="flex justify-center items-center text-center h-full px-5 lg:px-20 bg-gray-900 bg-opacity-30 ">
            <div className="bg-neutral-900 bg-opacity-60 lg:p-10 rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="my-5 px-5 mx-auto lg:my-0 lg:mb-4"
                src="https://i.pinimg.com/originals/da/ec/5d/daec5d092f7d91a04f272d84a8e13921.png"
                alt="Imagem externa"
              />
              <h1 className="text-2xl uppercase text-white font-normal">
                A rede social favorita para
                <br /> a adoção de pets.
              </h1>
              <h1 className="text-2xl uppercase text-white font-normal my-5 lg:my-0 lg:mt-5">
                Não compre, adote!
              </h1>
            </div>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
