const languages = [
    { name: "English", text: "SQUAD 72", presenting: "Presenting to You" },
    { name: "Hindi", text: "स्क्वाड 72", presenting: "आपके लिए प्रस्तुत किया जा रहा है" },
    { name: "Bengali", text: "দল ৭২", presenting: "আপনার জন্য উপস্থাপন" },
    { name: "Telugu", text: "స్క్వాడ్ 72", presenting: "మీకు అందజేస్తున్నాం" },
    { name: "Marathi", text: "पथक ७२", presenting: "तुमच्यासाठी सादर करत आहोत" },
    { name: "Tamil", text: "தொகுதி 72", presenting: "உங்களுக்காக வழங்கப்படுகிறது" },
    { name: "Urdu", text: "دستہ 72", presenting: "آپ کے لئے پیش کیا جا رہا ہے" },
    { name: "Gujarati", text: "સ્ક્વાડ 72", presenting: "તમારા માટે પ્રસ્તુત છે" },
    { name: "Kannada", text: "ಸ್ಕ್ವಾಡ್ 72", presenting: "ನಿಮಗಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸಲಾಗುತ್ತಿದೆ" },
    { name: "Malayalam", text: "സ്ക്വാഡ് 72", presenting: "നിങ്ങളെ 위해 അവതരിപ്പിക്കുന്നു" },
    { name: "Punjabi", text: "ਸਕੁਐਡ 72", presenting: "ਤੁਹਾਡੇ ਲਈ ਪੇਸ਼ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ" },
    { name: "Japanese", text: "部隊72", presenting: "あなたに提示しています" },
    { name: "French", text: "ÉQUIPE 72", presenting: "Présenté à vous" },
    { name: "Russian", text: "ОТРЯД 72", presenting: "Представляем вам" },
    { name: "Korean", text: "스쿼드 72", presenting: "당신에게 선사합니다" }
];

const multilingualTextDiv = document.getElementById('multilingual-text');
const presentingText = document.getElementById('presenting-text');

function createLanguageElements() {
    languages.forEach(lang => {
        const langElement = document.createElement('div');
        langElement.classList.add('language-name');
        langElement.textContent = lang.text;
        langElement.dataset.language = lang.name;
        multilingualTextDiv.appendChild(langElement);
    });
}

function cycleLanguages() {
    const languageElements = document.querySelectorAll('.language-name');
    let currentIndex = 0;

    function showNextLanguage() {
        languageElements.forEach(el => el.classList.remove('active'));
        const currentLang = languageElements[currentIndex];

        currentLang.classList.add('active');
        presentingText.textContent = languages[currentIndex].presenting;

        currentIndex = (currentIndex + 1) % languageElements.length;
    }

    showNextLanguage();
    setInterval(showNextLanguage, 1000);
}

createLanguageElements();
cycleLanguages();
