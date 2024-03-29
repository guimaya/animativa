import { faturamentoRanking } from '@/constants'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Container } from './container'
import { MedalIcon } from '../../public/icon-medal'
import RankingItem from './ranking-item'

export default function FaturamentoSection() {
  const rankingItems = faturamentoRanking.map((position) => {
    return <RankingItem key={position.position} {...position} />
  })

  return (
    <section className="flex flex-col items-center justify-center bg-faturamento  bg-cover bg-no-repeat p-12 sm:p-20 lg:min-w-full">
      <div className="container flex flex-col justify-between sm:flex-row">
        <div className="max-w-[751px] px-20 sm:px-0">
          <h2 className="mb-10  font-heading text-6xl text-custom-pink sm:text-left">fatuRamento venda+ ganhe++</h2>
          <div className="space-y-10 px-2 text-2xl font-semibold text-custom-purple sm:px-0 [&_b]:mr-1 [&_b]:text-custom-pink ">
            <p>
              <b>Ativação geral:</b>
              atingir o faturamento bruto de 260,1 milhões em vendas.
            </p>
            <div className="flex flex-col space-y-3 ">
              <b>Gatilho para ativar:</b>
              <p>
                · Atingir 115% - <b>5 pontos</b>
              </p>
              <p>
                · Atingir de 100% a 114.99% - <b>3 pontos</b>
              </p>
              <p>
                · Atingir de 90% a 99.99% - <b>1 ponto</b>
              </p>
            </div>
            <Accordion type="single" collapsible className="max-w-[600px] space-y-4">
              <AccordionItem value="item-1" className="border-custom-purple">
                <AccordionTrigger className="text-left text-2xl font-bold text-custom-pink">
                  Desconto concedido em negociações de vendas
                </AccordionTrigger>
                <AccordionContent className="text-2xl font-semibold">
                  Cálculo: A composição será feita considerando a RL para nivelar os preços entre os estados. Com isso,
                  será feita a composição total da venda realizada versus o valor total de venda considerando o preço de
                  tabela (Rec. Liq).
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · Até 25% - <b>5 pontos</b>
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · De 25.01 a 30% - <b>3 pontos</b>
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · De 30.1 a 35 % - <b>2 pontos</b>
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · De 35.1 a 42% - <b>1 ponto</b>
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
                  · Se 90% dos clientes da base comprarem todas as categorias participantes - <b>2 pontos</b>
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · Se 95% dos clientes da base comprarem todas as categorias participantes - <b>3 pontos</b>
                </AccordionContent>
                <AccordionContent className="text-2xl font-semibold">
                  · Se 100% dos clientes da base comprarem todas as categorias participantes - <b>5 pontos</b>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-custom-purple">
                <AccordionTrigger className="text-left text-2xl font-bold text-custom-pink">
                  Acompanhamento de PDVs
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 pr-8 text-2xl font-semibold">
                  <b>Soma das pontuações:</b>
                  <p>
                    · Se 75% dos clientes da base enviarem fotos do PDV - <b>1 ponto</b>
                  </p>
                  <p>
                    · Se 85% dos clientes da base enviarem fotos do PDV - <b>2 pontos</b>
                  </p>
                  <p>
                    · Se 95% dos clientes da base enviarem fotos do PDV - <b>3 pontos</b>
                  </p>
                  <p>
                    · Se 100% dos clientes da base enviarem fotos do PDV - <b>5 pontos</b>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-2">
              <b>Premiação:</b>
              <p>1º - Viagem internacional de até R$ 30.000</p>
              <p>2º - Viagem de até R$ 20.000</p>
              <p>3º - Viagem de até R$ 15.000</p>
              <p>4º - Viagem de até R$ 10.000</p>
              <p>5º - Viagem de até R$ 8.000</p>
            </div>
          </div>
        </div>
        <div className="px-20 pt-10 sm:px-0 sm:pt-0">
          <h2 className="text-center font-heading text-6xl text-custom-purple sm:text-left">Ranking</h2>
          <div
            className="mt-10 space-y-4 text-black 
            [&_div]:flex [&_div]:h-12 [&_div]:w-[22rem] [&_div]:items-center [&_div]:justify-center [&_div]:rounded-full [&_div]:bg-white [&_div]:text-center sm:[&_div]:w-96"
          >
            {rankingItems}
          </div>
          <p className="mt-8 max-w-sm px-4 text-sm font-bold text-white sm:px-0">
            Não encontrou o seu nome? Entre em contato como seu gestor regional e procure saber como alcançar a meta e
            superar os desafios desta campanha. 
          </p>
        </div>
      </div>
    </section>
  )
}
