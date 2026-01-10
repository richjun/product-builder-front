const themeSwitch = document.getElementById('theme-switch');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lottoGamesContainer = document.getElementById('lotto-games');

// Theme switcher
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeSwitch.checked);
});

// Generate lottery numbers
generateBtn.addEventListener('click', generateLottoGames);

function generateLottoGames() {
    lottoGamesContainer.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'lotto-game';

        const gameLabel = document.createElement('span');
        gameLabel.className = 'game-label';
        gameLabel.textContent = `Game ${i}`;
        gameDiv.appendChild(gameLabel);

        const numbersDiv = document.createElement('div');
        numbersDiv.className = 'lotto-numbers';

        const numbers = generateUniqueNumbers(6, 1, 45);
        numbers.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.className = 'lotto-number';
            numberDiv.textContent = number;
            numberDiv.style.backgroundColor = getNumberColor(number);
            numbersDiv.appendChild(numberDiv);
        });

        gameDiv.appendChild(numbersDiv);
        lottoGamesContainer.appendChild(gameDiv);
    }
}

function generateUniqueNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getNumberColor(number) {
    const hue = (number * 137.508) % 360; // Golden angle approximation
    return `hsl(${hue}, 90%, 65%)`; // Increased saturation and lightness
}

// Copy to clipboard
copyBtn.addEventListener('click', () => {
    const games = lottoGamesContainer.querySelectorAll('.lotto-game');
    if (games.length === 0) {
        alert('Please generate numbers first!');
        return;
    }

    let textToCopy = '';
    games.forEach((game, index) => {
        const numbers = Array.from(game.querySelectorAll('.lotto-number')).map(n => n.textContent).join(', ');
        textToCopy += `Game ${index + 1}: ${numbers}\n`;
    });

    navigator.clipboard.writeText(textToCopy.trim()).then(() => {
        alert('Lottery numbers copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy numbers: ', err);
        alert('Failed to copy numbers. Please try again.');
    });
});

// Generate numbers on page load
generateLottoGames();