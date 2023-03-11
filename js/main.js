
var codes = ["&0","&8","&7", "&f", "&c", "&4", "&b", "&3", "&9", "&1", "&a", "&2", "&e", "&6", "&d", "&5", "&l", "&o", "&n", "&m", "&r"];
var replacers = ["<span style='color:#000000; font-weight: normal; text-decoration: none;'>", "<span style='color:#555555; font-weight: normal; text-decoration: none;'>",
            "<span style='color:#AAAAAA; font-weight: normal; text-decoration: none;'>", "<span style='color:#FFFFFF; font-weight: normal; text-decoration: none;'>", 
            "<span style='color:#FF5555; font-weight: normal; text-decoration: none;'>", "<span style='color:#AA0000; font-weight: normal; text-decoration: none;'>",
            "<span style='color:#55FFFF; font-weight: normal; text-decoration: none;'>", "<span style='color:#00AAAA; font-weight: normal; text-decoration: none;'>", 
            "<span style='color:#5555FF; font-weight: normal; text-decoration: none;'>", "<span style='color:#0000AA; font-weight: normal; text-decoration: none;'>",
            "<span style='color:#55FF55; font-weight: normal; text-decoration: none;'>", "<span style='color:#00AA00; font-weight: normal; text-decoration: none;'>",
            "<span style='color:#FFFF55; font-weight: normal; text-decoration: none;'>", "<span style='color:#FFAA00; font-weight: normal; text-decoration: none;'>",
            "<span style='color:#FF55FF; font-weight: normal; text-decoration: none;'>", "<span style='color:#AA00AA; font-weight: normal; text-decoration: none;'>",
            "<span style='font-weight: bold;'>", "<span style='font-style: italic;'>",
            "<span style='text-decoration: underline;'>" ,"<span style='text-decoration: line-through;'>",
            "<span style='text-decoration: none; font-weight: normal; color:#AAAAAA;'>"];

// 












function insertItem(value) {
    let textarea = document.getElementById("textarea");
    let previewContent = document.getElementById("preview");
    
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
    // If new text is added the Copied goes back to Copy
    document.getElementById("copy").innerHTML = "Copy";

    let value = document.getElementById("textarea").value;
    let replaced1 = value;
    
    for(let a = 0; a <= value.length; a++){
    for (let i = 0; i <= codes.length; i++) {
        replaced1 = replaced1.replace(codes[i], replacers[i]);
    }}



    searchStr = "<span style='";
    indices = []; index = 0; startIndex = 0;
    while ((index = replaced1.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStr.length;
    };

    for(let i = 0; i < indices.length; i++) {
        if(i === 0) continue;
        indices = []; index = 0; startIndex = 0;
        while ((index = replaced1.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStr.length;
        };

        replaced1 = replaced1.substring(0, indices[i]) + "</span>" +  replaced1.substring(indices[i], replaced1.length);
    }
    document.getElementById("preview").innerHTML = replaced1;
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
