export default function Hero(){
    return <section className="w-screen h-[calc(100vh-80px)] py-16 bg-gradient-to-br from-white to-zinc-500 flex flex-col items-center justify-between">
        <div className="bg-white rounded-full py-2 px-4">
            <h1 className="font-bold text-2xl text-text">Quem faz as contas, escolhe <strong>VEVO</strong>!</h1>
        </div>
        <button className="shadow-md bg-black  font-light text-lg text-white rounded-full px-4 py-2">Faça uma simulação</button>
    </section>
}