// Vandan Bhargava

// This is to check if the form gets submitted and then hide the form and
// thank the user for ordering the cheesecakes
$("form").submit(function(e){
    var instr = $("#instructions").val();
    var quantity = $("#quantity").val();
    var radioValue = $("input[name='topping']:checked").val();
    if(instr.includes("vegan")){
        alert("Sorry, but these cheesecakes contain dairy.");
    } else {
        $("#table").hide();
        $("#textAreaLabel").hide();
        $("#instructions").hide();
        $("#orderButton").hide();
        $("p").html("Thank you for ordering: " + quantity + " " + radioValue +
        " cheesecakes. Special Notes: " + instr);
    }
    e.preventDefault();
});

// fucntion below acts on an event click of the
// dropdown menu to change the button title to whichever month
// is selected.
function changeMonth(month){
    $("#dropdownButton").html(month);
    $.post('/orders', function(data, status){
        $("#forCherry").text("" + data[0].quantity + " " + data[0].topping)
        $("#forPlain").text("" + data[1].quantity + " " + data[1].topping)
        $("#forChocolate").text("" + data[2].quantity + " " + data[2].topping)
        }, 'json');
}