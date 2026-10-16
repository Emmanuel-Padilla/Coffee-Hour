import { useState } from 'react';
import { videos } from '@/data/videos';
import { useLanguage } from '@/context/LanguageContext';
import { trackEvent } from '@/lib/analytics';
import { PlayIcon } from '@/components/icons';

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const { lang, dict } = useLanguage();
  const [playing, setPlaying] = useState(false);

  return (
    <article
      className={`group ${
        video.orientation === 'portrait' ? 'sm:col-span-1' : 'sm:col-span-2'
      }`}
    >
      <div className={`relative overflow-hidden bg-black ${video.orientation === 'portrait' ? 'aspect-[9/16] rounded-t-[6rem]' : 'aspect-video rounded-[2rem]'}`}>
        {playing ? (
          <video
            src={`/videos/${video.file}`}
            controls
            autoPlay
            playsInline
            className="h-full w-full"
            onPlay={() => trackEvent('play_video', { video: video.id })}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${dict.videos.play}: ${video.title[lang]}`}
            className="group relative h-full w-full"
          >
            <img
              src={`/videos/${video.poster}`}
              alt={video.title[lang]}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-caramel text-[#17120e] shadow-2xl transition group-hover:scale-110">
                <PlayIcon className="h-7 w-7" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="border-b border-coffee-900/15 px-1 py-5 dark:border-white/15">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-caramel">Coffee Hour Film</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy-600 dark:text-cream">{video.title[lang]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-cream/70">{video.description[lang]}</p>
      </div>
    </article>
  );
}

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
