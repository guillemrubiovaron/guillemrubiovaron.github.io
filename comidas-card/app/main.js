import primeros from "/views/primeros.js";
import segundos from "/views/segundos.js";
import carrito from "/views/carrito.js";
import bebidas from "/views/bebidas.js";


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











