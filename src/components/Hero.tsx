import Section  from "@/components/ui/section";
import Simulacao from "./Simulacao";

export default function Hero(){
    return <Section className="pt-40 py-16 bg-gradient-to-br from-white to-zinc-500 flex flex-col items-center justify-between">
        <div className="bg-white rounded-full py-2 px-4">
            <h1 className="font-bold text-2xl text-text">Quem faz as contas, escolhe <strong>VEVO</strong>!</h1>
        </div>

        <Simulacao />
    </Section>
}