import imageGame from "./assets/Image/cenariogame1.png";
import imageGame2 from "./assets/Image/cenariogame2.png";
import imageGame3 from "./assets/Image/cenariogame3.png";

const gameData = [
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame,
    descricao:"O alarme de H₂S acabou de tocar. Os sensores AI‑98553 e AI‑98555 detectam H₂S próximo à B‑98508A/B. O painel registra queda de vazão e a temperatura no topo aumenta. A equipe busca orientação pelo rádio.",
    opcoes: [
      {
        texto: " Acionar imediatamente o protocolo de gás tóxico, comunicar SMS e interditar a área."
      },
      {
        texto: " Ir pessoalmente verificar a área antes de escalar o evento."
      },
      {
        texto: "Aguardar nova leitura dos sensores antes de tomar ação."
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame2,
    descricao:"A vazão cai para 0. Instabilidade no topo. A B‑98508A não mantém fluxo. Temperatura do topo oscila. A equipe está no rádio aguardando ações coordenadas.",
    opcoes: [
      {
        texto: "Reduzir a carga e comandar isolamento imediato da área com apoio do painel."
      },
      {
        texto: "Solicitar inspeção visual urgente ao operador de campo, mesmo com risco."
      },
      {
        texto: "Tentar estabilizar variáveis antes de envolver equipes externas."
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame3,
    descricao:"A brigada chegou, mas a válvula de isolamento está emperrada.",
    opcoes: [
      {
        texto: "Coordenar com a Painelista para fechamento remoto e reforçar isolamento."
      },
      {
        texto: " Solicitar ao Técnico de Segurança que revise dutos vizinhos antes de qualquer ação."
      },
      {
        texto: "Forçar o fechamento manual sozinho."
      }
    ]
  },
]

export default gameData;
