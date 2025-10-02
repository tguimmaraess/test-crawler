export default function Hero() {
  return (
    <section id="home" className="w-full bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Transforme <span className="text-indigo-600">seu</span> engajamento em <span className="text-indigo-600">recompensas</span>!
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-700">
              Orimatla é a primeira rede social "Tech For Good" que conecta creators e marcas e recompensa você com criptomoedas por interagir, criar e compartilhar.
            </p>

            <div id="download" className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://apps.apple.com/us/app/orimatla/id6738931149"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                aria-label="Baixar na App Store"
              >
                <img
                  src="https://orimatla.io/assets/imgs/applestore.svg"
                  alt="Disponível na App Store"
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.orimatla.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                aria-label="Baixar no Google Play"
              >
                <img
                  src="https://orimatla.io/assets/imgs/playstore.svg"
                  alt="Disponível no Google Play"
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="https://orimatla.gitbook.io/orimatla-whitepaper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-indigo-200 text-indigo-700 bg-indigo-50 font-semibold hover:bg-indigo-100 hover:border-indigo-300 transform hover:-translate-y-0.5 transition-all"
              >
                Ler o Whitepaper
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <img
                src="https://orimatla.io/assets/imgs/setinha.gif"
                alt="Seta animada"
                className="h-6 w-auto animate-bounce"
              />
              <span className="text-sm text-gray-600">Baixe o App agora</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-10 h-40 w-40 bg-indigo-200 rounded-full blur-2xl opacity-60" aria-hidden="true"></div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-purple-200 rounded-full blur-2xl opacity-60" aria-hidden="true"></div>

            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <img
                src="https://orimatla.io/assets/imgs/03/Fire.png"
                alt="Recompensas e engajamento no Orimatla"
                className="w-full h-auto object-contain animate-pulse"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Engaje, crie e conquiste recompensas em cripto no Orimatla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

