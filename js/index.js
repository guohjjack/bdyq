
$(function(){
   var  zifu=document.querySelectorAll(".linxian")
  var  rightbox=document.querySelectorAll(".rightbox")
  var  fs1=document.querySelector(".fs1");
  var  fs2=document.querySelector(".fs2")
  var  fs3=document.querySelector(".fs3")
   var one=document.querySelector(".one");
  var  two=document.querySelector(".two")
  var  three=document.querySelector(".three") 
	$('#dowebok').fullpage({
		sectionsColor: ['rgb(63, 176, 238)', 'rgb(13, 113, 205)', 'rgb(73, 193, 121)', 'rgb(0, 154, 112)'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		'navigation': true,

      afterLoad(afterLoad,index){
        if (index==2) {
       fs1.className+=" active"
       one.className+=" active"
       fs2.className=" linxian fs2"
       two.className="  rightbox two"
       fs3.className=" linxian fs3"
       three.className="  rightbox three"        
        }
        else  if (index==3) {
       fs2.className+=" active"
       two.className+=" active"
       fs1.className=" linxian fs1"
       one.className=" rightbox one"
       fs3.className=" linxian fs3"
       three.className="  rightbox three" 
        }
        else if (index==4) {
       fs3.className+=" active"
       three.className+=" active"
       fs1.className=" linxian fs1"
       one.className=" rightbox one"
       fs2.className=" linxian fs2"
       two.className="rightbox two"


        }

      }     
   });
  $(".down").click(function(){
        $.fn.fullpage.moveSectionDown();

  })


});