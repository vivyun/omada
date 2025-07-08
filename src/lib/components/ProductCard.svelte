<script>
  import { fade } from 'svelte/transition';

  export let product;

  let index = 0;
  let activeInfoIndex = null;

	function toggleInfo(index) {
		activeInfoIndex = activeInfoIndex === index ? null : index;
	}
</script>

<div class="flex flex-col gap-2 hover:scale-105 transition-all">
  <button on:click={() => toggleInfo(index)} aria-label="Toggle product info" class="relative text-left">
    <!-- Info Button -->
    <div class="absolute top-3 right-2 z-10 flex flex-row gap-2">
      <p class="text-white small-paragraph text-right leading-tight">Click to<br /> view specs</p>
      <img src="icons/info.svg" alt="Info icon" />
    </div>
    <p class="absolute top-3 left-4 z-20 text-white leading-tight large-paragraph">Included in <br />your kit</p>

    <img class="hidden md:block w-full" src={product.image} alt={product.name} />
    <img class="block md:hidden w-full" src={product.image_mobile} alt={product.name} />

    <!-- Overlay -->
    {#if activeInfoIndex === index}
      <div in:fade={{ duration: 300 }} out:fade={{ duration: 200 }} class="absolute inset-0 bg-black/50 backdrop-blur z-20 flex justify-center p-4 md:p-8">
        <ul class="text-white list-disc w-full pl-4">
          {#each product.features as feature}
            <li class="small-paragraph md:mb-2">{feature}</li>
          {/each}
        </ul>
      </div>
    {/if}
  </button>

  <h4 class="xl:max-w-[70%]">{product.name}</h4>
  <div class="flex flex-row gap-3">
    <p class="text-darkGray">
      <span class="text-primaryGreen">{product.id}</span>
      <span class="mx-3">|</span>
      Retails for {product.price}
    </p>
  </div>
</div>