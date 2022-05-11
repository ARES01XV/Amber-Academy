
//disables input field
function selectedChange(object){
  var selectedOpt = object.options[object.selectedIndex].value;
  var scnd_input = document.getElementById('input02'); 
  scnd_input.disabled = false;
  if(selectedOpt == 'areaWithCir') {
    scnd_input.disabled = true;
  } else {
    scnd_input.disabled = false;
  }
}

function calculate(){
    // var return_value
    frst_numb = parseFloat(document.getElementById("input01").value);
    scnd_numb = parseFloat(document.getElementById("input02").value);
    operation = document.getElementById("operation").value;
    // return_value = document.getElementById("results").value;
   calculation(frst_numb, scnd_numb, operation);
};


function calculation(val01, val02, operator='+'){

    var result;
    var operand = operator;

    switch(operand){
        case '/':
            result = (val01 / val02);
            break;
        case '*':
            result = (val01 * val02);
            break;
        case '+':
            result = (val01 + val02);
            break;
        case '-':
            result = (val01 - val02);
            break;
        case 'areaWithCir':
            result = ((val01 * val01) / (4 * Math.PI));
            break;
        case 'areaWithRad':
            result = (Math.PI * (val01 * val01));
            break;
        case 'areaWithDia':
            result = (1/4 * (Math.PI * (val01 * val01)));
            break;
        case 'areaRec':
            result = (val01 * val02);
            break;
        default:
            result = (val01 + val02);
            break;
    }
    console.log(result);
    // return result;
};