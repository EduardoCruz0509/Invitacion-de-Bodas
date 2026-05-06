const invitados = [
    { id: 1, invitado: "Juan Recillas", lugares: 4 },
    { id: 2, invitado: "Ivonne Recillas", lugares: 5 },
    { id: 3, invitado: "Elena Vargas", lugares: 2 },
    { id: 4, invitado: "Pamela López", lugares: 4 },
    { id: 5, invitado: "Elvira López", lugares: 4 },
    { id: 6, invitado: "Martha Vargas", lugares: 4 },
    { id: 7, invitado: "Maria Elena Olivera", lugares: 3 },
    { id: 8, invitado: "Martin Recillas", lugares: 4 },
    { id: 9, invitado: "Carmen Galicia", lugares: 9 },
    { id: 10, invitado: "Esperanza Galicia", lugares: 4 },
    { id: 11, invitado: "Valeria Trejo", lugares: 2 },
    { id: 12, invitado: "Jaime Galicia", lugares: 3 },
    { id: 13, invitado: "Juan Galicia", lugares: 4 },
    { id: 14, invitado: "Fermin Vargas", lugares: 4 },
    { id: 15, invitado: "Raul Martinez", lugares: 2 },
    { id: 16, invitado: "Flor Martinez", lugares: 1 },
    { id: 17, invitado: "Raul Matinez Cruz", lugares: 1 },
    { id: 18, invitado: "Gudelia Cruz", lugares: 1 },
    { id: 19, invitado: "Ricardo Martinez", lugares: 2 },
    { id: 20, invitado: "Leonardo Martinez", lugares: 2 },
    { id: 21, invitado: "Macario Cruz", lugares: 2 },
    { id: 22, invitado: "Eloy Martinez", lugares: 3 },
    { id: 23, invitado: "Alberto Martinez", lugares: 3 },
    { id: 24, invitado: "Genoveva Cruz", lugares: 2 },
    { id: 25, invitado: "Catarino Fernandez", lugares: 2 },
    { id: 26, invitado: "Hermilo Martinez", lugares: 4 },
    { id: 27, invitado: "Minerva Martinez", lugares: 5 },
    { id: 28, invitado: "Geremias Alvarado", lugares: 8 },
    { id: 29, invitado: "Eduardo Cruz", lugares: 2 },
    { id: 30, invitado: "Pamela Cuevas", lugares: 2 },
    { id: 31, invitado: "Liliana Cruz", lugares: 2 },
    { id: 32, invitado: "Ricardo Fuentes", lugares: 2 },
    { id: 33, invitado: "Liliana Rosas", lugares: 2 },
    { id: 34, invitado: "Maria Guerrero", lugares: 2 },
    { id: 35, invitado: "Alison Calderon", lugares: 2 },
    { id: 36, invitado: "Perla Castelazo", lugares: 4 },
    { id: 37, invitado: "Ana Maria Reyes", lugares: 2 },
    { id: 38, invitado: "Martin Garcia", lugares: 3 },
    { id: 39, invitado: "Roberto Garcia", lugares: 3 },
    { id: 40, invitado: "Jesus Garcia", lugares: 4 },
    { id: 41, invitado: "Enrique Garcia", lugares: 4 },
    { id: 42, invitado: "Jose Cruz", lugares: 2},
    { id: 43, invitado: "Gil Martinez", lugares: 2},
    { id: 44, invitado: "Erick Vargas", lugares: 4},
    { id: 45, invitado: "Max", lugares: 2}
];
function whoIsInvite(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const invitado = invitados.find(i => i.id == id);

    if(invitado){
        const mensaje = `¡Hola, <strong>${invitado.invitado}</strong>!<br> 
        Nos hace mucha ilusión compartir este día contigo. <br>
        Hemos reservado <strong>${invitado.lugares} lugares</strong> para ti.`;
        document.querySelector(".guest").innerHTML = mensaje;
    } else {
        document.querySelector(".guest").innerText = "¡Hola! Gracias por acompañarnos en este día especial.";
    }
}

whoIsInvite();

function actualizarContador() {
    const fechaBoda = new Date('September 5, 2026 18:00:00').getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia <= 0) {
        document.querySelector('.counter').innerHTML = "<h3>¡Hoy es el gran día!</h3>";
        return;
    }

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = d.toString().padStart(2, '0');
    document.getElementById('horas').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutos').innerText = m.toString().padStart(2, '0');
    document.getElementById('segundos').innerText = s.toString().padStart(2, '0');
}

setInterval(actualizarContador, 1000);
actualizarContador();

document.getElementById('btn-abrir-form').addEventListener('click', function() {
    const form = document.getElementById('contenedor-form');
    // Si está oculto, lo muestra. Si está visible, lo oculta.
    if (form.style.display === "none") {
        form.style.display = "block";
        this.innerText = "Cerrar Formulario";
    } else {
        form.style.display = "none";
        this.innerText = "Confirmar Asistencia";
    }
});
