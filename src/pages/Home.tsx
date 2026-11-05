import { useI18n } from "../i18n/I18nProvider";
import { heroImage, wideHeroImage, backstageImage, albums } from "../data/content";
export default function Home() {
  const {
    t
  } = useI18n();
  const latestAlbum = albums.find(album => album.id === "malvada-2025")!;
  return <div className="home-page">
<section className="home-hero" aria-labelledby="home-title">
  <figure className="home-hero-media" id="hero-image"><picture><source media="(min-width: 801px)" srcSet={wideHeroImage} /><img src={heroImage} alt={t("Malvada em fotografia oficial com fundo azul")} fetchPriority="high" /></picture></figure><div className="home-hero-shade" aria-hidden="true"></div>
  <div className="home-hero-copy"><p>CENTRAL</p><h1 id="home-title">MALVADA<span aria-hidden="true">✳</span></h1></div>
  <div className="hero-bottom-bar"><span>{t("FÃ-CLUBE DA MALVADA. FEITO POR FÃS.")}</span><a href="#/integrantes">{t("CONHEÇA A NOVA FORMAÇÃO ")}<span aria-hidden="true">↗</span></a><span className="construction"><i aria-hidden="true"></i>{t("SITE EM CONSTRUÇÃO")}</span></div>
</section>
<section className="home-statement" aria-labelledby="statement-title"><span className="section-micro">{t("[ FEITO DE FÃS. FEITO DE ROCK. ]")}</span><div><h2 id="statement-title">{t("O PESO")}<br />{t("É DELAS.")}<br /><span>{t("A PAIXÃO É NOSSA.")}</span></h2><p>{t("O ponto de encontro de quem vive a Malvada.")}<br />{t("Da primeira fila ao último acorde.")}</p></div><a href="#/banda" className="bare-link">{t("ENTRE NO UNIVERSO MALVADA ")}<span aria-hidden="true">↗</span></a></section>
<section className="home-band" aria-labelledby="home-band-title"><div className="home-band-photo"><img src={backstageImage} alt={t("Malvada nos bastidores do ensaio, fotografada em ângulo baixo com os instrumentos")} loading="lazy" width="419" height="629" /><span className="photo-footnote">{t("MALVADA · UMA NOVA FASE.")}</span></div><div className="home-band-content"><p className="section-micro">{t("[ A BANDA ]")}</p><h2 id="home-band-title">{t("QUATRO")}<br />{t("MULHERES.")}<br />{t("SEM PEDIR")}<br />{t("LICENÇA.")}</h2><div className="home-band-bottom"><p>Bruna Tsuruda. Rafaela Reoli.<br />Cyz Mendes. Juliana Salgado.<br /><span>{t("Uma nova voz. A mesma atitude.")}</span></p><a href="#/integrantes" className="bare-link">{t("CONHEÇA A FORMAÇÃO ")}<span aria-hidden="true">↗</span></a></div></div></section>
<div className="home-marquee" aria-label={t("Hard rock, atitude e palco")}><span>{t("HARD ROCK / ATITUDE / PALCO / MALVADA /")}</span></div>
<section className="home-release" aria-labelledby="home-release-title"><div className="release-top"><span className="section-micro">{t("[ ÚLTIMO ÁLBUM ]")}</span><a href="#/discografia" className="bare-link">{t("DISCOGRAFIA COMPLETA ")}<span aria-hidden="true">↗</span></a></div><div className="release-center"><h2 id="home-release-title">MALVADA.<br />{t("NO ÚLTIMO")}<br />{t("VOLUME.")}</h2><div className="release-year" aria-label={t("Lançado em 2025")}>20<br />25<span aria-hidden="true">↗</span></div></div><div className="release-bottom"><p>MALVADA — 2025<br /><span>{t("O segundo álbum. A fase internacional.")}</span></p><a className="listen-link" href={`https://open.spotify.com/album/${latestAlbum.spotifyId}`} target="_blank" rel="noopener noreferrer">{t("OUÇA NO SPOTIFY ")}<span aria-hidden="true">↗</span><span className="sr-only">{t(" (abre em nova aba)")}</span></a></div></section>
<section className="home-join" aria-labelledby="home-join-title"><div className="join-top"><p className="section-micro">{t("[ ESSE ESPAÇO TAMBÉM É SEU. ]")}</p><span aria-hidden="true">✳</span></div><h2 id="home-join-title">{t("A CENTRAL")}<br />{t("É NOSSA.")}</h2><div className="join-bottom"><p>{t("Acompanhe a banda. Compartilhe o som.")}<br />{t("Viva a próxima fase com a gente.")}</p><a className="bare-link" href="#/contato">{t("FALE COM A CENTRAL ")}<span aria-hidden="true">↗</span></a></div></section>
</div>;
}
