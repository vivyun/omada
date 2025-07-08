<script>
  export let cta = '';
  export let link = '';
</script>

<section id="Hero" class="section-container bg-[url(/images/hero_m.png)] lg:bg-[url(/images/hero.png)] bg-center bg-cover">
    <div class="container-row-to-col justify-between items-center max-w-[1920px] mx-auto py-16 px-8 lg:px-16">
      <div class="flex flex-col gap-8 text-white w-full max-w-2xl">
        <h1>Explore Omada’s Business-Grade Wi-Fi 7 Demo Kit</h1>
        <p class="large-paragraph text-white/80">
          Business-grade networking gear with lifetime free cloud management.<br />
          Built for system integrators ready to scale.
        </p>
        <a href={link} class="btn-primary self-start">{cta}</a>
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