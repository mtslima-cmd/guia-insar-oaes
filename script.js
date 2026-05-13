const termos = [
  {
    categoria: "Cenário cinemático",
    titulo: "De estabilidade",
    descricao:
      "Usar quando as séries não apresentam tendência progressiva, aceleração ou mudança brusca de comportamento. Os deslocamentos permanecem compatíveis com a baseline.",
  },
  {
    categoria: "Cenário cinemático",
    titulo: "De tendência deformacional",
    descricao:
      "Usar quando há deslocamento progressivo ao longo do tempo, mesmo sem aceleração clara. Deve ser avaliado junto com magnitude, coerência espacial e repetição temporal.",
  },
  {
    categoria: "Cenário cinemático",
    titulo: "De aceleração localizada",
    descricao:
      "Usar quando há aumento recente da velocidade de deslocamento em ponto ou região específica da OAE. Ganha peso quando o padrão se repete em pontos próximos.",
  },
  {
    categoria: "Cenário cinemático",
    titulo: "De variação abrupta de regime",
    descricao:
      "Usar quando ocorre salto ou mudança brusca de patamar na série temporal, tipo step change. Só deve ser tratado como relevante quando houver repetição espacial.",
  },
  {
    categoria: "Baseline",
    titulo: "Compatíveis com a baseline",
    descricao:
      "Usar quando velocidade e aceleração estão dentro do padrão histórico da OAE, indicando ausência de alteração relevante no regime cinemático monitorado.",
  },
  {
    categoria: "Baseline",
    titulo: "Pontualmente superiores à baseline",
    descricao:
      "Usar quando apenas alguns pontos ou períodos superam o padrão histórico. É uma condição intermediária e exige cautela antes de classificar como anomalia.",
  },
  {
    categoria: "Baseline",
    titulo: "Superiores à baseline",
    descricao:
      "Usar quando velocidade e/ou aceleração estão claramente acima do padrão histórico, de forma persistente ou recorrente.",
  },
  {
    categoria: "Grau de evidência",
    titulo: "Ausência de evidências",
    descricao:
      "Usar quando não há sinal interferométrico relevante de anomalia, considerando magnitude, persistência temporal e coerência espacial.",
  },
  {
    categoria: "Grau de evidência",
    titulo: "Indícios",
    descricao:
      "Usar quando há sinais de atenção, mas ainda sem robustez plena. É adequado para casos suspeitos ou com valores pontualmente superiores.",
  },
  {
    categoria: "Grau de evidência",
    titulo: "Evidências consistentes",
    descricao:
      "Usar quando há conjunto forte de sinais: magnitude relevante, persistência temporal, coerência espacial e plausibilidade física.",
  },
  {
    categoria: "Comportamento temporal",
    titulo: "Estabilidade cinemática",
    descricao:
      "Usar quando as séries temporais permanecem sem tendência progressiva, aceleração ou mudança de patamar.",
  },
  {
    categoria: "Comportamento temporal",
    titulo: "Comportamento cíclico ou sazonal",
    descricao:
      "Usar quando há oscilações reversíveis, com picos e vales recorrentes. Pode estar associado a temperatura, umidade ou variações ambientais.",
  },
  {
    categoria: "Comportamento temporal",
    titulo: "Progressão homogênea",
    descricao:
      "Usar quando os deslocamentos acumulam gradualmente ao longo do tempo, sem salto brusco.",
  },
  {
    categoria: "Comportamento temporal",
    titulo: "Inflexão de tendência",
    descricao:
      "Usar quando a curva muda de inclinação, indicando alteração no regime de velocidade.",
  },
  {
    categoria: "Comportamento temporal",
    titulo: "Step change",
    descricao:
      "Usar quando há mudança abrupta de patamar na série temporal. Se for isolado, tratar com cautela; se for replicado, ganha relevância.",
  },
  {
    categoria: "Classificação final",
    titulo: "Estável",
    descricao:
      "Usar quando não há evidência cinemática relevante e os dados são compatíveis com a baseline. Recomenda acompanhamento normal.",
  },
  {
    categoria: "Classificação final",
    titulo: "Suspeito",
    descricao:
      "Usar quando há indícios de comportamento atípico, mas sem robustez suficiente para classificar como anômalo.",
  },
  {
    categoria: "Classificação final",
    titulo: "Anômalo",
    descricao:
      "Usar quando há evidências consistentes de comportamento cinemático relevante.",
  },
  {
    categoria: "Classificação final",
    titulo: "Inconclusivo",
    descricao:
      "Usar quando há dispersão espacial dos pontos, baixa representatividade, ausência de consistência entre eixos ou comportamento temporal não persistente.",
  },
];

const termsGrid = document.querySelector("#termsGrid");
const termSearch = document.querySelector("#termSearch");

function renderTerms(listaDeTermos) {
  termsGrid.innerHTML = "";

  if (listaDeTermos.length === 0) {
    termsGrid.innerHTML = `
      <article class="term-card">
        <h3>Nenhum termo encontrado</h3>
        <p>Tente buscar por outra palavra, como baseline, estabilidade ou inconclusivo.</p>
      </article>
    `;
    return;
  }

  listaDeTermos.forEach((termo) => {
    const card = document.createElement("article");
    card.className = "term-card";

    card.innerHTML = `
      <span class="term-category">${termo.categoria}</span>
      <h3>${termo.titulo}</h3>
      <p>${termo.descricao}</p>
    `;

    termsGrid.appendChild(card);
  });
}

termSearch.addEventListener("input", () => {
  const busca = termSearch.value.toLowerCase().trim();

  const termosFiltrados = termos.filter((termo) => {
    return (
      termo.titulo.toLowerCase().includes(busca) ||
      termo.categoria.toLowerCase().includes(busca) ||
      termo.descricao.toLowerCase().includes(busca)
    );
  });

  renderTerms(termosFiltrados);
});

renderTerms(termos);