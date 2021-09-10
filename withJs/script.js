// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//btns like an array, so we can use forEach method
btns.forEach(function(btn){

    // console.log(btn);
      // If we print the btn to the screen, we will see that it is every button element 

    btn.addEventListener('click',function(e){    // We used e to choose which button it is with e


        // console.log(e.currentTarget);

          // with console log we can see which button we use.
          // If we click reset button then we'll see, e is reset. 
          // This means that we will see that the reset button appears on the console. 
          // Same for the other buttons.

        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else{
            count++;
        }
        if(count > 0){
            value.style.color = "green";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        else{
            value.style.color = "#222";
        }
        value.textContent = count;

    })

})