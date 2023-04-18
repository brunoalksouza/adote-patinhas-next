import Image from "next/image";
function ButtonGoogle() {
  return (
    <button className="w-full bg-white active:bg-blueGray-50 mt-10 text-cyan-600 uppercase text-center py-4 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg  hover:border-slate-400 font-bold hover:shadow transition duration-150">
      <Image
        src={"https://www.svgrepo.com/show/355037/google.svg"}
        width={1}
        height={1}
        class="w-6 h-6 mr-5"
        alt="Google"
      />
      Entrar com Google
    </button>
  );
}

function ButtonFacebook() {
  return (
    <button className="w-full bg-white active:bg-blueGray-50 mt-5 text-cyan-600 uppercase text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg  hover:border-slate-400 font-bold hover:shadow transition duration-150">
      <Image
        src={"https://www.svgrepo.com/show/452196/facebook-1.svg"}
        width={1}
        height={1}
        class="w-8 h-8 mr-5"
        alt="Facebook"
      />
      Entrar com Facebook
    </button>
  );
}

export default function LoginForm() {
  return (
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div className="flex-1">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
            Entrar
          </h2>
          <ButtonGoogle 
          />
          <ButtonFacebook />
        </div>
      </div>
    </div>
  );
}
