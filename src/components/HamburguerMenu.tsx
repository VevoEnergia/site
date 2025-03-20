"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HamburguerMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleNavigate = (url: string) => {
    router.push(url);
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-8 h-8 me-4 lg:hidden">
          <RxHamburgerMenu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Link
            className="overflow-hidden bg-cover h-20 lg:h-14 w-40 lg:w-96 px-8"
            href={"/"}
          >
            <Image
              src={"/logo branca.svg"}
              width={150}
              height={52}
              alt="Logo da Vevo Energia Fotovoltaica."
              className="object-center h-14 w-auto invert absolute -translate-x-1/2 left-1/2"
            />
          </Link>

          <DrawerTitle>Links</DrawerTitle>
        </DrawerHeader>

        <DrawerFooter>
          <Button onClick={() => handleNavigate("/#beneficios")}>
            Benefícios
          </Button>

          <Button onClick={() => handleNavigate("/#solucoes")}>Soluções</Button>
          <Button onClick={() => handleNavigate("/#depoimentos")}>
            Depoimentos
          </Button>
          <Button onClick={() => handleNavigate("/homologar")}>
            Homologar
          </Button>
          <Button onClick={() => handleNavigate("/#contato")}>Contato</Button>
          <DrawerClose asChild>
            <Button variant="outline">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
