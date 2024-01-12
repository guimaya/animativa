import Image from 'next/image'
import LogoAnimativa from '/public/logo-animativa.png'
import ArrowIcon from '/public/icon-arrow.svg'

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-around space-y-6 bg-hero bg-cover bg-no-repeat p-12 text-center xl:min-w-full">
      <Image src={LogoAnimativa} alt="Logo Animativa" />
      <div className="space-y-20 text-2xl sm:w-3/4 sm:space-y-40 sm:text-4xl">
        <p className="font-heading">
          A Animativa lançou em abril de 2023 algumas campanhas para a sua força de vendas superar as metas e colocar
          ainda mais din din no bolso.
        </p>
        <p className="font-bold text-custom-green">
          Conheça cada uma delas e veja quem está no topo dos rankings. Ainda dá tempo de participar e ganhar muitos
          prêmios.
        </p>
      </div>
      <Image src={ArrowIcon} alt="Arraste para baixo" className="size-16 animate-bounce" />
    </section>
  )
}
