import Image from "next/image";
import ResultadoC from "./components/resultadoC";
export default function Home() {

  const medidaC = 25;
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Conversor de Temperatura de Emerson</h1>
      <br/>
          <ResultadoC medidaC={medidaC} medidaF={medidaC * 9/5 + 32} medidaK={medidaC + 273.15}/>
    </div>
  );
}
