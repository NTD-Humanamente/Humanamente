import imageGame2 from "./assets/Image/cenario1history.png";
import videoHistory from "./assets/Video/videohistory1.mp4";
import imageGame3 from "./assets/Image/cenario2history.png";
import videoHistory2 from "./assets/Video/videohistory2.mp4";

const historyData = [{
  subtitle: "Operação em Equipe - Simples",
  title: "Vazamento e Alarme de H₂S",
  text: `Você acaba de iniciar seu turno na unidade de coque.
A operação parece estável, mas uma série de eventos pode comprometer a segurança da equipe e da planta.

O painel indica os primeiros sinais de anormalidade:

• Queda da vazão da B‑98508A.

• Aumento da temperatura no topo da fracionadora.

• Instantes depois, os detectores AI‑98553 e AI‑98555 sinalizam presença de H₂S na área.

A equipe está distribuída na unidade. O tempo é curto.
Suas decisões definirão a coordenação, a segurança e o resultado da operação. 

Você terá 2 minutos para cada decisão.`,
  image: imageGame2,
  video: videoHistory
},
{
  subtitle: "Operação em Equipe - Complexo",
  title: "Interrupção Inesperada do Descoque",
  text: `Você está em turno em uma unidade de FCC. Um ciclo de descoque está em andamento no reator R‑98501B. A operação seguia o procedimento, mas, no meio do processo, ocorre uma interrupção inesperada: parte do coque permanece no reator, em condição potencialmente instável.

Os instrumentos indicam variações de pressão e temperatura, e a equipe de campo relata ruídos e odores incomuns próximos ao sistema de descarga.

A qualquer momento, uma decisão precipitada ou a falta de coordenação pode resultar em sobrepressão, emissões não controladas ou risco à integridade da equipe.

Você terá 2 minutos para cada decisão.`,
  image: imageGame3,
  video: videoHistory2
},
]

export default historyData;