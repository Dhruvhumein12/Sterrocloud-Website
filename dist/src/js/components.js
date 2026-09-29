async function loadComponent(id, file) {

    const response = await fetch(file);

    const data = await response.text();

    document.getElementById(id).innerHTML = data;

    lucide.createIcons();

    if (id === "navbar") {

        initNavbar();
    }
}

loadComponent(
    "navbar",
    "/src/components/common/navbar.html"
);

loadComponent(
    "hero",
    "/src/components/sections/hero/minecraft-hero.html"
);

loadComponent(
    "footer",
    "/src/components/common/footer.html"
);