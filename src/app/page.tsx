import Image from 'next/image'
import Logo from '/public/logo-animativa.png'
import ArrowIcon from '/public/icon-arrow.svg'
import InfoIcon from '/public/icon-info.svg'

import WarnerLogo from '/public/logo-warner.png'
import WarnerBookOne from '/public/warner-book-one.png'
import WarnerBookTwo from '/public/warner-book-two.png'
import WarnerBookThee from '/public/warner-book-three.png'
import WarnerBookFour from '/public/warner-book-four.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import CariocaLogo from '/public/logo-carioca.png'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { cariocaRanking, faturamentoRanking, warnerRanking } from '@/constants'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <section className="flex flex-col 2xl:min-w-full bg-hero bg-no-repeat bg-cover min-h-screen justify-around items-center text-center space-y-6 p-12">
        <Image src={Logo} alt="Logo Animativa" />
        <div className="text-2xl sm:text-4xl sm:w-3/4 space-y-20 sm:space-y-40">
          <p className="font-heading">
            A Animativa lançou em abril de 2023 algumas campanhas para a sua
            força de vendas superar as metas e colocar ainda mais din din no
            bolso.
          </p>
          <p className="text-custom-green font-bold">
            Conheça cada uma delas e veja quem está no topo dos rankings. Ainda
            dá tempo de participar e ganhar muitos prêmios.
          </p>
        </div>
        <Image
          src={ArrowIcon}
          alt="Arraste para baixo"
          className="animate-bounce size-16"
        />
      </section>
      <section className="flex flex-col bg-warner bg-no-repeat bg-cover min-h-screen 2xl:min-w-full justify-center p-12 sm:p-20">
        <div className="flex container flex-col justify-around sm:flex-row ">
          <div className="px-20 sm:px-0">
            <div className="flex items-center space-x-4 mb-20">
              <Image src={WarnerLogo} alt="Logo Warner" />
              <h2 className="font-heading text-6xl text-custom-yellow">
                Warner
              </h2>
            </div>
            <div className="text-2xl px-2 sm:px-0 font-semibold space-y-10 [&_b]:mr-1 sm:[&_p]:w-2/3 text-center sm:text-left [&_b]:text-custom-yellow">
              <p>
                <b>Ativação geral:</b>
                atingir 4.9 milhões em vendas;
              </p>
              <p>
                <b>Gatilho para ativar:</b>
                vender 25% a mais que no período anterior;
              </p>
              <p>
                <b>Gatilho individual:</b>
                ser o maior vendedor do período;
              </p>
              <p>
                <b>Premiação:</b>
                os 4 primeiros do ranking serão contemplados com R$ 10.000 cada;
              </p>
              <p>
                <b>Premiação Bônus:</b>
                quem atingir 200% do percentual individual dentro dos 4
                primeiros vendedores, leva mais R$ 15.000.;
              </p>
            </div>
            <Carousel className="max-w-[18rem] mt-10 ml-12">
              <CarouselContent>
                <CarouselItem className="basis-1/2">
                  <Image src={WarnerBookOne} alt="Livro Warner" className="" />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <Image src={WarnerBookTwo} alt="Livro Warner" />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <Image src={WarnerBookThee} alt="Livro Warner" />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <Image src={WarnerBookFour} alt="Livro Warner" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-custom-green text-custom-purple" />
              <CarouselNext className="bg-custom-green text-custom-purple" />
            </Carousel>
            <div className="flex flex-auto mt-10 sm:mt-20"></div>
          </div>
          <div className="pt-10 sm:pt-0 px-20 sm:px-0">
            <h2 className="font-heading text-6xl text-custom-yellow text-center sm:text-left">
              Ranking
            </h2>
            <div
              className="text-black mt-10 space-y-4 items-center justify-center
              [&_div]:rounded-full [&_div]:w-96 [&_div]:h-12 [&_div]:bg-white [&_div]:text-center [&_div]:items-center [&_div]:flex [&_div]:justify-center 
            [&_a]:text-black"
            >
              {warnerRanking.map((position) => {
                return (
                  <div key={position.position}>
                    <p>{position.name}</p>
                  </div>
                )
              })}
            </div>
            <p className="text-sm mt-10 text-custom-purple px-4 sm:px-0">
              Não encontrou o seu nome? Entre em contato como seu gestor
              regional e procure saber como alcançar a meta e superar os
              desafios desta campanha. 
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-carioca bg-no-repeat bg-cover min-h-screen 2xl:min-w-full justify-center items-center p-12 sm:p-20">
        <div className="flex container flex-col justify-around sm:flex-row ">
          <div className="px-20 sm:px-0 max-w-[751px]">
            <div className="flex items-center space-x-4 mb-20">
              <Image src={CariocaLogo} alt="Logo Carioca" />
              <h2 className="font-heading text-6xl text-custom-green">
                Carioca
              </h2>
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
                    <b>3 primeiros:</b>a cada 100 mil reais em compras, ganham
                    um IPhone 14 128gb cada;
                  </AccordionContent>
                  <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                    <b>5 primeiros:</b>a cada 75 mil reais em compras, ganham um
                    notebook cada;
                  </AccordionContent>
                  <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                    <b>10 primeiros:</b>a cada 50 mil reais em compras, ganham
                    um JBL, Caixa de Som Bluetooth cada;
                  </AccordionContent>
                  <AccordionContent className="text-2xl font-semibold [&_b]:text-custom-green [&_b]:mr-1">
                    <b>15 primeiros:</b>a cada 30 mil reais em compras, ganham
                    um Smartwatch Galaxy Samsung Watch4 Bt 40mm - Preto cada;
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
                    <b>10 primeiros:</b> a cada 30 mil reais em vendas, ganham
                    uma JBL, Caixa de Som Bluetooth cada;
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
              {cariocaRanking.map((position) => {
                return (
                  <div key={position.position}>
                    <p>{position.name}</p>
                  </div>
                )
              })}
            </div>
            <p className="text-sm mt-8 text-custom-yellow px-4 sm:px-0">
              Não encontrou o seu nome? Entre em contato como seu gestor
              regional e procure saber como alcançar a meta e superar os
              desafios desta campanha. 
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-faturamento bg-no-repeat bg-cover min-h-screen 2xl:min-w-full justify-center items-center p-12 sm:p-20">
        <div className="flex container flex-col justify-around sm:flex-row">
          <div className="px-20 sm:px-0">
            <h2 className="font-heading text-6xl text-custom-pink text-center sm:text-left mb-10">
              fatuRamento
            </h2>
            <div className="text-2xl px-2 sm:px-0 font-semibold space-y-10 [&_b]:text-custom-pink [&_b]:mr-1 sm:[&_p]:w-2/3 text-custom-purple">
              <p>
                <b>Ativação geral:</b>
                atingir 260.1 milhões em vendas (90% do objetivo da companhia do
                mercado interno 289 milhões).
              </p>
              <p>
                <b>Gatilho para ativar:</b>
                <br />
                Atingir 115% - 5 pontos <br />
                Atingir de 100 a 114.99% - 3 pontos <br />
                Atingir de 90 a 99.99% - 1 pontos
              </p>
              <Accordion
                type="single"
                collapsible
                className="sm:w-1/2 space-y-4"
              >
                <AccordionItem value="item-1" className="border-custom-purple">
                  <AccordionTrigger className="font-bold text-3xl text-custom-pink text-left">
                    Desconto concedido em negociações de vendas
                  </AccordionTrigger>
                  <AccordionContent className="text-2xl font-semibold">
                    Cálculo: A composição será feita considerando a RL para
                    nivelar os preços entre os estados. Com isso, será feita a
                    composição total da venda realizada versus o valor total de
                    venda considerando o preço de tabela (Rec. Liq). Até 25% - 5
                    pontos De 25.01 a 30% - 3 pontos De 30.1 a 35 % - 2 pontos
                    De 35.1 a 42% - 1 ponto
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-custom-purple">
                  <AccordionTrigger className="font-bold text-2xl text-custom-pink text-left">
                    Positivação por categoria de produto
                  </AccordionTrigger>
                  <AccordionContent className="text-2xl font-semibold pl-4">
                    <ul>
                      <li>Commodity</li>
                      <li>Marca própria</li>
                      <li>Licenciado</li>
                      <li>Impressos</li>
                      <li>Agendas/Planners</li>
                    </ul>
                  </AccordionContent>
                  <AccordionContent className="text-2xl font-semibold">
                    · Se 90% dos clientes da base comprarem todas as categorias
                    participantes - 2 pontos
                  </AccordionContent>
                  <AccordionContent className="text-2xl font-semibold">
                    · Se 95% dos clientes da base comprarem todas as categorias
                    participantes - 3 pontos
                  </AccordionContent>
                  <AccordionContent className="text-2xl font-semibold">
                    · Se 100% dos clientes da base comprarem todas as categorias
                    participantes - 5 pontos
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-custom-purple">
                  <AccordionTrigger className="font-bold text-2xl text-custom-pink text-left">
                    Acompanhamento de PDVs
                  </AccordionTrigger>
                  <AccordionContent className="text-2xl font-semibold">
                    Calculo: Quantidade de PDVs (fotos enviadas pelo cliente) /
                    Base de clientes Ativa
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-custom-purple">
                  <AccordionTrigger className="font-bold text-2xl text-custom-pink text-left">
                    Critério final
                  </AccordionTrigger>
                  <AccordionContent className="text-2xl font-semibold">
                    Soma das pontuações:
                    <br /> · Se 90% dos clientes da base comprarem todas as
                    categorias participantes - 2 pontos
                  </AccordionContent>
                  <AccordionContent className="text-2xl font-semibold">
                    · Se 95% dos clientes da base comprarem todas as categorias
                    participantes - 3 pontos
                  </AccordionContent>
                  <AccordionContent className="text-2xl font-semibold">
                    · Se 100% dos clientes da base comprarem todas as categorias
                    participantes - 5 pontos
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p>
                <b>Premiação:</b>
                <br />
                1º - Viagem internacional de até R$ 30.000
                <br />
                2º - Viagem de até R$ 20.000
                <br />
                3º - Viagem de até R$ 15.000
                <br />
                4º - Viagem de até R$ 10.000
                <br />
                5º - Viagem de até R$ 8.000
              </p>
            </div>
          </div>
          <div className="pt-10 sm:pt-0 px-20 sm:px-0">
            <h2 className="font-heading text-6xl text-custom-purple text-center sm:text-left">
              Ranking
            </h2>
            <div
              className="text-black mt-10 space-y-4 
              [&_div]:rounded-full [&_div]:w-96 [&_div]:h-12 [&_div]:bg-white [&_div]:text-center [&_div]:items-center [&_div]:flex [&_div]:justify-center 
            [&_a]:text-black"
            >
              {faturamentoRanking.map((position) => {
                return (
                  <div key={position.position}>
                    <p>{position.name}</p>
                  </div>
                )
              })}
            </div>
            <p className="text-sm mt-8 text-custom-yellow px-4 sm:px-0">
              Não encontrou o seu nome? Entre em contato como seu gestor
              regional e procure saber como alcançar a meta e superar os
              desafios desta campanha. 
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
