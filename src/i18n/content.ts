import type { Album, Era, Member, MemberId } from '../data/content';

type MemberCopy = Pick<Member, 'role' | 'status' | 'imageAlt' | 'summary' | 'bio'>;
type EraCopy = Pick<Era, 'period' | 'title' | 'paragraphs'>;
type AlbumCopy = Pick<Album, 'lineup' | 'credits' | 'edition'>;
interface EditorialCopy { members: Record<MemberId, MemberCopy>; history: Record<string, EraCopy>; albums: Record<string, AlbumCopy>; }

export const editorial: Record<'en' | 'es', EditorialCopy> = {
  en: {
    members: {
      'bruna-tsuruda': {
        role: 'Guitar', status: '', imageAlt: 'Bruna Tsuruda, Malvada’s guitarist',
        summary: 'The identity behind the riffs. Attitude in every chord.',
        bio: 'She began playing guitar at the age of 14, directly inspired by her father. She spent much of her early journey teaching herself before taking lessons with leading Brazilian guitarists. Before her first original project with Malvada, she gained extensive stage experience on São Paulo’s live circuit with the rock and blues cover bands Ladies First and Electric Magic. She creates the band’s heavy riffs and is one of its most recognisable faces, with national recognition from specialist music awards and her own line of signature guitars by Seizi.',
      },
      'rafaela-reoli': {
        role: 'Bass', status: 'SINCE OCT / 2023', imageAlt: 'Rafaela Reoli, Malvada’s bassist',
        summary: 'Dense low end. Arena energy. Uncompromising weight.',
        bio: 'She discovered the bass guitar at 12 with encouragement from her family. Passionate about classic styles and the arena rock sound of the 1970s and 1980s, she was a founding member of São Paulo classic rock band Black Velvet in 2020. Her arrival brought a denser, more aggressive rhythm-section approach, influenced by traditional heavy metal and post-punk. She played an active part in recording the band’s international album in 2025.',
      },
      'cyz-mendes': {
        role: 'Vocals', status: 'NEW VOCALIST', imageAlt: 'Cyz Mendes, vocalist of Malvada’s new lineup',
        summary: 'Twenty years on stage. A new voice for Malvada’s heavy sound.',
        bio: 'Brazilian singer and actress Cyz Mendes (Cyntia Mendes) was born in Vilhena and raised in Ariquemes, Rondônia. She moved to São Paulo more than a decade ago and has built a 20-year career in music, with over a thousand shows. She gained national recognition as Maria B in Titãs’ rock opera “Doze Flores Amarelas” (2018), and also collaborated with the band on “Um Mundo”, from the album Microfonado. In 2021, she became the lead singer of Plutão Já Foi Planeta, recording singles including “Acostuma”. Her version of Black Sabbath’s “Changes” featured on the soundtrack of the TV drama Um Lugar ao Sol. She has appeared at The Town, on both seasons of Mulheres que Brilham and on Máquina da Fama, and served as a judge on Canta Comigo. She now leads the vocals in Malvada’s new chapter.',
      },
      'juliana-salgado': {
        role: 'Drums', status: '', imageAlt: 'Juliana Salgado, Malvada’s drummer',
        summary: 'Technical precision. Rhythmic power. Malvada’s pulse.',
        bio: 'Originally from Belém, Pará, Juliana has been playing drums for more than a decade. She has a solid musical education and holds a degree in Music from the Federal University of Pará (UFPA). In her home region, she played in rock and heavy metal bands as well as on the classical circuit, touring the United States and Europe with the Orquestra de Violoncelistas da Amazônia (OVA). She moved to São Paulo in 2020 and joined Malvada a few months later. Her rhythmic power and technical precision underpin the band’s heavy sound.',
      },
    },
    history: {
      '2020': {
        period: '2020', title: 'The virtual beginning.', paragraphs: [
          'At the beginning of lockdown in March 2020, producer Thiago Claro brought together a WhatsApp group of musicians from São Paulo’s live circuit. The first lineup consisted of Angel Sberse (vocals), Bruna Tsuruda (guitar), Marina (Ma) Langer (bass) and Juliana Salgado (drums).',
          'With everything closed because of the pandemic, the first rehearsals, songwriting sessions and planning took place entirely remotely.',
        ],
      },
      '2021 — 2023': {
        period: '2021 — 2023', title: 'A Noite Vai Ferver.', paragraphs: [
          'In January 2021, the band released their debut single, “Mais Um Gole”, making an immediate impression in the press with a sound influenced by 1980s hard rock, but sung in Portuguese. In August that year, they released the acclaimed album “A Noite Vai Ferver” through Shinigami Records.',
          'The original lineup toured Brazil with more than 100 shows, reaching major milestones including Rock in Rio 2022 (Rock District Stage) and opening for international legends Extreme and Tom Morello at Best of Blues and Rock 2023.',
        ],
      },
      '2023 — PRESENTE': {
        period: '2023 — PRESENT', title: 'Without borders.', paragraphs: [
          'At the end of 2023, the band underwent major changes: vocalist Angel Sberse and bassist Ma Langer left the group. Singer Indira Castillo and bassist Rafaela Reoli stepped in. This new chapter marked the band’s international expansion, including a deal with major Italian label Frontiers Music Srl.',
          'In June 2025, they released their second, self-titled album, Malvada, combining English and Portuguese songs under the production of Giu Daga. With this record, they made their first European tour through Germany, the Netherlands and France, opening for the legendary Michael Schenker in early 2026, and performed on Rock in Rio 2026’s Sunset Stage alongside Day Limns.',
          'After leading the international expansion, Indira Castillo left the band to focus on personal vocal mentoring projects. Cyz Mendes took over on vocals, opening a new chapter in Malvada’s history.',
        ],
      },
    },
    albums: {
      'malvada-2025': {
        edition: 'Original edition',
        lineup: 'Indira Castillo (Vocals), Bruna Tsuruda (Guitar), Juliana Salgado (Drums), Rafaela Reoli (Bass).',
        credits: 'Produced by Giu Daga. Recorded at Adagas Studios, São Paulo, Brazil. Drums recorded at Estúdio Orra Meu, São Paulo, Brazil, by Giu Daga and Gustavo Barcellos. Recording engineer: Giu Daga. Mixing engineer: Giu Daga. Mastered at Adagas Studios by Giu Daga. Album cover by Fernanda Victorello. Band photography by Caike Scheffer. Booklet layout by João Duarte.',
      },
      'a-noite-vai-ferver-2021': {
        lineup: 'Angel Sberse (Vocals / Acoustic guitar / Percussion), Bruna Tsuruda (Guitar), Ma Langer (Bass), Juliana Salgado (Drums).',
        credits: 'Produced by Tiago Claro and Nobru Bueno. Recorded by Nobru Bueno at Studio Pub in Santo André, São Paulo. Recording assistant: Rodolfo Penassi. Keyboards: Diego Rocha. Photography: Felipe Prado Varga. Cover and booklet layout: Joao Duarte.',
      },
    },
  },
  es: {
    members: {
      'bruna-tsuruda': {
        role: 'Guitarra', status: '', imageAlt: 'Bruna Tsuruda, guitarrista de Malvada',
        summary: 'La identidad de los riffs. Actitud en cada acorde.',
        bio: 'Comenzó a tocar la guitarra a los 14 años por influencia directa de su padre. Durante buena parte de su trayectoria fue autodidacta, antes de tomar clases con grandes nombres de la guitarra brasileña. Antes de su primer proyecto de música original con Malvada, adquirió una amplia experiencia sobre los escenarios de São Paulo con las bandas de versiones de rock y blues Ladies First y Electric Magic. Es la creadora de los riffs más potentes y uno de los rostros más reconocibles de la banda, con reconocimiento nacional en premios especializados de música y su propia línea de guitarras signature de la marca Seizi.',
      },
      'rafaela-reoli': {
        role: 'Bajo', status: 'DESDE OCT / 2023', imageAlt: 'Rafaela Reoli, bajista de Malvada',
        summary: 'Graves densos. Energía de estadio. Potencia sin concesiones.',
        bio: 'Descubrió el bajo a los 12 años con el apoyo de su familia. Apasionada por las vertientes clásicas y el sonido del rock de estadio de los años setenta y ochenta, fue una de las fundadoras de la banda de rock clásico de São Paulo Black Velvet en 2020. Su llegada aportó una base rítmica más densa y agresiva, influida por el heavy metal tradicional y el post-punk. Participó activamente en la grabación del álbum internacional de 2025.',
      },
      'cyz-mendes': {
        role: 'Voz', status: 'NUEVA VOCALISTA', imageAlt: 'Cyz Mendes, vocalista de la nueva formación de Malvada',
        summary: 'Veinte años sobre los escenarios. Una nueva voz para la potencia de Malvada.',
        bio: 'Cantante y actriz brasileña, Cyz Mendes (Cyntia Mendes) nació en Vilhena y creció en Ariquemes, Rondônia. Se trasladó a São Paulo hace más de una década y ha construido una trayectoria de 20 años en la música, con más de mil conciertos. Alcanzó proyección nacional como Maria B en la ópera rock “Doze Flores Amarelas” (2018), de Titãs, con quienes también colaboró en “Um Mundo”, del álbum Microfonado. En 2021, asumió la voz principal de Plutão Já Foi Planeta y grabó sencillos como “Acostuma”. Su versión de “Changes”, de Black Sabbath, formó parte de la banda sonora de la telenovela Um Lugar ao Sol. Ha actuado en The Town, en las dos temporadas de Mulheres que Brilham y en Máquina da Fama, y también fue jurado de Canta Comigo. Ahora lidera la voz de la nueva etapa de Malvada.',
      },
      'juliana-salgado': {
        role: 'Batería', status: '', imageAlt: 'Juliana Salgado, baterista de Malvada',
        summary: 'Precisión técnica. Fuerza rítmica. El pulso de Malvada.',
        bio: 'Originaria de Belém, Pará, Juliana lleva más de una década tocando la batería. Cuenta con una sólida formación y es graduada en Música por la Universidad Federal de Pará (UFPA). En su tierra natal tocó en bandas de rock y heavy metal, así como en el circuito de música clásica, y llegó a realizar giras por Estados Unidos y Europa con la Orquestra de Violoncelistas da Amazônia (OVA). Se trasladó a São Paulo en 2020 y, pocos meses después, se incorporó a Malvada. Su fuerza rítmica y precisión técnica sostienen el sonido contundente de la banda.',
      },
    },
    history: {
      '2020': {
        period: '2020', title: 'El comienzo virtual.', paragraphs: [
          'Al inicio de la cuarentena, en marzo de 2020, el productor Thiago Claro reunió en un grupo de WhatsApp a músicas del circuito de conciertos de São Paulo. La primera formación estaba integrada por Angel Sberse (voz), Bruna Tsuruda (guitarra), Marina (Ma) Langer (bajo) y Juliana Salgado (batería).',
          'Como todo estaba cerrado debido a la pandemia, los primeros ensayos, las composiciones y la planificación se realizaron de forma completamente remota.',
        ],
      },
      '2021 — 2023': {
        period: '2021 — 2023', title: 'A Noite Vai Ferver.', paragraphs: [
          'En enero de 2021, la banda publicó su primer sencillo, “Mais Um Gole”, que tuvo un impacto inmediato en los medios por su sonido influido por el hard rock de los años ochenta, pero cantado en portugués. En agosto de ese mismo año lanzaron el elogiado álbum “A Noite Vai Ferver” a través de Shinigami Records.',
          'La formación original recorrió Brasil con más de 100 conciertos y alcanzó hitos como actuar en Rock in Rio 2022 (escenario Rock District) y abrir los conciertos de las leyendas internacionales Extreme y Tom Morello en Best of Blues and Rock 2023.',
        ],
      },
      '2023 — PRESENTE': {
        period: '2023 — PRESENTE', title: 'Sin fronteras.', paragraphs: [
          'A finales de 2023, la banda atravesó cambios importantes: la vocalista Angel Sberse y la bajista Ma Langer dejaron el grupo. En su lugar entraron la cantante Indira Castillo y la bajista Rafaela Reoli. Esta nueva etapa marcó la internacionalización de la banda, que firmó con el gran sello italiano Frontiers Music Srl.',
          'En junio de 2025 publicaron su segundo álbum, el homónimo Malvada, que combina canciones en inglés y portugués bajo la producción de Giu Daga. Con este disco realizaron su primera gira europea por Alemania, Países Bajos y Francia, abriendo para el legendario Michael Schenker a principios de 2026, y actuaron en el escenario Sunset de Rock in Rio 2026 junto a Day Limns.',
          'Tras liderar la expansión internacional, Indira Castillo dejó la banda para centrarse en proyectos personales de mentoría vocal. Cyz Mendes asumió la voz principal, abriendo una nueva etapa en la historia de Malvada.',
        ],
      },
    },
    albums: {
      'malvada-2025': {
        edition: 'Versión original',
        lineup: 'Indira Castillo (Voz), Bruna Tsuruda (Guitarra), Juliana Salgado (Batería), Rafaela Reoli (Bajo).',
        credits: 'Producido por Giu Daga. Grabado en Adagas Studios, São Paulo, Brasil. Batería grabada en Estúdio Orra Meu, São Paulo, Brasil, por Giu Daga y Gustavo Barcellos. Ingeniero de grabación: Giu Daga. Ingeniero de mezcla: Giu Daga. Masterización en Adagas Studios por Giu Daga. Portada de Fernanda Victorello. Fotografías de la banda por Caike Scheffer. Diseño del libreto por João Duarte.',
      },
      'a-noite-vai-ferver-2021': {
        lineup: 'Angel Sberse (Voz / Guitarra acústica / Percusión), Bruna Tsuruda (Guitarra), Ma Langer (Bajo), Juliana Salgado (Batería).',
        credits: 'Producido por Tiago Claro y Nobru Bueno. Grabado por Nobru Bueno en Studio Pub, Santo André, São Paulo. Asistente de grabación: Rodolfo Penassi. Teclados: Diego Rocha. Fotografías: Felipe Prado Varga. Diseño de portada y libreto: Joao Duarte.',
      },
    },
  },
};
