const pricingGrid =
    document.getElementById(
        "vps-pricing-grid"
    );

const cpuButtons =
    document.querySelectorAll(
        ".vps-cpu-btn"
    );

const locationButtons =
    document.querySelectorAll(
        ".vps-location-btn"
    );

let currentCPU =
    sessionStorage.getItem(
        "vn_vps_cpu"
    ) || "ryzen9950x";

let currentLocation =
    sessionStorage.getItem(
        "vn_vps_location"
    ) || "india";

/*
=========================================
VALIDATE CPU
=========================================
*/

function ensureValidCPU() {

    const locationData =
        VPSPricingData[
        currentLocation
        ];

    if (
        !locationData[
        currentCPU
        ]
    ) {

        currentCPU =
            Object.keys(
                locationData
            )[0];

        sessionStorage.setItem(
            "vn_vps_cpu",
            currentCPU
        );

    }

}

/*
=========================================
FORMAT PRICE
=========================================
*/

function formatPrice(priceUSD) {

    if (
        typeof window.formatPrice ===
        "function"
    ) {

        return window.formatPrice(
            priceUSD
        );

    }

    return `$${priceUSD}`;

}

/*
=========================================
RENDER PRICING
=========================================
*/

function renderVPSPricing() {

    ensureValidCPU();

    pricingGrid.innerHTML = "";

    const locationData =
        VPSPricingData[
        currentLocation
        ];

    const cpuData =
        locationData[
        currentCPU
        ];

    cpuData.plans.forEach(
        (plan) => {

            const featured =
                plan.featured === true;

            const unavailable =
                plan.available === false;

            const comingSoon =
                plan.comingSoon === true;

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                `
                group relative cursor-pointer overflow-hidden rounded-[34px]
                border
                ${featured
                    ? "border-violet-500/20 bg-violet-500/[0.05]"
                    : "border-white/[0.05] bg-white/[0.02]"
                }
                p-7 backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-violet-500/20
                `;

            /*
            =========================================
            TOP BADGES
            =========================================
            */

            let topBadges = "";

            if (
                plan.badge
            ) {

                topBadges += `
                <div class="inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/[0.08] px-3 py-1">

                    <div class="h-2 w-2 rounded-full bg-violet-400">
                    </div>

                    <span class="font-['Satoshi'] text-[11px] font-medium text-violet-200">

                        ${plan.badge}

                    </span>

                </div>
                `;

            }

            if (
                plan.discount
            ) {

                topBadges += `
                <div class="ml-2 inline-flex items-center rounded-full border border-emerald-500/15 bg-emerald-500/[0.08] px-3 py-1">

                    <span class="font-['Satoshi'] text-[11px] font-medium text-emerald-300">

                        ${plan.discount}

                    </span>

                </div>
                `;

            }

            /*
            =========================================
            FEATURES
            =========================================
            */

            const featuresHTML =
                cpuData.features.map(
                    feature => `
                    
                    <div class="flex items-center gap-2">

                        <div class="h-1.5 w-1.5 rounded-full bg-violet-400">
                        </div>

                        <span class="font-['Satoshi'] text-[13px] text-white/55">

                            ${feature}

                        </span>

                    </div>

                `
                ).join("");

            /*
            =========================================
            CTA
            =========================================
            */

            let ctaButton = "";

            if (
                comingSoon
            ) {

                ctaButton =
                    `
                    <button
                        class="mt-7 inline-flex h-[54px] w-full items-center justify-center rounded-2xl border border-yellow-500/10 bg-yellow-500/[0.05] font-['Satoshi'] text-[14px] font-semibold text-yellow-200">

                        Coming Soon

                    </button>
                    `;

            }

            else if (
                unavailable
            ) {

                ctaButton =
                    `
                    <button
                        class="mt-7 inline-flex h-[54px] w-full items-center justify-center rounded-2xl border border-red-500/10 bg-red-500/[0.05] font-['Satoshi'] text-[14px] font-semibold text-red-200">

                        Notify Me

                    </button>
                    `;

            }

            else {

                ctaButton =
                    `
                    <a
                        class="mt-7 inline-flex h-[54px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 font-['Satoshi'] text-[14px] font-semibold text-white transition-all duration-300 hover:shadow-[0_0_45px_rgba(139,92,246,.28)] cursor-pointer" href="https://billing.Sterrocloud.com" target="_blank">

                        Deploy VPS

                    </a>
                    `;

            }

            /*
            =========================================
            CPU OPTIONS
            =========================================
            */

            let cpuOptionsHTML = "";

            if (
                cpuData.cpuOptions
            ) {

                cpuOptionsHTML =
                    `
                    <div class="mt-6 rounded-2xl border border-white/[0.05] bg-black/20 p-4">

                        <p class="font-['Satoshi'] text-[10px] uppercase tracking-[0.18em] text-white/28">

                            CPU Models

                        </p>

                        <div class="mt-3 space-y-2">

                            ${cpuData.cpuOptions.map(cpu => `
                            
                                <div class="flex items-start gap-2">

                                    <div class="mt-[7px] h-1.5 w-1.5 rounded-full bg-violet-400">
                                    </div>

                                    <span class="font-['Satoshi'] text-[12px] leading-5 text-white/50">

                                        ${cpu}

                                    </span>

                                </div>

                            `).join("")}

                        </div>

                    </div>
                    `;

            }

            card.innerHTML =
                `
                <div class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    <div class="absolute -right-16 top-0 h-44 w-44 rounded-full bg-violet-500/10 blur-[90px]">
                    </div>

                </div>

                <div class="relative z-10">

                    ${topBadges}

                    <div class="mt-5 flex items-start justify-between gap-6">

                        <div>

                            <p class="font-['Satoshi'] text-[12px] uppercase tracking-[0.22em] text-violet-300/60">

                                ${cpuData.virtualization}

                            </p>

                            <h3 class="mt-4 font-['Clash_Display'] text-[42px] leading-none tracking-[-0.06em] text-white">

                                ${plan.ram}GB

                            </h3>

                            <p class="mt-3 font-['Satoshi'] text-[15px] text-white/45">

                                ${plan.cpu} vCPU • ${cpuData.ramType}

                            </p>

                        </div>

                        <div class="text-right">

                            <p class="font-['Satoshi'] text-[11px] uppercase tracking-[0.18em] text-white/25">

                                Starting At

                            </p>

                            <h4 class="mt-3 font-['Clash_Display'] text-[46px] leading-none tracking-wide text-white">

                                ${formatPrice(plan.price)}

                            </h4>

                            <span class="mt-2 block font-['Satoshi'] text-[13px] text-white/35">

                                /month

                            </span>

                        </div>

                    </div>

                    <div class="mt-8 grid grid-cols-2 gap-3">

                        <div class="rounded-2xl border border-white/[0.05] bg-black/20 p-4">

                            <p class="font-['Satoshi'] text-[10px] uppercase tracking-[0.18em] text-white/25">

                                Storage

                            </p>

                            <h4 class="mt-2 font-['Satoshi'] text-[16px] font-medium text-white">

                                ${plan.storage}GB NVMe

                            </h4>

                        </div>

                        <div class="rounded-2xl border border-white/[0.05] bg-black/20 p-4">

                            <p class="font-['Satoshi'] text-[10px] uppercase tracking-[0.18em] text-white/25">

                                Network

                            </p>

                            <h4 class="mt-2 font-['Satoshi'] text-[16px] font-medium text-white">

                                ${plan.uplink}

                            </h4>

                        </div>

                    </div>

                    <div class="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/[0.05] pt-6">

                        ${featuresHTML}

                    </div>

                    ${cpuOptionsHTML}

                    ${ctaButton}

                </div>
                `;

            pricingGrid.appendChild(
                card
            );

        });

}

/*
=========================================
UPDATE CPU BUTTONS
=========================================
*/

function updateActiveCPU() {

    const locationData =
        VPSPricingData[
        currentLocation
        ];

    cpuButtons.forEach(
        (button) => {

            const cpu =
                button.dataset.vpsCpu;

            const supported =
                !!locationData[
                cpu
                ];

            const active =
                cpu === currentCPU;

            button.classList.remove(
                "border-violet-500/20",
                "bg-violet-500/[0.06]",
                "border-white/[0.05]",
                "bg-white/[0.02]",
                "opacity-40",
                "cursor-not-allowed"
            );

            if (
                !supported
            ) {

                button.classList.add(
                    "opacity-40",
                    "cursor-not-allowed",
                    "border-white/[0.05]",
                    "bg-white/[0.02]"
                );

                return;

            }

            if (
                active
            ) {

                button.classList.add(
                    "border-violet-500/20",
                    "bg-violet-500/[0.06]"
                );

            }

            else {

                button.classList.add(
                    "border-white/[0.05]",
                    "bg-white/[0.02]"
                );

            }

        });

}

/*
=========================================
UPDATE LOCATION BUTTONS
=========================================
*/

function updateActiveLocation() {

    locationButtons.forEach(
        (button) => {

            const active =
                button.dataset.vpsLocation ===
                currentLocation;

            button.classList.remove(
                "border-violet-500/20",
                "bg-violet-500/[0.06]",
                "border-white/[0.05]",
                "bg-white/[0.02]"
            );

            if (
                active
            ) {

                button.classList.add(
                    "border-violet-500/20",
                    "bg-violet-500/[0.06]"
                );

            }

            else {

                button.classList.add(
                    "border-white/[0.05]",
                    "bg-white/[0.02]"
                );

            }

        });

}

/*
=========================================
CPU EVENTS
=========================================
*/

cpuButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const selectedCPU =
                    button.dataset.vpsCpu;

                const locationData =
                    VPSPricingData[
                    currentLocation
                    ];

                if (
                    !locationData[
                    selectedCPU
                    ]
                ) {

                    return;

                }

                currentCPU =
                    selectedCPU;

                sessionStorage.setItem(
                    "vn_vps_cpu",
                    currentCPU
                );

                updateActiveCPU();

                renderVPSPricing();

            }
        );

    }
);

/*
=========================================
LOCATION EVENTS
=========================================
*/

locationButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                currentLocation =
                    button.dataset.vpsLocation;

                sessionStorage.setItem(
                    "vn_vps_location",
                    currentLocation
                );

                ensureValidCPU();

                updateActiveLocation();

                updateActiveCPU();

                renderVPSPricing();

            }
        );

    }
);

/*
=========================================
CURRENCY EVENT
=========================================
*/

window.addEventListener(
    "vn_currency_changed",
    () => {

        renderVPSPricing();

    }
);

/*
=========================================
INIT
=========================================
*/

ensureValidCPU();

updateActiveCPU();

updateActiveLocation();

renderVPSPricing();