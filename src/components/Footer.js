import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <div className=" flex row flex-wrap sm:px-22 lg:px-48 px-8	text-zinc-200 bg-[#516953] py-10">
        <div className="flex flex-col mx-auto mb-4 w-32 items-start">
          <h3 className="text-2xl mb-4">Sobre</h3>
          <button onClick={() => router.push("/")}>Nós</button>
          <button onClick={() => router.push("/")}>Senac</button>
        </div>
        <div className="flex flex-col mx-auto mb-4 w-32 items-start">
          <h3 className="text-2xl mb-4">Políticas</h3>
          <button onClick={() => router.push("/")}>Privacidade</button>
          <button onClick={() => router.push("/")}>Responsabilidade</button>
        </div>
        <div className="flex flex-col mx-auto mb-4 w-32 items-start">
          <h3 className="text-2xl mb-4">Apoie</h3>
          <button onClick={() => router.push("/")}>Apoiar</button>
        </div>
        <div className="flex flex-col mx-auto mb-4 w-32 items-start">
          <h3 className="text-2xl mb-4">Nossas Redes</h3>
          <button onClick={() => router.push("/")}>Face</button>
          <button onClick={() => router.push("/")}>Insta</button>
          <button onClick={() => router.push("/")}>Tweeter</button>
        </div>
      </div>
    </>
  );
}
