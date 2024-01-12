import { faturamentoRanking } from '@/constants'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Container } from './container'
import { MedalIcon } from '../../public/icon-medal'

export default function FaturamentoSection() {
  return (
    <section className="flex flex-col items-center justify-center bg-faturamento  bg-cover bg-no-repeat p-12 sm:p-20 2xl:min-w-full">
      <div className="container flex flex-col justify-around sm:flex-row">
        <div className="max-w-[751px] px-20 sm:px-0">
          <h2 className="mb-10 text-center font-heading text-6xl text-custom-pink sm:text-left">fatuRamento</h2>
          <div className="space-y-10 px-2 text-2xl font-semibold text-custom-purple sm:px-0 [&_b]:mr-1 [&_b]:text-custom-pink sm:[&_p]:w-2/3">
            <p>
              <b>Ativação geral:</b>
              atingir 260.1 milhões em vendas (90% do objetivo da companhia do mercado interno 289 milhões).
            </p>
            <p>
              <b>Gatilho para ativar:</b>
              <br />
              Atingir 115% - 5 pontos <br />
              Atingir de 100 a 114.99% - 3 pontos <br />
              Atingir de 90 a 99.99% - 1 pontos
            </p>
            <Accordion type="single" collapsible className="space-y-4 sm:w-1/2">
              <AccordionItem value="item-1" className="border-custom-purple">
                <AccordionTrigger className="text-left text-2xl font-bold text-custom-pink">
                  Desconto concedido em negociações de vendas
                </AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold ">
                  Cálculo: A composição será feita considerando a RL para nivelar os preços entre os estados. Com isso,
                  será feita a composição total da venda realizada versus o valor total de venda considerando o preço de
                  tabela (Rec. Liq). Até 25% - 5 pontos De 25.01 a 30% - 3 pontos De 30.1 a 35 % - 2 pontos De 35.1 a
                  42% - 1 ponto
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-custom-purple">
                <AccordionTrigger className="text-left text-2xl font-bold text-custom-pink">
                  Positivação por categoria de produto
                </AccordionTrigger>
                <AccordionContent className="pl-4 text-2xl font-semibold">
                  <ul>
                    <li>Commodity</li>
                    <li>Marca própria</li>
                    <li>Licenciado</li>
                    <li>Impressos</li>
                    <li>Agendas/Planners</li>
                  </ul>
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · Se 90% dos clientes da base comprarem todas as categorias participantes - 2 pontos
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · Se 95% dos clientes da base comprarem todas as categorias participantes - 3 pontos
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · Se 100% dos clientes da base comprarem todas as categorias participantes - 5 pontos
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-custom-purple">
                <AccordionTrigger className="text-left text-2xl font-bold text-custom-pink">
                  Acompanhamento de PDVs
                </AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold">
                  Calculo: Quantidade de PDVs (fotos enviadas pelo cliente) / Base de clientes Ativa
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-custom-purple">
                <AccordionTrigger className="text-left text-2xl font-bold text-custom-pink">
                  Critério final
                </AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold">
                  Soma das pontuações:
                  <br /> · Se 90% dos clientes da base comprarem todas as categorias participantes - 2 pontos
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · Se 95% dos clientes da base comprarem todas as categorias participantes - 3 pontos
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · Se 100% dos clientes da base comprarem todas as categorias participantes - 5 pontos
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
        <div className="px-20 pt-10 sm:px-0 sm:pt-0">
          <h2 className="text-center font-heading text-6xl text-custom-purple sm:text-left">Ranking</h2>
          <div
            className="mt-10 space-y-4 text-black 
            [&_div]:flex [&_div]:h-12 [&_div]:w-96 [&_div]:items-center [&_div]:justify-center [&_div]:rounded-full [&_div]:bg-white [&_div]:text-center"
          >
            {faturamentoRanking.map((position) => {
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
