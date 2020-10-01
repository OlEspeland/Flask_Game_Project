/**
 * Test script fake news
 */


function checkGuessTrue(statement_id) {
    
    var ans = "";
    $(document).ready(function(){
        $.ajax({
            type: "POST",
            url: "/singlereturn?statement_id=" + statement_id,
            data: statement_id,
            processData: false, 
            contentType: false,
            success: function(data){
                if (String(data) == "false") {
                    console.log(data);
                }
                if (String(data) == "pants-fire") {
                    console.log(data);
                }
                if (String(data) == "true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "barely-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "half-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "mostly-true"){
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer'>YES!!! The answer is: " + data + "</div>");
                }
            }
        })
    })
}

function checkGuessFalse(statement_id) {
    
    var ans = "";
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
                    $("#answerdiv").append("<div id='divanswer'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "pants-fire") {
                    $("#divanswer").remove();
                    $("#answerdiv").append("<div id='divanswer'>YES!!! The answer is: " + data + "</div>");
                }
                if (String(data) == "true"){
                    console.log(data);
                }
                if (String(data) == "barely-true"){
                    console.log(data);
                }
                if (String(data) == "half-true"){
                    console.log(data);
                }
                if (String(data) == "mostly-true"){
                    console.log(data);
                }
            }
        })
    })
}
