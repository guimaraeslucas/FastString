var leftButtonDown = false;
var rightButtonDown = false;
var fEdit = false;

$("#eandd").mousedown(function(e) {
    if (e.which == 1) {
        leftButtonDown = true;
    } else if (e.which == 3) {
        rightButtonDown = true;
    }

});

$("#eandd").mouseup(function(e) {
    if (e.which == 1) {
        leftButtonDown = false;
    } else if (e.which == 3) {
        rightButtonDown = false;
    }

});

$("#eandd").mousedown(function(e) {
    if (leftButtonDown && rightButtonDown) {
        $("#eandd").toggleClass("fullTextE");
    }
});

/*RETURN*/
$("#freturn").mousedown(function(e) {
    if (e.which == 1) {
        leftButtonDown = true;
    } else if (e.which == 3) {
        rightButtonDown = true;
    }

});

$("#freturn").mouseup(function(e) {
    if (e.which == 1) {
        leftButtonDown = false;
    } else if (e.which == 3) {
        rightButtonDown = false;
    }

});

$("#freturn").mousedown(function(e) {
    if (leftButtonDown && rightButtonDown) {
        $("#freturn").toggleClass("fullTextE");


        if (fEdit==false){
            fEdit=true;
           $("#freturn").attr("contenteditable","true");
        }else{
            fEdit=false;
            $("#freturn").removeAttr("contenteditable","true");
        }

    }
});
