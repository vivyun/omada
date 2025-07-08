<script>
  import Hero from '$lib/components/Hero.svelte';
  import Content4col from '$lib/components/Content4col.svelte';
  import Carousel from '$lib/components/Carousel.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import Tab from '$lib/components/Tab.svelte';
  import Comparison from '$lib/components/Comparison.svelte';

  const features = [
    {
      icon: 'icons/graph.svg',
      title: 'Win More Projects',
      description: 'Competitive costs that align with your clients’ tight budgets—without compromising quality.',
    },
    {
      icon: 'icons/coin.svg',
      title: 'Gain More Profit',
      description: 'Competitive partner pricing to a broad product lineup and exclusive tools.',
    },
    {
      icon: 'icons/rocket.svg',
      title: 'Business-Grade Performance',
      description: 'High-quality, high-density Wi-Fi designed for business. A steady supply chain ensures cost control and dependable quality.',
    },
    {
      icon: 'icons/headset.svg',
      title: 'Dedicated Support & Warranty',
      description: 'Get help fast via call, email, or chat. We’re here pre- and post-sale. Extended warranties give peace of mind to you and your customers.',
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
      name: 'Cloud-Based Controller',
      price: 'Free',
      best: 'Best for Surveillance Network Houses, Home Labs, Motels, and Small Offices',
      description: 'Manage your entire network from anywhere — no hardware required. Includes free lifetime cloud access.',
      total: '$197.48',
      msrp: '$394.96',
    },
    hardware: {
      image: 'images/OC220.png',
      name: 'Hardware Controller',
      price: 'Retails for $79.99',
      best: 'Best for Hotels, Retails, MDU, Schools, Small to Medium Offices',
      description: 'Ideal for schools, hotels, and larger networks needing local control, VLANs, and advanced authentication.',
      total: '$237.48',
      msrp: '$474.95',
    },
  };

  $: controller = controllers[selected];

  const testimonials = [
    {
      logo: 'images/texas_roadhouse.svg',
      title: 'Texas Roadhouse Trusts Omada for Reliable Network Solutions',
      quote: 'With <span class="text-limeGreen font-extrabold">400+ restaurants</span> across the U.S., Texas Roadhouse upgraded their network using Omada switches for seamless, crash-free POS systems and stable Wi-Fi. Diners can now enjoy uninterrupted service, while the brand benefits from cost-effective, secure solutions.',
    },
    {
      logo: 'images/manchester_hall.svg',
      title: '3 Words: Reliable, Functional, and Available',
      quote: 'It’s very important for venues such as Manchester Hall that reliability of a solution, the service(s) from TP-Link (are) probably the best we’ve had from a vendor. TP-Link has a more personal approach from initial opportunity to the end sale. Three words: <span class="text-limeGreen font-extrabold">Reliable</span>, <span class="text-limeGreen font-extrabold">Functional</span>, and <span class="text-limeGreen font-extrabold">Available</span>. <br /><br />– Sam Connolly, Technical Consultant/Account Manager from LIV',
    },
    {
      logo: 'images/birchgrove.svg',
      title: 'We decided to go TP-Link because of the reliability',
      quote: 'We looked at Aruba, we looked at Cisco, but we decided to go TP-Link because of the <span class="text-limeGreen font-extrabold">reliability</span>. Having so many crucial things in the building which have to be kept working. We knew we needed something which we could reply on, and also the back-end support from TP-Link. If we need help, the ability of just pick up the phone and get an instant chat. That was the most attractive thing to us. <br /><br />- Chris Jarred, Birchgrove’s IT Director',
    },
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
</script>

<main class="main-container">

  <!-- Hero -->
  <Hero cta="Claim My Kit Now" link="#Form" />

  <!-- Why Omada -->
  <Content4col title="Why Omada?" features={features} />

  <!-- What's In Your Demo Kit -->
  <section id="InYourKit" class="section-container">
    <div class="flex flex-col gap-12 max-w-[1920px] items-center mx-auto py-16 lg:py-28 px-8 lg:px-16">
      <h2>What's In <span class="border-b-3 border-neonGreen">Your</span> Omada Wi-Fi 7 Demo Kit?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {#each products as product}
          <ProductCard product={product} />
        {/each}
      </div>
      <!-- Choose Your Controller -->
      <h2 class="mt-8">Choose Your Controller</h2>
      <div class="flex flex-wrap justify-center gap-2 mb-6">
        {#each Object.entries(controllers) as [key, data]}
          <Tab
            value={key}
            label={`${data.name} (${data.price})`}
            selected={selected}
            setSelected={(val) => selected = val}
          />
        {/each}
      </div>

      <Comparison
        image={controller.image}
        name={controller.name}
        best={controller.best}
        description={controller.description}
        total={controller.total}
        msrp={controller.msrp}
        cta="Claim My Kit Now"
        link="#Form"
      />

    </div>
  </section>

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

<section class="section-container bg-gray-100">
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

<div class="contact-us-form">
<h4>Claim Your 50% Off on Demo Kit Now</h4>

<form action="/phppage/addPromotion.php" id="demo-form" method="post" role="form"><iframe frameborder="0" id="demo-form-iframe" name="hidden_iframe" scrolling="no" style="display:none;"></iframe><?php require_once($_SERVER['ROOT_DIR']."/phppage/front-vertication-code.php"); ?><input name="token" type="hidden" value="<?php echo setToken(); ?>" /> <input name="email_subscribe" type="hidden" value="1" /> <input name="promotion_type" type="hidden" value="$tpAppFolder_promotion_202505_omada-demo-kit" /> <input name="promotion_string" type="hidden" value="From|* Company Name|* Job Title|Business Phone|Company Website" /> <input name="BySiteId" type="hidden" value="$tpSiteId" /> <input name="col_1" type="hidden" value="<?php echo htmlspecialchars($_GET['utm_source'], ENT_QUOTES); ?>" />
<div class="tp-row">
<div class="tp-col tp-col-2 required">
<p><span style="color:red;">*</span> First Name</p>
<input maxlength="50" name="firstName" required="" type="text" /></div>

<div class="tp-col tp-col-2 required">
<p><span style="color:red;">*</span> Last Name</p>
<input maxlength="50" name="lastName" required="" type="text" /></div>
</div>

<div class="tp-row">
<div class="tp-col tp-col-1 required">
<p><span style="color:red;">*</span> Business Email</p>
<input maxlength="100" name="email" required="" type="email" /></div>
</div>

<div class="tp-row">
<div class="tp-col tp-col-1 required">
<p><span style="color:red;">*</span> Company Name</p>
<input maxlength="100" name="col_2" required="" type="text" /></div>
</div>

<div class="tp-row">
<div class="tp-col tp-col-2 required">
<p><span style="color:red;">*</span> Job Title</p>
<input maxlength="50" name="col_3" required="" type="text" /></div>

<div class="tp-col tp-col-2">
<p>Business Phone</p>
<input maxlength="50" name="col_4" type="text" /></div>
</div>

<div class="tp-row">
<div class="tp-col tp-col-1">
<p>Company Website</p>
<input maxlength="200" name="col_5" type="text" /></div>
</div>

<div class="tp-row">
<div class="tp-col tp-col-1 required"><label for="contact-us-privacy"><input id="contact-us-privacy" required="" type="checkbox" /> <b class="checkbox">&nbsp;</b> <span id="contact-us-privacy-text">I have read and agree to the <a class="contact-us-privacy-link" href="https://privacy.tp-link.com/web/official/privacy-policy?region=US" target="_blank">Privacy Policy</a>.</span> </label></div>

<div class="tp-col tp-col-1">
<div class="promotion-recaptcha">&nbsp;</div>
</div>
</div>

<div class="submit"><button>Submit</button></div>

<div class="form-result-success hidden">
<div id="demo-dialog">
<h2>Please confirm your signup in your email!</h2>

<p>Thank you for your submission! Please follow your email to complete the signup.<br />
<br />
Best Regards,<br />
Omada Team</p>
</div>
</div>

<div class="form-result-failed hidden">
<div id="demo-dialog">
<h2>Submission failed, please try again.</h2>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section class="d">
<div class="w-container">
<div class="text">
<p><strong>Terms &amp; Conditions:</strong></p>

<ul style="font-size:0.9em;">
	<li>The 50% discount on the Wi-Fi 7 demo kit applies only to eligible partners within the United States.</li>
	<li>The program aims to provide easy access to Omada for targeted B2B channel partners, such as resellers, installers, and MSPs. TP-Link reserves the right to select eligible partners only for the discounted demo kit. Submission does not guarantee receipt of the demo kit.</li>
	<li>LIMIT 1 DISCOUNT DEMO KIT for each eligible partner. Items are not allowed for resale.</li>
	<li>When Submit, the customer agrees to share the contact information with TP-Link and recieve email or call from TP-Link.</li>
</ul>
</div>
</div>
</section>
</div>
<script>
$("#demo-form").on("submit", function(){
typeof fbq == 'function' && fbq('trackCustom', 'submit-form-landing-omada-demo-kit', {promotion: 'demo-kit_promotion'});
})
</script><script src="https://static-page.tp-link.com/landing/omada-demo-kit/script.js"></script><script>
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
        // Remove loading modal if present
        document.querySelector('.tp-dialog')?.remove();

        // Grab the content block
        const contentBlock = document.querySelector(".form-result-success");
        if (contentBlock) {
          const modal = document.createElement("div");
          modal.className = "tp-dialog";
          modal.setAttribute("role", "dialog");
          modal.setAttribute("aria-modal", "true");
          modal.setAttribute("title", "TP-Link Dialog");

          modal.innerHTML = `
            <div class="tp-dialog-box">
              ${contentBlock.querySelector("#demo-dialog")?.innerHTML || ''}
            </div>
          `;

          // Add close button
          const closeBtn = document.createElement("button");
          closeBtn.innerHTML = "&times;";
          closeBtn.className = "tp-dialog-close";
          closeBtn.addEventListener("click", () => modal.remove());
          modal.querySelector(".tp-dialog-box")?.appendChild(closeBtn);

          document.body.appendChild(modal);
        }

        // Simulate thank-you URL for Reddit ad tracking
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
</main>