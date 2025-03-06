import { diferentials } from "@/data/economia";
import Diferential from "./Diferential";

export default function Diferentiasl() {
  return (
    <div className="bg-white drop-shadow grid grid-cols-4 grid-rows-1 rounded-lg py-6 border-secondary/50 border-4">
      {diferentials.map((diferential, index) => (
        <Diferential
          src={diferential.src}
          text={diferential.text}
          key={`diferential-${index}`}
        />
      ))}
    </div>
  );
}
