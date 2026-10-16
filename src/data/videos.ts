/**
 * Real video files pulled from the official site (self-hosted, re-encoded for web delivery).
 * The old /videos page only had empty placeholders ("videotitle1/2/3") — replaced with the
 * actual footage found on the server, honestly labeled as ambience/brand footage (not a
 * specific claim about "how a drink is made" unless it truly shows that).
 */
export interface VideoItem {
  id: string;
  file: string; // public/videos/<file>
  poster: string;
  orientation: 'landscape' | 'portrait';
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export const videos: VideoItem[] = [
  {
    id: 'ambiente',
    file: 'web-ambiente.mp4',
    poster: 'poster-ambiente.jpg',
    orientation: 'landscape',
    title: { es: 'El ambiente de Coffee Hour', en: 'The Coffee Hour atmosphere' },
    description: {
      es: 'Un vistazo al espacio y al ambiente de Coffee Hour en Chapala.',
      en: 'A look at the space and atmosphere of Coffee Hour in Chapala.',
    },
  },
  {
    id: 'preparacion',
    file: 'web-preparacion.mp4',
    poster: 'poster-preparacion.jpg',
    orientation: 'landscape',
    title: { es: 'Detrás de la barra', en: 'Behind the bar' },
    description: {
      es: 'Momentos de la preparación de bebidas en nuestra barra de café.',
      en: 'Moments from drink preparation at our coffee bar.',
    },
  },
  {
    id: 'dron',
    file: 'web-dron.mp4',
    poster: 'poster-dron.jpg',
    orientation: 'portrait',
    title: { es: 'Coffee Hour desde el aire', en: 'Coffee Hour from above' },
    description: {
      es: 'Toma aérea de Coffee Hour en el centro de Chapala.',
      en: 'Aerial footage of Coffee Hour in downtown Chapala.',
    },
  },
];
