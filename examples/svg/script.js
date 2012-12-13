function getName() {
    return "Darshan";
}

function toggleTheHighlight(){
    $("h1").toggleClass("highlighted");
}

function sliderValueChanged(info) {
    /*
    console.log("Slider value changed " + info.target.value);
    */
    var slider_value = info.target.value;
    $("#left_eye").css("stroke-width",slider_value+"px");
    $("#right_eye").css("stroke-width",slider_value-5+"px");

}

$("#my_btn").click(toggleTheHighlight);
$("#my_slider").change(sliderValueChanged);