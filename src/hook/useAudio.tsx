import { useEffect, useState } from "react";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';

export function useAudio() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    return () => {
      // Descarregar o som ao desmontar o componente
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  async function playAudio() {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        require('../assets/market-beep.mp3'),
        { shouldPlay: true, volume: 1.0 },
        onPlaybackStatusUpdate
      );
      setSound(newSound);
      await newSound.playAsync();
    } catch (error) {
      console.error('Erro ao reproduzir o som de beep', error);
    }
  }

  function onPlaybackStatusUpdate(status: any) {
    if (status.didJustFinish) {
      // Descarregar o som quando a reprodução for concluída
      if (sound) {
        sound.unloadAsync();
      }
    }
  }

  return { playAudio };
}
