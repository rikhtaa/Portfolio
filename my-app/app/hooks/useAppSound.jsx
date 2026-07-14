import useSound from "use-sound";
import { useSoundContext } from "../context/SoundContext";

export default function useAppSound(src, options = {}) {
  const { soundOn } = useSoundContext();

  return useSound(src, {
    soundEnabled: soundOn,
    volume: 0.4,
    ...options,
  });
}