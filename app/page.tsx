'use client'

import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

type CaseItem = {
  name: string
  category: string
  result?: string
  results?: string
  context: string
  work: string
  investment?: string
  impact?: string
  period?: string
}

const cases: CaseItem[] = [
  {
    name: 'BLACK BULL',
    category: 'Marketing · Branding · Sales · Automation',
    result: 'R$5 mil → R$70 mil/mês',
    results: '14x de crescimento da receita mensal em 6 meses. +1.300% de crescimento da receita mensal.',
    context: 'A empresa não tinha padrão visual nem identidade definida. As vendas estavam em torno de R$5 mil por mês e havia dificuldade de gerar vendas de forma consistente.',
    work: 'Branding e identidade visual, posicionamento digital, conteúdo, Google Ads, Meta Ads, estruturação de funil de vendas, automação comercial com IA e estratégias de fidelização.',
    investment: 'Aproximadamente R$7 mil a R$8 mil por mês.',
    impact: 'O aumento da demanda exigiu uma operação comercial mais escalável. Foi estruturada uma jornada automatizada de vendas com IA e uma etapa de pós-venda mais humanizada.'
  },
  {
    name: 'SONHO DE CRIANÇA',
    category: 'Marketing · Performance · SEO · Comercial',
    result: 'R$10 mil → R$100 mil/mês',
    results: '10x de crescimento da receita mensal.',
    context: 'Uma loja infantil localizada no centro de Congonhas passava despercebida, apesar de possuir um ponto comercial. As vendas estavam em queda por falta de visibilidade.',
    work: 'Google Meu Negócio, SEO, Meta Ads, presença digital, campanhas sazonais e organização da operação comercial.',
    investment: 'Aproximadamente R$1.500 a R$2.500 por mês.',
    impact: 'A operação deixou de depender apenas da visibilidade física em Congonhas e passou a vender para clientes de todo o Brasil.'
  },
  {
    name: 'OBJETIVO BARÃO GERALDO',
    category: 'Marketing · Estratégia · Posicionamento · Performance',
    result: '1.377 leads · 126 matrículas',
    period: 'A partir de outubro de 2025.',
    context: 'Fortalecer o posicionamento da unidade de Barão Geraldo considerando sua localização e concorrência, preservando a força da marca Objetivo e sua reputação acadêmica, mas comunicando também a experiência escolar, educação infantil, ambiente e equipe.',
    work: 'Posicionamento, campanhas de aquisição, conteúdo, comunicação de projetos pedagógicos, eventos, rotina escolar e ações como Desafio de Bolsas e Objetivo Day.',
    impact: '1.377 leads · 455 visitas realizadas · 126 matrículas'
  },
  {
    name: 'OBJETIVO CAMBUÍ',
    category: 'Marketing · Performance · Aquisição · Estratégia Comercial',
    result: '1.770 leads · 141 matrículas',
    period: 'A partir de outubro de 2025.',
    context: 'Fortalecer a aquisição para uma unidade focada em Ensino Fundamental Anos Finais e Ensino Médio.',
    work: 'Aquisição, comunicação e estruturação da jornada comercial.',
    impact: '1.770 leads · 602 visitas realizadas · 141 matrículas'
  },
  {
    name: 'PRIVILLEGE VEÍCULOS',
    category: 'Branding · Identidade Visual · Criação de Marca',
    context: 'Projeto focado exclusivamente em branding e criação de identidade visual. A empresa estava iniciando uma nova operação voltada à venda de veículos de categoria superior.',
    work: 'Construção de uma identidade visual capaz de transmitir a percepção desejada para esse público.'
  },
  {
    name: 'NATHALIA FURLAN',
    category: 'Branding · Identidade Visual · Criação de Marca',
    context: 'Projeto focado em branding e criação de marca. Nathalia Furlan é fonoaudióloga.',
    work: 'Construção de uma identidade própria, coerente e reconhecível para sua atuação profissional.'
  },
]

const concepts = ['Mercado', 'Público', 'Oferta', 'Posicionamento', 'Concorrência', 'Aquisição', 'Comercial', 'Dados']

const method = [
  ['Diagnóstico', 'Entender o negócio e encontrar as oportunidades.'],
  ['Estratégia', 'Definir posicionamento, público, canais e direção.'],
  ['Execução', 'Transformar estratégia em ação.'],
  ['Análise', 'Medir, aprender e identificar gargalos.'],
  ['Crescimento', 'Otimizar o que funciona e construir escala.']
]

const trustedLogos = [
  ['Black Bull Contingência', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackbull%20contingencia-MoaGI451RoY01YIxp2I3yVroWhSqP3.png'],
  ['Privillege Veículos', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/privillege%20veiculos-UOjxTZ133ulEf5cBsY2BfNvDub2Kmv.png'],
  ['Nathalia Furlan', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nathalia%20furlan-FSkGapUX0UznXk2ZwfqPw6mXE90k9J.png'],
  ['Sonho de Criança', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sonho%20de%20crianc%CC%A7a-EVpQSOQMGhHhcKdSA3tIHOsLnUPiXN.png'],
  ['Modarios', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modarios-fADLlWdUHItZjGoNPhHrU5uz2hqEoP.png'],
  ['Objetivo', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/objetivo-ZzOOmNReNNMWHdttTY9gqbhlzbkZI9.png'],
  ['Dost Pet', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dost%20pet-ZtL8bgTd0RJugfIG9qaAnLXVMvMZax.png'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openCase, setOpenCase] = useState<string | null>(null)

  return (
    <main className="site-shell">

      <nav className="nav-wrap" aria-label="Navegação principal">
        <a className="brand" href="#top">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icones-GjjDF1REFWCxO89raB2wEKbkAtBsUW.png"
            alt="Identidade visual"
          />
        </a>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#trabalho" onClick={() => setMenuOpen(false)}>Trabalho</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a>
          <a href="#pensamento" onClick={() => setMenuOpen(false)}>Como penso</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </div>

        <a className="nav-cta" href="#contato">
          Vamos conversar <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">

          <div className="hero-mobile-portrait">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%20quadrado-Ft66HyVpbpnI3kXc8kNUgROzmbJSGw.png"
              alt="Retrato de Gustavo Moscardi"
            />
          </div>

          <div className="eyebrow">
            <span className="dot" /> Marketing &amp; Growth Strategist
          </div>

          <p className="hero-greeting">
            Olá, meu nome é
          </p>

          <h1>
            <span className="reveal-line">Gustavo</span>
            <span className="reveal-line">
              <em>Moscardi</em>
            </span>
          </h1>

          <p className="hero-lead">
            Se você chegou até aqui, provavelmente quer entender o que eu faço.
          </p>

          <div className="hero-bio">
            <p>
              De forma simples: eu entro no negócio, entendo o cenário e trabalho
              para transformar isso em marketing que gere movimento.
            </p>

            <p>
              Isso pode passar por posicionamento, campanhas, conteúdo, mídia,
              vendas ou automação. Depende do que o negócio precisa.
            </p>
          </div>

          <div className="hero-proof" aria-label="Experiência profissional">
            <span>+3 anos de experiência</span>
            <i />
            <span>+60 projetos e empresas atendidas</span>
            <i />
            <span>+R$ 2 milhões em mídia gerenciada</span>
          </div>

          <div className="hero-actions">
            <a className="button button-dark" href="#contato">
              Fale comigo <ArrowUpRight size={16} />
            </a>

            <a className="button button-work" href="#trabalho">
              Conheça o meu trabalho <ArrowDown size={16} />
            </a>
          </div>

        </div>
      </section>

      <section className="thinking section" id="pensamento">
        <div className="section-kicker">/ 01 — COMO EU PENSO</div>

        <div className="thinking-grid">
          <div>
            <h2>
              Marketing começa<br />
              <em>antes da campanha.</em>
            </h2>

            <p className="thinking-intro">
              Antes de pensar em anúncio, eu procuro entender:
            </p>
          </div>

          <div className="concept-cloud">
            {concepts.map((concept, index) => (
              <span
                key={concept}
                style={{ '--i': index } as React.CSSProperties}
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        <div className="thinking-copy">
          <p>
            Depois de entender o negócio, esses elementos orientam a estratégia.
          </p>

          <p>
            Porque gerar atenção é apenas o começo. O trabalho é construir o
            caminho entre a atenção e o resultado.
          </p>
        </div>
      </section>

      <section
        className="trusted-companies"
        aria-label="Empresas que confiam no meu trabalho"
      >
        <div className="trusted-inner">
          <div className="section-kicker">
            / EMPRESAS QUE CONFIAM NO MEU TRABALHO
          </div>

          <div className="trusted-window">
            <div className="trusted-track">
              {[...trustedLogos, ...trustedLogos].map(([name, src], index) => (
                <div
                  className="trusted-logo"
                  key={`${name}-${index}`}
                >
                  <img src={src} alt={name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="trabalho">
        <div className="section-head">
          <div className="section-kicker">/ 02 — CASES EM DESTAQUE</div>

          <h2>
            Cases de<br />
            <em>sucesso.</em>
          </h2>
        </div>

        <div className="case-list">
          {cases.map((item, index) => {
            const isOpen = openCase === item.name

            return (
              <div
                className={`case-item ${isOpen ? 'is-open' : ''}`}
                key={item.name}
              >
                <button
                  type="button"
                  className="case-row"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenCase(isOpen ? null : item.name)
                  }
                >
                  <span className="case-number">
                    0{index + 1}
                  </span>

                  <span className="case-content">
                    <b>{item.name}</b>
                    <small>{item.category}</small>

                    {item.result && (
                      <strong>{item.result}</strong>
                    )}
                  </span>

                  <span className="case-open">
                    {isOpen ? 'Fechar case −' : 'Ver case +'}
                  </span>
                </button>

                <div
                  className="case-expanded"
                  aria-hidden={!isOpen}
                >
                  <div className="case-expanded-inner">

                    <div className="case-detail-column">

                      {item.period && (
                        <div className="case-detail">
                          <b>Período</b>
                          <p>{item.period}</p>
                        </div>
                      )}

                      <div className="case-detail">
                        <b>
                          {item.name.includes('OBJETIVO')
                            ? 'Desafio'
                            : 'Contexto / desafio'}
                        </b>

                        <p>{item.context}</p>
                      </div>

                    </div>

                    <div className="case-detail-column">

                      <div className="case-detail">
                        <b>
                          {item.name.includes('OBJETIVO')
                            ? 'Estratégia'
                            : 'O que foi desenvolvido'}
                        </b>

                        <p>{item.work}</p>
                      </div>

                      {item.investment && (
                        <div className="case-detail">
                          <b>Investimento em mídia</b>
                          <p>{item.investment}</p>
                        </div>
                      )}

                      {!item.name.includes('OBJETIVO') &&
                        (item.result || item.results) && (
                          <div className="case-detail case-result">
                            <b>Resultados</b>
                            <p>{item.results || item.result}</p>
                          </div>
                        )}

                    </div>

                    {item.impact && (
                      <div className="case-detail case-impact">
                        <b>
                          {item.name.includes('OBJETIVO')
                            ? 'Resultados'
                            : 'Impacto'}
                        </b>

                        <p>{item.impact}</p>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-kicker">
          / 03 — PORTFÓLIO
        </div>

        <div className="portfolio-head">
          <h2>
            Uma seleção<br />
            <em>do que faço.</em>
          </h2>

          <p>
            Uma curadoria visual de campanhas, identidades, criativos e
            conteúdos que ainda vai crescer por aqui.
          </p>
        </div>

        <div className="portfolio-grid">

          <div className="portfolio-piece portfolio-piece-large">
            <span>IMAGEM / CAMPANHA</span>
            <b>Em breve</b>
          </div>

          <article className="portfolio-piece portfolio-piece-video">
            <div className="portfolio-video">
              <iframe
                src="https://player.vimeo.com/video/1231413240?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                title="Video Congresso"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="portfolio-video-caption">
              <span>VÍDEO / CONTEÚDO</span>
              <b>Congresso</b>
            </div>
          </article>

          <div className="portfolio-piece portfolio-piece-small">
            <span>IDENTIDADE VISUAL</span>
            <b>Em breve</b>
          </div>

        </div>
      </section>

      <section className="method section">
        <div className="section-kicker">
          / 04 — MÉTODO
        </div>

        <div className="method-content">
          <h2>
            Um caminho claro<br />
            <em>até o crescimento.</em>
          </h2>

          <div className="method-line">
            {method.map(([title, description], index) => (
              <div key={title}>
                <span>0{index + 1}</span>
                <b>{title}</b>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="section-kicker">
          / 04 — CONTATO
        </div>

        <div className="contact-content">
          <h2>
            Tem um desafio<br />
            de marketing?
          </h2>

          <p>
            Vamos transformar o problema em um caminho de crescimento.
          </p>

          <a
            className="contact-email"
            href="mailto:oi@gustavomoscardi.com"
          >
            Vamos conversar <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icones-GjjDF1REFWCxO89raB2wEKbkAtBsUW.png"
            alt="Identidade visual"
          />
        </a>

        <p>Marketing & Growth Strategist</p>

        <small>© 2025 Gustavo Moscardi</small>
      </footer>

    </main>
  )
}
