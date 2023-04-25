export default function LabelPage({ titlePage }) {
  return (
    <div className="flex justify-center " >    
    <div className="bg-[#f2f1eb] w-full h-8 flex justify-center flex-row items-center mx-auto max-w-7xl  lg:px-8 px-4 ">
      <h3 className="text-center font-medium text-[#5A3938]">{titlePage}</h3>
    </div>
    </div>
  );
}
