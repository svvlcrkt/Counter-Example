let count = 0;
var btns = $('.btn');
var value = $('#value');
$('#decrease').on('click',function(){
    count--;
    cnt();
    console.log("8");
})
$('#increase').on('click',function(){
    count++;
    cnt();
})
$('#reset').on('click',function(){
    count = 0;
    cnt();
})
function cnt(){
    if(count > 0){
        value.css("color","green");
    }
    else if(count < 0){
        value.css("color","red");
    }
    else{
        value.css("color","#222");
    }
    value.text(count);

}





