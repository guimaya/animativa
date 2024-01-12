import Image from 'next/image'
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
import { Container } from './container'
import { MedalIcon } from '../../public/icon-medal'
import { warnerRanking } from '@/constants'

export default function WarnerSection() {
  return (
    <section className="flex flex-col bg-warner bg-no-repeat bg-cover 2xl:min-w-full justify-center p-12 sm:p-20">
      <div className="flex container flex-col justify-around sm:flex-row ">
        <div className="px-20 sm:px-0 max-w-[751px]">
          <div className="flex items-center space-x-4 mb-20">
            <Image src={WarnerLogo} alt="Logo Warner" />
            <h2 className="font-heading text-6xl text-custom-yellow">Warner</h2>
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
              quem atingir 200% do percentual individual dentro dos 4 primeiros
              vendedores, leva mais R$ 15.000.;
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
            {warnerRanking.map((position, index) => {
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
          <p className="text-sm mt-10 text-custom-purple px-4 sm:px-0">
            Não encontrou o seu nome? Entre em contato como seu gestor regional
            e procure saber como alcançar a meta e superar os desafios desta
            campanha. 
          </p>
        </div>
      </div>
    </section>
  )
}
