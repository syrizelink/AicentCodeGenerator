let x = document.getElementById("copyComplete");



function numIn() {
    let x = document.getElementById("numChoose").value;
    document.getElementById("Value").innerHTML = x;
}

function AncientCode() {
    let unicode = Math.floor(Math.random() * (0x9fbf - 0x3400 + 1)) + 0x3400 + " ";
    return String.fromCharCode(unicode);
}

function AncientCodeText() {
    let AncientText = "";
    let num = document.getElementById("Value").innerHTML;
    for (let a = 0; a < num; a++){
        AncientText += AncientCode();
    }
    document.getElementById("textArea").value = AncientText;

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