import imageGame from "./assets/Image/reuniao.png";
import imageGame2 from "./assets/Image/reuniao2.png";


const gameData = {
  cenario: {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame,
    descricao:"A brigada de emergência chegou, mas a válvula de isolamento está emperrada. O Painelista (Ana) sugere fechar a linha B remotamente, enquanto você precisa decidir o suporte em field.",
    opcoes: [
      {
        texto: "Coordenar com a Ana o fechamento remoto e isolar a área manualmente."
      },
      {
        texto: "Solicitar que o Técnico de Segurança verifique a integridade dos dutos vizinhos."
      },
      {
        texto: "Assumir a válvula sozinho sem aguardar o reporte da sala de controle."
      }
    ]
  },
  cenario2: {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame2,
    descricao:"A brigada de emergência chegou, mas a válvula de isolamento está emperrada. O Painelista (Ana) sugere fechar a linha B remotamente, enquanto você precisa decidir o suporte em field.",
    opcoes: [
      {
        texto: "Coordenar com a Ana o fechamento remoto e isolar a área manualmente."
      },
      {
        texto: "Solicitar que o Técnico de Segurança verifique a integridade dos dutos vizinhos."
      },
      {
        texto: "Assumir a válvula sozinho sem aguardar o reporte da sala de controle."
      }
    ]
  },
}

export default gameData;
