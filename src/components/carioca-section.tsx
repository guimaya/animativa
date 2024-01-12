import Image from 'next/image'
import CariocaLogo from '/public/logo-carioca.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cariocaRanking } from '@/constants'
import { Container } from '@/components/container'
import { MedalIcon } from '../../public/icon-medal'

export default function CariocaSection() {
  return (
    <section className="flex flex-col items-center justify-center bg-carioca bg-cover bg-no-repeat p-12 sm:p-20 2xl:min-w-full">
      <div className="container flex flex-col justify-around sm:flex-row ">
        <div className="max-w-[751px] px-20 sm:px-0">
          <div className="mb-20 flex items-center space-x-4">
            <Image src={CariocaLogo} alt="Logo Carioca" />
            <h2 className="font-heading text-6xl text-custom-green">Carioca</h2>
          </div>
          <div className="space-y-10 px-2 text-center text-2xl font-semibold sm:px-0 sm:text-left [&_b]:mr-1 [&_b]:text-custom-green sm:[&_p]:w-2/3">
            <p>
              <b>Ativação geral:</b>
              atingir 10.5 milhões em vendas;
            </p>
            <p>
              <b>Gatilho para ativar:</b>
              atingir 70% da meta de vendas;
            </p>
            <p>
              <b>Premiação:</b>
              Os 20 maiores compradores de Carioca concorrem a uma viagem à Itália no valor de R$ 30.000 e os três
              representantes que mais venderem recebem R$ 5.000 cada.;
            </p>
            <p>
              Incentivos de
              <b className="ml-2">Compre e ganhe:</b>
            </p>
            <Accordion type="single" collapsible className="sm:w-1/2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold">Clientes</AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold [&_b]:mr-1 [&_b]:text-custom-green">
                  <b>3 primeiros:</b>a cada 100 mil reais em compras, ganham um IPhone 14 128gb cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:mr-1 [&_b]:text-custom-green">
                  <b>5 primeiros:</b>a cada 75 mil reais em compras, ganham um notebook cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:mr-1 [&_b]:text-custom-green">
                  <b>10 primeiros:</b>a cada 50 mil reais em compras, ganham um JBL, Caixa de Som Bluetooth cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:mr-1 [&_b]:text-custom-green">
                  <b>15 primeiros:</b>a cada 30 mil reais em compras, ganham um Smartwatch Galaxy Samsung Watch4 Bt 40mm
                  - Preto cada;
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl font-bold">Time de Vendas</AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold [&_b]:mr-1 [&_b]:text-custom-green">
                  <b>3 primeiros:</b>a cada 100 mil reais em vendas, ganham um IPhone 14 128gb cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:mr-1 [&_b]:text-custom-green">
                  <b>5 primeiros:</b>a cada 50 mil reais em vendas, ganham um Notebook cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:mr-1 [&_b]:text-custom-green">
                  <b>10 primeiros:</b> a cada 30 mil reais em vendas, ganham uma JBL, Caixa de Som Bluetooth cada;
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="px-20 pt-10 sm:px-0 sm:pt-0">
          <h2 className="text-center font-heading text-6xl text-custom-green sm:text-left">Ranking</h2>
          <div
            className="mt-10 space-y-4 text-black
          [&_a]:text-black [&_div]:flex [&_div]:h-12 [&_div]:w-96 [&_div]:items-center [&_div]:justify-center [&_div]:rounded-full [&_div]:bg-white 
        [&_div]:text-center"
          >
            {cariocaRanking.map((position) => {
              if (position.position === 1) {
                return (
                  <div key={position.position} className="relative">
                    <Container>
                      <MedalIcon className="absolute -top-2 left-2 h-10 w-10 fill-white text-yellow-500" />
                      <p>{position.name}</p>
                    </Container>
                  </div>
                )
              }
              if (position.position === 2) {
                return (
                  <div key={position.position} className="relative">
                    <Container>
                      <MedalIcon className="absolute -top-2 left-2 h-10 w-10 fill-white text-gray-500" />
                      <p>{position.name}</p>
                    </Container>
                  </div>
                )
              }
              if (position.position === 3) {
                return (
                  <div key={position.position} className="relative">
                    <Container>
                      <MedalIcon className="absolute -top-2 left-2 h-10 w-10 fill-white text-orange-500" />
                      <p>{position.name}</p>
                    </Container>
                  </div>
                )
              }
              return (
                <div key={position.position} className="relative">
                  <p>{position.name}</p>
                </div>
              )
            })}
          </div>
          <p className="mt-8 px-4 text-sm text-custom-yellow sm:px-0">
            Não encontrou o seu nome? Entre em contato como seu gestor regional e procure saber como alcançar a meta e
            superar os desafios desta campanha. 
          </p>
        </div>
      </div>
    </section>
  )
}
