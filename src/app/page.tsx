import Image from 'next/image'
import Logo from '../../public/logo-animativa.png'
import MouseIcon from '../../public/icon-mouse.svg'
import WarnerLogo from '../../public/logo-warner.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center antialiased">
      <section className="flex flex-col bg-hero bg-no-repeat bg-cover min-h-screen justify-around items-center text-center">
        <Image src={Logo} alt="Logo Animativa" />
        <div className="sm:w-3/4 space-y-40">
          <p className="font-heading text-5xl">
            A Animativa lançou em abril de 2023 algumas campanhas para a sua
            força de vendas superar as metas e colocar ainda mais din din no
            bolso.
          </p>
          <p className=" text-5xl text-custom-green font-bold">
            Conheça cada uma delas e veja quem está no topo dos rankings. Ainda
            dá tempo de participar e ganhar muitos prêmios.
          </p>
        </div>
        <Image src={MouseIcon} alt="Arraste para baixo" className="" />
      </section>
      <section className="flex flex-col bg-warner bg-no-repeat bg-cover min-h-screen min-w-full justify-center items-center">
        <div className="flex flex-col w-full justify-around sm:flex-row">
          <div>
            <div className="flex items-center space-x-4 mb-20">
              <Image src={WarnerLogo} alt="" />
              <h2 className="font-heading text-7xl text-custom-yellow">
                Warner
              </h2>
            </div>
            <div className="text-4xl font-semibold space-y-10 [&_a]:text-custom-yellow [&_a]:mr-1">
              <p>
                <a>Ativação geral:</a>
                atingir 4.9 milhões em vendas;
              </p>
              <p>
                <a>Gatilho para ativar:</a>
                atingir 4.9 milhões em vendas;
              </p>
              <p>
                <a>Gatilho individual:</a>
                ser o maior vendedor do período;
              </p>
              <p>
                <a>Premiação:</a>
                os 4 primeiros do ranking serão contemplados com R$ 10.000 cada;
              </p>
              <p>
                <a>Premiação Bônus:</a>
                quem atingir 200% do percentual individual dentro dos 4
                primeiros vendedores, leva mais R$ 15.000.;
              </p>
            </div>
            <div className="flex">
              <Image />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-6xl text-custom-yellow">
              Ranking
            </h2>
            <div
              className="text-black mt-10 space-y-4 
              [&_div]:rounded-full [&_div]:w-96 [&_div]:h-12 [&_div]:bg-white [&_div]:text-center [&_div]:items-center [&_div]:flex [&_div]:justify-center 
            [&_a]:text-black"
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
