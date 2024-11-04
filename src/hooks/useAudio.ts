import { useEffect, useRef, useState } from 'react';

export const useAudio = (url: string) => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadAudio = () => {
      if (!audio.current && typeof window !== 'undefined') {
        audio.current = new Audio();
        audio.current.preload = 'none'; // Only load when needed
      }
    };

    loadAudio();
    return () => {
      if (audio.current) {
        audio.current.pause();
        audio.current = null;
      }
    };
  }, [url]);

  const play = () => {
    if (audio.current && !isLoaded) {
      audio.current.src = url;
      audio.current.load();
      setIsLoaded(true);
    }
    audio.current?.play();
  };

  const pause = () => {
    audio.current?.pause();
  };

  return { play, pause };
};