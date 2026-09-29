function initNavbar() {

    /*
 =========================================
 MOBILE MENU
 =========================================
 */

    const mobileMenuBtn =
        document.getElementById(
            "mobile-menu-btn"
        );

    const mobileMenu =
        document.getElementById(
            "mobile-menu"
        );

    const mobileMenuIcon =
        document.getElementById(
            "mobile-menu-icon"
        );

    let mobileMenuOpen =
        false;

    if (
        mobileMenuBtn &&
        mobileMenu
    ) {

        mobileMenuBtn.addEventListener(
            "click",
            () => {

                mobileMenuOpen =
                    !mobileMenuOpen;

                /*
                OPEN
                */

                if (
                    mobileMenuOpen
                ) {

                    mobileMenu.classList.remove(
                        "opacity-0",
                        "invisible",
                        "pointer-events-none",
                        "translate-y-[-12px]"
                    );

                    mobileMenu.classList.add(
                        "opacity-100",
                        "visible",
                        "pointer-events-auto",
                        "translate-y-0"
                    );

                    mobileMenuIcon.setAttribute(
                        "data-lucide",
                        "x"
                    );

                }

                /*
                CLOSE
                */

                else {

                    mobileMenu.classList.add(
                        "opacity-0",
                        "invisible",
                        "pointer-events-none",
                        "translate-y-[-12px]"
                    );

                    mobileMenu.classList.remove(
                        "opacity-100",
                        "visible",
                        "pointer-events-auto",
                        "translate-y-0"
                    );

                    mobileMenuIcon.setAttribute(
                        "data-lucide",
                        "menu"
                    );

                }

                lucide.createIcons();

            }
        );

    }

    /*
    =========================================
    DESKTOP DROPDOWNS
    =========================================
    */

    const dropdowns =
        document.querySelectorAll(
            ".nav-dropdown"
        );

    dropdowns.forEach(
        (dropdown) => {

            const menu =
                dropdown.querySelector(
                    ".nav-menu"
                );

            const chevron =
                dropdown.querySelector(
                    ".nav-chevron"
                );

            if (
                !menu
            ) return;

            let closeTimeout;

            /*
            =========================================
            OPEN
            =========================================
            */

            dropdown.addEventListener(
                "mouseenter",
                () => {

                    clearTimeout(
                        closeTimeout
                    );

                    menu.classList.remove(
                        "invisible",
                        "opacity-0",
                        "translate-y-3",
                        "pointer-events-none"
                    );

                    menu.classList.add(
                        "visible",
                        "opacity-100",
                        "translate-y-0",
                        "pointer-events-auto"
                    );

                    chevron?.classList.add(
                        "rotate-180"
                    );

                }
            );

            /*
            =========================================
            CLOSE
            =========================================
            */

            dropdown.addEventListener(
                "mouseleave",
                () => {

                    closeTimeout =
                        setTimeout(() => {

                            menu.classList.remove(
                                "visible",
                                "opacity-100",
                                "translate-y-0",
                                "pointer-events-auto"
                            );

                            menu.classList.add(
                                "invisible",
                                "opacity-0",
                                "translate-y-3",
                                "pointer-events-none"
                            );

                            chevron?.classList.remove(
                                "rotate-180"
                            );

                        }, 120);

                }
            );

        }
    );

}

/*
=========================================
INIT
=========================================
*/

window.addEventListener(
    "DOMContentLoaded",
    () => {

        initNavbar();

    }
);