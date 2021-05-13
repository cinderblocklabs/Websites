/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~ TABLESCRIPT ~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// This js file does not actually work, the working version of the script is in the main HTML file.

// This function matches checkbox with price and adds price to total if box is checked. 
function getTableCellValues() {

    // table extraction
    var table = document.getElementById('services-table');

    // total textfield extraction
    var totalField = document.getElementById('total');

    // checkboxes
    var checkboxes = table.getElementsByTagName('INPUT');

    // prices
    var prices = table.getElementsByClassName('price');

    // counter variable
    var total = 0;

    for(var i = 0; i < checkboxes.length; i++) {
        
        if(checkboxes[i].checked) {
            
            // parse price
            var parsedPrice = parseFloat(prices[i].innerHTML);

            // console log checkbox status
            console.log("checkbox checked = " + checkboxes[i].checked);

            // add parsed prices to total
            total += parsedPrice;

            // console log total
            console.log('total = ' + total)

            // export total to total textfield
            totalField.placeholder = total;
            
        }
    }
}