console.log('correct file');

$(document).ready(function() {
    var planSelected = null;

    $("#tabs").tabs();

    $("#startDate").datepicker();

    $("#plan1").draggable();
    $("#plan2").draggable();
    $("#selection").droppable({
        drop: function(event, ui) {
            var baseText = $(ui.draggable).html();
            planSelected = baseText;
            var pickedText = baseText.substring(0, baseText.length - 1) + " Picked!";
            $(this).html(pickedText);
        }
    });

    $("#signUpButton").click(function() {
        $("#message").hide();
        var errors = false;

        var myFirstName = $("#firstName")
            .val()
            .trim();
        $("#firstName").val(myFirstName);

        if (myFirstName == "") {
            $("#firstNameError").html("You must Enter a First Name");
            $("#firstName").focus();
            errors = true;
        } else {
            $("#firstNameError").html("");
        }

        var myLastName = $("#lastName").val().trim();
        $("#lastName").val(myLastName);

        if (myLastName == "") {
            $("#lastNameError").html("You must Enter a Last Name");
            $("#lastName").focus();
            errors = true;
        } else {
            $("#lastNameError").html("");
        }

        var myStartDate = $("#startDate").val();

        if (myStartDate == "") {
            $("#startDateError").html("You must Pick a Date");
            errors = true;
        } else {
            $("#startDateError").html("");
        }

        if (errors == true) {
            $("#message")
                .show()
                .html("Please Correct Errors and Try Again")
                .css("color", "#FF0000");
        } else {
            var lines = [
                "<p>Success: " + myFirstName + " " + myLastName + "</p>",
                "<p> Use the Start Date as your Password </p>",
                "<p>&nbsp;</p>"
            ];
            $("#message")
                .show()
                .html(lines.join(""))
                .css("color", "#008B01");
        }
    })

    $('#feelingsButton').click(function() {
        var text = "I don't Know";
        var animation = "bounce";
        var callback = function() {};
        switch (planSelected) {
            case 'Great Plan!':
                text = "Great!";
                animation = "blind";
                callback = function() {
                    console.log('callback');
                    setTimeout(function() {
                        $("#feelingsOutput")
                            .removeAttr("style")
                            .fadeIn();
                    }, 100);
                };
                break;
            case 'Poor Plan!':
                text = "My Head Hurts!";
                animation = "shake";
                break;
        }
        console.log('call');
        $('#feelingsOutput').html(text);
        $('#feelingsOutput').effect(animation, {}, 400, callback);
    });
})
