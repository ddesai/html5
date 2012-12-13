function getName() {
    return "Darshan";
}

function toggleTheHighlight(click_event_info){
    console.dir(click_event_info);
    $("h1").toggleClass("highlighted");
}

function sliderValueChanged(info) {
    /*
    console.log("Slider value changed " + info.target.value);
    */
    var slider_value = info.target.value;
    $("#left_eye").css("stroke-width",slider_value+"px");
    $("#right_eye").css("stroke-width",slider_value-5+"px");
    $("#right_eye").css("stroke-width",slider_value-5+"px");
}


$("#my_btn").click(toggleTheHighlight);
$("#my_slider").change(sliderValueChanged);

/*
    1) We listen for a click of a button
    2) We are going to call a server (local)
    3) We are going to get back an address object (in JSON format)
    4) We are going to change the H1 on the page to say the city name
*/

function changeHeaderName(jsonResponse) {
    console.dir(jsonResponse);
    $("h1").html("I work at Intel in ");
}


function serverLookup() {
    $.getJSON("address.json", changeHeaderName);
}


$("#btn1").click(serverLookup);
