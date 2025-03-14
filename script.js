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
    verifyButton.disabled = !(cardName.value && cardNumber.value && cardExpiry.value && cardCvv.value);
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

function formatCardNumber(value) {
    // Formata o número do cartão para o padrão "**** **** **** ****"
    return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}
