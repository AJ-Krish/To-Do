$("#abclink").click(function(){
    console.log("aa");
    window.location.replace("index.html");
    
   
});

$(document).ready(function(){
    $.getJSON('https://jsonplaceholder.typicode.com/todos',function(data){
        var checks='';
        var count=0;
        
        $.each(data,function(key,value){
            var str='check';
            var lab='label';
            count++;
            str=str+count;
            lab=lab+count;
            // console.log(str);
            //console.log(str);
            checks +="<div class="+"spacing-in-button"+"><input type="+"checkbox class="+"worktest id="+str+" ><label class="+"checkbox-label for="+str+" id="+lab+">";
            checks +=value.title;
            checks +="</label><br><div>";
            // console.log(value.title);
            // console.log(count);
        });
    
        $("#list-item-checklist").append(checks);
    });
        $.getJSON('https://jsonplaceholder.typicode.com/todos',function(data){
            var id =0;
            $.each(data,function(key,value){
                var str='check';
                var lab='label';
                id++;
                str=str+id;
                lab=lab+id;
                //console.log(value.completed);
                if (value.completed==true) {
                    $("#"+str).attr("checked",true);
                    $("#"+str).attr("disabled",true);
                    $("#"+lab).css("color","rgb(245, 179, 157");
                    
                }
            });
            var tasks=0;
            $("input[type='checkbox']").change(function(){
                var strc='Tasks completed :';
                if($(this).is(":checked")){
                    tasks++;
                    strc=strc+tasks;
                    $(".color-text").text(strc);
                    
                        $(".slide-todo").slideDown(1000,function(){
                             $(".slide-todo").slideUp(2000);
        
                        });
        
        


                    // alert(tasks);
                    // $("#result").html("Checkbox is checked.");
                }
                else if($(this).is(":not(:checked)")){
                    tasks--;
                    strc=strc+tasks;
                    $(".color-text").text(strc);
                   
                        $(".slide-todo").slideDown(1000,function(){
                             $(".slide-todo").slideUp(2000);
        
                        });
        
                   
        
                    // alert(tasks);
                    // $("#result").html("Checkbox is unchecked.");
                }

                var promise=new Promise(function(resolve,reject){
                        if(tasks==5){
                            resolve("success");
                        }
                        else{
                            reject("fail");
                        }
                });
                promise
                .then(function(s){
                    alert("congrats...5 tasks has been completed ")
                    // alert(s);
                })
                .catch(function(e){
                    // alert(e);
                    
                })


                


            });
            
                
            


        });

        

});


