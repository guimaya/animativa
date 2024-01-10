import Image from 'next/image'
import Logo from '../../public/logo-animativa.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-hero bg-no-repeat bg-cover">
      <section className="flex flex-col mt-20 justify-center items-center text-center space-y-20">
        <Image src={Logo} alt="Logo Animativa" />
        <div>
          <p>
            A Animativa lançou em abril de 2023 algumas campanhas para a sua
            força de vendas superar as metas e colocar ainda mais din din no
            bolso.
          </p>
          <p>
            Conheça cada uma delas e veja quem está no topo dos rankings. Ainda
            dá tempo de participar e ganhar muitos prêmios.
          </p>
        </div>
      </section>
    </main>
  )
}
