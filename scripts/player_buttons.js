


//========================================================================================================================
// جزء المكتوب فيه روابط القران 
class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});


        this.audios =[];
        // this.audios[0] = "audio/1.mp3";
		
		this.audios[0] = "https://server12.mp3quran.net/maher/001.mp3";
        
		this.audios[1] = "https://server12.mp3quran.net/maher/002.mp3";
        
		this.audios[2] = "https://server12.mp3quran.net/maher/003.mp3";
		
		this.audios[3] = "https://server12.mp3quran.net/maher/004.mp3";
		
		this.audios[4] = "https://server12.mp3quran.net/maher/005.mp3";
		
		this.audios[5] = "https://server12.mp3quran.net/maher/006.mp3";
		
		this.audios[6] = "https://server12.mp3quran.net/maher/007.mp3";
		
		this.audios[7] = "https://server12.mp3quran.net/maher/008.mp3";
		
		this.audios[8] = "https://server12.mp3quran.net/maher/009.mp3";
	
		this.audios[9] = "https://server12.mp3quran.net/maher/010.mp3";
		
		this.audios[10] = "https://server12.mp3quran.net/maher/011.mp3";
		
		// 10
		
		this.audios[11] = "https://server12.mp3quran.net/maher/012.mp3";
		
		this.audios[12] = "https://server12.mp3quran.net/maher/013.mp3";
		
		this.audios[13] = "https://server12.mp3quran.net/maher/014.mp3";
		
		this.audios[14] = "https://server12.mp3quran.net/maher/015.mp3";
		
		this.audios[15] = "https://server12.mp3quran.net/maher/016.mp3";
		
		this.audios[16] = "https://server12.mp3quran.net/maher/017.mp3";
		
		this.audios[17] = "https://server12.mp3quran.net/maher/018.mp3";
		
		this.audios[18] = "https://server12.mp3quran.net/maher/019.mp3";
		
		this.audios[19] = "https://server12.mp3quran.net/maher/020.mp3";
		
		this.audios[20] = "https://server12.mp3quran.net/maher/021.mp3";
		
		// 20
		
		this.audios[21] = "https://server12.mp3quran.net/maher/022.mp3";
		
		this.audios[22] = "https://server12.mp3quran.net/maher/023.mp3";
		
		this.audios[23] = "https://server12.mp3quran.net/maher/024.mp3";
		
		this.audios[24] = "https://server12.mp3quran.net/maher/025.mp3";
		
		this.audios[25] = "https://server12.mp3quran.net/maher/026.mp3";
		
		this.audios[26] = "https://server12.mp3quran.net/maher/027.mp3";
		
		this.audios[27] = "https://server12.mp3quran.net/maher/028.mp3";
		
		this.audios[28] = "https://server12.mp3quran.net/maher/029.mp3";
		
		this.audios[29] = "https://server12.mp3quran.net/maher/030.mp3";
		
		this.audios[30] = "https://server12.mp3quran.net/maher/031.mp3";
		
		// 30
		
		this.audios[31] = "https://server12.mp3quran.net/maher/032.mp3";
		
		this.audios[32] = "https://server12.mp3quran.net/maher/033.mp3";
		
		this.audios[33] = "https://server12.mp3quran.net/maher/034.mp3";
		
		this.audios[34] = "https://server12.mp3quran.net/maher/035.mp3";
		
		this.audios[35] = "https://server12.mp3quran.net/maher/036.mp3";
		
		this.audios[36] = "https://server12.mp3quran.net/maher/037.mp3";
		
		this.audios[37] = "https://server12.mp3quran.net/maher/038.mp3";
		
		this.audios[38] = "https://server12.mp3quran.net/maher/039.mp3";
		
		this.audios[39] = "https://server12.mp3quran.net/maher/040.mp3";
		
		this.audios[40] = "https://server12.mp3quran.net/maher/041.mp3";
		
		// 40
		
		this.audios[41] = "https://server12.mp3quran.net/maher/042.mp3";
		
		this.audios[42] = "https://server12.mp3quran.net/maher/043.mp3";
		
		this.audios[43] = "https://server12.mp3quran.net/maher/044.mp3";
		
		this.audios[44] = "https://server12.mp3quran.net/maher/045.mp3";
		
		this.audios[45] = "https://server12.mp3quran.net/maher/046.mp3";
		
		this.audios[46] = "https://server12.mp3quran.net/maher/047.mp3";
		
		this.audios[47] = "https://server12.mp3quran.net/maher/048.mp3";
		
		this.audios[48] = "https://server12.mp3quran.net/maher/049.mp3";
		
		this.audios[49] = "https://server12.mp3quran.net/maher/050.mp3";
		
		this.audios[50] = "https://server12.mp3quran.net/maher/051.mp3";
		
		// 50
		
		this.audios[51] = "https://server12.mp3quran.net/maher/052.mp3";
		
		this.audios[52] = "https://server12.mp3quran.net/maher/053.mp3";
		
		this.audios[53] = "https://server12.mp3quran.net/maher/054.mp3";
		
		this.audios[54] = "https://server12.mp3quran.net/maher/055.mp3";
		
		this.audios[55] = "https://server12.mp3quran.net/maher/056.mp3";
		
		this.audios[56] = "https://server12.mp3quran.net/maher/057.mp3";
		
		this.audios[57] = "https://server12.mp3quran.net/maher/058.mp3";
		
		this.audios[58] = "https://server12.mp3quran.net/maher/059.mp3";
		
		this.audios[59] = "https://server12.mp3quran.net/maher/060.mp3";
		
		this.audios[60] = "https://server12.mp3quran.net/maher/061.mp3";
		
		// 60
		
		this.audios[61] = "https://server12.mp3quran.net/maher/062.mp3";
		
		this.audios[62] = "https://server12.mp3quran.net/maher/063.mp3";
		
		this.audios[63] = "https://server12.mp3quran.net/maher/064.mp3";
		
		this.audios[64] = "https://server12.mp3quran.net/maher/065.mp3";
		
		this.audios[65] = "https://server12.mp3quran.net/maher/066.mp3";
		
		this.audios[66] = "https://server12.mp3quran.net/maher/067.mp3";
		
		this.audios[67] = "https://server12.mp3quran.net/maher/068.mp3";
		
		this.audios[68] = "https://server12.mp3quran.net/maher/069.mp3";
		
		this.audios[69] = "https://server12.mp3quran.net/maher/070.mp3";
		
		this.audios[70] = "https://server12.mp3quran.net/maher/071.mp3";
		
		// 70
		
		this.audios[71] = "https://server12.mp3quran.net/maher/072.mp3";
		
		this.audios[72] = "https://server12.mp3quran.net/maher/073.mp3";
		
		this.audios[73] = "https://server12.mp3quran.net/maher/074.mp3";
		
		this.audios[74] = "https://server12.mp3quran.net/maher/075.mp3";
		
		this.audios[75] = "https://server12.mp3quran.net/maher/076.mp3";
		
		this.audios[76] = "https://server12.mp3quran.net/maher/077.mp3";
		
		this.audios[77] = "https://server12.mp3quran.net/maher/078.mp3";
		
		this.audios[78] = "https://server12.mp3quran.net/maher/079.mp3";
		
		this.audios[79] = "https://server12.mp3quran.net/maher/080.mp3";
		
		this.audios[80] = "https://server12.mp3quran.net/maher/081.mp3";
		
		// 80
		
		this.audios[81] = "https://server12.mp3quran.net/maher/082.mp3";
		
		this.audios[82] = "https://server12.mp3quran.net/maher/083.mp3";
		
		this.audios[83] = "https://server12.mp3quran.net/maher/084.mp3";
		
		this.audios[84] = "https://server12.mp3quran.net/maher/085.mp3";
		
		this.audios[85] = "https://server12.mp3quran.net/maher/086.mp3";
		
		this.audios[86] = "https://server12.mp3quran.net/maher/087.mp3";
		
		this.audios[87] = "https://server12.mp3quran.net/maher/088.mp3";
		
		this.audios[88] = "https://server12.mp3quran.net/maher/089.mp3";
		
		this.audios[89] = "https://server12.mp3quran.net/maher/090.mp3";
		
		this.audios[90] = "https://server12.mp3quran.net/maher/091.mp3";
		
		// 90
		
		this.audios[91] = "https://server12.mp3quran.net/maher/092.mp3";
		
		this.audios[92] = "https://server12.mp3quran.net/maher/093.mp3";
		
		this.audios[93] = "https://server12.mp3quran.net/maher/094.mp3";
		
		this.audios[94] = "https://server12.mp3quran.net/maher/095.mp3";
		
		this.audios[95] = "https://server12.mp3quran.net/maher/096.mp3";
		
		this.audios[96] = "https://server12.mp3quran.net/maher/097.mp3";
		
		this.audios[97] = "https://server12.mp3quran.net/maher/098.mp3";
		
		this.audios[98] = "https://server12.mp3quran.net/maher/099.mp3";
		
		this.audios[99] = "https://server12.mp3quran.net/maher/100.mp3";
		
		this.audios[100] = "https://server12.mp3quran.net/maher/101.mp3";
		
		// 100
		
		this.audios[101] = "https://server12.mp3quran.net/maher/102.mp3";
		
		this.audios[102] = "https://server12.mp3quran.net/maher/103.mp3";
		
		this.audios[103] = "https://server12.mp3quran.net/maher/104.mp3";
		
		this.audios[104] = "https://server12.mp3quran.net/maher/105.mp3";
		
		this.audios[105] = "https://server12.mp3quran.net/maher/106.mp3";
		
		this.audios[106] = "https://server12.mp3quran.net/maher/107.mp3";
		
		this.audios[107] = "https://server12.mp3quran.net/maher/108.mp3";
		
		this.audios[108] = "https://server12.mp3quran.net/maher/109.mp3";
		
		this.audios[109] = "https://server12.mp3quran.net/maher/110.mp3";
		
		this.audios[110] = "https://server12.mp3quran.net/maher/111.mp3";
		
		// 110
		
		this.audios[111] = "https://server12.mp3quran.net/maher/112.mp3";
		
		this.audios[112] = "https://server12.mp3quran.net/maher/113.mp3";
		
		this.audios[113] = "https://server12.mp3quran.net/maher/114.mp3";









        this.names = [];
        
		this.names[0] = "الفاتحة";
        
		this.names[1] = "البقرة";
        
		this.names[2] = "آل عمران";
		
		this.names[3] = "النساء";
		
		this.names[4] = "المائدة";
		
		this.names[5] = "الأنعام";
		
		this.names[6] = "الأعراف";
		
		this.names[7] = "الأنفال";
        
		this.names[8] = "التوبة";
		
		this.names[9] = "يونس";
		
		this.names[10] = "هود";
		
		// 10
		
		this.names[11] = "يوسف";
		
		this.names[12] = "الرعد";
		
		this.names[13] = "إبراهيم";
		
		this.names[14] = "الحجر";
		
		this.names[15] = "النحل";
		
		this.names[16] = "الإسراء";
		
		this.names[17] = "الكهف";
		
		this.names[18] = "مريم";
		
		this.names[19] = "طه";
		
		this.names[20] = "الأنبياء";
		
		// 20
		
		this.names[21] = "الحج";
		
		this.names[22] = "المؤمنون";
		
		this.names[23] = "النور";
		
		this.names[24] = "الفرقان";
		
		this.names[25] = "الشعراء";
		
		this.names[26] = "النمل";
		
		this.names[27] = "القصص";
		
		this.names[28] = "العنكبوت";
		
		this.names[29] = "الروم";
		
		this.names[30] = "لقمان";
		
		// 30
		
		this.names[31] = "السجدة";
		
		this.names[32] = "الأحزاب";
		
		this.names[33] = "سبأ";
		
		this.names[34] = "فاطر";
		
		this.names[35] = "يس";
		
		this.names[36] = "الصافات";
		
		this.names[37] = "ص";
		
		this.names[38] = "الزمر";
		
		this.names[39] = "غافر";
		
		this.names[40] = "فصلت";
		
		// 40
		
		this.names[41] = "الشورى";
		
		this.names[42] = "الزخرف";
		
		this.names[43] = "الدّخان";
		
		this.names[44] = "الجاثية";
		
		this.names[45] = "الأحقاف";
		
		this.names[46] = "محمد";
		
		this.names[47] = "الفتح";
		
		this.names[48] = "الحجرات";
		
		this.names[49] = "ق";
		
		this.names[50] = "الذاريات";
		
		// 50
		
		this.names[51] = "الطور";
		
		this.names[52] = "النجم";
		
		this.names[53] = "القمر";
		
		this.names[54] = "الرحمن";
		
		this.names[55] = "الواقعة";
		
		this.names[56] = "الحديد";
		
		this.names[57] = "المجادلة";
		
		this.names[58] = "الحشر";
		
		this.names[59] = "الممتحنة";
		
		this.names[60] = "الصف";
		
		// 60
		
		this.names[61] = "الجمعة";
		
		this.names[62] = "المنافقون";
		
		this.names[63] = "التغابن";
		
		this.names[64] = "الطلاق";
		
		this.names[65] = "التحريم";
		
		this.names[66] = "الملك";
		
		this.names[67] = "القلم";
		
		this.names[68] = "الحاقة";
		
		this.names[69] = "المعارج";
		
		this.names[70] = "نوح";
		
		// 70
		
		this.names[71] = "الجن";
		
		this.names[72] = "المزمل";
		
		this.names[73] = "المدثر";
		
		this.names[74] = "القيامة";
		
		this.names[75] = "الإنسان";
		
		this.names[76] = "المرسلات";
		
		this.names[77] = "النبأ";
		
		this.names[78] = "النازعات";
		
		this.names[79] = "عبس";
		
		this.names[80] = "التكوير";
		
		// 80
		
		this.names[81] = "الإنفطار";
		
		this.names[82] = "المطففين";
		
		this.names[83] = "الإنشقاق";
		
		this.names[84] = "البروج";
		
		this.names[85] = "الطارق";
		
		this.names[86] = "الأعلى";
		
		this.names[87] = "الغاشية";
		
		this.names[88] = "الفجر";
		
		this.names[89] = "البلد";
		
		this.names[90] = "الشمس";
		
		// 90
		
		this.names[91] = "الليل";
		
		this.names[92] = "الضحى";
		
		this.names[93] = "الشرح";
		
		this.names[94] = "التين";
		
		this.names[95] = "العلق";
		
		this.names[96] = "القدر";
		
		this.names[97] = "البينة";
		
		this.names[98] = "الزلزلة";
		
		this.names[99] = "العاديات";
		
		this.names[100] = "القارعة";
		
		// 100
		
		this.names[101] = "التكاثر";
		
		this.names[102] = "العصر";
		
		this.names[103] = "الهمزة";
		
		this.names[104] = "الفيل";
		
		this.names[105] = "قريش";
		
		this.names[106] = "الماعون";
		
		this.names[107] = "الكوثر";
		
		this.names[108] = "الكافرون";
		
		this.names[109] = "النصر";
		
		this.names[110] = "المسد";
		
		// 110
		
		this.names[111] = "الإخلاص";
		
		this.names[112] = "الفلق";
		
		this.names[113] = "الناس";
		

		
        
		
		
		
		
		
		
		
		
		
		
		this.numberAudio =0;




//========================================================================================================================
// جزء المسؤال عن التالي والسابق 

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    
	
//========================================================================================================================
// جزء المسؤال عن الصور التالي والسابق 
	
	play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }


//========================================================================================================================
// جزء المسؤال عن تشغيل التالي 

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    

//========================================================================================================================
// جزء المسؤال عن تشغيل السابق 
	
	back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();




//========================================================================================================================