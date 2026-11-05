# Central Malvada

Site do fã-clube da banda brasileira de hard/heavy rock Malvada. Interface editorial em preto e azul, com início fotográfico, formação atual, história, discografia, agenda e contato.

> **Somos um fã-clube feito por fãs.** Não representamos a banda, sua assessoria, produtora ou equipe de agenciamento. Não intermediamos shows, cachês, contratos, ingressos ou parcerias da Malvada.

## Desenvolvimento

Aliana Moraes e Bruna Alves.

## Tecnologias

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Lucide React
- CSS específico para a identidade visual

## Executar localmente

Recomendado: Node.js 22 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Verificar e compilar

```sh
npm run typecheck
npm run build
npm run preview
```

O comando `build` gera a pasta `dist/`. Publique **o conteúdo dessa pasta** em uma hospedagem estática com HTTPS. O servidor de desenvolvimento não deve ser usado em produção.

`node_modules/` e `dist/` são geradas localmente e não devem ser enviadas ao repositório. O `package-lock.json` deve ser mantido para instalações reproduzíveis.

## Estrutura

```text
public/
  licenses/           Licenças das fontes
src/
  assets/             Fotografias e fontes locais
  components/         Cabeçalho, rodapé, modal de biografia e player de álbum
  data/content.ts     Dados editoriais, integrantes, álbuns e links oficiais
  i18n/               Traduções PT/EN/ES, contexto e preferência de idioma
  pages/              Início, banda, integrantes, discografia, agenda e contato
  styles/             Identidade visual e responsividade
  App.tsx             Estrutura da aplicação
  main.tsx            Entrada do React
  routing.ts          Navegação por fragmento
tests/
  smoke.py            Regressão geral de navegador
  i18n_smoke.py       Idiomas, persistência e responsividade em três versões
```

## Navegação

| Rota | Conteúdo |
| --- | --- |
| `#/inicio` | Apresentação resumida, formação em destaque e álbum mais recente |
| `#/banda` | Informações gerais, Instagram oficial, formação e história |
| `#/integrantes` | Retratos e biografias |
| `#/discografia` | Álbuns, listas de faixas, formações e fichas técnicas |
| `#/agenda` | Marcos e arquivo da agenda |
| `#/contato` | Contato exclusivo com o fã-clube |

O roteamento por fragmento permite hospedagem estática sem regras especiais de redirecionamento. A navegação atualiza o título, a seleção do menu e o foco. Voltar e avançar do navegador são suportados. A aplicação não utiliza renderização no servidor.

## Idiomas

O cabeçalho oferece **Português / English / Español** em todas as páginas, inclusive no celular, sem abrir o menu. O idioma inicial é português. A escolha é lembrada no navegador em `localStorage` pela chave `central-malvada.language`; nenhum dado do formulário é salvo junto dela. Com armazenamento bloqueado, a tradução continua funcionando durante a sessão, mas a preferência pode não sobreviver ao recarregamento.

As traduções são locais, sem API, rastreador ou serviço automático de tradução. Incluem navegação, páginas, biografias completas, história, créditos, contato, validação, descrições acessíveis e títulos do documento. O atributo `lang` acompanha a seleção. Nomes de pessoas, da banda, de álbuns e de músicas permanecem no original; os mesmos 20 títulos e a ordem das faixas são preservados. As rotas também não mudam. Trocar o idioma não apaga campos ou rascunhos, não remonta o player e não reinicia a navegação.

Para manter o conteúdo:

- `src/data/content.ts`: conteúdo editorial original em português, fotos, identificadores, links e faixas.
- `src/i18n/ui.ts`: pares inglês/espanhol indexados pela frase original em português. Ao alterar uma frase na interface, atualize sua chave e as duas traduções.
- `src/i18n/content.ts`: biografias, funções, histórico e créditos em inglês/espanhol, associados aos identificadores das integrantes/álbuns e aos períodos originais do histórico.
- `src/i18n/I18nProvider.tsx`: preferência, atualização do idioma do documento e hooks `useI18n()` / `useContent()`.
- `src/components/LanguageSwitcher.tsx` e `src/styles/languages.css`: seletor acessível e ajustes para os textos mais longos.

A interface **interna** dos players, os títulos das músicas e os sites oficiais externos são fornecidos pelos próprios serviços; sua língua pode depender da conta, do navegador ou das regras desses serviços. O site traduz seus próprios controles, descrições e avisos, sem alterar o áudio ou as URLs dos players.

## Conteúdo e fotografias

Os dados estão em `src/data/content.ts`. Cada integrante possui um identificador estável, associado explicitamente ao seu retrato:

| Identificador | Integrante | Função |
| --- | --- | --- |
| `bruna-tsuruda` | Bruna Tsuruda | Guitarra |
| `rafaela-reoli` | Rafaela Reoli | Baixo |
| `cyz-mendes` | Cyz Mendes | Vocal |
| `juliana-salgado` | Juliana Salgado | Bateria |

Não associe fotografias pela posição em uma lista. Ao atualizar imagens, confira a identidade e o texto alternativo. Cyz Mendes (Cyntia Mendes) é a vocalista atual. Indira Castillo permanece no histórico e nos créditos do álbum de 2025.

Textos e fotografias foram fornecidos à Central. Verifique fatos e direitos de uso antes da publicação. As licenças em `public/licenses/` são das fontes, não concedem licença sobre as fotografias, a marca ou o conteúdo editorial.

As listas de faixas são mantidas em `tracks` nos dados de cada álbum: 9 faixas em **A Noite Vai Ferver (2021)** e 11 na versão original de **Malvada (2025)**, na ordem fornecida pela Central. A contagem exibida é calculada a partir da lista. As faixas não incluem durações ou links individuais. A aba Faixas é uma lista de consulta; o áudio fica nos controles oficiais da aba Ouvir.

## Canais oficiais da banda

- [Instagram: @malvadabanda](https://www.instagram.com/malvadabanda)
- [YouTube](https://www.youtube.com/@MALVADABanda)
- [Spotify](https://open.spotify.com/intl-pt/artist/59HYfYu4sULVe4DL14kdsJ)

Esses são canais da banda, não perfis do fã-clube.

As novas fotografias coletivas estão em `malvada-ensaio-horizontal.webp` (abertura em telas amplas) e `malvada-bastidores.webp` (bloco de apresentação na home). A abertura móvel mantém o recorte vertical adequado. O novo logo fornecido, `malvada-logo.webp`, aparece somente no espaço dedicado à banda: a identidade da Central e os avisos de fã-clube permanecem separados. O recebimento do arquivo não transfere os direitos da marca.

## Estado das integrações

- **Contato:** valida os campos e prepara um rascunho copiável. Não transmite nem armazena os dados do formulário; apenas a preferência de idioma do site é salva localmente. O envio real depende de uma integração com serviço ou backend, destinatário confirmado, proteção antispam e política de privacidade. Nunca coloque credenciais privadas no código cliente.
- **Spotify:** dois players oficiais incorporados, usando os IDs de álbum fornecidos pela Central. Cada álbum tem abas acessíveis **Ouvir** (embed real) e **Faixas** (lista local), além de formação e ficha técnica expansíveis. A reprodução depende das regras, região, conta e disponibilidade do Spotify; o site não hospeda nem simula áudio. Há um link direto para cada álbum caso o embed não carregue.
- **Capas:** obtidas pelo endpoint público oEmbed do Spotify para os álbuns fornecidos e otimizadas localmente. IDs: `6JPNyDhUmZvazyTBfj21Lq` (2021) e `739N3Id0REt99az8lA9VXF` (2025).
- **Agenda:** as datas de outubro de 2026 estão arquivadas como registros da formação anterior, não como próximos shows.

## Acessibilidade

Link para pular ao conteúdo, foco visível, formulário rotulado, menu móvel com estado expandido e biografias em diálogo nativo. O diálogo fecha com Escape e restaura o foco. A interface respeita `prefers-reduced-motion`. Fontes, fotografias e capas são locais. O código próprio não adiciona rastreadores ou cookies e não inicia áudio automaticamente. Na discografia, os iframes carregam conteúdo de terceiros do Spotify, sujeito às políticas e tecnologias desse serviço; as outras telas não carregam esses players.

## Testes opcionais

Os testes de navegador usam Python e Playwright, separados das dependências do site. Com o servidor de desenvolvimento rodando:

```sh
pip install playwright
python -m playwright install chromium
python tests/smoke.py
python tests/i18n_smoke.py
```

Em ambientes Linux mínimos, pode ser necessário executar `python -m playwright install-deps chromium`. A variável `BASE_URL` permite testar outro endereço.

Os testes verificam associação dos retratos, biografias, foco, rotas, nove larguras de tela, discografia e rascunho de contato. A suíte de idiomas cobre seis rotas × três idiomas × nove larguras, persistência, armazenamento indisponível, rascunhos preservados, controles acessíveis e identidade estável dos players. Eles não substituem auditoria completa de acessibilidade nem homologação em dispositivos reais.
