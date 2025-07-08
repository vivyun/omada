<script>
  export let value;
  export let selected;
  export let setSelected;
  export let label;
</script>

<button
  class={`px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
    selected === value
      ? 'border-neonGreen text-black'
      : 'bg-gray-200 border-gray-200 text-black/70 hover:text-black'
  }`}
  on:click={() => setSelected(value)}
>
  {label}
</button>
