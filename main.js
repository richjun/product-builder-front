const themeSwitch = document.getElementById('theme-switch');
const recommendBtn = document.getElementById('recommend-btn');
const recommendationDisplay = document.getElementById('recommendation-display');

// Theme switcher
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeSwitch.checked);
});

// Food database
const foodDatabase = {
    'Korean': [
        { name: '김치찌개', emoji: '🍲' },
        { name: '불고기', emoji: '🥩' },
        { name: '비빔밥', emoji: '🍚' },
        { name: '떡볶이', emoji: '🌶️' },
        { name: '삼겹살', emoji: '🥓' },
        { name: '닭강정', emoji: '🍗' },
        { name: '짜장면', emoji: '🍜' },
        { name: '순두부찌개', emoji: '🍲' }
    ],
    'Japanese': [
        { name: '초밥', emoji: '🍣' },
        { name: '라면', emoji: '🍜' },
        { name: '텐푸라', emoji: '🍤' },
        { name: '돈까스', emoji: '🍛' },
        { name: '우동', emoji: '🍜' },
        { name: '테리야키 치킨', emoji: '🍗' },
        { name: '규동', emoji: '🍱' },
        { name: '오코노미야키', emoji: '🥞' }
    ],
    'Chinese': [
        { name: '마파두부', emoji: '🌶️' },
        { name: '궁바오 치킨', emoji: '🍗' },
        { name: '볶음밥', emoji: '🍚' },
        { name: '훠궈', emoji: '🍲' },
        { name: '북경오리', emoji: '🦆' },
        { name: '볶음면', emoji: '🍜' },
        { name: '딤섬', emoji: '🥟' },
        { name: '탕수육', emoji: '🍖' }
    ],
    'Western': [
        { name: '스테이크', emoji: '🥩' },
        { name: '파스타', emoji: '🍝' },
        { name: '버거', emoji: '🍔' },
        { name: '피자', emoji: '🍕' },
        { name: '치킨 브레스트', emoji: '🍗' },
        { name: '연어', emoji: '🐟' },
        { name: '타코', emoji: '🌮' },
        { name: '바비큐 갈비', emoji: '🍖' }
    ],
    'Fusion': [
        { name: '한우 바비큐', emoji: '🥩' },
        { name: '포케 볼', emoji: '🥗' },
        { name: '쌀국수', emoji: '🍜' },
        { name: '태국 카레', emoji: '🍛' },
        { name: '부리또', emoji: '🌯' },
        { name: '버터 치킨', emoji: '🍛' },
        { name: '케밥', emoji: '🥙' },
        { name: '팔라펠', emoji: '🧆' }
    ]
};

// Category display names in Korean
const categoryNames = {
    'Korean': '한식',
    'Japanese': '일식',
    'Chinese': '중식',
    'Western': '양식',
    'Fusion': '퓨전'
};

// Get random recommendation
function getRandomRecommendation() {
    const categories = Object.keys(foodDatabase);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const foods = foodDatabase[randomCategory];
    const randomFood = foods[Math.floor(Math.random() * foods.length)];

    return {
        food: randomFood,
        category: randomCategory
    };
}

// Get category color
function getCategoryColor(category) {
    const colors = {
        'Korean': '#E74C3C',
        'Japanese': '#E91E63',
        'Chinese': '#F39C12',
        'Western': '#8B4513',
        'Fusion': '#9B59B6'
    };
    return colors[category] || '#333';
}

// Display recommendation
function displayRecommendation() {
    const { food, category } = getRandomRecommendation();

    recommendationDisplay.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'recommendation-card';

    const emoji = document.createElement('div');
    emoji.className = 'food-emoji';
    emoji.textContent = food.emoji;

    const name = document.createElement('div');
    name.className = 'food-name';
    name.textContent = food.name;

    const badge = document.createElement('div');
    badge.className = 'category-badge';
    badge.textContent = categoryNames[category];
    badge.style.backgroundColor = getCategoryColor(category);

    card.appendChild(emoji);
    card.appendChild(name);
    card.appendChild(badge);

    recommendationDisplay.appendChild(card);
}

// Event listener
recommendBtn.addEventListener('click', displayRecommendation);

// Generate recommendation on page load
displayRecommendation();
