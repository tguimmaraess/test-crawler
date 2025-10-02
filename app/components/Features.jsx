export default function Features() {
  const items = [
    {
      title: "Crie e engaje",
      desc:
        "Publique conteúdo, interaja com a comunidade e participe de desafios. Seu engajamento vira pontos e benefícios reais.",
    },
    {
      title: "Receba recompensas em cripto",
      desc:
        "Ganhe tokens por suas ações no app. Quanto mais valor você gera, mais você é recompensado.",
    },
    {
      title: "Conecte-se com marcas",
      desc:
        "Creators e marcas se encontram no Orimatla para campanhas, ativações e experiências exclusivas.",
    },
    {
      title: "Seguro e transparente",
      desc:
        "Tecnologia web3 com foco na segurança e na transparência para toda a comunidade.",
    },
  ];

  return (
    <section id="sobre" className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            A experiência social que transforma participação em valor para creators, marcas e comunidade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow">
              <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600" aria-hidden="true"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-700">
                  {item.desc}
                </p>
                <div className="mt-6">
                  <a
                    href="#download"
                    className="inline-flex text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors"
                  >
                    Começar agora →
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-purple-200 rounded-full blur-2xl" aria-hidden="true"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-gray-700 text-center">
            Quer entender os detalhes do ecossistema Orimatla?
          </p>
          <a
            href="https://orimatla.gitbook.io/orimatla-whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-md hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Ler o Whitepaper
          </a>
        </div>
      </div>
    </section>
  );
}

