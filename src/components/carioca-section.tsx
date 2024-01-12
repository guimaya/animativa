import Image from 'next/image'
import CariocaLogo from '/public/logo-carioca.png'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { cariocaRanking } from '@/constants'
import { Container } from '@/components/container'
import { MedalIcon } from '../../public/icon-medal'

export default function CariocaSection() {
  return (
    <section className="flex flex-col bg-carioca bg-no-repeat bg-cover 2xl:min-w-full justify-center items-center p-12 sm:p-20">
      <div className="flex container flex-col justify-around sm:flex-row ">
        <div className="px-20 sm:px-0 max-w-[751px]">
          <div className="flex items-center space-x-4 mb-20">
            <Image src={CariocaLogo} alt="Logo Carioca" />
            <h2 className="font-heading text-6xl text-custom-green">Carioca</h2>
          </div>
          <div className="text-2xl px-2 sm:px-0 font-semibold space-y-10 [&_b]:mr-1 sm:[&_p]:w-2/3 text-center sm:text-left [&_b]:text-custom-green">
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
              Os 20 maiores compradores de Carioca concorrem a uma viagem à
              Itália no valor de R$ 30.000 e os três representantes que mais
              venderem recebem R$ 5.000 cada.;
            </p>
            <p>
              Incentivos de
              <b className="ml-2">Compre e ganhe:</b>
            </p>
            <Accordion type="single" collapsible className="sm:w-1/2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-2xl">
                  Clientes
                </AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                  <b>3 primeiros:</b>a cada 100 mil reais em compras, ganham um
                  IPhone 14 128gb cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                  <b>5 primeiros:</b>a cada 75 mil reais em compras, ganham um
                  notebook cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                  <b>10 primeiros:</b>a cada 50 mil reais em compras, ganham um
                  JBL, Caixa de Som Bluetooth cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                  <b>15 primeiros:</b>a cada 30 mil reais em compras, ganham um
                  Smartwatch Galaxy Samsung Watch4 Bt 40mm - Preto cada;
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-2xl">
                  Time de Vendas
                </AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                  <b>3 primeiros:</b>a cada 100 mil reais em vendas, ganham um
                  IPhone 14 128gb cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                  <b>5 primeiros:</b>a cada 50 mil reais em vendas, ganham um
                  Notebook cada;
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                  <b>10 primeiros:</b> a cada 30 mil reais em vendas, ganham uma
                  JBL, Caixa de Som Bluetooth cada;
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="pt-10 sm:pt-0 px-20 sm:px-0">
          <h2 className="font-heading text-6xl text-custom-green text-center sm:text-left">
            Ranking
          </h2>
          <div
            className="text-black mt-10 space-y-4
          [&_div]:rounded-full [&_div]:w-96 [&_div]:h-12 [&_div]:bg-white [&_div]:text-center [&_div]:items-center [&_div]:flex [&_div]:justify-center 
        [&_a]:text-black"
          >
            {cariocaRanking.map((position, index) => {
              if (index === 0) {
                return (
                  <div key={position.position} className="relative">
                    <Container>
                      <MedalIcon className="absolute -top-2 left-2 w-10 h-10 text-yellow-500 fill-white" />
                      <p>{position.name}</p>
                    </Container>
                  </div>
                )
              }
              if (index === 1) {
                return (
                  <div key={position.position} className="relative">
                    <Container>
                      <MedalIcon className="absolute -top-2 left-2 w-10 h-10 text-gray-500 fill-white" />
                      <p>{position.name}</p>
                    </Container>
                  </div>
                )
              }
              if (index === 2) {
                return (
                  <div key={position.position} className="relative">
                    <Container>
                      <MedalIcon className="absolute -top-2 left-2 w-10 h-10 text-orange-500 fill-white" />
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
          <p className="text-sm mt-8 text-custom-yellow px-4 sm:px-0">
            Não encontrou o seu nome? Entre em contato como seu gestor regional
            e procure saber como alcançar a meta e superar os desafios desta
            campanha. 
          </p>
        </div>
      </div>
    </section>
  )
}
