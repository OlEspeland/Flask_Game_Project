/**
 * Test script fake news
 */

 // Checks if answer is true (called from clicking the True button)

sourceCounter = 0;

function checkGuessTrue(statement_id) {
    $(document).ready(function(){
        $.ajax({
            type: "POST",
            url: "/singlereturn?statement_id=" + statement_id,
            data: statement_id,
            processData: false, 
            contentType: false,
            success: function(data){
                if (String(data) == "false") {
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:red'>NO!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "pants-fire") {
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:red'>NO!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:green'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "barely-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:green'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "half-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:green'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "mostly-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:green'>YES!!! The answer is: " + data + "</div>");
                }
            }
        });
    });
}

// Checks if answer is false (called from clicking the False button)
function checkGuessFalse(statement_id) {
    $(document).ready(function(){
        $.ajax({
            type: "POST",
            url: "/singlereturn?statement_id=" + statement_id,
            data: statement_id,
            processData: false, 
            contentType: false,
            success: function(data){
                if (String(data) == "false") {
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:green'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "pants-fire") {
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:green'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:red'>NO!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "barely-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:red'>NO!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "half-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:red'>NO!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "mostly-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer' style='color:red'>NO!!! The answer is: " + data + "</div>");
                }
            }
        });
    });
}

// Appends divs with source description and the link url
function showSource(statement_id) {
    $(document).ready(function(){ 
        $.ajax({
            type: "POST",
            url: "/sourcereturn?statement_id=" + statement_id,
            data: statement_id,
            processData: false, 
            contentType: false,
            success: function(data){
                $("#sourcelist").append(
                    "<div id='sourcedescription'>"+ data[sourceCounter].description +"</div>                                               \
                    <li><a href='"+ data[sourceCounter].link +"' target='_blank'>"+ data[sourceCounter].link +"</a></li>");
                sourceCounter++;
                if(sourceCounter >= 5) {
                    sourceCounter = 0;
                    console.log(sourceCounter);
                    $("#sourcelist").append("<div id='endsources'>No more sources</div>");
                    $("#sourcebutton").css("visibility", "hidden");
                }
            }
        });
    });
}