/* function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res')

    if (ini.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        alert('Erro - Faltam dados');
    } else {
        res.innerHTML = "Contando: "
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F60}`;
        }
        

    }
}
 */
/* 
function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        alert('Erro - Faltam dados');
    } else {
        res.innerHTML = "Contando: ";
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        // Array de emojis emocionais
        let emojis = ["😀", "😄", "😃", "😁", "😆", "😅", "🥳", "😎", "🤩", "😊"];

        let emojiIndex = 0; // Índice inicial no array de emojis

        for (let c = i; c <= f; c += p) {
            let emoji = emojis[emojiIndex % emojis.length]; // Pega o emoji correspondente
            res.innerHTML += `${c} ${emoji} `;
            emojiIndex++; // Avança para o próximo emoji
        }
    }
}
 */

function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        alert('Erro - Faltam dados');
    } else {
        res.innerHTML = "Contando: ";
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                // Gera um número aleatório entre 128512 e 128591 (faixa dos emojis de emoção)
                let emojiCode = 128512 + Math.floor(Math.random() * 80);
                let emoji = String.fromCodePoint(emojiCode); // Converte o código em emoji
                res.innerHTML += `${c} ${emoji} `;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                // Gera um número aleatório entre 128512 e 128591 (faixa dos emojis de emoção)
                let emojiCode = 128512 + Math.floor(Math.random() * 80);
                let emoji = String.fromCodePoint(emojiCode); // Converte o código em emoji
                res.innerHTML += `${c} ${emoji} `;
            }
        }
    }
}
