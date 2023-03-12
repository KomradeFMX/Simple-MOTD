// I may not get into detail about how this was the best option

var codes = ["&0","&8","&7", "&f", "&c", "&4", "&b", "&3", "&9", "&1", "&a", "&2", "&e", "&6", "&d", "&5", "&l", "&o", "&n", "&m", "&r", "&k"];
var replacers = [
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#000000;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#555555;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#AAAAAA;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#FFFFFF;'>", 
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#FF5555;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#AA0000;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#55FFFF;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#00AAAA;'>", 
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#5555FF;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#0000AA;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#55FF55;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#00AA00;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#FFFF55;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#FFAA00;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#FF55FF;'>",
            "</b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf><span style='color:#AA00AA;'>",
            "<b>",
            "<i>",
            "<u>",
            "<s>",
            "</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></b></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></u></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></s></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf></obf>",
            "<obf>"];

var vanillaReplacers = ["\\u00A70", "\\u00A78",
                        "\\u00A77", "\\u00A7f",
                        "\\u00A7c", "\\u00A74",
                        "\\u00A7b", "\\u00A73",
                        "\\u00A79", "\\u00A71",
                        "\\u00A7a", "\\u00A72",
                        "\\u00A7e", "\\u00A76",
                        "\\u00A7d", "\\u00A75",
                        "\\u00A7l", "\\u00A7o",
                        "\\u00A7n", "\\u00A7m",
                        "\\u00A7r", "\\u00A7k"]

/* But MR White this code is shit XDDD */
/* Jesse trust me this was the best option */




function insertItem(value) {
    let textarea = document.getElementById("textarea");
    
    // For Internet Explorer
    if (document.selection) {
        textarea.focus();
        sel = document.selection.createRange;
        sel.text = value;

        // Gets the cursor back where it was
        textarea.focus();
        textarea.setSelectionRange(startPosition + 2, startPosition + 2);
                
        // Update the preview
        preview()
    } 
    // For Mozilla & else
    else if (textarea.selectionStart || textarea.selectionStart == '0') {
        var startPosition = document.getElementById("textarea").selectionStart;
        var endPosition = document.getElementById("textarea").selectionEnd;

        textarea.value = textarea.value.substring(0, startPosition) + value + textarea.value.substring(endPosition, textarea.value.length);

        // Gets the cursor back where it was
        textarea.focus();
        textarea.setSelectionRange(endPosition + 2, endPosition + 2); 

        // Update the preview
        preview()
    } else {
        document.getElementById("textarea").value += value;

        // Gets the cursor back where it was
        document.getElementById("textarea").focus();
        document.getElementById("textarea").setSelectionRange(startPosition + 2, startPosition + 2);
                
        // Update the preview
        preview()
    }
}












// Updates and gives a preview of the MOTD
function preview() {
    // THIS IS THE PREVIEW PART

    // If new text is added the Copied goes back to Copy
    document.getElementById("copy").innerHTML = "Copy";

    let value = document.getElementById("textarea").value;
    let replaced1 = value;
    let replaced2 = value;
    let replaced3 = value;
    
    for(let a = 0; a <= value.length; a++){
    for (let i = 0; i <= codes.length; i++) {
        replaced1 = replaced1.replace(codes[i], replacers[i]);
    }}

    replaced1 = replaced1.replace(/(?:\r\n|\r|\n)/g, replacers[20] + "<br>");
    document.getElementById("preview").innerHTML = replaced1;

    // THIS IS THE MOTD OUTPUT PART FOR VANILLA
    for(let a = 0; a <= value.length; a++){
        for (let i = 0; i <= codes.length; i++) {
            replaced2 = replaced2.replace(codes[i], vanillaReplacers[i]);
        }}
    replaced2 = replaced2.replace(/(?:\r\n|\r|\n)/g, '\\u00A7r\\n');
    document.getElementById("vanilla").value = replaced2;

    // THIS IS THE MOTD OUTPUT PART FOR PROXIES
    replaced3 = replaced3.replace(/(?:\r\n|\r|\n)/g, '\\u00A7r\\n');
    document.getElementById("proxy").value = replaced3;
}








function copy() {
    let motd = document.getElementById("textarea").value;
    let button = document.getElementById("copy");

    if (motd == "") {
        button.innerHTML = "It´s empty!";
        return;
    }
    navigator.clipboard.writeText(motd);
    button.innerHTML = "Copied!";

}
function copyVanilla() {
    let text = document.getElementById("vanilla").value;
    if(text === "") {
        document.getElementById("vanilla").value = "There is nothing here!";
        return;
    }
    navigator.clipboard.writeText(text);
}
function copyProxy() {
    let text = document.getElementById("proxy").value;
    if(text === "") {
        document.getElementById("proxy").value = "There is nothing here!";
        return;
    }
    navigator.clipboard.writeText(text);
}
