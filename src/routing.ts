import { useSyncExternalStore } from 'react';
export const routeTitles = {
  inicio: 'Central Malvada — O som que nos une.',
  banda: 'A banda — Central Malvada', integrantes: 'Integrantes — Central Malvada',
  discografia: 'Discografia — Central Malvada', agenda: 'Agenda — Central Malvada',
  contato: 'Contato do fã-clube — Central Malvada',
} as const;
export type Page = keyof typeof routeTitles;
function readRoute(): Page {
  const key = window.location.hash.replace(/^#\//, '').split(/[?&]/)[0];
  return Object.prototype.hasOwnProperty.call(routeTitles, key) ? key as Page : 'inicio';
}
function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}
export function usePage() { return useSyncExternalStore(subscribe, readRoute, () => 'inicio' as Page); }
