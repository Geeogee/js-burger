var ingrLis = document.getElementsByTagName("li");
console.log(li);

for(i=0; i<ingrLis.length; i++) {
    var li = ingrLis[i];

    li.addEventListener("click", function() {

        var test = this.children;
        console.log(test);
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