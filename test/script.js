const questions = [
    {
        question: "1. Представь, что у тебя есть большая пустая картонная коробка. Что ты с ней сделаешь?",
        options: [
            { text: "Раскрашу её красками и нарисую узоры", trait: "creative" },
            { text: "Построю из неё сложный форт с ловушками", trait: "analytical" },
            { text: "Спрячусь в ней и буду читать интересную книгу", trait: "humanities" },
            { text: "Сделаю из неё мишень и буду бросать туда мячи", trait: "active" }
        ]
    },
    {
        question: "2. Если бы ты собирал команду супергероев, кем бы ты был?",
        options: [
            { text: "Тем, кто придумывает гениальный план победы", trait: "analytical" },
            { text: "Тем, кто бежит быстрее всех в атаку", trait: "active" },
            { text: "Тем, кто может договориться с любым злодеем", trait: "humanities" },
            { text: "Тем, кто создает красивую и магическую защиту", trait: "creative" }
        ]
    },
    {
        question: "3. Что тебе больше всего нравится смотреть в интернете?",
        options: [
            { text: "Смешные истории, блоги и рассказы людей", trait: "humanities" },
            { text: "Как собирают крутые механизмы или проходят сложные игры", trait: "analytical" },
            { text: "Спортивные трюки, танцы и челленджи", trait: "active" },
            { text: "Как рисуют, лепят или делают поделки своими руками", trait: "creative" }
        ]
    },
    {
        question: "4. Твой идеальный выходной — это...",
        options: [
            { text: "Поход в парк аттракционов, батуты или футбол во дворе", trait: "active" },
            { text: "Поход в музей иллюзий, сборка огромного Lego или шахматы", trait: "analytical" },
            { text: "Поход в театр, чтение новой книги или настольные игры с семьей", trait: "humanities" },
            { text: "Поход на мастер-класс по лепке, рисование или игра на музыкальном инструменте", trait: "creative" }
        ]
    },
    {
        question: "5. Какой школьный предмет кажется тебе самым нескучным?",
        options: [
            { text: "Математика или информатика", trait: "analytical" },
            { text: "Физкультура", trait: "active" },
            { text: "Чтение (литература) или языки", trait: "humanities" },
            { text: "ИЗО (рисование) или музыка", trait: "creative" }
        ]
    },
    {
        question: "6. Если бы у тебя была волшебная палочка, что бы ты наколдовал?",
        options: [
            { text: "Сделал бы мир ярче, добавив новые цвета и звуки", trait: "creative" },
            { text: "Создал бы крутых роботов-помощников", trait: "analytical" },
            { text: "Сделал бы так, чтобы животные могли разговаривать с людьми", trait: "humanities" },
            { text: "Наколдовал бы себе суперскорость или крылья", trait: "active" }
        ]
    },
    {
        question: "7. Ты строишь шалаш с друзьями. Какая твоя главная задача?",
        options: [
            { text: "Украшать шалаш внутри, рисовать флаг", trait: "creative" },
            { text: "Продумывать конструкцию, чтобы он не развалился", trait: "analytical" },
            { text: "Придумывать секретные пароли и правила для входа", trait: "humanities" },
            { text: "Таскать тяжелые ветки и лазать по деревьям", trait: "active" }
        ]
    },
    {
        question: "8. Вам задали сделать проект в школе. Что ты выберешь?",
        options: [
            { text: "Нарисовать красивый плакат или сделать макет", trait: "creative" },
            { text: "Провести научный эксперимент или собрать данные", trait: "analytical" },
            { text: "Написать интересный доклад и выступить перед классом", trait: "humanities" },
            { text: "Показать сценку или устроить соревнование", trait: "active" }
        ]
    },
    {
        question: "9. Представь, что ты попал на необитаемый остров. Что ты будешь делать в первую очередь?",
        options: [
            { text: "Попробую сделать из ракушек и листьев красивые вещи", trait: "creative" },
            { text: "Придумаю, как развести огонь и очистить воду", trait: "analytical" },
            { text: "Начну вести дневник путешественника", trait: "humanities" },
            { text: "Побегу исследовать остров и искать пещеры", trait: "active" }
        ]
    },
    {
        question: "10. Тебе подарили робота! Какого?",
        options: [
            { text: "Который умеет рисовать картины и играть музыку", trait: "creative" },
            { text: "Которого нужно программировать и собирать из деталей", trait: "analytical" },
            { text: "Который знает все языки мира и рассказывает сказки", trait: "humanities" },
            { text: "Который умеет делать сальто и играть в футбол", trait: "active" }
        ]
    },
    {
        question: "11. Если бы ты снимал кино, про что бы оно было?",
        options: [
            { text: "Про волшебные миры с невероятными костюмами и декорациями", trait: "creative" },
            { text: "Про гениальных ученых и космические корабли", trait: "analytical" },
            { text: "Про дружбу, загадки и интересные судьбы людей", trait: "humanities" },
            { text: "Про спорт, гонки и супергеройские битвы", trait: "active" }
        ]
    },
    {
        question: "12. Какая суперспособность тебе больше нравится?",
        options: [
            { text: "Умение менять цвета предметов и создавать иллюзии", trait: "creative" },
            { text: "Супермозг, чтобы решать любые задачи за секунду", trait: "analytical" },
            { text: "Чтение мыслей и понимание языков всех существ", trait: "humanities" },
            { text: "Невероятная сила и умение летать", trait: "active" }
        ]
    },
    {
        question: "13. На улице сильный дождь. Чем займешься дома?",
        options: [
            { text: "Буду лепить из пластилина, рисовать или делать оригами", trait: "creative" },
            { text: "Соберу сложный пазл или конструктор", trait: "analytical" },
            { text: "Почитаю книгу или придумаю свою историю", trait: "humanities" },
            { text: "Устрою полосу препятствий из подушек", trait: "active" }
        ]
    },
    {
        question: "14. Ты нашел старинный сундук. Что в нем?",
        options: [
            { text: "Красивые драгоценные камни и краски", trait: "creative" },
            { text: "Странные шестеренки и чертежи изобретений", trait: "analytical" },
            { text: "Древние свитки со стихами и легендами", trait: "humanities" },
            { text: "Волшебные сапоги, в которых можно бегать быстрее ветра", trait: "active" }
        ]
    },
    {
        question: "15. В какой летний лагерь ты бы поехал с наибольшим удовольствием?",
        options: [
            { text: "В художественный или музыкальный", trait: "creative" },
            { text: "В лагерь робототехники и программирования", trait: "analytical" },
            { text: "В языковой лагерь или лагерь журналистов", trait: "humanities" },
            { text: "В спортивный или туристический", trait: "active" }
        ]
    },
    {
        question: "16. Ты увидел сломанную игрушку. Твои действия?",
        options: [
            { text: "Раскрашу её так, чтобы она стала новой арт-поделкой", trait: "creative" },
            { text: "Разберу, чтобы понять, как она устроена, и попробую починить", trait: "analytical" },
            { text: "Придумаю грустную, но добрую историю о том, как она сломалась", trait: "humanities" },
            { text: "Буду использовать её детали для активной игры на улице", trait: "active" }
        ]
    },
    {
        question: "17. Твоя любимая часть в компьютерных играх?",
        options: [
            { text: "Создавать персонажа, строить красивые дома", trait: "creative" },
            { text: "Продумывать тактику и решать головоломки", trait: "analytical" },
            { text: "Следить за сюжетом и общаться с другими персонажами", trait: "humanities" },
            { text: "Участвовать в битвах, гонках и быстро нажимать на кнопки", trait: "active" }
        ]
    },
    {
        question: "18. Если бы ты встретил инопланетянина, что бы ты сделал?",
        options: [
            { text: "Нарисовал бы его портрет на память", trait: "creative" },
            { text: "Изучил бы устройство его космического корабля", trait: "analytical" },
            { text: "Попытался бы выучить его язык и узнать о его планете", trait: "humanities" },
            { text: "Предложил бы ему посоревноваться в беге", trait: "active" }
        ]
    },
    {
        question: "19. В зоопарке тебе больше всего нравится...",
        options: [
            { text: "Фотографировать животных или зарисовывать их", trait: "creative" },
            { text: "Читать таблички с фактами: где живут, сколько весят", trait: "analytical" },
            { text: "Слушать экскурсовода и задавать ему вопросы", trait: "humanities" },
            { text: "Бегать от вольера к вольеру, чтобы успеть посмотреть всех", trait: "active" }
        ]
    },
    {
        question: "20. Ты помогаешь маме готовить торт. Что тебе нравится больше всего?",
        options: [
            { text: "Украшать его кремом, ягодами и помадкой", trait: "creative" },
            { text: "Точно отмерять ингредиенты на весах по рецепту", trait: "analytical" },
            { text: "Разговаривать во время готовки и обсуждать праздник", trait: "humanities" },
            { text: "Быстро взбивать тесто венчиком или месить его руками", trait: "active" }
        ]
    },
    {
        question: "21. Если бы ты стал правителем сказочной страны, что бы ты сделал в первую очередь?",
        options: [
            { text: "Построил бы самый красивый дворец в мире", trait: "creative" },
            { text: "Придумал бы новые справедливые законы и умные машины", trait: "analytical" },
            { text: "Устроил бы праздник, где все бы рассказывали сказки и пели", trait: "humanities" },
            { text: "Собрал бы самую сильную и ловкую рыцарскую гвардию", trait: "active" }
        ]
    },
    {
        question: "22. На пляже ты предпочитаешь...",
        options: [
            { text: "Строить красивые замки из песка с башенками", trait: "creative" },
            { text: "Рыть каналы для воды и строить плотины", trait: "analytical" },
            { text: "Искать красивые ракушки и придумывать им истории", trait: "humanities" },
            { text: "Играть в волейбол, плавать наперегонки и нырять", trait: "active" }
        ]
    },
    {
        question: "23. Твой друг грустит. Как ты его утешишь?",
        options: [
            { text: "Нарисую для него смешную картинку или подарю поделку", trait: "creative" },
            { text: "Предложу сыграть в шахматы или решить вместе головоломку", trait: "analytical" },
            { text: "Выслушаю его, поддержу словами и расскажу интересную историю", trait: "humanities" },
            { text: "Позову его на улицу поиграть в догонялки или покататься на велике", trait: "active" }
        ]
    },
    {
        question: "24. Что тебе больше нравится делать в парке?",
        options: [
            { text: "Собирать красивые листья для гербария", trait: "creative" },
            { text: "Изучать насекомых через лупу", trait: "analytical" },
            { text: "Гулять с друзьями и болтать без умолку", trait: "humanities" },
            { text: "Кататься на роликах, самокате или лазать по веревочному парку", trait: "active" }
        ]
    },
    {
        question: "25. Если бы ты написал книгу, о чем бы она была?",
        options: [
            { text: "Это был бы комикс с крутыми иллюстрациями, которые я сам нарисовал", trait: "creative" },
            { text: "Это была бы энциклопедия про космос или динозавров", trait: "analytical" },
            { text: "Это был бы рассказ про настоящую дружбу и приключения", trait: "humanities" },
            { text: "Это была бы книга про выживание в джунглях и спортивные рекорды", trait: "active" }
        ]
    }
];

const resultsData = {
    creative: {
        title: "🎨 Творец и Художник",
        icon: "🎨",
        color: "#ff9ff3",
        desc: "У тебя потрясающее воображение! Ты видишь мир ярче, чем другие, и умеешь создавать красоту из ничего. Твой мозг постоянно генерирует новые идеи.",
        recommendation: "Ребенку отлично подойдут направления, связанные с искусством: художественная школа, курсы дизайна (в т.ч. компьютерного), лепка из глины, музыкальная школа или архитектурный кружок. Поощряйте нестандартное мышление и давайте пространство для самовыражения."
    },
    analytical: {
        title: "🧩 Гениальный Изобретатель",
        icon: "🧠",
        color: "#54a0ff",
        desc: "У тебя отличная логика! Ты любишь разбираться, как всё устроено, и можешь решить самую сложную головоломку. Ты внимателен к деталям и любишь порядок.",
        recommendation: "Обратите внимание на кружки по робототехнике, программированию (например, Scratch, Python или Minecraft-программирование), шахматы, авиамоделирование, электротехнику или углубленную занимательную математику."
    },
    humanities: {
        title: "📚 Мастер Слов и Историй",
        icon: "✍️",
        color: "#1dd1a1",
        desc: "Ты отлично понимаешь эмоции людей, умеешь интересно рассказывать и обладаешь богатым внутренним миром. К тебе часто тянутся другие за советом.",
        recommendation: "Ребенку могут понравиться курсы журналистики, писательского мастерства, изучение иностранных языков. Также стоит попробовать театральные кружки, где важна дикция, эмпатия и умение передавать эмоции."
    },
    active: {
        title: "⚡ Неутомимый Энерджайзер",
        icon: "🏃",
        color: "#ff6b6b",
        desc: "Ты полон энергии, любишь движение и не боишься трудностей! Твоя координация, реакция и выносливость на высоте.",
        recommendation: "Важно направить энергию в нужное русло. Попробуйте спортивные секции: командные игры (футбол, баскетбол), боевые искусства, плавание, танцы или легкую атлетику. Физическая активность критически важна для успешной учебы таких детей."
    }
};

let currentQuestionIndex = 0;
let scores = {
    creative: 0,
    analytical: 0,
    humanities: 0,
    active: 0
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progress = document.getElementById('progress');
const questionCounter = document.getElementById('question-counter');
const detailedScores = document.getElementById('detailed-scores');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', resetQuiz);

// Перемешивание вариантов ответа (чтобы не было паттернов 1-2-3-4)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    questionCounter.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;

    // Обновление прогресс-бара
    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progress.style.width = `${progressPercent}%`;

    // Копируем и перемешиваем опции для текущего вопроса
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(option.trait));
        optionsContainer.appendChild(button);
    });
}

function selectOption(trait) {
    scores[trait]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    // Определение победившего качества
    let maxScore = 0;
    let dominantTrait = '';
    
    for (const trait in scores) {
        if (scores[trait] > maxScore) {
            maxScore = scores[trait];
            dominantTrait = trait;
        }
    }

    const result = resultsData[dominantTrait];

    document.getElementById('result-icon').textContent = result.icon;
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-desc').textContent = result.desc;
    document.getElementById('parents-recommendation').textContent = result.recommendation;
    
    // Отрисовка детальной статистики
    detailedScores.innerHTML = '<strong>📊 Детализация талантов:</strong><br><br>';
    const totalQuestions = questions.length;
    
    for (const trait in resultsData) {
        const traitData = resultsData[trait];
        const score = scores[trait];
        const percent = Math.round((score / totalQuestions) * 100);
        
        detailedScores.innerHTML += `
            <div class="score-bar-container">
                <div class="score-label">
                    <span>${traitData.icon} ${traitData.title.split(' ')[1]} ${traitData.title.split(' ')[2] || ''}</span>
                    <span>${percent}% (${score})</span>
                </div>
                <div class="score-bar-bg">
                    <div class="score-bar-fill" style="width: ${percent}%; background-color: ${traitData.color};"></div>
                </div>
            </div>
        `;
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    scores = { creative: 0, analytical: 0, humanities: 0, active: 0 };
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    progress.style.width = '0%';
}
