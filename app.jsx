import React, { useEffect, useState } from "react";

// Landing page em React + Tailwind (azul e branco) para o projeto
// "Compre 10 e Alimente 11" — Igreja Batista Central de Caieiras.
// Pronta para apresentar e adaptar. Basta exportar como HTML estático
// (Next.js/React) ou colar em um projeto Vite/CRA.

export default function LandingPage() {
  const [vendas, setVendas] = useState(200);
  const [dataEvento, setDataEvento] = useState("");

  // Cálculos do impacto social
  const doacoes = Math.floor(vendas / 10);

  // Rotação simples de versículos
  const verses = [
    {
      ref: "Mateus 25:35",
      text: "Porque tive fome, e me destes de comer; tive sede, e me destes de beber; era estrangeiro, e me acolhestes.",
    },
    {
      ref: "Provérbios 19:17",
      text: "O que favorece o pobre empresta ao Senhor, e este lhe paga o seu benefício.",
    },
    {
      ref: "Gálatas 6:9",
      text: "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.",
    },
    {
      ref: "Mateus 5:16",
      text: "Assim brilhe a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai que está nos céus.",
    },
  ];
  const [verseIndex, setVerseIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setVerseIndex((i) => (i + 1) % verses.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-blue-100/60 bg-white/80">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-blue-600" />
            <div className="font-bold text-blue-800">Compre 10 e Alimente 11</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#sobre" className="hover:text-blue-700">Sobre</a>
            <a href="#cardapio" className="hover:text-blue-700">Cardápio</a>
            <a href="#preco" className="hover:text-blue-700">Preço</a>
            <a href="#impacto" className="hover:text-blue-700">Impacto</a>
            <a href="#contato" className="hover:text-blue-700">Contato</a>
          </nav>
          <a
            href="https://wa.me/5511992835214?text=Quero%20participar%20da%20Feijoada%20Solid%C3%A1ria%20(Compre%2010%20e%20Alimente%2011)!"
            className="hidden md:inline-flex rounded-2xl bg-blue-700 px-4 py-2 text-white shadow hover:bg-blue-800"
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">
              Feijoada Solidária em Caieiras
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Um prato que alimenta dois corações. A cada <span className="font-semibold">10 feijoadas</span> vendidas,
              doamos <span className="font-semibold">1 refeição</span> para a comunidade através do projeto
              <span className="font-semibold"> “Abençoando uma Família”.</span>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#preco"
                className="rounded-2xl bg-blue-700 px-5 py-3 text-white font-semibold shadow hover:bg-blue-800"
              >
                Ver preço
              </a>
              <a
                href="#sobre"
                className="rounded-2xl border border-blue-200 px-5 py-3 text-blue-800 font-semibold hover:bg-blue-50"
              >
                Como funciona
              </a>
            </div>
            <div className="mt-6 text-sm text-blue-800/80">
              <p>Igreja Batista Central de Caieiras</p>
              <p>Rua José Cármona do Leite – Caieiras/SP</p>
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="date"
                  value={dataEvento}
                  onChange={(e) => setDataEvento(e.target.value)}
                  className="rounded-lg border border-blue-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span className="text-slate-500">(defina a data do evento)</span>
              </div>
            </div>
          </div>

          {/* Card destaque */}
          <div className="relative">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
              <div className="rounded-2xl h-48 w-full bg-gradient-to-br from-blue-100 to-blue-50 grid place-items-center">
                <span className="text-blue-900 font-bold text-xl">Feijoada Completa</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>• Feijão preto + carnes nobres</li>
                <li>• Arroz, farofa, couve e laranja</li>
                <li>• Torresmo crocante</li>
                <li>• Embalagem reforçada (1 kg)</li>
              </ul>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-slate-500 text-sm">Preço solidário</div>
                  <div className="text-4xl font-extrabold text-blue-900">R$ 35,00</div>
                </div>
                <a
                  href="https://wa.me/5511992835214?text=Quero%20reservar%20minhas%20feijoadas%20(Compre%2010%20e%20Alimente%2011)!"
                  className="rounded-2xl bg-blue-700 px-5 py-3 text-white font-semibold shadow hover:bg-blue-800"
                >
                  Reservar agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versículo rotativo */}
      <section className="py-8 bg-blue-50/60">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <blockquote className="text-blue-800 italic">“{verses[verseIndex].text}”</blockquote>
          <div className="mt-2 text-sm text-blue-700 font-medium">— {verses[verseIndex].ref}</div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-900">Sobre o projeto</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              O <strong>Compre 10 e Alimente 11</strong> é uma iniciativa que une sabor, solidariedade e fé. A cada dez
              feijoadas vendidas, destinamos uma refeição a uma família assistida pela igreja, por meio do projeto
              <strong> “Abençoando uma Família”.</strong>
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Toda a produção é realizada com cuidado e higiene, utilizando ingredientes selecionados. Nosso foco é
              oferecer uma <strong>feijoada saborosa, acessível e com propósito</strong> para a comunidade de Caieiras.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-36 rounded-2xl bg-blue-100" />
            <div className="h-36 rounded-2xl bg-blue-200" />
            <div className="h-36 rounded-2xl bg-blue-200" />
            <div className="h-36 rounded-2xl bg-blue-100" />
          </div>
        </div>
      </section>

      {/* Cardápio */}
      <section id="cardapio" className="py-16 bg-blue-50/60">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold text-blue-900">O que vai na marmita</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Feijoada", desc: "Feijão preto com carnes nobres (linguiça, costela, carne seca, lombo)." },
              { title: "Acompanhamentos", desc: "Arroz soltinho, farofa crocante, couve refogada, laranja." },
              { title: "Extra", desc: "Torresmo crocante para completar a experiência." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preço */}
      <section id="preco" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold text-blue-900">Preço solidário</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
            <div className="md:col-span-2 rounded-2xl border border-blue-100 bg-white p-6">
              <p className="text-slate-600 leading-relaxed">
                Com base na análise de mercado de Caieiras, adotamos um valor único e acessível para garantir qualidade,
                competitividade e impacto social.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-sm">
                <li>• Preço alinhado ao mercado local</li>
                <li>• Porção reforçada (1 kg)</li>
                <li>• Ingredientes selecionados</li>
                <li>• Projeto com propósito social</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-700 text-white p-6 shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-sm opacity-90">Feijoada completa (1 kg)</div>
                <div className="mt-1 text-5xl font-extrabold">R$ 35</div>
                <div className="text-sm opacity-90">Preço único</div>
              </div>
              <a
                href="https://wa.me/5511992835214?text=Quero%20comprar%20feijoadas%20(Compre%2010%20e%20Alimente%2011)!"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/20"
              >
                Comprar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section id="impacto" className="py-16 bg-blue-50/60">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold text-blue-900">Impacto social em números</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl border border-blue-100 bg-white p-6">
              <label className="text-sm text-slate-600">Vendas previstas</label>
              <input
                type="range"
                min={0}
                max={1000}
                value={vendas}
                onChange={(e) => setVendas(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="mt-3 text-sm text-slate-600">Arraste para simular</div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <Stat title="Vendas" value={vendas.toLocaleString("pt-BR")}/>
                <Stat title="Doações" value={doacoes.toLocaleString("pt-BR")}/>
                <Stat title="% Doado" value={`${Math.min(100, (doacoes / Math.max(1, vendas)) * 100).toFixed(0)}%`}/>
              </div>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6">
              <h3 className="text-xl font-bold text-blue-900">Como a doação acontece?</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                A cada 10 unidades vendidas, 1 refeição é destinada ao projeto <strong>Abençoando uma Família</strong>.
                As entregas são organizadas em parceria com voluntários da igreja e líderes de bairro.
              </p>
              <ul className="mt-3 text-slate-600 text-sm space-y-1">
                <li>• Transparência no processo</li>
                <li>• Registro simples de doações</li>
                <li>• Priorização de famílias em maior vulnerabilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-900">Fale com a coordenação</h2>
            <p className="mt-2 text-slate-600">Dúvidas, voluntariado ou patrocínio: estamos à disposição.</p>
            <div className="mt-4 space-y-2 text-slate-700">
              <p><strong>WhatsApp:</strong> <a className="text-blue-700 underline" href="https://wa.me/5511992835214">(11) 99283-5214</a></p>
              <p><strong>E-mail:</strong> <a className="text-blue-700 underline" href="mailto:xavier.4x.developer@gmail.com">xavier.4x.developer@gmail.com</a></p>
              <p><strong>Local:</strong> Igreja Batista Central de Caieiras — Rua José Cármona do Leite</p>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-blue-100 bg-white p-6 shadow"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Nome" placeholder="Seu nome" />
              <Input label="Telefone" placeholder="(11) 9____-____" />
              <Input className="sm:col-span-2" label="Assunto" placeholder="Quero ser voluntário / patrocinar" />
              <Textarea className="sm:col-span-2" label="Mensagem" placeholder="Como posso ajudar?" />
            </div>
            <button className="mt-4 w-full rounded-2xl bg-blue-700 px-5 py-3 text-white font-semibold hover:bg-blue-800">Enviar</button>
            <p className="mt-2 text-xs text-slate-500">*Este formulário é ilustrativo. Use o WhatsApp/E-mail para confirmação imediata.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-blue-50/60 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Compre 10 e Alimente 11 — Caieiras/SP.</p>
          <div className="text-sm text-slate-600">Paleta: azul e branco • Layout responsivo</div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-center">
      <div className="text-xs uppercase tracking-wide text-blue-700">{title}</div>
      <div className="mt-1 text-2xl font-extrabold text-blue-900">{value}</div>
    </div>
  );
}

function Input({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm text-slate-600">{label}</span>
      <input
        {...props}
        className="mt-1 w-full rounded-xl border border-blue-200 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </label>
  );
}

function Textarea({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm text-slate-600">{label}</span>
      <textarea
        rows={4}
        {...props}
        className="mt-1 w-full rounded-xl border border-blue-200 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </label>
  );
}
