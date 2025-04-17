const respostasCorretas = {
    A3: true,
    B2: true,
    C2: true,
    D2: true,
    E4: true,
    F2: true,
    G3: true,
    H3: true,
    I1: true,
    J3: true,
    K1: true,
    L3: true,
    M3: true,
    N3: true,
    O1: true,
    P3: true
  };
  
  const perguntas = document.querySelectorAll('.pr3');
  
  perguntas.forEach(pergunta => {
    const botoes = pergunta.querySelectorAll('.but');
  
    botoes.forEach(botao => {
      botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('selecionado'));
  
        botao.classList.add('selecionado');
      });
    });
  });
  document.getElementById('enviar').addEventListener('click', (e) => {
    e.preventDefault();
  
    const selecionados = document.querySelectorAll('.but.selecionado');
    const resultadoDiv = document.getElementById('resultado');
  
    if (selecionados.length !== perguntas.length) {
      resultadoDiv.style.color = 'rgb(170, 4, 4)';
      resultadoDiv.innerHTML = 'Responda todas as perguntas antes de enviar.';
      
      return;
    }
  
    let acertos = 0;
  
    selecionados.forEach(botao => {
      if (respostasCorretas[botao.id]) {
        acertos++;
        botao.style.backgroundColor = 'rgb(0, 102, 42)';
      } else {
        botao.style.backgroundColor = 'rgb(170, 4, 4)';
      }
    });
  
    resultadoDiv.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${perguntas.length}</strong> perguntas.`;
  
    if (acertos === perguntas.length) {
      resultadoDiv.style.color = 'black';
      resultadoDiv.innerHTML += '<br>Parabéns! Você acertou tudo! 🎉';
    } else if (acertos >= perguntas.length / 2) {
      resultadoDiv.style.color = 'black';
      resultadoDiv.innerHTML += '<br>Bom trabalho! Mas dá pra melhorar 😉';
    } else {
      resultadoDiv.style.color = 'black';
      resultadoDiv.innerHTML += '<br>Continue praticando! 💪';
    }
  });

