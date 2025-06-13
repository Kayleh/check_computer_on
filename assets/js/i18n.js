const translations = {
    en: {
        title: "Computer Power Status Check",
        subtitle: "Using cutting-edge intelligent sensing and AI fusion technology matrix, through multi-dimensional hardware signal capture network and millisecond-level state recognition algorithm cluster, building a full-link power-on state monitoring system - from motherboard BIOS self-test pulse to power fluctuation curve, from CPU core temperature initial jump to memory addressing timing dynamic tracking, relying on nanometer-level sensor array and edge computing node collaborative computing, achieving millisecond-level state penetration detection of computer power-on full cycle, making every microsecond-level state transition of hardware power-on startup visible in the quantum-level precision monitoring network.",
        checkButton: "Check Status",
        alertTitle: "Congratulations 🎉",
        alertMessage: "Your computer is powered on!",
        alertButton: "OK",
        noteTitle: "Technical Description",
        footerCenter: "Data Science Center"
    },
    fr: {
        title: "Vérification de l'État d'Alimentation de l'Ordinateur",
        subtitle: "Utilisant une matrice technologique de pointe combinant détection intelligente et IA, à travers un réseau de capture de signaux matériels multidimensionnel et un cluster d'algorithmes de reconnaissance d'état en millisecondes, construisant un système de surveillance d'état de démarrage à liaison complète - du pouls d'auto-test du BIOS de la carte mère à la courbe de fluctuation de puissance, du saut initial de température du cœur du CPU au suivi dynamique du timing d'adressage de la mémoire, s'appuyant sur le calcul collaboratif du réseau de capteurs nanométriques et des nœuds de calcul périphériques, réalisant une détection pénétrante de l'état en millisecondes du cycle complet de démarrage de l'ordinateur, rendant chaque transition d'état en microsecondes du démarrage matériel visible dans le réseau de surveillance de précision quantique.",
        checkButton: "Vérifier l'État",
        alertTitle: "Félicitations 🎉",
        alertMessage: "Votre ordinateur est allumé !",
        alertButton: "OK",
        noteTitle: "Description Technique",
        footerCenter: "Centre de Science des Données"
    },
    ru: {
        title: "Проверка Состояния Включения Компьютера",
        subtitle: "Используя передовую матрицу технологий интеллектуального сенсорного восприятия и ИИ, через многомерную сеть захвата аппаратных сигналов и кластер алгоритмов распознавания состояния в миллисекундах, создавая полную систему мониторинга состояния включения - от импульса самотестирования BIOS материнской платы до кривой колебаний мощности, от начального скачка температуры ядра CPU до динамического отслеживания таймингов адресации памяти, опираясь на совместные вычисления наноуровневого массива датчиков и периферийных вычислительных узлов, достигая проникающего обнаружения состояния в миллисекундах полного цикла включения компьютера, делая каждый микросекундный переход состояния аппаратного включения видимым в сети мониторинга квантовой точности.",
        checkButton: "Проверить Статус",
        alertTitle: "Поздравляем 🎉",
        alertMessage: "Ваш компьютер включен!",
        alertButton: "OK",
        noteTitle: "Техническое Описание",
        footerCenter: "Центр Науки о Данных"
    },
    ja: {
        title: "コンピュータ電源状態チェック",
        subtitle: "最先端のインテリジェントセンシングとAI融合技術マトリックスを使用し、多次元ハードウェア信号捕捉ネットワークとミリ秒レベルの状態認識アルゴリズムクラスターを通じて、完全な電源投入状態監視システムを構築 - マザーボードBIOS自己診断パルスから電源変動曲線、CPUコア温度初期ジャンプからメモリアドレッシングタイミング動的追跡まで、ナノメートルレベルのセンサーアレイとエッジコンピューティングノードの協調演算に依存し、コンピュータの電源投入全サイクルのミリ秒レベルの状態の透過的検出を実現し、ハードウェアの電源投入起動のマイクロ秒レベルの状態遷移をすべて量子レベルの精度監視ネットワークで可視化します。",
        checkButton: "状態チェック",
        alertTitle: "おめでとうございます 🎉",
        alertMessage: "コンピュータが起動しています！",
        alertButton: "OK",
        noteTitle: "技術説明",
        footerCenter: "データサイエンスセンター"
    },
    zh: {
        title: "电脑开机状态检测",
        subtitle: "采用业界前沿的智能传感与 AI 融合技术矩阵，通过多维度硬件信号捕捉网络与毫秒级状态识别算法集群，构建全链路开机状态监测系统 —— 从主板 BIOS 自检脉冲到电源功率波动曲线，从 CPU 核心温度初始跃变到内存寻址时序动态追踪，依托纳米级传感器阵列与边缘计算节点的协同运算，实现对电脑开机全周期毫秒级状态的穿透式检测，让每一次硬件上电启动的微秒级状态跃迁，都在量子级精度的监测网络中无所遁形。",
        checkButton: "点击检测",
        alertTitle: "恭喜你 🎉",
        alertMessage: "电脑已开机！",
        alertButton: "确定",
        noteTitle: "技术说明",
        footerCenter: "数据科学中心"
    }
};

// 获取浏览器语言
function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    const langMap = {
        'en': 'en',
        'fr': 'fr',
        'ru': 'ru',
        'ja': 'ja',
        'zh': 'zh'
    };
    
    return langMap[langCode] || 'zh';
}

// 获取当前语言
function getCurrentLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        return savedLang;
    }
    
    const browserLang = getBrowserLanguage();
    localStorage.setItem('preferredLanguage', browserLang);
    return browserLang;
}

// 更新当前显示的语言
function updateCurrentLang(lang) {
    const langTexts = {
        en: '🇬🇧 English',
        fr: '🇫🇷 Français',
        ru: '🇷🇺 Русский',
        ja: '🇯🇵 日本語',
        zh: '🇨🇳 简体中文'
    };
    document.querySelector('.current-lang').textContent = langTexts[lang];
}

// 更新页面内容
function updateContent() {
    const lang = getCurrentLanguage();
    const t = translations[lang];
    
    document.querySelector('.title').textContent = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;
    document.querySelector('.button-text').textContent = t.checkButton;
    document.querySelector('#customAlert .alert-title').textContent = t.alertTitle;
    document.querySelector('#customAlert .alert-message').textContent = t.alertMessage;
    document.querySelector('#customAlert .alert-close').textContent = t.alertButton;
    document.querySelector('.note-title').textContent = t.noteTitle;
    document.querySelector('.footer-center').textContent = t.footerCenter;
}

// 初始化语言切换功能
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const langToggle = document.querySelector('.lang-toggle');
    const languageSwitcher = document.querySelector('.language-switcher');
    
    // 切换下拉菜单
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSwitcher.classList.toggle('active');
    });
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', (e) => {
        if (!languageSwitcher.contains(e.target)) {
            languageSwitcher.classList.remove('active');
        }
    });
    
    // 设置初始语言
    const initialLang = getCurrentLanguage();
    
    // 设置对应的语言按钮为激活状态
    const activeButton = document.querySelector(`.lang-btn[data-lang="${initialLang}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // 初始化页面内容
    updateContent();
    // 初始化当前语言显示
    updateCurrentLang(initialLang);
    
    // 语言切换事件监听
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的active类
            langButtons.forEach(b => b.classList.remove('active'));
            // 为当前点击的按钮添加active类
            btn.classList.add('active');
            // 保存语言选择到本地存储
            localStorage.setItem('preferredLanguage', btn.dataset.lang);
            // 更新当前显示的语言
            updateCurrentLang(btn.dataset.lang);
            // 更新页面内容
            updateContent();
            // 关闭下拉菜单
            languageSwitcher.classList.remove('active');
        });
    });
}); 