import ExpandableCard from "./ExpandableCard";
import Section from "./ui/section";
import { Paragraph, Subtitle, Span } from "./ui/text";
import { benefits } from "@/data/beneficios";
import ExperienceHighlight from "./Solucoes/ExperienceHighlight";
import { saving, diferentials } from "@/data/economia";
import Card from "./Card";
import Simulacao from "./Simulacao";

export default function Beneficios() {
  return (
    <Section
      id="beneficios"
      className="py-12 bg-gradient-to-b from-primary/50 to-white"
    >
      <Subtitle className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-secondary">
        Beneficios<span className="text-primary">.</span>
      </Subtitle>

      <div className="flex items-start justify-center flex-wrap my-8 gap-y-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="basis-1/1 sm:basis-1/2 xl:basis-1/3"
          >
            <ExpandableCard src={benefit.src}>
              <Subtitle className="text-base md:text-lg xl:text-2xl 2xl:text-3xl mb-4 text-white">
                {benefit.title}
              </Subtitle>
              <Paragraph className="text-xs lg:text-sm group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden text-white">
                {benefit.text}
              </Paragraph>
            </ExpandableCard>
          </div>
        ))}
      </div>

      <Subtitle className="text-5xl xl:text-6xl text-secondary">
        Economia<span className="text-primary">.</span>
      </Subtitle>

      <div className="flex items-start justify-center flex-wrap my-8 gap-y-8">
        {saving.map((sav, index) => {
          return (
            <div
              className="basis-1/1 xl:basis-1/3 px-2 w-full"
              key={`economia-${index}`}
            >
              <Card src={sav.src}>
                <div className="flex flex-col items-start justify-center gap-y-4 pt-8">
                  <Span className="font-bold text-base lg:text-xl">
                    Cliente: {sav.client}
                  </Span>

                  <Span className="font-bold text-base lg:text-xl">
                    Localização: {sav.localization}
                  </Span>

                  <Span className="font-bold text-base lg:text-xl">
                    {sav.items}
                  </Span>

                  <div className="text-center self-center w-full">
                    <Subtitle className="text-xl xl:text-2xl text-secondary !font-bold">
                      Economia Anual
                    </Subtitle>
                    <Subtitle className="text-3xl xl:text-4xl text-secondary font-light">
                      R$
                      <Span className="text-4xl xl:text-5xl !font-black !text-secondary font-sans group-hover:text-primary">
                        {sav.yearlyEconomy.slice(0, 5)}
                      </Span>
                      {sav.yearlyEconomy.slice(5, 8)}
                    </Subtitle>
                  </div>

                  <Paragraph className="text-base self-center text-secondary">
                    {sav.cta}
                  </Paragraph>
                  <Simulacao className="mt-8 w-full bg-secondary shadow-primary/20 shadow-[0px_0px_4px_2px] hover:bg-primary  " />
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 grid-rows-2 place-items-center min-[1700px]:grid-cols-4 min-[1700px]:grid-rows-1 px-3 2xl:px-12 py-4 mt-24 border gap-y-4 rounded-full bg-white shadow-xl">
        {diferentials.map((diferential, index) => (
          <ExperienceHighlight
            title={diferential.title}
            key={diferential.title}
            text={diferential.text}
            src={diferential.src}
          />
        ))}
      </div>
    </Section>
  );
}
