window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
var file_system;

function base64ToBinary(imgUrl) {
    var BASE64_MARKER = ';base64,';
    var base64Index = imgUrl.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = imgUrl.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for ( i = 0; i < rawLength; ++i) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}

function saveToDisk(blob, fileName) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function(event) {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = fileName || 'unknown';

        var event = document.createEvent('Event');
        event.initEvent('click', true, true);
        save.dispatchEvent(event);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
}

function saveFS() {
    content = $("#freturn").text();
    bob = new Blob([content]);
    saveToDisk(bob, "FastString.txt");
    // fileWriter.write(bob);
}

//OPEN FILE FUNCTIONS
function aabortRead() {
    try{reader.abort();}catch(e){};
}

function handleFileSelect() {
    var openfilefield = document.getElementById('openfilefield');

    reader = new FileReader();
    reader.onerror = function(e) {
       $("#freturn").text(lgt('errorReading'));
       soundinvalid();
        $("#btnAbort").hide();
    };
    reader.onprogress = function(e) {
        var vale = $("#freturn").text();
        $("#freturn").text(vale + "|");
        $("#btnAbort").show();
    };
    reader.onabort = function(e) {
        $("#freturn").text(lgt('userAbort'));
        $("#btnAbort").hide();
        soundalert();
    };
    reader.onloadstart = function(e) {
        $("#freturn").text("|");
        $("#btnAbort").show();
    };
    reader.onload = function(e) {
        $("#eandd").val(e.target.result);
        $("#freturn").text("");
        $("#btnAbort").hide();
    };

    // Read in the image file as a binary string.
    reader.readAsText(openfilefield.files[0]);
}

