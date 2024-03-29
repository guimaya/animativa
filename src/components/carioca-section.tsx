import Image from 'next/image'
import CariocaLogo from '/public/logo-carioca.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cariocaRanking } from '@/constants'
import RankingItem from './ranking-item'

export default function CariocaSection() {
  const rankingItems = cariocaRanking.map((position) => {
    return <RankingItem key={position.position} {...position} />
  })

  return (
    <section className="flex flex-col justify-center bg-carioca bg-cover bg-no-repeat p-12 xl:min-w-full">
      <div className="container flex flex-col justify-between sm:flex-row ">
        <div className="max-w-[751px] px-20 sm:px-0">
          <div className="mb-20 flex items-center space-x-4">
            <h2 className="font-heading text-6xl text-custom-green">Carioca</h2>
          </div>
          <div className="space-y-10 px-2 text-2xl font-semibold sm:px-0 [&_b]:mr-1 [&_b]:text-custom-green">
            <div className="mb-10 space-y-4">
              <h3 className="font-heading text-4xl text-custom-purple">Campanha 1 - itáLia</h3>
              <p>
                <b>Ativação geral:</b>
                atingir 10.5 milhões em vendas.
              </p>
              <p>
                <b>Gatilho para ativar:</b>
                atingir 70% da meta de vendas.
              </p>
              <p>
                <b>Premiação:</b>
                Os 20 maiores compradores de Carioca concorrem a uma viagem à Itália no valor de R$ 30.000 e os três
                representantes que mais venderem recebem R$ 5.000 cada.
              </p>
            </div>
            <div className="pt-10 sm:hidden sm:px-0 sm:pt-0">
              <h2 className="text-center font-heading text-6xl text-custom-green sm:text-left">Ranking</h2>
              <h3 className="text-center font-heading text-4xl text-custom-green sm:text-left">camPanha itáLia</h3>

              <div className="mt-10 space-y-4 text-base font-normal text-black [&_a]:text-black [&_div]:flex [&_div]:h-12  [&_div]:w-[22rem] [&_div]:items-center [&_div]:justify-center [&_div]:rounded-full [&_div]:bg-white [&_div]:text-center sm:[&_div]:w-96">
                {rankingItems}
              </div>
              <p className="mt-8 max-w-sm px-4 text-sm font-bold text-white sm:px-0">
                Não encontrou o seu nome? Entre em contato como seu gestor regional e procure saber como alcançar a meta
                e superar os desafios desta campanha. 
              </p>
            </div>

            <div className="flex justify-center pt-12 sm:block sm:items-center sm:pt-96">
              <Image src={CariocaLogo} alt="Logo Carioca" className="w-[14rem]" />
            </div>
            <div className="space-y-4">
              <h3 className="font-heading text-4xl text-custom-purple">Campanha 2 - Vendeu ganhOu</h3>
              <p className="pt-2 font-heading text-3xl font-bold text-custom-purple">Clientes</p>
              <p>
                <b>3 primeiros:</b> acima de 100 mil reais em compras, cada um leva um IPhone 14 128gb.
              </p>
              <p>
                <b>5 primeiros:</b> acima de 75 mil reais em compras, cada um leva um notebook.
              </p>
              <p>
                <b>10 primeiros:</b> acima de 50 mil reais em compras, cada um leva uma JBL, Caixa de Som Bluetooth.
              </p>
              <p>
                <b>15 primeiros:</b> acima de 30 mil reais em compras, cada um leva um Smartwatch Galaxy Samsung Watch4
                Bt 40mm - Preto.
              </p>
              <p className="pt-4 font-heading text-3xl font-bold text-custom-purple">tiMe de veNdas</p>
              <p>
                <b>3 primeiros:</b> acima de 100 mil reais em vendas, cada um leva um IPhone 14 128gb.
              </p>
              <p>
                <b>5 primeiros:</b> acima de 50 mil reais em vendas, cada um leva um Notebook.
              </p>
              <p>
                <b>10 primeiros:</b> acima de 30 mil reais em vendas, cada um leva uma JBL, Caixa de Som Bluetooth.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden px-20 pt-10 sm:block sm:px-0 sm:pt-0">
          <h2 className="text-center font-heading text-6xl text-custom-green sm:text-left">Ranking</h2>
          <h3 className="text-center font-heading text-4xl text-custom-green sm:text-left">camPanha itáLia</h3>

          <div
            className="mt-10 space-y-4 text-black
          [&_a]:text-black [&_div]:flex [&_div]:h-12 [&_div]:w-96 [&_div]:items-center [&_div]:justify-center [&_div]:rounded-full [&_div]:bg-white 
        [&_div]:text-center"
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
