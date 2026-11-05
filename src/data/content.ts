import heroImage from '../assets/malvada-banda.webp';
import wideHeroImage from '../assets/malvada-ensaio-horizontal.webp';
import backstageImage from '../assets/malvada-bastidores.webp';
import bandLogo from '../assets/malvada-logo.webp';
import malvadaCover from '../assets/malvada-2025-capa.webp';
import firstAlbumCover from '../assets/a-noite-vai-ferver-2021-capa.webp';
import bruna_tsuruda from '../assets/bruna-tsuruda.webp';
import rafaela_reoli from '../assets/rafaela-reoli.webp';
import cyz_mendes from '../assets/cyz-mendes.webp';
import juliana_salgado from '../assets/juliana-salgado.webp';
export { heroImage, wideHeroImage, backstageImage, bandLogo };

export type MemberId = 'bruna-tsuruda' | 'rafaela-reoli' | 'cyz-mendes' | 'juliana-salgado';
export interface Member { id: MemberId; name: string; role: string; status: string; image: string; imageAlt: string; summary: string; bio: string; }
export interface Era { period: string; title: string; paragraphs: string[]; }
export interface Album { id: string; title: string; year: string; label: string; cover: string; lineup: string; credits: string; tracks: string[]; edition?: string; spotifyId: string; }
export const officialLinks = {
  instagram: 'https://www.instagram.com/malvadabanda',
  youtube: 'https://www.youtube.com/@MALVADABanda',
  spotify: 'https://open.spotify.com/intl-pt/artist/59HYfYu4sULVe4DL14kdsJ',
} as const;

export const history: Era[] = [
  {
    "period": "2020",
    "title": "O início virtual.",
    "paragraphs": [
      "No início da quarentena, em março de 2020, o produtor Thiago Claro reuniu um grupo de WhatsApp com musicistas da noite de São Paulo. A primeira formação consistia em: Angel Sberse (vocal), Bruna Tsuruda (guitarra), Marina (Ma) Langer (baixo) e Juliana Salgado (bateria).",
      "Como tudo estava fechado devido à pandemia, os primeiros ensaios, composições e planejamentos foram feitos de forma totalmente remota."
    ]
  },
  {
    "period": "2021 — 2023",
    "title": "A noite vai ferver.",
    "paragraphs": [
      "Em janeiro de 2021, a banda lançou seu single de estreia, “Mais Um Gole”, gerando impacto imediato na mídia pelo som influenciado pelo Hard Rock dos anos 80, mas cantado em português. Em agosto do mesmo ano, lançaram o elogiado disco “A Noite Vai Ferver” via Shinigami Records.",
      "Essa formação inicial rodou o Brasil com mais de 100 shows, alcançando marcas expressivas como tocar no Rock in Rio 2022 (Palco Rock District) e abrir para as lendas internacionais Extreme e Tom Morello no festival Best of Blues and Rock 2023."
    ]
  },
  {
    "period": "2023 — PRESENTE",
    "title": "Sem fronteiras.",
    "paragraphs": [
      "No final de 2023, a banda passou por mudanças drásticas: a vocalista Angel Sberse e a baixista Ma Langer deixaram o grupo. Para seus lugares, entraram a cantora Indira Castillo e a baixista Rafaela Reoli. Essa nova fase marcou a internacionalização da banda, que assinou com a gigante gravadora italiana Frontiers Music Srl.",
      "Em junho de 2025, lançaram o segundo álbum (homônimo, Malvada), mesclando músicas em inglês e português sob a produção de Giu Daga. Com esse disco, fizeram sua primeira turnê pela Europa (Alemanha, Holanda e França) abrindo para o lendário Michael Schenker no início de 2026 e tocaram no Palco Sunset do Rock in Rio 2026 dividindo o microfone com Day Limns.",
      "Após liderar a expansão internacional, Indira Castillo deixou a banda para focar em projetos pessoais de mentoria vocal. Cyz Mendes assumiu os vocais, abrindo uma nova fase na história da Malvada."
    ]
  }
];

export const members: Member[] = [
  {
    "id": "bruna-tsuruda",
    "name": "Bruna Tsuruda",
    "role": "Guitarra",
    "status": "",
    "image": bruna_tsuruda,
    "imageAlt": "Bruna Tsuruda, guitarrista da Malvada",
    "summary": "A identidade dos riffs. Atitude em cada acorde.",
    "bio": "Começou a tocar guitarra aos 14 anos de idade por influência direta de seu pai. Passou boa parte da trajetória como autodidata antes de buscar aulas com grandes nomes da guitarra brasileira. Antes do seu primeiro projeto autoral com a Malvada, ganhou muita experiência de palco na noite de São Paulo tocando nas bandas de cover de rock e blues Ladies First e Electric Magic. É a criadora dos riffs pesados e um dos rostos mais marcantes da banda, reconhecida nacionalmente por premiações especializadas de música e por possuir sua própria linha de guitarras signature pela marca Seizi."
  },
  {
    "id": "rafaela-reoli",
    "name": "Rafaela Reoli",
    "role": "Baixo",
    "status": "DESDE OUT / 2023",
    "image": rafaela_reoli,
    "imageAlt": "Rafaela Reoli, baixista da Malvada",
    "summary": "Graves densos. Energia de arena. Peso sem concessões.",
    "bio": "Descobriu o contrabaixo aos 12 anos de idade sob o incentivo de sua família. Apaixonada por vertentes clássicas e pelo som do Rock de Arena dos anos 70 e 80, foi uma das fundadoras da banda de classic rock paulistana Black Velvet em 2020. Sua entrada trouxe uma pegada de cozinha mais densa e agressiva, influenciada por nomes do Heavy tradicional e do Post-Punk, participando ativamente da gravação do álbum internacional de 2025."
  },
  {
    "id": "cyz-mendes",
    "name": "Cyz Mendes",
    "role": "Vocal",
    "status": "NOVA VOCALISTA",
    "image": cyz_mendes,
    "imageAlt": "Cyz Mendes, vocalista da nova formação da Malvada",
    "summary": "Vinte anos de estrada. Uma nova voz para o peso da Malvada.",
    "bio": "Cantora e atriz brasileira, Cyz Mendes (Cyntia Mendes) nasceu em Vilhena e foi criada em Ariquemes, Rondônia. Mudou-se para São Paulo há mais de uma década e construiu uma trajetória de 20 anos na música, com mais de mil shows. Ganhou projeção nacional como Maria B na ópera-rock “Doze Flores Amarelas” (2018), dos Titãs, com quem também colaborou na faixa “Um Mundo”, do álbum Microfonado. Em 2021, assumiu os vocais do Plutão Já Foi Planeta, gravando singles como “Acostuma”. Sua versão de “Changes”, do Black Sabbath, integrou a trilha da novela Um Lugar ao Sol. Com passagens pelo The Town, pelas duas temporadas de Mulheres que Brilham e pelo Máquina da Fama, também atuou como jurada do Canta Comigo. Agora, lidera os vocais da nova fase da Malvada."
  },
  {
    "id": "juliana-salgado",
    "name": "Juliana Salgado",
    "role": "Bateria",
    "status": "",
    "image": juliana_salgado,
    "imageAlt": "Juliana Salgado, baterista da Malvada",
    "summary": "Precisão técnica. Força rítmica. O pulso da Malvada.",
    "bio": "Natural de Belém do Pará, Juliana toca bateria há mais de uma década. Tem uma sólida bagagem de estudos, sendo graduada em Música pela Universidade Federal do Pará (UFPA). Em sua terra natal, tocou em várias bandas de Rock e Heavy Metal, mas também no circuito erudito, chegando a excursionar pelos Estados Unidos e Europa com a Orquestra de Violoncelistas da Amazônia (OVA). Mudou-se para São Paulo em 2020 e, poucos meses depois, integrou a Malvada. É a força rítmica e a precisão técnica que dão sustentação ao som pesado da banda."
  }
];

export const albums: Album[] = [
  {
    "id": "malvada-2025",
    "spotifyId": "739N3Id0REt99az8lA9VXF",
    "title": "Malvada",
    "year": "2025",
    "label": "FRONTIERS MUSIC SRL",
    "cover": malvadaCover,
    "lineup": "Indira Castillo (Vocal), Bruna Tsuruda (Guitarra), Juliana Salgado (Bateria), Rafaela Reoli (Baixo).",
    "credits": "Produzido por Giu Daga. Gravado no Adagas Studios, São Paulo – Brasil. Bateria gravada no Estúdio Orra Meu, São Paulo, Brasil por Giu Daga e Gustavo Barcellos. Engenheiro de gravação: Giu Daga. Engenheiro de mixagem: Giu Daga. Masterização no Adagas Studios por Giu Daga. Capa do álbum de Fernanda Victorello. Fotos da banda por Caike Scheffer. Layout do livreto por João Duarte.",
    "tracks": [
      "Down The Walls",
      "Yesterday (My End, My Beginning)",
      "Veneno",
      "Fear",
      "After",
      "Como Se Fosse Hoje",
      "Bulletproof",
      "So Sweet",
      "Aversão",
      "I'm Sorry",
      "Dead Like You"
    ],
    "edition": "Versão original"
  },
  {
    "id": "a-noite-vai-ferver-2021",
    "spotifyId": "6JPNyDhUmZvazyTBfj21Lq",
    "title": "A Noite Vai Ferver",
    "year": "2021",
    "label": "SHINIGAMI RECORDS",
    "cover": firstAlbumCover,
    "lineup": "Angel Sberse (Vocal / Violão / Percussão), Bruna Tsuruda (Guitarra), Ma Langer (Baixo), Juliana Salgado (Bateria).",
    "credits": "Produzido por Tiago Claro e Nobru Bueno. Gravado por Nobru Bueno no Studio Pub em Santo André-SP. Assistente de gravação: Rodolfo Penassi. Teclados: Diego Rocha. Fotos: Felipe Prado Varga. Layout capa e encarte: Joao Duarte.",
    "tracks": [
      "A Noite Vai Ferver",
      "Prioridades",
      "Quem Vai Saber?",
      "Pecado Capital",
      "Ao Mesmo Tempo",
      "O Que Te Faz Bem?",
      "Disso Que Eu Gosto",
      "Mais Um Gole",
      "Cada Escolha Uma Renúncia"
    ]
  }
];
