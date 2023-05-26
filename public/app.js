var inp = document.getElementById('input')
function getval(value){
    input.value += value
}
function geteqval(sign){
    input.value = eval(input.value)
}
function getClear(){
    input.value = ""
}