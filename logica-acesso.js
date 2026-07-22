function abrirModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function fecharModais() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
}

// Fecha o modal se o usuário clicar no fundo escuro
window.onclick = function(event) {
    if (event.target.className === 'modal-overlay') {
        fecharModais();
    }
}


function abrirModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function fecharModais() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
}

window.onclick = function(event) {
    if (event.target.className === 'modal-overlay') {
        fecharModais();
    }
}
