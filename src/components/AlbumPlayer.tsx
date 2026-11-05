import { useI18n } from "../i18n/I18nProvider";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowUpRight, ListMusic, Music2 } from "lucide-react";
import type { Album } from "../data/content";
type PlayerTab = "ouvir" | "faixas";
export function SpotifyMark() {
  return <svg className="spotify-mark" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1 .25c-2.7-1.65-6.1-2.02-10.1-1.1a.75.75 0 1 1-.34-1.46c4.4-1 8.2-.56 11.2 1.28a.75.75 0 0 1 .25 1.03Zm1.47-3.28a.94.94 0 0 1-1.3.3c-3.1-1.9-7.8-2.45-11.45-1.34a.94.94 0 1 1-.55-1.8c4.17-1.26 9.4-.64 12.99 1.55a.94.94 0 0 1 .31 1.3Zm.12-3.43C15.37 8.38 9.24 8.18 5.69 9.26a1.13 1.13 0 1 1-.66-2.16c4.08-1.24 10.86-1 15.2 1.57a1.13 1.13 0 0 1-1.14 1.92Z" /></svg>;
}
export default function AlbumPlayer({
  album
}: {
  album: Album;
}) {
  const {
    t
  } = useI18n();
  const [tab, setTab] = useState<PlayerTab>("ouvir");
  const [creditsOpen, setCreditsOpen] = useState(false);
  const buttons = useRef<Partial<Record<PlayerTab, HTMLButtonElement | null>>>({});
  const albumUrl = `https://open.spotify.com/album/${album.spotifyId}`;
  const embedUrl = `https://open.spotify.com/embed/album/${album.spotifyId}?utm_source=generator&theme=0`;
  function onTabKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? "ouvir" : event.key === "End" ? "faixas" : tab === "ouvir" ? "faixas" : "ouvir";
    setTab(next);
    buttons.current[next]?.focus();
  }
  return <article className="music-album" data-album-id={album.id} aria-labelledby={`album-title-${album.id}`}>
    <div className="music-album-top"><img className="music-cover" src={album.cover} alt={t("Capa oficial do álbum {album}", {
        album: album.title
      })} loading="lazy" width={180} height={180} /><div className="music-album-meta"><p className="music-type">{t("ÁLBUM · ")}{album.year}</p><h3 id={`album-title-${album.id}`}>{album.title}</h3><p className="music-artist"><span>Malvada</span><span aria-hidden="true">·</span>{album.tracks.length}{t(" músicas")}</p><p className="music-label">{album.label}{album.edition ? ` · ${album.edition}` : ""}</p></div></div>
    <div className="music-toolbar"><div className="music-tabs" role="tablist" aria-label={t("Opções de {album}", {
        album: album.title
      })}>
      <button ref={element => {
          buttons.current.ouvir = element;
        }} id={`tab-ouvir-${album.id}`} className="music-tab" type="button" role="tab" aria-selected={tab === "ouvir"} tabIndex={tab === "ouvir" ? 0 : -1} aria-controls={`panel-ouvir-${album.id}`} onKeyDown={onTabKey} onClick={() => setTab("ouvir")}><SpotifyMark />{t("Ouvir")}</button>
      <button ref={element => {
          buttons.current.faixas = element;
        }} id={`tab-faixas-${album.id}`} className="music-tab" type="button" role="tab" aria-selected={tab === "faixas"} tabIndex={tab === "faixas" ? 0 : -1} aria-controls={`panel-faixas-${album.id}`} onKeyDown={onTabKey} onClick={() => setTab("faixas")}><ListMusic size={17} strokeWidth={1.5} aria-hidden="true" />{t("Faixas ")}<span className="music-count">{album.tracks.length}</span></button>
    </div><a className="music-open" href={albumUrl} target="_blank" rel="noopener noreferrer" aria-label={t("Abrir {album} no Spotify em nova aba", {
        album: album.title
      })}><ArrowUpRight size={22} strokeWidth={1.4} aria-hidden="true" /></a></div>
    <div className="music-tabpanel" role="tabpanel" id={`panel-ouvir-${album.id}`} aria-labelledby={`tab-ouvir-${album.id}`} hidden={tab !== "ouvir"}>
      <iframe className="spotify-embed" title={t("Ouvir {album} no Spotify", {
        album: album.title
      })} src={embedUrl} width="100%" height={352} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
      <p className="music-fallback">{t("Player oficial do Spotify. Não abriu? ")}<a href={albumUrl} target="_blank" rel="noopener noreferrer">{t("Ouça pelo aplicativo ou navegador ↗")}</a></p>
    </div>
    <div className="music-tabpanel" role="tabpanel" id={`panel-faixas-${album.id}`} aria-labelledby={`tab-faixas-${album.id}`} hidden={tab !== "faixas"} tabIndex={0}>
      <div className="library-table-heading" aria-hidden="true"><span>#</span><span>{t("TÍTULO")}</span><Music2 size={14} strokeWidth={1.2} /></div>
      <ol className="library-tracklist" aria-label={t("Faixas de {album}", {
        album: album.title
      })}>{album.tracks.map((track, index) => <li key={`${album.id}-${index}`}><span className="track-position" aria-hidden="true">{index + 1}</span><span className="library-track-main"><span className="track-name">{track}</span><small>Malvada</small></span><Music2 className="track-note" size={15} strokeWidth={1.2} aria-hidden="true" /></li>)}</ol>
      <p className="music-fallback">{album.tracks.length}{t(" faixas")}{album.edition ? ` · ${album.edition}` : ""}{t(". Para reproduzir, use a aba Ouvir.")}</p>
    </div>
    <div className="music-credits"><button className="credits-toggle" type="button" aria-expanded={creditsOpen} aria-controls={`credits-${album.id}`} onClick={() => setCreditsOpen(value => !value)}><span>{t("FORMAÇÃO E FICHA TÉCNICA")}</span><span aria-hidden="true">{creditsOpen ? "−" : "+"}</span></button><div id={`credits-${album.id}`} className="music-credits-content" hidden={!creditsOpen}><div><h4>{t("FORMAÇÃO")}</h4><p>{album.lineup}</p></div><div><h4>{t("FICHA TÉCNICA")}</h4><p>{album.credits}</p></div></div></div>
  </article>;
}
