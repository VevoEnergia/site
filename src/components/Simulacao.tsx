import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

interface SimulacaoProps{
    className?:string
}

export default function Simulacao({className}: SimulacaoProps){
    return (
        <Dialog>
        <DialogTrigger className={`${className} shadow-md bg-black text-white font-light text-lg rounded-full px-4 py-2`}>Faça uma simulação</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Faça sua simulação</DialogTitle>
            <DialogDescription className="w-80 h-96">
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
}