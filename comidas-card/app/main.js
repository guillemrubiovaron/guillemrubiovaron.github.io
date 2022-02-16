import primeros from "/comidas-card/views/primeros.js";
import segundos from "/comidas-card/views/segundos.js";
import carrito from "/comidas-card/views/carrito.js";
import bebidas from "/comidas-card/views/bebidas.js";


const routes = {
    "/": { title: "primeros", render: primeros },
    "/segundos": { title: "segundos", render: segundos },
    "/bebidas": { title: "bebidas", render: bebidas },
    "/carrito": { title: "carrito", render: carrito },
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();


    }
};


window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});


window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);











