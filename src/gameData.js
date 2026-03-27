import image1 from './assets/Image/Image1.png';
import image2 from './assets/Image/Image2.png';
import image3 from './assets/Image/Image3.png';


const gameData = {
  inicio: {
    texto: "O que a equipe faz agora?",
    image:image1,
    descricao:"Você e sua equipe estão no início do turno. A rotina estava tranquila quando os alarmes de temperatura e pressão começaram a tocar ao mesmo tempo. Ninguém ainda sabe exatamente o que está acontecendo — as leituras no painel estão mudando, o rádio começou a chamar e o Supervisor não está na sala.",
    opcoes: [
      {
        texto: "A gente precisa entender o que está acontecendo antes de mexer em qualquer coisa. Se agir errado, piora.",
        proximo: "agua"
      },
      {
        texto: "A gente divide: alguém fica no painel ajustando o que der, outro vai a campo ver o que está acontecendo e alguém tenta falar com o Supervisor",
        proximo: "agua"
      },
      {
        texto: "O Supervisor precisa saber disso agora. A gente não toma decisão grande sem ele — é responsabilidade dele",
        proximo: "agua"
      }
    ]
  },
  agua: {
    texto: "Como a equipe decide o que priorizar?",
    image:image2,
    descricao:"Agora a situação ficou mais complexa. O painel mostra pressão alta nos reatores, alguém de campo reportou um problema numa válvula e a equipe de segurança está pedindo para saber se precisa acionar protocolo de emergência. Todo mundo está olhando para o Supervisor esperando uma direção — mas as informações ainda estão incompletas e o tempo está curto.",
    opcoes: [
      {
        texto: "Resolve um problema de cada vez, na ordem certa. Tentar fazer tudo junto vai gerar confusão e erro",
        proximo: "extintor"
      },
      {
        texto: "Cada um cuida de uma frente ao mesmo tempo, mesmo que as informações ainda não estejam completas. A gente vai ajustando no caminho.",
        proximo: "extintor"
      },
        {
        texto: "A gente precisa ser honesto: se não tem informação suficiente, a decisão mais segura é parar tudo e esperar ter clareza.",
        proximo: "extintor"
      }
    ]
  },
  extintor: {
    texto: "Como a equipe lida com esse momento?",
    image:image3,
    descricao:"Agora que a crise passou, a tensão aparece de outro jeito. Dois membros da equipe discordam sobre o que causou o problema e cada um defende sua versão. Um terceiro está claramente esgotado e em silêncio. O turno ainda não acabou e há tarefas de monitoramento a fazer.",
    opcoes: [
         {
        texto: "Isso fica para o debriefing. Agora não é hora de discutir — tem trabalho a fazer e a equipe precisa manter o foco.",
        proximo: "fim"
      },
      {
        texto: "Dá para fazer os dois ao mesmo tempo. A gente reconhece que foi pesado, cada um fala como está, e segue com o monitoramento junto.",
        proximo: "fim"
      },
        {
        texto: "Quem está exausto precisa ser substituído agora. Continuar trabalhando nesse estado é risco para todos.",
        proximo: "fim"
      }
    ]
  },
  fim: {
    texto: "Boa! A unidade está establizada!",
    image:image3,
    descricao:"Ao final das três etapas, a unidade está estabilizada, os parâmetros voltaram à faixa operacional normal e nenhuma parada não programada ocorreu. O que difere entre os grupos não é o resultado final, mas a qualidade do processo — como a equipe se comunicou, decidiu e se apoiou ao longo da crise",
    opcoes: []
  }
};

export default gameData;