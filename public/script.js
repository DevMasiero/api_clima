document.getElementById('searchBtn').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const resultDiv = document.getElementById('result');

    if (!city) {
        resultDiv.innerHTML = '<p style="color: red;">Informe o nome de uma cidade.</p>';
        return;
    }

    try {
        const response = await fetch(`/clima?city=${encodeURIComponent(city)}`);
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }
        const data = await response.json();

        resultDiv.innerHTML = `
            <h2>${data.Cidade}, ${data.Pais}</h2>
            <p>Temperatura: ${data.Temperatura}</p>
            <p>Descrição: ${data.Descrição}</p>
            <p>Umidade: ${data.Umidade}</p>
            <p>Velocidade do Ar: ${data.VelocidadeDoAr}</p>
            <p>Última Atualização: ${data.UltimaAtualizacao}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});

const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const container = document.querySelector('.container');
    const result = document.querySelector('.result');

    container.classList.toggle('dark-mode');
    result.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleThemeBtn.textContent = 'Modo Claro';
    } else {
        toggleThemeBtn.textContent = 'Modo Escuro';
    }
});
