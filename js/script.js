var priceCalcBtn = document.getElementById("calc-btn");

priceCalcBtn.addEventListener("click", function() {
    var burgerName = document.getElementById("burger-name").value;
    if(!burgerName) {
        alert("Please, insert your burger name!")
    } else {
        var checkboxes = document.getElementsByClassName("ingr-check");
        console.log(checkboxes);
        var totalPrice = 10;
        for(i=0; i<checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            if(checkbox.checked) {
                var ingrPrice = parseInt(checkbox.dataset.price);
                totalPrice += ingrPrice;
            }
        }
    }
});