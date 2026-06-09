function simularReciclagem() {
  const resultado = document.getElementById("resultado");
  resultado.textContent =
    "Satélite reciclado com sucesso! Materiais reaproveitados ♻️";
}

function simularRota() {
  const resultado = document.getElementById("resultado");

  resultado.textContent = "Calculando rota... ⏳";

  setTimeout(() => {
    const detritos = Math.floor(Math.random() * 100);

    let mensagem = "";

    if (detritos < 30) {
      mensagem = `🟢 Rota segura (${detritos} detritos)`;
    } else if (detritos < 70) {
      mensagem = `🟡 Ajustando rota (${detritos} detritos)`;
    } else {
      mensagem = `🔴 Rota alterada (${detritos} detritos)`;
    }

    resultado.textContent = mensagem;
  }, 1500);
}