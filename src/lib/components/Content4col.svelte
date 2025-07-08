<script>
  export let title = '';
  export let description = '';
  export let features = [];
  export let columns = 4;
</script>

<section class="section-container bg-gray-100">
  <div class="flex flex-col gap-8 max-w-[1920px] mx-auto py-16 lg:py-28 px-8 lg:px-16">
    <h2>{title}</h2>
    {#if description}
      <p class="text-black/60 large-paragraph">{description}</p>
    {/if}
    
    <div class={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-8 mt-8`}>
      {#each features as { icon, title, description }}
        <div class="flex flex-col items-center text-center gap-4 max-w-sm mx-auto">
          <img src={icon} alt={title} class="scale-75 lg:scale-100" />
          <h4>{title}</h4>
          <p class="text-black/60">{description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>