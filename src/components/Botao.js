import { useState } from "react";

export default function Button() {
  const [changeButton, setChangeButton] = useState(true);
  return (
    <button
      className="group rounded-b h-12 uppercase font-bold w-full text-lg text-white relative overflow-hidden"
      onClick={() => {
        setChangeButton(!changeButton);
      }}
      style={{ backgroundColor: changeButton ? "#516953" : "#5A3938" }}
    >
      {changeButton ? "Tenho interesse" : "Remover"}
    </button>
  );
}
