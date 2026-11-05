import { useI18n, useContent } from "../i18n/I18nProvider";
import { ArrowUpRight } from "lucide-react";
import { officialLinks } from "../data/content";
import AlbumPlayer, { SpotifyMark } from "../components/AlbumPlayer";
export default function Discography() {
  const {
    albums
  } = useContent();
  const {
    t
  } = useI18n();
  return <section className="section music-library" id="discografia" aria-labelledby="discography-title">
    <header className="music-library-heading"><div><p className="eyebrow">{t("MALVADA / A DISCOGRAFIA")}</p><h2 id="discography-title">{t("DISCOGRAFIA.")}</h2><p className="music-library-intro">{t("Do primeiro disco à fase internacional.")}<br />{t("Dois álbuns. Toda a intensidade.")}</p></div><a className="music-profile" href={officialLinks.spotify} target="_blank" rel="noopener noreferrer"><SpotifyMark /><span>{t("MALVADA NO SPOTIFY")}</span><ArrowUpRight size={18} strokeWidth={1.3} aria-hidden="true" /><span className="sr-only">{t(" (abre em nova aba)")}</span></a></header>
    <div className="music-albums" id="albums">{albums.map(album => <AlbumPlayer key={album.id} album={album} />)}</div>
    <p className="music-service-note">{t("Áudio e controles fornecidos pelo Spotify. A disponibilidade de reprodução depende do serviço, da sua região e da sua conta. Ao carregar os players, você acessa conteúdo de terceiros.")}</p>
  </section>;
}
