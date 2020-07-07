var ulb = document.getElementById("uprLeftBorder");
var urb = document.getElementById("upprRightBorder");
var brb = document.getElementById("bttmRightBorder");
var blb = document.getElementById("bttmLeftBorder");

function updPreview() {

    validate();

    var properties = "border-radius: " + ulb.value + "px " + urb.value + "px " + brb.value + "px " + blb.value + "px";

    document.getElementById("borderViewer").style = properties;
    document.getElementById("contentRadius").value = properties;

    // console.log("Propriedades: " + properties);

    console.log(ulb.value);

}

updPreview();

function validate() {

    var inputs = [ulb, urb, brb, blb];

    for (interator of inputs) {
        if (interator.length === 0 || interator.value < 0)
            interator.value = 0;
        else if (interator.value > 200)
            interator.value = 200;
    }
}

function copy() {
    var copyText = document.getElementById("contentRadius");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function select(){
    ulb.select();
    urb.select();
    blb.select();
    brb.select();
}