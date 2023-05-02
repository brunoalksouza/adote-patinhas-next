import { useState } from "react";

export default function Button({ close, open, corClose, corOpen }) {
  const [changeButton, setChangeButton] = useState(true);
  return (
    <button
      className="group rounded-b h-12 uppercase font-bold w-full text-lg text-white relative overflow-hidden"
      onClick={() => {
        setChangeButton(!changeButton);
      }}
      style={{ backgroundColor: changeButton ? `${corClose}` : `${corOpen}` }}
    >
      {changeButton ? `${close}` : `${open}`}
    </button>
  );
}
