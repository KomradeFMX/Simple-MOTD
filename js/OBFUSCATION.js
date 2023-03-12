var codes = ["&0","&8","&7", "&f", "&c", "&4", "&b", "&3", "&9", "&1", "&a", "&2", "&e", "&6", "&d", "&5", "&l", "&o", "&n", "&m", "&r", "&k"];

function obfuscator() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    setInterval(() => {
        const obfuscatedTags = document.querySelectorAll("obf");

        for(obfuscatedTag of obfuscatedTags) {
            let letrasRaras = ["@", "#", "7", "R", "P", "T", "/", "=", "_", "-", "]", "[", "H", "R", "L", "U", "K", "^", "G", "H", "Z", "(", ")", "_", "_", "]", "["];
            poto = "";
            tags = [];

            for(let i = 0; i < obfuscatedTag.innerText.length; i++) {
                for(code of codes) {
                    tags.push(codesLocation);
                }
                poto += letrasRaras[getRandomInt(letrasRaras.length)];
            }
            obfuscatedTag.innerText = poto;
        } 
    }, 25);
}

obfuscator();
// Thanks i lau u ^^