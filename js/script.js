const invitados = [
    {id: 1, invitado: "Eduardo Cruz Flores", lugares: 4},
    {id: 2, invitado: "Jose Luis Cruz Martinez", lugares: 2},
    {id: 3, invitado: "Maria Fernanda Cruz Martinez", lugares: 2}
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