import Image from "next/image";
import ResultadoC from "./components/resultadoC";
import ResultadoK from "./components/resultadoK";
import ResultadoF from "./components/resultadoF";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Conversor de Temperatura de Emerson</h1>
      <ResultadoC valorInicial={25} medidaF= {(25 * 9/5) + 32} medidaK= {25 + 273.15} />
      <ResultadoK valorInicial={300} medidaF={(300 - 273.15) * 9/5 + 32} medidaC={300 - 273.15}/>
      <ResultadoF valorInicial={100} medidaC={(100 - 32) * 5/9} medidaK={(100 - 32) *5/9}/>
      
    </div>
  );
}
