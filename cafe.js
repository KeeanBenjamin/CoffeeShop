// Hover image change
var oldImage;
var newImage;
$("#menu li img").hover(
    function(){
        oldImage = $(this).attr("src");
        newImage = $(this).attr("id");
        $(this).attr("src", newImage);
    },
    function(){
        $(this).attr("src", oldImage);
    }
);

// Calculate order
var orderList = [];
var orderTotal = 0;
var i = 0;
$("#menu li img").click(
    function(){
        if ($(this).attr("alt") == "espresso"){
            orderList[orderList.length] =  "Espresso";
            cost = 1.95;
            orderTotal += cost;
        }
        else if ($(this).attr("alt") == "latte"){
            orderList[orderList.length] =  "Latte";
            cost = 2.95;
            orderTotal += cost;
        }
        else if ($(this).attr("alt") == "cappuccino"){
            orderList[orderList.length] =  "Cappuccino";
            cost = 3.45;
            orderTotal += 3.45;
        }
        else if ($(this).attr("alt") == "coffee"){
            orderList[orderList.length] =  "Coffee";
            cost = 1.75;
            orderTotal += cost;
        }
        else if ($(this).attr("alt") == "biscotti"){
            orderList[orderList.length] =  "Biscotti";
            cost = 1.95;
            orderTotal += cost;
        }
        else if ($(this).attr("alt") == "scone"){
            orderList[orderList.length] =  "Scone";
            cost = 2.95;
            orderTotal += cost;
        }
        
        // clear order button
        $("#clear_order").click(
        function(){
            orderList = [];
            $("#order").empty();
            i = 0;
            orderTotal = 0;
            document.querySelector("#total").innerHTML = "Total: $" + orderTotal.toFixed(2);
        })
        // Prints each option in select box
        for (i = i; i < orderList.length; i++){
        $('#order').append(`<option>$${cost} - ${orderList[i]}</option>`);}
        document.querySelector("#total").innerHTML = "Total: $" + orderTotal.toFixed(2);
    }
);

// Place order button
$("#place_order").click(
    function(){
            location.href = "checkout.html";
})