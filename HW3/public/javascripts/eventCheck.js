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

function changeJan(){
    $("#dropdownButton").html("Jan");
}
function changeFeb(){
    $("#dropdownButton").html("Feb");
}
function changeMar(){
    $("#dropdownButton").html("Mar");
}
function changeApr(){
    $("#dropdownButton").html("Apr");
}
function changeMay(){
    $("#dropdownButton").html("May");
}
function changeJun(){
    $("#dropdownButton").html("Jun");
}
function changeJul(){
    $("#dropdownButton").html("Jul");
}
function changeAug(){
    $("#dropdownButton").html("Aug");
}
function changeSep(){
    $("#dropdownButton").html("Sep");
}
function changeOct(){
    $("#dropdownButton").html("Oct");
}
function changeNov(){
    $("#dropdownButton").html("Nov");
}
function changeDec(){
    $("#dropdownButton").html("Dec");
}