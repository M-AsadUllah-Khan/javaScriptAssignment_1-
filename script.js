                                                     //   Alert Button

document.getElementById("btn-1").onclick = function(){
    alert("This is Alert Button.")
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = "Be Alert Please !"
    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    } 
}


                                                //    Sum 2 Numbers
                           
document.getElementById("btn-5").onclick = function(){


        let a = 59;
        let b = 8;
        let sum = a + b;
        document.getElementById("output").innerHTML = "Result = " + sum    

        document.getElementById("statement").innerHTML = "a = 59 <br> b = 8 <br> Sum = a + b " 


    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    }    
    document.getElementById("clr-statement").onclick = function(){
        document.getElementById("statement").innerHTML = ""
    }
}                                                




                                                    // Subtract 2 Numbers
                                                  
document.getElementById("btn-6").onclick = function(){


        let a = 846;
        let b = 2637;
        let subtract = a - b;
        document.getElementById("output").innerHTML = "Result = " + subtract    

        document.getElementById("statement").innerHTML = "a = 846 <br> b = 2637 <br> Subtract = a - b " 


    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    }    
    document.getElementById("clr-statement").onclick = function(){
        document.getElementById("statement").innerHTML = ""
    }
}                                                                                                    


                                                    // Multiply 2 Numbers
                                                  
document.getElementById("btn-7").onclick = function(){


        let a = 846;
        let b = 2637;
        let multiply = a * b;
        document.getElementById("output").innerHTML = "Result = " +  multiply    

        document.getElementById("statement").innerHTML = "a = 846 <br> b = 2637 <br> Multiply = a * b " 


    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    }    
    document.getElementById("clr-statement").onclick = function(){
        document.getElementById("statement").innerHTML = ""
    }
}                                                                                                    



                                                    // Divide 2 Numbers
                                                  
document.getElementById("btn-8").onclick = function(){


        let a = 846;
        let b = 2637;
        let divide = a / b;
        document.getElementById("output").innerHTML = "Result = " + divide    

        document.getElementById("statement").innerHTML = "a = 846 <br> b = 2637 <br> Division = a / b " 


    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    }    
    document.getElementById("clr-statement").onclick = function(){
        document.getElementById("statement").innerHTML = ""
    }    
}                                                                                                    



                                                    // Alert Number

document.getElementById("btn-2").onclick = function(){
    alert("The alert number will show in output section. Press the button OK. ")
    document.getElementById("output").innerHTML = "<p style='color: red;'> Alert Number =  + 1,3,5,7 <br>These numbers cannot be divided by another number except it's own.</p>"
    
    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    }
    
}


                                                    //   Show Variable Name

document.getElementById("btn-3").onclick = function(){
    document.getElementById("statement").innerHTML = "<b>The variable names are given in Output section.</b>"
    document.getElementById("output").innerHTML = "<div style='text-align:left'><p><b>The general rules for constructing names for variables (unique identifiers) are:</b></p><ul><li>Names can contain letters, digits, underscores, and dollar signs.</li><li> Names must begin with a letter. Names can also begin with <b>$</b> and <b>_</b>.</li><li>We use following words for the decleration of variables:<ol><li>let</li><li>const</li><li>var</li></ol></li><li>No spacing in variable name.</li><li>Varible name cannot be start by number.However, we can add number in the center or last of variable name.</li></ul><dl><dt>Examples:</dt><dd><ul><li>varName</li><li>letFirstNumber</li><li>constTerm</li><li>$dollarSign</li><li>_underscoreSign</li><li>number5Variable</li></ul></dd></dt></dl></div> "
    

    document.getElementById("clr-statement").onclick = function(){
        document.getElementById("statement").innerHTML = ""
    }
    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    }

}



                                                        //  Show camel case exapmles


document.getElementById("btn-4").onclick = function(){
    document.getElementById("statement").innerHTML = "The<b> camelCaseExamples</b> are given in Output section."
    document.getElementById("output").innerHTML =  "<div style='text-align:left;'><p>Following are the details of <b>camelCase</b> :</p><dl><dt>camelCase:<dd> CamelCase is a way to separate the words in a phrase by making the first letter of each word capitalized and not using spaces. It is commonly used in web URLs, programming and computer naming conventions</dd></dt><dt>Example:<dd><ul><li>thisIsFirstCamelCaseExample.</li><li>crossOriginIsolated.</li><li>allVariableNames.</li></ul></dd></dt></dl> "    
    document.getElementById("clr-statement").onclick = function(){
        document.getElementById("statement").innerHTML = ""
    }
    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    }
}


                                                        // Calculate Some Numbers


document.getElementById("btn-9").onclick = function(){
    

    let calculation = 36/6*3+2**4-(3-15);
    document.getElementById("output").innerHTML ="Answer = " + calculation
    document.getElementById("statement").innerHTML = "36/6*3+2**4-(3-15)"




    document.getElementById("clr-statement").onclick = function(){
        document.getElementById("statement").innerHTML = ""
    }
    document.getElementById("clr-output").onclick = function(){
        document.getElementById("output").innerHTML = ""
    }
}






