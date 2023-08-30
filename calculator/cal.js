function turnOff(){
    var off = document.getElementsByClassName('input')
    off[0].style.visibility = 'hidden'
}
function turnOn(){
    var on = document.getElementsByClassName('input')
    on[0].style.visibility = 'visible'
}

var inputvalues = document.getElementById('inputValues')
function getValues(num){
    inputvalues.value +=num
    // console.log(inputvalues);
}
function clearChar(){
    inputvalues.value = inputvalues.value.slice(0,-1)
}
function clearAllChar(){
    inputvalues.value = ''
}
function calc(){
    inputvalues.value = eval(inputvalues.value)
}
