function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ua]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-lang-${language}`);
        if (text) {
            element.textContent = text;
        }
    });
}
