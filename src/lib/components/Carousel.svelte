<script>
  export let testimonials = [];
  export let autoScroll = true;

  let index = 0;
  let itemsPerSlide = 3;
  let clientWidth;

  $: itemsPerSlide = clientWidth >= 1024 ? 3 : clientWidth >= 768 ? 2 : 1;
  $: maxIndex = testimonials.length - itemsPerSlide;

  function next() {
    index = (index + 1) > maxIndex ? 0 : index + 1;
  }

  function prev() {
    index = Math.max(index - 1, 0);
  }

  import { onMount } from 'svelte';
  onMount(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<section class="section-container bg-gradient-to-b from-darkGreen to-dullGreen text-white">
  <div class="flex flex-col gap-8 max-w-[1920px] mx-auto py-16 lg:py-28 px-8 lg:px-16">
    <h2>Proven Results with Omada</h2>
    <div class="relative">
      <!-- Previous button -->
      <button class="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10" on:click={prev}>
        <img src="icons/arrow.svg" alt="previous" />
      </button>

      <!-- Next button -->
      <button class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10" on:click={next}>
        <img class="rotate-180" src="icons/arrow.svg" alt="next" />
      </button>

      <div bind:clientWidth class="overflow-hidden relative lg:mx-24">
        <div
          class="flex transition-transform duration-500 ease-in-out gap-8"
          style="transform: translateX(-{index * (100 / testimonials.length)}%); width: {testimonials.length * (100 / itemsPerSlide)}%;">
          {#each testimonials as t}
            <div class="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3 h-fit">
              <img src={t.logo} alt="testimonial logo" class="h-16 mb-2 self-start" />
              <h4>“{t.title}”</h4>
              <p class="text-white/80">{@html t.quote}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>