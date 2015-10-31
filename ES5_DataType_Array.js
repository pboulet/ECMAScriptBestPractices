 // array methods

 // sorting
 var n = [4, 8, 15, 16, 23, 42];
 n.sort();  // will evaluate the numbers as strings and get it wrong

 // must pass a function to compare the numbers
 n.sort(function(a, b){
     if ("a is less than b by some ordering criterion") {
         return -1;
     }
     if ("a is greater than b by the ordering criterion") {
         return 1;
     }
     // a must be equal to b
     return 0;
 });


 // deleting elements
 var anArray = [1, 2, 3, 4];
 delete anArray[1]; // [1, undefined, 3, 4] - faster
 anArray.splice(1, 1); // [1, 3, 4] - slower because of it's rehashing everything

 /**
  * Arrays VS Objects tips
  *
  * Use objects when the names are arbitrary strings.
  * Use arrays when the names are sequential integers
  */




