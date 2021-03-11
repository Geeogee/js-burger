
//Get the collection of all li elements
var ingrLis = document.getElementsByTagName("li");

for(var i=0; i<ingrLis.length; i++) {
    var li = ingrLis[i];

    li.addEventListener("click", function() {
        // this is the li that is clicked
        var clickedCheckbox = this.children[1]; // the second child of the li == checkbox
        clickedCheckbox.checked = !clickedCheckbox.checked; // if checkbox.checked checked = true else checkbox.checked = false

    });
}


var priceCalcBtn = document.getElementById("calc-btn");

priceCalcBtn.addEventListener("click", function() {

    var burgerName = document.getElementById("burger-name").value;
    if(!burgerName) {

        alert("Please, insert your burger name!")
    } else {

        // Collection (== array) of checkboxes that have 
        // the same class name
        var checkboxes = document.getElementsByClassName("ingr-check");
        var totalPrice = 10;

        // Find what checkbox is checked 
        // And then add the data-price to the total
        for(i=0; i<checkboxes.length; i++) {

            var checkbox = checkboxes[i];
            if(checkbox.checked) {

                var ingrPrice = parseInt(checkbox.dataset.price);
                totalPrice += ingrPrice;           
            }
        }

        var discounts = [
            "ABCDEF123456",
            "HEUANF864318",
            "UNESJC902753"
        ];

        var discountCode = document.getElementById("discount-code").value;
        if(discounts.includes(discountCode)) {
            var discount = totalPrice * .2;
            totalPrice -= discount;
        } else {
            console.log("Discount code not found!")
        }

        document.getElementById("price").innerHTML = totalPrice;


    }
});