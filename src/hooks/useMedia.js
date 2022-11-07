// useMedia.js
import { ref, watchEffect } from "vue";

export const useMedia = (query = "(max-width: 1024px)") => {
  const matches = ref(false);

  watchEffect((onInvalidate) => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      matches.value = media.matches;
    }

    const onChange = () => {
      matches.value = media.matches;
    };

    media.addEventListener("change", onChange);

    onInvalidate(() => {
      media.removeEventListener("change", onChange);
    });
  });

  return matches;
};
