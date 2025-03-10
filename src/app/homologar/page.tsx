import { OrderedList, OrderedListItem } from "@/components/ui/list";
import { Heading, Paragraph, Subtitle, Title } from "@/components/ui/text";
import Image from "next/image";

export default function Page() {
  return (
    <article className="w-screen px-6 sm:px-8 lg:px-32 2xl:px-60 2xl:py-16 py-8 !pt-28 space-y-8">
      <Title className="text-secondary">
        Como Homologar<span className="text-primary">?</span>
      </Title>
      <Paragraph>
        Homologar a energia solar do seu imóvel junto à concessionária pode
        parecer complicado, mas é mais simples do que parece. A regulamentação
        da ANEEL permite a regularização da micro e minigeração de energia,
        tornando essa opção acessível e vantajosa. Vamos entender o processo e
        seus benefícios?
      </Paragraph>
      <div className="grid grid-cols-2 gap-x-12 w-full">
        <div className="h-96 overflow-hidden rounded-2xl shadow-xl relative">
          <Image
            width={960}
            height={1280}
            src={"/homologar/paineis.jpg"}
            alt="Imagem de cima de painéis solares."
            className="w-auto h-auto absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2"
          />
        </div>
        <div className="space-y-6">
          <Subtitle className="text-4xl text-secondary">
            O que é a homologação<span className="text-primary">?</span>
          </Subtitle>
          <Paragraph>
            A homologação de sistemas fotovoltaicos é um processo em que a
            distribuidora de energia verifica se o sistema solar instalado
            atende às normas de segurança.
          </Paragraph>
          <Paragraph>
            Segundo a Resolução Normativa nº 687/2015 da ANEEL, que revisou a nº
            482/2012, é permitida a microgeração e minigeração distribuída com
            fontes renováveis. Microgeração refere-se a sistemas de até 75 kW,
            enquanto minigeração vai de 75 kW a 5 MW (3 MW para fonte hídrica).
          </Paragraph>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <Heading className="text-4xl text-secondary">
          O processo de homologação segue estes passos
          <span className="text-primary">:</span>
        </Heading>

        <OrderedList>
          <OrderedListItem
            index={1}
            text="Solicitação de conexão do sistema à concessionária."
          />
          <OrderedListItem
            index={2}
            text="
            Envio do projeto para análise."
          />
          <OrderedListItem
            index={3}
            text="Instalação do sistema (prazo de até 120 dias) e solicitação de vistoria."
          />
          <OrderedListItem
            index={4}
            text="Inspeção técnica e envio de relatório para regularização."
          />
          <OrderedListItem
            index={5}
            text="Vistoria final da concessionária e troca do relógio por um medidor bidirecional."
          />
        </OrderedList>
      </div>

      <div className="mt-10 space-y-6">
        <Heading className="text-secondary text-3xl">
          Importância da homologação<span className="text-primary">:</span>
        </Heading>
        <Paragraph>
          A homologação garante a segurança dos técnicos na instalação e dos
          consumidores que utilizarão o sistema, assegurando seu funcionamento
          adequado por até 30 anos.
        </Paragraph>
        <Paragraph>
          Além disso, permite que a energia excedente seja convertida em
          créditos energéticos, utilizáveis por até 60 meses. Isso beneficia o
          consumo em dias nublados ou à noite, quando o sistema não gera
          eletricidade.
        </Paragraph>
      </div>

      <div className="mt-10 space-y-6">
        <Heading className="text-secondary text-3xl">
          Como é feito o processo<span className="text-primary">?</span>
        </Heading>
        <Paragraph>
          A homologação de energia solar é um procedimento simplificado e
          acessível. Veja os passos:
        </Paragraph>

        <OrderedList>
          <OrderedListItem
            index={1}
            text="Solicitação de conexão – Enviar à concessionária documentos como certificado do inversor, lista de consumidores e ART do responsável técnico."
          />
          <OrderedListItem
            index={2}
            text="Análise do projeto – A concessionária avalia o projeto em até 15 dias."
          />
          <OrderedListItem
            index={3}
            text="Instalação do sistema – Após aprovação, inicia-se a instalação (prazo depende da empresa responsável)."
          />
          <OrderedListItem
            index={4}
            text="Solicitação de vistoria – Após a instalação, solicita-se a inspeção técnica."
          />
          <OrderedListItem
            index={5}
            text="Vistoria técnica – Em até 7 dias úteis, a concessionária verifica se tudo está conforme o parecer técnico."
          />

          <OrderedListItem
            index={6}
            text="Relatório de pendências – Caso necessário, um relatório é emitido em até 5 dias para ajustes."
          />
          <OrderedListItem
            index={7}
            text="Homologação – A concessionária troca o medidor por um bidirecional e autoriza a geração de energia."
          />
        </OrderedList>
      </div>
    </article>
  );
}
