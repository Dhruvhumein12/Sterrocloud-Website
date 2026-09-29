/* =========================================
FAQ SYSTEM
========================================= */

window.addEventListener("load", () => {

    initializeFAQ();

});

function initializeFAQ() {

    const faqContainer =
        document.querySelector(".faq-container");

    if (!faqContainer) return;

    /*
    =========================================
    RENDER FAQ
    =========================================
    */

    faqContainer.innerHTML =
        faqData.map((faq) => {

            return `

                <div
                    class="faq-item overflow-hidden rounded-[30px] border border-white/[0.05] bg-white/[0.02] cursor-pointer">

                    <!-- Trigger -->
                    <button
                        class="faq-trigger flex w-full items-center justify-between gap-6 px-7 py-6 text-left cursor-pointer">

                        <!-- Title -->
                        <h3
                            class="font-['Clash_Display'] text-[28px] leading-tight text-white">

                            ${faq.question}

                        </h3>

                        <!-- Icon -->
                        <div
                            class="faq-icon relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.05] bg-white/[0.03]">

                            <!-- Plus -->
                            <i
                                data-lucide="plus"
                                class="faq-plus h-5 w-5 text-white/60">
                            </i>

                            <!-- Minus -->
                            <i
                                data-lucide="minus"
                                class="faq-minus h-5 w-5 text-white/60">
                            </i>

                        </div>

                    </button>

                    <!-- Content -->
                    <div class="faq-content">

                        <div class="faq-content-inner">

                            <div class="px-7 pb-7 pt-1">

                                <p
                                    class="max-w-[760px] font-['Satoshi'] text-[16px] leading-8 text-white/45">

                                    ${faq.answer}

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            `;

        }).join("");

    /*
    =========================================
    RELOAD ICONS
    =========================================
    */

    if (window.lucide) {

        lucide.createIcons();

    }

    /*
    =========================================
    FAQ ITEMS
    =========================================
    */

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const trigger =
            item.querySelector(".faq-trigger");

        trigger.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

}