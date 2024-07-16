//this part the general for all files_______________________

var canvas, stage, exportRoot;



function init() {
	
	createjs.MotionGuidePlugin.install(createjs.Tween);
	canvas = document.getElementById("canvas");
	images = images||{};
	
		//__Preloading_______________________________________	
	stage = new createjs.Stage(canvas);
	 var preloader_text = new createjs.Text("Loading", "20px 'MS Reference Sans Serif'", "#6E8AB6");
	preloader_text.name = "preloader_text";
	preloader_text.textAlign = "center";
	preloader_text.lineHeight = 22;
	preloader_text.lineWidth = 167;
	preloader_text.setTransform(268,227);  
  stage.addChild(preloader_text);
  stage.update();
	
	//__Preloading_______________________________________

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
exportRoot = new lib.sim_10();

	stage = new createjs.Stage(canvas);
	//here we change the name for the current

	var touchDev;
	if (BrowserDetect.version != touchDevice) {
		touchDev = false;
		stage.enableMouseOver();
	} else {
		touchDev = true;

	}

	var touchDevice = (window.hasOwnProperty('ontouchstart'));

	if (BrowserDetect.browser == 'Explorer' && BrowserDetect.version == 10 && !touchDevice) {
	} else {
		createjs.Touch.enable(stage, false, true);
	}

	stage.addChild(exportRoot);
	
	
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	
	//______________________________________________________________________
	//______________________________________________________________________
exportRoot.gotoAndStop(1);

var light = exportRoot.light;
var flashLight = exportRoot.flashLight;
var vLabel = exportRoot.vLabel;
var charge = exportRoot.charge;
var sw = exportRoot.sw;
var rb = exportRoot.rb;
var buble = exportRoot.buble;
var dis_mc = exportRoot.dis_mc;

var rbGroup1 = exportRoot.rbGroup1;
var rbGroup2 = exportRoot.rbGroup2;

var sliderThumb1 = exportRoot.sliderThumb1;
var sliderThumb2 = exportRoot.sliderThumb2;

var slidertrack1 = exportRoot.slidertrack1;
var slidertrack2 = exportRoot.slidertrack2;

var val1 = exportRoot.val1;
var val2 = exportRoot.val2; 
var current = exportRoot.current;



var reverseBatt = false;

light.visible = false;
flashLight.gotoAndStop(1);
charge.visible = false;
vLabel.gotoAndStop(1);
rb.alpha= 0.5;
rb.mouseEnabled = false;
dis_mc.visible = false;
//___________________________________
var Voltage = 3;
var currentC; 
var bulbPower;
var cR = 1;	// R
var cG = 1;	// G
var cB = 1;	// B
var cA = 0.7;	// alpha
//___________________________________

val1.text = "3.0";
val2.text = "3.0";

 var rbValue1 = "2";
  var rbValue2 = "2";

rbGroup1.RadBut_2.gotoAndStop(2);
rbGroup2.RadBut_2.gotoAndStop(2);

sliderThumb1.x = slidertrack1.x + 185/999*30;
sliderThumb2.x = slidertrack2.x + 185/999*30;
current.text = "Current = 0.00 A"; 

sw.swB.addEventListener("click", clickStop); 

function clickStop(event){
	event.nativeEvent.preventDefault();
	//resistanceSt.value = Number(resistanceSt.textField.text);
	//powerSt.value = Number(powerSt.textField.text);
	if(rb.alpha == 0.5){
	if (sw.currentFrame==0) {
		light.visible = true;
		sw.gotoAndStop(1);
		//vLabel.visible = false;
		charge.visible = true;
		if(rbValue2 =="2"){
		if (rbValue1 =="1") {
			charge.gotoAndStop(0);
			vLabel.gotoAndStop(8);
			Voltage = 1.5;
		}
		if (rbValue1 =="2") {
			charge.gotoAndStop(1);
			vLabel.gotoAndStop(9);
			Voltage = 3;
		}
		if (rbValue1 =="3") {
			charge.gotoAndStop(2);
			vLabel.gotoAndStop(10);
			Voltage = 4.5;
		}
		if (rbValue1 =="4") {
			charge.gotoAndStop(3);
			vLabel.gotoAndStop(11);
			Voltage = 6;
		}
		}
		if(rbValue2 =="1"){
		if (rbValue1 =="1") {
			charge.gotoAndStop(4);
			vLabel.gotoAndStop(12);
			Voltage = 1.5;

		}
		if (rbValue1 =="2") {
			charge.visible = false;
			vLabel.gotoAndStop(13);
			Voltage = 0;
		  }
		  if (rbValue1 =="3") {
			charge.gotoAndStop(2);
			vLabel.gotoAndStop(14);
			Voltage = 1.5;
		  }
		  if (rbValue1 =="4") {
			charge.gotoAndStop(3);
			vLabel.gotoAndStop(15);
			Voltage = 3;
		  }
		}
	} else {		
		light.visible = false; 
		sw.gotoAndStop(0);
		vLabel.visible = true;
		charge.visible = false;
		if(rbValue2 =="2"){
		if (rbValue1 =="1") vLabel.gotoAndStop(0);
		if (rbValue1 =="2") vLabel.gotoAndStop(1);
		if (rbValue1 =="3") vLabel.gotoAndStop(2);
		if (rbValue1 =="4") vLabel.gotoAndStop(3);
		}
		if(rbValue2 =="1"){
		if (rbValue1 =="1") vLabel.gotoAndStop(4);
		if (rbValue1 =="2") vLabel.gotoAndStop(5);
		if (rbValue1 =="3") vLabel.gotoAndStop(6);
		if (rbValue1 =="4") vLabel.gotoAndStop(7);
		}
	}
currentV();
	}
	}
//radioButtons______________________________________________	

for(var i = 1; i<= 4; i++){
			 	rbGroup1["RadBut_" + i].name = "RadBut_" + i;
				rbGroup1["RadBut_" + i].addEventListener("click", rbOn1); 
	         }

function rbOn1(event) {
   event.nativeEvent.preventDefault();
     for(var i = 1; i<= 4; i++){
				  rbGroup1["RadBut_" + i].gotoAndStop (0); 
			     }
				 
				 event.currentTarget.gotoAndStop(2);				  
				rbValue1 =  event.currentTarget.name.substr(7,8);
				
				if (rbValue1 =="1") {
	        charge.gotoAndStop(0);
		      flashLight.gotoAndStop(0);
		      
	if (!reverseBatt) {
			Voltage = 1.5;
			vLabel.gotoAndStop(0);
			if (sw.currentFrame==1) vLabel.gotoAndStop(8);
		} else {
			Voltage = 1.5;
			vLabel.gotoAndStop(4);
			if (sw.currentFrame==1) {

                vLabel.gotoAndStop(12); 
				charge.visible = true;
				charge.gotoAndStop(5);
			}
		}
  }
	if (rbValue1 =="2") {
		flashLight.gotoAndStop(1);
		charge.gotoAndStop(1);
		if (!reverseBatt) {
			Voltage = 3;
			vLabel.gotoAndStop(1);
			if (sw.currentFrame==1)vLabel.gotoAndStop(9);
		} else {
			Voltage = 0;
			vLabel.gotoAndStop(5);
			if (sw.currentFrame==1){
			charge.visible = false;
			 vLabel.gotoAndStop(13);
			}
		}
	}
if (rbValue1 =="3") {
		flashLight.gotoAndStop(2);
		charge.gotoAndStop(2);
		if (!reverseBatt) {
			Voltage = 4.5;
			vLabel.gotoAndStop(2);
			if (sw.currentFrame==1)vLabel.gotoAndStop(10);
		} else {
			Voltage = 3;
			vLabel.gotoAndStop(6);
			if (sw.currentFrame==1) {
				charge.visible = true;
				vLabel.gotoAndStop(14);
			}
		}
	}

	if (rbValue1 =="4") {
		flashLight.gotoAndStop(3);
		charge.gotoAndStop(3);
		if (!reverseBatt) {
			Voltage = 6;
			vLabel.gotoAndStop(3);
			if (sw.currentFrame==1)vLabel.gotoAndStop(11);
		} else {
			Voltage = 4.5;
			vLabel.gotoAndStop(7);
			if (sw.currentFrame==1) {
				charge.visible = true;
			}
		}
	}
if (reverseBatt) {

		flashLight.b1.gotoAndStop(1);
	} else {
		flashLight.b1.gotoAndStop(2);
	}
	currentV();

}


for(var i = 1; i<= 2; i++){
			 	rbGroup2["RadBut_" + i].name = "RadBut_" + i;
				 rbGroup2["RadBut_" + i].addEventListener("click", rbOn2); 
	         }
    
function rbOn2(event) {
   event.nativeEvent.preventDefault();
     for(var i = 1; i<= 2; i++){
				  rbGroup2["RadBut_" + i].gotoAndStop (0); 
			     }
       event.currentTarget.gotoAndStop(2);				  
				rbValue2 =  event.currentTarget.name.substr(7,8);
				if (rbValue2=="1") {
					reverseBatt = true;
		flashLight.b1.gotoAndStop(1);
		if (rbValue1 =="1") {
			Voltage = 1.5;
			vLabel.gotoAndStop(4);
		if (sw.currentFrame==1){
		    vLabel.gotoAndStop(12);
			charge.gotoAndStop(4);
		    }
		}
		if (rbValue1 =="2") {
			Voltage = 0;
			vLabel.gotoAndStop(5);
		if (sw.currentFrame==1){
		    vLabel.gotoAndStop(13);
			charge.visible = false;
		    }
		}
		if (rbValue1 =="3") {
			Voltage = 1.5;
			vLabel.gotoAndStop(6);
		if (sw.currentFrame==1){
		    vLabel.gotoAndStop(14);
		    }
		}
		if (rbValue1 =="4") {
			Voltage = 3;
			vLabel.gotoAndStop(7);
			if (sw.currentFrame==1){
		    vLabel.gotoAndStop(15);
		    }
		}
		
		
	}
if (rbValue2=="2") {
	reverseBatt = false;
		flashLight.b1.gotoAndStop(0);
		console.log(rbValue1);
		if (rbValue1 =="1") {
			Voltage = 1.5;
			vLabel.gotoAndStop(0);
			if (sw.currentFrame==1){
		    vLabel.gotoAndStop(8);
		    console.log(vLabel.currentFrame);
			charge.gotoAndStop(0);
		    }
		}
		if (rbValue1 =="2") {
			Voltage = 3;
			vLabel.gotoAndStop(1);
			if (sw.currentFrame==1){
		    vLabel.gotoAndStop(9);
			charge.visible = true;
		    }
		}
		if (rbValue1 =="3") {
			Voltage = 4.5;
			vLabel.gotoAndStop(2);
			if (sw.currentFrame==1){
		    vLabel.gotoAndStop(10);

		    }
		}
		if (rbValue1 =="4") {
			Voltage = 6;
			vLabel.gotoAndStop(3);
			if (sw.currentFrame==1){
		    vLabel.gotoAndStop(11);

		    }
		}
		
	}
	currentV();
}

//___________________________________________________

sliderThumb1.addEventListener("pressmove", sliding1); 
var zeroP; 
function sliding1(event){
	    event.nativeEvent.preventDefault();
	    zeroP = slidertrack1.x;
	    event.currentTarget.x = event.stageX;
	  sliderDrag(1,1,999,0.1,1,185, zeroP);
   } 

sliderThumb2.addEventListener("pressmove", sliding2); 

function sliding2(event){
	    event.nativeEvent.preventDefault();
	    zeroP = slidertrack2.x;
	    event.currentTarget.x = event.stageX;
	  sliderDrag(2,1,999,0.1,1,185, zeroP);
   } 


function sliderDrag(sliderNum, shift, area, step, rounding, sliderTrackWidth, zeroP) {


		if (stage.mouseX < zeroP)  
		{
			exportRoot["sliderThumb" + sliderNum].x = zeroP;
		}
		if (stage.mouseX > zeroP + sliderTrackWidth)
		{ 
			exportRoot["sliderThumb" + sliderNum].x = zeroP + sliderTrackWidth;
		}
 percent = (exportRoot["sliderThumb" + sliderNum].x - zeroP)/sliderTrackWidth*area;  

  exportRoot["val" + sliderNum].text = my_round((percent + shift) * step,rounding).toString();
       
       currentV();
        stage.update();
   
 }


function currentV() {
	if(rbValue1 =="2" && reverseBatt){
	light.visible = false;
	}else{
		if(sw.currentFrame==1){
	light.visible = true;
		}
	} 

currentC = my_round(Voltage/Number(val1.text),2);
	
if(sw.currentFrame == 1){	
	current.text = "Current = " + currentC + " A";
}else{
	
	current.text = "Current = 0.00 A";
}
	bulbPower = Voltage*Voltage/Number(val1.text);
	cA=0.2+bulbPower/50; 

if(bulbPower<Number(val2.text)){
	  cR = 255;
	  cG =(bulbPower/Number(val2.text))*255;
	  cB =(bulbPower/Number(val2.text))*255;
	
	}
	if(bulbPower==Number(val2.text)){
	  cR = 255;
	  cG = 255;
	  cB = 255;
	}
	if(bulbPower>Number(val2.text)){
	  cR = (Number(val2.text)/bulbPower)*255;
	  cG = (Number(val2.text)/bulbPower)*255;
	  cB = 255;
	}
var colorL = cR << 16 | cG << 8 | cB;

light.removeAllChildren();
 var g = new createjs.Graphics();
 g.beginFill("#" + colorL.toString(16));
g.moveTo(0,0);
g.lineTo(168,68);
g.lineTo(168,130);
g.lineTo(0,196);
g.lineTo(0,0);

var sL = new createjs.Shape(g);
sL.alpha = cA;
light.addChild(sL);

	//console.log(bulbPower/val2);
	if(bulbPower/Number(val2.text)>1.2 && sw.currentFrame ==1){
	 sw.swB.mouseEnabled = false;
    dis_mc.visible = true;
    buble.play();
	     current.text = "Current = 0.00 A"; 
	    rb.alpha= 1; 
      rb.mouseEnabled = true;
	  vLabel.visible = true;
	  charge.visible = false;
	light.visible = false;
   sliderThumb1.removeEventListener("pressmove", sliding1);
   sliderThumb2.removeEventListener("pressmove", sliding2);
	  }


stage.update();

}

rb.addEventListener("click", bulbReplace); 

function bulbReplace(event){
	event.nativeEvent.preventDefault();
 buble.gotoAndStop(0);
	 dis_mc.visible = false;
	  rb.alpha = 0.5;
      rb.mouseEnabled = false;
	  vLabel.visible = true;
	  charge.visible = false;
	  light.visible = false;
	  sw.swB.mouseEnabled = true;
	  sw.gotoAndStop(0);
	  buble.gotoAndStop(0);
	sliderThumb1.addEventListener("pressmove", sliding1); 
	sliderThumb2.addEventListener("pressmove", sliding2); 
	}


}

function my_round(number, n) {
	var k = Math.pow(10, n);
	var t = Math.round(number * k) / k;

	var b;
	var s = t.toString().length - t.toString().indexOf(".");
	var d = n - s + 1;
	if (t.toString().indexOf(".") == -1) {

		b = t + ".0";
		for (var i = 0; i < n - 1; i++) {
			b = b + "0";
		}
	}
	else {
		if (d > 0) {
			b = t + "0";
			for (i = 0; i < d - 1; i++) {
				b = b + "0";
			}
		}
		if (d == 0) {
			b = t;
		}
	}
	return b;
       }
