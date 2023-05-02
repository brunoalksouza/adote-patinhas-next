import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="bg-[#516953] w-full py-1">
      <div className="flex-wrap text-zinc-200 mx-auto flex max-w-7xl justify-between p-6 lg:px-8">
        <div className="flex flex-col mb-4 w-32 items-start">
          <h3 className="text-2xl mb-4">Sobre</h3>
          <button onClick={() => router.push("/")}>Nós</button>
          <button onClick={() => router.push("/")}>Senac</button>
        </div>
        <div className="flex flex-col mb-4 w-32 items-start">
          <h3 className="text-2xl mb-4">Políticas</h3>
          <button onClick={() => router.push("/")}>Privacidade</button>
          <button onClick={() => router.push("/")}>Responsabilidade</button>
        </div>
        <div className="flex flex-col mb-4 w-32 items-start">
          <h3 className="text-2xl mb-4">Apoie</h3>
          <button onClick={() => router.push("/")}>Apoiar</button>
        </div>
        <div className="flex flex-col mb-4 w-32 items-start">
          <h3 className="text-2xl mb-4">Nossas Redes</h3>
          <button onClick={() => router.push("/")}>Face</button>
          <button onClick={() => router.push("/")}>Insta</button>
          <button onClick={() => router.push("/")}>Tweeter</button>
        </div>
      </div>
    </div>
  );
}
