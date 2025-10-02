export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 shadow-md" aria-hidden="true"></div>
              <span className="text-lg font-bold">Orimatla</span>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              A primeira rede social "Tech For Good" que recompensa seu engajamento com criptomoedas.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Navegação</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#sobre" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Sobre</a></li>
              <li><a href="#comunidade" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Comunidade</a></li>
              <li><a href="#download" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Recursos</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://orimatla.gitbook.io/orimatla-whitepaper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="https://orimatla.gitbook.io/orimatla-whitepaper/whitepaper-v1.6/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Comunidade (GitBook)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Baixe o App</h4>
            <div className="mt-3 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/orimatla/id6738931149"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm hover:shadow-md transition-shadow"
                aria-label="App Store"
              >
                <img
                  src="https://orimatla.io/assets/imgs/applestore.svg"
                  alt="Disponível na App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.orimatla.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm hover:shadow-md transition-shadow"
                aria-label="Google Play"
              >
                <img
                  src="https://orimatla.io/assets/imgs/playstore.svg"
                  alt="Disponível no Google Play"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Orimatla. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#sobre" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sobre</a>
            <a
              href="https://orimatla.gitbook.io/orimatla-whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Whitepaper
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

