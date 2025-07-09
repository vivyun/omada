<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  const features = [
    {
      icon: 'icons/graph.svg',
      title: 'Confidently Bid & Win More Projects',
      description: 'With Omada, you can confidently bid for a wider range of projects — from SMBs to multi-site deployments — and stay competitive in cost-driven markets.',
    },
    {
      icon: 'icons/coin.svg',
      title: 'Gain More Profit with Exclusive Partner Pricing',
      description: 'Boost your margins with competitive partner pricing, a broad product lineup, and value-added tools — all designed to help you grow your business and win more deals.',
    },
    {
      icon: 'icons/rocket.svg',
      title: 'Reliability & High Performance Without Compromise',
      description: 'Give your customers enterprise-grade performance they can count on — proven, reliable networking that meets real-world demands, even on tight budgets.',
    },
    {
      icon: 'icons/headset.svg',
      title: 'Dedicated Tech Support & Extended Warranty',
      description: 'Get help fast by phone, email, or chat — we’re here for you pre- and post-sale. Plus, our extended warranties provide extra peace of mind for you and your customers.',
    },
  ];

  let products = [
    {
      image: 'images/ER707-M2.jpg',
      image_mobile: 'images/ER707-M2_m.jpg',
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
      image: 'images/EAP723.jpg',
      image_mobile: 'images/EAP723_m.jpg',
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
      image: 'images/SG2210P.jpg',
      image_mobile: 'images/SG2210P_m.jpg',
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

  let selected = 'cloud';

  const controllers = {
    cloud: {  
      image: 'images/Omada_Cloud_Essentials.png',
      name: 'Omada Cloud Essentials',
      id: 'Free',
      price: 'Free',
      best: 'Best for Surveillance Networks, Home Labs, Houses, Motels, and Small Offices',
      description: 'Manage your entire network from anywhere — no hardware required. Includes free lifetime cloud access.',
      total: '$197.48',
      msrp: '$394.96',
    },
    hardware: {
      image: 'images/OC220.png',
      name: 'On-Premises Hardware Controller',
      id: 'OC220',
      price: 'Retails for $79.99',
      best: 'Best for Hotels, Retails, MDU, Schools, Small to Medium Offices',
      description: 'Ideal for schools, hotels, and larger networks needing local control, VLANs, and advanced authentication.',
      total: '$237.48',
      msrp: '$474.95',
    },
  };

  $: controller = controllers[selected];

  const testimonials = [
    // {
    //   logo: 'images/texas_roadhouse.svg',
    //   title: 'Texas Roadhouse Trusts Omada for Reliable Network Solutions',
    //   quote: 'With <span class="text-limeGreen font-extrabold">400+ restaurants</span> across the U.S., Texas Roadhouse upgraded their network using Omada switches for seamless, crash-free POS systems and stable Wi-Fi. Diners can now enjoy uninterrupted service, while the brand benefits from cost-effective, secure solutions.',
    // },
    {
      logo: 'images/manchester_hall.svg',
      title: '3 Words: Reliable, Functional, and Available',
      quote: 'It’s very important for venues such as Manchester Hall that reliability of a solution, the service(s) from TP-Link (are) probably the best we’ve had from a vendor. TP-Link has a more personal approach from initial opportunity to the end sale. Three words: <span class="text-limeGreen font-extrabold">Reliable</span>, <span class="text-limeGreen font-extrabold">Functional</span>, and <span class="text-limeGreen font-extrabold">Available</span>. <br /><br />– Sam Connolly, Technical Consultant/Account Manager from LIV',
    },
    // {
    //   logo: 'images/birchgrove.svg',
    //   title: 'We decided to go TP-Link because of the reliability',
    //   quote: 'We looked at Aruba, we looked at Cisco, but we decided to go TP-Link because of the <span class="text-limeGreen font-extrabold">reliability</span>. Having so many crucial things in the building which have to be kept working. We knew we needed something which we could reply on, and also the back-end support from TP-Link. If we need help, the ability of just pick up the phone and get an instant chat. That was the most attractive thing to us. <br /><br />- Chris Jarred, Birchgrove’s IT Director',
    // },
    {
      logo: 'images/ipacket.svg',
      title: 'Omada Delivers Efficient Wi-Fi 6 Upgrades for 14,000 Resort Condominiums',
      quote: 'Both my other vendors were actually very depleted in stock, and they didn’t have <span class="text-limeGreen font-extrabold">Wi-Fi 6</span>, so those were the first big drivers on what got me looking at TP-Link again.<br /><br />– Luis Santos, VP of Engineering at IPacket Networks',
    },
    {
      logo: 'images/gsd_solutions.svg',
      title: 'Omada Delivers Seamless, Reliable Internet for a 100+ Unit MDU in Oakland, CA',
      quote: 'We were looking for a vendor that could do pre-shared key for our clients at a reasonable price point. <span class="text-limeGreen font-extrabold">TP-Link fits that bill.</span><br /><br />– Scott Davison, CTO at GSD Solutions',
    },
  ];

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

  let activeInfoIndex = null;

	function toggleInfo(index) {
		activeInfoIndex = activeInfoIndex === index ? null : index;
	}

  onMount(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<main class="main-container">

  <!-- Hero -->
  <section id="Hero" class="section-container bg-[url(/images/hero_m.png)] lg:bg-[url(/images/hero.png)] bg-center bg-cover">
    <div class="container-row-to-col justify-between items-center max-w-[1920px] mx-auto py-16 px-8 lg:px-16">
      <div class="flex flex-col gap-8 text-white w-full max-w-2xl">
        <h1>Explore Omada’s Business-Grade Wi-Fi 7 Demo Kit</h1>
        <p class="large-paragraph text-white/80">
          Business-grade networking gear with lifetime free cloud management.<br />
          Built for system integrators ready to scale.
        </p>
        <a href="#Form" class="btn-primary self-start">Claim My Kit Now</a>
      </div>
      <div class="w-full max-w-2xl relative">
        <img src="images/demo_kit_products.png" alt="Omada Cloud Essentials" />
        <div class="scale-70 lg:scale-100 absolute top-0 right-0 w-52 h-52 bg-black/50 backdrop-blur rounded-full flex flex-col items-center justify-center">
          <p class="text-limeGreen text-center text-3xl font-light">
            Get it<br /><span class="text-5xl">50%</span><br />off!
          </p>
          <p class="text-white">Limited time only</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Omada -->
  <section id="WhyOmada" class="section-container bg-gray-100">
    <div class="flex container-row-to-col gap-8 max-w-[1920px] mx-auto py-16 lg:py-28 px-8 lg:px-16">
      <div class="flex flex-col gap-4 w-full">
        <h4>System Integrators & MSPs,</h4>
        <h2>Are you struggling with low-budget clients and razor-thin margins? <span class="border-b-3 border-neonGreen">Omada is here to boost your profit.</span></h2>
      </div>
      <div class="w-full grid grid-cols-2 gap-8">
        {#each features as { icon, title, description }}
          <div class="flex flex-col items-start gap-2 max-w-sm mx-auto">
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

      <!-- Choose Your Controller -->
      <h2 class="mt-8">Choose Your Controller</h2>
      <div class="flex flex-wrap justify-center gap-2 mb-6">
        {#each Object.entries(controllers) as [key, data]}
          <button
            class={`px-4 py-2 rounded-full border ${
              selected === key ? 'border-neonGreen' : 'bg-gray-200 border-gray-200'
            }`}
            on:click={() => (selected = key)}
          >
            {data.name} ({data.price})
          </button>
        {/each}
      </div>

      <div class="flex flex-col lg:flex-row gap-8 w-full">
        <img
          class=" max-w-[80%] lg:max-w-1/2 m-auto"
          src={controller.image}
          alt={controller.name} />

        <div class="flex flex-col gap-4 w-full">
          <h3>{controller.name} ({controller.id})</h3>
          <h4 class="subheading">{controller.best}</h4>
          <p>{controller.description}</p>

          <div class="mt-6 flex flex-col gap-4">
            <h3>Demo Kit Price</h3>
            <h4 class="subheading">
              3 Products + {controller.name}
            </h4>

            <div class="flex items-end gap-4 mt-2">
              <h2 class="text-dullGreen bg-dullGreen/10 px-4 py-2">
                {controller.total}
                <span class="large-paragraph ml-2 font-normal">(50% off)</span>
              </h2>
              <p class="large-paragraph font-normal text-black/60">
                MSRP<br />
                <span class="line-through">{controller.msrp}</span>
              </p>
            </div>
          </div>

          <a href="#Form" class="btn-primary self-start mt-4">
            Claim My Kit Now
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="section-container bg-gradient-to-b from-darkGreen to-dullGreen text-white">
  <div class="flex flex-col gap-8 max-w-[1920px] mx-auto py-16 lg:py-28 px-8 lg:px-16">
    <h2 class="border-b border-white/20 pb-6">Proven Results with Omada</h2>
    <div>
      <div bind:clientWidth class="overflow-hidden relative">
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
      <div class="flex justify-center gap-4 mt-4 subheading">
        <!-- Previous button -->
        <button class="lg:hidden" on:click={prev}>
          Previous
        </button>
        <!-- Next button -->
        <button class="lg:hidden" on:click={next}>
          Next
        </button>
      </div>
    </div>
  </div>
</section>

<section id="Form" class="section-container bg-gray-100">
    <form action="/phppage/addPromotion.php" method="post" id="demo-form" class="flex flex-col lg:flex-row gap-8 max-w-[1920px] mx-auto py-16 lg:py-28 px-8 lg:px-16">
      <!-- Hidden backend inputs -->
      <input type="hidden" name="token" value="your-token-here" />
      <input type="hidden" name="email_subscribe" value="1" />
      <input type="hidden" name="promotion_type" value="demo-kit_202505" />
      <input type="hidden" name="promotion_string" value="From|* Company Name|* Job Title|Business Phone|Company Website" />
      <input type="hidden" name="BySiteId" value="your-site-id" />
      <input type="hidden" name="col_1" value="utm-source" />

      <!-- Heading & Terms (Left column spans both rows) -->
      <div class="flex flex-col gap-8 w-full">
        <h2>Claim Your <span class="text-primaryGreen">50% Off</span><br />Omada Wi-Fi 7 Demo Kit</h2>
        <p class="large-paragraph">Interested? Sign up using the form before our limited promotion ends.</p>

        <div class="hidden lg:block">
          <h4 class="mb-2 large-paragraph font-medium">Terms & Conditions</h4>
          <ul class="list-disc pl-8 space-y-2 text-black/60">
            <li>The 50% discount on the Wi-Fi 7 demo kit applies only to eligible partners within the United States.</li>
            <li>The program aims to provide easy access to Omada for targeted B2B channel partners, such as resellers, installers, and MSPs. TP-Link reserves the right to select eligible partners only for the discounted demo kit. Submission does not guarantee receipt of the demo kit.</li>
            <li>LIMIT 1 DISCOUNT DEMO KIT per eligible partner. Items are not allowed for resale.</li>
            <li>When Submit is pressed, the customer agrees to share their contact information with TP-Link and receive emails or calls from TP-Link.</li>
          </ul>
        </div>
      </div>

      <!-- Input Fields (Right side) -->
      <div class="col-span-2 md:col-span-1 space-y-4 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="input-container">
            <label class="text-sm font-medium">First Name<span class="text-neonGreen">*</span></label>
            <input name="firstName" required class="input" />
          </div>
          <div class="input-container">
            <label class="text-sm font-medium">Last Name<span class="text-neonGreen">*</span></label>
            <input name="lastName" required class="input" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="input-container">
            <label class="text-sm font-medium">Business Email<span class="text-neonGreen">*</span></label>
            <input type="email" name="email" required class="input" />
          </div>
          <div class="input-container">
            <label class="text-sm font-medium">Business Phone</label>
            <input name="col_4" class="input" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="input-container">
            <label class="text-sm font-medium">Company Name<span class="text-neonGreen">*</span></label>
            <input name="col_2" required class="input" />
          </div>
          <div class="input-container">
            <label class="text-sm font-medium">Job Title<span class="text-neonGreen">*</span></label>
            <input name="col_3" required class="input" />
          </div>
        </div>

        <div class="input-container">
          <label class="text-sm font-medium">Company Website</label>
          <input name="col_5" class="input" />
        </div>

        <div class="flex items-start gap-2">
          <input id="privacy" type="checkbox" required class="mt-1" />
          <label for="privacy" class="text-sm">I have read and agree to the <a class="link" href="https://privacy.tp-link.com/web/official/privacy-policy?region=US" target="_blank">Privacy Policy</a>.</label>
        </div>

        <!-- reCAPTCHA -->
        <div class="promotion-recaptcha mb-4">&nbsp;</div>

        <button type="submit" class="btn-primary">Submit</button>
        <div class="block lg:hidden">
          <h4 class="mb-2 large-paragraph font-medium">Terms & Conditions</h4>
          <ul class="list-disc pl-8 space-y-2 text-black/60">
            <li>The 50% discount on the Wi-Fi 7 demo kit applies only to eligible partners within the United States.</li>
            <li>The program aims to provide easy access to Omada for targeted B2B channel partners, such as resellers, installers, and MSPs. TP-Link reserves the right to select eligible partners only for the discounted demo kit. Submission does not guarantee receipt of the demo kit.</li>
            <li>LIMIT 1 DISCOUNT DEMO KIT per eligible partner. Items are not allowed for resale.</li>
            <li>When Submit is pressed, the customer agrees to share their contact information with TP-Link and receive emails or calls from TP-Link.</li>
          </ul>
        </div>
      </div>

      <!-- Modal content to be used on success -->
      <div class="form-result-success hidden">
        <div id="demo-dialog">
          <h2 class="text-xl font-semibold">Please confirm your signup in your email!</h2>
          <p class="mt-2">Thank you for your submission! Please follow your email to complete the signup.</p>
          <p class="mt-4">Best Regards,<br />Omada Team</p>
        </div>
      </div>
    </form>
    <!-- Modal success logic -->
    <script>
    window.addEventListener("load", function () {
      const form = document.getElementById("demo-form");
      if (!form) return;

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
          method: "POST",
          body: formData,
        })
        .then(response => response.text())
        .then(data => {
          if (data.includes("email success")) {
            document.querySelector('.tp-dialog')?.remove();

            const contentBlock = document.querySelector(".form-result-success");
            if (contentBlock) {
              const modal = document.createElement("div");
              modal.className = "tp-dialog fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50";
              modal.setAttribute("role", "dialog");
              modal.setAttribute("aria-modal", "true");

              modal.innerHTML = `
                <div class="bg-white p-6 rounded shadow-md relative max-w-md w-full">
                  ${contentBlock.querySelector("#demo-dialog")?.innerHTML || ''}
                  <button class="absolute top-2 right-3 text-xl" onclick="this.closest('.tp-dialog').remove()">&times;</button>
                </div>
              `;

              document.body.appendChild(modal);
            }

            // Push new URL
            const basePath = '/thank-you-omada-demo-kit';
            const search = window.location.search;
            const newUrl = search ? basePath + search : basePath;
            window.history.pushState({}, '', newUrl);
          } else {
            alert("Submission failed. Please try again.");
          }
        })
        .catch(error => {
          console.error("Submission error:", error);
          alert("There was an error submitting the form.");
          document.querySelector('.tp-dialog')?.remove();
        });
      });
    });
    </script>
</section>

</main>