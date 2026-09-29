/* =========================================
   Sterrocloud Currency System
========================================= */

async function initializeCurrencySystem() {

    /*
    =========================================
    WAIT FOR NAVBAR
    =========================================
    */

    const waitForNavbar = () => {

        return new Promise((resolve) => {

            const interval = setInterval(() => {

                const selector =
                    document.getElementById(
                        "currency-selector"
                    );

                if (selector) {

                    clearInterval(interval);

                    resolve();

                }

            }, 50);

        });

    };

    await waitForNavbar();

    /*
    =========================================
    ELEMENTS
    =========================================
    */

    const selector =
        document.getElementById(
            "currency-selector"
        );

    const dropdown =
        document.getElementById(
            "currency-dropdown"
        );

    const selectedCurrency =
        document.getElementById(
            "selected-currency"
        );

    const chevron =
        document.getElementById(
            "currency-chevron"
        );

    const options =
        document.querySelectorAll(
            ".currency-option"
        );

    const mobileCurrencyButtons =
        document.querySelectorAll(
            ".mobile-currency-btn"
        );

    /*
    =========================================
    GLOBAL STATE
    =========================================
    */

    window.currencyState = {

        currency:
            localStorage.getItem(
                "vn_currency"
            ) || "USD",

        rates: {

            USD: 1,
            INR: 83,
            EUR: 0.92

        }

    };

    /*
    =========================================
    GLOBAL EXCHANGE RATES
    =========================================
    */

    window.VN_EXCHANGE_RATES =
        window.currencyState.rates;

    /*
    =========================================
    FETCH LIVE RATES
    =========================================
    */

    async function fetchRates() {

        try {

            const response =
                await fetch(
                    "https://open.er-api.com/v6/latest/USD"
                );

            const data =
                await response.json();

            if (data?.rates) {

                window.currencyState.rates = {

                    USD: 1,
                    INR: data.rates.INR,
                    EUR: data.rates.EUR

                };

                /*
                =========================================
                UPDATE GLOBAL RATES
                =========================================
                */

                window.VN_EXCHANGE_RATES =
                    window.currencyState.rates;

                dispatchCurrencyChange();

            }

        } catch (error) {

            console.error(
                "Exchange rate fetch failed:",
                error
            );

        }

    }

    await fetchRates();

    /*
    =========================================
    DROPDOWN STATE
    =========================================
    */

    let dropdownTimeout;

    /*
    =========================================
    OPEN DROPDOWN
    =========================================
    */

    function openDropdown() {

        clearTimeout(
            dropdownTimeout
        );

        dropdown.style.opacity =
            "1";

        dropdown.style.visibility =
            "visible";

        dropdown.style.pointerEvents =
            "auto";

        dropdown.style.transform =
            "translateY(0px)";

        chevron.style.transform =
            "rotate(180deg)";

    }

    /*
    =========================================
    CLOSE DROPDOWN
    =========================================
    */

    function closeDropdown() {

        dropdownTimeout =
            setTimeout(() => {

                dropdown.style.opacity =
                    "0";

                dropdown.style.visibility =
                    "hidden";

                dropdown.style.pointerEvents =
                    "none";

                dropdown.style.transform =
                    "translateY(10px)";

                chevron.style.transform =
                    "rotate(0deg)";

            }, 120);

    }

    /*
    =========================================
    DROPDOWN EVENTS
    =========================================
    */

    selector.addEventListener(
        "mouseenter",
        openDropdown
    );

    selector.addEventListener(
        "mouseleave",
        closeDropdown
    );

    dropdown.addEventListener(
        "mouseenter",
        () => {

            clearTimeout(
                dropdownTimeout
            );

        }
    );

    dropdown.addEventListener(
        "mouseleave",
        closeDropdown
    );

    /*
    =========================================
    UPDATE UI
    =========================================
    */

    function updateUI(currency) {

        /*
        =========================================
        DESKTOP LABEL
        =========================================
        */

        selectedCurrency.textContent =
            currency;

        /*
        =========================================
        DESKTOP OPTIONS
        =========================================
        */

        options.forEach((option) => {

            const optionCurrency =
                option.dataset.currency;

            const check =
                option.querySelector(
                    ".currency-check"
                );

            option.classList.remove(
                "bg-white/[0.06]",
                "text-white"
            );

            check.classList.add(
                "hidden"
            );

            if (
                optionCurrency ===
                currency
            ) {

                option.classList.add(
                    "bg-white/[0.06]",
                    "text-white"
                );

                check.classList.remove(
                    "hidden"
                );

            }

        });

        /*
        =========================================
        MOBILE BUTTONS
        =========================================
        */

        mobileCurrencyButtons.forEach(
            (button) => {

                button.classList.remove(
                    "border-violet-500/30",
                    "bg-violet-500/[0.12]",
                    "text-white"
                );

                if (
                    button.dataset.currency ===
                    currency
                ) {

                    button.classList.add(
                        "border-violet-500/30",
                        "bg-violet-500/[0.12]",
                        "text-white"
                    );

                }

            }
        );

    }

    /*
    =========================================
    DISPATCH EVENTS
    =========================================
    */

    function dispatchCurrencyChange() {

        /*
        =========================================
        MAIN EVENT
        =========================================
        */

        window.dispatchEvent(
            new CustomEvent(
                "vn_currency_changed",
                {

                    detail: {

                        currency:
                            window.currencyState
                                .currency,

                        rates:
                            window.currencyState
                                .rates

                    }

                }
            )
        );

        /*
        =========================================
        LEGACY SUPPORT
        =========================================
        */

        window.dispatchEvent(
            new CustomEvent(
                "currencyChanged",
                {

                    detail: {

                        currency:
                            window.currencyState
                                .currency,

                        rates:
                            window.currencyState
                                .rates

                    }

                }
            )
        );

    }

    /*
    =========================================
    CHANGE CURRENCY
    =========================================
    */

    function changeCurrency(currency) {

        /*
        =========================================
        UPDATE STATE
        =========================================
        */

        window.currencyState.currency =
            currency;

        localStorage.setItem(
            "vn_currency",
            currency
        );

        /*
        =========================================
        UPDATE UI
        =========================================
        */

        updateUI(currency);

        /*
        =========================================
        DISPATCH
        =========================================
        */

        dispatchCurrencyChange();

    }

    /*
    =========================================
    DESKTOP OPTION CLICK
    =========================================
    */

    options.forEach((option) => {

        option.addEventListener(
            "click",
            () => {

                const currency =
                    option.dataset.currency;

                changeCurrency(
                    currency
                );

                closeDropdown();

            }
        );

    });

    /*
    =========================================
    MOBILE BUTTON CLICK
    =========================================
    */

    mobileCurrencyButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const currency =
                        button.dataset.currency;

                    changeCurrency(
                        currency
                    );

                }
            );

        }
    );

    /*
    =========================================
    GLOBAL FORMATTER
    =========================================
    */

    window.formatPrice =
        function (usdPrice) {

            const currency =
                window.currencyState
                    .currency;

            const rates =
                window.currencyState
                    .rates;

            const converted =
                usdPrice *
                (
                    rates[currency] || 1
                );

            return new Intl.NumberFormat(

                currency === "INR"
                    ? "en-IN"
                    : "en-US",

                {

                    style: "currency",

                    currency,

                    maximumFractionDigits:
                        currency === "INR"
                            ? 0
                            : 2

                }

            ).format(converted);

        };

    /*
    =========================================
    INIT
    =========================================
    */

    updateUI(
        window.currencyState.currency
    );

    dispatchCurrencyChange();

}

/*
=========================================
START
=========================================
*/

initializeCurrencySystem();