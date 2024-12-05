import Link from "next/link"

interface NavLinkProps{
    href: string,
    text: string
}

export default function NavLinks(){
    return (
        <ul className="flex items-center justify-center gap-x-12">
            <NavLink href="#beneficios" text="Benefícios" />
            <NavLink href="#solucoes" text="Soluções" />
            <NavLink href="#depoimentos" text="Depoimentos" />
            <NavLink href="#homologar" text="Homologar" />
        </ul>
    )   
}

function NavLink({href, text} : NavLinkProps){
    return (
        <li className="text-text font-medium text-lg hover:underline underline-offset-4">
            <Link href={href}>
                {text}
            </Link>
        </li>
    )
}