function AncientCode() {
    let unicode = Math.floor(Math.random() * (0x9fbf - 0x3400 + 1)) + 0x3400;
    document.getElementById("textArea").value = String.fromCharCode(unicode);
}

function copy() {
    let text = document.getElementById("textArea");
    text.select();
    document.execCommand("Copy");
    alert("复制成功")
}