

//========================================================================================================================
// قسم الزي يحدد الازرار 

class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

    this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });


	// تجربة شي 
	// if(localStorage.getItem("COLOR")==null){
		// this.header.style.background ="rgb(27, 27, 27)";
		// document.body.style.background ="#ff5353";
	// }

    this.selectColor(localStorage.getItem("SaveColor"));
    }



//========================================================================================================================
// هنا تحديد ماذا تريد عند الضغط علي الازرار 

	
	selectColor(color){
       
        this.header = document.getElementById("header");
		
		// تجربة شي 
		// this.img10 = document.getElementById("img10");
		// let img10 = document.getElementById("img10");
		// let img11 = document.getElementById("img11");
		// let img12 = document.getElementById("img12");
		// let img13 = document.getElementById("img13");
		
		
		
		// button == 1
		if(color == "color-1"){
            this.header.style.background = "rgba(39 , 39 , 37 ,1)";
            document.body.style.background = "rgba(39 , 39 , 37 ,1)";
			
			
			
			
			// تجربة شي 
			// document.img10.style.display = "fixed";
			// document.getElementById("img10").innerHTML = "<img src="icon/2.ico" />";
			// document.img10.innerHTML = <img src="icon/2.ico" />
			// img10.innerHTML = " <p> innerHTML </p> ";
        }
		
		// button == 2
        else if(color == "color-2"){
            this.header.style.background = "rgb(241 34 241)";
            document.body.style.background = "rgb(241 34 241)";
			
			
			
			// تجربة شي 
			// document.img11.style.display = "fixed";
			
        }
		
		// button == 3
        else if(color == "color-3"){
            this.header.style.background = "rgb(243 , 81 , 81)";
            document.body.style.background = "rgb(243 , 81 , 81)";
			
			
			
			
        }
		
		// button == 4
        else if(color == "color-4"){
            this.header.style.background = "rgb(61 , 141 , 210)";
            document.body.style.background = "rgb(61 , 141 , 210)";
			
			
			
			
        }
		
		// الجزء المسؤال عن الحظ في المتصفح 
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();



//========================================================================================================================