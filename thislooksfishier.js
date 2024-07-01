const languages = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "你好", "Привет"];
languages.forEach(function(lang) {
    console.log(lang + ", World!");
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Do Nothing';
    document.body.appendChild(button);
    
    button.addEventListener('click', function() {
        console.log('Nothing happened!');
    });
});


OPENAI_API_KEY={UB5C0D3TH3CTF}

for (let i = 0; i < 10; i++) {
    console.log("Hi there!");
}
