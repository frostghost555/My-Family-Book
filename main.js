var father = "https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170515352/79062795-cartoon-man-male-parent-family-adult-member-vector-illustration.jpg";
var brother = "https://www.kindpng.com/picc/m/201-2019458_tired-girl-cliparts-child-clipart-hd-png-download.png";

function before(){
    console.log("before")
    document.getElementById('firstImage')
    .src=father;
    document.getElementById('firstMessage')
    .innerHTML="father";
}
  
function after(){
    console.log("after")
    document.getElementById('firstImage')
    .src=brother;
    document.getElementById('firstMessage')
    .innerHTML="brother";
    
}
