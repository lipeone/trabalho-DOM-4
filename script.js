const botaoGerarBotoes = document.getElementById("bttCriarBut");
const iptMax = document.getElementById("iptMax");

botaoGerarBotoes.addEventListener('click', () => {
    const buttons = iptMax.value;
    const number = generateRandomNumber(0, buttons-1);

    for(let i=0;i!=buttons;i++){
        if(i == number){
            document.body.appendChild(generateButton(i+1, true));
            continue;
        };
        document.body.appendChild(generateButton(i+1, false));
    }
});

function generateButton(buttonName, isButton) {
    const elem = document.createElement('button');
    elem.setAttribute('class', 'box');
    elem.setAttribute('id', buttonName);
    if(isButton){
        elem.name = buttonName;

        elem.onclick = () => {
            alert("Parabéns!");
        }
    } else {
        elem.onclick = () => {
            alert("ERROU!");
        }
    }
    elem.innerText = buttonName;
    return elem;
}

function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}