import ExpandableCard from "./ExpandableCard";
import Section from "./ui/section";
import { Paragraph, Subtitle, Span } from "./ui/text";
import { benefits } from "@/data/beneficios";
import ExperienceHighlight from "./Solucoes/ExperienceHighlight";
import { saving, diferentials } from "@/data/economia";
import Card from "./Card";
import CTAButton from "./ui/cta-button";

export default function Beneficios() {
  return (
    <Section id="beneficios" className="py-12 bg-white">
      <Subtitle className="!text-3xl sm:!text-4xl xl:!text-5xl 2xl:!text-6xl text-secondary">
        Benefícios<span className="text-primary">.</span>
      </Subtitle>

      <div className="flex items-start justify-center flex-wrap my-8 gap-y-8">
        {benefits.map((benefit, index) => (
          <div
            key={`benefit-${index}`}
            className="basis-1/1 sm:basis-1/2 xl:basis-1/3"
          >
            <ExpandableCard src={benefit.src}>
              <Subtitle className="text-base md:text-lg xl:text-2xl 2xl:text-3xl mb-4 text-secondary">
                {benefit.title}
              </Subtitle>
              <Paragraph className="text-xs lg:text-sm group-hover:opacity-100 opacity-0 transition-all duration-300 overflow-hidden text-black">
                {benefit.text}
              </Paragraph>
            </ExpandableCard>
          </div>
        ))}
      </div>

      <Subtitle className="!text-3xl sm:!text-4xl xl:!text-5xl 2xl:!text-6xl text-secondary">
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
                <div className="flex flex-col items-start justify-center gap-y-4 pt-8 px-4">
                  <Span className="font-bold text-base lg:text-xl !text-black">
                    Cliente: <span className="font-normal">{sav.client}</span>
                  </Span>

                  <Span className="font-bold text-base lg:text-xl !text-black">
                    Localização:{" "}
                    <span className="font-normal">{sav.localization}</span>
                  </Span>

                  <Span className="font-bold text-base lg:text-xl !text-black">
                    Geração Mensal:{" "}
                    <span className="font-normal">{sav.generates}</span>
                  </Span>

                  <div className="text-center self-center w-full">
                    <Subtitle className="!text-xl xl:!text-3xl text-secondary !font-bold">
                      Economia Anual
                    </Subtitle>
                    <Subtitle className="!text-5xl text-secondary font-light">
                      R$
                      <Span className="!font-black !text-secondary font-sans group-hover:text-primary">
                        {sav.yearlyEconomy.slice(
                          0,
                          sav.yearlyEconomy.length - 2
                        )}
                      </Span>
                      {sav.yearlyEconomy.slice(
                        sav.yearlyEconomy.length - 2,
                        sav.yearlyEconomy.length
                      )}
                    </Subtitle>
                  </div>

                  <Paragraph className="text-base text-secondary self-center">
                    {sav.cta}
                  </Paragraph>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 place-items-center min-[1700px]:grid-cols-4 min-[1700px]:grid-rows-1 px-3 2xl:px-12 py-4 mt-24 border-4 border-primary gap-y-4 rounded-[30px] bg-secondary shadow-xl">
        {diferentials.map((diferential) => (
          <ExperienceHighlight
            title={diferential.title}
            key={diferential.title}
            text={diferential.text}
            src={diferential.src}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <CTAButton
          className="border-4 border-primary mt-8 max-w-xl"
          text="FAÇA UMA SIMULAÇÃO!"
          variant="secondary"
        />
      </div>
    </Section>
  );
}
