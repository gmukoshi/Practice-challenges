//My favourite quote
function quote(){
    console.log("An apple a day keeps the doctor away");
  }
  quote()
  
  //My personal details
  function personalDetails(){
    console.log("My name is George and i am 36yrs old");
  }
  personalDetails()
  
  //Area of a rectangle
  function rectangle(){
    length=13;
      width=7;
        area =("Area of a rectangle = "  +  length*width+"square units");
      console.log(area);
  } 
  rectangle()
  
  //checking if a number is even or odd
  function EvenorOdd(num) {
    return num % 2 === 0 ? 'This is Even' : 'This is Odd';
  }
  //verifying the odd & Even function
  console.log(EvenorOdd(18));
  console.log(EvenorOdd(35));
    
  //grade students score
  function gradestudent(score){
    if (score >= 80){
      console.log("Excellent");
    }else if (score >= 50 && score<=79){
      console.log("Good");
    }else{
      console.log("Fail");
    }
  }
  gradestudent(71)