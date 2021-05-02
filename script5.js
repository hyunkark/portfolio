var current = 1;

function next(){
divname = "#imgbox"+current;
if(current==5){return;}
$(divname).addClass("invisible");
$(divname).removeClass("visible");
current++;
var divname= "#imgbox"+current;
$(divname).addClass("visible");
$(divname).removeClass("invisible");
}

function previous(){
divname = "#imgbox"+current;
if(current==1){return;}
$(divname).addClass("invisible");
$(divname).removeClass("visible");
current--;
var divname= "#imgbox"+current;
$(divname).addClass("visible");
$(divname).removeClass("invisible");
}
