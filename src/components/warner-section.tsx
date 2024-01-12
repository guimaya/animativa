import Image from 'next/image'
import WarnerLogo from '/public/logo-warner.png'
import WarnerBookOne from '/public/warner-book-one.png'
import WarnerBookTwo from '/public/warner-book-two.png'
import WarnerBookThee from '/public/warner-book-three.png'
import WarnerBookFour from '/public/warner-book-four.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Container } from './container'
import { MedalIcon } from '../../public/icon-medal'
import { warnerRanking } from '@/constants'
import RankingItem from './ranking-item'

export default function WarnerSection() {
  const rankingItems = warnerRanking.map((position) => {
    return <RankingItem key={position.position} {...position} />
  })

  return (
    <section className="flex flex-col justify-center bg-warner bg-cover bg-no-repeat p-12 sm:px-0 sm:py-20 xl:min-w-full">
      <div className="container flex flex-col justify-between sm:flex-row">
        <div className="max-w-[751px] px-20 sm:px-0">
          <div className="mb-20 flex items-center space-x-4">
            <Image src={WarnerLogo} alt="Logo Warner" />
            <h2 className="font-heading text-6xl text-custom-yellow">Warner</h2>
          </div>
          <div className="space-y-10 px-2 text-2xl font-semibold sm:px-0 [&_b]:mr-1 [&_b]:text-custom-yellow">
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
              quem atingir 200% do percentual individual dentro dos 4 primeiros vendedores, leva mais R$ 15.000.;
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true
            }}
            className="ml-12 mt-10 max-w-[18rem] sm:ml-0 sm:max-w-lg"
          >
            <CarouselContent>
              <CarouselItem className="basis-1/2 sm:basis-1/4">
                <Image src={WarnerBookOne} alt="Livro Warner" className="" />
              </CarouselItem>
              <CarouselItem className="basis-1/2 sm:basis-1/4">
                <Image src={WarnerBookTwo} alt="Livro Warner" />
              </CarouselItem>
              <CarouselItem className="basis-1/2 sm:basis-1/4">
                <Image src={WarnerBookThee} alt="Livro Warner" />
              </CarouselItem>
              <CarouselItem className="basis-1/2 sm:basis-1/4">
                <Image src={WarnerBookFour} alt="Livro Warner" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-custom-green text-custom-purple sm:hidden" />
            <CarouselNext className="bg-custom-green text-custom-purple sm:hidden" />
          </Carousel>
          <div className="mt-10 flex flex-auto sm:mt-20"></div>
        </div>
        <div className="px-20 pt-10 sm:px-0 sm:pt-0">
          <h2 className="text-center font-heading text-6xl text-custom-yellow sm:text-left">Ranking</h2>
          <div
            className="mt-10 items-center justify-center space-y-4 text-black
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
