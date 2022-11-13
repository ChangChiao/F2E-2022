<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { useMedia } from "../../hooks/useMedia";
gsap.registerPlugin(ScrollTrigger);
const isMobile = useMedia();
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      // markers: true,
      start: "top",
      end: "bottom",
      scrub: true,
    },
  });
  if (isMobile.value) {
    tl.to(
      ".player-group",
      {
        scale: 0.5,
        bottom: 0,
      },
      1
    ).to(
      ".player-group",
      {
        scale: 0.5,
        bottom: 0,
      },
      10
    );
    return;
  }
  tl.to(
    ".player-group", //feature
    {
      scale: 0.7,
      bottom: 0,
    },
    1
  )
    .to(
      ".player-2",
      {
        scale: 0.8,
      },
      "<"
    )
    .to(
      //coopration
      ".player-group",
      {
        scale: 1,
        bottom: 10,
      },
      2.2
    )
    .to(
      ".player-1",
      {
        scale: 1,
      },
      "<"
    )
    .to(
      ".player-3",
      {
        scale: 1.1,
      },
      "<"
    )
    .to(
      //level
      ".player-group",
      {
        scale: 0.4,
        bottom: 0,
      },
      3.2
    )
    .to(
      ".player-1",
      {
        scale: 1.2,
      },
      "<"
    )
    .to(
      ".player-2",
      {
        scale: 0.7,
      },
      "<"
    )
    .to(
      //stage
      ".player-group",
      {
        scale: 0.7,
        bottom: 0,
      },
      4.5
    )
    .to(
      ".player-1",
      {
        scale: 0.9,
      },
      "<"
    )
    .to(
      ".player-2",
      {
        scale: 1.1,
      },
      "<"
    )
    .to(
      ".player-group",
      {
        //murmur
        scale: 0.9,
        bottom: 0,
      },
      5.8
    )
    .to(
      ".player-2",
      {
        scale: 0.9,
      },
      "<"
    )
    .to(
      ".player-3",
      {
        scale: 1,
      },
      "<"
    )
    .to(
      ".player-group",
      {
        //award
        scale: 0.6,
        bottom: 0,
      },
      7
    )
    .to(
      ".player-2",
      {
        scale: 1.1,
      },
      "<"
    )
    .to(
      ".player-2",
      {
        scale: 0.8,
      },
      "<"
    )
    .to(
      ".player-3",
      {
        scale: 0.7,
      },
      "<"
    )
    .to(
      ".player-group",
      {
        //sponsor
        scale: 0.7,
        bottom: 0,
        duration: 1,
      },
      8
    )
    .to(
      ".player-1",
      {
        scale: 1,
      },
      "<"
    )
    .to(
      ".player-2",
      {
        scale: 1,
      },
      "<"
    )
    .to(
      ".player-3",
      {
        scale: 1,
      },
      "<"
    )
    .to(
      ".player-group",
      {
        //end
        scale: 1,
      },
      9.2
    )
    .to(
      ".player-group",
      {
        //end
        scale: 1.2,
      },
      9.7
    )
    .to(
      ".player-group",
      {
        //end
        scale: 1.5,
        opacity: 0,
      },
      10
    );
});
</script>

<template>
  <div
    class="player-group pointer-events-none fixed bottom-0 left-0 right-0 z-40 mx-auto w-[80%] origin-bottom xl:w-2/3 xl:max-w-[800px] 2xl:w-1/2 2xl:max-w-[1000px]"
  >
    <div class="flex items-center justify-between" id="player">
      <img
        class="player player-1 lg:translate-y-10"
        src="@/assets/character/character_f2e.gif"
        alt=""
      />
      <img
        class="player player-2 lg:translate-y-10"
        src="@/assets/character/character_ui.gif"
        alt=""
      />
      <img
        class="player player-3 lg:translate-y-20"
        src="@/assets/character/character_team.gif"
        alt=""
      />
    </div>
    <img class="mx-auto -mt-12" src="@/assets/main/road.png" alt="" />
  </div>
</template>

<style scoped>
.player {
  @apply relative z-10 w-1/3 duration-100;
}

.offset-left {
  .player-1 {
    @apply -translate-x-2;
  }
  .player-2 {
    @apply -translate-x-6;
  }
  .player-3 {
    @apply translate-x-4;
  }
}

.offset-right {
  .player-1 {
    @apply -translate-x-5;
  }
  .player-2 {
    @apply translate-x-4;
  }
  .player-3 {
    @apply translate-x-2;
  }
}
</style>
