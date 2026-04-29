import { useEffect, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const audio = new Audio("/audio/romantic.mp3");
audio.loop = true;
audio.volume = 0;

let started = false;

export const AudioToggle = () => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // faqat 1 marta autoplay
    if (started) return;
    started = true;

    audio
      .play()
      .then(() => {
        setPlaying(true);

        // smooth fade in
        let v = 0;
        const id = setInterval(() => {
          v = Math.min(0.45, v + 0.03);
          audio.volume = v;
          if (v >= 0.45) clearInterval(id);
        }, 80);
      })
      .catch(() => {
        setPlaying(false);
        started = false;
      });
  }, []);

  const toggle = () => {
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-50 glass rounded-full p-3 hover:scale-110 transition-transform"
    >
      {playing ? (
        <Music className="w-5 h-5 text-primary" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};