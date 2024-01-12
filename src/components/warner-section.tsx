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

export default function WarnerSection() {
  return (
    <section className="flex flex-col justify-center bg-warner bg-cover bg-no-repeat p-12 sm:p-20 2xl:min-w-full">
      <div className="container flex flex-col justify-around sm:flex-row ">
        <div className="max-w-[751px] px-20 sm:px-0">
          <div className="mb-20 flex items-center space-x-4">
            <Image src={WarnerLogo} alt="Logo Warner" />
            <h2 className="font-heading text-6xl text-custom-yellow">Warner</h2>
          </div>
          <div className="space-y-10 px-2 text-center text-2xl font-semibold sm:px-0 sm:text-left [&_b]:mr-1 [&_b]:text-custom-yellow sm:[&_p]:w-2/3">
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
          <Carousel className="ml-12 mt-10 max-w-[18rem]">
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
          <div className="mt-10 flex flex-auto sm:mt-20"></div>
        </div>
        <div className="px-20 pt-10 sm:px-0 sm:pt-0">
          <h2 className="text-center font-heading text-6xl text-custom-yellow sm:text-left">Ranking</h2>
          <div
            className="mt-10 items-center justify-center space-y-4 text-black
          [&_a]:text-black [&_div]:flex [&_div]:h-12 [&_div]:w-96 [&_div]:items-center [&_div]:justify-center [&_div]:rounded-full [&_div]:bg-white 
        [&_div]:text-center"
          >
            {warnerRanking.map((position, index) => {
              if (index === 0) {
                return (
                  <div key={position.position} className="relative">
                    <Container>
                      <MedalIcon className="absolute -top-2 left-2 h-10 w-10 fill-white text-yellow-500" />
                      <p>{position.name}</p>
                    </Container>
                  </div>
                )
              }
              if (index === 1) {
                return (
                  <div key={position.position} className="relative">
                    <Container>
                      <MedalIcon className="absolute -top-2 left-2 h-10 w-10 fill-white text-gray-500" />
                      <p>{position.name}</p>
                    </Container>
                  </div>
                )
              }
              if (index === 2) {
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
          <p className="mt-10 px-4 text-sm text-custom-purple sm:px-0">
            Não encontrou o seu nome? Entre em contato como seu gestor regional e procure saber como alcançar a meta e
            superar os desafios desta campanha. 
          </p>
        </div>
      </div>
    </section>
  )
}
