// ============ GAME DATA ============
const situations = [
    // Телефонные звонки (1-10)
    { id: 1, text: '"Здравствуйте, это служба безопасности банка. С вашей карты пытаются украсть деньги. Срочно назовите CVV-код для блокировки!"', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 2, text: '"Это майор Петров из полиции. Ваш сын попал в ДТП. Чтобы замять дело, нужен перевод 50 000 на этот номер..."', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 3, text: '"Вам звонят из Пенсионного фонда. Вы не получили выплату 15 000. Назовите паспортные данные для зачисления."', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 4, text: '"Это техподдержка вашего сотового оператора. Ваш номер заблокируют через час. Продиктуйте код из SMS для продления."', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 5, text: '"Вас беспокоят из поликлиники. Мы обзваниваем пациентов с подозрением на опасное заболевание. Назовите СНИЛС и адрес."', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 6, text: '"Это ваш руководитель. Я сейчас на совещании, срочно займи мне 30 000, скинь на этот номер, вечером всё объясню."', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 7, text: '"Привет, это Ваня (друг сына). Он потерял телефон и просил передать, чтобы вы перевели деньги на лечение кота. Вот карта..."', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 8, text: '"Добрый день, это налоговая. У вас задолженность, завтра арест счетов. Оплатите прямо сейчас по ссылке, которую я пришлю."', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 9, text: '"Это администратор вашего дома. Срочно замените домофонный ключ, оставьте заявку, назвав код из SMS."', type: '📞 Телефонный звонок', category: 'phone' },
    { id: 10, text: '"Привет, это HR. Заполни анкету для перевода зарплаты на новую платформу, скину ссылку в WhatsApp."', type: '📞 Телефонный звонок', category: 'phone' },
    // Цифровые сообщения (11-20)
    { id: 11, text: 'SMS: «Вы выиграли iPhone! Заберите приз по ссылке http://win-iphone-free.xyz/claim»', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 12, text: 'Email от «Google»: «Обнаружен подозрительный вход в аккаунт из Китая. Срочно подтвердите пароль: [ссылка]»', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 13, text: 'Сообщение в Telegram от «друга»: «Привет! Я случайно отправил тебе код подтверждения, можешь переслать?»', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 14, text: 'Пуш-уведомление: «Ваш антивирус истекает! Продлите лицензию за 99₽» (от неизвестного приложения)', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 15, text: 'WhatsApp: «Это база данных всех водителей России, ищи своих знакомых: [ссылка на файл .apk]»', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 16, text: 'Email от «Почты России»: «Ваша посылка задержана. Оплатите таможенный сбор по ссылке.»', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 17, text: 'LinkedIn: «Я HR из Google, у нас есть вакансия для вас. Для интервью скачайте приложение Zoom_Setup.exe»', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 18, text: 'SMS: «Мам, это мой новый номер. Кинь 5000 до завтра на этот счёт, пожалуйста!»', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 19, text: 'Всплывающее окно в браузере: «Ваш компьютер заражён! Позвоните в Microsoft по номеру 8-800-...»', type: '💻 Цифровое сообщение', category: 'digital' },
    { id: 20, text: 'Facebook: «ШОК! Твоё фото найдено на сайте знакомств! Посмотри: [ссылка]»', type: '💻 Цифровое сообщение', category: 'digital' },
    // Очная социальная инженерия (21-30)
    { id: 21, text: 'В офис заходит человек в спецовке: «Я из IT-отдела, нужно проверить ваш компьютер на уязвимости. Отойдите на минутку.»', type: '🎭 Очная атака', category: 'physical' },
    { id: 22, text: 'Курьер: «Распишитесь за посылку, только мне нужен код из SMS для подтверждения доставки.»', type: '🎭 Очная атака', category: 'physical' },
    { id: 23, text: 'Незнакомец на улице: «Извините, у меня сел телефон, очень срочно нужен звонок. Дайте позвонить, я только номер наберу.»', type: '🎭 Очная атака', category: 'physical' },
    { id: 24, text: 'В кафе: «Девушка, вы обронили купюру (протягивает 5000). Ой, а у вас приложение банка открыто, покажите, я проверю, может, вам перевод ошибочный пришёл.»', type: '🎭 Очная атака', category: 'physical' },
    { id: 25, text: '«Сосед» у подъезда: «Я ключи забыл, впустите. У меня там вода бежит, я сантехника вызвал!»', type: '🎭 Очная атака', category: 'physical' },
    { id: 26, text: 'В коворкинге: «Привет, я тут работаю, Wi-Fi пароль не подскажешь? И заодно — у тебя зарядка есть? Я на минуту ноутбук подключу.»', type: '🎭 Очная атака', category: 'physical' },
    { id: 27, text: 'На заправке: «У меня карта не работает, давайте я вам наличку, а вы мне бензин своей картой оплатите?» (протягивает фальшивые купюры)', type: '🎭 Очная атака', category: 'physical' },
    { id: 28, text: 'В очереди: «Вы в банк? Я тоже. Давайте я помогу вам в терминале, тут сложное меню, я уже разобрался.»', type: '🎭 Очная атака', category: 'physical' },
    { id: 29, text: 'Звонок в дверь: «Соцопрос! Всего 5 минут. Заодно покажите, пожалуйста, где у вас розетка, мне планшет зарядить.»', type: '🎭 Очная атака', category: 'physical' },
    { id: 30, text: 'На конференции: «Я спикер, потерял бейдж. Проводите меня в зелёную комнату, я покажу свой доклад на вашем ноутбуке.»', type: '🎭 Очная атака', category: 'physical' },
];

const correctReactions = [
    '«Я перезвоню в банк по номеру с официального сайта. Не называю никаких данных.»',
    '«Положу трубку и перезвоню родственнику на известный мне номер.»',
    '«Не перехожу по ссылке. Проверю информацию через официальное приложение.»',
    '«Не называю код из SMS никому и никогда.»',
    '«Спрашиваю ФИО звонящего и перезваниваю в организацию через официальный контакт.»',
    '«Кладу трубку. Начальник не просит деньги в мессенджере, это запрещено политикой компании.»',
    '«Проверяю адрес отправителя письма. Это фишинг — удаляю.»',
    '«Не даю незнакомцу свой телефон. Предлагаю сам набрать номер и включить громкую связь.»',
    '«Не впускаю без удостоверения. Звоню в управляющую компанию для подтверждения.»',
    '«Отвечаю: у меня нет наличных, могу оплатить картой самостоятельно на стойке.»',
    '«Не отхожу от компьютера, не впускаю незнакомца в систему. Требую официальную заявку.»',
    '«Игнорирую всплывающее окно, закрываю браузер через диспетчер задач.»',
    '«Сообщаю охране о подозрительном человеке без бейджа.»',
    '«Проверяю ссылку через сервис проверки URL. Вижу подмену домена — не перехожу.»',
    '«Отвечаю: отправьте официальный запрос на почту, я передам в отдел безопасности.»',
];

const wrongReactions = [
    '«Ой, спасибо, что предупредили! Диктую CVV: 123...»',
    '«Конечно, перевожу! Только скажите, на какой счёт!»',
    '«Да, это мой паспорт: серия 1234 номер 567890...»',
    '«Держите код из SMS: 89341.»',
    '«СНИЛС? Сейчас, в приложении госуслуг найду...»',
    '«Хорошо, начальник, уже перевожу.»',
    '«Бедный кот! Конечно, сколько нужно?»',
    '«Перехожу по ссылке, ввожу логин и пароль.»',
    '«Да, друг, лови код: 49210.»',
    '«О, надо скачать файл и открыть. Вдруг там знакомые!»',
    '«Да, проходите к компьютеру. Вот мой пароль для входа.»',
    '«Звоню по номеру из всплывающего окна и даю удалённый доступ.»',
    '«Конечно, даю телефон. Только недолго.»',
    '«Ой, 5000 купюра! Да, показываю приложение, смотрите.»',
    '«Wi-Fi пароль — 12345678. Подключайтесь, сосед!»',
];

// ============ GAME STATE ============
const state = {
    mode: 'solo',
    position: 0,
    correctCount: 0,
    wrongCount: 0,
    round: 0,
    maxRounds: 30,
    gameOver: false,
    currentSituation: null,
    selectedReaction: null,
    hand: [],
    rerollsLeft: 3,
    situationDeck: [],
    correctDeck: [],
    wrongDeck: [],
    hackerTurn: false,
    log: [],
};

// ============ DOM REFERENCES ============
const dom = {
    modeBtns: document.querySelectorAll('.mode-btn'),
    scoreCorrect: document.getElementById('scoreCorrect'),
    scoreWrong: document.getElementById('scoreWrong'),
    scorePosition: document.getElementById('scorePosition'),
    scoreRound: document.getElementById('scoreRound'),
    gameTrack: document.getElementById('gameTrack'),
    situationCard: document.getElementById('situationCard'),
    reactionCards: document.getElementById('reactionCards'),
    btnDraw: document.getElementById('btnDraw'),
    btnSubmit: document.getElementById('btnSubmit'),
    btnNewHand: document.getElementById('btnNewHand'),
    rerollsLeft: document.getElementById('rerollsLeft'),
    logContainer: document.getElementById('logContainer'),
    modalVictory: document.getElementById('modalVictory'),
    modalTitle: document.getElementById('modalTitle'),
    modalText: document.getElementById('modalText'),
    modalStats: document.getElementById('modalStats'),
    modalRules: document.getElementById('modalRules'),
};

// ============ UTILITY FUNCTIONS ============
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function addLog(text, type = 'info') {
    const now = new Date();
    const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    state.log.push({ text, type, time });
    renderLog();
}

// ============ INITIALIZATION ============
function initDecks() {
    state.situationDeck = shuffle([...situations]);
    state.correctDeck = shuffle([...correctReactions]);
    state.wrongDeck = shuffle([...wrongReactions]);
    state.position = 0;
    state.correctCount = 0;
    state.wrongCount = 0;
    state.round = 0;
    state.gameOver = false;
    state.currentSituation = null;
    state.selectedReaction = null;
    state.rerollsLeft = 3;
    state.hackerTurn = false;
    state.log = [];
    state.hand = [];
}

function dealHand() {
    const hand = [];
    const numCorrect = Math.random() < 0.5 ? 2 : 1;
    const numWrong = 3 - numCorrect;

    for (let i = 0; i < numCorrect; i++) {
        if (state.correctDeck.length === 0) state.correctDeck = shuffle([...correctReactions]);
        hand.push({ text: state.correctDeck.pop(), isCorrect: true });
    }
    for (let i = 0; i < numWrong; i++) {
        if (state.wrongDeck.length === 0) state.wrongDeck = shuffle([...wrongReactions]);
        hand.push({ text: state.wrongDeck.pop(), isCorrect: false });
    }
    state.hand = shuffle(hand);
    state.selectedReaction = null;
}

// ============ RENDER FUNCTIONS ============
function buildTrack() {
    dom.gameTrack.innerHTML = '';

    const cells = [
        { num: 0, icon: '😱', label: 'Старт', cls: '' },
        { num: 1, icon: '', label: '1', cls: '' },
        { num: 2, icon: '', label: '2', cls: '' },
        { num: 3, icon: '🔗', label: '3', cls: 'special' },
        { num: 4, icon: '', label: '4', cls: '' },
        { num: 5, icon: '🛡️', label: '5', cls: 'bonus' },
        { num: 6, icon: '', label: '6', cls: '' },
        { num: 7, icon: '💧', label: '7', cls: 'danger-cell' },
        { num: 8, icon: '', label: '8', cls: '' },
        { num: 9, icon: '', label: '9', cls: '' },
        { num: 10, icon: '🔒', label: 'Финиш', cls: 'finish' },
    ];

    cells.forEach(cell => {
        const div = document.createElement('div');
        div.className = `cell ${cell.cls}`;
        div.id = `cell-${cell.num}`;
        div.innerHTML = `
            <span class="cell-icon">${cell.icon}</span>
            <span class="cell-num">${cell.label}</span>
        `;
        dom.gameTrack.appendChild(div);
    });

    updatePlayerMarker();
}

function updatePlayerMarker() {
    document.querySelectorAll('.player-marker').forEach(m => m.remove());
    const cell = document.getElementById(`cell-${state.position}`);
    if (cell) {
        const marker = document.createElement('div');
        marker.className = 'player-marker user';
        cell.appendChild(marker);
    }
}

function renderReactionCards() {
    if (state.hand.length === 0) {
        dom.reactionCards.innerHTML = `
            <div class="reaction-card correct-card disabled">Нажмите «Тянуть ситуацию»</div>
            <div class="reaction-card wrong-card disabled">чтобы получить</div>
            <div class="reaction-card correct-card disabled">карты реакций</div>
        `;
        return;
    }
    
    dom.reactionCards.innerHTML = state.hand.map((card, i) => {
        const cls = card.isCorrect ? 'correct-card' : 'wrong-card';
        const sel = state.selectedReaction === i ? 'selected' : '';
        const disabled = state.gameOver ? 'disabled' : '';
        return `
            <div class="reaction-card ${cls} ${sel} ${disabled}"
                 data-index="${i}"
                 title="${card.isCorrect ? '✅ Правильная реакция' : '❌ Неправильная реакция'}">
                ${card.text}
            </div>
        `;
    }).join('');

    // ВАЖНОЕ ИСПРАВЛЕНИЕ: Добавляем обработчики событий после обновления DOM
    const cards = dom.reactionCards.querySelectorAll('.reaction-card:not(.disabled)');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            console.log('Card clicked, index:', index); // Для отладки
            selectReaction(index);
        });
    });
}

function renderLog() {
    if (state.log.length === 0) {
        dom.logContainer.innerHTML = '<div class="log-entry info"><span class="log-time">--:--</span>Журнал пуст. Начните игру!</div>';
        return;
    }
    dom.logContainer.innerHTML = state.log.slice(-20).map(entry => {
        const cls = entry.type === 'success' ? 'success' : entry.type === 'error' ? 'error' : 'info';
        return `<div class="log-entry ${cls}"><span class="log-time">${entry.time}</span>${entry.text}</div>`;
    }).join('');
    dom.logContainer.scrollTop = dom.logContainer.scrollHeight;
}

function updateUI() {
    dom.scoreCorrect.textContent = state.correctCount;
    dom.scoreWrong.textContent = state.wrongCount;
    dom.scorePosition.textContent = state.position;
    dom.scoreRound.textContent = `${state.round}/${state.maxRounds}`;
    dom.rerollsLeft.textContent = `Осталось: ${state.rerollsLeft}`;

    // ИСПРАВЛЕНИЕ: Улучшенная логика блокировки кнопок
    if (state.gameOver) {
        dom.btnDraw.disabled = true;
        dom.btnSubmit.disabled = true;
        dom.btnNewHand.disabled = true;
    } else if (state.mode === 'duo' && state.hackerTurn) {
        dom.btnDraw.disabled = false;
        dom.btnSubmit.disabled = true;
        dom.btnNewHand.disabled = true;
    } else if (state.currentSituation && !state.gameOver) {
        dom.btnDraw.disabled = true;
        // ИСПРАВЛЕНИЕ: Кнопка активна только когда выбрана реакция И есть текущая ситуация
        dom.btnSubmit.disabled = (state.selectedReaction === null);
        dom.btnNewHand.disabled = (state.rerollsLeft <= 0);
        
        // Отладка
        console.log('UpdateUI - hasSituation:', !!state.currentSituation, 
                    'selectedReaction:', state.selectedReaction, 
                    'submitDisabled:', dom.btnSubmit.disabled);
    } else {
        dom.btnDraw.disabled = false;
        dom.btnSubmit.disabled = true;
        dom.btnNewHand.disabled = true;
    }

    updatePlayerMarker();
    renderReactionCards();
}

// ============ GAME ACTIONS ============
function selectMode(mode) {
    state.mode = mode;
    dom.modeBtns.forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    resetGame();
    if (mode === 'duo') {
        addLog('Режим: Хакер vs Пользователь. Хакер выбирает ситуацию, Пользователь — реакцию.', 'info');
        addLog('Сейчас ход Хакера — нажмите «Тянуть ситуацию».', 'info');
        state.hackerTurn = true;
    } else if (mode === 'spectate') {
        addLog('Режим тренировки: все карты открыты, можно учиться!', 'info');
    }
    updateUI();
}

function drawSituation() {
    if (state.gameOver) return;
    if (state.mode === 'duo' && !state.hackerTurn) {
        addLog('⛔ Сейчас не ваш ход! Дождитесь хода Хакера.', 'error');
        return;
    }

    if (state.situationDeck.length === 0) {
        state.situationDeck = shuffle([...situations]);
        addLog('🔄 Колода ситуаций перемешана заново.', 'info');
    }

    state.currentSituation = state.situationDeck.pop();
    state.selectedReaction = null;
    dealHand();
    state.round++;

    dom.situationCard.classList.remove('revealed');
    void dom.situationCard.offsetWidth; // reflow
    dom.situationCard.classList.add('revealed');
    dom.situationCard.innerHTML = `
        <span class="card-tag">${state.currentSituation.type}</span>
        <p class="card-text">${state.currentSituation.text}</p>
        <span class="card-type">Ситуация #${state.currentSituation.id} | Раунд ${state.round}</span>
    `;

    addLog(`📜 Ситуация #${state.currentSituation.id}: ${state.currentSituation.text.substring(0, 60)}...`, 'info');

    if (state.mode === 'duo') {
        state.hackerTurn = false;
        addLog('👤 Теперь ход Пользователя — выберите реакцию.', 'info');
    }

    updateUI();
}

function selectReaction(index) {
    console.log('selectReaction called with index:', index); // Отладка
    
    if (state.gameOver) {
        console.log('Game is over, ignoring selection');
        return;
    }
    if (state.mode === 'duo' && state.hackerTurn) {
        addLog('⛔ Сейчас ход Хакера, Пользователь не может выбирать реакцию.', 'error');
        return;
    }
    if (!state.currentSituation) {
        addLog('⚠️ Сначала нужно вытянуть ситуацию!', 'error');
        return;
    }
    
    state.selectedReaction = index;
    console.log('selectedReaction set to:', state.selectedReaction); // Отладка
    
    addLog(`🃏 Выбрана реакция: "${state.hand[index].text.substring(0, 40)}..."`, 'info');
    updateUI();
}

function submitReaction() {
    console.log('submitReaction called'); // Отладка
    
    if (state.gameOver || state.selectedReaction === null || !state.currentSituation) {
        console.log('Cannot submit - gameOver:', state.gameOver, 
                    'selectedReaction:', state.selectedReaction, 
                    'currentSituation:', !!state.currentSituation);
        return;
    }
    if (state.mode === 'duo' && state.hackerTurn) return;

    const reaction = state.hand[state.selectedReaction];
    const isCorrect = reaction.isCorrect;
    const oldPosition = state.position;

    if (isCorrect) {
        state.correctCount++;
        state.position = Math.min(10, state.position + 1);
        addLog(`✅ Верно! +1 шаг. Позиция: ${oldPosition} → ${state.position}`, 'success');

        if (state.position === 5) {
            state.position = Math.min(10, state.position + 1);
            addLog('🛡️ Бонус клетки 5: Двухфакторная защита! +1 дополнительный шаг!', 'success');
        }
    } else {
        state.wrongCount++;
        state.position = Math.max(0, state.position - 1);
        addLog(`❌ Ошибка! -1 шаг. Позиция: ${oldPosition} → ${state.position}`, 'error');

        if (state.position === 7 && oldPosition !== 7) {
            state.position = Math.max(0, state.position - 1);
            addLog('💧 Клетка 7 — Слив данных! Дополнительный -1 шаг!', 'error');
        }
    }

    state.currentSituation = null;
    state.selectedReaction = null;
    state.hand = [];

    if (state.mode === 'duo') {
        state.hackerTurn = true;
        addLog('🎭 Ход переходит к Хакеру. Тяните новую ситуацию!', 'info');
    }

    // Check victory
    if (state.position >= 10) {
        state.position = 10;
        state.gameOver = true;
        const statsText = `Верных ответов: ${state.correctCount} | Ошибок: ${state.wrongCount} | Раундов: ${state.round}`;
        dom.modalTitle.textContent = '🔒 Вы в безопасности!';
        dom.modalText.textContent = 'Поздравляем! Вы успешно защитились от социального инженера и дошли до финиша!';
        dom.modalStats.textContent = statsText;
        dom.modalVictory.classList.remove('hidden');
        addLog('🏆 ПОБЕДА! Вы достигли клетки 10 — полная безопасность!', 'success');
    }

    // Check defeat by rounds
    if (state.round >= state.maxRounds && state.position < 10 && !state.gameOver) {
        state.gameOver = true;
        const statsText = `Верных ответов: ${state.correctCount} | Ошибок: ${state.wrongCount} | Финальная позиция: ${state.position}`;
        dom.modalTitle.textContent = '💀 Вас взломали!';
        dom.modalText.textContent = 'Увы, вы не успели дойти до финиша за 30 раундов. Социальный инженер победил!';
        dom.modalStats.textContent = statsText;
        dom.modalVictory.classList.remove('hidden');
        addLog('💀 ПОРАЖЕНИЕ! Закончились раунды. Хакер победил!', 'error');
    }

    dom.situationCard.innerHTML = `
        <div class="card-text">Нажмите «Тянуть ситуацию» для следующего раунда</div>
        <div class="card-type">Ожидание...</div>
    `;
    dom.situationCard.classList.remove('revealed');

    updateUI();
}

function newHand() {
    if (state.rerollsLeft <= 0 || state.gameOver || !state.currentSituation) return;
    if (state.mode === 'duo' && state.hackerTurn) {
        addLog('⛔ Сейчас ход Хакера, нельзя менять карты.', 'error');
        return;
    }
    state.rerollsLeft--;
    state.selectedReaction = null;
    dealHand();
    addLog(`🔄 Карты заменены! Осталось замен: ${state.rerollsLeft}`, 'info');
    updateUI();
}

function resetGame() {
    initDecks();
    dom.situationCard.innerHTML = `
        <div class="card-text">Нажмите «Тянуть ситуацию», чтобы начать игру</div>
        <div class="card-type">Готовы?</div>
    `;
    dom.situationCard.classList.remove('revealed');
    dom.modalVictory.classList.add('hidden');
    if (state.mode === 'duo') {
        state.hackerTurn = true;
        addLog('🎭 Новая игра! Хакер ходит первым — тяните ситуацию.', 'info');
    } else {
        addLog('🔄 Новая игра! Удачи в защите от социальных инженеров!', 'info');
    }
    buildTrack();
    updateUI();
}

function closeModal() {
    dom.modalVictory.classList.add('hidden');
}

function toggleRules() {
    dom.modalRules.classList.toggle('hidden');
}

function closeRules() {
    dom.modalRules.classList.add('hidden');
}

// ============ EVENT LISTENERS ============
dom.btnDraw.addEventListener('click', drawSituation);
dom.btnSubmit.addEventListener('click', submitReaction);
dom.btnNewHand.addEventListener('click', newHand);
document.getElementById('btnReset').addEventListener('click', resetGame);
document.getElementById('btnRules').addEventListener('click', toggleRules);
document.getElementById('btnCloseRules').addEventListener('click', closeRules);
document.getElementById('btnPlayAgain').addEventListener('click', () => {
    closeModal();
    resetGame();
});

dom.modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        selectMode(mode);
    });
});

// Close modals on overlay click
dom.modalVictory.addEventListener('click', (e) => {
    if (e.target === dom.modalVictory) closeModal();
});
dom.modalRules.addEventListener('click', (e) => {
    if (e.target === dom.modalRules) closeRules();
});

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
    if (state.gameOver) return;
    switch (e.key.toLowerCase()) {
        case 'd':
            if (!dom.btnDraw.disabled) drawSituation();
            break;
        case '1':
            if (state.hand.length >= 1 && !state.gameOver && state.currentSituation) selectReaction(0);
            break;
        case '2':
            if (state.hand.length >= 2 && !state.gameOver && state.currentSituation) selectReaction(1);
            break;
        case '3':
            if (state.hand.length >= 3 && !state.gameOver && state.currentSituation) selectReaction(2);
            break;
        case 'enter':
            if (!dom.btnSubmit.disabled) submitReaction();
            break;
        case 'r':
            if (!dom.btnNewHand.disabled) newHand();
            break;
        case 'escape':
            closeModal();
            closeRules();
            break;
    }
});

// ============ START GAME ============
function init() {
    initDecks();
    buildTrack();
    updateUI();
    addLog('🛡️ Игра загружена! Выберите режим и нажмите «Тянуть ситуацию».', 'info');
    addLog('💡 Горячие клавиши: D — тянуть, 1/2/3 — выбрать реакцию, Enter — подтвердить, R — сменить карты, Esc — закрыть окна.', 'info');
}

init();