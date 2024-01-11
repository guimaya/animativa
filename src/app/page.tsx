import Image from 'next/image'
import Logo from '/public/logo-animativa.png'
import MouseIcon from '/public/icon-mouse.svg'

import WarnerLogo from '/public/logo-warner.png'
import WarnerBookOne from '/public/warner-book-one.png'
import WarnerBookTwo from '/public/warner-book-two.png'
import WarnerBookThee from '/public/warner-book-three.png'
import WarnerBookFour from '/public/warner-book-four.png'

import CariocaLogo from '/public/logo-carioca.png'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <section className='flex flex-col bg-hero bg-no-repeat bg-cover min-h-screen justify-around items-center text-center space-y-6 p-6'>
        <Image src={Logo} alt='Logo Animativa' />
        <div className='sm:w-3/4 space-y-40'>
          <p className='font-heading text-2xl sm:text-5xl'>
            A Animativa lançou em abril de 2023 algumas campanhas para a sua
            força de vendas superar as metas e colocar ainda mais din din no
            bolso.
          </p>
          <p className='text-2xl sm:text-5xl text-custom-green font-bold'>
            Conheça cada uma delas e veja quem está no topo dos rankings. Ainda
            dá tempo de participar e ganhar muitos prêmios.
          </p>
        </div>
        <Image src={MouseIcon} alt='Arraste para baixo' className='' />
      </section>
      <section className='flex flex-col bg-warner bg-no-repeat bg-cover min-h-screen min-w-full justify-center p-6 sm:py-10'>
        <div className='flex flex-col w-full justify-around sm:flex-row px-40'>
          <div>
            <div className='flex items-center space-x-4 mb-20'>
              <Image src={WarnerLogo} alt='Logo Warner' />
              <h2 className='font-heading text-7xl text-custom-yellow'>
                Warner
              </h2>
            </div>
            <div className='text-2xl sm:text-4xl font-semibold space-y-10 [&_b]:text-custom-yellow [&_b]:mr-1 sm:[&_p]:w-1/2 text-center sm:text-left'>
              <p>
                <b>Ativação geral:</b>
                atingir 4.9 milhões em vendas;
              </p>
              <p>
                <b>Gatilho para ativar:</b>
                atingir 4.9 milhões em vendas;
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
            <div className='flex flex-auto sm:space-x-8 mt-10 sm:mt-20'>
              <Image src={WarnerBookOne} alt='Livro Warner' />
              <Image src={WarnerBookTwo} alt='Livro Warner' />
              <Image src={WarnerBookThee} alt='Livro Warner' />
              <Image src={WarnerBookFour} alt='Livro Warner' />
            </div>
          </div>
          <div className='mt-10 sm:mt-0'>
            <h2 className='font-heading text-6xl text-custom-yellow text-center sm:text-left'>
              Ranking
            </h2>
            <div
              className='text-black mt-10 space-y-4 
              [&_div]:rounded-full [&_div]:w-96 [&_div]:h-12 [&_div]:bg-white [&_div]:text-center [&_div]:items-center [&_div]:flex [&_div]:justify-center 
            [&_a]:text-black'
            >
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col bg-carioca bg-no-repeat bg-cover min-h-screen min-w-full justify-center p-6 sm:py-10'>
        <div className='flex flex-col w-full justify-around sm:flex-row px-40'>
          <div>
            <div className='flex items-center space-x-4 mb-20'>
              <Image src={CariocaLogo} alt='' />
              <h2 className='font-heading text-5xl sm:text-7xl text-custom-green'>
                Carioca
              </h2>
            </div>
            <div className='text-2xl sm:text-4xl font-semibold space-y-10 [&_b]:text-custom-green [&_b]:mr-1 sm:[&_p]:w-1/2 text-center sm:text-left'>
              <p>
                <b>Ativação geral:</b>
                atingir 4.9 milhões em vendas;
              </p>
              <p>
                <b>Gatilho para ativar:</b>
                atingir 4.9 milhões em vendas;
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
            <div className='pt-10'>
              <Accordion type='single' collapsible className='sm:w-1/2 '>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold text-3xl'>
                    Clientes
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger className='font-bold text-3xl'>
                    Time de Vendas
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className='pt-10 sm:pt-0'>
            <h2 className='font-heading text-6xl text-custom-green text-center sm:text-left'>
              Ranking
            </h2>
            <div
              className='text-black mt-10 space-y-4 
              [&_div]:rounded-full [&_div]:w-96 [&_div]:h-12 [&_div]:bg-white [&_div]:text-center [&_div]:items-center [&_div]:flex [&_div]:justify-center 
            [&_a]:text-black'
            >
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col bg-faturamento bg-no-repeat bg-cover min-h-screen min-w-full justify-center items-center p-6 sm:py-20'>
        <div className='flex flex-col w-full justify-around sm:flex-row px-2 sm:px-40'>
          <div>
            <h2 className='font-heading text-6xl text-custom-pink text-center sm:text-left mb-10'>
              fatuRamento
            </h2>
            <div className='text-2xl sm:text-4xl font-semibold space-y-10 text-custom-purple [&_b]:text-custom-pink [&_b]:mr-1 sm:[&_p]:w-1/2'>
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
              <Accordion type='single' collapsible className='sm:w-1/2 '>
                <AccordionItem value='item-1' className='border-custom-purple'>
                  <AccordionTrigger className='font-bold text-3xl text-custom-pink text-left'>
                    Desconto concedido em negociações de vendas
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2' className='border-custom-purple'>
                  <AccordionTrigger className='font-bold text-3xl text-custom-pink text-left'>
                    Positivação por categoria de produto
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2' className='border-custom-purple'>
                  <AccordionTrigger className='font-bold text-3xl text-custom-pink text-left'>
                    Positivação por categoria de produto
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2' className='border-custom-purple'>
                  <AccordionTrigger className='font-bold text-3xl text-custom-pink text-left'>
                    Positivação por categoria de produto
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
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
          <div className='pt-10 sm:pt-0'>
            <h2 className='font-heading text-6xl text-custom-purple'>
              Ranking
            </h2>
            <div
              className='text-black mt-10 space-y-4 
              [&_div]:rounded-full [&_div]:w-96 [&_div]:h-12 [&_div]:bg-white [&_div]:text-center [&_div]:items-center [&_div]:flex [&_div]:justify-center 
            [&_a]:text-black'
            >
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
              <div>
                <a>Ranking</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
