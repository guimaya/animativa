import Image from 'next/image'
import LogoAnimativa from '/public/logo-animativa.png'
import ArrowIcon from '/public/icon-arrow.svg'

export default function HeroSection() {
  return (
    <section className="flex flex-col 2xl:min-w-full bg-hero bg-no-repeat bg-cover min-h-screen justify-around items-center text-center space-y-6 p-12">
      <Image src={LogoAnimativa} alt="Logo Animativa" />
      <div className="text-2xl sm:text-4xl sm:w-3/4 space-y-20 sm:space-y-40">
        <p className="font-heading">
          A Animativa lançou em abril de 2023 algumas campanhas para a sua força
          de vendas superar as metas e colocar ainda mais din din no bolso.
        </p>
        <p className="text-custom-green font-bold">
          Conheça cada uma delas e veja quem está no topo dos rankings. Ainda dá
          tempo de participar e ganhar muitos prêmios.
        </p>
      </div>
      <Image
        src={ArrowIcon}
        alt="Arraste para baixo"
        className="animate-bounce size-16"
      />
    </section>
  )
}
