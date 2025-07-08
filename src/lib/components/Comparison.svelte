<script>
  export let image = '';
  export let name = '';
  export let best = '';
  export let description = '';
  export let total = '';
  export let msrp = '';
  export let cta = '';
  export let link = '';
</script>

<div class="flex flex-col lg:flex-row gap-8 w-full">
  <img
    class="max-w-[80%] lg:max-w-1/2 m-auto"
    src={image}
    alt={name} />

  <div class="flex flex-col gap-4 w-full">
    <h3>{name}</h3>
    <h4 class="subheading">{best}</h4>
    <p>{description}</p>

    <div class="mt-6 flex flex-col gap-4">
      <h3>Demo Kit Price</h3>
      <h4 class="subheading">
        3 Products + {name}
      </h4>

      <div class="flex items-end gap-4 mt-2">
        <h2 class="text-dullGreen bg-dullGreen/10 px-4 py-2">
          {total}
          <span class="large-paragraph ml-2 font-normal">(50% off)</span>
        </h2>
        <p class="large-paragraph font-normal text-black/60">
          MSRP<br />
          <span class="line-through">{msrp}</span>
        </p>
      </div>
    </div>

    <a href={link} class="btn-primary self-start mt-4">
      {cta}
    </a>
  </div>
</div>
