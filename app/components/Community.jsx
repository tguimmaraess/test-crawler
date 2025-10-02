export default function Community() {
  return (
    <section id="comunidade" className="w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-purple-700" aria-hidden="true"></div>
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Junte-se à nossa comunidade
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Faça parte da comunidade e fique ligado nas novidades, campanhas e recompensas.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://orimatla.gitbook.io/orimatla-whitepaper/whitepaper-v1.6/community"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all"
          >
            Veja mais contatos
          </a>
          <a
            href="https://orimatla.gitbook.io/orimatla-whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transform hover:-translate-y-0.5 transition-all"
          >
            Whitepaper
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/20">
            <h3 className="text-xl font-semibold">Campanhas com marcas</h3>
            <p className="mt-2 text-indigo-100">
              Participe de ativações e receba por isso. Marcas se conectam com creators para experiências únicas.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/20">
            <h3 className="text-xl font-semibold">Desafios e missões</h3>
            <p className="mt-2 text-indigo-100">
              Complete desafios semanais e acumule pontos que viram recompensas em cripto.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/20">
            <h3 className="text-xl font-semibold">Comunidade engajada</h3>
            <p className="mt-2 text-indigo-100">
              Conte com uma base ativa de usuários criando, compartilhando e crescendo juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

