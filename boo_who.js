// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.



function booWho(bool) {
    let test = bool

    if (test == true || test == false){
        console.log('true');
    } else {
        console.log('false');
    }

}
        
  
booWho(null);
booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");

