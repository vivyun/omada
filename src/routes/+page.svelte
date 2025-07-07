<script>
  import { fade } from 'svelte/transition';
  const features = [
    {
      icon: '/icons/graph.svg',
      title: 'Win More Projects',
      description: 'Competitive costs that align with your clients’ tight budgets—without compromising quality.',
    },
    {
      icon: '/icons/coin.svg',
      title: 'Gain More Profit',
      description: 'Competitive partner pricing to a broad product lineup and exclusive tools.',
    },
    {
      icon: '/icons/rocket.svg',
      title: 'Business-Grade Performance',
      description: 'High-quality, high-density Wi-Fi designed for business. A steady supply chain ensures cost control and dependable quality.',
    },
    {
      icon: '/icons/headset.svg',
      title: 'Dedicated Support & Warranty',
      description: 'Get help fast via call, email, or chat. We’re here pre- and post-sale. Extended warranties give peace of mind to you and your customers.',
    },
  ];

  let products = [
    {
      image: '/images/ER707-M2.jpg',
      image_mobile: '/images/ER707-M2_m.jpg',
      name: 'Omada Multi-Gigabit VPN Gateway',
      id: 'ER707-M2',
      price: '$99.99',
      features: [
        '2x 2.5Gbps RJ45 Ports (1x WAN, 1x LAN)',
        '5x Gigabit WAN/LAN Ports (1x SFP, 4x RJ45)',
        'Load Balancing on up to 6 WAN ports',
        'SSL/ IPSec / GRE§ / WireGuard / PPTP / L2TP VPN & OpenVPN'
      ]
    },
    {
      image: '/images/EAP723.jpg',
      image_mobile: '/images/EAP723_m.jpg',
      name: 'Omada Dual-Band Wi-Fi 7 Ceiling Mount AP',
      id: 'EAP723, 2 count',
      price: '$178.98 ($89.99 x 2)',
      features: [
        'Next-Gen Dual-Band Wi-Fi 7',
        'Speeds up to 5.0 Gbps*',
        '1x 2.5GbE Port & 802.3at PoE',
        'Max Throughput & Ultra-Low Latency'
      ]
    },
    {
      image: '/images/SG2210P.jpg',
      image_mobile: '/images/SG2210P_m.jpg',
      name: 'Omada 10-Port Gigabit Smart Switch',
      id: 'SG2210P',
      price: '$114.99',
      features: [
        '8x Gigabit 802.3af/at PoE+ ports and 2x Gigabit SFP slots',
        '61 W total PoE budget with up to 30 W PoE output per port',
        'Centralized cloud management via the web or the Omada app',
        'Static Routing helps route internal traffic for higher efficiency'
      ]
    }
  ];

  let activeInfoIndex = null;

	function toggleInfo(index) {
		activeInfoIndex = activeInfoIndex === index ? null : index;
	}
</script>

<main class="main-container">

  <!-- Hero -->
  <section id="Hero" class="section-container bg-[url(/images/hero_m.png)] lg:bg-[url(/images/hero.png)] bg-center bg-cover">
    <div class="container-row-to-col justify-between items-center max-w-[1920px] mx-auto py-16 px-8 lg:px-16">
      <div class="flex flex-col gap-8 text-white w-full max-w-2xl">
        <h1>Explore Omada’s Business-Grade Wi-Fi 7 Demo Kit</h1>
        <p class="large-paragraph text-white/80">
          Business-grade networking gear with lifetime free cloud management.<br>
          Built for system integrators ready to scale.
        </p>
        <button class="btn-primary self-start">Claim My Kit Now</button>
      </div>
      <div class="w-full max-w-2xl relative">
        <img src="/images/demo_kit_products.png" alt="Omada Cloud Essentials" />
        <div class="scale-70 lg:scale-100 absolute top-0 right-0 w-52 h-52 bg-black/50 backdrop-blur rounded-full flex flex-col items-center justify-center">
          <p class="text-limeGreen text-center text-3xl font-light">
            Get it<br><span class="text-5xl">50%</span><br>off!
          </p>
          <p class="text-white">Limited time only</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Omada -->
  <section id="WhyOmada" class="section-container bg-gray-100">
    <div class="flex flex-col gap-8 max-w-[1920px] mx-auto py-16 lg:py-28 px-8 lg:px-16">
      <h2>Why Omada?</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {#each features as { icon, title, description }}
          <div class="flex flex-col items-center text-center gap-2 max-w-sm mx-auto">
            <img src={icon} alt={title} class="scale-75 lg:scale-100" />
            <h4>{title}</h4>
            <p class="text-darkGray/60">{description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- What's In Your Demo Kit -->
  <section id="InYourKit" class="section-container">
    <div class="flex flex-col gap-12 max-w-[1920px] items-center mx-auto py-16 lg:py-28 px-8 lg:px-16">
      <h2>What's In <span class="border-b-3 border-neonGreen">Your</span> Omada Wi-Fi 7 Demo Kit?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {#each products as product, index}
          <div class="flex flex-col gap-2 hover:scale-105 transition-all">
            <button on:click={() => toggleInfo(index)} aria-label="Toggle product info" class="relative text-left">
                <!-- Info Button -->
                <div class="absolute top-3 right-2 z-10 flex flex-row gap-2">
                  <p class="text-white small-paragraph text-right leading-tight">Click to<br> view specs</p>
                  <img src="/icons/info.svg" alt="Info icon" />
                </div>
                <p class="absolute top-3 left-4 z-20 text-white leading-tight large-paragraph">Included in <br>your kit</p>
                <img class="hidden md:block w-full" src={product.image} alt={product.name} />
                <img class="block md:hidden w-full" src={product.image_mobile} alt={product.name} />
            <!-- Overlay -->
            {#if activeInfoIndex === index}
              <div in:fade={{ duration: 300 }} out:fade={{ duration: 200 }} class="absolute inset-0 bg-black/50 backdrop-blur z-20 flex justify-center p-4 md:p-8">
                <ul class="text-white list-disc w-full pl-4">
                  {#each product.features as feature}
                    <li class="small-paragraph md:mb-2">
                      {feature}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
            </button>
            <h4 class="xl:max-w-[70%]">{product.name}</h4>
            <div class="flex flex-row gap-3">
                <p class="text-darkGray"><span class="text-primaryGreen">{product.id}</span><span class="mx-3">|</span> Retails for {product.price}</p>
            </div>
          </div>
        {/each}
      </div>
      <h2>Choose Your Controller</h2>
    </div>
  </section>

</main>