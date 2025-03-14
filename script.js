// Elementos do DOM
const startButton = document.getElementById('startButton');
const formSection = document.getElementById('formSection');
const resultSection = document.getElementById('resultSection');
const cardForm = document.getElementById('cardForm');
const resetButton = document.getElementById('resetButton');

// Inputs e displays do cartão
const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const cardExpiry = document.getElementById('cardExpiry');
const cardCvv = document.getElementById('cardCvv');
const selfieUpload = document.getElementById('selfieUpload');

const cardNameDisplay = document.getElementById('cardNameDisplay');
const cardNumberDisplay = document.getElementById('cardNumberDisplay');
const cardExpiryDisplay = document.getElementById('cardExpiryDisplay');
const cardCvvDisplay = document.getElementById('cardCvvDisplay');

// Event Listeners
startButton.addEventListener('click', function () {
    formSection.style.display = 'block';
    startButton.style.display = 'none'; // Esconde o botão "Teste seu cartão agora!"
});

// Função para verificar se todos os campos estão preenchidos
function checkFormValidity() {
    // Adicione a lógica para verificar se todos os campos estão preenchidos
}

// Adiciona eventos de entrada para verificar a validade do formulário
cardName.addEventListener('input', checkFormValidity);
cardNumber.addEventListener('input', checkFormValidity);
cardExpiry.addEventListener('input', checkFormValidity);
cardCvv.addEventListener('input', checkFormValidity);

cardForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Exibindo os dados do cartão no cartão visual
    cardNameDisplay.textContent = cardName.value || 'SEU NOME';
    cardNumberDisplay.textContent = formatCardNumber(cardNumber.value);
    cardExpiryDisplay.textContent = cardExpiry.value || 'MM/AA';
    cardCvvDisplay.textContent = cardCvv.value || '***';

    // Aqui você pode adicionar sua lógica de verificação
    // Para o propósito deste exemplo, vamos assumir que qualquer dado inserido é inseguro
    resultSection.style.display = 'block';
    formSection.style.display = 'none';
});

resetButton.addEventListener('click', function () {
    // Resetando os campos do formulário
    cardName.value = '';
    cardNumber.value = '';
    cardExpiry.value = '';
    cardCvv.value = '';
    selfieUpload.value = ''; // Resetando o campo de upload

    // Resetando os displays do cartão
    cardNameDisplay.textContent = 'SEU NOME';
    cardNumberDisplay.textContent = '**** **** **** ****';
    cardExpiryDisplay.textContent = 'MM/AA';
    cardCvvDisplay.textContent = '***';

    // Ocultando a seção de resultados e mostrando o formulário novamente
    resultSection.style.display = 'none';
    formSection.style.display = 'none';
    startButton.style.display = 'block'; // Mostrando o botão "Teste seu cartão agora!"
});

// Função para formatar o número do cartão
function formatCardNumber(value) {
    // Formata o número do cartão para o padrão "**** **** **** ****"
    return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

// Visualizando a selfie
selfieUpload.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Para visualizar a imagem, você pode criar um elemento <img> e definir seu src
            const imgPreview = document.createElement('img');
            imgPreview.src = e.target.result;
            imgPreview.style.width = '100%'; // Ajuste o tamanho conforme necessário
            imgPreview.style.height = 'auto';

            // Adicione a imagem à seção do formulário ou a um local apropriado
            document.getElementById('formSection').appendChild(imgPreview);
        };
        reader.readAsDataURL(file); // Lê o arquivo como uma URL
    }
});
