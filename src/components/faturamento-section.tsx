import { faturamentoRanking } from '@/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion'
import { Container } from './container'
import { MedalIcon } from '../../public/icon-medal'

export default function FaturamentoSection() {
  return (
    <section className="flex flex-col bg-faturamento bg-no-repeat bg-cover  2xl:min-w-full justify-center items-center p-12 sm:p-20">
      <div className="flex container flex-col justify-around sm:flex-row">
        <div className="px-20 sm:px-0 max-w-[751px]">
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
            <Accordion type="single" collapsible className="sm:w-1/2 space-y-4">
              <AccordionItem value="item-1" className="border-custom-purple">
                <AccordionTrigger className="font-bold text-2xl text-custom-pink text-left">
                  Desconto concedido em negociações de vendas
                </AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold ">
                  Cálculo: A composição será feita considerando a RL para
                  nivelar os preços entre os estados. Com isso, será feita a
                  composição total da venda realizada versus o valor total de
                  venda considerando o preço de tabela (Rec. Liq). Até 25% - 5
                  pontos De 25.01 a 30% - 3 pontos De 30.1 a 35 % - 2 pontos De
                  35.1 a 42% - 1 ponto
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
            {faturamentoRanking.map((position, index) => {
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
