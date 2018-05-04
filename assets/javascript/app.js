// This code will run as soon as the page loads
$(document).ready(function(){
    $("#start").on("click", clock.startGame)  
    $("#start").on("click", render)  

});
var intervalId
var time = 10;
  
var clock = {
    startGame: function() { 
        $("#timer").text(time);
        intervalId = setInterval(clock.count,1000);
    },

    count: function() {
        // time--;
        $("#timer").text(time);
        if(time===0){
            clearInterval(time);
            // Time is up. Game over!; 
        } else {
            time--
            $("#timer").text(time);        
        }
    }
}
var questions = [
    { 
        Q: "The sky is blue.", 
        a: "true"
    },
    {   
        Q: "There are 265 days in a year.",
        a: "false" 
    
    }

]
var correctAnswer 
var numberCorrect = 0
var numberIncorrect = 0

function render(){
    var hook = $("#triviaQuestions");
    
    for (var i = 0;i<questions.length;i++ ){
        var newQuestions = $("<p>");
        var newAnswers = $("<p>");
        newQuestions.text(questions[i].Q);
        newAnswers.text(questions[i].a);
        
        var newbtn= $("<button>");
        newbtn.text("true");
        newbtn.attr("class","answer");
        newbtn.val(i)

        var newbtn2= $("<button>");
        newbtn2.text("false");
        newbtn2.attr("class","answer");
        newbtn2.val(i)
        hook.append(newQuestions,newbtn,newbtn2);
        correctAnswer = questions[i].a;

        
    }      
}
//how do i make this aware that the buttons "true" and "false" correspond with the right questions?
$("#triviaQuestions").on("click", ".answer", function() {
    var response = ($(this).text());
    $(this).attr("class","answered");
    if(response === questions[($(this).val())].a) {
        alert("correct!");
        numberCorrect++;

    } else {
        alert("incorrect!");
        numberIncorrect--;
    }
});  
        
        



    


    



  

    
    