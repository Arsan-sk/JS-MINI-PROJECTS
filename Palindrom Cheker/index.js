const input = document.getElementById('input');

function reverseString(str){
    return str.split('').reverse().join('');
    // boy -> ['b','o','y'] -> ['y','o','b'] -> 'yob' return yob
}
function Check(){
    val = input.value;
    if (val === "") {
        alert("Please enter text");
        return;
    }
    // alert(val)
    reverse_val = reverseString(val);
    // alert(reverse_val)
    if(val === reverse_val){
        alert("P A L I N D R O M E");
    } else {
        alert("It's not a Palindrome");
    }

    input.value = "";
}
