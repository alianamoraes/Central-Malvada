export const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'membros', label: 'Membros' },
  { id: 'discografia', label: 'Discografia' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'contato', label: 'Contato' },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/malvadabanda',
  youtube: 'https://www.youtube.com/@MALVADABanda',
  spotify:
    'https://open.spotify.com/intl-pt/artist/59HYfYu4sULVe4DL14kdsJ?si=0YgHIrP3TcaJ4nIT8RPnJQ',
};

export const BAND_IMAGE = '/assets/images/image copy 2.png';

export type Member = {
  name: string;
  role: string;
  image: string;
  history: string;
  importance: string;
};

export const MEMBERS: Member[] = [
  {
    name: 'Bruna Tsuruda',
    role: 'Guitarra',
    image: '/assets/images/image.png',
    history:
      'Começou a tocar guitarra aos 14 anos de idade por influência direta de seu pai. Passou boa parte da trajetória como autodidata antes de buscar aulas com grandes nomes da guitarra brasileira. Antes do seu primeiro projeto autoral com a Malvada, ganhou muita experiência de palco na noite de São Paulo tocando nas bandas de cover de rock e blues Ladies First e Electric Magic.',
    importance:
      'É a criadora dos riffs pesados e um dos rostos mais marcantes da banda, reconhecida nacionalmente por premiações especializadas de música e por possuir sua própria linha de guitarras signature pela marca Seizi.',
  },
  {
    name: 'Rafaela Reoli',
    role: 'Baixo',
    image: '/assets/images/image copy.png',
    history:
      'Descobriu o contrabaixo aos 12 anos de idade sob o incentivo de sua família. Apaixonada por vertentes clássicas e pelo som do Rock de Arena dos anos 70 e 80, foi uma das fundadoras da banda de classic rock paulistana Black Velvet em 2020.',
    importance:
      'Ingressou na Malvada em outubro de 2023 para substituir Ma Langer. Sua entrada trouxe uma pegada de cozinha mais densa e agressiva, influenciada por nomes do Heavy tradicional e do Post-Punk, participando ativamente da gravação do álbum internacional de 2025.',
  },
  {
    name: 'Indira Castillo',
    role: 'Vocal',
    image: '/assets/images/image copy 4.png',
    history:
      'Cantora paulistana com forte influência da Black Music, Soul, Jazz e Blues. Atua profissionalmente há mais de uma década e ganhou grande projeção na TV aberta ao alcançar a semifinal do reality show Canta Comigo da Record TV em 2022.',
    importance:
      'Assumiu o microfone principal da Malvada no final de 2023, trazendo uma identidade vocal cheia de drives expressivos. Liderou a era de expansão internacional e a turnê europeia da banda. Ela cumpre os últimos shows da agenda contratual e se despede do posto de vocalista do grupo.',
  },
  {
    name: 'Juliana Salgado',
    role: 'Bateria',
    image: '/assets/images/image copy 3.png',
    history:
      'Natural de Belém do Pará, Juliana toca bateria há mais de uma década. Tem uma sólida bagagem de estudos, sendo graduada em Música pela Universidade Federal do Pará (UFPA). Em sua terra natal, tocou em várias bandas de Rock e Heavy Metal, mas também no circuito erudito, chegando a excursionar pelos Estados Unidos e Europa com a Orquestra de Violoncelistas da Amazônia (OVA).',
    importance:
      'Mudou-se para São Paulo em 2020 e, poucos meses depois, integrou a Malvada. É a força rítmica e a precisão técnica que dão sustentação ao som pesado da banda.',
  },
];

export type Era = {
  period: string;
  title: string;
  body: string;
  highlights: string[];
};

export const ERAS: Era[] = [
  {
    period: 'O Início Virtual — 2020',
    title: 'A banda nasce à distância',
    body: 'No início da quarentena, em março de 2020, o produtor Thiago Claro reuniu um grupo de WhatsApp com musicistas da noite de São Paulo. A primeira formação consistia em: Angel Sberse (vocal), Bruna Tsuruda (guitarra), Marina (Ma) Langer (baixo) e Juliana Salgado (bateria). Como tudo estava fechado devido à pandemia, os primeiros ensaios, composições e planejamentos foram feitos de forma totalmente remota.',
    highlights: ['Formação criada em março de 2020', 'Ensaios e composições totalmente remotos'],
  },
  {
    period: 'A Era "A Noite Vai Ferver" — 2021–2023',
    title: 'Mais um gole, mais de cem palcos',
    body: 'Em janeiro de 2021, a banda lançou seu single de estreia, "Mais Um Gole", gerando impacto imediato na mídia pelo som influenciado pelo Hard Rock dos anos 80, mas cantado em português. Em agosto do mesmo ano, lançaram o elogiado disco "A Noite Vai Ferver" via Shinigami Records. Essa formação inicial rodou o Brasil com mais de 100 shows, alcançando marcas expressivas como tocar no Rock in Rio 2022 (Palco Rock District) e abrir para as lendas internacionais Extreme e Tom Morello no festival Best of Blues and Rock 2023.',
    highlights: ['Single "Mais Um Gole" — janeiro de 2021', 'Álbum "A Noite Vai Ferver" — Shinigami Records', 'Rock in Rio 2022 e Best of Blues and Rock 2023'],
  },
  {
    period: 'Reformulação e a Era Internacional — 2023–Presente',
    title: 'Uma nova fase além das fronteiras',
    body: 'No final de 2023, a banda passou por mudanças drásticas: a vocalista Angel Sberse e a baixista Ma Langer deixaram o grupo. Para seus lugares, entraram a cantora Indira Castillo e a baixista Rafaela Reoli. Essa nova fase marcou a internacionalização da banda, que assinou com a gigante gravadora italiana Frontiers Music Srl. Em junho de 2025, lançaram o segundo álbum (homônimo, Malvada), mesclando músicas em inglês e português sob a produção de Giu Daga. Com esse disco, fizeram sua primeira turnê pela Europa (Alemanha, Holanda e França) abrindo para o lendário Michael Schenker no início de 2026 e tocaram no Palco Sunset do Rock in Rio 2026 dividindo o microfone com Day Limns. Atualmente, o grupo se prepara para anunciar uma nova vocalista, já que Indira Castillo comunicou sua saída para focar em projetos pessoais de mentoria vocal.',
    highlights: ['Frontiers Music Srl', 'Eurotour com Michael Schenker — 2026', 'Rock in Rio 2026 — Palco Sunset'],
  },
];

export type Release = {
  title: string;
  year: string;
  cover: string;
  lineup: string;
  credits: { label: string; value: string }[];
};

export const RELEASES: Release[] = [
  {
    title: 'Malvada',
    year: '2025',
    cover: '/assets/images/image copy 5.png',
    lineup: 'Indira Castillo (Vocal), Bruna Tsuruda (Guitarra), Juliana Salgado (Bateria), Rafaela Reoli (Baixo)',
    credits: [
      { label: 'Produção', value: 'Giu Daga' },
      { label: 'Gravação', value: 'Adagas Studios, São Paulo — Brasil' },
      { label: 'Bateria', value: 'Estúdio Orra Meu, São Paulo, por Giu Daga e Gustavo Barcellos' },
      { label: 'Engenharia', value: 'Gravação e mixagem por Giu Daga' },
      { label: 'Masterização', value: 'Adagas Studios, por Giu Daga' },
      { label: 'Capa', value: 'Fernanda Victorello' },
      { label: 'Fotos', value: 'Caike Scheffer' },
      { label: 'Layout do livreto', value: 'João Duarte' },
    ],
  },
  {
    title: 'A Noite Vai Ferver',
    year: '2021',
    cover: '/assets/images/image copy 6.png',
    lineup: 'Angel Sberse (Vocal / Violão / Percussão), Bruna Tsuruda (Guitarra), Ma Langer (Baixo), Juliana Salgado (Bateria)',
    credits: [
      { label: 'Produção', value: 'Tiago Claro e Nobru Bueno' },
      { label: 'Gravação', value: 'Nobru Bueno, no Studio Pub em Santo André-SP' },
      { label: 'Assistente de gravação', value: 'Rodolfo Penassi' },
      { label: 'Teclados', value: 'Diego Rocha' },
      { label: 'Fotos', value: 'Felipe Prado Varga' },
      { label: 'Layout da capa e encarte', value: 'Joao Duarte' },
    ],
  },
];

export type Show = {
  date: string;
  city: string;
  event: string;
  status: 'confirmado' | 'em breve';
};

export const HISTORIC_SHOWS: Show[] = [
  { date: '2026', city: 'Alemanha · Holanda · França', event: 'Turnê Europeia com Michael Schenker', status: 'confirmado' },
  { date: '2026', city: 'Brasil', event: 'Bangers Open Air', status: 'confirmado' },
  { date: '2026', city: 'Rio de Janeiro, BR', event: 'Rock in Rio — Palco Sunset', status: 'confirmado' },
];

export const FAREWELL_SHOWS: Show[] = [
  { date: '23 out. 2026', city: 'Goiânia, GO', event: 'Sexta-feira · Show de despedida', status: 'confirmado' },
  { date: '24 out. 2026', city: 'Brasília, DF', event: 'Sábado · Show de despedida', status: 'confirmado' },
];
