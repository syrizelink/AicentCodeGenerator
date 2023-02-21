let x = document.getElementById("copyComplete");

function AncientCode() {
    let unicode = Math.floor(Math.random() * (0x9fbf - 0x3400 + 1)) + 0x3400;
    document.getElementById("textArea").value = String.fromCharCode(unicode);
    document.getElementById("copy").disabled = "";
    x.className = "copyComplete";
}

function copy() {
    let text = document.getElementById("textArea");
    text.select();
    if (document.execCommand("Copy")){
        document.execCommand("Copy");
    }
    x.className = 'copyCompleteIn';
}