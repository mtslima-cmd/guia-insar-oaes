const gruposDeTermos = [
  {
    frase: "A análise indica comportamento cinemático compatível com cenário",
    termos: [
      {
        titulo: "De estabilidade",
        descricao:
          "Usar quando as séries não apresentam tendência progressiva, aceleração ou mudança brusca de comportamento. Os deslocamentos permanecem compatíveis com a baseline e sem relevância cinemática aparente.",
      },
      {
        titulo: "De tendência deformacional",
        descricao:
          "Usar quando há deslocamento progressivo ao longo do tempo, mesmo sem aceleração clara. Indica movimento acumulado persistente, que deve ser avaliado junto com magnitude, coerência espacial e repetição temporal.",
      },
      {
        titulo: "De aceleração localizada",
        descricao:
          "Usar quando há aumento recente da velocidade de deslocamento em ponto ou região específica da OAE. Ganha peso quando o padrão se repete em pontos próximos e apresenta plausibilidade física.",
      },
      {
        titulo: "De variação abrupta de regime",
        descricao:
          "Usar quando ocorre salto ou mudança brusca de patamar na série temporal, tipo step change. Só deve ser tratado como relevante quando houver repetição espacial e permanência do novo comportamento.",
      },
    ],
  },
  {
    frase: "Com valores de velocidade e aceleração",
    termos: [
      {
        titulo: "Compatíveis com a baseline",
        descricao:
          "Usar quando velocidade e aceleração estão dentro do padrão histórico da OAE. Indica ausência de alteração relevante no regime cinemático monitorado.",
      },
      {
        titulo: "Pontualmente superiores à baseline",
        descricao:
          "Usar quando apenas alguns pontos ou períodos superam o padrão histórico. É uma condição intermediária, que exige cautela antes de classificar como anomalia.",
      },
      {
        titulo: "Superiores à baseline",
        descricao:
          "Usar quando velocidade e/ou aceleração estão claramente acima do padrão histórico, de forma persistente ou recorrente. Indica alteração relevante do comportamento cinemático.",
      },
    ],
  },
  {
    frase: "Em relação à anomalia cinemática",
    termos: [
      {
        titulo: "Ausência de evidências",
        descricao:
          "Usar quando não há sinal interferométrico relevante de anomalia, considerando magnitude, persistência temporal e coerência espacial. Não significa ausência de patologias, apenas ausência de indício cinemático relevante.",
      },
      {
        titulo: "Indícios",
        descricao:
          "Usar quando há sinais de atenção, mas ainda sem robustez plena. É adequado para casos suspeitos, com tendência, aceleração localizada ou valores pontualmente superiores.",
      },
      {
        titulo: "Evidências consistentes",
        descricao:
          "Usar quando há conjunto forte de sinais: magnitude relevante, persistência temporal, coerência espacial e plausibilidade física.",
      },
    ],
  },
  {
    frase: "A distribuição espacial dos pontos é",
    termos: [
      {
        titulo: "Coerente",
        descricao:
          "Usar quando os pontos estão bem posicionados sobre a OAE ou em regiões representativas, permitindo leitura espacial confiável. Favorece conclusões mais robustas.",
      },
      {
        titulo: "Parcialmente coerente",
        descricao:
          "Usar quando há pontos úteis, mas a cobertura da estrutura é incompleta ou irregular. Permite análise, mas com ressalvas.",
      },
      {
        titulo: "Dispersa",
        descricao:
          "Usar quando os pontos estão mal distribuídos, pouco aderentes à estrutura ou muito influenciados pelo entorno. Reduz a robustez da interpretação.",
      },
    ],
  },
  {
    frase: "Quanto à consistência entre os eixos longitudinal e transversal",
    termos: [
      {
        titulo: "Presença de consistência entre eixos",
        descricao:
          "Usar quando os pontos longitudinais e transversais apresentam comportamento compatível. Aumenta a confiança na interpretação cinemática.",
      },
      {
        titulo: "Presença parcial de consistência",
        descricao:
          "Usar quando há coerência em parte dos pontos ou em apenas um eixo. Indica leitura aproveitável, mas ainda com incerteza.",
      },
      {
        titulo: "Ausência de consistência entre eixos",
        descricao:
          "Usar quando os eixos apresentam comportamentos contraditórios ou sem padrão claro. Normalmente puxa a análise para suspeita fraca ou inconclusiva.",
      },
    ],
  },
  {
    frase: "No domínio temporal, as séries históricas indicam",
    termos: [
      {
        titulo: "Estabilidade cinemática",
        descricao:
          "Usar quando as séries temporais permanecem sem tendência progressiva, aceleração ou mudança de patamar. Representa estabilidade do regime de deslocamentos monitorado.",
      },
      {
        titulo: "Comportamento cíclico ou sazonal",
        descricao:
          "Usar quando há oscilações reversíveis, com picos e vales recorrentes. Geralmente pode estar associado a temperatura, umidade, nível d’água ou variações ambientais.",
      },
      {
        titulo: "Progressão homogênea do regime deformacional",
        descricao:
          "Usar quando os deslocamentos acumulam gradualmente ao longo do tempo, sem salto brusco. Indica tendência deformacional persistente.",
      },
      {
        titulo: "Inflexão de tendência",
        descricao:
          "Usar quando a curva muda de inclinação, indicando alteração no regime de velocidade. Pode representar início de aceleração, estabilização ou mudança comportamental.",
      },
      {
        titulo: "Step change",
        descricao:
          "Usar quando há mudança abrupta de patamar na série temporal. Se for isolado, tratar com cautela; se for replicado em vários pontos, ganha relevância.",
      },
    ],
  },
  {
    frase: "O comportamento cinemático da estrutura pode ser classificado como",
    termos: [
      {
        titulo: "Estável",
        descricao:
          "Usar quando não há evidência cinemática relevante e os dados são compatíveis com a baseline. Recomenda acompanhamento normal.",
      },
      {
        titulo: "Suspeito",
        descricao:
          "Usar quando há indícios de comportamento atípico, mas sem robustez suficiente para classificar como anômalo. Recomenda acompanhamento avançado ou validação complementar.",
      },
      {
        titulo: "Anômalo",
        descricao:
          "Usar quando há evidências consistentes de comportamento cinemático relevante.",
      },
      {
        titulo: "Inconclusivo",
        descricao:
          "Usar quando há dispersão espacial dos pontos, baixa representatividade dos pontos monitorados, ausência de consistência entre eixos, comportamento temporal não persistente ou variações pontuais sem repetição espacial.",
      },
    ],
  },
  {
    frase: "Recomendação técnica",
    termos: [
      {
        titulo: "Acompanhamento normal",
        descricao:
          "Usar para estruturas estáveis ou sem indícios relevantes. Mantém-se o monitoramento regular, sem ação específica imediata.",
      },
      {
        titulo: "Acompanhamento avançado",
        descricao:
          "Usar para estruturas suspeitas ou inconclusivas que merecem observação mais próxima.",
      },
      {
        titulo: "Inspeção intermediária",
        descricao:
          "Usar quando há suspeita localizada que precisa ser verificada em campo, em região específica da OAE. É adequada para confirmar ou descartar anomalia suspeitada.",
      },
      {
        titulo: "Inspeção especial",
        descricao:
          "Usar quando o comportamento anômalo é consistente ou potencialmente relevante para segurança, funcionalidade ou durabilidade. Exige investigação mais criteriosa da estrutura.",
      },
      {
        titulo: "Análise complementar com instrumentação",
        descricao:
          "Usar quando for necessário confirmar magnitude, direção e evolução do deslocamento com medições em campo.",
      },
    ],
  },
];

const termGroups = document.querySelector("#termGroups");
const termSearch = document.querySelector("#termSearch");

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtrarGrupos(busca) {
  const buscaNormalizada = normalizarTexto(busca);

  if (!buscaNormalizada) {
    return gruposDeTermos;
  }

  return gruposDeTermos
    .map((grupo) => {
      const grupoCombina = normalizarTexto(grupo.frase).includes(buscaNormalizada);

      const termosFiltrados = grupo.termos.filter((termo) => {
        return (
          normalizarTexto(termo.titulo).includes(buscaNormalizada) ||
          normalizarTexto(termo.descricao).includes(buscaNormalizada)
        );
      });

      if (grupoCombina) {
        return grupo;
      }

      if (termosFiltrados.length > 0) {
        return {
          ...grupo,
          termos: termosFiltrados,
        };
      }

      return null;
    })
    .filter(Boolean);
}

function renderizarGrupos(grupos) {
  termGroups.innerHTML = "";

  if (grupos.length === 0) {
    termGroups.innerHTML = `
      <article class="term-empty reveal">
        <h3>Nenhum termo encontrado</h3>
        <p>Tente buscar por outra palavra, como baseline, estabilidade, inconclusivo ou step change.</p>
      </article>
    `;
    return;
  }

  grupos.forEach((grupo, index) => {
    const article = document.createElement("article");
    article.className = "term-group reveal";

    if (index === 0) {
      article.classList.add("is-open");
    }

    const termosHtml = grupo.termos
      .map((termo) => {
        return `
          <div class="term-option">
            <h3>${termo.titulo}</h3>
            <p>${termo.descricao}</p>
          </div>
        `;
      })
      .join("");

    article.innerHTML = `
      <button class="term-group-header" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
        <span class="term-group-title">
          <strong>${grupo.frase}</strong>
        </span>
        <span class="term-group-toggle">${index === 0 ? "−" : "+"}</span>
      </button>

      <div class="term-options">
        ${termosHtml}
      </div>
    `;

    termGroups.appendChild(article);
  });
}

termGroups.addEventListener("click", (event) => {
  const header = event.target.closest(".term-group-header");

  if (!header) {
    return;
  }

  const group = header.closest(".term-group");
  const toggle = group.querySelector(".term-group-toggle");
  const isOpen = group.classList.toggle("is-open");

  toggle.textContent = isOpen ? "−" : "+";
  header.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

termSearch.addEventListener("input", () => {
  const gruposFiltrados = filtrarGrupos(termSearch.value);
  renderizarGrupos(gruposFiltrados);

  if (termSearch.value.trim()) {
    document.querySelectorAll(".term-group").forEach((group) => {
      group.classList.add("is-open");
      group.querySelector(".term-group-toggle").textContent = "−";
      group.querySelector(".term-group-header").setAttribute("aria-expanded", "true");
    });
  }
});

renderizarGrupos(gruposDeTermos);