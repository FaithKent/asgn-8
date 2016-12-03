$(document).ready(function() {
    var planSelected = null;

    $("#tabs").tabs();

    $("#startDate").datepicker();

    $("#plan1").draggable();
    $("#plan2").draggable();
    $("#selection").droppable({
        drop: function(event, ui) {
            planSelected = $(ui.draggable).html();
            var pickedText = planSelected.substring(0, planSelected.length - 1) + " Picked!";
            $(this)
                .html(pickedText)
                .css({
                    background: '#FEFAF3',
                    padding: '10px'
                });
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
            $("#firstNameError").html("Please Enter First Name");
            $("#firstName").focus();
            errors = true;
        } else {
            $("#firstNameError").html("");
        }

        var myLastName = $("#lastName").val().trim();
        $("#lastName").val(myLastName);

        if (myLastName == "") {
            $("#lastNameError").html("Please Enter Last Name");
            $("#lastName").focus();
            errors = true;
        } else {
            $("#lastNameError").html("");
        }

        var myStartDate = $("#startDate").val();

        if (myStartDate == "") {
            $("#startDateError").html("Please Enter the Start Date");
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
        var outputDiv = $('#feelingsOutput');

        var blindCallback = function() {
            setTimeout(
                function() {
                    outputDiv.fadeIn(100); // duration of fade-in
                },
                100 // delay before fade-in
            );
        };

        var text;
        var animation;
        var textColor;
        var callback = null;

        switch (planSelected) {
            case 'Great Plan!':
                text = "Great!";
                animation = "blind";
                callback = blindCallback;
                textColor = '#008B01'; // dark green
                break;

            case 'Poor Plan!':
                text = "My Head Hurts!";
                animation = "shake";
                textColor = 'red';
                break;

            default: // unselected
                text = "I don't know";
                animation = "bounce";
                textColor = 'black';
                break;
        }

        outputDiv
            .html(text)
            .css("color", textColor)
            .effect(animation, {}, 400, callback); // duration of animation
    });
})
