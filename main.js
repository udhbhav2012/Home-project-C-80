name_of_the_guest_array = [];

name_of_people = []

function submit()
{
   var display_guest_array = [];
   
   for(var j = 1; j<= 4; j++)
   {
       var name_of_the_guest = document.getElementById("name_of_the_guest_"+j).value;
       console.log(name_of_the_guest);
       name_of_the_guest_array.push(name_of_the_guest);
   }

   console.log(name_of_the_guest_array); 
   
   var lenght_of_name_of_guest_array = name_of_the_guest_array.length;
   console.log(lenght_of_name_of_guest_array);

   for (var k = 0; k < lenght_of_name_of_guest_array; k++)
 {  
    display_student_array.push("NAME - "+ name_of_the_guest_array[k] + "</h4>");
    console.log(display_guest_array);
 }
 console.log(display_guets_array); 
}

    function sorting()
    {
     name_of_the_guest_array.sort();
     console.log(name_of_the_guest_array);

     var display_guest_array_sorting = []

     var lenght_of_name_of_guest_array = name_of_the_guest_array.length;
     console.log(lenght_of_name_of_guest_array);

     for(var k = 0; k < lenght_of_name_of_guest_array; k++)
     {
         display_guest_array_sorting.push("<h4>Name - " + name_of_the_guest_array[k] + "</h4>");
     }
    }

function searching()
{
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j=0; j<names_of_people.lenght; j++)
    {
        if(s==name_of_people[j]){
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "name found "+found+" "time/s";
}