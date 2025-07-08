<script>
  export let token;
  export let siteId;
  export let promotionType;
  export let thankYouUrl;
  export let terms = [];

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
            const basePath = thankYouUrl;
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

  <form action="/phppage/addPromotion.php" method="post" id="demo-form" class="flex flex-col lg:flex-row gap-8 max-w-[1920px] mx-auto py-16 lg:py-28 px-8 lg:px-16">
    
    <!-- Hidden backend inputs -->
    <input type="hidden" name="token" value={token} />
    <input type="hidden" name="email_subscribe" value="1" />
    <input type="hidden" name="promotion_type" value={promotionType} />
    <input type="hidden" name="promotion_string" value="From|* Company Name|* Job Title|Business Phone|Company Website" />
    <input type="hidden" name="BySiteId" value={siteId} />
    <input type="hidden" name="col_1" value="utm-source" />

    <!-- Left Column: Headings & Terms -->
    <div class="flex flex-col gap-8 w-full">
      <h2>Claim Your <span class="text-primaryGreen">50% Off</span><br />Omada Wi-Fi 7 Demo Kit</h2>
      <p class="large-paragraph">Interested? Sign up using the form before our limited promotion ends.</p>

      <div class="hidden lg:block">
        <h4 class="mb-2 large-paragraph font-medium">Terms & Conditions</h4>
        <ul class="list-disc pl-8 space-y-2 text-black/60">
          {#each terms as term}
            <li>{term}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Right Column: Inputs -->
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
          {#each terms as term}
            <li>{term}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Modal success content -->
    <div class="form-result-success hidden">
      <div id="demo-dialog">
        <h2 class="text-xl font-semibold">Please confirm your signup in your email!</h2>
        <p class="mt-2">Thank you for your submission! Please follow your email to complete the signup.</p>
        <p class="mt-4">Best Regards,<br />Omada Team</p>
      </div>
    </div>
  </form>