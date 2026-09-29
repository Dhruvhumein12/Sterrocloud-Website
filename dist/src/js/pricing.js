window.addEventListener("load", () => {

    /*
    =========================================
    ELEMENTS
    =========================================
    */

    const pricingGrid =
        document.getElementById("pricing-grid");

    const cpuButtons =
        document.querySelectorAll(".cpu-selector");

    const locationButtons =
        document.querySelectorAll(".location-selector");

    if (!pricingGrid) return;

    /*
    =========================================
    STATE
    =========================================
    */

    let currentCPU =
        sessionStorage.getItem("vn_cpu")
        || "ryzen9";

    let currentLocation =
        sessionStorage.getItem("vn_location")
        || "india";

    /*
    =========================================
    RENDER
    =========================================
    */

    function renderPricing() {

        const cpuData =
            pricingData[currentLocation][currentCPU];

        pricingGrid.innerHTML = "";

        /*
        =========================================
        CPU UNAVAILABLE
        =========================================
        */

        if (!cpuData.available) {

            pricingGrid.innerHTML = `

                <div
                    class="col-span-full rounded-[32px] border border-red-500/10 bg-red-500/[0.03] p-12 text-center">

                    <h3
                        class="font-['Clash_Display'] text-3xl text-white">

                        Processor Unavailable

                    </h3>

                    <p
                        class="mx-auto mt-4 max-w-lg font-['Satoshi'] text-white/45">

                        This processor is currently unavailable in this region.

                    </p>

                </div>

            `;

            return;

        }

        /*
        =========================================
        PLANS
        =========================================
        */

        cpuData.plans.forEach((plan) => {

            pricingGrid.innerHTML += `

                <div
                    class="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-white/[0.06]">

                    <!-- Glow -->
                    <div
                        class="absolute inset-0 bg-linear-to-b from-violet-500/[0.03] to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
                    </div>

                    <!-- Top -->
                    <div class="relative z-10 p-6 cursor-pointer">

                        <!-- Header -->
                        <div class="flex items-start justify-between gap-4">

                            <div>

                                <p
                                    class="font-['Satoshi'] text-sm text-white/35">

                                    Minecraft Server

                                </p>

                                <h3
                                    class="mt-2 font-['Clash_Display'] text-3xl tracking-tight text-white">

                                    ${plan.name}

                                </h3>

                            </div>

                            <div class="flex flex-col items-end gap-2">

                                <!-- RAM -->
                                <div
                                    class="rounded-2xl border border-violet-500/10 bg-violet-500/[0.08] px-4 py-2 text-sm font-medium text-violet-200">

                                    ${plan.ram}GB

                                </div>

                                <!-- STOCK -->
                                ${!plan.stock ? `

                                    <div
                                        class="rounded-full border border-red-500/15 bg-red-500/10 px-3 py-1 text-[11px] font-medium text-red-300">

                                        Out of Stock

                                    </div>

                                ` : ""}

                            </div>

                        </div>

                        <!-- PRICE -->
                        <div class="mt-8 flex items-end gap-2">

                            <span
                                class="font-['Clash_Display'] text-5xl tracking-tight text-white">

                                ${window.formatPrice(plan.price)}

                            </span>

                            <span
                                class="mb-1 font-['Satoshi'] text-white/35">

                                /month

                            </span>

                        </div>

                        <!-- CPU -->
                        <div
                            class="mt-6 flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-4">

                            <div
                                class="h-2 w-2 rounded-full bg-violet-400">
                            </div>

                            <span
                                class="font-['Satoshi'] text-sm text-white/70">

                                ${cpuData.label}

                            </span>

                        </div>

                        <!-- Specs -->
                        <div
                            class="mt-5 grid grid-cols-2 gap-4">

                            <div
                                class="rounded-2xl border border-white/6 bg-white/[0.03] p-4">

                                <p
                                    class="font-['Satoshi'] text-[11px] uppercase tracking-[0.18em] text-white/25">

                                    CPU

                                </p>

                                <p
                                    class="mt-2 font-['Clash_Display'] text-2xl text-white">

                                    ${plan.cpu}

                                </p>

                            </div>

                            <div
                                class="rounded-2xl border border-white/6 bg-white/[0.03] p-4">

                                <p
                                    class="font-['Satoshi'] text-[11px] uppercase tracking-[0.18em] text-white/25">

                                    Memory

                                </p>

                                <p
                                    class="mt-2 font-['Clash_Display'] text-2xl text-white">

                                    ${plan.ram}GB ${cpuData.ramType}

                                </p>

                            </div>

                            <div
                                class="rounded-2xl border border-white/6 bg-white/[0.03] p-4">

                                <p
                                    class="font-['Satoshi'] text-[11px] uppercase tracking-[0.18em] text-white/25">

                                    Storage

                                </p>

                                <p
                                    class="mt-2 font-['Clash_Display'] text-2xl text-white">

                                    ${plan.storage}GB

                                </p>

                            </div>

                            <div
                                class="rounded-2xl border border-white/6 bg-white/[0.03] p-4">

                                <p
                                    class="font-['Satoshi'] text-[11px] uppercase tracking-[0.18em] text-white/25">

                                    Backups

                                </p>

                                <p
                                    class="mt-2 font-['Clash_Display'] text-2xl text-white">

                                    ${plan.backups}

                                </p>

                            </div>

                        </div>

                        <!-- Features -->
                        <div
                            class="mt-7 space-y-4 border-t border-white/6 pt-7">

                            <div
                                class="flex items-center gap-3 font-['Satoshi'] text-white/65">

                                <div
                                    class="h-2 w-2 rounded-full bg-violet-400">
                                </div>

                                Advanced DDoS Protection

                            </div>

                            <div
                                class="flex items-center gap-3 font-['Satoshi'] text-white/65">

                                <div
                                    class="h-2 w-2 rounded-full bg-violet-400">
                                </div>

                                Instant Deployment

                            </div>

                            <div
                                class="flex items-center gap-3 font-['Satoshi'] text-white/65">

                                <div
                                    class="h-2 w-2 rounded-full bg-violet-400">
                                </div>

                                Premium Game Panel

                            </div>

                        </div>

                    </div>

                    <!-- Bottom -->
                    <div
                        class="border-t border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5">

                        ${plan.stock ? `

                            <a
                                class="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-2xl border border-violet-400/10 bg-[#111827] font-['Satoshi'] text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/20 hover:bg-[#161F34] cursor-pointer" href="https://billing.Sterrocloud.com" target="_blank">

                                <div
                                    class="absolute inset-0 bg-linear-to-r from-violet-500/0 via-violet-500/[0.08] to-fuchsia-500/0 opacity-0 transition duration-300 group-hover:opacity-100">
                                </div>

                                <span class="relative z-10">

                                    Deploy Server

                                </span>

                            </a>

                        ` : `

                            <button
                                disabled
                                class="flex h-12 w-full cursor-not-allowed items-center justify-center rounded-2xl border border-red-500/10 bg-red-500/[0.04] font-['Satoshi'] text-sm font-medium text-red-300">

                                Out of Stock

                            </button>

                        `}

                    </div>

                </div>

            `;

        });

    }

    /*
=========================================
CPU SELECTOR
=========================================
*/

    cpuButtons.forEach((button) => {

        button.addEventListener("click", () => {

            cpuButtons.forEach((btn) => {

                btn.classList.remove(
                    "border-violet-500/20",
                    "bg-violet-500/[0.05]"
                );

                btn.classList.add(
                    "border-white/6"
                );

            });

            button.classList.remove(
                "border-white/6"
            );

            button.classList.add(
                "border-violet-500/20",
                "bg-violet-500/[0.05]"
            );

            currentCPU =
                button.dataset.cpu;

            /*
            SAVE SESSION
            */

            sessionStorage.setItem(
                "vn_cpu",
                currentCPU
            );

            renderPricing();

        });

    });

    /*
=========================================
LOCATION SELECTOR
=========================================
*/

    locationButtons.forEach((button) => {

        button.addEventListener("click", () => {

            locationButtons.forEach((btn) => {

                btn.classList.remove(
                    "border-violet-500/20",
                    "bg-violet-500/[0.05]"
                );

                btn.classList.add(
                    "border-white/6"
                );

            });

            button.classList.remove(
                "border-white/6"
            );

            button.classList.add(
                "border-violet-500/20",
                "bg-violet-500/[0.05]"
            );

            currentLocation =
                button.dataset.location;

            /*
            SAVE SESSION
            */

            sessionStorage.setItem(
                "vn_location",
                currentLocation
            );

            renderPricing();

        });

    });

    /*
    =========================================
    CURRENCY UPDATE
    =========================================
    */

    window.addEventListener(
        "currencyChanged",
        () => {

            renderPricing();

        }
    );

    /*
    =========================================
    INIT
    =========================================
    */

    renderPricing();

});