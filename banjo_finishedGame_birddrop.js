(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"banjo_finishedGame_birddrop_atlas_1", frames: [[712,1068,770,778],[0,0,1485,1066],[0,1068,710,848]]},
		{name:"banjo_finishedGame_birddrop_atlas_2", frames: [[1172,870,533,496],[690,1616,662,421],[1354,1368,533,496],[0,1443,688,446],[1172,448,663,420],[1172,0,688,446],[0,0,768,479],[0,481,768,479],[0,962,768,479],[770,0,400,806],[770,808,400,806]]},
		{name:"banjo_finishedGame_birddrop_atlas_3", frames: [[0,1451,650,326],[1061,455,650,326],[1061,783,650,326],[1428,1111,295,467],[1713,432,295,467],[1725,901,295,467],[1587,0,386,430],[535,0,524,453],[535,910,386,430],[0,996,524,453],[0,0,533,496],[652,1342,386,430],[535,455,524,453],[0,498,533,496],[1040,1111,386,430],[1061,0,524,453],[1040,1543,295,467],[1725,1370,295,467],[0,1779,872,236]]},
		{name:"banjo_finishedGame_birddrop_atlas_4", frames: [[0,1394,189,156],[191,1394,189,136],[382,1426,189,136],[368,1670,226,101],[0,1701,226,101],[1245,1397,245,110],[297,0,241,431],[1066,1070,468,79],[702,856,364,133],[1064,289,304,230],[1066,1151,468,79],[1068,896,364,133],[1370,289,304,230],[396,1180,468,79],[1434,935,364,133],[1657,1540,254,97],[1725,1217,213,163],[702,777,324,61],[368,1571,254,97],[662,991,200,187],[0,946,201,190],[864,991,200,187],[789,1648,186,105],[573,1426,176,143],[1245,1509,208,120],[1682,1382,196,156],[1203,1741,186,104],[1391,1749,186,104],[1579,1749,186,104],[191,1532,175,142],[1794,0,239,237],[1548,697,232,236],[1302,1232,188,163],[1321,648,225,246],[297,433,239,237],[1782,697,232,236],[432,1261,188,163],[622,1261,188,163],[0,469,239,237],[0,708,232,236],[1492,1261,188,163],[241,672,225,244],[538,515,239,235],[468,752,232,236],[1055,1369,188,163],[812,1371,188,163],[1228,1631,224,108],[1454,1639,224,108],[1002,1534,224,110],[1680,1639,224,108],[977,1646,224,108],[751,1536,224,110],[0,1552,163,147],[1880,1382,163,153],[624,1648,163,147],[1492,1426,163,153],[0,0,295,467],[942,0,282,287],[540,236,260,277],[802,289,260,277],[234,918,160,271],[1226,0,282,287],[1510,0,282,287],[1800,935,152,280],[1050,648,269,206],[1913,1537,105,88],[1676,289,301,202],[1519,521,118,93],[1676,493,280,202],[779,568,269,207],[1940,1217,104,92],[1064,521,453,125],[396,990,264,153],[1536,1070,187,189],[0,1138,187,189],[866,1180,187,189],[540,0,400,234],[1055,1232,245,135],[189,1261,241,131]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4703 = function() {
	this.initialize(img.CachedBmp_4703);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2878,190);


(lib.CachedBmp_4702 = function() {
	this.initialize(img.CachedBmp_4702);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2892,183);


(lib.CachedBmp_4701 = function() {
	this.initialize(img.CachedBmp_4701);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2905,183);


(lib.CachedBmp_4700 = function() {
	this.initialize(img.CachedBmp_4700);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2918,183);


(lib.CachedBmp_4699 = function() {
	this.initialize(img.CachedBmp_4699);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2932,183);


(lib.CachedBmp_4698 = function() {
	this.initialize(img.CachedBmp_4698);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2945,183);


(lib.CachedBmp_4697 = function() {
	this.initialize(img.CachedBmp_4697);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2960,183);


(lib.CachedBmp_4696 = function() {
	this.initialize(img.CachedBmp_4696);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2974,183);


(lib.CachedBmp_4695 = function() {
	this.initialize(img.CachedBmp_4695);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2988,185);


(lib.CachedBmp_4694 = function() {
	this.initialize(img.CachedBmp_4694);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3002,193);


(lib.CachedBmp_4693 = function() {
	this.initialize(img.CachedBmp_4693);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3017,202);


(lib.CachedBmp_4692 = function() {
	this.initialize(img.CachedBmp_4692);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3017,202);


(lib.CachedBmp_4691 = function() {
	this.initialize(img.CachedBmp_4691);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3017,202);


(lib.CachedBmp_4690 = function() {
	this.initialize(img.CachedBmp_4690);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3017,202);


(lib.CachedBmp_4689 = function() {
	this.initialize(img.CachedBmp_4689);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3018,202);


(lib.CachedBmp_4688 = function() {
	this.initialize(img.CachedBmp_4688);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3020,201);


(lib.CachedBmp_4687 = function() {
	this.initialize(img.CachedBmp_4687);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3024,200);


(lib.CachedBmp_4686 = function() {
	this.initialize(img.CachedBmp_4686);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3033,197);


(lib.CachedBmp_4685 = function() {
	this.initialize(img.CachedBmp_4685);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3048,193);


(lib.CachedBmp_4684 = function() {
	this.initialize(img.CachedBmp_4684);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3073,192);


(lib.CachedBmp_4683 = function() {
	this.initialize(img.CachedBmp_4683);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3112,192);


(lib.CachedBmp_4682 = function() {
	this.initialize(img.CachedBmp_4682);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3170,192);


(lib.CachedBmp_4681 = function() {
	this.initialize(img.CachedBmp_4681);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3253,203);


(lib.CachedBmp_4680 = function() {
	this.initialize(img.CachedBmp_4680);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3370,218);


(lib.CachedBmp_4679 = function() {
	this.initialize(img.CachedBmp_4679);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3529,239);


(lib.CachedBmp_4678 = function() {
	this.initialize(img.CachedBmp_4678);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3741,284);


(lib.CachedBmp_4677 = function() {
	this.initialize(img.CachedBmp_4677);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4676 = function() {
	this.initialize(img.CachedBmp_4676);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4675 = function() {
	this.initialize(img.CachedBmp_4675);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4674 = function() {
	this.initialize(img.CachedBmp_4674);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4673 = function() {
	this.initialize(img.CachedBmp_4673);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4672 = function() {
	this.initialize(img.CachedBmp_4672);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4671 = function() {
	this.initialize(img.CachedBmp_4671);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4670 = function() {
	this.initialize(img.CachedBmp_4670);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4669 = function() {
	this.initialize(img.CachedBmp_4669);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4668 = function() {
	this.initialize(img.CachedBmp_4668);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4667 = function() {
	this.initialize(img.CachedBmp_4667);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4666 = function() {
	this.initialize(img.CachedBmp_4666);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4665 = function() {
	this.initialize(img.CachedBmp_4665);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4664 = function() {
	this.initialize(img.CachedBmp_4664);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3127,190);


(lib.CachedBmp_4663 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8491 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8490 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8489 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4659 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4658 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4657 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8488 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8487 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8486 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8485 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8484 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8483 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8482 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8481 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8480 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8479 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8478 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8477 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8476 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4643 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8475 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8474 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8473 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8472 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4638 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8471 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4636 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8470 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8469 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8468 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4634 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8467 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8466 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8465 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8464 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8463 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8462 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8461 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8460 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8459 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8458 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8457 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8456 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8455 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8454 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8453 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8452 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8451 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8450 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8449 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8448 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8447 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8446 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8445 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8444 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8443 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8442 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8441 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8440 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8439 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8438 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8437 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8436 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8435 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8434 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8433 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4598 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8432 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4591 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8431 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8430 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8429 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8428 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8427 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8426 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8425 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4587 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8424 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4580 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8423 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8422 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8421 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8420 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8419 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8418 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4573 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8417 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8416 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4575 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8415 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4565 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8414 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4563 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8413 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8412 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4561 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8411 = function() {
	this.initialize(img.CachedBmp_8411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1111,2123);


(lib.CachedBmp_8410 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8409 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8408 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4554 = function() {
	this.initialize(img.CachedBmp_4554);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2208,4885);


(lib.CachedBmp_4553 = function() {
	this.initialize(img.CachedBmp_4553);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1552,3434);


(lib.CachedBmp_4551 = function() {
	this.initialize(img.CachedBmp_4551);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1683,4568);


(lib.CachedBmp_4550 = function() {
	this.initialize(img.CachedBmp_4550);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1683,4568);


(lib.CachedBmp_8407 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4548 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8406 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4546 = function() {
	this.initialize(img.CachedBmp_4546);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2897,192);


(lib.CachedBmp_4545 = function() {
	this.initialize(img.CachedBmp_4545);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2910,171);


(lib.CachedBmp_4544 = function() {
	this.initialize(img.CachedBmp_4544);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2924,170);


(lib.CachedBmp_4543 = function() {
	this.initialize(img.CachedBmp_4543);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2937,171);


(lib.CachedBmp_4542 = function() {
	this.initialize(img.CachedBmp_4542);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2951,173);


(lib.CachedBmp_4541 = function() {
	this.initialize(img.CachedBmp_4541);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2964,174);


(lib.CachedBmp_4540 = function() {
	this.initialize(img.CachedBmp_4540);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2979,175);


(lib.CachedBmp_4539 = function() {
	this.initialize(img.CachedBmp_4539);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2993,176);


(lib.CachedBmp_4538 = function() {
	this.initialize(img.CachedBmp_4538);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3008,181);


(lib.CachedBmp_4537 = function() {
	this.initialize(img.CachedBmp_4537);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3022,190);


(lib.CachedBmp_4536 = function() {
	this.initialize(img.CachedBmp_4536);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3037,204);


(lib.CachedBmp_4535 = function() {
	this.initialize(img.CachedBmp_4535);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3037,204);


(lib.CachedBmp_4534 = function() {
	this.initialize(img.CachedBmp_4534);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3037,204);


(lib.CachedBmp_4533 = function() {
	this.initialize(img.CachedBmp_4533);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3037,204);


(lib.CachedBmp_4532 = function() {
	this.initialize(img.CachedBmp_4532);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3038,203);


(lib.CachedBmp_4531 = function() {
	this.initialize(img.CachedBmp_4531);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3040,203);


(lib.CachedBmp_4530 = function() {
	this.initialize(img.CachedBmp_4530);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3044,201);


(lib.CachedBmp_4529 = function() {
	this.initialize(img.CachedBmp_4529);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3052,199);


(lib.CachedBmp_4528 = function() {
	this.initialize(img.CachedBmp_4528);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3068,195);


(lib.CachedBmp_4527 = function() {
	this.initialize(img.CachedBmp_4527);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3093,193);


(lib.CachedBmp_4526 = function() {
	this.initialize(img.CachedBmp_4526);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3132,190);


(lib.CachedBmp_4525 = function() {
	this.initialize(img.CachedBmp_4525);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3190,187);


(lib.CachedBmp_4524 = function() {
	this.initialize(img.CachedBmp_4524);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3274,196);


(lib.CachedBmp_4523 = function() {
	this.initialize(img.CachedBmp_4523);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3391,210);


(lib.CachedBmp_4522 = function() {
	this.initialize(img.CachedBmp_4522);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3551,232);


(lib.CachedBmp_4521 = function() {
	this.initialize(img.CachedBmp_4521);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3766,286);


(lib.CachedBmp_4520 = function() {
	this.initialize(img.CachedBmp_4520);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4519 = function() {
	this.initialize(img.CachedBmp_4519);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4518 = function() {
	this.initialize(img.CachedBmp_4518);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4517 = function() {
	this.initialize(img.CachedBmp_4517);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4516 = function() {
	this.initialize(img.CachedBmp_4516);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4515 = function() {
	this.initialize(img.CachedBmp_4515);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4514 = function() {
	this.initialize(img.CachedBmp_4514);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4513 = function() {
	this.initialize(img.CachedBmp_4513);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4512 = function() {
	this.initialize(img.CachedBmp_4512);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4511 = function() {
	this.initialize(img.CachedBmp_4511);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4510 = function() {
	this.initialize(img.CachedBmp_4510);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4509 = function() {
	this.initialize(img.CachedBmp_4509);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4508 = function() {
	this.initialize(img.CachedBmp_4508);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_4507 = function() {
	this.initialize(img.CachedBmp_4507);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3147,191);


(lib.CachedBmp_8405 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8404 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8403 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8402 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8401 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8400 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8399 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8398 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4498 = function() {
	this.initialize(ss["banjo_finishedGame_birddrop_atlas_4"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.youWinBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("YOU\nWIN !!", "96px 'Lazenby Computer'");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 434;
	this.text.parent = this;
	this.text.setTransform(179.1,-218.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8).p("A8lyvMA5LAAAMAAAAlfMg5LAAAg");
	this.shape.setTransform(183.025,-120.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("A8lSwMAAAglfMA5LAAAMAAAAlfg");
	this.shape_1.setTransform(183.025,-120.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.youWinBox, new cjs.Rectangle(-39.9,-244,438.09999999999997,369.7), null);


(lib.youLoseBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("You Lose !", "60px 'Modak'");
	this.text.textAlign = "center";
	this.text.lineHeight = 91;
	this.text.lineWidth = 340;
	this.text.parent = this;
	this.text.setTransform(179.15,-112.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("A8HvGMA4PAAAIAAeNMg4PAAAg");
	this.shape.setTransform(179.95,-96.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("A8HPHIAA+NMA4PAAAIAAeNg");
	this.shape_1.setTransform(179.95,-96.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-195.8,364.9,307.5);


(lib.youLosetext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("YOU LOSE !", "125px 'Modak'");
	this.text.textAlign = "center";
	this.text.lineHeight = 189;
	this.text.lineWidth = 712;
	this.text.parent = this;
	this.text.setTransform(358.05,-150.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("Eg38gPAMBv5AAAIAAeBMhv5AAAg");
	this.shape.setTransform(358.075,-110.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCCC").s().p("Eg38APBIAA+BMBv5AAAIAAeBg");
	this.shape_1.setTransform(358.075,-110.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.youLosetext, new cjs.Rectangle(-4,-211,724.2,251), null);


(lib.wave = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wave_front
	this.instance = new lib.CachedBmp_4664();
	this.instance.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_1 = new lib.CachedBmp_4665();
	this.instance_1.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_2 = new lib.CachedBmp_4666();
	this.instance_2.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_3 = new lib.CachedBmp_4667();
	this.instance_3.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_4 = new lib.CachedBmp_4668();
	this.instance_4.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_5 = new lib.CachedBmp_4669();
	this.instance_5.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_6 = new lib.CachedBmp_4670();
	this.instance_6.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_7 = new lib.CachedBmp_4671();
	this.instance_7.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_8 = new lib.CachedBmp_4672();
	this.instance_8.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_9 = new lib.CachedBmp_4673();
	this.instance_9.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_10 = new lib.CachedBmp_4674();
	this.instance_10.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_11 = new lib.CachedBmp_4675();
	this.instance_11.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_12 = new lib.CachedBmp_4676();
	this.instance_12.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_13 = new lib.CachedBmp_4677();
	this.instance_13.setTransform(-314.2,32.7,0.2186,0.2186);

	this.instance_14 = new lib.CachedBmp_4678();
	this.instance_14.setTransform(-383.1,29.75,0.2186,0.2186);

	this.instance_15 = new lib.CachedBmp_4679();
	this.instance_15.setTransform(-361.3,35,0.2186,0.2186);

	this.instance_16 = new lib.CachedBmp_4680();
	this.instance_16.setTransform(-345.15,36.15,0.2186,0.2186);

	this.instance_17 = new lib.CachedBmp_4681();
	this.instance_17.setTransform(-333.25,36.95,0.2186,0.2186);

	this.instance_18 = new lib.CachedBmp_4682();
	this.instance_18.setTransform(-324.7,37.45,0.2186,0.2186);

	this.instance_19 = new lib.CachedBmp_4683();
	this.instance_19.setTransform(-318.8,37.8,0.2186,0.2186);

	this.instance_20 = new lib.CachedBmp_4684();
	this.instance_20.setTransform(-314.8,38.05,0.2186,0.2186);

	this.instance_21 = new lib.CachedBmp_4685();
	this.instance_21.setTransform(-312.2,38.15,0.2186,0.2186);

	this.instance_22 = new lib.CachedBmp_4686();
	this.instance_22.setTransform(-310.7,37.65,0.2186,0.2186);

	this.instance_23 = new lib.CachedBmp_4687();
	this.instance_23.setTransform(-309.85,37.2,0.2186,0.2186);

	this.instance_24 = new lib.CachedBmp_4688();
	this.instance_24.setTransform(-309.4,36.95,0.2186,0.2186);

	this.instance_25 = new lib.CachedBmp_4689();
	this.instance_25.setTransform(-309.25,36.85,0.2186,0.2186);

	this.instance_26 = new lib.CachedBmp_4690();
	this.instance_26.setTransform(-309.15,36.75,0.2186,0.2186);

	this.instance_27 = new lib.CachedBmp_4691();
	this.instance_27.setTransform(-309.15,36.75,0.2186,0.2186);

	this.instance_28 = new lib.CachedBmp_4692();
	this.instance_28.setTransform(-309.15,36.75,0.2186,0.2186);

	this.instance_29 = new lib.CachedBmp_4693();
	this.instance_29.setTransform(-309.1,36.75,0.2186,0.2186);

	this.instance_30 = new lib.CachedBmp_4694();
	this.instance_30.setTransform(-309.3,36.65,0.2186,0.2186);

	this.instance_31 = new lib.CachedBmp_4695();
	this.instance_31.setTransform(-309.55,36.6,0.2186,0.2186);

	this.instance_32 = new lib.CachedBmp_4696();
	this.instance_32.setTransform(-309.75,36.5,0.2186,0.2186);

	this.instance_33 = new lib.CachedBmp_4697();
	this.instance_33.setTransform(-309.95,36.5,0.2186,0.2186);

	this.instance_34 = new lib.CachedBmp_4698();
	this.instance_34.setTransform(-310.15,36.4,0.2186,0.2186);

	this.instance_35 = new lib.CachedBmp_4699();
	this.instance_35.setTransform(-310.4,36.35,0.2186,0.2186);

	this.instance_36 = new lib.CachedBmp_4700();
	this.instance_36.setTransform(-310.6,36.25,0.2186,0.2186);

	this.instance_37 = new lib.CachedBmp_4701();
	this.instance_37.setTransform(-310.85,36.15,0.2186,0.2186);

	this.instance_38 = new lib.CachedBmp_4702();
	this.instance_38.setTransform(-311.05,36.1,0.2186,0.2186);

	this.instance_39 = new lib.CachedBmp_4703();
	this.instance_39.setTransform(-311.3,36,0.2186,0.2186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).wait(1));

	// wave_back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("A19BEQxcglkmBuIAAj7QDwiJFbAyIL+ByQKFgLHDgfQGXAwFCBWIc2h8QErghE0ApIAADGQhqgDhugmQjMBLjGhiQkIBQmShIQi3AvjfApQkCAxk8AnQvShlvTgqg");
	this.shape.setTransform(-33.725,53.0325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AsgBkQkvgSkugOIhEgCQjKgGitgBQnbgCkKAjQiRAThRAeIAAj7QDwiJFbAzIAdAEII8BVIClAYIDWgEQH8gNF2gZQBlAMBgAOQEiAsDyBAICKgJIaghyIANgBQEMgdEUAdIA+AIIAAB3IAABPQgbgBgagDQhQgIhSgcQjMBLjHhjIgMAEQkFBLmIhHIg9AQQifAmi7AiIgDABQj/Awk2AmIgFABQqkhFqlgqg");
	this.shape_1.setTransform(-33.7875,53.0449);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AsfBkQkvgRkvgNIhEgDQjKgGitgBQnagCkLAiQiSAThRAeQgCh+ACh9QDxiJFaAzIAdAEII9BVIClAYIDWgFQH9gOF1gZQBmAMBfAPQEiArDzBAICKgHIahhzIANgBQENgdEUAdIA9AIIAAB4QgBAnABAnQgagBgbgCQhQgIhSgcQjLBLjHhiIgMAEQkGBImIhFIg9APQieAmi8AiIgDABQj+Axk4AmIgFABQqjhEqmgrg");
	this.shape_2.setTransform(-33.9571,53.1332);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AsfBlIpegdIhEgDQjLgGitgDQnYAAkOAhQiSAShRAdQgEh9AFh9QDxiKFaA1IAdAEII9BUICmAYQBugDBogEQH/gPF0gYQBlAMBfAPQEjAsDyA/ICKgHIajhzIANgBQEOgdEUAeIA9AJIAAB3QgCAnACAnQgagBgagCQhQgIhSgbQjMBLjHhgIgMADQkHBFmHhDIg9APQieAki8AjIgDABQj+Ayk5AmIgFABQqkhDqngrg");
	this.shape_3.setTransform(-34.2266,53.2997);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AseBmQkugMkxgPIhEgDQjMgHisgCQnWAAkSAfQiTAShRAbQgHh7AJh+QDxiLFbA3IAdAEII+BUIClAWQBugDBpgFQIBgSFygXQBnAMBdARQEjArDzBAICLgGIamh0IANgBQENgdEVAeIA8AKIAAB4QgEAlADAnQgYAAgZgDQhQgHhSgaQjMBLjIhdIgMADQkJA/mFhAIg9APQifAii8AkIgDABQj9Azk6AmIgFABQqlhBqpgsg");
	this.shape_4.setTransform(-34.6408,53.4825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AscBoQkugIkygRIhFgDQjNgHisgEQnSADkYAcQiTARhRAaQgLh7ANh+QDziLFaA4IAdAFIJABTQBTALBTAKQBtgEBpgGQIFgXFvgVQBoANBcASQEkArDzBAICLgGIaphzIANgBQEOgdEWAeIA6ALIAAB4QgGAlAGAmQgYAAgWgDQhRgFhSgZQjMBKjIhaIgNAEQkMA3mCg9Ig9AQIlcBFIgDABQj7A0k+AmIgEABQqmg+qrgtg");
	this.shape_5.setTransform(-35.1846,53.748);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("AsaBqQkugDk0gTIhEgEIl6gMQnOAFkgAZQiTAPhSAYQgPh5ATh+QD0iNFaA7IAdAFIJBBUICnASQBugFBogHIN2gvQBoAMBbAUQEkArD1BBICKgFIauh0IAOgBQEOgdEXAeIA4AOIAAB4QgIAjAIAmQgWAAgVgCQhRgFhSgXQjNBLjIhXIgNAEQkPAumAg4Ig9APQigAdi8AnIgDABQj6A1lBAmIgEABQqog5qtgvg");
	this.shape_6.setTransform(-35.8559,54.0798);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AsZBtQktACk1gVIhFgEIl8gPQnHAIkpAVQiVAOhRAVQgVh3Aah9QD1iPFaA+IAdAGIJEBSQBTAJBTAHQBugGBpgJQIPgiFogRQBqANBYAWQEmArD1BAICLgDIa0h0IANgBQEQgdEXAfIA2APIAAB5QgLAiAKAkQgUABgSgCQhRgDhSgVQjNBKjKhSIgNAEQkTAjl8gzIg9AQQigAYi9AqIgEABQj4A3lEAmIgFABQqog1qygwg");
	this.shape_7.setTransform(-36.6691,54.4746);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AsWBxQktAJk4gZIhFgFQjVgIiogJQnBAMk0AQQiWAMhRASQgch0Ajh+QD3iSFaBEIAdAFIJGBSQBUAIBTAFQBugIBpgLQIVgpFkgOQBrANBWAZQEnArD2BAICMgBIa6h1IANgBQERgdEYAfIAzATIAAB4QgOAgAOAkQgSABgPgBQhRgBhSgTQjOBKjLhMIgNADQkYAWl4gsIg9AQQihATi+AsIgDACQj2A4lIAmIgFABQqrguq1gyg");
	this.shape_8.setTransform(-37.6772,54.9555);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("AsTB1QksARk7gbIhFgGQjZgJimgLIr6AbQiYAJhRAOQgkhxAth+QD5iUFaBIIAdAGIJJBRQBUAGBUADQBugJBpgOQIdgyFegLQBuAOBSAcQEoAqD4BAICMACIbDh1IANgCQESgdEZAgIAwAWIAAB5QgTAeATAjQgPABgMgBQhRABhTgPQjPBKjMhGIgMADQkfAGlyglIg+ARQihANi/AwIgDABQjzA7lOAmIgFABQqsgoq7g0g");
	this.shape_9.setTransform(-38.8923,55.5331);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066CC").s().p("AsPB6QkrAck/ggIhGgHQjdgKikgOQmvAWlRADQiaAHhRAKQguhvA6h+QD8iXFaBPIAdAHIJMBPQBUAFBVAAQBtgMBqgRQIng9FXgGQBwAOBOAgQEqAqD6BAICMAEIbNh2IANgBQEUgdEbAhIArAZIAAB6QgZAcAZAhIgTABQhRAEhTgMQjQBKjOg+IgNADQkmgOlrgaIg+AQQiiAHjAAzIgDACQjxA+lUAmIgFAAQqvgerAg4g");
	this.shape_10.setTransform(-40.3346,56.2212);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("AsKCBQkrAolDgmIhGgIQjigLiigRQmjAcllgFQibADhRAFQg8hrBKh+QD/ibFaBXIAdAHIJRBOQBVACBVgCQBtgPBqgVQIzhKFOgBQBzAPBKAlQEsApD7BAICNAIIbZh3IAOgBQEVgeEdAiIAnAfIAAB6QggAYAfAgIgJACQhSAIhTgHQjRBIjPgzIgOADQkugmlkgPIg/ARQijgCjBA4IgDABQjsBCldAmIgEABQqzgUrHg7g");
	this.shape_11.setTransform(-42.1309,57.0894);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("AsFCRQkpA4lJgsIhHgKQjpgMiegVQmUAkl+gQQiegChRgCQhMhlBeh+QEDihFaBhIAdAIIJWBNQBWgBBVgHQBugSBqgaQJChbFEAFQB2AQBEAsQEvAoD+A/ICNANIbph4IAOgBQEYgdEfAiIAgAlIAAB8QgoATAoAeQgDACAFACQhSAMhTgBQjTBIjSgnIgOADQk5hFlaAAIg/ASQikgNjDA+IgDABQjnBHlnAmIgFAAQq2gGrRhAg");
	this.shape_12.setTransform(-44.3115,57.3343);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("AsFCrQkoBOlQg1QgkgFgkgHQjygOiagcQl/AvmhgeQiigIhQgMQhjheB6h+QEJioFaBvIAdAJIJeBLQBWgGBXgMQBtgWBrgiQJXhzE0APQB8ARA7A0QE0AoEBA/ICOATIb+h5IAPgCQEbgdEjAjIAXAvIAAB9Qg0ANAzAbQAFADAOAEQhSARhUAHQjVBHjVgVIgOADQlKhwlMAVQggAIgfALQimgdjFBHIgEABQjgBNl1AmIgEABQhnAChoAAQpZAApyg8g");
	this.shape_13.setTransform(-46.6801,57.3768);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066CC").s().p("A3XD8QkKgTiOgrQlIBNn7hGQn8hFEkjBQEkjDFqCoIJzBEQDGgjDFheQPZkJBvDfQGYAwFBBWIc3h9QErggEzAoIAADGQhqgCCoAgQk2B7k7AhQmbj1lAB3QishEjOBdQjNBemaAnQrMA8sChWQi6BWjVAAQibAAiogug");
	this.shape_14.setTransform(-52.7073,60.0825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066CC").s().p("A3HD5QkGgRiRgsQhJAOhRAHQkkAal/gxQivgVhRghQiVhFCph0IACgBQA0gkA2gbQDqhuExCDIAyAFQEiAhEcAaIAfgFQCzgkC6hSQBtgcBkgXQIvh/DeBDQBOAZAeAzQFZAsEcBBQAyALAvAMQDMgPC0gLQBSgIBRgEQGogiHpgVIF7gYQEwgeErAhIAFBcIAABgQhZACB1AbIAbAGQg5AVgtAVQj2BTkHAZQiVhViNgnQh0gchuABQhwABhlAkQiYg2ihA2QgfAKgfAPIhCAeQg6AQhIAQQiqAmj1AVQiPAMiUAGQpLANpGg6IgRgBQi3BQjDAFIgdAAQiWAAihgpg");
	this.shape_15.setTransform(-51.3532,59.7913);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("A24D2QkCgRiTgtQhIAMhRAFQkpARl0grQiugThSgaQiXhBCZhsIABAAQAyglAzgfQDdhyE6B9IAyAFQEiAjEZAUIAfgGQCughC/hOQBtgbBlgVQIhh5DrBDQBOAZAgAxQFYAuEbA+QAyAKAuAKQDXgQCmgJQBTgKBPgDQGHgkIJgMQC/gKC6gMQE1gcEhAaIALBTIAABfQhSAGBsAdIAYAFQg5AVggAVQjvBQkOAWQiUhPiPglQhxgUhwABQhvABhkAhQiegyiZAxQgfAIgfAQIhAAgIiAAaQioAij1AUQiOALiVAGQpbACovgyIgQgBQi7BOi9AIIgoABQiRAAiagmg");
	this.shape_16.setTransform(-50,59.515);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("A2nDzQj+gPiWguQhIAJhPACQkwAJlqgmQisgQhSgTQiZg9CHhjIACgBQAuglAxgiQDPh4FEB3IAyAFQEjAlEWAPIAegGQCrghDEhJQBrgZBmgVQIUhwD4BDQBNAYAjAuQFVAxEbA7IBgASQDhgSCZgHQBTgMBOgDQFlgmIqgCQC/gJC3gLQE6gbEZATQAJAmAHAkIAABfQhMAJBkAfIAUAFQg6ATgSAWQjnBNkVAUQiUhJiRgjQhugOhwACQhwABhjAeQikgviRAuQgfAHgeAQQgdAPghATIh/AUQimAdj1ASQiOALiUAGQprgJoXgqIgQgBQjABMi2AKIg0ABQiLAAiSghg");
	this.shape_17.setTransform(-48.6961,59.2344);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066CC").s().p("A2WDwQj7gPiXguQhJAGhNgBQk2ABlfggQiqgOhUgMQiag5B1hbIACgBIBahLQDBh9FOByIAyAFQEkAnESAJIAegGQCnggDIhEQBrgYBngTQIGhpEGBCQBMAYAlAsQFUA0EaA3IBgAQQDrgUCLgFQBTgOBNgCQFEgoJKAIQC/gIC2gKQE+gaEQAMQANAhAIAgIAABeQhFANBbAhIAQAFQg5ARgEAWQjhBLkbARQiUhDiTgiQhrgGhxADQhwABhiAbQirgriIApQgfAGgdAQQgdAQgfAVQg1ADhIAKQimAYj0ASQiNAJiVAHQp6gUoAgiIgQgBQjEBKiwAMQghACghAAQiEAAiJgdg");
	this.shape_18.setTransform(-47.4256,58.9507);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066CC").s().p("A2FDtQj3gNiZgwQhJAEhMgEQk8gHlVgbIj8gQQicg1BjhTIACAAQApglAsgqQCziDFYBsIAyAFQElApEOADIAegGQCjgeDNhAQBqgWBogTQH5hhESBDQBLAXApAqQFSA2EZA0IBfANQD2gVB+gDQBTgRBMAAQEigrJqASQC/gHC0gKQFEgXEHAFQAPAcALAbIAABfQhAAQBUAjIAMAEQg5AQAJAWQjaBIkhAPQiTg+iWgfIjaAEQhwABhhAZQixgoiAAkQgfAFgdARQgcAQgdAXQgzgBhJAIQikATj1AQQiLAJiVAHQqKgfnpgaIgQAAQjJBIioAOQgoACgoAAQh+AAiAgZg");
	this.shape_19.setTransform(-46.1755,58.6744);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066CC").s().p("A1zDqQjzgMicgxQhIABhLgGQlCgQlKgVQimgIhWACQidgyBShLIABAAQAnglApguQCmiHFhBmIAxAFQEnAqELgCIAegGQCegdDSg8QBpgUBpgRQHrhaEgBDQBKAXArAnIJpBpIBfALQEAgXBwgBQBUgTBKABQEBgtKKAbQDAgFCxgJQFJgWD+gCQASAYANAWIAABfQg5ATBLAlIAJADQg5APAWAXQjTBFkoAMQiSg4iYgdQhlAIhzAEQhwAAhgAXQi3glh3AgQggAEgcASQgbAQgcAYQgygFhJAGQiiAPj1APQiKAIiWAGQqagpnRgSIgPAAQjOBGiiAQQgvAEgvAAQh2AAh4gWg");
	this.shape_20.setTransform(-45.0038,58.4168);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066CC").s().p("A1hDnQjvgLiegyQhIgBhKgJQlIgYlAgQQikgFhWAIQifgtBAhDIABgBQAlgkAmgxQCYiNFrBgIAxAGQEoArEHgHIAegHQCagbDXg3QBogUBqgQQHehSEsBDQBKAXAuAkQFOA7EYAtIBeAJQELgZBiACQBUgVBJABQDggvKrAlQC/gECvgIQFOgVD1gJQAWAUAPARIAABeQgzAXBDAnIAEADQg4AOAjAXQjMBCkuAKQiSgyiagcQhiAQh0AEQhwAAhfAUQi9ghhvAcQggACgcATQgaAQgaAaQgwgKhJAEQihALj1ANQiJAIiWAGQqqg0m6gKIgPAAQjSBEicATQg2AEg3AAQhuAAhvgSg");
	this.shape_21.setTransform(-43.8934,58.136);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066CC").s().p("A1NDkQjsgKihgzQhHgEhJgMQlNggk2gLQijgChXAQQiggqAug6IABgBQAigkAkg2QCKiSF1BbIAxAFQEpAuEDgOIAegGQCWgaDbgzQBngRBtgPQHPhLE6BDQBJAWAwAiQFNA+EXAqIBeAGQEVgaBVADQBUgXBIADQC/gzLKAvQDAgCCtgIQFSgTDtgPQAYAOARANIAABeQgsAbA6AoQAAAAAAABQgBAAAAAAQABABAAAAQAAABABAAQg4AMAxAYQjGA/k1AHQiRgsicgaQhfAXh1AFQhwAAheARQjDgehnAXQggACgbATQgaARgYAcQgvgOhJABQifAHj2AMIkdANQq6g/mkgDIgOABQjXBCiUAVQhBAGhAAAQhkAAhjgPg");
	this.shape_22.setTransform(-42.8223,57.874);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066CC").s().p("A08DhQjpgJiigzQhIgHhHgPQlTgoksgGQigABhYAWQiiglAcgyIABgBQAggkAhg5QB8iYF/BVIAxAGQEqAvD/gTIAegGQCSgZDgguQBmgRBugOQHBhCFHBCQBJAWAyAfQFLBBEXAmIBeAEQEfgcBHAGQBUgaBHAEQCeg1LqA5QDAgBCrgHQFXgSDkgWIAvASIAABdQgmAfAyAqQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQg4ALA+AYQi/A8k7AFQiQgmifgYQhcAeh2AFQhwAAhdAOQjKgaheATQggABgaATQgaARgWAeQgtgThJAAQieACj2AKIkdANQrKhKmMAFIgOABQjbBAiOAXQhJAHhJAAQhbAAhZgLg");
	this.shape_23.setTransform(-41.5882,57.5991);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066CC").s().p("A0uDeQjkgJilg0QhHgJhGgSQlagxkhABQieADhZAdQikghALgqIABgBQAdglAfg8QBuidGIBPIAxAGQErAxD8gZIAegGQCNgYDlgpQBmgPBugNQG0g7FUBCQBIAWA1AdQFJBDEWAjIBeACQEpgeA6AIQBVgcBFAFQB8g3MLBCQDAAACpgGQFcgQDbgdIA0AIIAABdQggAjAqAsQgGABgBABQg4AJBMAZQi4A6lCACQiQghiggWQhaAlh3AHQhwgBhcAMQjPgXhWAOQggAAgaAUQgZASgVAfQgrgXhKgDQibgCj3AJQiFAFiXAHQrahVl0AOIgOABQjgA+iHAZQhUAKhSAAQhQAAhPgJg");
	this.shape_24.setTransform(-40.0627,57.3515);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066CC").s().p("A0eDbQjggHiog2QhGgMhFgUQlgg5kWAGQidAGhaAkQilgegHghIABAAQAbgmAchAQBgiiGSBKIAxAFQEsAzD5geIAdgHIFzg7QBlgNBvgMQGng0FhBDQBHAVA4AaQFHBGEVAgIBdgBQE0gfAsAJQBVgeBEAGQBbg5MrBMQDBABCmgGQFhgODSgkQAiABAXgCIAABdQgZAmAhAuQgIABgCABQg4AIBZAZQixA3lJAAQiOgbijgUQhXAsh4AHQhwgBhbAJQjVgThOAKQgggCgaAVQgXASgUAhQgqgchJgEQiagHj3AIQiEAEiXAHQrqhgldAWIgNABQjlA8iBAcQhfALhcAAQhFAAhDgGg");
	this.shape_25.setTransform(-38.725,57.0854);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066CC").s().p("ASNC5QiZgMj2AHQiDADiYAHQr5hrlGAeIgNACIljBXQimAVicgLQjdgGipg2QhHgPhDgXQlmhBkMALQiaAJhcArQimgagYgZQAYgmAahEQBTinGbBEIAxAGQEtA0D1gkIAdgGQCFgVDvghQBkgMBwgKQGZgsFvBCQBGAVA6AYQFGBIEUAcIBdgDQE+ghAfAMQBVggBDAHQA5g8NLBWQDBADCkgGQFmgMDJgrQAlgEAagGIAABcQgTAqAZAwIgPABQg3AHBmAZQiqA0lPgDQiOgVilgSQhUA0h5AHQhwgBhaAHQjcgQhFAFQgggCgZAVQgXASgSAjQgogghKgGg");
	this.shape_26.setTransform(-37.375,57.195);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066CC").s().p("ASQCzQiXgQj3AFQiCADiYAIQsJh3kvAmIgMACQjuA4hzAgQinAWiZgIQjZgFisg3QhGgRhDgaQlrhKkCARQiZALhcAzQiogWgqgRIABAAQAVgmAYhHQBEitGlA+IAyAGQEtA3DygqIAcgHQCCgUDzgcQBjgKBygKQGLgkF8BCQBFAUA9AWQFEBLEUAZIBcgFQFJgjARAOQBVgjBCAIQAYg+NrBgQDBAECigFQFrgLDAgyQAogIAcgLIAABcQgNAuARAxIgTABQg3AFB0AaQijAxlWgFQiNgPingRQhSA7h5AIQhxgBhYAEQjigMg+ABQgggEgYAVQgWATgRAlQgmgkhKgJg");
	this.shape_27.setTransform(-36.075,57.5647);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0066CC").s().p("ASSCuQiVgUj3AEQiBABiYAIQsZiBkYAuIgMACQjyA2htAiQimAYiYgFQjWgEitg4QhHgUhBgcQlxhSj3AWQiXAOhdA5QiqgSg7gIQATgmAVhMQA3iyGuA5IAxAGQEvA4DugvIAdgHQB9gSD4gYQBigJBzgIQF+gdGIBCICFAnQFCBOETAVIBcgIQFTgkADAQQBWglBAAJQgJhAOLBpQDBAGCggFQFwgJC3g5QArgMAegQIAABbQgGAyAIAzIgWABQg3AECBAaQicAulcgIQiNgJipgPQhPBDh6AIQhxgBhXABQjpgJg0gDQghgFgYAWQgVATgPAnQglgphKgLg");
	this.shape_28.setTransform(-34.725,57.9074);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0066CC").s().p("ASVCqQjgglnDAXQspiMkAA2QkAA2hpAlQnvBLlVilQpliTjyClQisgOhNAAQARgmAShPQArjCHoBDQFDA+DzhAQCngXGkgcQFxgVGVBCQGOBxFLAWQG7gygMAUQBWgnA/AKQgqhDOrBzQMDAbDNiFIAADGQhqgDCoAgQjRA8pfgrQhLBJh8AJQmlgFg9gLQg8gLgeBYQgjguhKgMg");
	this.shape_29.setTransform(-33.4375,58.2181);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0066CC").s().p("ASSCxQgogDgvgGQi3gWlGANIhNACQssiGj7AzIgJACQjPArhrAhIglALQnfBIlOiZIgVgKQpgiRjzCiIgCACQirgOhNAAIgBAAQARgmAShPIABgCQAti/HkBCIAOADQEvA2D6g7IAJgBQCpgXGYgbIAVgBQFmgSGJBAIAlAKQF4BnE6AUIAlgEQGBgsAKANQAggOAfgIQAugLAnAGQgFgbCoAHQDkAGH1A+IBNADQKeAHDohwIAIBDIAAB8QhGACA9ATIALADQARAFAdAFQhJATh3AFQjoARmDgcQg+AzhWAPQgZAGgbAEQhrAEhTAAQjKgDhBgFIgYgDQg1gJghA8IgHARQgkgihHgKg");
	this.shape_30.setTransform(-34.05,57.6012);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0066CC").s().p("ASRC6QgpgBgvgIQisgYlPANIhOABQsviBj1AxIgIABQjQAqhqAhIgmALQndBHlOiaIgVgJQpeiQjyCiIgDABQiqgOhNAAIgBAAQARgmAShOIABgCQAsi/HiBBIAQADQEjAzEFg3IAJgBQCpgXGWgbIAXgBQFlgSGIA/IAlAJQF4BoE4ATIAlgDQFtgsAfAHQAhgNAegIQAvgKAmAFQAJgXCZAHQDqADHqA+IBNAEQJ9gGENhgIAOA8IAAB8Qg+AGA2AVIAIADIAkAJQhLAPh0ACQjvASl6gaQg/AshXANQgYAHgbAEQhpALhTACQjMgDg9gEIgagCQgzgJgmA0IgHAQQgkgYhDgFg");
	this.shape_31.setTransform(-34.7,56.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0066CC").s().p("ASODBQgpACgtgJQiigblaANIhNAAQsyh7jvAuIgIACQjPAohqAiIgmAKQncBGlOibIgVgIQpdiQjxCiIgDABQipgOhNAAIgCAAQARgmAShOIABgCQAsi/HhBBIAPADQEaAwEQg0IAJgBQCngXGXgbIAWgBQFkgTGHA/IAlAJQF4BoE3ASIAkgDQFZgrA1ABQAhgMAegIQAvgIAnAEQAVgUCJAIQDzAAHeA9IBMAFQJdgREwhRIAWA1IAAB7Qg2AKAwAYIAFACQAJAEAQAEQhMANhzgCQj1AUlxgaQhBAmhWAKQgZAIgZAGQhoARhTADQjOgDg7gCIgagDQgygIgpArIgHARQgmgNhAgDg");
	this.shape_32.setTransform(-35.325,56.3535);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066CC").s().p("A6/BiIgVgIQpbiOjxChIgDABQiogOhOAAIgCAAQARgmAShOIABgCQAsi/HgBBIAPADQEPAsEbgwIAJgBQCmgXGXgbIAWgBQFkgTGFA+IAmAJQF3BoE2ARIAkgCQFEgrBLgFQAggLAfgHQAvgIAnAEQAigQB6AHQD6gCHTA9IBMAGQI7geFWhCIAdAvIAAB7QgvAOApAZIADACQADADAKAEQhMAKhxgGQj8AWlogZQhDAghWAHQgYAKgZAGQhmAXhTAFIkIgEIgbgCQgxgHgtAiIgIAQQglgCg+ABQgoAEgtgLQiXgdllAOIhMgBQs0h2jqArIgIACQjPAmhqAjIgmAJQiTAWiFAAQkqAAjmhsg");
	this.shape_33.setTransform(-35.95,56.0505);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0066CC").s().p("A67BhIgWgHQpaiOjwChIgDABQingNhNgBIgDAAQARglARhOIACgDQAsi+HeBAIAPACQEEAqEngtIAJgBQCmgXGVgbIAWgBQFjgTGGA+IAlAIQF3BpE0AQIAlgCQEvgqBggLQAhgLAegHQAwgGAmAEQAxgOBqAIQEAgFHIA8IBNAHQIZgqF5gyIAlAnIAAB7QgnASAjAcIABABQgCADADADQhOAIhugKQkEAXlegYQhFAahWAFQgXAKgYAIQhlAdhSAHIkJgDQgNAAgOgCQgvgGgxAZIgIAQQgnAJg5AEQgpAHgtgNQiLgglwAOIhLgCQs4hwjkAoIgIACQjOAlhqAjIgmAJQiQAViDAAQksAAjnhtg");
	this.shape_34.setTransform(-36.5,56.0579);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066CC").s().p("A69BgIgVgHQpaiNjwChIgDABQimgNhNgBIgDAAQAQglAShOIACgDQAri+HdBAIAPACQD7AmExgpIAJgBQClgXGVgbIAWgBQFigTGFA9IAlAIQF3BpEyAPIAlgBIGRg7QAggKAggHQAugEAmADQA+gKBcAIQEHgIG9A7IBMAIQH4g2GegiIAsAgIAAB7QgfAWAbAdIgBABIgJAEQhQAGhsgNQkKAZlVgYQhIAUhUACQgYALgXAJQhkAjhRAJQjWgCgzAAQgNABgPgCQgugGg0ARIgIAPQgoAUg2AHQgqAKgrgOQiBgjl6AOIhKgDQs7hqjgAlIgHACQjNAkhpAjIgoAJQiNAUiBAAQkuAAjnhug");
	this.shape_35.setTransform(-36.5,56.0536);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0066CC").s().p("AQjDGQh2gkmFAOIhKgEQs9hmjaAkIgHABQjNAjhpAjIgoAIQnXBClKidIgWgGQpXiNjwCiIgDAAQimgNhNgBIgDAAQAQglAShOIACgCQAqi/HdA/IAPADQDvAjE9gmIAJgBQCkgXGVgbIAVgBQFigTGEA9IAlAHQF3BpExAOIAlAAIGShBQAggJAfgGQAvgEAmADQBLgHBNAIQEOgKGxA7IBMAJQHYhDHCgTIAzAZIAAB7QgXAaAUAgIgDABIgVACQhRADhpgQQkSAalLgWQhKANhUgBQgXANgXAJQhjAqhRAKQjXgCgwACQgOABgPgCQgtgFg4AIIgJAPQgoAegzALQgSAFgSAAQgYAAgYgJg");
	this.shape_36.setTransform(-36.5,56.1924);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0066CC").s().p("AQbDIQhrgomQAPIhJgGQtAhfjVAgIgHACQjMAhhpAkIgnAHQnXBClJieIgWgGQpWiMjvChIgDABQimgOhMAAIgEAAQARgmARhNIABgDQAri+HbA/IAQACQDlAgFHgiIAJgBQCjgXGVgbIAVgBQFigUGCA8IAlAHQF4BqEvANIAkAAQDzgpChgdQAfgIAggHQAugCAmACQBZgDA+AIQEWgNGlA7IBMAJQG2hOHngEIA6ATIAAB7QgPAdANAiIgGAAQgQACgPAAQhSAAhpgUQkWAclDgWQhNAIhTgEQgXANgWALQhiAwhQALQjagBgtADQgNABgRgCQgrgEg8gBIgIAPQgqApgwAOQgTAHgTAAQgXAAgWgJg");
	this.shape_37.setTransform(-36.5,56.3462);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0066CC").s().p("AQTDIQhhgpmZAOIhKgGQtChbjPAfIgGABQjNAghoAkIgpAHQnVBAlJieIgWgGQpUiLjuCiIgDAAQilgOhNAAIgEAAQARgmARhNIABgCQAri/HaA+IAPADQDaAdFTgfIAJgBQCjgXGTgbIAWgBQFggUGDA8IAkAGQF4BqEtAMIAkABQDggpC1gjIBAgNQAugBAmABQBnABAtAIQEegQGZA6IBNALQGUhbIMAMIBBALIAAB7QgIAhAHAkIgJABQgUABgXgBQhSgDhmgXQkeAdk5gUQhPABhTgHQgWAPgVALQhhA2hQAOQjcgBgqAEQgOABgRgCQgqgEhAgJIgJAOQgqA0gtASQgTAJgUAAQgVAAgWgLg");
	this.shape_38.setTransform(-36.5,56.5123);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0066CC").s().p("AQLDKQhVgtmlAPQuThfjLAfQjMAfhoAlQnvBMlVimQpliSjyCkQisgOhNAAQARgmAShPQArjBHoBDQDSAaFkgcQCngYGkgbQFxgVGVBCQGNBwE6AGIHWheQC+ADApALQFAgUG+BGQGLhtJhAmIAADGIgLAAQhoADiGgkQlzAnmFgqQh4BVhhASQjfAAgoAFQgoAFhjgbQhFBshBAAQgVAAgUgKg");
	this.shape_39.setTransform(-36.5125,56.6731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-383.1,29.8,817.7,62.10000000000001);


(lib.umbrella = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// groundshadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,51,0.498)").s().p("A0ZCRQodg9AAhUQAAhUIdg8QIdg8L8AAQL9AAIdA8QIdA8AABUQAABUodA9QodA8r9AAQr8AAodg8g");
	this.shape.setTransform(-46.425,165.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shapes
	this.instance = new lib.CachedBmp_4663();
	this.instance.setTransform(-255.05,-176.1,0.4401,0.4401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sketch (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(-85.525,20.5);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.umbrella, new cjs.Rectangle(-255,-176.1,393.3,361.79999999999995), null);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8491();
	this.instance.setTransform(-47.15,-34,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-34,94.5,78);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8490();
	this.instance.setTransform(-47.15,-34,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-34,94.5,68);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8489();
	this.instance.setTransform(-47.15,-34,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-34,94.5,68);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4659();
	this.instance.setTransform(-56.55,-25.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-25.3,113,50.5);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4658();
	this.instance.setTransform(-56.55,-25.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-25.3,113,50.5);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4657();
	this.instance.setTransform(-56.5,-25.3,0.4618,0.4618);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-25.3,113.2,50.8);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ADqE7Im5AAQgTh5gGiEQgMkHBDg4QBLg/B/AHQB2AGAvAyQAiAlAJEPQAECHgDCBg");
	this.shape.setTransform(-0.0019,-0.035);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4197C7").s().p("AjPE7QgTh5gGiEQgMkHBDg4QBLg/B/AHQB2AGAvAyQAiAlAJEPQAECHgDCBg");
	this.shape_1.setTransform(-0.0019,-0.035);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-32.7,49,66.30000000000001);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8488();
	this.instance.setTransform(-55.55,-98.05,0.4618,0.4618);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-98,111.3,199);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AVPj0IAPAAQABABABAAQADABADACQAUALASAKQAMAIALAHQACABADACQAFADAEAEQABAAACABQAEADAFADQABABABABQABABABAAIACACQADADAEACQAzArAMAqIABACIABAGAYMhRQABAGAAAGQAAAPgEAQQgBACgBAEIgPAbQgCADgCACIgpAAATwD1Mgn1AAAQkGhWAHhwQACgXANgYQgBAAgBAAQAAAAgBAAQgBgBAAAAQgBgBgBgBQgBAAAAgBQgEgDgDgDQgBgBAAgBQgCgDgBgCQgBAAAAgBQgGgNADgQQABgDABgDQALgqBChCQAUgUAagXQANgMAPgMQAJgIAKgIIAjAAAVgAAIBaAAAzej0MAojAAA");
	this.shape.setTransform(-1.5612,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("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");
	this.shape_1.setTransform(0,-0.0112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("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");
	this.shape_2.setTransform(-1.5612,-12.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.3,-25.3,320.6,51);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AVPj0IAPAAQABABABAAQADABADACQAUALASAKQAMAIALAHQACABADACQAFADAEAEQABAAACABQAEADAFADQABABABABQABABABAAIACACQADADAEACQAzArAMAqIABACIABAGAYMhRQABAGAAAGQAAAPgEAQQgBACgBAEIgPAbQgCADgCACIgpAAATwD1Mgn1AAAQkGhWAHhwQACgXANgYQgBAAgBAAQAAAAgBAAQgBgBAAAAQgBgBgBgBQgBAAAAgBQgEgDgDgDQgBgBAAgBQgCgDgBgCQgBAAAAgBQgGgNADgQQABgDABgDQALgqBChCQAUgUAagXQANgMAPgMQAJgIAKgIIAjAAAVgAAIBaAAAzej0MAojAAA");
	this.shape.setTransform(-1.5612,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("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");
	this.shape_1.setTransform(0,-0.0112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("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");
	this.shape_2.setTransform(-1.5612,-12.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.3,-25.3,320.6,51);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AY6CTQg+B7mMACQjbABj7ACQk/AClxADQjDACiwABQmnACk+gCQlvgEhRiEQgTgfgDglQgTjGHUhSQFMg6GugRQCxgHDAAAQF4AAE6AbQDuAUDKAkQHVBSAdDBQAGAogQAgg");
	this.shape.setTransform(-0.0046,-0.0056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AxuEbQlvgEhRiEQgTgfgDglQgTjGHUhSQFMg6GugRQCxgHDAAAQF4AAE6AbQDuAUDKAkQHVBSAdDBQAGAogQAgQg+B7mMACInWADIqwAFIlzADIljABQjSAAiwgBg");
	this.shape_1.setTransform(-0.0046,-0.0056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.5,-29.4,323.1,58.8);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AY6CTQg+B7mMACQjbABj7ACQk/AClxADQjDACiwABQmnACk+gCQlvgEhRiEQgTgfgDglQgTjGHUhSQFMg6GugRQCxgHDAAAQF4AAE6AbQDuAUDKAkQHVBSAdDBQAGAogQAgg");
	this.shape.setTransform(-0.0046,-0.0056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AxuEbQlvgEhRiEQgTgfgDglQgTjGHUhSQFMg6GugRQCxgHDAAAQF4AAE6AbQDuAUDKAkQHVBSAdDBQAGAogQAgQg+B7mMACInWADIqwAFIlzADIljABQjSAAiwgBg");
	this.shape_1.setTransform(-0.0046,-0.0056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.5,-29.4,323.1,58.8);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGHAdQgPgHgHgRQgGgQAGgPQgmALgngQIB8AAQAEANgLAKQAegKAbgNIBQAAQgrAcgvAWQgcANgUAAQgJAAgIgDgAvrAFQgZgBgTgLQgQgLABgNIFZAAIggAGQhUAQgrAGQhDAIg2AAIgGAAgAySgfIA7AAIgXAGIgJABQgOAAgNgHgAR+gaQgHgBgHgEIAjAAQgIAGgJAAIgEgBg");
	this.shape.setTransform(4.6125,24.6056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009966").s().p("AHODrQgCgHgGgHQgQgVgYgCQgPgBggABQgcAAgOgNQgEgMAYgNQAagOgBgMQAAgNgSgCQgQgBgQAHQgpAQhSAGInRAmQAEgHAggaQAXgTgFgSQgFgRgWgDQgRgCgWAGIiGAoIg3ASQACgEABgGQACgOgKgGQgPgJgfAOIhPAjQgyAXgbAGQgWAGgqAFQigASg/AFQAPgCACgUQACgVgPgKQgZgSgqAUIghAPQgSAIgQgBIBJhHQASgRgFgMQgGgOgcAEIk6AwQhgAMhcAAQACgPANgLQAMgJARgFIAfgJQARgGAKgJQALgLgBgSQgCgSgPgEQgLgCgTAMIhoBEQAqgwBFglQAsgXBXghQAzgUAdgJQAtgOAlgFIAtgEQAcgCARgEQARgDAXgIIAngOQBpgkCYgMQCxgHBYgGQAfgCAqgEQBvgMC8gbQDugiCGgFQBYgEBvAFQA6ACCDAJIAKAAQA5AEAeAFQAxAHAlAQQAaALAvAeQAxAfAYALQBLAiB7gBIBpgDQA9gCApAEQBRAGA8AnQAsAbATAkIgLgIQgSgKgKAGQgFABgCAHQgCAFACAGQACAKAMAJQANAIAJAHIiWgiQgngIgNARQgJANAMAeQAMAggFANQgHASgfAIQg7ARg9gHQg/gHg2gcIgZgNQgPgFgNADQgNADgFAQQgDALAEAGIhlhKQgRAOgDAXQgFAWALATQgdgWgQgKQgagQgXgFQgdgGgaALQgcALgKAZQAEgOgGgOQgHgOgNgGQggAkgjAfQg8AzhJAjQgbANgdAKQAKgKgEgNg");
	this.shape_1.setTransform(0,-2.0516);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.2,-27.8,316.5,55.6);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGHAdQgPgHgHgRQgGgQAGgPQgmALgngQIB8AAQAEANgLAKQAegKAbgNIBQAAQgrAcgvAWQgcANgUAAQgJAAgIgDgAvrAFQgZgBgTgLQgQgLABgNIFZAAIggAGQhUAQgrAGQhDAIg2AAIgGAAgAySgfIA7AAIgXAGIgJABQgOAAgNgHgAR+gaQgHgBgHgEIAjAAQgIAGgJAAIgEgBg");
	this.shape.setTransform(4.6125,24.6056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009966").s().p("AHODrQgCgHgGgHQgQgVgYgCQgPgBggABQgcAAgOgNQgEgMAYgNQAagOgBgMQAAgNgSgCQgQgBgQAHQgpAQhSAGInRAmQAEgHAggaQAXgTgFgSQgFgRgWgDQgRgCgWAGIiGAoIg3ASQACgEABgGQACgOgKgGQgPgJgfAOIhPAjQgyAXgbAGQgWAGgqAFQigASg/AFQAPgCACgUQACgVgPgKQgZgSgqAUIghAPQgSAIgQgBIBJhHQASgRgFgMQgGgOgcAEIk6AwQhgAMhcAAQACgPANgLQAMgJARgFIAfgJQARgGAKgJQALgLgBgSQgCgSgPgEQgLgCgTAMIhoBEQAqgwBFglQAsgXBXghQAzgUAdgJQAtgOAlgFIAtgEQAcgCARgEQARgDAXgIIAngOQBpgkCYgMQCxgHBYgGQAfgCAqgEQBvgMC8gbQDugiCGgFQBYgEBvAFQA6ACCDAJIAKAAQA5AEAeAFQAxAHAlAQQAaALAvAeQAxAfAYALQBLAiB7gBIBpgDQA9gCApAEQBRAGA8AnQAsAbATAkIgLgIQgSgKgKAGQgFABgCAHQgCAFACAGQACAKAMAJQANAIAJAHIiWgiQgngIgNARQgJANAMAeQAMAggFANQgHASgfAIQg7ARg9gHQg/gHg2gcIgZgNQgPgFgNADQgNADgFAQQgDALAEAGIhlhKQgRAOgDAXQgFAWALATQgdgWgQgKQgagQgXgFQgdgGgaALQgcALgKAZQAEgOgGgOQgHgOgNgGQggAkgjAfQg8AzhJAjQgbANgdAKQAKgKgEgNg");
	this.shape_1.setTransform(0,-2.0516);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.2,-27.8,316.5,55.6);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A4EpSQEOh5EShOQAJgCAIgDQAEgBAEgBQAEgBAEgBQAEgBAEgCQAFgBAEgBQAEgBAEgBQAFgBAEgCQAEgBAFgBQKhiwK3BRQIfBAItDdQCVB0hQBzQgYAjgtAiQpkA2ppALQjUADjSgBQrMgFrRg+QgBAAAAgBIgPgKQi4iCDIiBgA2+EnQELAVELAOQIGAbIGACQBeAABeAAIAEAAQABAAABAAIQ3giQArgDArgCQAYgCAZgBQAPgBAPgBQADAHACAIQABAEABAEQADAJACAKIANA2QACAJABAIQAOBKABBEQAAA9gKA4QgLA5gWAzQ3DEZ39kZQhgjFBWkSQAFgOAFgPg");
	this.shape.setTransform(0.4144,3.4562);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-17.1787,-66.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("AIZOGIyRgUQj1gEh+gMQjMgUicg0Qg1gSgUgYQgXgbgFg3QgNh4AnhwQAHgVABgKQADgPgEgLIAEAEQAWATAhAHQEpBAHDgeQHaguD6gHIC8gBIgLABQCxADEpAQQGJAVDigPQAwgDAZABQAoADAcAOIAoAXIAPAGQAOBKABBEQAAA9gKA3QgKAEgOAIQjHB3kgAkQiQARjzAAIiIgBgA29FkIgLABIAKgeQELAVELAOQiEgChygMIj+gSQgEAEgCAFQgGANAGANIABACQgKgKgSgBgAhnjhQrMgFrRg+IgBgBIgPgKQi4iBDIiCQEOh5EShOIARgFIAIgCIAIgCIAIgCIAJgDIAIgCIAJgCIAJgDQKhiwK3BSQIfA/ItDdQCVB0hQBzQgYAjgtAiQpkA2ppALQiZACiZAAIh0AAgAEDoGQAkAQAdAAIAEgBQAGAAAAgJQAAgJgGAAIgDAAIg7gRIgNgEQgIgDgGAAIgCACIAAACIgBAAQgUgFgPgLIgBgBIgCgDQAAAFAGAEIgBAAQAYAUAgAOgA0wpVQgeAIgxApQgIAGgMAMIgBABIgCAAQgCABgBAFQgBAHAEABIACAAIAEgBQAYgHARgNIABgBIAGgBIAEACIAAAAIACACIgBAAQACADADAAIAGgBIgHgBIgBgBQgEgIgGAAIgOADIABAAIgEAAIAhgUQASgMAMgLIAJgEQAEgBgBgFQAAgGgEAAgAo3pEIgYARIAAAAIAAABIgLAKIgMAHQgHAEgCAFQgBADABAEQAAAFADAAIABAAQAJgBAJgIIAPgNIAPgMIATgKQALgGAGgGQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIABgBQgEAAgEADQgBABgEABIAAAAQgRAEgOAIQANgMACgDIABgCQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgBAAQgHABgIAIIAAAAIAJgFgAvTpBQgNADghAGQgdAGgMAOIAAABIAHgEIgBAAIAdgHIgBABIAogNIgBABQAQgFAGgIIgIAFgAk9o9IgCACQgFACABAIQAAAIAGAAIACAAIAFgDIAKgJIAfgWIgBABQAqgZATgRIAKgGIAIgIIgEADQgKAIgTAIIggANQABgDgCgDQgBgEgDAAQgLABgJAJIgQARIgLAGIgKAHIgBAAIgLAIQgHAFgEAFIAAAAIABAAQASgNAMgEgAzJovIgHAEQALgCALgPgAwfpMQgVAHgLAJQgGAEgKADQgKACgFAHIAAAAIABgBIAFgDIAjgIQAJgDAPgIQAQgJAJgCIAHgCIgHAAQgMAAgPAEgAKrpaQAAAIAGAAIAAAAIACABIAFADQABADADABIAFABIAIACIADACQAEAEAEAAIAKACQAQAFAJABQAJAIAGAAIAEgBIgJgBIgHgGQAHAFAHACQAFABABgHQABgGgBgEQgJgSgxgMIgIgGQgGgFgLAAQgDAAgBAEQgBADABADIgBAAIgFgBQgGAAAAAIgAyWpsIgcAGQgQAFgJAGIgKAHIgLAGIAAABIAAAAQgIAGgEABIABAAQAEAAAHgDIAKgFIAVgIIAHgBIgBAAIABgBQAKgCARgIQARgIAJgDIAHgBIgIgBQgHAAgJADgAuXpTQgHAEgEAEIgHAFIABAAIAIgEIAJgEIALgEIAKgEIALgEIALgFQAFgBAEgDIAIgIIAOgLQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIABgBQgEgBgFAFIgGADIABgBQgGACgKAHQgYAEgNALIABAAIgMAHgAB6ppQAHAGAJACIAMAFQAHADAFAAIAFgBIgKgCIgKgGQgTgRgeAFIAUADIAAAAgAieqvIACALIAAABIABABQACAhAKAXIABABIAAABIgBABIgCACQAFgCgDgMIgEgQQgBgLAAgUQgBgSgHgMIgBgBIgLgkIAAABIgCgJIgBgNQgCAWAFAMIACAMQABAQAFAHIgBgBgAGLqUIAGACQADADAGADIAJAFIABABQAOALATAHQALAEAaAFIAFACIACADIAAgBQgDgFgFgDIgMgDIgBAAQgKgDgVgPIABABQgLgKgUgFIgBAAIABAAIgYgHIgBgBIgBgBIgBgBIAAABIAAACIAAADIABgCIAGAEgAQgp3IASAMIACACIACABQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQgBgJgNgLIgLgJIgKgHQgFgEgEAAIABABQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAVAXIgTgJIgNgIQgJgEgEgEIgBAAQAEAFAQANIAAAAIASANgAnKp+IABAAQgKAIgCAEIAAAAIAEgEIAugdQAbgSARgOQAGgFACgDIAAAAIAAgBIADgBIADgBQgFgBgEAEIgbAQQgQAJgKAIIABgBgAOqp4IgJgFIgOgOIgBAAIgZgWQgOgMgQgFIgigIIgIgDQgFgBgEAAIAEABQATAKANADIgBAAQAOAEAOAKIAIAGQAHAGAOAJIAWAOIgBAAQAKAHAHAAIAAAAIAAAAgAhUqIIADAMQABgNgGgMQgEgJgLgMQANAWAEAMgAoaq7Ig6APQgUAEgkAOQgmAPgRAFIgZAEIAPABQARAAAQgFIAggIIAfgJQAUgEAegNIAwgUIAMgCIgGAAQgJAAgMADgAIQq0IANACIAcAIIAcAHQAIADALABIASADQAIACAGAEIAAAAIAAgBQgEgJgcgGQgLgDgTgDQgWgDgJgCIAAAAQgKgEgJAAIgIABgAAnrhIAcAPIAdANQARAIALAHIACACIABADIABADQgBgIgGgGIgNgLQgbgWgkgIIABAAQgIgCgPgGIgGgCQgMgKgXgLIAAAAIgBAAIgMgFIgEgDQgKgJgUgGQgJgEgDAGQgCAGAHAFIAMAHIAMAHIAAAAIANAHQAIAEAEADIAVAOQgRAAgHgCIgagJQgJgCgKgIIgIgFIAAgBIgBgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABANIABgKIADADIAAAAQAFAGAIAFIgBAAQAEADAIAEIANAGIgBgBQALAJATADIAfACQAFAAABgKQABgHgFgHIARAJgAKVrOIACABQAMAMAWAGIALAEIAMACIAAAAQgMgEgEgDQgGgGgUgIQgVgJABAIIAAADIABgEIAAgBIABgBgAngrJQgHAFADAIQABAFACAAIABAAQAFgBAHgFIALgFQAUgFAIgEQASgHAAgJIgBADIgGADIgiAJQAXgNAGgFIALgHIABABIAAACIAAAAIAAgEIAAAAQgIAAgNAHIAAABQgXAEgNALIABgBQgEADgJAEgArdrjQgZACgaAHIgbAFIgcADQAXAEAOAAQATAAAUgFQAjgIAuABIABAIIABgJIAAgBQgMgIgZAAIgQABgADasBIAXARQAPAKAKABIAAAAIAAgBQgHgDgEgDIgbgZIgJgJIAAgBQgvgmgSARIAAgBQgCACgDABIgBAAQAEABAFgDIACAAQAYAIAZASIgBgBgAKBr3QgNADgXABIglADQAZAEATAAQAYAAAZgGIAAgBIAAABQAJgDAPgCIAXgDQgPgCgOAAQgUAAgSAFgAmxrvIASgFIAXgFIAXgFQAOgEALACIAEACIAAAAQAGAFADgBIgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgLgLgNAAQgHAAgTAFIgBABIABAAQgfAGgVAKIgBAAIgBgBIgBgDQABAGAGAAgAFSsIIAAAAIABgBIAAgFQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCAAQgLgEgYgOQgWgNgOgEIAAAAIgKgEIgLgDIgEgCIAAgBIgCgDQAAAFAEADIAJAFQAQANAZAMQAeAOAPgBg");
	this.shape_2.setTransform(0.4144,0.2443);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A2uM+QhgjFBWkSIALAAQASAAAKAKIgBgBQgGgNAGgOQACgFAEgDID+ASQByAMCEACQIGAbIGACQj6AInaAtQnDAfkphAQghgIgWgSIgEgEQAEALgDAPQgBAJgHAWQgnBwANB4QAFA3AXAbQAUAYA1ARQCcA1DMATQB+AMD1AEISRAVQFVAGC2gXQEggkDHh2QAOgIAKgEQgLA5gWAzQriCMrwAAQrvAAr/iMgAYuHPIgDgRIgNg2IgFgTIAFATIANA2IADARIgPgFIgogXQgcgPgogCQgZgCgwAEQjiAPmJgWQkpgPixgEIALAAIAEAAIACAAIQ3giIBWgFIAxgDIAegCIAFAPIACAIQALgKAOABQANABAKAJQAHAGAFAKQAHAOACAfQAEBpgjA9IgCAEQgBhEgOhKgAtxjAQiFgDj6gOQicgIhOgGQgigCgZgPQgdgSAHgaQACgJAGgGQgQgPgKgMQgeglgHgxQgHgxARgrQAXg5A8gqQAlgbBNgiQA4gYCqhEQA1gVAegIQAvgMAnACQASACANAGQAQAIAEAOIABAHQkSBOkOB5QjICBC4CCIAPAKIABABQLRA+LLAFIivAMQiiAMhKAEQhlAEh0AAQhPAAhWgCgAMJjRQiHgDkNgLIgngCQJqgKJkg2QAsgjAYgiIACACQALAYgYAWQgUATggAJQkUBKmfAAIhlgBgAvHsDQgJgUATgWQAPgRAbgMQCFg9CqgeQCGgYC3gIQC9gJCRALQC0ANCVAsQAgAKBAAWQq4hSqhCxIgIACIgJADIgIACIgJACIgIACIgIADIgIACIgEgIg");
	this.shape_3.setTransform(-1.1637,-0.0103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.1,-97,331,195);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A4EpSQEOh5EShOQAJgCAIgDQAEgBAEgBQAEgBAEgBQAEgBAEgCQAFgBAEgBQAEgBAEgBQAFgBAEgCQAEgBAFgBQKhiwK3BRQIfBAItDdQCVB0hQBzQgYAjgtAiQpkA2ppALQjUADjSgBQrMgFrRg+QgBAAAAgBIgPgKQi4iCDIiBgA2+EnQELAVELAOQIGAbIGACQBeAABeAAIAEAAQABAAABAAIQ3giQArgDArgCQAYgCAZgBQAPgBAPgBQADAHACAIQABAEABAEQADAJACAKIANA2QACAJABAIQAOBKABBEQAAA9gKA4QgLA5gWAzQ3DEZ39kZQhgjFBWkSQAFgOAFgPg");
	this.shape.setTransform(0.4144,3.4562);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGzCVQgggPgYgUIABAAQgGgEAAgEIACADIABABQAPALAUAFIABAAIAAgCIACgDQAGABAIACIANAEIA7ARIADABQAGgBAAAKQAAAJgGAAIgEAAQgdAAgkgPgAzmCXQgEgBABgGQABgFACgBIACgBIABAAQAMgNAIgFQAxgqAegHIAEgBQAEAAAAAFQABAGgEABIgJAEQgMAKgSAMIghAVIAEgBIgBAAIAOgDQAGABAEAIIABABIAHABIgGAAQgDAAgCgDIABAAIgCgBIAAAAIgEgCIgGAAIgBABQgRAOgYAHIgEABgAm/CJQgBgEABgDQACgFAHgEIAMgGIALgLIAAAAIAAAAIAYgRIgBAAIgJAFIAAgBQAIgIAHAAIABAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBADQgCADgNALQAOgHARgFIAAABQAEgBABgCQAEgDAEABIgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQgGAFgLAGIgTAKIgPANIgPANQgJAHgJABIgBABQgDAAAAgGgAt6B3QAMgOAdgHQAhgFANgEIAIgEQgGAIgQAEIABAAIgoAMIABAAIgdAGIABAAIgHAEgAiNByQgGAAAAgIQgBgIAFgDIACgBIAHgGQgMADgSANIgBABIAAgBQAEgEAHgFIALgIIABgBIAKgGIALgHIAQgQQAJgKALAAQADAAABADQACADgBAEIAggNQATgIAKgIIAEgDIgIAHIgKAHQgTAQgqAaIABgBIgfAWIgKAIIgFAEgAwZBrIAPgMQgLAOgLADgAuuBuQAFgGAKgDQAKgCAGgFQALgJAVgGQAUgGAOACIgHABQgJADgQAIQgPAJgJACIgjAJIgFADIgBABgAOnBiQgJgBgQgGIgKgBQgEgBgEgEIgDgCIgIgCIgFAAQgDgBgBgDIgFgDIgCgBIAAAAQgGAAAAgIQAAgIAGAAIAFABIABAAQgBgDABgEQABgDADAAQALAAAGAFIAIAFQAxANAJASQABADgBAGQgBAIgFgCQgHgBgHgGIAHAHIAJABIgEAAQgGAAgJgHgAw8BVQAEgBAIgHIAAAAIAAAAIALgHIAKgGQAJgHAQgEIAcgGQANgEALACIgHABQgJACgRAIQgRAIgKADIgBAAIABAAIgHACIgVAIIgKAEQgHAEgEAAgAr5BUIAHgEQAEgEAHgEIAMgIIgBABQANgLAYgEQAKgIAGgBIgBAAIAGgCQAFgFAEABIgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIgOALIgIAHQgEADgFABIgLAFIgLAEIgKAEIgLAEIgJAEIgIAEgAFGA+IgMgEQgJgCgHgHIgEgBIAAAAIgUgDQAegFATARIAKAGIAKACIgFAAQgFAAgHgDgAAgAzIABgBIAAgBIgBgBQgKgWgCghIgBAAIAAgBIgCgLIgDgHIABABQgFgHgBgRIgCgLQgFgNACgVIABANIACAIIAAgBIALAkIABABQAHAMABASQAAAUABAKIAEAQQADAMgFACgAKfAyIgFgDQgagFgLgEQgTgGgOgMIgBAAIgJgFQgGgDgDgDIgGgDIgGgDIgBACIAAgEIAAgBIAAAAIABAAIABABIABAAIAYAHIgBAAIABAAQAUAGALAKIgBgBQAVAPAKADIABAAIAMADQAFACADAGIAAAAgATkAxIgCgCIgSgMIgSgMIAAAAQgQgNgEgFIABAAQAEADAJAFIANAHIATAKIgVgXQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAQAEgBAFAEIAKAIIALAIQANAMABAJQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAklAoQACgEAKgIIgBAAIAkgcIgBABQAKgHAQgJIAbgQQAEgEAFABIgDAAIgDACIAAABIAAgBQgCAEgGAEQgRAPgbAQIguAdIgEAEgARaAjQgHAAgKgIIABABIgWgPQgOgIgHgFIgIgHQgOgKgOgDIABAAQgNgDgTgLIgEAAQAEgBAFACIAIACIAiAJQAQAFAOAMIAZAUIABABIAOANIAJAGgABbATQgEgMgNgVQALALAEAJQAGALgBAOgAosAZIAZgFQARgEAmgPQAkgNAUgFIA6gPQAQgEALACIgMABIgwAUQgeANgUAEIgfAJIggAIQgQAFgRAAgAM4AEQgGgEgIAAIgSgDQgLgCgIgDIgcgGIgcgIIgNgCQANgCAOAEIAAAAQAJADAWADQATADALADQAcAGAEAIIAAABgAEvgVIgBgDIgCgCQgLgIgRgIIgdgNIgcgOIgRgJQAFAHgBAHQgBAJgFAAIgggBQgTgDgLgJIABABIgNgHQgIgDgEgEIABABQgIgFgFgHIAAAAIgDgCIgBAKIgBgNQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIABACIAAAAIAIAGQAKAHAJACIAaAKQAHABARAAIgVgOQgEgDgIgDIgNgHIAAAAIgMgHIgMgIQgHgFACgFQADgGAJADQAUAHAKAIIAEADIAMAFIABAAIAAABQAYAKAMAKIAGACQAPAGAIACIgBAAQAkAIAbAXIANAKQAGAHABAHgAN0gcIgLgEQgWgGgMgMIgCgBIgBAAIgBABIAAABIgBAFIAAgEQgBgHAVAIQAUAIAGAGQAEADAMAEIAAABIgMgDgAk0ggQgDgJAHgEQAJgEAEgDIgBABQANgLAXgFIAAAAQANgHAIgBIAAABIAAADIAAABIAAgDIgBAAIgLAHQgGAEgXANIAigJIAGgCIABgDQAAAJgSAHQgIADgUAFIgLAGQgHAEgFABIgBABQgCAAgBgFgAqXg2IAcgDIAbgFQAagHAZgDQAlgDAQAKIAAABIgBAKIgBgIQgugBgjAHQgUAFgTAAQgOAAgXgDgAG6hKQgKAAgPgKIgXgSIgLgJIABABQgZgTgYgHIgCAAQgFACgEAAIABgBQADAAACgCIAAAAQASgQAvAmIAAAAIAJAKIAbAZQAEADAHACIAAABgALohUIAlgDQAXgCANgDQAfgIAkAGIgXADQgPACgJACIAAAAIAAAAQgZAHgYAAQgTAAgZgEgAkIhZIABADIABAAIABAAQAVgJAfgHIgBAAIABAAQATgGAHABQANAAALALQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABABQgDABgGgFIAAAAIgEgCQgLgCgOADIgXAGIgXAEIgSAGQgGAAgBgGgAIChtIgBgEQgPACgegPQgZgMgQgNIgJgFQgEgCAAgFIACADIAAAAIAEADIALADIAKAEIAAAAQAOADAWAOQAYAOALADIACAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAFIgBABg");
	this.shape_1.setTransform(-17.1787,-66.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("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");
	this.shape_2.setTransform(0.4144,0.2443);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A2uM+QhgjFBWkSIALAAQASAAAKAKIgBgBQgGgNAGgOQACgFAEgDID+ASQByAMCEACQIGAbIGACQj6AInaAtQnDAfkphAQghgIgWgSIgEgEQAEALgDAPQgBAJgHAWQgnBwANB4QAFA3AXAbQAUAYA1ARQCcA1DMATQB+AMD1AEISRAVQFVAGC2gXQEggkDHh2QAOgIAKgEQgLA5gWAzQriCMrwAAQrvAAr/iMgAYuHPIgDgRIgNg2IgFgTIAFATIANA2IADARIgPgFIgogXQgcgPgogCQgZgCgwAEQjiAPmJgWQkpgPixgEIALAAIAEAAIACAAIQ3giIBWgFIAxgDIAegCIAFAPIACAIQALgKAOABQANABAKAJQAHAGAFAKQAHAOACAfQAEBpgjA9IgCAEQgBhEgOhKgAtxjAQiFgDj6gOQicgIhOgGQgigCgZgPQgdgSAHgaQACgJAGgGQgQgPgKgMQgeglgHgxQgHgxARgrQAXg5A8gqQAlgbBNgiQA4gYCqhEQA1gVAegIQAvgMAnACQASACANAGQAQAIAEAOIABAHQkSBOkOB5QjICBC4CCIAPAKIABABQLRA+LLAFIivAMQiiAMhKAEQhlAEh0AAQhPAAhWgCgAMJjRQiHgDkNgLIgngCQJqgKJkg2QAsgjAYgiIACACQALAYgYAWQgUATggAJQkUBKmfAAIhlgBgAvHsDQgJgUATgWQAPgRAbgMQCFg9CqgeQCGgYC3gIQC9gJCRALQC0ANCVAsQAgAKBAAWQq4hSqhCxIgIACIgJADIgIACIgJACIgIACIgIADIgIACIgEgIg");
	this.shape_3.setTransform(-1.1637,-0.0103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.1,-97,331,195);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],18,-227.5,18,588).s().p("EiAqA6EIAA3bMEBVAAAIAAXbgEiAqAU5MAAAhO8MEBVAAAMAAABO8g");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-823.5,0,823.5,0).s().p("EiAqAG4IAAtvMEBVAAAIAANvg");
	this.shape_1.setTransform(0.025,177.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-823.5,-371.6,1647.1,743.2);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],18,-227.5,18,588).s().p("EiAqA6EIAA3bMEBVAAAIAAXbgEiAqAU5MAAAhO8MEBVAAAMAAABO8g");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-823.5,0,823.5,0).s().p("EiAqAG4IAAtvMEBVAAAIAANvg");
	this.shape_1.setTransform(0.025,177.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-823.5,-371.6,1647.1,743.2);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],18,-227.5,18,588).s().p("EiAqA6EIAA3bMEBVAAAIAAXbgEiAqAU5MAAAhO8MEBVAAAMAAABO8g");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-823.5,0,823.5,0).s().p("EiAqAG4IAAtvMEBVAAAIAANvg");
	this.shape_1.setTransform(0.025,177.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-823.5,-371.6,1647.1,743.2);


(lib.tryAgain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("Try Again", "60px 'Modak'");
	this.text.textAlign = "center";
	this.text.lineHeight = 91;
	this.text.lineWidth = 286;
	this.text.parent = this;
	this.text.setTransform(144.8,-87.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("A2nLAIAA1/MAtPAAAIAAV/g");
	this.shape.setTransform(144.8,-70.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("A2nLAIAA1/MAtPAAAIAAV/g");
	this.shape_1.setTransform(144.8,-70.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-140.8,289.6,145.9);


(lib.tongue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AgSAuQh4gPhCgcQhDgagBgFQgBgFBRgQQBRgRB2AxQBygxBSAWQBTAXgQAeQgPAfhOAKQggAFgnAAQg3AAhFgJg");
	this.shape.setTransform(27.7103,-8.7932);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-14.2,54.5,10.899999999999999);


(lib.teeth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjOBFQgRAAgGgHQgDgDgCgGQgBgEgHgGQgHgGhIgNQhJgMBMgEQBLgEAIgGQAFgFAJgEIAYgKIAbgJIArgMQAZgGAUAAIAXAAQAOAAAJgCIASgHQALgFAGgCQAIgCANAAIAWAAQAMgBATgDQAVgEAyAPQAzAOA2ABQA3AAAjAOQAZAKgIABQgLAFAAAFIAAAMIgBAIIABATIAAAFQgBAOgHAHQgKAHgVgDIiCgSIgVgCIgKAAIgwgBQgNgBgIADIgHADIgQAIQgRAHgWACQgOABgagCQgOgBgGgFQgGgEgEgMIgBgFQgGgTgCgUQgQAGgDAbIAAACIgEATQgDALgIAGQgIAGgXAAgAFYgUIgCAAIgIgCIAKACg");
	this.shape.setTransform(24.6108,-7.1425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-14.3,71.5,14.3);


(lib.stick_birds_flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bird3
	this.instance = new lib.CachedBmp_8476();
	this.instance.setTransform(356.95,-63.3,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12,1,1).p("ApAC2QCHneG/CmQHYi3BjHh");
	this.shape.setTransform(420.4,-39.3661);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(12,1,1).p("ApHCxQCRnYG7CuQHWi/BtHd");
	this.shape_1.setTransform(420.45,-40.6015);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(12,1,1).p("ApVCpQCknPG0C9QHUjOB/HU");
	this.shape_2.setTransform(420.5,-42.7911);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(12,1,1).p("ApqCdQDCnBGoDVQHPjlCcHH");
	this.shape_3.setTransform(420.575,-46.3056);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(12,1,1).p("AqMCKQDympGVD7QHJkKDJGx");
	this.shape_4.setTransform(420.7,-52.029);

	this.instance_1 = new lib.CachedBmp_8477();
	this.instance_1.setTransform(340.05,-84.45,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(12,1,1).p("ArOAiQFck6FcGIQG1mVEwFM");
	this.shape_5.setTransform(421.4,-71.7526);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(12,1,1).p("AqvgWQE/kQFXGqQG1m3EUEm");
	this.shape_6.setTransform(421.675,-74.529);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(12,1,1).p("AqRhNQEjjlFSHMQG1nZD5EA");
	this.shape_7.setTransform(422,-77.5107);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(12,1,1).p("ApyiAQEGi6FNHuQG1n7DdDZ");
	this.shape_8.setTransform(422.275,-80.8533);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(12,1,1).p("ApTixQDpiPFHIQQG2odDBCy");
	this.shape_9.setTransform(422.6,-84.437);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(12,1,1).p("Ao0jgQDNhjFCIyQG1o/ClCL");
	this.shape_10.setTransform(422.875,-88.2903);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(12,1,1).p("AoVkLQCwg4E9JUQG1piCJBl");
	this.shape_11.setTransform(423.2,-92.411);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(12,1,1).p("An3k0QCUgNE4J2QG1qEBuA/");
	this.shape_12.setTransform(423.475,-96.7871);

	this.instance_2 = new lib.CachedBmp_8478();
	this.instance_2.setTransform(370.45,-142.2,0.5,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(12,1,1).p("AoDkVQCQgRFLI9QGupEB+A+");
	this.shape_13.setTransform(423.325,-92.9731);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(12,1,1).p("AovjMQCqhAFkHhQGnnhCpBj");
	this.shape_14.setTransform(422.85,-84.9004);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(12,1,1).p("Apah+QDDhvF9GFQGfl/DWCK");
	this.shape_15.setTransform(422.35,-77.3059);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(12,1,1).p("AqFgpQDdieGVEoQGYkcEBCw");
	this.shape_16.setTransform(421.875,-70.4046);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(12,1,1).p("AqwAmQD2jNGuDNQGRi5EsDU");
	this.shape_17.setTransform(421.4,-63);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(12,1,1).p("AqKBUQDQkpG0DAQGpi5DoEv");
	this.shape_18.setTransform(421.075,-54.7247);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(12,1,1).p("ApkCHQCqmEG6CxQHBi2CkGJ");
	this.shape_19.setTransform(420.725,-46.9637);

	this.instance_3 = new lib.CachedBmp_8479();
	this.instance_3.setTransform(356.95,-63.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bird2
	this.instance_4 = new lib.CachedBmp_8480();
	this.instance_4.setTransform(-20.95,46.8,0.5,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(12,1,1).p("AtgEGQDXq8KRECQK3kbCiLC");
	this.shape_20.setTransform(70.1,77.5321);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(12,1,1).p("AuTDoQEeqZJ1E7QKulTDmKi");
	this.shape_21.setTransform(70.3,69.1055);

	this.instance_5 = new lib.CachedBmp_8481();
	this.instance_5.setTransform(-45.95,15.5,0.5,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(12,1,1).p("AwnAzQIEnTICJFQKHpYHCHs");
	this.shape_22.setTransform(71.475,31.4417);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(12,1,1).p("Av6ghQHamTH6J3QKIqKGZGz");
	this.shape_23.setTransform(71.925,27.326);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(12,1,1).p("AvMhyQGvlTHzKpQKHq9FwF7");
	this.shape_24.setTransform(72.375,22.9175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(12,1,1).p("Aufi+QGFkTHrLbQKIrvFHFB");
	this.shape_25.setTransform(72.825,17.9719);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(12,1,1).p("AtxkHQFZjSHlMOQKHsiEeEI");
	this.shape_26.setTransform(73.275,12.645);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(12,1,1).p("AtElMQEviSHdNAQKItUD1DO");
	this.shape_27.setTransform(73.725,6.955);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(12,1,1).p("AsWmMQEEhSHWNyQKHuHDMCW");
	this.shape_28.setTransform(74.175,0.8516);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(12,1,1).p("ArpnJQDagSHOOlQKIu5CjBc");
	this.shape_29.setTransform(74.625,-5.642);

	this.instance_6 = new lib.CachedBmp_8482();
	this.instance_6.setTransform(-0.95,-69.95,0.5,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(12,1,1).p("Ar7mbQDVgYHrNPQJ9taC6Bb");
	this.shape_30.setTransform(74.375,0.017);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(12,1,1).p("As7kuQD7hfIPLIQJyrJD7CU");
	this.shape_31.setTransform(73.675,11.9967);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(12,1,1).p("At7i7QEhikIzI/QJoo2E7DL");
	this.shape_32.setTransform(72.95,23.2241);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(12,1,1).p("Au7g9QFGjrJYG4QJemlF7EE");
	this.shape_33.setTransform(72.25,33.4653);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(12,1,1).p("Av7A4QFskwJ8EwQJTkTG8E7");
	this.shape_34.setTransform(71.55,44.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(12,1,1).p("AvfBZQFQlzKBElQJkkSGJF+");
	this.shape_35.setTransform(71.3,50.6407);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(12,1,1).p("AvDB8QE0m4KGEcQJ1kRFYHB");
	this.shape_36.setTransform(71.05,56.6587);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(12,1,1).p("AumCgQEXn7KLERQKGkPElID");
	this.shape_37.setTransform(70.8,62.5286);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(12,1,1).p("AuKDHQD7o/KPEHQKYkODyJG");
	this.shape_38.setTransform(70.55,68.1044);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(12,1,1).p("AtuDrQDfqDKUD9QKpkNDBKJ");
	this.shape_39.setTransform(70.3,74.0402);

	this.instance_7 = new lib.CachedBmp_8483();
	this.instance_7.setTransform(-20.95,46.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	// bird1
	this.instance_8 = new lib.CachedBmp_8484();
	this.instance_8.setTransform(-395.95,-54.45,0.5,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(12,1,1).p("AwnAzQIEnTICJFQKHpYHCHs");
	this.shape_40.setTransform(-278.525,-38.5583);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(12,1,1).p("Av6ghQHamTH6J3QKIqKGZGz");
	this.shape_41.setTransform(-278.075,-42.674);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(12,1,1).p("AvMhyQGvlTHzKpQKHq9FwF7");
	this.shape_42.setTransform(-277.625,-47.0825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(12,1,1).p("Aufi+QGFkTHrLbQKIrvFHFB");
	this.shape_43.setTransform(-277.175,-52.0281);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(12,1,1).p("AtxkHQFZjSHlMOQKHsiEeEI");
	this.shape_44.setTransform(-276.725,-57.355);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(12,1,1).p("AtElMQEviSHdNAQKItUD1DO");
	this.shape_45.setTransform(-276.275,-63.045);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(12,1,1).p("AsWmMQEEhSHWNyQKHuHDMCW");
	this.shape_46.setTransform(-275.825,-69.1484);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(12,1,1).p("ArpnJQDagSHOOlQKIu5CjBc");
	this.shape_47.setTransform(-275.375,-75.642);

	this.instance_9 = new lib.CachedBmp_8485();
	this.instance_9.setTransform(-350.95,-139.95,0.5,0.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(12,1,1).p("Ar7mbQDVgYHrNPQJ9taC6Bb");
	this.shape_48.setTransform(-275.625,-69.983);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(12,1,1).p("As7kuQD7hfIPLIQJyrJD7CU");
	this.shape_49.setTransform(-276.325,-58.0033);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(12,1,1).p("At7i7QEhikIzI/QJoo2E7DL");
	this.shape_50.setTransform(-277.05,-46.7759);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(12,1,1).p("Au7g9QFHjrJXG4QJemlF7EE");
	this.shape_51.setTransform(-277.75,-36.5347);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(12,1,1).p("Av7A4QFskwJ8EwQJTkTG8E7");
	this.shape_52.setTransform(-278.45,-25.5774);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(12,1,1).p("AvZBgQFKmBKCEjQJokRF/GL");
	this.shape_53.setTransform(-278.75,-18.1502);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(12,1,1).p("Au3CKQEonSKIEXQJ8kQFDHb");
	this.shape_54.setTransform(-279.05,-10.9789);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(12,1,1).p("AuVC3QEGokKOELQKQkPEHIs");
	this.shape_55.setTransform(-279.35,-4.0848);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(12,1,1).p("AtzDkQDkp1KTD+QKlkNDLJ8");
	this.shape_56.setTransform(-279.65,2.8566);

	this.instance_10 = new lib.CachedBmp_8486();
	this.instance_10.setTransform(-370.95,-23.2,0.5,0.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(12,1,1).p("AtZEKQDNrAKVD6QK4kUCZLH");
	this.shape_57.setTransform(-279.925,8.593);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(12,1,1).p("At0D6QDzquKGEYQKzkxC9K2");
	this.shape_58.setTransform(-279.825,4.2964);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(12,1,1).p("AupDcQE+qKJpFUQKolrEEKU");
	this.shape_59.setTransform(-279.625,-4.5622);

	this.instance_11 = new lib.CachedBmp_8487();
	this.instance_11.setTransform(-395.95,-54.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.9,-142.2,898,255.5);


(lib.StartGameButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("start", "96px 'Modak'");
	this.text.textAlign = "center";
	this.text.lineHeight = 147;
	this.text.lineWidth = 292;
	this.text.parent = this;
	this.text.setTransform(208,-135.3,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({scaleX:0.7963,scaleY:0.7963,y:-124.5},0).wait(1).to({scaleX:0.945,scaleY:0.945,y:-135.3},0).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("EgiFgRhMBELAAAMAAAAjDMhELAAAg");
	this.shape.setTransform(218.2,-112.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCCC").s().p("EgiFARiMAAAgjCMBELAAAMAAAAjCg");
	this.shape_1.setTransform(218.2,-112.15);

	this.text_1 = new cjs.Text("play", "96px 'Modak'", "#A0CCCC");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 147;
	this.text_1.lineWidth = 292;
	this.text_1.parent = this;
	this.text_1.setTransform(220,-135.3,0.945,0.945);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0CCCC").s().p("EgiFARiMAAAgjCMBELAAAMAAAAjCg");
	this.shape_2.setTransform(218.2,-112.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("A+VvlMA8rAAAIAAfLMg8rAAAg");
	this.shape_3.setTransform(218.2,-112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A0818A").s().p("A+VPmIAA/LMA8rAAAIAAfLg");
	this.shape_4.setTransform(218.2,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text_1,p:{scaleX:0.945,scaleY:0.945,x:220,y:-135.3,color:"#A0CCCC"}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.text_1,p:{scaleX:0.8409,scaleY:0.8409,x:219.8,y:-132.55,color:"#A0818A"}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-226.8,441.4,230);


(lib.soundButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.749)").ss(6,1,1).p("ABeizQheDGBeChAgtizQhfDGBfCh");
	this.shape.setTransform(-27.3625,4.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.749)").s().p("Ajgj0IE1CWIC0AAIAAC9IiqAAIk/CWQhPj1BPj0g");
	this.shape_1.setTransform(15.525,3.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.749)").ss(6,1,1).p("ABIiKQhICZBIB8AgjiKQhJCZBJB8");
	this.shape_2.setTransform(-21.4375,3.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.749)").s().p("Aiti8IDuBzICMAAIAACTIiEAAIj2B0Qg+i+A+i8g");
	this.shape_3.setTransform(11.7625,3.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.749)").ss(6,1,1).p("AgtizQhfDGBfChABeizQheDGBeCh");
	this.shape_4.setTransform(-27.3625,4.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.749)").ss(6,1,1).p("AI/AAQAADuioCpQipCojuAAQjtAAipioQioipAAjuQAAjtCoipQCpioDtAAQDuAACpCoQCoCpAADtg");
	this.shape_5.setTransform(-1,2.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECBA01").s().p("AmWGWQioioAAjuQAAjtCoipQCpioDtAAQDuAACpCoQCoCpAADtQAADuioCoQipCpjuAAQjtAAipipg");
	this.shape_6.setTransform(-1,2.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AmWGWQioioAAjuQAAjtCoipQCpioDtAAQDuAACpCoQCoCpAADtQAADuioCoQipCpjuAAQjtAAipipg");
	this.shape_7.setTransform(-1,2.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.749)").ss(6,1,1).p("AG9AAQAAC4iCCCQiDCDi4AAQi4AAiCiDQiCiCAAi4QAAi4CCiCQCCiCC4AAQC4AACDCCQCCCCAAC4g");
	this.shape_8.setTransform(-1,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("Ak6E7QiCiDAAi4QAAi3CCiCQCDiDC3AAQC4AACCCDQCDCCAAC3QAAC4iDCDQiCCCi4AAQi3AAiDiCg");
	this.shape_9.setTransform(-1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-58.4,121,121);


(lib.soda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABGpOIAAqRIAAgOQAoghAoAhIAAKiIAABvQBMgFBTAAQAkAAFWAnQAKAOACAPIgFAgQgcA9irAtQjNA2kiAAQjpAAizgjQgrgJgngKQidgqglg2QgLgRAAgSQAAgJADgJIAIA1IBIHTICENUAq4moQABgDABgCQAAgBAAAAQAdg9CrguQDNg2EhAAQAjAAAjABAKvm6QgdA+irAtQjNA2khAAQkiAAjNg2Qiagpgmg1AmAlAQAcg9CrguQBzgeCMgNACWncIAAAdABGnFIAAgRIAAh4AK7mdQABAEAAADQAAANgGAMIhPHwQgqARg7AQQjNA2kiAAQjXAAiqgeQg5gKg0gOQhagYgzgcACWpLQDDALCWAnQCaApAmA2AHgO6QiNBAi5ASQhJAHhQAAQhQAAhKgIQhAgHg6gMQhxgYhggsAHgO6IgfDBQABADAAADQAAArhaAgQgUAHgYAHQiFAki7AAQiJAAhsgTQgpgHgkgKQgYgHgTgHQhaggAAgrQAAgJAEgIIgdi8AJnBzIiHNH");
	this.shape.setTransform(-77.2,12.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AEHmRQA8APAUgcAjcGJQAAAJgSAGQgSAHgZAAQgaAAgSgHQgRgGAAgJQAAgKARgGQASgGAaAAQAZAAASAGQASAGAAAKgAgtFXQAAAJgSAGQgSAHgZAAQgaAAgSgHQgRgGAAgJQAAgKARgGQASgGAaAAQAZAAASAGQASAGAAAKg");
	this.shape_1.setTransform(-96.525,-72.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AgmGIIiDtTQAyAcBbAYQAzAOA5AKQAPGRBLG6QhxgYhfgsg");
	this.shape_2.setTransform(-121.825,67.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3333").s().p("AkVHIQhAgHg6gMQhLm5gQmSQCqAeDYAAQEhAADNg2QA7gQAqgRIiHNGQiNBAi5ASQhIAHhQAAQhRAAhKgIg");
	this.shape_3.setTransform(-64.775,70.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#918F8C").s().p("AmdBLQgrgJgngKQidgqglg1IgIg0IACgGQAmA2CaAoQDNA1EiAAQEhAADNg1QCrgtAdg9QAKAOACAPIgFAfQgcA8irAtQjNA3khgBQjqAAizgjg");
	this.shape_4.setTransform(-77.075,-20.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEF4FF").s().p("Aj5OUIgWjQQA3gKA/gHQBLAJBQgBQBQABBJgIQC4gSCOg/IgfDBIAAAGQAAArhaAgQgTAHgYAGQiFAli8AAQiJAAhsgTgAltirQgrjRgDjbQCyAjDpAAQEiAADNg2QCsguAcg8IhQHxQgqARg6AQQjNA2kiAAQjYAAipgfgAn2qmQiagpgmg1IABgCQAcg9CrgtQDNg2EhAAIBGABIAAB4QiMANhyAeQirAugdA9QAdg9CrguQBygeCMgNIAAARQgPABgMAEQgXAIAAAJQAAALAXAGQAWAIAggBQAfABAXgIQAWgGAAgLQAAgJgWgIIgBAAIAAgdQBMgEBUAAQAjAAFXAnQgeA+irAtQjNA2khAAQkiAAjNg2gAoXscQAAAJARAHQASAGAaAAQAZAAASgGQASgHAAgJQAAgJgSgHQgSgHgZAAQgaAAgSAHQgRAHAAAJIAAAAgAlotOQAAAJARAGQASAHAaAAQAZAAASgHQASgGAAgJQAAgKgSgGQgSgGgZAAQgaAAgSAGQgRAGAAAKIAAAAgAoGsMQgRgHAAgJQAAgJARgHQASgHAaAAQAZAAASAHQASAHAAAJQAAAJgSAHQgSAGgZAAQgaAAgSgGgAE2s4QhUAAhMAEIAAhuQDDAKCWAoQCbApAmA2QlXgngjAAgAmdscIAAAAgABGstgAlXs/QgRgGAAgJQAAgKARgGQASgGAaAAQAZAAASAGQASAGAAAKQAAAJgSAGQgSAHgZAAQgaAAgSgHgAjutOIAAAAg");
	this.shape_5.setTransform(-77.225,46.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDFEFF").s().p("ABeMeQgXgGgUgHQhZghAAgqQAAgJAEgJIgdi7QBfAsBxAXQA7ANA/AGQg/AGg3ALIAWDQQgogIglgKgAg1knQhbgYgygcIhInUQAkA3CdApQAoALAqAIQADDcArDRQg4gKg0gOg");
	this.shape_6.setTransform(-119.325,56.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aq7GjQAAgKADgIIAIA0QgLgQAAgSgAK7GcIABAHQAAAMgFAMgABXGBQgNgIgEgGIAAgRIAAh4IAAqQIAAgNQAogiAoAiIgBABIAAAAIAAAAQgOARgdAAIAAAAIAAAAQgPAAgTgFIgBAAIgBAAIABAAIABAAQATAFAPAAIAAAAIAAAAQAdAAAOgRIAAAAIAAAAIABgBIAAKgIAABvIAAAdQghALgRAAQgIAAgFgDg");
	this.shape_7.setTransform(-77.2,-70.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1AQQgWgHgBgJQABgKAWgHQAMgEAPgBQAEAFAOAIQAMAIAygQIAAAAQAWAHAAAKQAAAJgWAHQgWAHggAAQgeAAgXgHg");
	this.shape_8.setTransform(-67.55,-30.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.soda, new cjs.Rectangle(-148.2,-116.4,142,257.6), null);


(lib.sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiOMAZSMAAAhfjMEcZAAAMAAABfjECONAp7IAAcXMkcZAAAIAA8X");
	this.shape.setTransform(910.125,-449.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],20,-275.4,20,711.7).s().p("EiOMBGSIAA8XMEcZAAAIAAcXgEiOMAZSMAAAhfjMEcZAAAMAAABfjg");
	this.shape_1.setTransform(910.125,-449.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-910.1,0,910.1,0).s().p("EiOMAIUIAAwoMEcZAAAIAAQog");
	this.shape_2.setTransform(910.125,-234.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sky, new cjs.Rectangle(-1,-900.6,1822.3,901.6), null);


(lib.skipButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("bleep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// text
	this.text = new cjs.Text("skip", "96px 'Modak'");
	this.text.textAlign = "center";
	this.text.lineHeight = 147;
	this.text.lineWidth = 202;
	this.text.parent = this;
	this.text.setTransform(0,-32.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({scaleX:0.8249,scaleY:0.8249,y:-19.6787},0).wait(1).to({scaleX:1,scaleY:1,y:-32.3},0).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AwtprMAhbAAAIAATXMghbAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C89502").s().p("AwtJsIAAzXMAhbAAAIAATXg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.749)").ss(6,1,1).p("Atyn/IblAAIAAP/I7lAAg");
	this.shape_2.setTransform(0,-0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(200,149,2,0.749)").s().p("AtyIAIAAv/IblAAIAAP/g");
	this.shape_3.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-65,220,179.3);


(lib.shortsfront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333334").s().p("AmpDQQBIhviEpcIPLFUQgJG2i+DtQsRi8BJhwg");
	this.shape.setTransform(61.825,-39.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shortsfront, new cjs.Rectangle(13.3,-90.7,97.10000000000001,101.60000000000001), null);


(lib.seagullwing_front = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_23
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AzAD9QgbhoFQi2QFCiuHchcIAqgCQFrgOEoAeQB4ANBsATQEDAwBcBHQAoAfAGAjQAWBykDALIthAiQhmAEhCAAQjOAYiRAvQjjAwiyAuQi3AvhlAAQhsAAgPg2g");
	this.shape.setTransform(128.6106,-3.5639);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seagullwing_front, new cjs.Rectangle(6.8,-34.2,243.7,61.300000000000004), null);


(lib.seagullwing_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ADmDYQhsgUhFgUQl0gnjxAqQlVAQAbhsQAahpFbhvQD6hMEogPQByADB1AfQEjA4DZBSQCYAhhgBmQhygUj8BNQhpAhhvAsg");
	this.shape.setTransform(57.7702,-8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seagullwing_back, new cjs.Rectangle(-29.9,-30.8,175.4,44.2), null);


(lib.seagullWing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AxHGBQgyg6AShMQAUhcB3h2QCCh/C7haQC7hbD4hCQD3hCFBgfQFBgeE9BhIARAFQEkBfkkBzIgBABQktB2lBBRQlBBToBC+QkyBxijAAQhvAAgtg1g");
	this.shape.setTransform(113.2824,52.8817);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seagullWing, new cjs.Rectangle(0,9.2,226.6,87.5), null);


(lib.seagullAnimate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {birdsick:0,seagullSad:14,seagullLaugh:22};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_13 = function() {
		this.gotoAndPlay("birdsick");
	}
	this.frame_21 = function() {
		this.gotoAndPlay("seagullSad");
	}
	this.frame_28 = function() {
		this.gotoAndPlay("seagullLaugh");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(8).call(this.frame_21).wait(7).call(this.frame_28).wait(1));

	// frontleg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB6602").s().p("ABHEMIiWCTIAdjRIivAqQBChgBzg6Igzi9IAIgCIgIgFIDUlxQBXgZAWBYIi8FGIA3DMIA4A5IABAAIAAAAIAGAUQAlCRgVCGg");
	this.shape.setTransform(4.4,133.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB6602").s().p("ABHDpIiWCAIAdi1IivAkQBChUBzgyIgzikIAJgCIgJgEIDUlCQBXgWAWBMIi8EdIA3CyIA4AxIABAAIAAAAIAGASQAlB+gVB0g");
	this.shape_1.setTransform(4.4,133.138);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB6602").s().p("Ag7DmIifBRQAqhkBihQIhdiWIAHgEIgJgCIB4l2QBOgtApBHIhpFLIBjCiIBEAiIAAAAIAKAQQBGBzALB6IiSicIhvCng");
	this.shape_2.setTransform(20.425,133.939);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB6602").s().p("ABHEMIiWCTIAdjRIivAqQBChgBzg6Igzi9IAJgCIgJgFIDUlxQBXgZAWBYIi8FGIA3DMIA4A5IABAAIgBAAIAHAUQAlCRgVCGg");
	this.shape_3.setTransform(-120.7,152.132);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CB6602").s().p("ABRExIirCoIAgjuIjHAvQBMhtCDhBIg6jYIAKgCIgKgGIDymlQBjgcAYBkIjVF0IA+DoIBABBIABAAIAAAAIAGAXQArClgYCYg");
	this.shape_4.setTransform(-28.5,135.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4,p:{y:135.0426}}]},3).to({state:[{t:this.shape_4,p:{y:121.4426}}]},3).wait(4));

	// frontwing
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ASyOrQjcjitdl5Qtcl4m3l9Qm5l9Bwi3QBxi3H/C7QH/C6JgHBQJiG/F8GFQF7GFhcCPQgkA3g3AAQhWAAiGiKg");
	this.shape_5.setTransform(76.8222,18.1453);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AT1NPQjtjQt2k0Qt3k1nUlZQnWlZBijAQBii/INCTQILCSKCGQQKCGOGaFmQGYFmhRCWQgiA/g9AAQhUAAiKh6g");
	this.shape_6.setTransform(84.0395,7.367);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AUvL2Qj8i+uLjyQuMjynsk1Qntk2BSjGQBUjGIXBrQIUBrKeFgQKeFeGyFGQGyFHhGCbQgfBGhEAAQhSAAiKhpg");
	this.shape_7.setTransform(89.4948,-4.87);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("ATmNkQjpjUtylEQtxlEnNlhQnPliBki+QBmi9IKCcQIJCbJ6GcQJ8GYGSFvQGTFshUCVQgiA9g7AAQhVAAiKh+g");
	this.shape_8.setTransform(-42.546,16.0662);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("ANbT8QqjhHpkp7Qpnp7mHn2QmIn2BuigQBsigDzEHQD0EIR5IIQR6IHEjEPQGLFwiiEJQiADSnBAAQh2AAiMgPg");
	this.shape_9.setTransform(-76.9215,-144.0137);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AkqI/QrQoCncmlQncmnBPixQBNixEfDXQEfDWTGEwQTEEwFPDVQHHEihuEhQhvEiqjA2Qg/AFg/AAQppAAqLnSg");
	this.shape_10.setTransform(-95.5327,-105.1152);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AjjIvQr9m7oDl2QoCl3A+i4QA8i3EyC6QEzC6TdC5QTcC7FiC1QHgD0hSEqQhSEsqcB2QiMAYiQAAQogAApcleg");
	this.shape_11.setTransform(-103.5741,-83.0083);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AB5KkQtxg7p0htQpzhtgajAQgbi/FlAgQFmAfSumAQSul/GOAGQIbAHA6EwQA7ExojGQQndFdrbAAQhsAAhxgHg");
	this.shape_12.setTransform(-123.4621,-4.6258);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AhMHoQtFkdpCkKQpCkMAZjBQAXi/FRB7QFRB7Tpg+QTpg8F+BtQIHCSgXE1QgWE1p3D2QklBxlQAAQmHAAnAiZg");
	this.shape_13.setTransform(-119.476,-38.0155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:76.8222,y:18.1453}}]}).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_5,p:{x:76.8222,y:18.1453}}]},5).to({state:[{t:this.shape_5,p:{x:-48.2778,y:37.1453}}]},1).to({state:[{t:this.shape_8}]},5).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// eye
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AE5ApQgegSgTgYQgTgZAJgPQAIgQAcACQAaACAeARQAeARAPAVQAOAXgIAPQgJAPgXACIgCAAQgWAAgcgQgAmDADQgMgIAAgMQAAgLAMgJQAMgIARAAQARAAAMAIQAMAJAAALQAAAMgMAIQgMAIgRAAQgRAAgMgIg");
	this.shape_14.setTransform(-111.5179,-123.2538);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AmABBQgNgHgCgMQgBgMALgKQALgJARgCQARgCANAHQAMAHACALQABAMgKAKQgLAKgRACIgGAAQgOAAgKgFgAE7AXQgggOgVgVQgWgYAHgQQAHgQAbgBQAbgBAfANQAgAOARAUQARAVgHAPQgHAQgWAEIgKABQgTAAgZgLg");
	this.shape_15.setTransform(-111.5069,-125.1153);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Al3B0QgNgGgDgLQgDgLAJgLQAKgLAQgFQAQgEAOAFQAOAFADALQADALgKAMQgJALgQAEQgIACgHAAQgIAAgIgCgAE3gcQghgJgZgUQgZgTAFgRQAEgRAbgGQAagEAhAIQAhAJAUASQAUASgEARQgEARgWAHQgKADgLAAQgPAAgTgFg");
	this.shape_16.setTransform(-111.4292,-124.5713);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AFTCPQgWgFgYgYQgZgYgLgeQgNgdANgMQAMgNAaAJQAZAJAYAYQAZAYAJAZQAIAagMANQgJAJgOAAIgMgCgAlchXQgQgEgKgMQgJgLAEgMQACgLAOgFQAOgEAQAEQARAEAJALQAKAMgDALQgDALgPAFQgHADgIAAQgHAAgIgCg");
	this.shape_17.setTransform(-107.339,-122.0977);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AD+DGQgSgJgPgaQgPgagDgbQgEgcANgHQANgIAVANQATANAPAaQAPAaACAXQABAYgNAIQgGADgHAAQgJAAgJgFgAkTiYQgNgHgFgNQgFgLAFgJQAFgJAMgBQAOgBAMAIQANAHAGALQAFANgFAIQgFAJgNABIgDAAQgLAAgMgGg");
	this.shape_18.setTransform(-91.7115,-126.9611);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AEpB+QgUgEgVgVQgVgWgJgZQgMgaALgLQAKgLAYAHQAVAJAWAUQAVAWAIAWQAHAWgLAMQgIAHgLAAIgLgBgAkxhLQgOgEgIgLQgIgJADgKQACgKAMgFQAMgEAPAFQAOADAIAKQAJAKgDAJQgDALgMAEQgGACgHAAQgHAAgHgBg");
	this.shape_19.setTransform(-98.3658,-125.1016);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Al0CTQgNgFgDgMQgDgLAJgLQAKgLAQgEQAQgFAOAFQAOAFADALQADAMgKALQgJALgQAFQgIACgHAAQgIAAgIgDgAmgAxQgNgGgCgIQgBgHAHgFQAGgFAIABQAGAAAIAEIANAHQAUAJAbgDQARgBAegJQASgGAFgDQALgJAHgDQAMgFAIAGQAGAGgDALQgDAHgIAGQgPAMgXAIQgOAFgcAFQgRAEgJgBIgEAAQgaAAgrgUgAE6ACQghgIgZgTQgZgTAFgRQADgPAVgGIgogOIgjgOQgMgEgCgGQgDgHAGgGQAFgGAIgBQAIAAATAKQAyAaA3gJQAjgFArgYQAMgGAFgBQANgCAEAKQAEAIgJALQgIAJgUAHQgpARgXAFIgMADIAEABQAhAJAUARQAUASgEARQgEARgWAGQgJADgMAAQgPAAgTgFg");
	this.shape_20.setTransform(-244.9422,-96.2858);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33CCFF").s().p("ApZDQQgVgNAAgQQABgNATgQQAGgGAFgBIAHgBQAFgBAAgDQAbgDAVAQQAUAPABAVQABAMgGAJQgFAKgKAEQgIADgMAAQgcgCgXgPgAGuDNQgKgDgHgJQgFgFgHgNQgSghgNgQIgOgTQgHgLACgKQABgIAHgFQAHgFAJAAQAGAAgDgCQARgDASAHQARAHAMAOQAQARAGAXQAGAYgGAWQgEAPgGAFQgHAJgLAAIgGgBgAHchYQgLgHgHgLQgHgLABgJQABgLAPgQIAtgqQASgSAKgFQAIgEAHgBQAQgCAPAFQAPAFAKALQAKAMABARQAAARgLAKQgHAHgNAFIgYAGQgXAIgRAQIgNANQgIAHgHACIgHABQgIAAgJgFg");
	this.shape_21.setTransform(-238.3756,-102.5687);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33CCFF").s().p("AtAEaQgUgCgIgHQgLgJABgbQAAgXAGgLQAIgPAWgKQAXgLApgKQANgDAHABQAPACAFAOQAGAOgIAMQgLAKgDAHQgCAEgBAHQgBAIgCADQgDAHgKAGIgRALIgIAJIgIAIQgIAGgQAAIgKgBgAHUDlQgJgCgIgJQgFgGgHgMQgSgigNgQIgOgSQgHgMACgJQACgIAHgGQAHgFAIABQAGAAgCgDQARgDASAIQAQAGANAOQAPARAGAYQAGAXgFAXQgEAOgGAGQgIAIgKAAIgHgBgAMwjGIgjgIQgSgEgmgBQgegBgIgOQgEgHACgJQACgIAGgGQAJgJAUgFQAWgEALgDQAFgCAAgDQAnABAhAMQAgALAGAVQAEAQgLAMQgLAMgVAAIgPgBg");
	this.shape_22.setTransform(-238.424,-101.2278);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33CCFF").s().p("AwGFTQgOgHgNgPQgOgRgBgNQgCgLAIgSQALgXAUgYQARgUAQAAQANgBAJANQAJAMgCAOIgEAPQAAAFADAOQAGAYgEAYQgDASgIAIQgGAFgIACIgKABQgLAAgMgGgAG/EJQgJgCgIgJQgFgGgHgMQgSgigNgQIgOgSQgHgMACgJQACgIAHgGQAHgFAIABQAGAAgCgDQARgDASAIQAQAGANAOQAPARAGAYQAGAXgFAXQgEAOgGAGQgIAIgKAAIgHgBgAQCjcQgIgDgMgLQgfgdgIgVIgFgYQgDgNABgFQABgIAIgFQAIgFAJAAQALAAAUALQAfASANASQAJAMADAOQADAPgFANQgFANgOAIQgIAEgIAAQgFAAgFgCg");
	this.shape_23.setTransform(-232.5056,-85.8385);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AmKBoQgNgHgBgMQgCgMALgJQALgKAQgCQARgCANAGQAOAHABALQACAMgMAKQgKAKgRACIgJABQgLAAgKgFgAExAxQgggNgWgXQgXgVAHgQQAFgOAWgEQgPgGgWgMIgigTQgLgGgCgGQgBgHAGgFQAGgGAIABQAIABASAMQAuAgA4gCQAjAAAugSQAMgFAFAAQAOAAACAKQADAJgKAJQgKAIgUAFQgrALgXADIgMABIADABQAgANASATQARAVgGAQQgHAQgXAEIgKABQgTAAgYgKgAlkAeQgbgCgqgbQgNgHgBgIQAAgHAIgEQAHgEAIACQAGABAHAFIAMAIQASAMAbAAQASABAegEQATgEAFgDQAMgHAIgCQAMgFAIAIQAFAHgFAKQgEAGgJAFQgQAKgXAFQgPADgcACIgNAAIgOgBg");
	this.shape_24.setTransform(-239.839,-102.3442);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(8).p("ABrhZQCKjMCJDMAiLAwQjmgrgGDi");
	this.shape_25.setTransform(164.4572,-195.5765);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Aj8CxQgbgbAAgmQAAgmAbgbQAbgaAmAAQAmAAAaAaQAbAbgxgBQgxAAAGA0QAGA0gWANQgHAFgHAAQgQAAgSgSgACjhYQgbgEAAgeQAAgeAVgVQAVgVAeAAQAeAAAVAVQAVAVAAAeQAAAegCgcQgBgbgrAgQgmAcgaAAIgHgBg");
	this.shape_26.setTransform(175.775,-179.7703);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(8).p("ABGiFQBQjpC6CiAiEBAQjqASA2Dc");
	this.shape_27.setTransform(143.805,-212.7832);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AjFDrQgggSgKglQgKglATghQATggAlgKQAkgKAhATQAhATgvAMQgwAMATAxQATAxgRATQgIAIgMAAQgNAAgSgKgABliZQgIgdAPgaQAPgaAdgHQAdgIAaAOQAZAPAIAdQAHAdgIgaQgIgagiApQghAqgbAEIgFAAQgZAAgGgag");
	this.shape_28.setTransform(157.731,-202.2602);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20},{t:this.shape_21}]},1).to({state:[{t:this.shape_20},{t:this.shape_22}]},1).to({state:[{t:this.shape_20},{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_26},{t:this.shape_25}]},3).to({state:[{t:this.shape_28},{t:this.shape_27}]},3).wait(4));

	// beak
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CB6602").s().p("AGLjkQAsBDBtBHQhFBagjBpQnmAAn5B8QHYlYHWhxg");
	this.shape_29.setTransform(-158.075,-95.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CB6602").s().p("AoEEqQGdmcHAi3QA1A8B3A1Qg2BkgTBtQnTERnRAAIgcAAg");
	this.shape_30.setTransform(-155.025,-85.9877);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB6602").s().p("AFVl/QBDA8CJAtQgwB2gIB8IwJGkQGZn8HckDg");
	this.shape_31.setTransform(-149.1,-81.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CB6602").s().p("Ap2CoQJAkyIbgyQAmBRBtBgQhbBZg4BuQoahOpBA6g");
	this.shape_32.setTransform(-157.75,-108.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CB6602").s().p("AoeizQI4g+HICHQAEBOA5BwQhnAshRBIQmcjtnpiOg");
	this.shape_33.setTransform(-154.025,-116.6732);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CB6602").s().p("AouAfQIWjOHaANQAYBKBVBdQhYBFg9BaQnLh7n9gKg");
	this.shape_34.setTransform(-157.05,-105.4634);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CB6602").s().p("AExlWQA8A1B6AoQgqBqgHBvQnVB9nHD6QFunGGpjng");
	this.shape_35.setTransform(-280.75,-50.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CB6602").s().p("AFhkgQA0A8B1A5Qg4BjgWBsQnhBAnkC9QGmmTHEiug");
	this.shape_36.setTransform(-282.475,-62.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CB6602").s().p("ApYFPQAFg5ABhgQABhggVipQDsh2DehBQEAhMDvgEQAPAKlwC5QlyC4AHAxQIXhGHJhFQjQC4isBBQirBAjVA4QiHAjiPAAQhVAAhYgMg");
	this.shape_37.setTransform(255.5,-175.0501);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CB6602").s().p("An8EuQgZheg/ieQDFiuDFh4QDkiMDmhCQASAGk1ESQk1ERAUAuQHzjOGmi5QiYDpiWBpQiVBrjABtQi/BujuAdQgJg4gYhdg");
	this.shape_38.setTransform(234.25,-215.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_29}]},3).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},5).to({state:[{t:this.shape_37}]},3).to({state:[{t:this.shape_38}]},3).wait(4));

	// head
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#99CC66").s().p("AnsGfQgujYAajnQAZjpCbibQCaiaDaAAQDaAACRCnQCQCngeD9QgdD+hzBqQhzBrlgBMQhbAThHAAQjLAAghigg");
	this.shape_39.setTransform(-103.3835,-104.4814);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#99CC66").s().p("AlzITQhpjTgnj2Qgnj2BujHQBtjJDXg5QDXg6C8CGQC8CGApEOQApEMhTCMQhUCMlHCsQiRBNhmAAQh9AAg6h1g");
	this.shape_40.setTransform(-101.387,-99.8437);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#99CC66").s().p("Aj3J1Qili4hpjwQhpjvA/jrQA/jtDTh6QDUh6DoBRQDpBSBxEGQByEGgzCmQg0CnksEPQiyCiiCAAQhYAAhDhKg");
	this.shape_41.setTransform(-100.9372,-100.0698);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#99CC66").s().p("Am3HPQhGjSgCjrQgCjqCGitQCHitDYgcQDXgcCjCUQChCVABEAQABD/hkB5QhlB4lUB5Qh8ArhYAAQiZAAguiEg");
	this.shape_42.setTransform(-99.3263,-103.0593);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#99CC66").s().p("AorFWQAVk5BTjbQBUjcC5hqQC4hsDPA4QDPA3BeDCQBdDDhbDoQhdDoiHBIQiHBIlqBWQhOASg9AAQjbAAAQj2g");
	this.shape_43.setTransform(-99.0243,-106.1162);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#99CC66").s().p("AnRG6Qg9k0AYjqQAYjqCXiWQCXiYDVAAQDXAACNCjQCMCkgcD5QgdD3hwBoQhxBplGCwQh4BBhVAAQiSAAgnjDg");
	this.shape_44.setTransform(-98.2305,-99.7554);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AlxH3QhkjFgjjnQgkjnBti9QBui9DTg5QDSg5C3B9QC2B8AlD8QAlD9hTCEQhTCFlBCkQiRBLhlAAQh4AAg3hrg");
	this.shape_45.setTransform(-231.9907,-73.2023);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AmyHPQhKjQgFjqQgFjqCEitQCGiuDYgcQDYgeClCUQClCSAEEAQAED/hkB4QhjB5lTB5Qh+AthZAAQiZAAguiDg");
	this.shape_46.setTransform(-230.305,-78.3691);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AnKG+QjSk5BDkuQBCkwDGiWQDFiYD3AhQD2AgCpDKQCqDKiBF3QiCF4kOCTQkMCShIALIgFAAQhJAAjLkvg");
	this.shape_47.setTransform(157.4363,-131.62);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkoIbQkcj4gNk1QgQk2CZjFQCXjFD4ghQD2ghDXCYQDYCXgbGNQgdGLjeDUQjeDThDAdQgHADgJAAQhOAAj/jfg");
	this.shape_48.setTransform(149.4837,-150.0404);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39}]}).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},2).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_39}]},3).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},5).to({state:[{t:this.shape_47}]},3).to({state:[{t:this.shape_48}]},3).wait(4));

	// body
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ApMQCQslh1jum0QjumzAhm4QAhm6Fah+QFZh+KNBAQKNBBOoGxQOoGxkpEJQkqEKp0FkQnYEMo8AAQi8AAjHgcg");
	this.shape_49.setTransform(20.0027,23.2672);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ApMQCQslh1jum0QjumzAhm4QAhm6Fah+QFZh+KNBAQKNBBOoGxQOoGxkpEJQkqEKp0FkQnYEMo9ABQi7AAjHgdg");
	this.shape_50.setTransform(17.8617,18.8721);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhANAQxMhnlGk5QlGk6gDl9QgEl+FZh+QFZh/KOBBQKMBAOpGyQOoGwkqEKQkqEKjQChQh/BinLAAQklAAmrgog");
	this.shape_51.setTransform(-103.0397,39.2083);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ay/OBQkSiEnQiEQnRiFQsn1QQsn3MYlXQMalXE9FCQE+FCB+F8QB+F7mPGTQmQGTyPAFIhbABQw9AAkIiAg");
	this.shape_52.setTransform(-26.239,-7.2394);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AxeRTQkihdnehDQnfhCPcqHQPdqFLgnBQLinCFoETQFmETCyFnQCyFmlUHGQlUHHyCCnQrlBrmBAAQjWAAhoghg");
	this.shape_53.setTransform(-22.2731,-12.2158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50,p:{y:18.8721,x:17.8617}}]},4).to({state:[{t:this.shape_50,p:{y:12.8721,x:17.8617}}]},2).to({state:[{t:this.shape_50,p:{y:13.2721,x:20.0117}}]},4).to({state:[{t:this.shape_49}]},3).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},5).to({state:[{t:this.shape_52}]},3).to({state:[{t:this.shape_53}]},3).wait(4));

	// backleg
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#653300").s().p("Ah+F3IhbCkQgYiCApiHQAJghAPghIgBgDIAHgCIAAr6IB9AAIAALkQAfAQAbATQCDBUBTB4IjghYIACDkg");
	this.shape_54.setTransform(-57.4332,113.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#653300").s().p("Ah+EZIhbB7QgYhhAphmQAJgZAPgYIgBgCIAHgBIAAo8IB9AAIAAIqQAfANAbAOQCDA/BTBaIjghCIACCrg");
	this.shape_55.setTransform(-57.4332,113.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#653300").s().p("AhjFfIiCCHQAKiEBLh4QARgdAXgdIgBgDIAIABIDErhIB5AhIi/LKQAZAYAXAaQBoBzAxCJIjBiPIg4Ddg");
	this.shape_56.setTransform(-74.475,112.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#653300").s().p("Ah+F3IhbCkQgYiCApiHQAJghAPghIgBgDIAHgBIAAr7IB9AAIAALkQAfAQAbATQCDBUBTB4IjghYIACDkg");
	this.shape_57.setTransform(-182.5332,132.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#653300").s().p("AgCF6Ij/BlQBeiJCVhgQAfgVAjgTIAAtLICPAAIAANlIAIACIgBADQAQAlALAmQAvCagcCUIhoi7IiVDTg");
	this.shape_58.setTransform(62.286,119.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54}]}).to({state:[{t:this.shape_55}]},4).to({state:[{t:this.shape_56}]},4).to({state:[{t:this.shape_54}]},5).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},5).to({state:[{t:this.shape_58,p:{y:119.925}}]},3).to({state:[{t:this.shape_58,p:{y:106.325}}]},3).wait(4));

	// backwing
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333334").s().p("AL8LuQmGiFoNkrQoPkqkdlEQkdlDBciQQBbiPGeB5QGeB5HUFiQHVFjD6F7QD7F6gXAtQgGALgdAAQhWAAklhkg");
	this.shape_59.setTransform(-50.4652,22.4405);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333334").s().p("AL9LuQmHiFoNkqQoPkrkdlEQkdlDBciQQBbiPGeB5QGeB5HUFiQHVFjD6F7QD7F6gXAtQgGALgdAAQhWAAkkhkg");
	this.shape_60.setTransform(-175.5653,41.4401);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333334").s().p("ADSRyQlLlskPp6QkOp6hlnLQhlnKA2gUQA1gVGMFNQGNFLFWJAQFVI/BUHlQBTHlitBUQghAQgnAAQilAAkKkng");
	this.shape_61.setTransform(28.7378,-129.83);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333334").s().p("AFhRIQlylDlYpWQlXpViZm9QiZm7AzgbQAygaGwEcQGyEbGVIUQGWITCNHYQCLHYijBoQgnAZg0AAQihAAkYj0g");
	this.shape_62.setTransform(19.65,-120.907);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333334").s().p("AIIP+QmekLmqoeQmooejZmhQjYmhAwghQAtgiHVDbQHWDZHeHUQHeHTDPG/QDOG/iRB+QgwAphLAAQidAAkXi0g");
	this.shape_63.setTransform(8.2333,-108.3202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59}]}).to({state:[{t:this.shape_59}]},4).to({state:[{t:this.shape_59}]},4).to({state:[{t:this.shape_59}]},5).to({state:[{t:this.shape_60,p:{y:41.4401}}]},1).to({state:[{t:this.shape_60,p:{y:26.2401}}]},5).to({state:[{t:this.shape_61}]},3).to({state:[{t:this.shape_62}]},2).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_61}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(13).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.8,-273.1,656.8,473);


(lib.seagullAngryCloseUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// beak
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AhPOIQgWsEkCseQgYhKgahLIAygVQFviRGSCmQkfMNg/Oqg");
	this.shape.setTransform(-54.975,-145.3935);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AhPOIQgWsEkCseQgYhKgahLQAZgLAZgKQFviRGSCmQkfMNg/Oqg");
	this.shape_1.setTransform(-54.975,-145.3927);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(37).to({_off:true},1).wait(1));

	// eyebrows
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("ArZj+QBtERDdDsALajgQg+FgjaB1");
	this.shape_2.setTransform(-57.975,-276.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("ArZj+QBtEQDdDtAHCD1QDah1A+lg");
	this.shape_3.setTransform(-57.975,-276.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(37).to({_off:true},1).wait(1));

	// eyes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AI3BbQAahJAFhbQALhrAaANQAvAYAoAoQAoAogEA+QgFA9gvAxQgvAxg+AKIgMABQguAAAchOgAqwCMQgygdgOg3QgPg3AdgwIAAgBQAcgxArgaQArgbAeAcQAcAZgTAxIgDAHQgYA0AqBAQApBAg3AOQgTAFgTAAQgiAAgggSg");
	this.shape_4.setTransform(-53.1717,-240.0576);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AI3BaQAahIAFhbQALhsAbAOQAuAXAoApQAoAogEA9QgFA9gvAyQgvAxg+AKIgLACQgwAAAdhQgAqwCLQgygcgOg4QgPg2AdgxIAAAAQAcgxArgaQArgbAeAbQAcAagTAxIgDAGQgYA1AqA/QApBAg3AOQgTAGgTAAQgiAAgggTg");
	this.shape_5.setTransform(-53.1717,-240.049);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({_off:false},0).wait(37).to({_off:true},1).wait(1));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ak8NcQjOhCh2ixQh1izhSkqQhRkqAniqQAniqCZiOQEgkJGWAAQGXgBEEEKQEFEKgtF2QgsF4jYEKQjYEImXAAQirAAiWgug");
	this.shape_6.setTransform(-59.2315,-251.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(40));

	// wingleft
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("An1HZQgDs4FurpQDznwGNAPQlUQ6FUPIQjBRRj7AAQj6AAk1xRg");
	this.shape_7.setTransform(-201.0267,-45.6638);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({y:-45.661},0).wait(38).to({y:-45.6638},0).wait(1));

	// wingright
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("An1IsQFUvIlUw6QGNgPDzHwQFuLpgDM4QmMOrj6AAQj7AAhqurg");
	this.shape_8.setTransform(78.8265,-50.5325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("An1IsQFUvIlUw6QGNgPDzHwQFuLpgDM4QmNOrj5AAQj7AAhqurg");
	this.shape_9.setTransform(78.8267,-50.536);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1).to({_off:false},0).wait(37).to({_off:true},1).wait(1));

	// Shadow
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EEF4FF").s().p("AosK+QjnkjAAmbQAAmaDnkiQDnkjFFAAQFGAADnEjQDnEiAAGaQAAGbjnEjQjnEilGAAQlFAAjnkig");
	this.shape_10.setTransform(-59.625,-170.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEF4FF").s().p("AosLCQjnklAAmdQAAmcDnkkQDnklFFAAQFGAADnElQDnEkAAGcQAAGdjnElQjnEjlGAAQlFAAjnkjg");
	this.shape_11.setTransform(-59.625,-171.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EEF4FF").s().p("AosLFQjnklAAmgQAAmeDnkmQDnkmFFAAQFGAADnEmQDnEmAAGeQAAGgjnElQjnEmlGAAQlFAAjnkmg");
	this.shape_12.setTransform(-59.625,-172.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EEF4FF").s().p("AosLJQjnknAAmiQAAmgDnkoQDnkoFFABQFGgBDnEoQDnEoAAGgQAAGijnEnQjnEolGAAQlFAAjnkog");
	this.shape_13.setTransform(-59.625,-172.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EEF4FF").s().p("AosLNQjnkpAAmkQAAmiDnkqQDnkpFFAAQFGAADnEpQDnEqAAGiQAAGkjnEpQjnEplGAAQlFAAjnkpg");
	this.shape_14.setTransform(-59.625,-173.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EEF4FF").s().p("AosLRQjnkrAAmmQAAmlDnkrQDnkrFFAAQFGAADnErQDnErAAGlQAAGmjnErQjnErlGAAQlFAAjnkrg");
	this.shape_15.setTransform(-59.625,-174.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EEF4FF").s().p("AosLVQjnksAAmpQAAmnDnktQDnksFFAAQFGAADnEsQDnEtAAGnQAAGpjnEsQjnEslGAAQlFAAjnksg");
	this.shape_16.setTransform(-59.625,-175.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EEF4FF").s().p("AosLZQjnkuAAmrQAAmqDnkuQDnkuFFAAQFGAADnEuQDnEuAAGqQAAGrjnEuQjnEulGAAQlFAAjnkug");
	this.shape_17.setTransform(-59.625,-176.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EEF4FF").s().p("AosLdQjnkwAAmtQAAmsDnkwQDnkvFFAAQFGAADnEvQDnEwAAGsQAAGtjnEwQjnEvlGAAQlFAAjnkvg");
	this.shape_18.setTransform(-59.625,-177.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EEF4FF").s().p("AosLhQjnkxAAmwQAAmuDnkyQDnkxFFAAQFGAADnExQDnEyAAGuQAAGwjnExQjnExlGAAQlFAAjnkxg");
	this.shape_19.setTransform(-59.625,-178.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EEF4FF").s().p("AosLlQjnkzAAmyQAAmwDnk0QDnkyFFgBQFGABDnEyQDnE0AAGwQAAGyjnEzQjnEzlGgBQlFABjnkzg");
	this.shape_20.setTransform(-59.625,-179);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EEF4FF").s().p("AosLpQjnk1AAm0QAAmzDnk1QDnk0FFAAQFGAADnE0QDnE1AAGzQAAG0jnE1QjnE0lGAAQlFAAjnk0g");
	this.shape_21.setTransform(-59.625,-179.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EEF4FF").s().p("AosLtQjnk2AAm3QAAm1Dnk2QDnk2FFgBQFGABDnE2QDnE2AAG1QAAG3jnE2QjnE1lGAAQlFAAjnk1g");
	this.shape_22.setTransform(-59.625,-180.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EEF4FF").s().p("AosLwQjnk3AAm5QAAm3Dnk5QDnk3FFAAQFGAADnE3QDnE5AAG3QAAG5jnE3QjnE4lGAAQlFAAjnk4g");
	this.shape_23.setTransform(-59.625,-181.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EEF4FF").s().p("AosL0Qjnk5AAm7QAAm6Dnk6QDnk5FFAAQFGAADnE5QDnE6AAG6QAAG7jnE5QjnE6lGgBQlFABjnk6g");
	this.shape_24.setTransform(-59.625,-182.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EEF4FF").s().p("AosL4Qjnk7AAm9QAAm7Dnk8QDnk7FFAAQFGAADnE7QDnE8AAG7QAAG9jnE7QjnE7lGAAQlFAAjnk7g");
	this.shape_25.setTransform(-59.625,-183.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EEF4FF").s().p("AosL8Qjnk8AAnAQAAm+Dnk9QDnk9FFAAQFGAADnE9QDnE9AAG+QAAHAjnE8QjnE9lGAAQlFAAjnk9g");
	this.shape_26.setTransform(-59.625,-184.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEF4FF").s().p("AosMAQjnk+AAnCQAAnADnk/QDnk+FFAAQFGAADnE+QDnE/AAHAQAAHCjnE+QjnE+lGAAQlFAAjnk+g");
	this.shape_27.setTransform(-59.625,-185.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EEF4FF").s().p("AosMEQjnlAAAnEQAAnCDnlBQDnlAFFAAQFGAADnFAQDnFBAAHCQAAHEjnFAQjnFAlGAAQlFAAjnlAg");
	this.shape_28.setTransform(-59.625,-185.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EEF4FF").s().p("AosMIQjnlBAAnHQAAnFDnlCQDnlBFFAAQFGAADnFBQDnFCAAHFQAAHHjnFBQjnFBlGAAQlFAAjnlBg");
	this.shape_29.setTransform(-59.625,-186.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EEF4FF").s().p("AosMMQjnlDAAnJQAAnHDnlEQDnlDFFAAQFGAADnFDQDnFEAAHHQAAHJjnFDQjnFDlGAAQlFAAjnlDg");
	this.shape_30.setTransform(-59.625,-187.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EEF4FF").s().p("AosMPQjnlEAAnLQAAnJDnlGQDnlFFFABQFGgBDnFFQDnFGAAHJQAAHLjnFEQjnFFlGAAQlFAAjnlFg");
	this.shape_31.setTransform(-59.625,-188.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EEF4FF").s().p("AosMUQjnlHAAnNQAAnLDnlIQDnlGFFAAQFGAADnFGQDnFIAAHLQAAHNjnFHQjnFGlGAAQlFAAjnlGg");
	this.shape_32.setTransform(-59.625,-189.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EEF4FF").s().p("AosMYQjnlIAAnQQAAnNDnlJQDnlJFFAAQFGAADnFJQDnFJAAHNQAAHQjnFIQjnFHlGAAQlFAAjnlHg");
	this.shape_33.setTransform(-59.625,-190.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EEF4FF").s().p("AosMcQjnlKAAnSQAAnQDnlKQDnlKFFAAQFGAADnFKQDnFKAAHQQAAHSjnFKQjnFJlGAAQlFAAjnlJg");
	this.shape_34.setTransform(-59.625,-191.1);
	this.shape_34._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(24).to({_off:false},0).wait(16));

	// Body
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AxcRdQnPnOAAqPQAAqNHPnPQHPnPKNAAQKPAAHOHPQHPHPAAKNQAAKPnPHOQnOHPqPAAQqNAAnPnPg");
	this.shape_35.setTransform(-61.025,-75.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AxcRcQnPnOAAqOQAAqMHPnPQHPnOKNAAQKPAAHOHOQHPHPAAKMQAAKOnPHOQnOHOqPAAQqNAAnPnOg");
	this.shape_36.setTransform(-61.025,-75.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AxcRaQnPnNAAqMQAAqMHPnOQHPnOKNAAQKPAAHOHOQHPHOAAKMQAAKMnPHNQnOHOqPAAQqNAAnPnOg");
	this.shape_37.setTransform(-61.025,-75.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AxcRZQnPnNAAqMQAAqLHPnNQHPnNKNAAQKPAAHOHNQHPHNAAKLQAAKMnPHNQnOHNqPAAQqNAAnPnNg");
	this.shape_38.setTransform(-61.025,-75.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AxcRXQnPnMAAqLQAAqKHPnMQHPnNKNAAQKPAAHOHNQHPHMAAKKQAAKLnPHMQnOHNqPAAQqNAAnPnNg");
	this.shape_39.setTransform(-61.025,-75.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AxcRWQnPnMAAqJQAAqJHPnNQHPnMKNAAQKPAAHOHMQHPHNAAKJQAAKJnPHMQnOHLqPABQqNgBnPnLg");
	this.shape_40.setTransform(-61.025,-75.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AxcRVQnPnLAAqJQAAqIHPnMQHPnMKNAAQKPAAHOHMQHPHMAAKIQAAKJnPHLQnOHLqPAAQqNAAnPnLg");
	this.shape_41.setTransform(-61.025,-75.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AxcRTQnPnKAAqIQAAqIHPnKQHPnLKNAAQKPAAHOHLQHPHKAAKIQAAKInPHKQnOHLqPAAQqNAAnPnLg");
	this.shape_42.setTransform(-61.025,-75.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AxcRRQnPnJAAqHQAAqHHPnKQHPnKKNAAQKPAAHOHKQHPHKAAKHQAAKHnPHJQnOHKqPAAQqNAAnPnKg");
	this.shape_43.setTransform(-61.025,-75.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AxcRPQnPnIAAqGQAAqGHPnKQHPnJKNAAQKPAAHOHJQHPHKAAKGQAAKGnPHIQnOHKqPAAQqNAAnPnKg");
	this.shape_44.setTransform(-61.025,-75.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AxcROQnPnIAAqFQAAqFHPnJQHPnJKNAAQKPAAHOHJQHPHJAAKFQAAKFnPHIQnOHJqPAAQqNAAnPnJg");
	this.shape_45.setTransform(-61.025,-75.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AxcRNQnPnIAAqEQAAqEHPnIQHPnJKNAAQKPAAHOHJQHPHIAAKEQAAKEnPHIQnOHIqPAAQqNAAnPnIg");
	this.shape_46.setTransform(-61.025,-75.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AxcRLQnPnHAAqDQAAqDHPnIQHPnIKNABQKPgBHOHIQHPHIAAKDQAAKDnPHHQnOHHqPAAQqNAAnPnHg");
	this.shape_47.setTransform(-61.025,-75.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AxcRKQnPnHAAqDQAAqBHPnHQHPnIKNAAQKPAAHOHIQHPHHAAKBQAAKDnPHHQnOHGqPAAQqNAAnPnGg");
	this.shape_48.setTransform(-61.025,-75.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AxcRIQnPnGAAqCQAAqBHPnGQHPnGKNAAQKPAAHOHGQHPHGAAKBQAAKCnPHGQnOHGqPAAQqNAAnPnGg");
	this.shape_49.setTransform(-61.025,-75.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AxcRHQnPnFAAqCQAAqAHPnFQHPnGKNAAQKPAAHOHGQHPHFAAKAQAAKCnPHFQnOHFqPAAQqNAAnPnFg");
	this.shape_50.setTransform(-61.025,-75.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AxcRFQnPnEAAqBQAAp/HPnFQHPnFKNAAQKPAAHOHFQHPHFAAJ/QAAKBnPHEQnOHFqPAAQqNAAnPnFg");
	this.shape_51.setTransform(-61.025,-75.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AxcREQnPnEAAqAQAAp+HPnEQHPnFKNAAQKPAAHOHFQHPHEAAJ+QAAKAnPHEQnOHEqPAAQqNAAnPnEg");
	this.shape_52.setTransform(-61.025,-75.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AxcRCQnPnDAAp/QAAp9HPnEQHPnEKNAAQKPAAHOHEQHPHEAAJ9QAAJ/nPHDQnOHEqPAAQqNAAnPnEg");
	this.shape_53.setTransform(-61.025,-75.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AxcRAQnPnCAAp+QAAp8HPnDQHPnEKNAAQKPAAHOHEQHPHDAAJ8QAAJ+nPHCQnOHEqPAAQqNAAnPnEg");
	this.shape_54.setTransform(-61.025,-75.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AxcQ/QnPnCAAp9QAAp7HPnDQHPnCKNgBQKPABHOHCQHPHDAAJ7QAAJ9nPHCQnOHDqPAAQqNAAnPnDg");
	this.shape_55.setTransform(-61.025,-76);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AxcQ+QnPnCAAp8QAAp6HPnCQHPnCKNgBQKPABHOHCQHPHCAAJ6QAAJ8nPHCQnOHCqPAAQqNAAnPnCg");
	this.shape_56.setTransform(-61.025,-76);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AxcQ8QnPnBAAp7QAAp5HPnCQHPnBKNAAQKPAAHOHBQHPHCAAJ5QAAJ7nPHBQnOHBqPAAQqNAAnPnBg");
	this.shape_57.setTransform(-61.025,-75.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AxcQ6QnPnAAAp6QAAp4HPnBQHPnBKNAAQKPAAHOHBQHPHBAAJ4QAAJ6nPHAQnOHBqPAAQqNAAnPnBg");
	this.shape_58.setTransform(-61.025,-76);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AxcQ5QnPm/AAp6QAAp4HPnAQHPnAKNAAQKPAAHOHAQHPHAAAJ4QAAJ6nPG/QnOHAqPAAQqNAAnPnAg");
	this.shape_59.setTransform(-61.025,-76);
	this.shape_59._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(24).to({_off:false},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.2,-341.9,380.2,454.09999999999997);


(lib.seagull_foot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AgnDpIiOBAIByh/Ih9gLQBFgqA+gNIAjgEQA5gDA0AaQgIgGgHgLQg5hCg/hpQhVh/hxi0IBQgBQBeCRBcBsQB0CTBmBcIARAMIkuD0g");
	this.shape.setTransform(25.475,-37.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgEAAIAJAA");
	this.shape_1.setTransform(0.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-74.9,51.6,74.9);


(lib.seagull_feet_tween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AAeBIIAKAIIjSAIIhNhEIEHhxIgkA3IAhARIDdg8IgsAxIA6AnIhJAVIA7BCg");
	this.shape.setTransform(27.525,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("ADtBaIhhgJInxgZIgLAAIgWAAQgOgCgJgLQgJgMACgOQACgOAMgIQAMgJAOACIDEARIErALIkCgjIgGAAIgGgBQgOgEgIgMQgHgNAEgOQAEgOAMgIQANgHAOAEIAGACIEMAzIDmAfIAXADIADABQAPACAHAMQAIAMgDAOQgDAOgMAIQgNAIgOgDIhogWQACAGgBAIQgBAOgMAJQgJAIgMAAIgEAAg");
	this.shape_1.setTransform(-13.9773,-0.3476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-9.3,108.5,18.700000000000003);


(lib.seagull_back_foot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AAkDWIjXBCIB1haIAmgeIiTgDID0hAQg5g4g8hdQhdh0iAinIBMgLQBkB/BpBpQB1CJBuB6IAXAXIk4C6g");
	this.shape.setTransform(-3.025,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seagull_back_foot, new cjs.Rectangle(-29.6,-46.5,53.2,70.1), null);


(lib.sadmouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AilAuQgIgDgOgLIAagRIBGgyQAIgGAJgEQAJgCAUACQAYACAvgBQAqABAbARIARALQAJAHAJACIAFACQABADAGADQAfASAOAFIgKABIgMACQgPABgSgCIg1gHQg2gHg9gBIgFABQgJgCgOACQgCgCgDAAQgKgCgKAFIgGADIgDAAQgGACgLAJIgBABIAAAAIgMAIQgQAKgNAAIgIgBg");
	this.shape.setTransform(5.65,-2.5287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-7.2,37.5,9.4);


(lib.rightarm_sitting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AhwHHQAAhcgFhPQgIhvgThUQgJgjACglQADgjAOgVQAPgVAOkMQAOkMgVgMQgVgMgMgZQgMgYgdgYQgTgPg8geQhLglg0ggQAAgPAbgEQAQgDArAAIADgKQAGgLANAAQgHgLgPgpQgNgngNgTQgthBhkAbIAAgrQA8AACNgWQCNgVAUAAQGeAABfLsQAbDTAGFTQAEEiAvCBQhpDlgSgHQgSgIh7BtQh6BshPAVQiHhUAKiLQAKiLgbAYQgVhpAhgiQAigignhR");
	this.shape.setTransform(47.85,108.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A1705E").s().p("AhwNeQAKiLgbAYQgVhpAhgiQAigignhRIAEjRQgHhvgThUQgJgjADglQACgjAOgVQAPgVAOkMQAOkMgVgMQgVgMgMgZQgMgYgdgYQgTgPg8geQhKglg0ggQAAgPAbgEQAPgDArAAIADgKQAGgLANAAQgGgLgQgpQgNgngOgTQgrhBhmAbIAAgrQA9AACNgWQCNgVAUAAQGfAABeLsQAbDTAGFTQAEEiAwCBQhpDlgTgIQgSgHh7BtQh6BshPAVQiHhUAKiLgAhwHHQAAhcgGhPQAGBPAABcg");
	this.shape_1.setTransform(47.85,108.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightarm_sitting, new cjs.Rectangle(-2,-2,99.7,221.1), null);


(lib.playButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("play", "96px 'Modak'");
	this.text.textAlign = "center";
	this.text.lineHeight = 147;
	this.text.lineWidth = 292;
	this.text.parent = this;
	this.text.setTransform(217.95,-152.3,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({scaleX:0.8505,scaleY:0.8505,y:-145.4},0).wait(1).to({scaleX:0.945,scaleY:0.945,y:-156.3},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("EgiFgRhMBELAAAMAAAAjDMhELAAAg");
	this.shape.setTransform(218.2,-112.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("EgiFARiMAAAgjCMBELAAAMAAAAjCg");
	this.shape_1.setTransform(218.2,-112.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("EgiFARiMAAAgjCMBELAAAMAAAAjCg");
	this.shape_2.setTransform(218.2,-112.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("EggNgQjMBAbAAAMAAAAhHMhAbAAAg");
	this.shape_3.setTransform(218.2,-112.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC00CC").s().p("EggNAQkMAAAghHMBAbAAAMAAAAhHg");
	this.shape_4.setTransform(218.2,-112.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-226.8,441.4,229.3);


(lib.mouthopening = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak5DKQiOhJh1jZQh2jZDPAjQDQAjBQAAQBRABAxAEQAwAFB+gDQB+gCBeAcQBeAdAWAQQAXAPBeATQBeAUhFBoQhFBpgpA1QgpA1hUAWQhVAWiGAOQgyAGg3AAQjIAAiNhKg");
	this.shape.setTransform(48.0009,-25.4182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-53,123.19999999999999,55.2);


(lib.mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {neutral:0,CH:1,Eh:2,"L/TH":4,Oh:5,QUW:6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mouthshapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiWAVQggAAgOgIQgGgDgCgFQgDgFAEgEQADgDAJAAQBrAGBpgGQAggCAQgDIA0gIIAgAAIAnABQAJAAADAEQAEAFgEAGQgDAEgGADQgSAKgRAEQgTAEgmAAg");
	this.shape.setTransform(20.5609,-9.7625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1B7B0").s().p("Ag0BFIgXgIIgZgKQgOgFgLgBIgNgCQgHgCgIgHQgPgMgOgQQAPgBAWADIABAHQADAHADACQADADAFABIAJACIANAFQALAFAXAGIAUAHQANAEAcAAIAUgCIALgCIAPgBIA8ABQAGAAADgBQAFgCgBgFQAKAAAPgHQAIgEACgCQAFgGgCgFIALgCQAHAAADADQAGAFgEAEQgHACgHAHIgMAMIgFADQg3ARhLAAQgeAAgcgDgAgnAnIgFgBIgJgCIAOAAQAJABACACIgLAAgACogMIgFgEQgJgHgVgDQgegEguACIglABIgcgCIgTgBIgKgBIgBAAIgJgGQgDgDgNgBIg+gCQASgOAXgHQAcgFAggCQAFACAEAFIAHAKQAGAGAPAAICCgDIAHAAIAIAEIAFAFIAOAPQAHAJgBAIQgGgCgJAAg");
	this.shape_1.setTransform(22.0215,-7.1125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSAtIgUgIQgYgGgLgFIgNgFIgJgCQgFgBgDgCQgDgCgDgHIgBgHIABgGQABgDADgCQAEgCADABIAIADIAFAAIAFgBQAFgBAOADIAQABQAkABAtADIB/AIQAOAAACAHQADAGgGAFQgCADgIAEQgPAGgKAAQABAFgFACQgDACgGAAIg7gBIgPABIgLACIgVABQgbAAgNgDgAhJAdIAGABIALABQgDgCgIgBIgPgBIAJACgACeALIAHgBQAIgBADgGQAFgGgDgNIgBgEQACAGAAAGQAAARgUAOIgBgMgABqgEIgOgDQgCACgFAAIhTABQgWAAgLgCIgRgEIgPAAQgSAAgPgCQgLgBgFgFIgBgBIgCAEQgDACgGABQgOAAgegJQgJgFgBgFQAAgFAGgDQAEgBAGAAIAlgBIACgDQAFgDADABIAGACIAFgDIAHABIANADIAMACIAFACIABAAIALABIASABIAdACIBVACQAJAAAEACIADADIAOABQAGAAAFACQAGADABAFQABAIgHADQgEACgFAAIgEAAg");
	this.shape_2.setTransform(24.9,-6.2562);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBgQghgFghgMQgZgLgIgCIgYgFQgRgGgRgOQgLgKgQgUQgGgGAAgEIAAgCIgCgBQgEgDAAgGQAAgFAEgEQAEgFANgFQAWgHATgMIATgNIASgMQASgLApgKQAOgDAKABQAKABATAOQAKAGAGABIAOABIBwABQAQAAAIACQAKAEAJAKQASATAHAZIABAEQADALgFAIQgDAFgIACIgHAAIABANQgBAJgEAFIgNALIgJAIQgLAJgKAEIgUAGQgNAEgHAEIgPAGQgGACgLAAIggABQgiAAgVgDgAixAEQANAQAPAMQAIAHAHACIANACQALABAPAFIAYAKIAYAIQAcAIAeACIAsABIAXgCQAEgBANgFIAcgKIARgHIAGgDIAMgMQAHgHAGgCQAEgEgFgFQgEgDgGAAIgMACQgCgIgOAAIiAgIQgsgDgjAAIgQgBQgPgEgEABIgGACIgFAAIgIgEQgDAAgDABQgEACgBADIgBAGQgRgDgNAAIgGABgACMACQAHABAFgDQAIgDgBgHQgCgGgGgCQgEgCgHAAIgOgBIgDgDQgEgDgJAAIhWgCIAlgBQAvgCAeAEQAVADAJAHIAEAEQAJgBAGADQABgIgGgJIgPgPIgFgFIgCgCIgGgCIgHAAIiBADQgRAAgEgGIgIgKQgEgFgFgCIgIgCIgLAAQgWACgTAHQgWAHgSAOIA+ACQAMABAEADIAIAGIgEgBIgNgDIgNgCIgHgBIgFACIgGgBQgDgCgEADIgDAEIglAAQgGAAgEACQgGADAAAFQABAFAKAEQAdAKAOgBQAHgBACgCIACgDIABABQAFAEAMABQAOACATAAIAOABIAQADQALABAXAAIBTAAQAFAAACgBIAPACg");
	this.shape_3.setTransform(21.585,-6.9053);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663333").s().p("AhMAVQgfgJAAgMQAAgLAfgKQAggIAsgBQAsABAgAIQAgAKAAALQAAAMggAJQggAKgsgBQgsABgggKg");
	this.shape_4.setTransform(22.05,-6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiEAwQg2gTAAgdQAAgbA2gVQA4gTBMgBQBNABA3ATQA3AVAAAbQAAAdg3ATQg3AUhNAAQhMAAg4gUgAhCABQgfAJAAAMQAAANAfAJQAgAJArAAQAtAAAfgJQAhgJgBgNQABgMghgJQgfgIgtAAQgrAAggAIg");
	this.shape_5.setTransform(21.1,-8.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663333").s().p("Ag3A6QgCgIgGgDIgBgFQADgGAAgHIAAgRQAAgLABgFQADgOAJgIIAOgJQAIgGADgGQADgEABgHIANgBIANAAQABADAEADQAAAHAFAIQANAXAVAPIADACIAKArIABABIgBABQgDABgDAEQgDAEABAEIgpAAQgjAAgjgCg");
	this.shape_6.setTransform(21.4125,-8.4554);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAABZQgSAAgRgCIgQgCQgLgBgFgEQgTgGgRgLQgqgaAAglQAAgkAqgaQATgLAXgHQAFgEAEgCQAHgEAHACIAIACQAPgCAPAAQAjAAAcAJQAHAAAFACIAFAEQAMAFALAGQArAaAAAkQAAAIgCAIQgDALgHAKQgIAKgLAJQgDAHgGAEIgBABIgBAIQgEAHgLACQgQADglAAIgkAAIgUAAIAaABIgGAAgAgRg6IAAABQgBAHgCAEQgEAFgIAGIgNAKQgKAHgDAOQgBAGAAALIAAARQAAAHgDAGIgBADIACACQAGADACAHQA1AFA7gDQgCgEAEgDQACgEADgBIABAAIAAgBIgBgBIgKgrIgDgCQgVgPgNgXQgFgIAAgIQgEgCgBgEIgMAAIgOABg");
	this.shape_7.setTransform(21.2,-8.5475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAABZQgLAAgLgCIgKgCQgHgCgDgDQgNgHgLgKQgbgaAAglQAAgkAbgaQANgLAOgHQADgFADgBQAEgEAFACQADAAABACQAKgCAKAAQAWAAASAJQAEgBAEADIADAEIAPALQAcAaAAAkQgBAIgBAIQgCALgFAKQgEAKgIAJQgCAGgEAFIAAABIgBAIQgCAHgHACQgLADgXAAIgXAAIgNAAIARABIgEAAg");
	this.shape_8.setTransform(21.25,-8.5475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAA1QgGAAgHgCIgFgBQgFgBgCgCQgHgEgGgGQgQgPAAgWQAAgUAQgQQAHgGAIgEIAEgEQACgCADABIADABIALgBQANAAALAFQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIACACIAIAGQARAQAAAUIgBAJIgEANQgDAGgEAFQgBAEgDACIAAABIAAAFQgCAEgEABQgGACgOAAIgNAAIgHAAIAJABIgCAAg");
	this.shape_9.setTransform(21.275,-8.555);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-17.5,42.8,20.5);


(lib.louieHandSlap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4643();
	this.instance.setTransform(0,0,0.3258,0.3258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.louieHandSlap, new cjs.Rectangle(0,0,483.8,347.3), null);


(lib.Louie_right_arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8411();
	this.instance.setTransform(10.9,-241.6,0.0997,0.0997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Louie_right_arm, new cjs.Rectangle(10.9,-241.6,110.8,211.7), null);


(lib.land_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sand
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],10.5,-303.8,10.5,169).s().p("EhKmAGzIAAtlMCVNAAAIAANlg");
	this.shape.setTransform(0.525,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// Hills
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("A6eoRIMWCMIGGBkQFFgCAtiAQCCj0FJguQO+gBFWDxIZUMpQEMCFGwg/QEzgcAQhkQAvkjHgrGIBkVFMiYpABaIBG0dQFMEGIgkBQIwkHFOF6QG9HKGVlmQDojBEMAhg");
	this.shape_1.setTransform(-0.475,-90.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#152F13","#716017"],[0.051,1],-488.4,-16.5,488.5,-16.5).s().p("EhLOgJNQFMEGIgkBQIwkGFOF5QG9HLGVlnQDojBEMAhIMWCMIGGBkQFFgCAtiAQCCj0FJguQO+gBFWDxIZUMpQEMCFGwg/QEzgcAQhkQAvkjHgrGIBkVFMiYpABag");
	this.shape_2.setTransform(-0.475,-90.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},9).wait(1));

	// SKy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("EhKhgZRMCVDAAAMAAAAyjMiVDAAAg");
	this.shape_3.setTransform(0.025,-205.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],8.9,-284.7,8.9,669.2).s().p("EhKhAZRMAAAgyhMCVDAAAMAAAAyhg");
	this.shape_4.setTransform(0.025,-205.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-489.9,-367.9,978.9,411.4);


(lib.glasses_lens = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-37.8,0.7,10.1,-0.7).s().p("AjSBpQhagmgCg6QgBg4BXgsQBXgrB+gEQB8gEBaAmQBaAnABA5QACA5hXArQhXArh+AEIgWAAQhvAAhRgig");
	this.shape.setTransform(30.251,-13.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27.8,60.5,27.8);


(lib.glasses_frames = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8407();
	this.instance.setTransform(3.3,-28.4,0.166,0.166);

	this.instance_1 = new lib.CachedBmp_4548();
	this.instance_1.setTransform(-4.45,-34.7,0.166,0.166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-34.7,144.70000000000002,39.2);


(lib.exitarea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAjQgOgOAAgVQAAgTAOgQQAPgOAUAAQAUAAAPAOQAPAQAAATQAAAVgPAOQgPAPgUAAQgUAAgPgPg");
	this.shape.setTransform(5,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.exitarea, new cjs.Rectangle(0,-10,10,10), null);


(lib.wave_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wave_front
	this.instance_40 = new lib.CachedBmp_4507();
	this.instance_40.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_41 = new lib.CachedBmp_4508();
	this.instance_41.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_42 = new lib.CachedBmp_4509();
	this.instance_42.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_43 = new lib.CachedBmp_4510();
	this.instance_43.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_44 = new lib.CachedBmp_4511();
	this.instance_44.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_45 = new lib.CachedBmp_4512();
	this.instance_45.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_46 = new lib.CachedBmp_4513();
	this.instance_46.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_47 = new lib.CachedBmp_4514();
	this.instance_47.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_48 = new lib.CachedBmp_4515();
	this.instance_48.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_49 = new lib.CachedBmp_4516();
	this.instance_49.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_50 = new lib.CachedBmp_4517();
	this.instance_50.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_51 = new lib.CachedBmp_4518();
	this.instance_51.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_52 = new lib.CachedBmp_4519();
	this.instance_52.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_53 = new lib.CachedBmp_4520();
	this.instance_53.setTransform(-314.15,32.7,0.2171,0.2171);

	this.instance_54 = new lib.CachedBmp_4521();
	this.instance_54.setTransform(-383.05,29.75,0.2171,0.2171);

	this.instance_55 = new lib.CachedBmp_4522();
	this.instance_55.setTransform(-361.3,35,0.2171,0.2171);

	this.instance_56 = new lib.CachedBmp_4523();
	this.instance_56.setTransform(-345.1,36.1,0.2171,0.2171);

	this.instance_57 = new lib.CachedBmp_4524();
	this.instance_57.setTransform(-333.2,36.9,0.2171,0.2171);

	this.instance_58 = new lib.CachedBmp_4525();
	this.instance_58.setTransform(-324.65,37.5,0.2171,0.2171);

	this.instance_59 = new lib.CachedBmp_4526();
	this.instance_59.setTransform(-318.75,37.8,0.2171,0.2171);

	this.instance_60 = new lib.CachedBmp_4527();
	this.instance_60.setTransform(-314.75,38.05,0.2171,0.2171);

	this.instance_61 = new lib.CachedBmp_4528();
	this.instance_61.setTransform(-312.2,38.1,0.2171,0.2171);

	this.instance_62 = new lib.CachedBmp_4529();
	this.instance_62.setTransform(-310.7,37.5,0.2171,0.2171);

	this.instance_63 = new lib.CachedBmp_4530();
	this.instance_63.setTransform(-309.85,37.05,0.2171,0.2171);

	this.instance_64 = new lib.CachedBmp_4531();
	this.instance_64.setTransform(-309.4,36.85,0.2171,0.2171);

	this.instance_65 = new lib.CachedBmp_4532();
	this.instance_65.setTransform(-309.2,36.8,0.2171,0.2171);

	this.instance_66 = new lib.CachedBmp_4533();
	this.instance_66.setTransform(-309.1,36.75,0.2171,0.2171);

	this.instance_67 = new lib.CachedBmp_4534();
	this.instance_67.setTransform(-309.1,36.75,0.2171,0.2171);

	this.instance_68 = new lib.CachedBmp_4535();
	this.instance_68.setTransform(-309.1,36.75,0.2171,0.2171);

	this.instance_69 = new lib.CachedBmp_4536();
	this.instance_69.setTransform(-309.1,36.75,0.2171,0.2171);

	this.instance_70 = new lib.CachedBmp_4537();
	this.instance_70.setTransform(-309.3,37.65,0.2171,0.2171);

	this.instance_71 = new lib.CachedBmp_4538();
	this.instance_71.setTransform(-309.55,37.55,0.2171,0.2171);

	this.instance_72 = new lib.CachedBmp_4539();
	this.instance_72.setTransform(-309.75,37.5,0.2171,0.2171);

	this.instance_73 = new lib.CachedBmp_4540();
	this.instance_73.setTransform(-309.95,37.4,0.2171,0.2171);

	this.instance_74 = new lib.CachedBmp_4541();
	this.instance_74.setTransform(-310.15,37.3,0.2171,0.2171);

	this.instance_75 = new lib.CachedBmp_4542();
	this.instance_75.setTransform(-310.4,37.25,0.2171,0.2171);

	this.instance_76 = new lib.CachedBmp_4543();
	this.instance_76.setTransform(-310.6,37.1,0.2171,0.2171);

	this.instance_77 = new lib.CachedBmp_4544();
	this.instance_77.setTransform(-310.8,37.05,0.2171,0.2171);

	this.instance_78 = new lib.CachedBmp_4545();
	this.instance_78.setTransform(-311.05,37,0.2171,0.2171);

	this.instance_79 = new lib.CachedBmp_4546();
	this.instance_79.setTransform(-311.25,36,0.2171,0.2171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40}]}).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).wait(1));

	// wave_back
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0066CC").s().p("A19BEQxcglkmBuIAAj7QDwiJFbAyIL+ByQKFgLHDgfQGXAwFCBWIc2h8QErghE0ApIAADGQhqgDhugmQjMBLjGhiQkIBQmShIQi3AvjfApQkCAxk8AnQvShlvTgqg");
	this.shape_40.setTransform(-33.725,53.0325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0066CC").s().p("AsgBkQkvgSkugOIhEgCQjKgGitgBQnbgCkKAjQiRAThRAeIAAj7QDwiJFbAzIAdAEII8BVIClAYIDWgEQH8gNF2gZQBlAMBgAOQEiAsDyBAICKgJIaghyIANgBQEMgdEUAdIA+AIIAAB3IAABPQgbgBgagDQhQgIhSgcQjMBLjHhjIgMAEQkFBLmIhHIg9AQQifAmi7AiIgDABQj/Awk2AmIgFABQqkhFqlgqg");
	this.shape_41.setTransform(-33.7875,53.0449);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0066CC").s().p("AsfBkQkvgRkvgNIhEgDQjKgGitgBQnagCkLAiQiSAThRAeQgCh+ACh9QDxiJFaAzIAdAEII9BVIClAYIDWgFQH9gOF1gZQBmAMBfAPQEiArDzBAICKgHIahhzIANgBQENgdEUAdIA9AIIAAB4QgBAnABAnQgagBgbgCQhQgIhSgcQjLBLjHhiIgMAEQkGBImIhFIg9APQieAmi8AiIgDABQj+Axk4AmIgFABQqjhEqmgrg");
	this.shape_42.setTransform(-33.9571,53.1332);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0066CC").s().p("AsfBlIpegdIhEgDQjLgGitgDQnYAAkOAhQiSAShRAdQgEh9AFh9QDxiKFaA1IAdAEII9BUICmAYQBugDBogEQH/gPF0gYQBlAMBfAPQEjAsDyA/ICKgHIajhzIANgBQEOgdEUAeIA9AJIAAB3QgCAnACAnQgagBgagCQhQgIhSgbQjMBLjHhgIgMADQkHBFmHhDIg9APQieAki8AjIgDABQj+Ayk5AmIgFABQqkhDqngrg");
	this.shape_43.setTransform(-34.2266,53.2997);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0066CC").s().p("AseBmQkugMkxgPIhEgDQjMgHisgCQnWAAkSAfQiTAShRAbQgHh7AJh+QDxiLFbA3IAdAEII+BUIClAWQBugDBpgFQIBgSFygXQBnAMBdARQEjArDzBAICLgGIamh0IANgBQENgdEVAeIA8AKIAAB4QgEAlADAnQgYAAgZgDQhQgHhSgaQjMBLjIhdIgMADQkJA/mFhAIg9APQifAii8AkIgDABQj9Azk6AmIgFABQqlhBqpgsg");
	this.shape_44.setTransform(-34.6408,53.4825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0066CC").s().p("AscBoQkugIkygRIhFgDQjNgHisgEQnSADkYAcQiTARhRAaQgLh7ANh+QDziLFaA4IAdAFIJABTQBTALBTAKQBtgEBpgGQIFgXFvgVQBoANBcASQEkArDzBAICLgGIaphzIANgBQEOgdEWAeIA6ALIAAB4QgGAlAGAmQgYAAgWgDQhRgFhSgZQjMBKjIhaIgNAEQkMA3mCg9Ig9AQIlcBFIgDABQj7A0k+AmIgEABQqmg+qrgtg");
	this.shape_45.setTransform(-35.1846,53.748);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0066CC").s().p("AsaBqQkugDk0gTIhEgEIl6gMQnOAFkgAZQiTAPhSAYQgPh5ATh+QD0iNFaA7IAdAFIJBBUICnASQBugFBogHIN2gvQBoAMBbAUQEkArD1BBICKgFIauh0IAOgBQEOgdEXAeIA4AOIAAB4QgIAjAIAmQgWAAgVgCQhRgFhSgXQjNBLjIhXIgNAEQkPAumAg4Ig9APQigAdi8AnIgDABQj6A1lBAmIgEABQqog5qtgvg");
	this.shape_46.setTransform(-35.8559,54.0798);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0066CC").s().p("AsZBtQktACk1gVIhFgEIl8gPQnHAIkpAVQiVAOhRAVQgVh3Aah9QD1iPFaA+IAdAGIJEBSQBTAJBTAHQBugGBpgJQIPgiFogRQBqANBYAWQEmArD1BAICLgDIa0h0IANgBQEQgdEXAfIA2APIAAB5QgLAiAKAkQgUABgSgCQhRgDhSgVQjNBKjKhSIgNAEQkTAjl8gzIg9AQQigAYi9AqIgEABQj4A3lEAmIgFABQqog1qygwg");
	this.shape_47.setTransform(-36.6691,54.4746);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0066CC").s().p("AsWBxQktAJk4gZIhFgFQjVgIiogJQnBAMk0AQQiWAMhRASQgch0Ajh+QD3iSFaBEIAdAFIJGBSQBUAIBTAFQBugIBpgLQIVgpFkgOQBrANBWAZQEnArD2BAICMgBIa6h1IANgBQERgdEYAfIAzATIAAB4QgOAgAOAkQgSABgPgBQhRgBhSgTQjOBKjLhMIgNADQkYAWl4gsIg9AQQihATi+AsIgDACQj2A4lIAmIgFABQqrguq1gyg");
	this.shape_48.setTransform(-37.6772,54.9555);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0066CC").s().p("AsTB1QksARk7gbIhFgGQjZgJimgLIr6AbQiYAJhRAOQgkhxAth+QD5iUFaBIIAdAGIJJBRQBUAGBUADQBugJBpgOQIdgyFegLQBuAOBSAcQEoAqD4BAICMACIbDh1IANgCQESgdEZAgIAwAWIAAB5QgTAeATAjQgPABgMgBQhRABhTgPQjPBKjMhGIgMADQkfAGlyglIg+ARQihANi/AwIgDABQjzA7lOAmIgFABQqsgoq7g0g");
	this.shape_49.setTransform(-38.8923,55.5331);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0066CC").s().p("AsPB6QkrAck/ggIhGgHQjdgKikgOQmvAWlRADQiaAHhRAKQguhvA6h+QD8iXFaBPIAdAHIJMBPQBUAFBVAAQBtgMBqgRQIng9FXgGQBwAOBOAgQEqAqD6BAICMAEIbNh2IANgBQEUgdEbAhIArAZIAAB6QgZAcAZAhIgTABQhRAEhTgMQjQBKjOg+IgNADQkmgOlrgaIg+AQQiiAHjAAzIgDACQjxA+lUAmIgFAAQqvgerAg4g");
	this.shape_50.setTransform(-40.3346,56.2212);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0066CC").s().p("AsKCBQkrAolDgmIhGgIQjigLiigRQmjAcllgFQibADhRAFQg8hrBKh+QD/ibFaBXIAdAHIJRBOQBVACBVgCQBtgPBqgVQIzhKFOgBQBzAPBKAlQEsApD7BAICNAIIbZh3IAOgBQEVgeEdAiIAnAfIAAB6QggAYAfAgIgJACQhSAIhTgHQjRBIjPgzIgOADQkugmlkgPIg/ARQijgCjBA4IgDABQjsBCldAmIgEABQqzgUrHg7g");
	this.shape_51.setTransform(-42.1309,57.0894);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0066CC").s().p("AsFCRQkpA4lJgsIhHgKQjpgMiegVQmUAkl+gQQiegChRgCQhMhlBeh+QEDihFaBhIAdAIIJWBNQBWgBBVgHQBugSBqgaQJChbFEAFQB2AQBEAsQEvAoD+A/ICNANIbph4IAOgBQEYgdEfAiIAgAlIAAB8QgoATAoAeQgDACAFACQhSAMhTgBQjTBIjSgnIgOADQk5hFlaAAIg/ASQikgNjDA+IgDABQjnBHlnAmIgFAAQq2gGrRhAg");
	this.shape_52.setTransform(-44.3115,57.3343);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0066CC").s().p("AsFCrQkoBOlQg1QgkgFgkgHQjygOiagcQl/AvmhgeQiigIhQgMQhjheB6h+QEJioFaBvIAdAJIJeBLQBWgGBXgMQBtgWBrgiQJXhzE0APQB8ARA7A0QE0AoEBA/ICOATIb+h5IAPgCQEbgdEjAjIAXAvIAAB9Qg0ANAzAbQAFADAOAEQhSARhUAHQjVBHjVgVIgOADQlKhwlMAVQggAIgfALQimgdjFBHIgEABQjgBNl1AmIgEABQhnAChoAAQpZAApyg8g");
	this.shape_53.setTransform(-46.6801,57.3768);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0066CC").s().p("A3XD8QkKgTiOgrQlIBNn7hGQn8hFEkjBQEkjDFqCoIJzBEQDGgjDFheQPZkJBvDfQGYAwFBBWIc3h9QErggEzAoIAADGQhqgCCoAgQk2B7k7AhQmbj1lAB3QishEjOBdQjNBemaAnQrMA8sChWQi6BWjVAAQibAAiogug");
	this.shape_54.setTransform(-52.7073,60.0825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066CC").s().p("A3HD5QkGgRiRgsQhJAOhRAHQkkAal/gxQivgVhRghQiVhFCph0IACgBQA0gkA2gbQDqhuExCDIAyAFQEiAhEcAaIAfgFQCzgkC6hSQBtgcBkgXQIvh/DeBDQBOAZAeAzQFZAsEcBBQAyALAvAMQDMgPC0gLQBSgIBRgEQGogiHpgVIF7gYQEwgeErAhIAFBcIAABgQhZACB1AbIAbAGQg5AVgtAVQj2BTkHAZQiVhViNgnQh0gchuABQhwABhlAkQiYg2ihA2QgfAKgfAPIhCAeQg6AQhIAQQiqAmj1AVQiPAMiUAGQpLANpGg6IgRgBQi3BQjDAFIgdAAQiWAAihgpg");
	this.shape_55.setTransform(-51.3532,59.7913);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0066CC").s().p("A24D2QkCgRiTgtQhIAMhRAFQkpARl0grQiugThSgaQiXhBCZhsIABAAQAyglAzgfQDdhyE6B9IAyAFQEiAjEZAUIAfgGQCughC/hOQBtgbBlgVQIhh5DrBDQBOAZAgAxQFYAuEbA+QAyAKAuAKQDXgQCmgJQBTgKBPgDQGHgkIJgMQC/gKC6gMQE1gcEhAaIALBTIAABfQhSAGBsAdIAYAFQg5AVggAVQjvBQkOAWQiUhPiPglQhxgUhwABQhvABhkAhQiegyiZAxQgfAIgfAQIhAAgIiAAaQioAij1AUQiOALiVAGQpbACovgyIgQgBQi7BOi9AIIgoABQiRAAiagmg");
	this.shape_56.setTransform(-50,59.515);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0066CC").s().p("A2nDzQj+gPiWguQhIAJhPACQkwAJlqgmQisgQhSgTQiZg9CHhjIACgBQAuglAxgiQDPh4FEB3IAyAFQEjAlEWAPIAegGQCrghDEhJQBrgZBmgVQIUhwD4BDQBNAYAjAuQFVAxEbA7IBgASQDhgSCZgHQBTgMBOgDQFlgmIqgCQC/gJC3gLQE6gbEZATQAJAmAHAkIAABfQhMAJBkAfIAUAFQg6ATgSAWQjnBNkVAUQiUhJiRgjQhugOhwACQhwABhjAeQikgviRAuQgfAHgeAQQgdAPghATIh/AUQimAdj1ASQiOALiUAGQprgJoXgqIgQgBQjABMi2AKIg0ABQiLAAiSghg");
	this.shape_57.setTransform(-48.6961,59.2344);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0066CC").s().p("A2WDwQj7gPiXguQhJAGhNgBQk2ABlfggQiqgOhUgMQiag5B1hbIACgBIBahLQDBh9FOByIAyAFQEkAnESAJIAegGQCnggDIhEQBrgYBngTQIGhpEGBCQBMAYAlAsQFUA0EaA3IBgAQQDrgUCLgFQBTgOBNgCQFEgoJKAIQC/gIC2gKQE+gaEQAMQANAhAIAgIAABeQhFANBbAhIAQAFQg5ARgEAWQjhBLkbARQiUhDiTgiQhrgGhxADQhwABhiAbQirgriIApQgfAGgdAQQgdAQgfAVQg1ADhIAKQimAYj0ASQiNAJiVAHQp6gUoAgiIgQgBQjEBKiwAMQghACghAAQiEAAiJgdg");
	this.shape_58.setTransform(-47.4256,58.9507);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0066CC").s().p("A2FDtQj3gNiZgwQhJAEhMgEQk8gHlVgbIj8gQQicg1BjhTIACAAQApglAsgqQCziDFYBsIAyAFQElApEOADIAegGQCjgeDNhAQBqgWBogTQH5hhESBDQBLAXApAqQFSA2EZA0IBfANQD2gVB+gDQBTgRBMAAQEigrJqASQC/gHC0gKQFEgXEHAFQAPAcALAbIAABfQhAAQBUAjIAMAEQg5AQAJAWQjaBIkhAPQiTg+iWgfIjaAEQhwABhhAZQixgoiAAkQgfAFgdARQgcAQgdAXQgzgBhJAIQikATj1AQQiLAJiVAHQqKgfnpgaIgQAAQjJBIioAOQgoACgoAAQh+AAiAgZg");
	this.shape_59.setTransform(-46.1755,58.6744);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0066CC").s().p("A1zDqQjzgMicgxQhIABhLgGQlCgQlKgVQimgIhWACQidgyBShLIABAAQAnglApguQCmiHFhBmIAxAFQEnAqELgCIAegGQCegdDSg8QBpgUBpgRQHrhaEgBDQBKAXArAnIJpBpIBfALQEAgXBwgBQBUgTBKABQEBgtKKAbQDAgFCxgJQFJgWD+gCQASAYANAWIAABfQg5ATBLAlIAJADQg5APAWAXQjTBFkoAMQiSg4iYgdQhlAIhzAEQhwAAhgAXQi3glh3AgQggAEgcASQgbAQgcAYQgygFhJAGQiiAPj1APQiKAIiWAGQqagpnRgSIgPAAQjOBGiiAQQgvAEgvAAQh2AAh4gWg");
	this.shape_60.setTransform(-45.0038,58.4168);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0066CC").s().p("A1hDnQjvgLiegyQhIgBhKgJQlIgYlAgQQikgFhWAIQifgtBAhDIABgBQAlgkAmgxQCYiNFrBgIAxAGQEoArEHgHIAegHQCagbDXg3QBogUBqgQQHehSEsBDQBKAXAuAkQFOA7EYAtIBeAJQELgZBiACQBUgVBJABQDggvKrAlQC/gECvgIQFOgVD1gJQAWAUAPARIAABeQgzAXBDAnIAEADQg4AOAjAXQjMBCkuAKQiSgyiagcQhiAQh0AEQhwAAhfAUQi9ghhvAcQggACgcATQgaAQgaAaQgwgKhJAEQihALj1ANQiJAIiWAGQqqg0m6gKIgPAAQjSBEicATQg2AEg3AAQhuAAhvgSg");
	this.shape_61.setTransform(-43.8934,58.136);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0066CC").s().p("A1NDkQjsgKihgzQhHgEhJgMQlNggk2gLQijgChXAQQiggqAug6IABgBQAigkAkg2QCKiSF1BbIAxAFQEpAuEDgOIAegGQCWgaDbgzQBngRBtgPQHPhLE6BDQBJAWAwAiQFNA+EXAqIBeAGQEVgaBVADQBUgXBIADQC/gzLKAvQDAgCCtgIQFSgTDtgPQAYAOARANIAABeQgsAbA6AoQAAAAAAABQgBAAAAAAQABABAAAAQAAABABAAQg4AMAxAYQjGA/k1AHQiRgsicgaQhfAXh1AFQhwAAheARQjDgehnAXQggACgbATQgaARgYAcQgvgOhJABQifAHj2AMIkdANQq6g/mkgDIgOABQjXBCiUAVQhBAGhAAAQhkAAhjgPg");
	this.shape_62.setTransform(-42.8223,57.874);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0066CC").s().p("A08DhQjpgJiigzQhIgHhHgPQlTgoksgGQigABhYAWQiiglAcgyIABgBQAggkAhg5QB8iYF/BVIAxAGQEqAvD/gTIAegGQCSgZDgguQBmgRBugOQHBhCFHBCQBJAWAyAfQFLBBEXAmIBeAEQEfgcBHAGQBUgaBHAEQCeg1LqA5QDAgBCrgHQFXgSDkgWIAvASIAABdQgmAfAyAqQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQg4ALA+AYQi/A8k7AFQiQgmifgYQhcAeh2AFQhwAAhdAOQjKgaheATQggABgaATQgaARgWAeQgtgThJAAQieACj2AKIkdANQrKhKmMAFIgOABQjbBAiOAXQhJAHhJAAQhbAAhZgLg");
	this.shape_63.setTransform(-41.5882,57.5991);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0066CC").s().p("A0uDeQjkgJilg0QhHgJhGgSQlagxkhABQieADhZAdQikghALgqIABgBQAdglAfg8QBuidGIBPIAxAGQErAxD8gZIAegGQCNgYDlgpQBmgPBugNQG0g7FUBCQBIAWA1AdQFJBDEWAjIBeACQEpgeA6AIQBVgcBFAFQB8g3MLBCQDAAACpgGQFcgQDbgdIA0AIIAABdQggAjAqAsQgGABgBABQg4AJBMAZQi4A6lCACQiQghiggWQhaAlh3AHQhwgBhcAMQjPgXhWAOQggAAgaAUQgZASgVAfQgrgXhKgDQibgCj3AJQiFAFiXAHQrahVl0AOIgOABQjgA+iHAZQhUAKhSAAQhQAAhPgJg");
	this.shape_64.setTransform(-40.0627,57.3515);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0066CC").s().p("A0eDbQjggHiog2QhGgMhFgUQlgg5kWAGQidAGhaAkQilgegHghIABAAQAbgmAchAQBgiiGSBKIAxAFQEsAzD5geIAdgHIFzg7QBlgNBvgMQGng0FhBDQBHAVA4AaQFHBGEVAgIBdgBQE0gfAsAJQBVgeBEAGQBbg5MrBMQDBABCmgGQFhgODSgkQAiABAXgCIAABdQgZAmAhAuQgIABgCABQg4AIBZAZQixA3lJAAQiOgbijgUQhXAsh4AHQhwgBhbAJQjVgThOAKQgggCgaAVQgXASgUAhQgqgchJgEQiagHj3AIQiEAEiXAHQrqhgldAWIgNABQjlA8iBAcQhfALhcAAQhFAAhDgGg");
	this.shape_65.setTransform(-38.725,57.0854);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0066CC").s().p("ASNC5QiZgMj2AHQiDADiYAHQr5hrlGAeIgNACIljBXQimAVicgLQjdgGipg2QhHgPhDgXQlmhBkMALQiaAJhcArQimgagYgZQAYgmAahEQBTinGbBEIAxAGQEtA0D1gkIAdgGQCFgVDvghQBkgMBwgKQGZgsFvBCQBGAVA6AYQFGBIEUAcIBdgDQE+ghAfAMQBVggBDAHQA5g8NLBWQDBADCkgGQFmgMDJgrQAlgEAagGIAABcQgTAqAZAwIgPABQg3AHBmAZQiqA0lPgDQiOgVilgSQhUA0h5AHQhwgBhaAHQjcgQhFAFQgggCgZAVQgXASgSAjQgogghKgGg");
	this.shape_66.setTransform(-37.375,57.195);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0066CC").s().p("ASQCzQiXgQj3AFQiCADiYAIQsJh3kvAmIgMACQjuA4hzAgQinAWiZgIQjZgFisg3QhGgRhDgaQlrhKkCARQiZALhcAzQiogWgqgRIABAAQAVgmAYhHQBEitGlA+IAyAGQEtA3DygqIAcgHQCCgUDzgcQBjgKBygKQGLgkF8BCQBFAUA9AWQFEBLEUAZIBcgFQFJgjARAOQBVgjBCAIQAYg+NrBgQDBAECigFQFrgLDAgyQAogIAcgLIAABcQgNAuARAxIgTABQg3AFB0AaQijAxlWgFQiNgPingRQhSA7h5AIQhxgBhYAEQjigMg+ABQgggEgYAVQgWATgRAlQgmgkhKgJg");
	this.shape_67.setTransform(-36.075,57.5647);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0066CC").s().p("ASSCuQiVgUj3AEQiBABiYAIQsZiBkYAuIgMACQjyA2htAiQimAYiYgFQjWgEitg4QhHgUhBgcQlxhSj3AWQiXAOhdA5QiqgSg7gIQATgmAVhMQA3iyGuA5IAxAGQEvA4DugvIAdgHQB9gSD4gYQBigJBzgIQF+gdGIBCICFAnQFCBOETAVIBcgIQFTgkADAQQBWglBAAJQgJhAOLBpQDBAGCggFQFwgJC3g5QArgMAegQIAABbQgGAyAIAzIgWABQg3AECBAaQicAulcgIQiNgJipgPQhPBDh6AIQhxgBhXABQjpgJg0gDQghgFgYAWQgVATgPAnQglgphKgLg");
	this.shape_68.setTransform(-34.725,57.9074);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0066CC").s().p("ASVCqQjgglnDAXQspiMkAA2QkAA2hpAlQnvBLlVilQpliTjyClQisgOhNAAQARgmAShPQArjCHoBDQFDA+DzhAQCngXGkgcQFxgVGVBCQGOBxFLAWQG7gygMAUQBWgnA/AKQgqhDOrBzQMDAbDNiFIAADGQhqgDCoAgQjRA8pfgrQhLBJh8AJQmlgFg9gLQg8gLgeBYQgjguhKgMg");
	this.shape_69.setTransform(-33.4375,58.2181);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0066CC").s().p("ASSCxQgogDgvgGQi3gWlGANIhNACQssiGj7AzIgJACQjPArhrAhIglALQnfBIlOiZIgVgKQpgiRjzCiIgCACQirgOhNAAIgBAAQARgmAShPIABgCQAti/HkBCIAOADQEvA2D6g7IAJgBQCpgXGYgbIAVgBQFmgSGJBAIAlAKQF4BnE6AUIAlgEQGBgsAKANQAggOAfgIQAugLAnAGQgFgbCoAHQDkAGH1A+IBNADQKeAHDohwIAIBDIAAB8QhGACA9ATIALADQARAFAdAFQhJATh3AFQjoARmDgcQg+AzhWAPQgZAGgbAEQhrAEhTAAQjKgDhBgFIgYgDQg1gJghA8IgHARQgkgihHgKg");
	this.shape_70.setTransform(-34.05,57.6012);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0066CC").s().p("ASRC6QgpgBgvgIQisgYlPANIhOABQsviBj1AxIgIABQjQAqhqAhIgmALQndBHlOiaIgVgJQpeiQjyCiIgDABQiqgOhNAAIgBAAQARgmAShOIABgCQAsi/HiBBIAQADQEjAzEFg3IAJgBQCpgXGWgbIAXgBQFlgSGIA/IAlAJQF4BoE4ATIAlgDQFtgsAfAHQAhgNAegIQAvgKAmAFQAJgXCZAHQDqADHqA+IBNAEQJ9gGENhgIAOA8IAAB8Qg+AGA2AVIAIADIAkAJQhLAPh0ACQjvASl6gaQg/AshXANQgYAHgbAEQhpALhTACQjMgDg9gEIgagCQgzgJgmA0IgHAQQgkgYhDgFg");
	this.shape_71.setTransform(-34.7,56.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0066CC").s().p("ASODBQgpACgtgJQiigblaANIhNAAQsyh7jvAuIgIACQjPAohqAiIgmAKQncBGlOibIgVgIQpdiQjxCiIgDABQipgOhNAAIgCAAQARgmAShOIABgCQAsi/HhBBIAPADQEaAwEQg0IAJgBQCngXGXgbIAWgBQFkgTGHA/IAlAJQF4BoE3ASIAkgDQFZgrA1ABQAhgMAegIQAvgIAnAEQAVgUCJAIQDzAAHeA9IBMAFQJdgREwhRIAWA1IAAB7Qg2AKAwAYIAFACQAJAEAQAEQhMANhzgCQj1AUlxgaQhBAmhWAKQgZAIgZAGQhoARhTADQjOgDg7gCIgagDQgygIgpArIgHARQgmgNhAgDg");
	this.shape_72.setTransform(-35.325,56.3535);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0066CC").s().p("A6/BiIgVgIQpbiOjxChIgDABQiogOhOAAIgCAAQARgmAShOIABgCQAsi/HgBBIAPADQEPAsEbgwIAJgBQCmgXGXgbIAWgBQFkgTGFA+IAmAJQF3BoE2ARIAkgCQFEgrBLgFQAggLAfgHQAvgIAnAEQAigQB6AHQD6gCHTA9IBMAGQI7geFWhCIAdAvIAAB7QgvAOApAZIADACQADADAKAEQhMAKhxgGQj8AWlogZQhDAghWAHQgYAKgZAGQhmAXhTAFIkIgEIgbgCQgxgHgtAiIgIAQQglgCg+ABQgoAEgtgLQiXgdllAOIhMgBQs0h2jqArIgIACQjPAmhqAjIgmAJQiTAWiFAAQkqAAjmhsg");
	this.shape_73.setTransform(-35.95,56.0505);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0066CC").s().p("A67BhIgWgHQpaiOjwChIgDABQingNhNgBIgDAAQARglARhOIACgDQAsi+HeBAIAPACQEEAqEngtIAJgBQCmgXGVgbIAWgBQFjgTGGA+IAlAIQF3BpE0AQIAlgCQEvgqBggLQAhgLAegHQAwgGAmAEQAxgOBqAIQEAgFHIA8IBNAHQIZgqF5gyIAlAnIAAB7QgnASAjAcIABABQgCADADADQhOAIhugKQkEAXlegYQhFAahWAFQgXAKgYAIQhlAdhSAHIkJgDQgNAAgOgCQgvgGgxAZIgIAQQgnAJg5AEQgpAHgtgNQiLgglwAOIhLgCQs4hwjkAoIgIACQjOAlhqAjIgmAJQiQAViDAAQksAAjnhtg");
	this.shape_74.setTransform(-36.5,56.0579);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0066CC").s().p("A69BgIgVgHQpaiNjwChIgDABQimgNhNgBIgDAAQAQglAShOIACgDQAri+HdBAIAPACQD7AmExgpIAJgBQClgXGVgbIAWgBQFigTGFA9IAlAIQF3BpEyAPIAlgBIGRg7QAggKAggHQAugEAmADQA+gKBcAIQEHgIG9A7IBMAIQH4g2GegiIAsAgIAAB7QgfAWAbAdIgBABIgJAEQhQAGhsgNQkKAZlVgYQhIAUhUACQgYALgXAJQhkAjhRAJQjWgCgzAAQgNABgPgCQgugGg0ARIgIAPQgoAUg2AHQgqAKgrgOQiBgjl6AOIhKgDQs7hqjgAlIgHACQjNAkhpAjIgoAJQiNAUiBAAQkuAAjnhug");
	this.shape_75.setTransform(-36.5,56.0536);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0066CC").s().p("AQjDGQh2gkmFAOIhKgEQs9hmjaAkIgHABQjNAjhpAjIgoAIQnXBClKidIgWgGQpXiNjwCiIgDAAQimgNhNgBIgDAAQAQglAShOIACgCQAqi/HdA/IAPADQDvAjE9gmIAJgBQCkgXGVgbIAVgBQFigTGEA9IAlAHQF3BpExAOIAlAAIGShBQAggJAfgGQAvgEAmADQBLgHBNAIQEOgKGxA7IBMAJQHYhDHCgTIAzAZIAAB7QgXAaAUAgIgDABIgVACQhRADhpgQQkSAalLgWQhKANhUgBQgXANgXAJQhjAqhRAKQjXgCgwACQgOABgPgCQgtgFg4AIIgJAPQgoAegzALQgSAFgSAAQgYAAgYgJg");
	this.shape_76.setTransform(-36.5,56.1924);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0066CC").s().p("AQbDIQhrgomQAPIhJgGQtAhfjVAgIgHACQjMAhhpAkIgnAHQnXBClJieIgWgGQpWiMjvChIgDABQimgOhMAAIgEAAQARgmARhNIABgDQAri+HbA/IAQACQDlAgFHgiIAJgBQCjgXGVgbIAVgBQFigUGCA8IAlAHQF4BqEvANIAkAAQDzgpChgdQAfgIAggHQAugCAmACQBZgDA+AIQEWgNGlA7IBMAJQG2hOHngEIA6ATIAAB7QgPAdANAiIgGAAQgQACgPAAQhSAAhpgUQkWAclDgWQhNAIhTgEQgXANgWALQhiAwhQALQjagBgtADQgNABgRgCQgrgEg8gBIgIAPQgqApgwAOQgTAHgTAAQgXAAgWgJg");
	this.shape_77.setTransform(-36.5,56.3462);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0066CC").s().p("AQTDIQhhgpmZAOIhKgGQtChbjPAfIgGABQjNAghoAkIgpAHQnVBAlJieIgWgGQpUiLjuCiIgDAAQilgOhNAAIgEAAQARgmARhNIABgCQAri/HaA+IAPADQDaAdFTgfIAJgBQCjgXGTgbIAWgBQFggUGDA8IAkAGQF4BqEtAMIAkABQDggpC1gjIBAgNQAugBAmABQBnABAtAIQEegQGZA6IBNALQGUhbIMAMIBBALIAAB7QgIAhAHAkIgJABQgUABgXgBQhSgDhmgXQkeAdk5gUQhPABhTgHQgWAPgVALQhhA2hQAOQjcgBgqAEQgOABgRgCQgqgEhAgJIgJAOQgqA0gtASQgTAJgUAAQgVAAgWgLg");
	this.shape_78.setTransform(-36.5,56.5123);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0066CC").s().p("AQLDKQhVgtmlAPQuThfjLAfQjMAfhoAlQnvBMlVimQpliSjyCkQisgOhNAAQARgmAShPQArjBHoBDQDSAaFkgcQCngYGkgbQFxgVGVBCQGNBwE6AGIHWheQC+ADApALQFAgUG+BGQGLhtJhAmIAADGIgLAAQhoADiGgkQlzAnmFgqQh4BVhhASQjfAAgoAFQgoAFhjgbQhFBshBAAQgVAAgUgKg");
	this.shape_79.setTransform(-36.5125,56.6731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-383,29.8,817.8,62.10000000000001);


(lib.angryseagullhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ABxgiQAAAugiAhQghAhguAAQguAAghghQghghAAguQAAguAhAEQAhAEAuAPQAuAQAhgUQAigTAAAug");
	this.shape.setTransform(52.95,-43.8158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6633").s().p("AiZAoIgBAAIiRhSICRhLIAGAAQFLgtBtEaIAJAEQlWiRhwA9g");
	this.shape_1.setTransform(94.2,-31.7273);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AhPAtQggghgBguQABguAgAEQAhAEAuAPQAuAQAigUQAggTAAAuQAAAuggAhQgiAhguAAQguAAghghg");
	this.shape_2.setTransform(52.95,-43.8158);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmLEnIAAgcQAJgOAbg+QAbg+AfgiQARgJACgQIACgGQgQgyADgcQADgdARhAQAQg/BCgyQBCgyA2gMQA3gMB6ABQB+AABaBCQAZASARAUQAUAXAMAaIgFABIiSBKICSBSIABAAQgLAUgRAUQgRATgZATIgUANQhTA1jIAyIgZAGQAVAmAKAogAAViyQAAAvAhAhQAhAhAuAAQAvAAAhghQAhghAAgvQAAgughATQghAUgvgPQgugQghgEIgFAAQgcAAAAAqg");
	this.shape_3.setTransform(39.625,-29.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angryseagullhead, new cjs.Rectangle(0,-58.9,124.3,58.9), null);


(lib.poop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {splat:1,splatTwo:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnCSQgXgeAAg2QAAg1AfhrQAghtAOA9QAPA8AQAwQARAvAAA1QAAA2gIATQgHAUghALQgIADgHAAQgWAAgRgXg");
	this.shape.setTransform(-0.95,-15.4985);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABHAgIgDgCIgDgDIgCgEQAAgEAEgBIABAAQAIAAAFAEIABADIAAAEIgDADIgGABgAjAAZQgGAAgDgCQgGgDABgEQABgGAIgBQAIgBAPAAIAMAAQAHAAABAEQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgJABQABADgEACIgGABgAC+AOQgHgFgEgBQgNABgEgDIgHgGQAAgDADgCIAGgBQAGAAADABIADADIAFABIAFAAQANAAAFADQADAEAAADQABADgEADIgFAAIgJgBgAg9APQg5gKgVgIQgrgUAzgFQA0gGAJADQAKADAYAMQAYAMAPgLQAPgKAuAIQAuAJAdAOQAdAOiPgYQABATgMAAIhLAAg");
	this.shape_1.setTransform(2.5279,2.2721);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBqQgHgBgCgKQgCgKABgFQABgFAGgDQAGgCAGACQAHACADAEQAEAFgBAGQgBAFgHAGQgGAGgGAAIgCAAgAgeBdQgTgFAKgBQAKgCgMgzQgMgyAWgkQAWglAZgNQAbgOgkBAQgiA9AdAQQAeARgWAcQgSAYgQAAIgGgBg");
	this.shape_2.setTransform(0.6846,1.6949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-32.3,41.5,44.599999999999994);


(lib.crab_legs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// leg_animation
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C02B1E").s().p("ATAK6IhpijQiag3gsiBQi1hGhqhZIBFhiQClBEBJCNQC3AkBXByIAIAZQAqC2gbArgAy6HeIAJgZQBWhyC3gkQBJiNClhEIBGBiQhqBZi2BGQgsCBiaA3IhpCjIgKAFQgcgrAri2gAa+GTIhfiuQjUAmiKhaQj3A4jshwIBAhaQDLgBDdBMQCYgxDTBEIA0AXQA+B3gWCIgA7MGTQgWiIA+h3IA0gXQDThECXAxQDfhMDKABIBBBaQjtBwj3g4QiKBajUgmIhfCugEAg6ACyIiHmfQjXBcjcgRQjPB5kJADIgbiTQDihREKAhQCfiBEZgJIBKAAIARgDIAAADIALAjQBYD8gmELgEggWgFQIAKgjIABgDIAQADIBLAAQEYAJCgCBQEKghDiBRIgbCTQkJgDjPh5QjbARjYhcIiHGfIgPAFQgmkLBYj8gEAjagI7QkwBZkcgKQkWB2kvAtIgdidQEkhWEqgKQEThgEXgYICpAaQBKEwgiDTIgOA8gEgl0gChQgijTBKkwICpgaQEXAYETBgQEpAKElBWIgeCdQkugtkWh2QkcAKkxhZIiLHWg");
	this.shape.setTransform(243.15,-70.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C13515").s().p("AxkHeIACgaQA9iBCrhKQAqiZCShlIBZBQQhVBtiiBsQgQCHiLBXIhEC0IgJAIQgjgkADi8gARsKbIhPixQiOhPgYiFQiphjhahoIBThVQCZBcAyCXQCvBABEB+IAEAaQAOC7giAlgAZyG1Ig9i8QjXgBh4hxQj9AKjUiZIBPhMQDHAkDNByQCfgVDCBpIAvAgQAoCBgvCBgA6DCxIAwgeQDEhlCeAYQDPhuDJgfIBOBNQjYCUj9gPQh5BvjYgEIhBC7IgPADQgsiDAqiAgAfzETIg0mxQjlAwjUg7QjjBOkEgwIACiWQDugjD9BUQC2hgEVAuIBJAOIARAAIAAAEIADAkQAmEHhaEAgEggkgEJIAEglIgBgDIASAAIBJgNQEVgpC0BjQEAhPDtAnIAACWQkGAsjhhTQjVA4jlg0Ig6GwIgPAIQhVkBArkHgEAjogHBQk8AekVhAQkoA/kxgMIAAihQEwgcEnAvQEfgrEWAeICiA5QAPE5hKDJIgZA2gEglOgCOQg3jOAsk2ICmgrQEXgDEbBEQEpgUEsA5IgOCfQkxgPkhhaQkaAmk3g6IhdHhg");
	this.shape_1.setTransform(242.5993,-60.1336);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-140.5,486.3,150.6);


(lib.crab_claw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C12B1E").s().p("ABZQmQhFADhihSQhRhLAAh1IgOgIQh8hIgBjHQgFizBbi0IgDgCQh2hWhKiKQgPgcgNgfQgjhRgWhhQgelADFmcIAGBTQAmJKCCDvIACAEIAUAiIAKgmIABgDIAEgPQClp8jCkjQAjANAfARQD7CJAvGcQAACigeCFIgSBGQgwCfhjBvIgjAlQDADyhhDLQBIAAA7giQBMgXBVAoQCdEJgxB3QgoBgivAAQhOAAhogSgABGKIIgHALQAMAGgFgRQAJgPAHgQQgPAAgPgBQAKAVAEALg");
	this.shape.setTransform(152.8495,-107.3568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C12B1E").s().p("AA4QkQhFAAhchVQhMhOACh0QgGgFgIgDQh5hLgGjIQgJi0BfixIgDgCQhzhag6iYQgNgegKggQgdhTgIhsQAFlBDxmFIgDBUQgaJKBnD9IATAnIANglIABgDIAFgPQDFpziyktQAiAPAeATQDzCWAaGeQgICigjCMIgYBEQg9CbhsBgQgRATgSALQDFDyhjDOQBKAEBAgeQBNgSBTAtQCQERg1B1QgoBXiYAAQhWAAh6gcgAA2J7IgIANQANAHgFgUIANgZIgYgCQAIARADAKg");
	this.shape_1.setTransform(155.4629,-108.5717);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C12B1E").s().p("AAXQfQhEgDhWhYQhGhPAEh0QgDgGgLgDQh3hNgLjKQgLi0BhiuIgCgCQhwhegoilQgLgfgIghQgVhVAHh1QAok/EZloIgMBTQhZJEBKEHIAQApIAQgkIABgEIAGgPQDmpnijk2QAhAQAcAVQDsCiAFGfQgRChgqCUQgNAkgQAfQhJCUhzBQQgTASgQAGQDIDyhkDQQBNAJBEgaQBOgLBSAxQCDEXg7ByQgoBPiFAAQhdAAiJgmgAAnJtIgJAOQAOAIgFgWIAKgVIgSgCQAGAOACAJg");
	this.shape_2.setTransform(158.0512,-109.5157);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C12B1E").s().p("AgEQXQhFgHhPhaQhBhRAHhzQgCgIgMgBQh0hQgRjMQgOi1BlipIgDgCQhrhigXixQgIgggFghQgOhXAXh8QBLk4E/lHIgWBQQiXI3AtEOIABAEQAEAUAIASIASgiIACgEIAHgPQEEpbiUk9QAhASAcAVQDjCvgQGeQgaChgxCbQgRAigSAeQhUCOh7BAQgSARgPAAQDLDyhkDSQBOAMBIgUQBQgGBPA3QB3EdhABvQgqBHh1AAQhhAAiUgxgAAcJbIgJARQAPAIgGgZIAIgPIgNgDIAFASg");
	this.shape_3.setTransform(160.3109,-110.1872);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C12B1E").s().p("AgeQMQhEgKhJhcQg8hTAKhyQAAgJgOAAQhxhTgWjNQgQi2BnimIgDgCQhnhkgDi8QgGgggCghQgIhYAqiBQBqkpFUkdIAEAOIAKgZIgOALIgMgiQAfATAbAYQDaC5gmGeQghCeg7CjIgnA8QhhCHh/AvQgTAQgNgGQDPDxhkDVQBPARBMgPQBRABBNA7QBpEihGBsQgpBAhnAAQhlAAifg9gAAVJHIgLAUQAQAIgFgcIAFgKIgIgCIADAMgABAvjQjTIjAPESIABADQACAVAGATIAWghIABgEIAIgPQEPoihfk/g");
	this.shape_4.setTransform(162.4016,-110.587);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C12B1E").s().p("Ag2P+QhEgNhBheQg3hUAMhwQACgLgQABQhuhWgajPQgTi3BpihIgDgCQhihmARjFQgEggABgiQgBhXA9iEQCDkMFPjqQAFAbADAcQkEH7gPENIABADQAAAVAFAUIAYgfIACgFIAJgOQEEnQgakyIAJgTIAfg6QDDDFg6GQQgpCdhGCoQgVAegXAbQhrB+iDAeQgTAQgKgLQDSDwhlDWQBPAVBRgIQBRAGBLBAQBbEnhKBoQgpA6hcAAQhnAAiohKgAAPIvIgNAZQAUAJgHgiIACgDIgDgBIABAEgAB9xHQAfAWAZAYIAFAFIgpAcQgHgpgNgmgADBwOIgHgGIAPgKIgIAQIAAAAgAC6wUIAAAAg");
	this.shape_5.setTransform(164.4006,-110.7378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C12B1E").s().p("Ag1P7QhEgNhCheQg3hUAMhwQADgLgRABQhuhWgajPQgTi3BpihIgCgCQhihmAPjGQgDggABghQAAhYA2h/QCCkbFlj7QgFgXgHgVQAeAWAZAZQDMDKhGGZQgtCbhICgIgsA5QhrB+iDAdQgUAQgKgLQDSDwhlDWQBPAVBSgIQBRAGBKBAQBcEnhLBoQgpA5hbAAQhoAAinhJgAAPIsIgMAZQATAJgHgiIACgDIgCgBIAAAEgACgwXIAEAVIgSAmQkDIOgIESIAAAEQABAUAEAUIAYgfIADgEIAIgOQEvn/g6lCIATglIgXAQg");
	this.shape_6.setTransform(164.3762,-110.4128);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C12B1E").s().p("Ag1P3QhEgMhCheQg3hVAMhwQADgLgRABQhuhVgajPQgTi3BpihIgCgCQhihnAPjFQgDggAAgiQAAhYAwh5QCAkoFykJIgjBLQj4IUgCESIAAADQABAVAEAUIAYgfIACgEIAJgOQFeorhilRQAeAXAYAaQDGDPhQGXQgwCahLCWQgVAegXAbQhrB+iDAdQgUAPgKgLQDSDwhlDWQBPAVBSgIQBRAGBKBAQBcEnhLBoQgpA6hbAAQhoAAinhKgAAPIpIgMAYQATAKgHgiIACgEIgCAAIAAAEg");
	this.shape_7.setTransform(164.3762,-110.0628);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C12B1E").s().p("Ag1PzQhEgMhCheQg3hVAMhwQADgLgRABQhuhVgajPQgTi3BpihIgDgCQhihnAQjGQgDggAAgiQAAhYAphzQB6kqFtkRIgiBMQjtIZAEERIAAAEQABAUAEAUIAYgfIACgEIAKgNQFrojhZlSQAcAXAYAaQDBDVhaGUQg1CZhLCNIgtA5QhsB+iDAcQgTAPgKgKQDSDwhlDWQBQAUBRgIQBRAGBKBAQBcEnhLBoQgpA6hbAAQhoAAinhKgAAPImIgMAXQATAKgHghIACgEIgDgBIABAFg");
	this.shape_8.setTransform(164.3762,-109.6878);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C12B1E").s().p("Ag4P0QhEgMhCheQg3hVAMhwQADgLgRABQhuhVgajPQgTi3BpihIgDgCQhihnAPjGQgDggABgiQAAhYAihuQB0ksFnkZIggBNQjiIdAKERIAAAEIAFAoIAYgfIACgDIAKgNQF5oahRlUQAcAYAYAbQC7DZhkGSQg5CXhNCEIgtA5QhsB+iDAbQgTAPgKgLQDTDwhmDWQBPAVBRgIQBRAGBLBAQBcEnhLBoQgpA6hbAAQhoAAinhKgAAMImIgMAYQATAJgHghIACgEIgDAAIABAEg");
	this.shape_9.setTransform(164.6644,-109.7628);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C12B1E").s().p("Ag+P2QhEgMhCheQg3hVAMhwQACgLgQABQhuhVgajPQgTi3BpihIgDgCQhihnAPjHQgDggABgiQAAhXAbhpQBukvFhkfIgeBNQjWIiAOEQIAGAsIAYgfIACgDIAKgNQGGoPhHlXQAbAZAXAcQC1DdhuGQQg8CWhPB5QgXAfgWAaQhsB+iDAbQgTAPgKgKQDRDwhkDWQBPAUBRgIQBRAGBLBAQBcEnhLBoQgpA6hbAAQhoAAinhKgAAGIpIgLAXQARAKgGghIACgEIgDgBIABAFg");
	this.shape_10.setTransform(165.2728,-109.9878);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C12B1E").s().p("AATQFQhEgFhMhWQhAhOAAhxQABgLgQACQh3hJgujMQgmi1BZirIgDgCQhshdgEjJQgGgggCghQgIhYAYhwQBYk1FOk4IgZBPQixIwAhEPIABAEQADAUAGATIAVghIACgDIAIgOQFQo0hplOQAdAXAaAZQDKDKhGGZQgtCbhDCEIgnA9QhhCHh8AlQgSARgLgJQDpDahPDeQBRAMBOgSQBRgDBSA3QB8Ebg/BwQgpBKh6AAQhgAAiRgtgAAmI1IgKAYQATAHgJgfIACgGIgEAAIACAGg");
	this.shape_11.setTransform(158.1223,-107.8301);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C12B1E").s().p("ABeQMQhGADhVhOQhJhHgMhwQAAgKgPAEQh/g9hCjHQg3iwBHizIgDgCQh0hSgZjLQgJgegFgiQgPhWATh4QBDk7E3lOIgTBRQiLI7A0EMIACADQAEAVAIASIASgjIABgDIAIgPQEWpSiJlCQAfATAbAWQDeC2gdGdQgdCfg2COQgRAigRAdQhUCPh2AwQgQATgMgIQD9DBg4DlQBRADBMgbQBQgNBWAtQCbELgxB3QgoBfirAAQhPAAhsgVgAA9I/IgHAYQAUAFgNgdIACgHIgFAAIADAHg");
	this.shape_12.setTransform(152.2167,-105.092);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C12B1E").s().p("ACnQHQhEAKhfhDQhPg+gZhvQgCgKgOAFQiEguhWjAQhIirA1i5IgEgCQh7hGgtjKQgLgegJghQgXhUAOiAQAtk+EfljIgOBSQhiJDBGEIIABAEQAHATAKASIAOglIABgDIAGgPQDbpsiqkyQAiAPAeAVQDtCdANGfQgOCignCVIgdBCQhFCWhwA5QgOAUgMgGQENCnggDoQBRgGBHgjQBOgWBbAjQC3D4gjB7QgkB7j4AAQgwAAg4gFgABQI7IAFAIIgEAYQATADgPgbIABgJIgGABg");
	this.shape_13.setTransform(146.7387,-101.3491);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C12B1E").s().p("ABHPJQhWg1gkhrQgEgJgNAGQiIgghqi4QhZijAii+IgCgBQiDg5hBjIQgNgdgMgfQgehTAGiHQAYlBEGl1IgIBTQg7JIBYEDIACADQAHATANARIALglIAAgEIAFgQQCcp+jIkgQAkAMAfARQD9CGA1GbQACCigYCcIgWBFQg4CbhnBCQgMAVgOgGQEdCLgIDrQBPgQBCgrQBKgfBfAZQDSDigWB/QgaCUlaAMQgQAEgSAAQg5AAhOgrgABnIxIAHAJIgCAXQASABgQgYIAAgKIgHABg");
	this.shape_14.setTransform(141.6998,-95.9575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C12B1E").s().p("ABkPHQhcgwgohqQgFgIgMAGQiKgZhvi3QheihAdjAIgEgBQiEg2hGjEQgPgdgMgfQghhSgFh7QAClBDtmGIgDBTQgTJKBpD8IACAEQAIASANARIAJgmIABgDIAEgQQCdp+jHkgQAjANAgAQQD8CGA1GbQACCigaCRQgJAlgLAhQgyCehnBEQgMAWgNgFQEfCDAADpQBNgVA8gwQBHgkBfASQDhDTgOCAQgQCWlZAiQgUAHgYAAQg2AAhLgigABtIwIALAMIgCAVQASABgQgWIAAgOIgLACg");
	this.shape_15.setTransform(139.8133,-92.9865);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C12B1E").s().p("ACDPDQhggqguhoQgGgGgLAEQiMgSh0i1QhkifAYjCIgDgBQiGgyhMjCQgPgcgOgfQgjhRgQhuQgTlBDTmVIADBUQATJKB5D0IACAEQAKASAMAQIAJgmIAAgDIAFgQQCdp9jGkhQAjAMAgARQD9CHAzGbQACCigcCHQgIAlgKAhQguCfhlBIQgLAXgOgGQEiB6AIDoQBKgZA2g0QBEgqBfALQDuDFgGCAQgGCXlVA4QgZALggAAQgzAAhFgbgAB2IvIAOAOIgBATQARAAgQgTIAAgSIgOAEg");
	this.shape_16.setTransform(137.9737,-89.9411);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C12B1E").s().p("ACjO/Qhkgkg0hmQgHgFgJAEQiNgLh6izQhpieASjDIgDgBQiHguhRjAQgRgbgOgeQgmhPgZhhQgok/C3miIAIBSQA6JJCKDqIACAEIAXAgIAHglIABgDIAEgPQCfp+jGkhQAjANAfARQD9CGAzGcQACCigfB8IgPBHQgqCghjBMQgKAWgOgEQEkBxAODnIgQAGIARAQIAAAQQAQAAgQgQIgBgWQBIgeAwg4QA/gwBgAFQD6C1ADCAQAECYlSBNQgdAPgoAAQgvAAg/gTg");
	this.shape_17.setTransform(136.1612,-86.9274);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C12B1E").s().p("ADFO5Qhngdg6hkQgHgCgJACQiNgDiAiyQhuicAMjEIgDgBQiIgqhWi9QgRgbgQgeQgohNghhTQg+k8CbmtIAOBSQBgJDCZDgIADAEIAXAfIAHglIAAgCIAFgQQCgp9jGkhQAiANAgAQQD9CHAyGcQABChghBzIgNBHQglChhhBQQgKAWgOgEQEmBpAWDkQBEgiApg6QA7g1BfgCQEFCkAMCAQANCXlLBjQghATg0AAQgqAAg2gMgACMIwQAOAKAIAHIAAAPQAPgBgPgOIgCgaIgUAJg");
	this.shape_18.setTransform(134.3159,-83.8528);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C12B1E").s().p("ADpOyQhqgWg+hjQgIAAgJABQiOAEiGivQhziZAHjGIgDAAQiJgnhbi5QgSgbgQgdQgrhMgohFQhTk3B/m2IATBRQCHI7CnDVQABAEACAAIAYAeIAFglIABgCIAEgQQCgp8jFkiQAjAMAfASQD9CHAyGbQABCiglBoIgLBHQgfCjhgBTQgJAXgNgEQEmBgAdDhQBAglAkg9QA2g5BegJQEQCTAUB/QAWCWlEB4QgmAahEAAQgiAAgqgHgACbIvQgBAJAPAKIALAHIABAGQAHAAgIgGQAAgTgDgTIgWAMg");
	this.shape_19.setTransform(132.4448,-80.7722);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C12B1E").s().p("ACpPIQhngigzhoQgIgCgIABQiOgMhti7QheikAYjFIgDgBQiHgxhViwQgSgcgPgcQgphOglhLQhIk5COmyIAQBRQBzJACgDbIACAEIAYAgIAGgnIABgCIAEgPQCip9jEkiQAiANAgARQD8CIAxGbQABCigkBuIgMBHQgjCiheBYQgLAXgOAAQEaCCADDjQBEgeAog5QA8g0BfACQD9CwAGCAQAHCXlPBVQgeAQgtAAQguAAg/gRgACGJAQgBAIAOAMIALAIIgBAGQAIABgHgHQABgTAAgTIgZAKg");
	this.shape_20.setTransform(135.6709,-87.0183);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C12B1E").s().p("ABpPXQhjgtgnhuIgQgDQiMgbhSjDQhJisAqjEIgDgBQiFg7hPinQgRgagPgeQgohPghhQQg+k8CdmtIAOBSQBfJDCYDhIADAEIAWAgIAHgmIABgCIAFgQQCjp8jDkiQAiANAgAQQD6CJAxGcQABCigiBzIgOBHQgoChhdBdQgMAXgPAEQEJCigXDiQBGgXAug0QBBgtBeALQDpDLgICAQgJCXlXAwQgXAJgeAAQg2AAhMgegAByJOQAPAPAHAJIgDANQAOACgLgPIAEgfIgaAHg");
	this.shape_21.setTransform(139.4208,-92.9484);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C12B1E").s().p("AApPgQhdg3gahyIgQgFQiIgrg3jIQgyiwA7jBIgEgBQiBhFhLicIgfg6QgmhQgehWQgyk+CrmnIALBTQBLJGCRDmIACAEIAWAhIAIgnIABgCIAEgQQClp8jCkiQAiANAgARQD6CIAvGdQABCighB5IgPBGQgrChheBiQgOAWgPAJQDzC/gwDeQBHgPAzgvQBGgmBbAVQDSDjgWB+QgaCVlaALQgPAEgSAAQg8AAhXgtgABeJbQAOARAFAKIgEANQAOADgKgQIAJgfIgcAEg");
	this.shape_22.setTransform(143.5832,-98.5146);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C12B1E").s().p("ACaQeQhFALhphHQhYhCgOh0IgPgGQiCg6gcjKQgbizBMi7QgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQh7hOhKiTQgRgdgNgeQgkhQgahcQgnk/C5miIAIBTQA3JJCJDrIACAEIAVAhIAJgmIABgDIAFgPQClp7jBkkQAjANAfARQD7CKAuGcQAACiggB+QgHAmgKAhQgtCfhgBpQgQAVgQANQDaDahJDWQBIgHA3gpQBJgfBZAfQC4D4gjB7QgkB7j8AAQguAAg1gEgABKJmQAMATAEAKIgFAMQANAGgIgSIANgfIgdACg");
	this.shape_23.setTransform(148.1572,-103.5709);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C12B1E").s().p("ABWQlQhFAEhihTQhQhLAAh1QgIgDgGgFQh8hIAAjIQgFizBcizIgDgCQh2hWhJiLQgPgdgNgfQgjhRgVhhQgdlADImbIAFBTQAjJKCBDwIACAEIAUAiIAKgmIABgDIAEgPQCop7jAkkQAiANAgARQD5CLAtGcQAACigeCEIgTBGQgxCfhjBuIgjAlQC/DzhhDLQBHABA8gjQBMgXBUAoQCcEKgwB3QgoBgiuAAQhOAAhqgUgABEKIIgGAKQALAHgFgRQAJgPAIgQQgPAAgQgCQALAWADALg");
	this.shape_24.setTransform(153.088,-107.445);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.7,-220.3,143.89999999999998,234.8);


(lib.cloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.718)").s().p("APeHqQhOgegehNQgXA8g/gMQgwgJgXgrQglAhg/gGQgpAAgogNQgFBAhDASQhMAUhKgbQhNgdgehNQgXA7g/gMQg0gJgXgyQhgAEgNhjQgHg8AggzQAKgRASgIQAZhLBFARQAbAIATASQBAhSBigCQAKgDAKAGIAIAIQALhyBqgaQAggIAeANQBoAtA0BlQAOhEBAgCQAYAGALAWQAMAZAHAbQAzg9AzA2IAGAIQAegLAjgBQAJgDAKAGIAJAIQALhxBpgbQAggIAfANQBoAuAzBlQAPhFBAgCQAYAGAKAVQAMAaAIAcQAzg9AzA2QAIAKAEANQAEASACASQAOAEAHALQARAZABAfQAcBZg0BKQgXAigngJQgMgEgLgFQgYAOgbgFQgUgDgTgJQgjBQhggIQgpgBgogMQgEA/hDASQghAJghAAQgqAAgqgPgAzjBQQhOgdgehMQgXA6g/gMQg0gJgWgxQhaADgShTIAAhJQAGgcAQgZQALgRARgIQAbhLBFARQAbAIASASQBBhSBigCQAJgEAKAHIAJAIQAJhhBOgiIBnAAQBfAuAxBgQAPhFBAgCQAYAGAKAWQAMAaAIAbQAzg+AzA3QAIAKAEAOQAEARACATQAOAEAHAKQARAZABAgQAcBZg0BJQgXAigngJQgMgDgLgFQgYAOgbgFQgUgEgTgIQgjBOhggIQgpAAgogNQgEBAhDASQghAJghAAQgqAAgqgQgA5dgpQgEgeAGgcIAABJIgCgPg");
	this.shape.setTransform(-47.5281,-18.2826);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud2, new cjs.Rectangle(-210.7,-68.8,326.4,101.1), null);


(lib.cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AK0A7QAuBDhnBFQhoBEh0g1QgyBMizgOQhVAwhTAAQkOAAhNhHQhYBsh4h3QjVAeA5jIQA5jIDAheQBogzCABOQBrh4B7AAQCmAAAoCbQCAglAnBMQChgEAYCHQBGgPAuBEg");
	this.shape.setTransform(-1.3332,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlJD4QhYBth4h3QjVAeA5jJQA5jHDAheQBogyCABMQBrh3B7AAQCmAAAoCbQCAglAnBMQChgEAYCGQBGgOAuBDQAuBEhnBFQhoBEh0g1QgyBMizgOQhVAwhTAAQkOAAhNhIg");
	this.shape_1.setTransform(-1.3332,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(-72.9,-32.4,143.2,66), null);


(lib.circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABGAAQAAAdgUAVQgVAUgdAAQgcAAgVgUQgUgVAAgdQAAgcAUgVQAVgUAcAAQAdAAAVAUQAUAVAAAcg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(-8,-8,16,16), null);


(lib.chair = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ground_shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,51,0.498)").s().p("A27CiIPVnxIeigPIidK9g");
	this.shape.setTransform(117.275,-8.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Chair
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AvWwIIBUEmIACADIABAFAtBvDIAAACIAEANIARBAIADANIAMArIAEAPIDNMIAtBvBIAEANAsst0IADAMIANAyIADAJAopBdIgVhVIgOgtIAJAlIAdBqIASBHIhBCCAKrP5QAqAgArggAObNyQAeAjAegj");
	this.shape_1.setTransform(165.8,-131.665);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0066FF").ss(1,1,1).p("AMfu4IAABtIBFOeIhRAAIguAAIgYAAIgmAAIg1AAIgSAAAOLoyIginqIhQAAIAGBkAtBuMIAAAAIACAAIAdABIE2AMIQOAqID9AKAuCqrIACADIAAABQgPNmg9L5QAuAsAugsIAAh1IAHh2ICAACICAACIVXATIgCARAvWvRIAthfIA8AAIASBEQhQBfBqABIAAACApCA3IAZBdIADANAnTE4IgGASIiQGHAsrl/IDWLpAsJNDIB4AAIVyAEIg2DpAsJNDIhQC2QBBAhBBghIBGi2AtwNDIBnAAAoUDoIjVHnAtpLNIA+xMAOLoyIAQDcIAAJ/IAAG9IAABiIAABhAOLoyIBMAAIAAXbANWCfIhLAAIgfAAANkBTIgOBMIhoJFIBoABIBFABAM2NIIBlAAANWLlIgBALALhNHIBVABIg2DoAObEpIhFG8AtbvsIZ6A0At/qjIBUEk");
	this.shape_2.setTransform(165.8,-137.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AvQMlQA8r5APtmIABAEIBUEkIg+RMIgHB2IABB1QgYAWgXAAQgXAAgWgWgAOVMWIAAhhIAAhiIAAm9IAAp/IgPjcIBMAAIAAXbQgPASgQAAQgPAAgPgSg");
	this.shape_3.setTransform(166.3,-122.4875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AMoOaIhVAAI1xgEIh4gBIhoAAIAHh1ICAABICBACIVXATIgDASIADgSIBnACIgBALIABgLIBFABIAABhgAL9DyQAEgSACgMIABgYQAAgOABgJIBRAAIgOBNgAIVsDIwOgpIk3gNQgFgHgIgBQgJgBgHAIIgCAAIAAAAQhqgBBRheIZ5A0IAABsg");
	this.shape_4.setTransform(167.1992,-145.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("ALJQpIA2jpIBVAAIg2DpQgWAPgVAAQgVAAgVgPgAs7PyIBQi3IB5ABIhGC2QghAQghAAQggAAghgQgAMMLcIBopEIANhNIhEueIAAhsIgGhkIBQAAIAiHqIAPDcIAAJ/IhEG8gArLLHIDWnmIhCCCIjWrqIhUkjIgBgFIAAAAIgBgEIhUklIAthfIA7AAIASBEQhQBeBqABIAAACIgBACQgGAJgDAOQgHAiAPAMQAEADAHAEIALAGIAEAEIAAABIANAyIByI8QANA/AIAfQAPAzAXAlIAUAcIATAdIAFALIAdBrIATBHIgThHIgDgOIgVhUIAVBUIgZhdIAEAJQASAnAQBBQAXBZASAlQAMAWAOAPIiQGGg");
	this.shape_5.setTransform(162.8,-136.415);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(164.0244,-160.0934);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC6666").s().p("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");
	this.shape_7.setTransform(164.3919,-161.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AACKZIhbgJQBKAAA2gEQBpgJBUgcIA4gVQBGgNAWgDIATgCIAPAAQAdgCATgIQANgDAKgEQAggMBCg0IAOgLQAJACAJgDQAKgEADgJQABgEAAgEQAVgNATgGQgKgLgIgLIAAgCQADgJgGgMIgMgUQgIgNgFgXIgHgnIgKgbQgIgRgCgKQgDgMgBgTIgCgfQgCgkgPgxIgKghIAAgCQgRhtgFhbQgEhFAAhwIAAkOIgBAAIgmgEIgFgEQgHgEgHACQgEABgDADQhMgFhegEIgIAAQiFgEinAAQgHgDgHADIAAAAIhmABIhNAAIgBgCQgEgIgJgEQgJgEgIAEQgFAFgDAKIiEAAQgDgHgFgFQgIgGgIABQgMABgGAOIAAABIh7gBQgCgQgIgEQgHgEgIAEQgIADgFAIIgDAIQhbgChGgFQAGAGAEAJQAEAIACARQgDBAABAhQABA5ALAsQAFAXANAnIAUA9QAKAjAKA7QAMBJAEAVQAJAqAQAvQAKA4AMAoQAOAtAPAZQAHALANATIAVAeIAKARIAPAlQAXBRAPAqQARA3ANAaQAUAmAYAHQAHACAMABIACAAQAQAJASAHQAUAIArAMIAsAMIANARQANAPAIAHIAFAEIgegCQhIgHgwgTQgPgGgJgKIgCgDQglAAgRgGQgQgHgNgOIAGgSIgGASQgOgOgMgWQgTglgWhZQgQhCgSgnIgOguIAJAmIgGgLIgTgdIgTgeQgXgkgPg0QgJgfgMg/Ihyo6IADAJIgDgJIgBgGIAEAPIgEgPIgFgXQgCgNgFgHIgDgNIgRhAIARBAIADANIAAgBIgDgMIADAMIgBgBIgDgEIgLgHQgIgDgDgDQgPgNAHgiQADgOAGgJIABgBIAAAAIACgCQAHgIAJABQAIABAFAHIgdgBIAdABIAEAHIAFAAQCXAECWABIQOAqIADAEQAHAMgCAcQgcGkBVGeIACAJIADAAICMAAQAUAAAIAIQAGAGAAAMQAAAGgDAPIAAABIguAAIgBgCIgYAAIgCgCQgFgIgLAAQgKAAgGAHIgCADIg3gBIABADIgTAAIATAAIAHAVQANAiATAWIgEALQgBAIADAIQADAHAHAEQAGADAJgCQAEgCAEgCQAIAOgJALQgFAGgIAAQgGAFgKAEQgDgDgEgDQgIgFgKADQgKADgDAJQgCADAAAFIgBAHQgZAPggAZQgRABgGADQgIAEgEAHQgEAHABAHQgeAVgVAKQA+gCA8gLIANgCQAygKAwgOQgPgMAEgfQADgUAXhLQASg5gEglIAuAAQgCAJAAAOIgBAYQgBAMgEASIggAAIAgAAIgJAeIgSA9QgGATABAKQABAIAGAJIAJARQALAWgJANQgGAIgVAEQhnAVg0AJQhbAPhBgHQgbgDgKgLQgEgEgCgFIgdADQggAEhvAXQhZASg3ABIgLAAQgjAAgwgFgAowEHIjNsHgAshqHIgEgNgAshqHIgEgNgAieJfIgFgDIBSAEIAFABIhFAAIgIABIgFgDgAomEtIgBAAIgJgmIAOAuIgEgIgAsAoJgAsBoPg");
	this.shape_8.setTransform(163.011,-161.7719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chair, new cjs.Rectangle(-29.5,-245.4,294.6,272.1), null);


(lib.CardPaper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACSHNQgYgEgngIIg/gMQinghiVAUQgzAIgdAOIgdAQQgQAIgOAAIgJgBIgJgDQAEgxAKgwIADgNQAXgEAigPQAtgUAOgEQAVgGAtgFQAsgFAagBQAngCAfAEQAWADAgAIIA1AOQARAEBIANQBvASAgAEQBEAICJAKIALAAIgBABIgWA/IgCAJQgRAGgXADQg3AIg3AAQg8AAg8gJgAGnFTIgtgEIAKgCQAggEAUANIAGAEQgIgEgPgDgAlZksQgMgwgRguIgDgJQAFgFAHgEIASgKQAOgGAWgEIAdgFIAIgCIA6gOIAngJIAUgEQAfgEAoABIBHAFQCbANCigCQAjAAARgEIAZgGQAPgEALAAIAHABQAKACAJAGIAJAcIAOAsIgDAHIgHAKIgGAEQgcATgUALQgNAEgQACQgQABgeAAQi+ACiNgMQg/gGgXAAQgpABg1ALIhcAYQgZAHgQABIgIAAIgIAAg");
	this.shape.setTransform(-1.625,-0.5242);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AHOK2QgOgIgKgQIgHgLQgeg1gIg9IgCgVQgFg1AOgyIACgJIAWg/IAAgBIgLAAQiJgKhEgIQgfgEhvgSQhIgNgSgEIg1gOQgfgIgWgDQgfgEgnACQgaABgtAFQgtAFgVAGQgOAEgtAUQgiAPgXAEIgDANQgKAwgDAxIgBAJQgEA2ADA3QADAyAJAzQADALgBAKIgBAFQgEAOgLACQgLADgIgMQgHgKgCgPQgfi8Ati7QAHgcAzijQAlhyAGhOQAHhPgPhpQgLhLgUgxIgTgrQgOgbgGgPQgfhPALhUQADgTAJgFQAGgCAHADIACABQAIAFADAIQACAHAAAJIgBAKIgBAGQgEAtAUA7IAFANIAYA8IAEAKIADAIIADAJQASAuALAwIADAOQAIgDAPgCQAYgCAwgLQAwgKAZgDQAbgCAkACIA/AGQBpAJC1AAQA3ABAhgHQAcgHAegQIAHgEQAUgLAbgTIAGgEIAIgEIAGgDIgEgKIgOgsIgIgcIgFgRQgFgUgCgQQgEglAIgiIAEgNQAOgrAhgVQAOgJAJAEQAFACADAGIABAEQACAJgEAIQgEAGgHAHIgMAMQgeAhAIA4QADAUAJAaIAQAtQAbBNAJBkQAGA+ABB4QACCFgEBCQgGBvgXBWQgMAugcBbQgIAggCAcQgEAqAIAjQAHAhARAUIADADIAOANQAKAKAEAHQAHALAAAMQgBAMgIAHQgGAEgHAAQgHAAgIgFgAg/DsQAbAGAzAOQAWAGAxAHIBAAKQBLALAjAEIBJAGIAdADIAtAEQAOADAIAEIAFACIAAABQAdhhAIh6QAGhagEinQgChLgDglIgEgjQgEgigHgcIgGAEQgmAbgaAOQgpAWglAHQgaAFg0gBQhygBg5gEIicgKQhagDhAAOIgyALQgbAFgVgDQAEAcADAeQAIBogVBoQgMA8gkB0QgVBCgNAvQBQglBagMQAngFAmAAQBCAABAAQg");
	this.shape_1.setTransform(0.0153,2.6949);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00243E").s().p("AmkJOQgKAAgJgFQgEg3AEg2IAKgGIAJABQAOAAAQgIIAdgQQAdgOAzgIQCVgUCnAhIA/AMQAnAIAYAEQBzASBzgRQAXgDARgGQgNAyAEA1QgSAFgcAAQheAAglgDQgggCg9gHQg/gIgegCQgygEhjAAQhZAAgwAFQhMAIg4AYIgeAMQgQAFgNAAIgCAAgAlsmhIgDgCIgDgBIgXg8QABgNAHgKIADgGQAOgTAmgRQBXglBtgGQBagFBvAQIBfANQBrALBpgZQAkgKARAEQAGABAGACQgJAiAFAlQACAQAFAUIgPAJIgHgBQgLAAgPAEIgZAGQgRAEgjAAQiiACibgNIhHgFQgogBgfAEIgUAEIgSABQgyAGglASIgdAFQgWAEgOAGIgSAKQgHgCgHgEg");
	this.shape_2.setTransform(-3.1317,-0.6168);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADBD").s().p("AnWK4QgJgygDgyQAJAEALABQANAAASgGIAdgMQA4gYBMgIQAwgFBaAAQBkAAAxAEQAeACA/AIQA8AIAgACQAmADBdAAQAdAAASgFIACAVQAIA9AeA0QmrhunNB+QABgKgDgMgAHCKYQgRgVgHghQgIgiAEgqQAFBKAaA7IgDgDgAngHdIAIADIgJAGIABgJgAGnFoIgFgDIgFgEQgVgMggADIgJACIgdgCIhJgHQgjgEhLgLIhAgKQgxgHgWgFQgzgPgbgGQhlgYhqAOQhaALhQAmQANgwAVhCQAkhzAMg9QAVhngIhpQgDgdgEgcQAVADAbgFIAygLQBAgOBaADICcAKQA5ADByABQA0ABAagFQAlgGApgXQAagNAmgbQAFASAHASIAFAVIAEAjQADAlACBLQAECogGBaQgIB6gdBgIAAAAgAl1khQAIABAJgBQAQgBAZgHIBcgXQA0gMApAAQAYAAA+AFQCNAMC/gBQAdAAARgCQAQgCANgDIgHADQgeARgcAGQghAIg3gBQi1AAhpgKIg/gFQgkgDgbADQgZACgwALQgwAKgYADQgPABgIADIgDgOgAGnlwIABAGIgIAFIAHgLgAmYmPIgCgJIAEACQAGADAHACQgHAFgFAFIgDgIgAjfnBIATgCIgnAJIg7AOIgIACQAlgRAygGgAGBnGIAOgJIAFARQgJgHgKgBgAnIpQIABgLQAAgJgCgHQgDgIgIgFIgCgBIgGgSQHfiDHgCDIgFAGQgDgGgFgCQgJgEgOAJQghAWgOArIgEANQgFgDgGgBQgRgDglAJQhoAZhrgKIhfgNQhvgRhbAGQhtAGhWAlQgnAQgOAUIgDAFQgMgygQgxg");
	this.shape_3.setTransform(1.125,-1.6625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CardPaper, new cjs.Rectangle(-51.4,-73.4,102.9,146), null);


(lib.CardHighlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,0,3).p("AnfqtIO/AAIAAVbIu/AAg");
	this.shape.setTransform(-0.0113,0.0164,1.1,1.0717);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CardHighlight, new cjs.Rectangle(-54.3,-75,108.6,150), null);


(lib.body_sitting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8405();
	this.instance.setTransform(-2,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body_sitting, new cjs.Rectangle(-2,-2,355,424), null);


(lib.bird_bite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// beak
	this.instance = new lib.CachedBmp_8399();
	this.instance.setTransform(-15.8,-186.9,0.3622,0.3622);

	this.instance_1 = new lib.CachedBmp_8400();
	this.instance_1.setTransform(-15.8,-83.2,0.3622,0.3622);

	this.instance_2 = new lib.CachedBmp_8401();
	this.instance_2.setTransform(-15.8,-186.9,0.3622,0.3622);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},3).wait(1));

	// eyes
	this.instance_3 = new lib.CachedBmp_8402();
	this.instance_3.setTransform(-74.4,-114.65,0.3622,0.3622);

	this.instance_4 = new lib.CachedBmp_8403();
	this.instance_4.setTransform(-74.4,-114.65,0.3622,0.3622);

	this.instance_5 = new lib.CachedBmp_8404();
	this.instance_5.setTransform(-74.4,-114.65,0.3622,0.3622);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},3).wait(1));

	// head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApYLUQj5krAAmpQAAmnD5ktQD5ksFfAAQFgAAD5EsQD5EtAAGnQAAGpj5ErQj5EtlgAAQlfAAj5ktg");
	this.shape.setTransform(15,-7.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8));

	// wing_left
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#787878").s().p("As6YFQlXp+AAuHQAAuGFXp+QFWp+HkAAQHkAAFXJ+QFWJ+AAOGQAAOHlWJ+QlXJ+nkAAQnkAAlWp+g");
	this.shape_1.setTransform(-101.95,157.8,1,1,-25.7236,0,0,28.9,211.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({regY:211.4,scaleX:0.6843,scaleY:1.1089,rotation:-12.2678,x:-102.1,y:157.6},0).wait(3).to({regY:211.7,scaleX:1,scaleY:1,rotation:-25.7236,x:-101.95,y:157.8},0).wait(1));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEF4FF").s().p("ApYLUQj5krAAmpQAAmnD5ktQD5ksFfAAQFgAAD5EsQD5EtAAGnQAAGpj5ErQj5EtlgAAQlfAAj5ktg");
	this.shape_2.setTransform(-102.9197,207.4741,2.0887,1.3122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A6DWGQqzpJAAs9QAAs7KzpKQKzpKPQAAQPRAAKzJKQKzJKAAM7QAAM9qzJJQqzJJvRABQvQgBqzpJg");
	this.shape_3.setTransform(-60,219.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

	// wing_right
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AnucgQjNr0AAwsQAAwrDNr0QDNrzEhAAQEiAADNLzQDNL0AAQrQAAQsjNL0QjNLzkiAAQkhAAjNrzg");
	this.shape_4.setTransform(122.85,218.35,1,1,14.9992,0,0,-11.7,235.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({regX:-11.8,rotation:4.0496},0).wait(3).to({regX:-11.7,rotation:14.9992},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-361.5,-304.1,651.6,724);


(lib.beachball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Shadow_on_ball
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("Ag1OTIhugPIhkgYQgngMgrgQIhAgcIgBgBIgPgHQglgSgogYIhjhFIg+g3IAFAEIAQAOIAiAcIACACIACACIAEADIBjBFQAjAVAqAVIAPAIIABAAIBAAcQAqAQAoAMIAvANIBoAUIA6AGICGAEIAKAAIBbgHICbgdIACgBIACAAICNgyIBigyIAdgSIgrAcIhYAsIiIAwIghAIIh+AWIhbAHIgLAAgAKxLDIB0hmIACgBIABgBIAMgMQAmgoAcgjIAzhDQAng4AXgtIAJgRIACgDIAJgSQAAAAAAAAQAAAAAAAAQAAgBAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABgBAAIgJASIAAACIgBABIgJAQQgbAzgjAzIgzBEQgdAkgmAmIgMAMIgBABIgBACIgFAEIgUAUIhcBOIgmAZgAqXKGIgEgDIgDgEIAHAHgArEJeQgfgfgcghIgug8IAvA7QAfAjAdAdIAkAigAtmGTQgYgngSgjQgnhNgXhOIgEgKIAAgCIgBgDIgBgFIgFgOIgXhsIgCgPQgHgpgCgkIAAg7IABAxIABAKQACAkAHAoIACAPIAWBnIABADIAFARIABAFIABACIAAADIADAJQAZBQAmBLQATAkAXAmIAXAkgAv7h3IAAgQIgBgWIABAWIAAAQgAv6kFIANhbQAGgiAHggQAPg8AXg9IAvhnQAVgpAdguIBKhlIADgDIAFgGIBKhPIACAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgXAXIgHAHIgxA3IgDAEIgDADIhHBhQgcArgXAsIguBnQgXA+gPA6QgJAqgEAYIgGAiIgBAEIgJB0g");
	this.shape.setTransform(-228.6925,-7.8875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,51,102,0.447)").s().p("ArCJdQk6k6AAm7QAAm8E6k6IAHgIQhmDTAAD+QAAG8E6E5QE5E6G7AAQG4AAE4kzQhNCfiHCHQk6E6m8AAQm7AAk6k6g");
	this.shape_1.setTransform(-228.45,-8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA2Q2QgPgDgIgMQgIgMADgPIAAgBIAEgVIAAgDIAAgCIAChSIAAgDIAAgBIgBgCIAAgFIgGgWIgBgEQgDgLAEgLIACgFIAFgHIgEgGQgDgHAAgJIgBizIgK2zIgBiLIgBhiIgBgCQABgPAKgKQALgKAOAAQAPABAKAKQAKALgBAOIAAAjIAAJIIgBFAIAKKhIAEEIIABABQAAAMgHAJIAFAJQAHAOgFAOIgBACIgFAaIAAADIgBACIADBFIAAANIAFAaIAAACQACAIgCAGQgDAPgMAIQgJAGgKAAIgIgBgAlFQIQgQgTgIgdIgIggQgKg0gIhIQgOiBgFgdQgKhCgiiEQgiiBgKhEQgPhgACiJIAAgIQADimAajyIACgSIAtmFQADghANgLQAFgFAFgCIACgIIABgCIAdheIALguIAAgBIABAAIAAgCIADgdIAAgIQAAgKAFgJQAIgMAPgEQAOgEANAIQANAIAEAOQAEAPgIANIgBACIgCACIgGALIgHATIgBABIAAABIgFAOIgSBWIgFAoIAAADIgCAKIgEAHIgCADIgDAEQgEAEgGACQgOAGgNgGQgOgFgGgNQgCgHAAgHIAAgGIAAAGQAAAHACAHQAGANAOAFQANAGAOgGQAGgCAEgEIAAABQAGAOAAASQAAAOgEAbQgkD7gXEQQgOCkAABoQABCTAYB3QAJAoAiB9QAcBnAJA/IANCOQAHBVAQA2IAIAdIACAHQACAMAAAKQgBAQgIANQgIAOgOAEIgKABQgRAAgPgRgAEHQCQgNgHgEgNQgFgOAGgNIAAAAIANgaIABgDIAXgyQATgsATgvQAahDASg2IAVhGIALglIAiiNIAhjdIAMjSQAAgpgBg0IgFheQgDgqgGgxIgLhZIgOhWIgujMIg9jFIgwh/IAAgCQgDgIABgHQABgGACgGQAHgNANgFQAOgEANAGQANAHAFANIBzGQIAUBlIAIAqIAZCzQAGAvADAvIAFBfQACAwAAAvIgCBhIgGBZIgUCoIgnDHIgoCRQgTA/gXA+QgVA4gQAnIgVAxIgBADIgBADIgNAbQgGANgOAFQgGACgGAAQgHAAgIgDgAp6OHQgNgFgGgNIgcg7IgdhFQgXg2gNgkIglhtQgYhOgLgtIgQhCIgNhEIgLhGQgGgkgDgiIgJiNQgCgfABgmIAChEIALiAQAHg8AJg2IAwjTIABgEIAFgSQAFgOANgGQAMgGANADIACABQAOAFAGANQAGANgFAOIgHAUIgBACIAAADIg6DYIgXCmIgDAwIgCBCQgBAlABAdIAKCSIAVB+IABAFIAAABIADAUIABAFQAEAXAIAVIAwCvIAXBAIAPApIAlBWIAfBCIAdA5IAAAAIABABQADAFAAAGIAAAAIAAABQABAHgDAIQgFAOgNAGQgHADgIAAQgFAAgHgCgALsK6QgOgEgGgNQgHgNAEgNIAAgBIA4jPQANg9AGgoIAOhoIAAgEIABgHQAGg/ACg8IAChQIgDh3IgBgEIAAgEIgCggIAAgEIgZjBIgKg4IgUhaIgBgDIgBgDIgCgFIgXhVIgph7QgEgOAHgMQAHgNAOgEQAOgEANAHQANAHADAOIA5DgIAIAnIABADIAeC5IAOB2IAAAEIADAkIACDvIAAAWIgBAEIAAAEIgGBSIghDWIgOBWIgTBRIgBADIgBADIgLApQgEANgNAHQgHAEgIAAQgGAAgGgCgArupoIgEgCQgNgHgEgOQgEgOAHgNIBJigIABgCIAHgVIAFgRIABgDQABgIAGgHQAJgLAPgCQAPgBAMAJQAFAEADAFQAEAHABAIQABAPgKAMIgMAQIgfA8IgeBQIgOAyQgHANgOAEIgKABQgHAAgGgCg");
	this.shape_2.setTransform(-222.045,-20.7602);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AoqQEIgBgIIgJgdQgQg1gHhWIgMiNQgJhAgchmQgjh9gIgoQgZh3AAiUQgBhpAOijQAYkPAkj8QADgaAAgOQAAgTgGgOIAEgEIACgDIAAgBIAQgbIADgIQABgdAGgSQAIgYASgMQAGg7ATgcQAZgmA8gMIAtgLQAcgGASALIApAjIgLgJQAQANAIALIAHALQAUATAFAlIABABIgBgHIACAKIABAEIABCMIgCAHIgDBqQgCA+gFAsQgIB7ADC8IAFE3IgFD+QgDCaAIBjQAHApACARIAAAAQAIAXAFAdIABC0QAAAJAEAHIgBANIgDAFQgEALAEALQgHA1gOAhIgNgCQgvgGhyAIQgnADggAAIgOAAgAl2OjIAAABIACgFgAoFNMIAGAKQAIAMAFAMIACADIAUAPIADhgQgWAbgWgQgAoFoKQgLCHAFDKIADgUQABgTABhuQAAhOAIgyQADgogBgvgAmOobQADgeAFgbQABgYgCg0IgGBGIAAgBgAmDsuIAAAaQADgPAFgOIAAgPIgCgHIgIgMIgBgBIgBgBIgFgGQAJAUAAAZgAmEtSIAFAEIAAgBIgGgFgAIpJDIACgLIgBgCQgLgjgEgOIgBgGIAijXIAGhRIAAgEIAAgEIAAgWIACgJIADgsQACgYAGgTQACgZAHgbIAAgCQACgggDgvQgHgcgDg1QgFgQgDgPIgIgSQgFgNgFgRIgEgIIgdi5IgBgDIgJgnQADgSAIgPQAGAQAFAIIAaAiQARAUAIAQIAUAfQAZAbAPAtQAFALAHAXQAHAPAHAbQAKAfADA6QAOAqgBA+QgBA2gLAxIgBAFIABgCIgBADQgCAjgIAXIgDAoQgCAWgFASIACgGIgMAwIAAAAIgBAEIAAAFIgKBHIABgOQgDAbgDAOQgGAVgKARIAGgJIgOAYQgRA1gVAYIgLAhQgIATgLAHgAJFCsIAAABIADgKgAKuB6IAGgSIAAgEgAJYgoIABACIgBgDgAJJiSIAGAJIgHgNgAJYlsIgBgCIgKgIIALAKg");
	this.shape_3.setTransform(-192.075,-25.6249);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF66").s().p("AEMPnIgChFIAAgCIAAgDIAGgaIAAgCQAGgOgHgOIgGgJQAHgJAAgMIAAgBIgEkIQADg8AHhbQAIhxAAgmIgBg7QgEgwgBhXQgBhdgDgqQgHg2AAhcQAAhsgDgmIgIhGIABpIQAghKBFA2QAQAEAJAEQAgAFAMAGIgLgDQAYAHAPAPQgBAHADAIIABACIAvB/IACAkQAFAPACAUIADAjIAAADIAAABQAHAZABAKIABACQAJAXACAkIAKAiQAIAXACAYQAHAUAEAYIgDgIQAJAfAEAiIgCgVIAJAmQAKAYACApIACAGIgCgFQAGAWAEAxIAKBBIACAJIgBgCQAEAPAEAdQAWA6gEBnQgCArgPB7QAAB0gDAtQgHBagYBDQgSA+guBGQgFAJgPAiQgMAdgKANIgIARIgDAKIgBACIgIBDQgDBdgyBLIgCACIAAAAIgaAhQgWAlgTACQgKAegSAAIgBAAQgYAAgagwgAHfm5IAAAAIAAgBgAIRqnIgBgKIAAgBgAkDPAIgZgCIgMAAIgBgDIgQgwQgTASgWgNQgPgJgMgKIgcgWIAAgBIABABIgBgBQgBgGgCgFIgBgBIAAAAIgdg5IgfhCIglhWIgQgpQACgJAEgIIgOgkQgEgJgIgbQgHgQgFgWQgEgLgFgVIgBAAIgCgEQgMgXgHgfIgHgWQgJgVgEgXIgBgPIgDgKIAAgBIACAHIAAgBIgDgLIgUh+IgKiSQgCgdABglIAChCIADgwIAXimIA6jYIABgDIABgCIAHgUQAFgOgHgNQgGgNgNgFIgDgBIABgBQALAEANgDQAOgEAHgNIANgyIAehQIAgg8IAMgQQAJgMgBgPQgBgIgEgHQAQgTAYAAIgKADQAUgFAhgCIAHgBQAagrAjgYQAmgbAYASQATADAMASQAHAKAEANIgeBeIgBACIgCAIQgFACgFAFQgMALgDAhIgtGFIgBADIgEAPQgDAcgFAUIgCAJIAAgDIgJBCIgBA6QgCAggGAYIABgDIgCAJQgCAjABAxIABBUIACAIQgBCJAOBgQAKBEAiCBQAiCEALBCQAFAdANCBQAIBIALA0IgYABIgcACIgWABIgGAAgAlCIRIAKAeIAMAkIATBDIAKAeIgChJIgIgaQgUgxgIgZIgHgUQgLgKgOgPQAJAUAKAjgApiE0IADALIgDgMgAmaozIAAACIACgEg");
	this.shape_4.setTransform(-239.7568,-21.1576);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoQxIgCAAIhHgEIgBgBIgDAAIhngPIgBAAIgBAAIgBAAIgBgBIgjgHIgDgBIAAABIgJgCIgCgBIAAAAIgBAAIhmggIgIgCIgtgTIgGgCIgigQIgCgBIgCgBIhVgxQgogZgogeQgogegighIhphqIgBgCIgbggQghgpgZgmQgdgugUgmIgKgUIgBgCIgVgsIgBgCIgCgDIgHgRQgTgvgNgsQgbhZgMhlIgEgxIAAgCIgChvIAHhnIAAgCIADgWQAIg1AKgqQAVhhAohXQAohZA3hPQAZgkAjgpIA4g/IBQhKQAjgfAogeQBQg5BYgoQBWgoBggZQBfgWBggGICBgBIADAAIAxADIADAAIACAAIAHABQAvAFAxAJQAwAJAtANQAxAOArASQAvATApAVQApAVArAcQApAZAmAfQAnAeAjAhIAhAfIABACIARASIADACIBNBZQAbAjAdAsIAJAPIACADIAlBCQAVAnAUAyQARArAOAxQANAuAKAwIALBLIAAACIACATQAFAzAAAuIgCBfQgDAtgHAzQgQBigfBaQghBcgxBVQgXAogfApIgKAOIgCADIgRAWIhnByIh2BkIgDABIgVARQgqAdgpAXQgoAWgvAVQgwAVgrAOQhaAfhjANIgBAAIgBABIhAAHIgEAAIgDAAIh3ACgACZQnIABAAIABgBIABAAIABAAIABAAIACAAIACgBIABgBIACgBIAEgDIABgCgAjWPZIADABIABAAIBnAPIACAAIAGABIA3AEIAHAAIABABIBwgCIADAAIADAAIAVgDIAmgDIABgBIABAAIABAAIABAAQBcgMBVgbQAwgQAlgRQAqgSAogXQAqgXAkgZQAlgZAkgeIAvgqIAFgDIBNhRIAug3IACgDIACgCIAKgOQAbgnAXgmQAvhOAfhWQAehTAPhfQAHgvADgsIADhbQAAgkgFg3IgCgSIAAgDIgLhGQgRhdghhUQgSgrgTgoIgig9IgBAAIgBgBIgKgSQgZgmgcglIgVgbIgFgEIgDgEIhghlQgggegmgdQgngfgkgWQghgXgugXQhPgphbgcQgpgMgwgJQgwgJgrgFIgJgBIgDAAIgtgCIgDgBIh7ABQheAGhYAVQgwANgoAOQgsAPgpATQhSAnhMA2QghAXgnAiIg8A2IgCADIAAABIhEBJQgfAmgZAjQg1BMglBUQgSAqgOArQgOApgLAvQgKAxgGAqIgCARIAAADIgBADIgHCUIABADIACAzIAAAEIAFAuQAKBbAbBXQAPAtARApIAdA+IABABIAKATQAqBOA7BKIAaAfIACACIACACIBhBiQAnAhAgAYQAkAaApAZIAJAHIACABIAkAUIACAAIAPAIIACABIADACIALAFIACABIABABIABAAIAPAGIBBAcIAAAAIBsAiIABAAIAFABIABAAIABABIABAAIgCgBg");
	this.shape_5.setTransform(-226.5,-20.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABTPxIgFAAIgBAAIg8gBQgpgBgPgCIgpgKIjFg5QgogMgTgDQgbgFgmACQgNABgJADIgOgHIgBAAIgCAAIgCgCIgKgFIgDgBIgDgBIgOgIIgDgBIgjgUIgDgBIgJgGQgogZgkgaQgggZgnghIhihiIgBgCIgCgCIgagfQg8hKgqhNIgKgTIgBgCIgdg+QgRgogOguQgbhXgLhbIgEguIAAgDIgCg0IgBgDIAGiUIABgDIAAgDIADgRQAFgqAKgwQAMgwANgpQAPgrASgqQAlhUA1hMQAZgjAfgmIBDhJIABgBIACgCIA7g3QAogiAggXQBMg2BTgnQApgTArgPQApgOAvgMQBYgWBegGIB7gBIADABIAuADIADAAIAJABQArAEAwAJQAwAJApAMQBbAcBPApQAtAXAiAXQAkAWAnAfQAmAeAgAeIBfBkIAEAEIAEAEIAVAbQAdAlAYAmIALASIABABIABABIAhA8QATAoATAsQAhBTAQBdIALBHIAAACIADASQAEA3AAAkIgCBcQgDArgHAwQgPBfgeBSQgfBWgwBPQgWAmgcAmIgKAOIgCACIgBADIguA3IhOBRIgEADIgwAqQgjAegmAZQgjAZgqAYQgpAXgpARQgmARgwAQQhVAchcALIgBAAIgBABIgBAAIgBAAIglAEIgVgCg");
	this.shape_6.setTransform(-226.55,-21.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.7,-128.6,214.5,215.8);


(lib.beachBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// beach
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],10.5,-131.9,10.5,341).s().p("EhKmAhrIAAtmMCVNAAAIAANmgEhKmAMHMAAAgtxMCVNAAAMAAAAtxg");
	this.shape.setTransform(477.475,-215.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-477.4,0,477.5,0).s().p("EhKmAD/IAAn9MCVNAAAIAAH9g");
	this.shape_1.setTransform(477.475,-112.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},71).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-430.9,955,430.9);


(lib.beach_towel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// towel
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333399").s().p("AjxF+Qgkgbg1g8Ii9jWQhUhfgxgqQhBg6g+gUQgkgMgxgCQgcgCg6ACIl3AOQBWgeBwgUQBBgLCLgSQDMgZBtgRQCtgaCJggIDag2QCBggBagNIBOgIIBNgCQBYgDAsACQCdAFBaBFQASAOAZAYIAoAoQA1AxBPAuQAvAcBiAvQA8AdAbAMQAwAVAoALQAwAOBIALIhHAPQimAkgmAKQggAJiYAuQhxAihKAOQgtAIiRAPQh4ANhFATQhiAbjBBnQhaAwhIAfQgtgJgsgig");
	this.shape.setTransform(-78.75,4.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwRKvQgWgFgpgPQhsgog0gVQhYgjhDgjQgygZhkg2QhYgthEgSQhVgYiHgBIjhgDQgVgBgEgMQgEgMASgNQCsiACwh1QgKgCgGgDQgHgEgCgHQgEgIADgGQAHgPAgAHQASAEAVAAIATgNQA9gnAugbIgIgKQgFgGgBgHQgBgIAEgEQAFgFALAAIBMgDQAygYAvgPQBGgYBlgPICvgYQA3gIBtgTQBtgUA3gHIC+gXQBxgOBLgRQA2gMB2glQBvgiA+gNQA7gLCegQQCLgNBOgWQBWgXBggxQA2gcBJgtQg2ALgyAPQgVAHgLgEQgIgDgEgIQgEgIAFgGQADgFAJgDQBlgiBfgGIAKAAQAngZAYgKQA1gZAugBQAhgBAoALQAVAGAxASQChA8B/AeQBlAYErAkQD7AfCOAxQA3ASAWAXQiWA4kzCtQkiCiiqA4QhPAaiIAfQijAmg2APIicAvQhdAchBALQgtAIhwALQhkAJg4AMQh0AajUBrQgyAYgsAVIAfgKQAVgIALACQAJACAFAHQAFAIgEAHQgDAIgPAEQgyAOgZAFQgrAIgigFIgEgBQhSAhg6ANIgiAGIgKABQg3AIh3AOQiEAQhOAlIg2AcQghAQgZADIgTABQgVAAgYgFgA8OFcQCmAcCVBJQAlASB7BFQBiA4BAAZQB8AxBcgWQAcgGAqgTIBFgeQBGgaB7gMIAYgDQh1gfhmhEQg2gkhdhQIkWjuQkSAKkQgTQixByitCLQBEgIBEAAQBhAABiARgAvvhbQAwADAlAMQA9AUBCA5QAxAqBUBfIC9DXQA1A8AjAbQAtAiAtAIQBIgeBbgxQDAhnBhgaQBGgUB3gMQCSgQAtgIQBKgNBwgiQCZgvAggIQAmgKClgkIBIgRQhIgKgwgOQgogMgxgUQgagLg8gdQhigwgvgbQhPgug1gyIgpgoQgYgYgSgNQhahFiegGQgrgBhYADIhNABIhNAJQhbAMiBAgIjaA3QiJAgitAaQhtAQjMAaQiLARhBAMQhxAUhVAdIF3gNIA4gBIAeAAgAtCGUIACACQACABADAAIAFAAQgGgHgHgFIgFgDIgJgDgA4pA1IgZAHQgMAEgJAAIDvAAQgOgMgjAAIh0AAQgTAAgJABgA3AgpIhfAFIgPAHQA0AKBGgHQBhgOAxgFIgegBQgyAAhOAFgAGDmGQBdACBaAgQBaAfBMA4QAQAMAnAgQAkAdAVAPQCXBoDpgEQBXgBBxgSIDHgkIABAAIAvgZIgDAAIhcAHQhQAHgtgFQgsgFg1gSQgfgLg+gaQhjgqgwgYQhPgpg5grIhThFQgxgogogQQg6gYg/AHQhAAIgyAkQgIAFgIABQgJABgCgHQgBgEAEgGQAMgVAUgOIgvAaQhkA0hXAYIgrAKIAeADIAbAEIACgBQAHgDAIAAIADAAgAb3j4QAKAAAIAEQAIAFgBAIIgBABIE1ilQiIgujcgdQlAgrgqgIQi5gjishCQgsgQgRgFQgigLgcgBQgxgDg4AYIgKAEQA9AEA3ARQBRAZBbA9QAhAWB7BeQBeBIBFAkQBfAxBXAHQAjADA9gEQA9gEAcAAIAGAAg");
	this.shape_1.setTransform(-64.4035,-1.3652);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333366").s().p("AyGJsQhAgahig3Qh7hFgmgSQiVhJimgdQilgcilAUQCtiLCwhyQERASESgKIEWDvQBcBPA2AkQBnBFB1AfIgYACQh7AMhGAbIhFAeQgqASgcAHQgdAHgfAAQhGAAhWgigANaizQgUgOgkgdQgnghgQgMQhMg4hagfQhagfhdgDQgLAAgHADIgCABIgbgDIgfgDIAsgLQBXgXBkg1IAvgaQgUAPgMAUQgFAGACAFQABAHAKgBQAIgBAHgGQAygkBBgHQA/gHA5AXQApARAxAnIBTBFQA4AsBQAoQAwAYBjAqQA9AaAgALQA0ASAtAFQAsAFBRgHIBbgGIAEgBIgvAaIgBAAIjHAjQhxAShXACIgQAAQjeAAiThlgAcbjkQABgIgIgFQgIgEgKAAQgagBhGAEQg8AEgjgDQhXgHhfgxQhFgkhehHQh8hegggWQhbg9hRgZQg3gRg9gEIAJgFQA4gXAyACQAcACAiAKQARAFAsARQCsBBC5AjQAqAIFAArQDbAeCJAtIk1CmIABgBg");
	this.shape_2.setTransform(-65.5,-1.6462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ground_shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,102,0.498)").s().p("AwRKvQgWgFgpgPQhsgog0gVQhYgjhDgjQgygZhkg2QhYgthEgSQhVgYiHgBIjhgDQgVgBgEgMQgEgMASgNQCsiACwh1QgKgCgGgDQgHgEgCgHQgEgIADgGQAHgPAgAHQASAEAVAAIATgNQA+gnAugaIgJgLQgFgGgBgHQgBgIAEgEQAFgFALAAIBMgCQAygZAvgPQBGgYBlgPICvgYQA3gIBtgTQBtgUA3gHIC+gXQBxgOBLgRQA2gMB2glQBvgiA+gNQA7gLCegQQCLgNBOgWQBWgXBggxQA3gcBIgtQg2ALgyAPQgVAHgLgEQgIgDgEgIQgEgIAFgGQADgFAJgDQBlgiBfgGIAKAAQAogYAXgLQA1gZAugBQAhgBAoALQAVAGAxASQChA8B/AeQBlAYErAkQD7AfCOAxQA3ASAWAXQiWA4kzCtQkiCiiqA4QhPAaiIAfQijAmg2APIicAvQhdAchBALQgtAIhwALQhkAJg4AMQh0AajUBrQgyAZgsAUIAfgKQAVgIALACQAJACAFAHQAFAIgEAHQgDAIgPAEQgyAOgZAFQgrAIgigFIgEAAQhSAhg6AMIgiAGIgKABIiuAWQiEAQhOAlIg2AcQghAQgZADIgTABQgVAAgYgFgAtCGUIACACQACABADAAIAFAAQgGgHgHgFIgFgDIgJgDgA4pA1IgZAHQgMAEgIAAIDuAAQgOgMgjAAIh0AAQgTAAgJABgA3AgpIhfAFIgOAHQA0AKBFgHQBhgOAxgFIgegBQgyAAhOAFg");
	this.shape_3.setTransform(-79.3035,13.0348);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299,-70.6,454.3,152.89999999999998);


(lib.background2lv2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],20,-634.4,20,352.7).s().p("EiOMAOLIAA8VMEcZAAAIAAcVg");
	this.shape.setTransform(862.225,-14.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background2lv2, new cjs.Rectangle(-47.9,-105.7,1820.3000000000002,181.5), null);


(lib.backarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8398();
	this.instance.setTransform(-14.65,-63.4,0.4998,0.4998);

	this.instance_1 = new lib.CachedBmp_4498();
	this.instance_1.setTransform(-13.35,-62,0.4998,0.4998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backarm, new cjs.Rectangle(-14.6,-63.4,122.39999999999999,67.5), null);


(lib.angryseagullhead_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("ABxgiQAAAugiAhQghAhguAAQguAAghghQghghAAguQAAguAhAEQAhAEAuAPQAuAQAhgUQAigTAAAug");
	this.shape_4.setTransform(52.95,-43.8158);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AiZAoIgBAAIiRhSICRhLIAGAAQFLgtBtEaIAJAEQlWiRhwA9g");
	this.shape_5.setTransform(94.2,-31.7273);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AhPAtQggghgBguQABguAgAEQAhAEAuAPQAuAQAigUQAggTAAAuQAAAuggAhQgiAhguAAQguAAghghg");
	this.shape_6.setTransform(52.95,-43.8158);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmLEnIAAgcQAJgOAbg+QAbg+AfgiQARgJACgQIACgGQgQgyADgcQADgdARhAQAQg/BCgyQBCgyA2gMQA3gMB6ABQB+AABaBCQAZASARAUQAUAXAMAaIgFABIiSBKICSBSIABAAQgLAUgRAUQgRATgZATIgUANQhTA1jIAyIgZAGQAVAmAKAogAAViyQAAAvAhAhQAhAhAuAAQAvAAAhghQAhghAAgvQAAgughATQghAUgvgPQgugQghgEIgFAAQgcAAAAAqg");
	this.shape_7.setTransform(39.625,-29.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angryseagullhead_1, new cjs.Rectangle(0,-58.9,124.3,58.9), null);


(lib.seagullWalk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front_foot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AhCBNIADgJIADgEQAQguAxg6QAUgcAFgXIAPgCQgHA5gKApIgFARQAWggAhgPIAUgIQAkgIAuAGIAEABIhCAsIBeA1IhegCIAqBdgAjThUQBMgUBSghQBJgZAfANIAAABIgEAqQAJALgBABIgKABIACgNIgRgVQAFAQgFAUQheANhvAbg");
	this.shape.setTransform(-142.95,-32.4253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("AguBMIAEgJIACgEQAPgvAhg5QARgmgFgfIAJACIgSgcQAGAMADAOQhlgNh6gCIgcgqQCeACBxADIAAABQAGBdgHA/QAAAKAGAVQAaggAhgLIAVgIQAkgEAtAKIAFABIhFAmIBaA9IhfgJIAjBgg");
	this.shape_1.setTransform(-140.1,-25.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("AghBrIAEgIIABgEQAZhWgLhmIALADIgMgUIAAAAIAAAAIABARQhegmh1ghIgQgvQCZApBsAgQASBbADA/QACAKARAkQAbgfAjgJIAVgFQAkgDAtANIAEACIhIAiIBWBEIhegRIAcBig");
	this.shape_2.setTransform(-137.925,-21.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6600").s().p("AgaCGIADgJIABgEQAWhWgshtIABABIgFgJIgBgDIABADIAEAIQhVg/hthAIgEgyQCJBOBiA7IAAAAQAeBYANA9QACALAdAvQAegbAjgIIAVgDQAlAAArAQIAFACIhLAdIBQBJIhcgWIAVBjg");
	this.shape_3.setTransform(-136.575,-17.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6600").s().p("AgXCZIACgJIACgDQAShXhTh2QAAgBgBAAQAAAAAAAAQAAABAAABQABAAAAACQhChThbhbIAJgwQByBtBPBSIAAAAQAsBSAUA7QAEAKApA8QAfgaAkgFIAWgCQAkADAqAUIAFACIhNAXIBLBOIhagdIANBlg");
	this.shape_4.setTransform(-136.35,-14.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("AhRCgIAEgIIACgEQAlhSgwiFQAAgBAAAAQAAgBAAABQAAAAAAAAQAAABAAABQgohig8hxIAWgsQBNCKA1BlIAAAAQAVBaAGA/QABALAXA8QAjgUAlACIAVACQAkAJAlAaIAEADIhPAKIA8BaIhUgsIgEBmg");
	this.shape_5.setTransform(-142.55,-9.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6600").s().p("AiECXIAGgHIADgDQA3hKgJiLQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAABQgJhqgah9IAigkQAiCaAWBwIAAAAQgDBcgMA/QgBAKAJA7QAlgOAjAHIAWAGQAgAPAiAhIADADIhQgEIAsBjIhLg5IgVBjg");
	this.shape_6.setTransform(-150.6,-7.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC6600").s().p("Ah+B+IAIgGIADgDQBHg9AdiGQABgDgCADQAVhoALiAIArgYQgMCdgLByIgBAAQgZBZgbA4QgDALgFA0QAngIAhAOIAVAKQAdAUAbAlIADAFIhOgSIAaBpIhAhFIglBeg");
	this.shape_7.setTransform(-164.4,-6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC6600").s().p("AiYBWIAJgFIADgBQBUgtA/h3QAAgBABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAzhdAvh3IAwgLQg4CTgsBqIAAAAQgwBOgoAxQgHAJgNArQAogBAeAUIASAMQAZAZAVAqIACAEIhKgeIAHBsIgxhQIg2BXg");
	this.shape_8.setTransform(-174.05,-7.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC6600").s().p("AhvC7IhEBLIgXjoIAKgCIAEgBQBcgbBehfIABgCQBKhLBQhkIAyADQhhB8hIBZIAAAAQhDBAg0AkQgHAHgVAhQAoAHAbAYIAPAPQAVAdAMAtIABAEIhCgqIgLBrg");
	this.shape_9.setTransform(-179.625,-10.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC6600").s().p("AiDC3IhLBFIgCjoIAJgCIAFAAQBcgWBfhkIACgDQBQhGBVhfIAxAHQhoB2hOBTIAAABQhDA/g0AkQgIAGgZAnQAnAKAZAaIAOARQATAfAIAtIABAFIg/gxIgVBrg");
	this.shape_10.setTransform(-181.075,-10.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC6600").s().p("AiPCzIhRA+IASjnIAKAAIAFgBQBcgRBghoIADgEQBUhBBchZIAwAKQhvBvhTBPIAAAAQhDBAg1AiQgIAHgdArQAmANAWAcIANASQAQAhADAuIABAFIg7g2IgeBog");
	this.shape_11.setTransform(-183.4,-10.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC6600").s().p("AiaCuIhVA3IAmjkIAJAAIAEAAQBcgNBihsIAFgEQBYg7BihUIAvANQh2BohYBJIAAABQhDA+g1AjQgIAHgjAuQAlARATAeIALATQANAiAAAvIAAAEIg2g7IgnBmg");
	this.shape_12.setTransform(-185.8,-10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC6600").s().p("AilCoIhaAvIA7jcIAJAAIAEAAQBbgJBkhxIAHgEQBbg2BnhNIAvAQIjZCjIAAABQhEA+g1AjQgIAHgpAxQAjAVARAfIAJAUQAKAjgEAuIgBAFIgwhAIgwBig");
	this.shape_13.setTransform(-188.175,-11.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6600").s().p("AivCiIheAnIBOjWIAIABIAFAAQBZgEBnh1IAIgFQBggvBqhHIAuATQiDBYhfA9IgBABQhEA+g2AiQgIAHguA1QAhAXAOAhIAHAUQAHAkgIAuIgBAFIgrhFIg4Bdg");
	this.shape_14.setTransform(-190.475,-12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC6600").s().p("AhmDTIhOBBIAJjnIAJgBIAFgBQBZgZBPhxQADgCgDACQA8hYA9hxIAxgFQhJCMg3BjIAAABQg7BFgwArQgIAHgcAyQAnANAXAbIANASQAQAgAGAtIABAFIg8g0IgaBqg");
	this.shape_15.setTransform(-181.225,-8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC6600").s().p("Ah0BdIAJgEIAEgBQBUgtA/hrIgFAJQAMhqgBiAIAogcQADCdAAByIgBABQgyBOgpAvQgGAJgOAqQAnAAAfATIASANQAaAZAUAqIACAFIhKgfIAHBsIgyhQIg2BWg");
	this.shape_16.setTransform(-173.025,-8.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC6600").s().p("AiEBpIAHgGIAFgDQBFg7A0hbQgmhfg8hsIAWgsQBNCIA1BlIAAAAQgnBUghA1QgFAKgGAfQAmgMAiAJIAVAHQAiAPAeAiIAEAEIhQgHIAoBlIhJg9IgZBigAABg2IACAHIAEgSIABgBIgBABIgGALg");
	this.shape_17.setTransform(-158.2,-11.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC6600").s().p("AhnBfIAGgHIADgDQAdgoAwgpQAcgfAGglIAFAEIgFgdQABANgBAMQhQhChohDIgDgxQBEAqBJAeQBBAjAXAnIAAAAQgbBagbA4QgEAKgBATQAggYAkgBIAWAAQAkAFApAXIADACIhOARIBEBVIhWgkIAEBlg");
	this.shape_18.setTransform(-151.15,-17.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC6600").s().p("AhHBLIAFgJIACgEQAUgtAygzQAYgfAEgcIAOADIgQggIAAgBIAAABQAEAOgCAPQhhgSh4gIIgZgrQBPAFBVgIQBLgCAfAYIAAAAQgOBdgUA7IgGARQAYgfAigNIAVgHQAkgGAuAKIAEABIhFAoIBbA7IhegIIAjBgg");
	this.shape_19.setTransform(-149.625,-25.6045);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// foot_front
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AxijPIgEAFARnDLIgEAF");
	this.shape_20.setTransform(-6.625,5.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AACgCIgDAF");
	this.shape_21.setTransform(-119.1,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},9).to({state:[{t:this.shape_21}]},5).to({state:[{t:this.shape_21}]},5).wait(1));

	// front_wing
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AwiC8QgShbEriPQEdiIGgg5IAlAAIAaAAQErAGD0AmQBnARBcAVQDeA3BLBAQAhAdAEAdQAPBljhgCIrugLIiMgFIgFAAQizAMh/AjQjFAeieAhQiKAbhUAAQh1AAgMg0g");
	this.shape_22.setTransform(-189.032,-95.4199);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AwdDNQgWhaEniXQEZiSGehFIAlgBIAbgBQEqgBD2AlQBnAPBcAUQDeA0BNA+QAiAeAEAdQAQBkjhABIruAAQhUABg0gDIgFAAQixASh/AmQjFAlicAkQiWAjhWAAQhnAAgMgxg");
	this.shape_23.setTransform(-188.67,-92.4379);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AwYDfQgYhaEhigQEViaGchRIAmgDIAagBQEqgID3AkQBnANBdASQDfAwBOA+QAiAdAEAdQASBkjhAEIruAMQhUACgwgCIgFAAQixAXh9AqQjEAqiaAqQigAqhYAAQhbAAgNgtg");
	this.shape_24.setTransform(-188.2537,-89.4914);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AwTDxQgahZEcipQERiiGYhdIAngFIAagBQEqgPD4AiQBnAMBdARQDgAtBPA8QAiAcAFAeQATBjjhAIIrtAXQhUADgsgBIgFAAQixAch7AuQjCAwiaAvQioAyhYAAQhSAAgOgrg");
	this.shape_25.setTransform(-187.8099,-86.6422);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AwNEEQgdhZEXixQELirGWhpIAngGIAagCQEpgVD6AgQBnALBdAPQDhAqBQA7QAiAbAGAdQAUBkjhALIrsAiIh8AEIgFAAQivAih7AxQjBA3iXAzQivA5hZAAQhJAAgPgng");
	this.shape_26.setTransform(-187.2759,-83.8443);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AwEETQgghXESi6QEGiyGTh1IAogHIAagCQEpgYD6ArQBoAMBdAQQDfAtBQA8QAiAcAFAeQATBjjhAIIrtAYQhTADgdgCIgFABQiuAmh5A1Qi/A8iXA3Qi0BBhZAAQhDAAgOglg");
	this.shape_27.setTransform(-186.4432,-84.1059);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("Av7EiQgjhXENjBQEAi5GQiBIApgJIAagCQEpgaD8A1QBnANBdASQDfAwBOA9QAiAdAFAdQARBkjhAEIrtAOQhTABgRgDIgFABQiuAsh3A4Qi9BCiVA7Qi6BJhYAAQg9AAgOgjg");
	this.shape_28.setTransform(-185.5333,-84.3823);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AvxExQgmhWEHjJQD8jAGLiMIArgLIAZgCQEogdD/A/QBnAPBcATQDeAzBOA/QAiAdADAdQAQBljhAAIrtADQhTABgFgFIgFABQisAxh2A7Qi7BHiTBAQi+BQhYAAQg4AAgOggg");
	this.shape_29.setTransform(-184.6059,-84.6605);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AvnE/QgohUEBjRQD2jHGHiYIArgMIAagDQEogeD/BIQBnARBcAUQDeA3BMBAQAhAdAEAdQAPBljhgCIrugJQhTAAAHgGIgFAAQirA2hzA/Qi5BMiRBEQjBBZhYAAQgzAAgPgfg");
	this.shape_30.setTransform(-183.6162,-84.9639);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AvdFNQgqhTD7jYQDwjOGDijIAsgOIAagDQEmghECBTQBmASBcAWQDdA5BLBBQAhAeADAeQANBkjhgFIrtgSQgpgBADgIQgHgEgTADIgFABQipA5hyBDQi3BSiPBHQjDBhhXAAQgwAAgPgdg");
	this.shape_31.setTransform(-182.566,-85.2817);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AvgFFQgphUD/jVQDzjKGFidIAtgNIAZgDQEngbEABWQBmATBcAYQDcA9BKBCQAhAeACAeQAMBljhgJIrtgfQgpgCADgGQgHgFgTADIgFABQipA3h0BAQi4BPiQBGQjCBchYAAQgxAAgPgdg");
	this.shape_32.setTransform(-182.8064,-87.4756);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AvjE8QgnhVEBjQQD2jHGIiWIAtgNIAagCQEmgXEABaQBmAVBbAZQDbBABJBDQAgAfACAeQAKBljhgNIrsgqQgpgCADgHQgHgEgTACIgFABQiqA0h0A/Qi6BMiRBDQjBBZhXAAQg0AAgPgfg");
	this.shape_33.setTransform(-183.0143,-89.6919);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AvmEzQgmhUEFjNQD5jDGKiQIAtgMIAagCQEngSD+BeQBlAWBbAbQDaBDBIBFQAgAfABAeQAJBljhgQIrrg2QgpgDACgHQgGgGgTADIgFABQirAyh1A9Qi7BJiSBBQi/BUhYAAQg2AAgPggg");
	this.shape_34.setTransform(-183.1764,-91.916);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AvoErQglhWEIjIQD8i/GNiKIAtgMIAagBQEngOD8BiQBmAYBaAcQDZBHBHBGQAfAfABAdQAHBmjggTIrrhCQgqgDADgHQgGgFgSACIgFAAQitAwh2A7Qi7BGiTA/Qi9BQhZAAQg4AAgPghg");
	this.shape_35.setTransform(-183.3611,-94.1677);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AvrEiQgjhWELjEQEAi7GNiEIAugLIAagBQEngJD7BmQBlAaBaAdQDYBKBGBHQAeAfABAeQAFBmjggXIrphNQgqgEADgHQgGgGgTACIgEABQitAth4A5Qi8BEiUA8Qi7BLhYAAQg8AAgPgig");
	this.shape_36.setTransform(-183.4716,-96.4364);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AvxEgQgjhWEMjDQEAi5GPiCIAsgLIAagBQEogOD8BYQBmAWBbAZQDZBDBJBEQAgAfACAeQAIBljggPIrsgyQgqgDgCgGQgKgEgVABIgFABQitAsh3A5Qi9BCiUA8Qi6BKhZAAQg8AAgPgjg");
	this.shape_37.setTransform(-184.2315,-92.9681);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("Av3EfQgihWENjCQEBi4GPiAIArgKIAagCQEogSD9BIQBnASBbAXQDcA7BLBCQAhAdADAeQANBljhgHIrugYQhTgCgDgFIgFAAQiuAsh3A4Qi9BBiVA7Qi5BJhYAAQg+AAgPgjg");
	this.shape_38.setTransform(-184.9356,-89.5221);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("Av8EeQgihXEOjAQECi3GQh+IAqgJIAagCQEpgXD7A5QBoAPBcATQDeAzBOA/QAhAdAEAdQAQBljhABIrtACQhTABgPgDIgFAAQiuAqh3A4Qi+BBiVA6Qi5BHhYAAQg+AAgPgjg");
	this.shape_39.setTransform(-185.5423,-86.0648);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AwAEdQgihXEPi+QEDi2GRh8IAogIIAagDQEpgbD7AqQBoALBdAQQDgArBPA8QAjAbAFAeQAUBkjhAJIrtAdQhTAEgagCIgFABQiuAph4A3Qi+A/iVA6Qi4BGhYAAQg/AAgPgkg");
	this.shape_40.setTransform(-186.099,-82.6572);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AwEEeQghhXEQi9QEEi1GRh6IAngHIAagDQEoghD7AcQBoAIBeAMQDhAjBSA5QAjAbAGAdQAYBkjhARIrrA3QhSAHgmAAIgFABQiuAoh5A3Qi+A+iVA5Qi3BEhZAAQhAAAgPgkg");
	this.shape_41.setTransform(-186.5675,-79.3549);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).wait(1));

	// seagull_body
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ax4GoIgBgEQABhWA5g7QApgvAogrQCri5DGiMQBMg3BTgtQA0geA2gaQDMhhDagmIBzgHQANgBAQAAQBCAABEAOQAwAKArAcQBNAxB/AdQAUAKAUAGQB+AnBgh5IEDDNIACAwIAAAdQgBA5gaAtQg5BmhaBCQhZBBhiAqQg8Abg8AUQjUBPjhAIIijgHQjJgRjLgWQg+gFg+gDQi1gHi2AcQg+AOg8AVQg1ATgzABQgvgBgtgPg");
	this.shape_42.setTransform(-166.775,-67.2333);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ax0GZIAAgBIgBgDIAAAAQABhPA0g4IAGgHQAjgnAkgkIAMgNQChinC5iCIAZgRQA+gsBDglIAegQQAkgTAlgSIAigQQC9hWDJglIAdgEIBXgFIAbgCIAdAAQA2AAA4AJIAXAFQAlAJAjATIARAKQBIArByAbIARAEQALAGAMAEIARAFQB1AhBbhmIAMgIIDyC5IAOAQQABAWAAAXIAAACIgBAdQgCAigMAeQgHASgKARQguBMhDA2QgSAQgUAOQhEAvhKAiIguAUQglAQgmANIgsAPQjBBFjLALIgmABIiAgGIghgBQi8gQi+gTIgWgCQg0gFg0gCIgTgBQivgGixAaIgHABQg7ANg5ATIgFACQg0ASgzAAQgvAAgsgPg");
	this.shape_43.setTransform(-168.625,-68.4875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AxwGKIgBAAIgBgDIAAgBQABhNA2g2IAGgHQAkgmAkgkIAMgMQCiiiC6h+IAZgQQA/gqBDgjIAegQQAlgTAlgRIAhgPQC8hSDIgiIAegEIBVgFIAbgBIAdAAQA2ABA3AJIAWAFQAlAJAhATIASAKQBIAoBxAZIARAGIAYAJIAQAEQB0AeBahlIANgCIDyCzIAKASQABAXgBAWIAAACQAAAPgBAOQgDAhgOAdQgJARgKAQQgwBJhEA0IgoAcQhEAshKAgIguAUQglAPglALIgtAPQi/BAjJAKIgmAAIh/gFIghgCQi6gPi8gTIgVgCQg0gEgzgCIgSgBQiugFivAZIgHABQg7AMg4ATIgFABQg0ASgzAAQgtgBgsgOg");
	this.shape_44.setTransform(-170.4917,-69.7375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AwUGKQgsgBgsgNIgBgBIgBgDIAAAAQABhLA3g1IAGgHQAlgmAkgiIANgNQCiicC7h5IAZgQQBAgoBDgiIAegPQAlgSAmgQIAhgPQC7hNDGggIAegDIBUgEIAbgBIAdAAQA1ABA2AJIAWAFQAkAKAhASIARAKQBJAmBwAYIARAFQAMAFAMAEIAQAEQBzAaBZhjIANAEIDzCtIAFAUIAAAsIAAACQAAAPgCAOQgEAggQAcQgJAQgLAQQgyBGhGAxIgoAaQhFAqhKAeIgvASQgkAOglALIgsAOQi+A8jIAIIglgBIh+gFIgggCQi4gOi6gSIgVgCQgzgEg0gCIgRAAQitgFisAYIgIABQg6AMg3ASIgFABQgyARgxAAIgDAAg");
	this.shape_45.setTransform(-172.3375,-71.0118);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AxpFtIgBgEQABhJA4g0QAogoAoglQCpifDDh5QBMgvBRgnQA0gZA1gWQDJhUDYggIBwgHQBRgDBRAOQAvAJAqAYQBMArB9AYQAUAJAVAFQB8AhBehnIEACwQADAhgCAhQAAAxgaAnQg4BXhZA5QhYA4hhAkQg7AYg7AQQjRBEjeAIIihgHQjGgOjJgTQg9gFg9gCQizgGi0AYQg9AMg6ASQg0ARg0AAQgtAAgtgNg");
	this.shape_46.setTransform(-174.1969,-72.2802);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AxrF5IgBgBIgBgDIAAAAQABhLA3g1IAHgGQAkgmAlgiIAMgNQCjiaC7h5IAZgQQBAgnBDgiIAegPQAlgSAmgQIAhgOQC7hNDGgfIAdgDIBVgFIAbAAIAdAAQA1ABA1AKIAXAEQAjAKAhASIARAKQBJAmBwAXIARAGQALAFAMADIARAEQByAaBZhjIAOAFIDyCsIAFAUIAAAtIAAACQgBAOgCAOQgEAggRAbQgJAQgLAQQgxBFhIAxIgnAaQhFAphLAeIguASQgkAOglAKIgsAOQi+A7jIAIIglgBIh9gFIgggCQi4gOi6gSIgVgCQgzgEgzgBIgSgBQisgFisAYIgHABQg6AMg3ASIgFABQg0ARgyAAQgsgBgsgNg");
	this.shape_47.setTransform(-172.7125,-71.2625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AxvGEIAAAAIgBgDIAAgBQABhMA2g2IAGgHQAkgmAkgjIANgMQCiigC6h8IAZgQQA/gpBDgjIAegPQAlgTAmgRIAhgOQC8hQDHgiIAdgDIBVgFIAcgBIAdAAQA1ABA2AJIAXAFQAkAJAhATIASAKQBIAoBxAYIARAFQALAGAMADIARAFQBzAcBahkIANAAIDyCxIAIATQABAWAAAWIAAACIgCAdQgEAhgPAcQgIARgLAQQgwBHhGAzIgnAbQhFAshKAfIguATQglAPglALIgsAPQi/A+jJAJIglAAIh+gFIghgCQi5gPi7gSIgWgCQgzgEg0gCIgSgBQitgFiuAYIgHABQg6AMg4ATIgFABQg0ASgzAAQgsgBgtgOg");
	this.shape_48.setTransform(-171.2417,-70.2375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AxxGRIgBgBIgBgDIAAgBQABhNA1g3IAGgHQAkgnAjgkIANgMQChikC5h/IAagRQA+grBDgkIAfgPQAkgUAlgRIAigPQC8hUDIgjIAegEIBWgFIAbgCIAcAAQA3ABA3AJIAXAFQAkAJAjATIAQAKQBJApBxAaIARAFIAYAJIAQAFQB1AfBahlIANgEIDyC1IALARIABAtIAAACQAAAPgBAOQgDAigNAdQgIARgLAQQguBLhEA1QgUAPgUANQhDAthLAiIguATQglAQgkAMIgtAPQjABCjKAKIgmABIh/gGIgigCQi6gPi9gTIgVgCQg0gEg0gCIgSgBQivgGivAZIgHABQg8ANg3ATIgGACQg0ARgyAAQguAAgsgOg");
	this.shape_49.setTransform(-169.75,-69.2625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ax1GcIAAgBIgBgDIAAAAQABhPA0g4IAGgHQAjgoAjgkIANgNQCgipC5iCIAZgSQA+grBDglIAegRQAkgTAmgSIAhgQQC9hYDJgkIAegFIBWgFIAcgCIAdAAQA2AAA4AJIAXAFQAmAIAiAUIARAKQBIArBzAbIARAFIAXAKIARAFQB1AhBbhmIAMgJIDyC6IAPAPIABAuIAAACIgBAdQgBAigMAfQgHASgKAQQguBNhCA3QgTAQgUAOQhEAvhJAjIguAVQgmAQglANIgtAPQjBBFjLAMIgmABIiAgGIgigBQi8gQi+gUIgWgCIhogGIgTgBQiwgHixAbIgHABQg7AMg5AUIgFACQg1ASgzAAQguAAgtgPg");
	this.shape_50.setTransform(-168.275,-68.2375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46,p:{y:-72.2802}}]},1).to({state:[{t:this.shape_47,p:{y:-71.2625}}]},1).to({state:[{t:this.shape_48,p:{y:-70.2375}}]},1).to({state:[{t:this.shape_49,p:{y:-69.2625}}]},1).to({state:[{t:this.shape_50,p:{y:-68.2375}}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_50,p:{y:-67.2375}}]},1).to({state:[{t:this.shape_49,p:{y:-67.2625}}]},1).to({state:[{t:this.shape_48,p:{y:-67.2375}}]},1).to({state:[{t:this.shape_47,p:{y:-67.2625}}]},1).to({state:[{t:this.shape_46,p:{y:-67.2802}}]},1).to({state:[{t:this.shape_47,p:{y:-67.2625}}]},1).to({state:[{t:this.shape_48,p:{y:-67.2375}}]},1).to({state:[{t:this.shape_49,p:{y:-67.2625}}]},1).to({state:[{t:this.shape_50,p:{y:-67.2375}}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

	// back_legs
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#663300").s().p("Ah4ChIADgGIAFgMQAahIAZhRIAOgwQAkhWAZhgIAngDIg6DaQgNBFgTAtIA7AFIBJAFIhIAWIAYAOIBKAsIh3gOIBBBPg");
	this.shape_51.setTransform(-182.275,-10.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#663300").s().p("AhzCEIAEgGIAHgLQAmhDAfhNQAMgXAIgWQAohRAjhfIAnABQgsB9ghBXQgUBDgZAqQAgANAdAJIBGAVIhLAGIAVATIA+A7IhxgnIAvBbg");
	this.shape_52.setTransform(-186.85,-10.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#663300").s().p("Ah9BpIAFgGIAJgJQAxg8AmhKQANgVAJgTQAvhOAqhbIAnADQg2B6gnBTQgbBCggAlQAfAaAbAPIBAAjIhLgLIAQAYIAxBHIhlg/IAaBjg");
	this.shape_53.setTransform(-189.6,-11.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AiOBPIAFgFIAKgHQA7gzAshGQAQgTAJgRQA2hJAxhYIAnAGQg/B1gvBQQghA+gmAgQAcAnAXAUIA2AwIhGgaIAKAaIAhBQIhWhTIAFBmg");
	this.shape_54.setTransform(-191.3,-13.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#663300").s().p("AidA3IAGgDIAMgFQBAgpA0hCQASgRAJgNQA8hGA4hTIAmAKQhJBug0BNQgoA5grAbQAVAxATAZIAqA7Ig/gpIAFAcIAPBVIhDhiIgRBkg");
	this.shape_55.setTransform(-192.875,-15.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#663300").s().p("AhwBOIAGgDIALgHQA9guAshHQASgRgDgDQAchYAVhiIAngGQgaCDgTBaQgYBBgzAaQAYAwAVAXIAwA2IhDgiIAHAbIAWBUIhKheIgIBng");
	this.shape_56.setTransform(-188.275,-14.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#663300").s().p("AhmBZIAFgEIAKgHQA5gzAnhLIAGgIIAAABQAGgJgGAIQgGhbgShiIAhgTQAbCCAQBaQgIBBg7AhQAcAtAXAWIA0AxIhGgcIAKAaIAdBRIhRhWIAABng");
	this.shape_57.setTransform(-179.925,-15.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#663300").s().p("AhpBUIAFgFIAJgHQA1g4AghNIABgCIAFAKQAGgcgLASQgmhNg0hQIAYgfQBJBuAyBPQAHA9hBApQAfArAZAUIA4AtIhIgXIAMAaIAkBOIhYhPIAHBmg");
	this.shape_58.setTransform(-171.325,-18.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#663300").s().p("AhSBBIAFgFIAIgJQAtg4AZhLIAPAOQAAgsgMAVIgDAJQg9g1hJgzIAKgmIC4CAQAUAzhFA4QAkAnAaASIA8AoIhKgQIAPAYIAqBMIhghHIASBkg");
	this.shape_59.setTransform(-167.45,-21.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663300").s().p("AhBAkIAFgFIAHgJQAmg3ARhGIAgALQgRg3gKAXIgFAVQhHgXhQgSIgGgmQCDAaBZAVQAbAohEBIQAoAkAbAOIBBAjIhMgKIARAYIAwBHIhmg+IAaBjg");
	this.shape_60.setTransform(-165.85,-25.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#663300").s().p("AgfA+IAEgFIAFgLQAahBgVhUIAQAGQgQgkgBAZIABAFQhNgghYgZIgDgoIDYA9QAnArglBNQA9AxAbAOIBBAhIhMgIIARAYIAzBGIhng8IAcBig");
	this.shape_61.setTransform(-162.55,-24);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663300").s().p("AAGBKIABgGIADgLQAOhBhAhMIgDgIIADABQgGgMADALQhRgohdghIAAgnQB+ArBXAfQAyAqgHBFQBVA2AdANIBBAgIhMgGIASAWIA1BFIhpg5IAgBhg");
	this.shape_62.setTransform(-159.1,-23.525);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#663300").s().p("AAqBHIABgFIABgKQAAg7higyQgQgUgGAAQhPgthdgoIADgnQB6AzBWAlQA7AjAUA0ICMA+IBDAeIhMgEIASAWIA2BDIhqg2IAiBhg");
	this.shape_63.setTransform(-156.025,-24.275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#663300").s().p("ABIA3IAAgFIgBgIQgKgxh5gOIgtgXQhMgzhagtIAFgmIDKBjQBCAbAnAbQCHAjAdAMIBDAcIhMgCIATAVIA4BCIhsgzIAlBgg");
	this.shape_64.setTransform(-153.675,-26.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#663300").s().p("ABbAdIgBgDIgCgGQgQgliCAcQgYgEgrgQQhJg3hXgzIAHgmQBzBBBRAvQBEAQAxgEQCZAPAdALIBEAZIhMAAIATAVIA6BAIhtgwIAnBfg");
	this.shape_65.setTransform(-152.275,-28.575);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#663300").s().p("AA5BXIgBgFIgBgJQgLgxh5gLQgWgMghgbQg4hJhFhJIASgjQBdBfA/BDQA9AmAuANQCIAhAdALIBEAbIhMAAIATAUIA6BBIhtgxIAmBeg");
	this.shape_66.setTransform(-155.125,-22.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#663300").s().p("AAGCBIABgGIAAgKQgCg7hkguQgRgRgWgiQgghXguhZIAbgcQA+B1AqBSQAuA1AmAeICOA5IBEAbIhMgBIATAVIA5BAIhsgwIAmBdg");
	this.shape_67.setTransform(-159.55,-18.15);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().p("Ag2CXIABgGIADgLQAIhChFhGQgJgXgLglQgGhbgUhjIAigUQAbCDARBaQAcBBAYApQBYAxAdAMIBDAbIhLgBIATAUIA5BBIhtgxIAmBfg");
	this.shape_68.setTransform(-165.125,-14.85);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("AhqCYIACgGIAFgLQAVhFgfhTQgCgZACgjQAThZAJhlIAmgKQgKCEgKBdQAHBGAHAvQA/AsAdAMIBEAaIhMgBIATAWIA5BAIhtgxIAmBfg");
	this.shape_69.setTransform(-172.7375,-13.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51}]}).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_51}]},1).wait(1));

	// back_wing
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AGMDPQhdAFhoALIgXgKQhVgpg2ggIgqgRQkThkjDgTQkig+AvhUQAvhTE6gOQDNgIDhAsIAvAKQBdAbBcA2QDnBwCjBzQgCA6AcAmIAAAFQACAPgLALQhcgrjkAIg");
	this.shape_70.setTransform(-177.9809,-111.1546);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AGQDKQhdAHhoAOIgWgJQhYgog2geIgqgPQkWhdjDgLQkjg3AshVQArhUE6gXQDNgODjAlIAvAIQBeAaBdAyQDqBpCmBvQAAA6AcAlIABAGQADANgMAMQhdgnjjAOg");
	this.shape_71.setTransform(-178.3916,-109.6804);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AC5DSQhYglg3gdIgrgNQkXhVjEgGQklgtAqhXQAohVE5ghQDNgUDkAfIAvAHQBeAWBfAwQDtBiCpBrQADA6AcAjIABAGQADANgLANQhegljiAVQhfAJhmASg");
	this.shape_72.setTransform(-178.7572,-107.721);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AC9DNQhZgjg4gaIgsgNQkZhMjEAAQkmgmAohWQAmhXE4gqQDMgaDkAYIAwAFQBeAUBhAtQDvBbCtBmQADA6AeAjIABAGQADANgKAMQhfghjiAbQhdAMhnAUg");
	this.shape_73.setTransform(-179.0756,-105.6635);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("ADCDIQhbgfg4gaIgsgLQkbhEjEAGQkngcAkhYQAkhYE2gzQDMggDlAQIAvAFQBgAQBhArQDyBUCvBhQAGA6AeAiIACAGQAEANgLAMQhfgejiAhQhdAPhmAXg");
	this.shape_74.setTransform(-179.3177,-103.6557);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AC+DMQhagig3gaIgsgNQkahKjEABQkmgkAnhXQAlhXE4gsQDMgbDlAXIAvAFQBfATBhAsQDwBaCtBlQAEA6AeAjIABAGQADANgLAMQheghjiAdQheAMhmAVg");
	this.shape_75.setTransform(-179.1396,-105.2614);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AC7DQQhZgkg3gcIgrgNQkZhSjEgDQklgrAphWQAohXE4gjQDNgXDjAcIAwAGQBeAWBgAuQDuBgCqBpQADA6AdAjIABAGQADANgLAMQhdgkjjAYQheAKhnATg");
	this.shape_76.setTransform(-178.8888,-106.8762);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AC4DUQhZgmg2gdIgrgOQkXhYjDgIQklgxArhWQAqhWE5gcQDNgRDkAhIAvAHQBeAYBeAwQDsBlCoBtQABA6AdAkIABAGQACANgLAMQhdgmjjATQheAHhnARg");
	this.shape_77.setTransform(-178.6274,-108.564);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AGQDLQheAGhoAOIgWgJQhXgpg2geIgrgPQkUhejEgNQkjg4AthVQAshUE6gWQDNgMDjAmIAuAJQBeAaBdAyQDqBrClBwQAAA6AcAlIABAGQACANgLAMQhdgojjANg");
	this.shape_78.setTransform(-178.304,-109.969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70}]}).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_70).to({_off:true},1).wait(8).to({_off:false},0).wait(11));

	// saegull_head
	this.instance = new lib.angryseagullhead_1();
	this.instance.setTransform(-65.6,-96.75,0.8654,0.8654,8.2354,0,0,24.6,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:14.9311},0).wait(1).to({x:-69.35},0).wait(1).to({x:-72.35,y:-95.25},0).wait(1).to({regX:0,regY:0,rotation:8.2354,x:-97.15,y:-90.7},0).wait(1).to({x:-95.65},0).wait(1).to({x:-94.15},0).wait(1).to({x:-92.65},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:4.2692,x:-90.5,y:-88.55},0).wait(1).to({regX:24.6,regY:-12.1,rotation:8.2354,x:-65.6,y:-96.75},0).wait(1).to({x:-67.1,y:-95.25},0).wait(1).to({x:-69.35,y:-93},0).wait(1).to({x:-70.85,y:-91.5},0).wait(1).to({x:-72.35,y:-90.75},0).wait(1).to({regX:0,regY:0,x:-97.15,y:-85.7},0).wait(1).to({x:-95.65},0).wait(1).to({x:-93.4},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:13.2198,x:-91.25,y:-89.5},0).wait(1).to({x:-89.75},0).wait(1).to({regX:0,regY:0,rotation:8.2354,x:-88.15,y:-89.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295,-141.4,402.1,168.8);


(lib.seagullTumble = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// frontleg
	this.instance = new lib.seagull_foot();
	this.instance.setTransform(-226.3,130.65,0.6081,0.7825,0,78.6991,-109.7589,14.7,-51.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AAVB6QAYgdAGgeQAYhpi+hzIBPAAQCjBggMB8QgEAtgcAyg");
	this.shape.setTransform(-217.4842,118.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// beak
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Al4ACICShKQFPguEQCAIgegDQm5ADiIBLg");
	this.shape_1.setTransform(-39.275,20.2704);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// wing
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("APtDkQkDgMpeggQpcghmIAJQmIAJgDhsQgDhrFxhmQFxhlH/AaQH+AZFxBnQFvBmALB1QAKBpjSAAIgvgBg");
	this.shape_2.setTransform(-252.9038,31.1785);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// head
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AhGgoIBEAiIhNA7AA3g0Ig5AuIBSAp");
	this.shape_3.setTransform(-98.45,13.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjQDgQgZgJgtghQhqhOA1iGQA1iHAuglQAtgkA2gMQA3gMB6AAQB+AABaBDQAZASARAUQAwA3AABFQAABEgwA2QgRAUgZASIgUAOQhTA1jHAxQhOAUgqAAQg7AAANgngAhugwIBMg8IhEgjIBEAjgAgihsIBSAqIhSgqIA6gvIg6Avg");
	this.shape_4.setTransform(-95.2806,23.8068);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// body
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AEEGjQiPgLm/hNQnBhMlMA6QlNA5DYjRQDZjQHAjjQHAjjInB5QInB6AOhbQAPhaBEAsQBFArBXBkQBKBUAABhQAADUlgCVQjABSjrAlQhXAOhcAAQgwAAgwgEg");
	this.shape_5.setTransform(-229.8281,69.0599);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// backwing
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AIbJ+QigiYl0lmQlyllkKjWQkKjXBbg/QBbg/FMCVQFLCVE6EtQE8EtCZEIQCaEJheBIQgfAXglAAQhOAAhshmg");
	this.shape_6.setTransform(-190.663,1.5736);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// backleg
	this.instance_1 = new lib.seagull_back_foot();
	this.instance_1.setTransform(-157.75,119.45,0.5925,0.7944,0,90,-90,5,-51.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AAUCKQAcghAHgjQAYhxi+h7IBOAAQCoBpgaCDQgJAughAzg");
	this.shape_7.setTransform(-168.2517,118.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seagullTumble, new cjs.Rectangle(-378.1,-72.4,376.5,219.20000000000002), null);


(lib.seagullFly = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {seagullFlyLeft:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_5 = function() {
		this.gotoAndPlay("seagullFlyLeft");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// exitarea
	this.exitArea = new lib.exitarea();
	this.exitArea.name = "exitArea";
	this.exitArea.setTransform(-182.6,15.8,1,1,0,0,0,5,-5);

	this.timeline.addTween(cjs.Tween.get(this.exitArea).wait(6));

	// foot_front
	this.instance = new lib.seagull_foot();
	this.instance.setTransform(-124.95,30.3,1,1,0,48.7039,-131.2961,0,-74.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AACgCIgDAF");
	this.shape.setTransform(11.4,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:11.4,y:-14.9}},{t:this.instance,p:{regX:0,regY:-74.8,scaleX:1,scaleY:1,skewX:48.7039,skewY:-131.2961,x:-124.95,y:30.3}}]}).to({state:[{t:this.shape,p:{x:11.4,y:-14.9}},{t:this.instance,p:{regX:0.1,regY:-74.7,scaleX:0.9999,scaleY:0.9999,skewX:48.7046,skewY:-131.2954,x:-123.8,y:32.25}}]},1).to({state:[{t:this.shape,p:{x:7.475,y:-23.1}},{t:this.instance,p:{regX:0.1,regY:-74.8,scaleX:0.9999,scaleY:0.9999,skewX:44.4399,skewY:-135.5601,x:-125.15,y:31.95}}]},1).to({state:[{t:this.shape,p:{x:7.475,y:-23.1}}]},2).wait(2));

	// wing_front
	this.instance_1 = new lib.seagullwing_front();
	this.instance_1.setTransform(-40.85,-28.3,1,1,0,0,0,250.5,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:250.4,rotation:8.1839,x:-40.95},0).wait(1).to({regX:250.5,rotation:24.9524,x:-40.9},0).wait(2).to({regX:250.4,rotation:-35.0474,x:-35.1,y:-48.15},0).wait(2));

	// seagull_body
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ax4GoIgBgEQABhWA5g7QApgvAogrQCri5DGiMQBMg3BTgtQA0geA2gaQDMhhDagmIBzgHQANgBAQAAQBCAABEAOQAwAKArAcQBNAxB/AdQAUAKAUAGQB+AnBgh5IEDDNIACAwIAAAdQgBA5gaAtQg5BmhaBCQhZBBhiAqQg8Abg8AUQjUBPjhAIIijgHQjJgRjLgWQg+gFg+gDQi1gHi2AcQg+AOg8AVQg1ATgzABQgvgBgtgPg");
	this.shape_1.setTransform(-127.175,-7.8333);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AwcG4IgBgEQABhZA1g+QAlgxAlgsQCdjAC3iRQBFg6BMguQAxgfAxgbQC8hlDIgnIBqgIQAMgBAOABQA9gBA/APQAsALAnAdQBHAzB1AdQASALATAGQB0AoBYh9IDuDVIACAyIAAAeQgBA7gYAvQg0BphTBFQhSBDhaAsQg3Acg4AUQjDBSjOAJIiWgIQi5gRi6gXQg5gFg5gDQingHioAdQg5AOg2AWQgxAUgwAAQgrAAgpgQg");
	this.shape_2.setTransform(-123.225,-13.8833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ax4HWIgBgEQABhfA5hCQApg0AogwQCrjNDGicQBMg9BTgyQA0ghA2gcQDMhsDagqIBzgIQANgBAQAAQBCAABEAPQAwAMArAfQBNA2B/AgQAUAMAUAGQB+ArBgiGIEDDkIACA1IAAAgQgBA/gaAyQg5BxhaBKQhZBHhiAvQg8Aeg8AWQjUBXjhAKIijgIQjJgTjLgYQg+gGg+gDQi1gIi2AfQg+APg8AYQg1AVgzABQgvgBgtgRg");
	this.shape_3.setTransform(-127.175,-7.8333);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AxZIXIgBgFQgJhfA0hHQAng9AhguQCVjZC5ivQBHhEBNg5QAtgkA4gkQDDh/DUg8IBwgTIAdgDQBBgGBGAJQAxAHAtAbQBVAvB+AUQAYAKASAEQCCAfBTiNIEXDKIAJBVQAFA/gVA2QguB0hTBSQhUBQhcA3Qg8Alg3AZQjMBrjeAeIijAGQjngBivgFQhIAAg0ADQi0AJi0AvQhEAYgxAbQg1AZgyAGIgTAAQgmAAgkgJg");
	this.shape_4.setTransform(-118.995,-16.0313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},2).wait(2));

	// foot_back
	this.instance_2 = new lib.seagull_back_foot();
	this.instance_2.setTransform(-120,32.6,1,1,0,45,-135,-29.7,-46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:-46.5,skewX:59.9984,skewY:-120.0016,x:-120.15,y:32.65},0).wait(1).to({skewX:39.2738,skewY:-140.7262,x:-120.05},0).wait(2).to({skewX:74.9821,skewY:-105.0179,x:-120.1,y:32.7},0).wait(2));

	// wing_back
	this.instance_3 = new lib.seagullwing_back();
	this.instance_3.setTransform(-53.6,-42.65,1,1,7.7327,0,0,134.7,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:17.958,x:-53.55,y:-42.6},0).wait(1).to({regX:142.3,regY:-8.8,rotation:13.9374,x:-40.95,y:-43.2},0).wait(2).to({regX:142.2,rotation:-56.252,x:-44.9,y:-47.2},0).wait(2));

	// saegull_head
	this.instance_4 = new lib.angryseagullhead();
	this.instance_4.setTransform(-53.8,-18.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:-22.15},0).wait(1).to({x:-54.8,y:-25.15},0).wait(2).to({x:-52.8},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.4,-158.9,357.9,275.8);


(lib.mainSeagull_flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rightWing
	this.instance = new lib.seagullWing();
	this.instance.setTransform(140.95,-288.3,1,1,0,0,0,11.9,90.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:90.2,rotation:52.225,x:141.05,y:-288.4},13,cjs.Ease.quartIn).to({regY:90.3,rotation:0,x:140.95,y:-288.3},26,cjs.Ease.quadIn).wait(1));

	// feet
	this.instance_1 = new lib.seagull_feet_tween("synched",0);
	this.instance_1.setTransform(199.75,-215.7,1,1,0,0,0,-55.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-55.6,regY:0.5,rotation:-8.2236,x:199.05,y:-216.35},13,cjs.Ease.bounceIn).to({regX:-55.2,regY:3.5,rotation:0,x:199.75,y:-215.7},26,cjs.Ease.bounceOut).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJHWQjYAAi9gYQj8ghjMhLQieg8hXhFQhwhYAAhpQAAhsBChkQBCgeBFgcQgOgigdgeIAFgKQBDgSBDgcIArgGIALgNIAKgGQBBgnBFgjQADALAGALQAEAJARAWQAQAWANAMQAVAVAZAIQAYAIAUgFIgYAeQBcgjBsgPQD/ghFcBTQHyB2EJDeQEIDeAFAXQAEAWhwgEQhwgFidA8QljCEn1AAIgEAAg");
	this.shape.setTransform(210.1319,-262.6625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

	// head
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("Al0BmQCBiXFrg0ID9BmIidBkIAAABQkmhdkmBdg");
	this.shape_1.setTransform(47.075,-304.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAaQgNgKAAgOIAAgDQAAgOANgLQAPgLATAAQAUAAAOALQAOALABAOIAAADQgBAOgOAKQgOAMgUAAQgTAAgPgMg");
	this.shape_2.setTransform(94.3,-316.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjVCiIhYg1ICdhkIj9hlQAPhCBGhFQBUhUBsgcQAzgNA5AAQA4AAAzANQBrAcBUBUQApAoAbAuQAeAyAOA3QhGAshCAyQhtBShjBgIgLALIgKAVIgqALQhDAshEAdQAiiBhng9gAhPiPQgOAOAAATIAAADQAAATAOAOQAOAOAUAAQAUAAAOgOQANgOABgTIAAgDQgBgTgNgOQgOgOgUAAQgUAAgOAOg");
	this.shape_3.setTransform(98.875,-305.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.8,-369.4,355.09999999999997,254.59999999999997);


(lib.lipSyncLouie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {L:0,M:1,"Oh":4,D:13,S:16,Woo:21,"Oh":24,"L":26,"Oh":29,R:31,"L":33,"S":35,"Oh":41,"M":53,"Oh":57,Ee:62,"D":67,Neutral:69,"Neutral":71};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		createjs.Sound.stop("music");
		createjs.Sound.play("lipsync");
	}
	this.frame_71 = function() {
		this.stage.getChildAt(0).louie.visible = false;
		this.stage.getChildAt(0).land_background_mc.visible = false;
		this.stage.getChildAt(0).beach_background_mc.visible = true;
		this.stage.getChildAt(0).mainSeagull_mc.visible = true;
		this.stage.getChildAt(0).lipSyncLouie.visible = false;
		
		this.stage.getChildAt(0).mainSeagull_mc.gotoAndPlay(451);
		createjs.Sound.play("music");
	}
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(70).call(this.frame_71).wait(14).call(this.frame_85).wait(1));

	// mouth
	this.instance = new lib.mouth("single",4);
	this.instance.setTransform(-2.15,-333.5,1,1,0,0,0,21.5,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(9).to({startPosition:1},0).wait(3).to({startPosition:1},0).wait(5).to({startPosition:6},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(6).to({startPosition:5},0).wait(12).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(5).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14));

	// Louie
	this.instance_1 = new lib.glasses_frames("synched",0);
	this.instance_1.setTransform(-4.7,-389.35,1,1,0,0,0,67.8,-15.2);

	this.instance_2 = new lib.glasses_lens("synched",0);
	this.instance_2.setTransform(-38.95,-388.15,1,1,0,0,0,30.2,-14);
	this.instance_2.alpha = 0.5313;

	this.instance_3 = new lib.glasses_lens("synched",0);
	this.instance_3.setTransform(33,-394.8,1,1,0,0,0,30.3,-14);
	this.instance_3.alpha = 0.5313;

	this.instance_4 = new lib.stick_birds_flying();
	this.instance_4.setTransform(32.45,-395.8,0.0399,0.0399,-1.3817,0,0,54.3,-15);

	this.instance_5 = new lib.stick_birds_flying();
	this.instance_5.setTransform(-36.15,-391.35,0.0399,0.0399,-6.6791,0,0,52.1,-14.1);

	this.instance_6 = new lib.CachedBmp_4550();
	this.instance_6.setTransform(-183.1,-496.55,0.2176,0.2176);

	this.instance_7 = new lib.CachedBmp_4551();
	this.instance_7.setTransform(-183.1,-496.55,0.2176,0.2176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_7},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},72).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.1,-496.5,366.29999999999995,994.1);


(lib.laughMouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// teeth
	this.instance = new lib.teeth("synched",0);
	this.instance.setTransform(-36.95,-26.15,1.11,0.8742,8.2293,0,0,29.6,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tongue
	this.instance_1 = new lib.tongue("synched",0);
	this.instance_1.setTransform(-49.7,17,1,1,0,0,0,28.2,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mouth
	this.instance_2 = new lib.mouthopening("synched",0);
	this.instance_2.setTransform(-44,-5.45,1,1,0,0,0,48.4,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.laughMouth, new cjs.Rectangle(-106,-33.3,123.2,55.099999999999994), null);


(lib.handSlap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.louieHandSlap();
	this.instance.setTransform(-632.1,159.05,1,1,-8.9646,0,0,241.6,173.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:241.5,regY:173.5,scaleX:0.7518,scaleY:0.7518,rotation:-8.9643,x:-632.15,y:159.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-898.7,-51,538,424);


(lib.frontarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8406();
	this.instance.setTransform(13.8,-88.55,0.4868,0.4868);

	this.instance_1 = new lib.soda();
	this.instance_1.setTransform(107.8,-91.15,0.2685,0.2685,-37.4664,0,0,-79,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frontarm, new cjs.Rectangle(13.8,-133.4,128.5,119.4), null);


(lib.seagullWalk_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {seagullWalk:0,"seagullFlyLeft":20,seagullFlyRight:21};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay("seagullWalk");
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.gotoAndPlay("seagullFlyLeft");
	}
	this.frame_33 = function() {
		this.gotoAndPlay("seagullFlyRight");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(6).call(this.frame_27).wait(6).call(this.frame_33).wait(1));

	// front_foot
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC6600").s().p("AhCBNIADgJIADgEQAQguAxg6QAUgcAFgXIAPgCQgHA5gKApIgFARQAWggAhgPIAUgIQAkgIAuAGIAEABIhCAsIBeA1IhegCIAqBdgAjThUQBMgUBSghQBJgZAfANIAAABIgEAqQAJALgBABIgKABIACgNIgRgVQAFAQgFAUQheANhvAbg");
	this.shape_79.setTransform(-142.95,-32.4253);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC6600").s().p("AguBMIAEgJIACgEQAPgvAhg5QARgmgFgfIAJACIgSgcQAGAMADAOQhlgNh6gCIgcgqQCeACBxADIAAABQAGBdgHA/QAAAKAGAVQAaggAhgLIAVgIQAkgEAtAKIAFABIhFAmIBaA9IhfgJIAjBgg");
	this.shape_80.setTransform(-140.1,-25.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC6600").s().p("AghBrIAEgIIABgEQAZhWgLhmIALADIgMgUIAAAAIAAAAIABARQhegmh1ghIgQgvQCZApBsAgQASBbADA/QACAKARAkQAbgfAjgJIAVgFQAkgDAtANIAEACIhIAiIBWBEIhegRIAcBig");
	this.shape_81.setTransform(-137.925,-21.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC6600").s().p("AgaCGIADgJIABgEQAWhWgshtIABABIgFgJIgBgDIABADIAEAIQhVg/hthAIgEgyQCJBOBiA7IAAAAQAeBYANA9QACALAdAvQAegbAjgIIAVgDQAlAAArAQIAFACIhLAdIBQBJIhcgWIAVBjg");
	this.shape_82.setTransform(-136.575,-17.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC6600").s().p("AgXCZIACgJIACgDQAShXhTh2QAAgBgBAAQAAAAAAAAQAAABAAABQABAAAAACQhChThbhbIAJgwQByBtBPBSIAAAAQAsBSAUA7QAEAKApA8QAfgaAkgFIAWgCQAkADAqAUIAFACIhNAXIBLBOIhagdIANBlg");
	this.shape_83.setTransform(-136.35,-14.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC6600").s().p("AhRCgIAEgIIACgEQAlhSgwiFQAAgBAAAAQAAgBAAABQAAAAAAAAQAAABAAABQgohig8hxIAWgsQBNCKA1BlIAAAAQAVBaAGA/QABALAXA8QAjgUAlACIAVACQAkAJAlAaIAEADIhPAKIA8BaIhUgsIgEBmg");
	this.shape_84.setTransform(-142.55,-9.875);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC6600").s().p("AiECXIAGgHIADgDQA3hKgJiLQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAABQgJhqgah9IAigkQAiCaAWBwIAAAAQgDBcgMA/QgBAKAJA7QAlgOAjAHIAWAGQAgAPAiAhIADADIhQgEIAsBjIhLg5IgVBjg");
	this.shape_85.setTransform(-150.6,-7.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC6600").s().p("Ah+B+IAIgGIADgDQBHg9AdiGQABgDgCADQAVhoALiAIArgYQgMCdgLByIgBAAQgZBZgbA4QgDALgFA0QAngIAhAOIAVAKQAdAUAbAlIADAFIhOgSIAaBpIhAhFIglBeg");
	this.shape_86.setTransform(-164.4,-6.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC6600").s().p("AiYBWIAJgFIADgBQBUgtA/h3QAAgBABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAzhdAvh3IAwgLQg4CTgsBqIAAAAQgwBOgoAxQgHAJgNArQAogBAeAUIASAMQAZAZAVAqIACAEIhKgeIAHBsIgxhQIg2BXg");
	this.shape_87.setTransform(-174.05,-7.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC6600").s().p("AhvC7IhEBLIgXjoIAKgCIAEgBQBcgbBehfIABgCQBKhLBQhkIAyADQhhB8hIBZIAAAAQhDBAg0AkQgHAHgVAhQAoAHAbAYIAPAPQAVAdAMAtIABAEIhCgqIgLBrg");
	this.shape_88.setTransform(-179.625,-10.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC6600").s().p("AiDC3IhLBFIgCjoIAJgCIAFAAQBcgWBfhkIACgDQBQhGBVhfIAxAHQhoB2hOBTIAAABQhDA/g0AkQgIAGgZAnQAnAKAZAaIAOARQATAfAIAtIABAFIg/gxIgVBrg");
	this.shape_89.setTransform(-181.075,-10.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC6600").s().p("AiPCzIhRA+IASjnIAKAAIAFgBQBcgRBghoIADgEQBUhBBchZIAwAKQhvBvhTBPIAAAAQhDBAg1AiQgIAHgdArQAmANAWAcIANASQAQAhADAuIABAFIg7g2IgeBog");
	this.shape_90.setTransform(-183.4,-10.575);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC6600").s().p("AiaCuIhVA3IAmjkIAJAAIAEAAQBcgNBihsIAFgEQBYg7BihUIAvANQh2BohYBJIAAABQhDA+g1AjQgIAHgjAuQAlARATAeIALATQANAiAAAvIAAAEIg2g7IgnBmg");
	this.shape_91.setTransform(-185.8,-10.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC6600").s().p("AilCoIhaAvIA7jcIAJAAIAEAAQBbgJBkhxIAHgEQBbg2BnhNIAvAQIjZCjIAAABQhEA+g1AjQgIAHgpAxQAjAVARAfIAJAUQAKAjgEAuIgBAFIgwhAIgwBig");
	this.shape_92.setTransform(-188.175,-11.375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC6600").s().p("AivCiIheAnIBOjWIAIABIAFAAQBZgEBnh1IAIgFQBggvBqhHIAuATQiDBYhfA9IgBABQhEA+g2AiQgIAHguA1QAhAXAOAhIAHAUQAHAkgIAuIgBAFIgrhFIg4Bdg");
	this.shape_93.setTransform(-190.475,-12);
	this.shape_93._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79}]}).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[]},1).to({state:[]},2).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(14).to({_off:false},0).wait(5).to({_off:true},1).wait(14));

	// foot_front
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AACgCIgDAF");
	this.shape_94.setTransform(-119.1,-14.9);

	this.instance_1 = new lib.seagullFly();
	this.instance_1.setTransform(-0.05,0,1,1,0,0,0,-107.1,-2.5);

	this.instance_2 = new lib.seagull_foot();
	this.instance_2.setTransform(-124.95,30.3,1,1,0,48.7039,-131.2961,0,-74.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(1,1,1).p("AgBgCIADAF");
	this.shape_95.setTransform(-226.4,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94}]}).to({state:[{t:this.shape_94}]},9).to({state:[{t:this.shape_94}]},5).to({state:[{t:this.shape_94}]},5).to({state:[{t:this.instance_1,p:{regX:-107.1,skewY:0,x:-0.05}}]},1).to({state:[{t:this.instance_1,p:{regX:-107,skewY:180,x:-0.1}}]},1).to({state:[{t:this.shape_94},{t:this.instance_2,p:{regX:0,regY:-74.8,scaleX:1,scaleY:1,skewX:48.7039,skewY:-131.2961,x:-124.95,y:30.3,rotation:0}}]},1).to({state:[{t:this.shape_94},{t:this.instance_2,p:{regX:0.1,regY:-74.7,scaleX:0.9999,scaleY:0.9999,skewX:48.7046,skewY:-131.2954,x:-123.8,y:32.25,rotation:0}}]},1).to({state:[{t:this.shape_94},{t:this.instance_2,p:{regX:0.1,regY:-74.8,scaleX:0.9999,scaleY:0.9999,skewX:44.4399,skewY:-135.5601,x:-125.15,y:31.95,rotation:0}}]},1).to({state:[{t:this.shape_94}]},2).to({state:[{t:this.shape_95,p:{x:-226.4,y:-14.9}},{t:this.instance_2,p:{regX:0,regY:-74.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-90.05,y:30.3,rotation:-48.7039}}]},2).to({state:[{t:this.shape_95,p:{x:-226.4,y:-14.9}},{t:this.instance_2,p:{regX:0.1,regY:-74.7,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0,x:-91.2,y:32.25,rotation:-48.7046}}]},1).to({state:[{t:this.shape_95,p:{x:-222.475,y:-23.1}},{t:this.instance_2,p:{regX:0.1,regY:-74.8,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0,x:-89.85,y:31.95,rotation:-44.4399}}]},1).to({state:[{t:this.shape_95,p:{x:-222.475,y:-23.1}}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(19).to({_off:true},1).wait(2).to({_off:false,x:11.4},0).wait(2).to({x:7.475,y:-23.1},0).wait(2).to({_off:true},2).wait(6));

	// front_wing
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#666666").s().p("AwiC8QgShbEriPQEdiIGgg5IA/AAQErAGD0AmQBnARBcAVQDeA3BLBAQAhAdAEAdQAPBljhgCIrugLIiRgFQizAMh/AjQjFAeieAhQiKAbhUAAQh1AAgMg0g");
	this.shape_96.setTransform(-189.032,-101.9699);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AwdDNQgWhaEniYQEZiRGehFIBAgCQEqgBD2AlQBnAPBcAUQDeA0BNA+QAiAdAEAeQAQBkjhAAIruABQhUABg0gDIgFAAQixARh/AnQjFAkicAlQiWAjhWAAQhnAAgMgxg");
	this.shape_97.setTransform(-188.67,-97.3379);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("AwYDfQgYhaEhigQEViaGchRIBAgEQEqgID3AkQBnAOBdASQDfAwBOA+QAiAcAEAdQASBljhADIruANQhUABgwgCIgFAAQixAYh9ApQjEAriaApQihAqhXAAQhbAAgNgtg");
	this.shape_98.setTransform(-188.2537,-92.7721);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666666").s().p("AwTDxQgahZEcipQERiiGYhdIBBgGQEqgPD4AiQBnAMBdARQDgAtBPA8QAiAcAFAeQATBjjhAIIrtAXQhUADgsgBIgFAAQixAdh7AtQjCAxiaAuQioAxhYAAQhSAAgOgqg");
	this.shape_99.setTransform(-187.8099,-88.2869);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#666666").s().p("AwNEEQgdhZEXixQELirGWhpIBBgIQEpgVD6AgQBnALBdAPQDhAqBQA7QAiAbAGAdQAUBkjhALIttAmQivAih7AxQjBA3iXAzQivA5hZAAQhJAAgPgng");
	this.shape_100.setTransform(-187.2759,-83.8443);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#666666").s().p("AwEETQgghXESi6QEGiyGTh1IAogHIAagCQEpgYD6ArQBoAMBdAQQDfAtBQA8QAiAcAFAeQATBjjhAIIrtAYQhTADgdgCIgFABQiuAmh5A1Qi/A8iXA3Qi0BBhZAAQhDAAgOglg");
	this.shape_101.setTransform(-186.4432,-84.1059);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#666666").s().p("Av7EiQgjhXENjBQEAi5GQiBIApgJIAagCQEpgaD8A1QBnANBdASQDfAwBOA9QAiAdAFAdQARBkjhAEIrtAOQhTABgRgDIgFABQiuAsh3A4Qi9BCiVA7Qi5BJhZAAQg9AAgOgjg");
	this.shape_102.setTransform(-185.5333,-84.3823);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#666666").s().p("AvxExQgmhWEHjJQD8jAGLiMIArgLIAZgCQEogdD/A/QBnAPBcATQDeAzBOA/QAiAdADAdQAQBljhAAIrtADQhTABgFgFIgFABQisAxh2A7Qi7BHiTBAQi+BQhYAAQg4AAgOggg");
	this.shape_103.setTransform(-184.6059,-84.6605);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#666666").s().p("AvnE/QgohUEBjRQD2jHGHiYIArgMIAagDQEogeD/BIQBnARBcAUQDeA3BMBAQAhAdAEAdQAPBljhgCIrugJQhTAAAHgGIgFAAQirA2hzA/Qi5BMiRBEQjBBZhYAAQgzAAgPgfg");
	this.shape_104.setTransform(-183.6162,-84.9639);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#666666").s().p("AvdFNQgqhTD7jYQDwjOGDijIAsgOIAagDQEmghECBTQBmASBcAWQDdA5BLBBQAhAeADAeQANBkjhgFIrtgSQgpgBADgIQgHgEgTADIgFABQipA5hyBDQi3BSiPBHQjDBhhXAAQgwAAgPgdg");
	this.shape_105.setTransform(-182.566,-85.2817);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#666666").s().p("AvgFFQgphUD/jVQDzjKGFidIAtgNIAZgDQEngbEABWQBmATBcAYQDcA9BKBCQAhAeACAeQAMBljhgJIrtgfQgpgCADgGQgHgFgTADIgFABQipA3h0BAQi4BPiQBGQjCBchYAAQgxAAgPgdg");
	this.shape_106.setTransform(-182.8064,-87.4756);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#666666").s().p("AvjE8QgnhVEBjQQD2jHGIiWIAtgNIAagCQEmgXEABaQBmAVBbAZQDbBABJBDQAgAfACAeQAKBljhgNIrsgqQgpgCADgHQgHgEgTACIgFABQiqA0h0A/Qi6BMiRBDQjBBZhXAAQg0AAgPgfg");
	this.shape_107.setTransform(-183.0143,-89.6919);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#666666").s().p("AvmEzQgmhUEFjNQD5jDGKiQIAtgMIAagCQEngSD+BeQBlAWBbAbQDaBDBIBFQAgAfABAeQAJBljhgQIrrg2QgpgDACgHQgGgGgTADIgFABQirAyh1A9Qi7BJiSBBQi/BUhYAAQg2AAgPggg");
	this.shape_108.setTransform(-183.1764,-91.916);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#666666").s().p("AvoErQglhWEIjIQD8i/GNiKIAtgMIAagBQEngOD8BiQBmAYBaAcQDZBHBHBGQAfAfABAdQAHBmjggTIrrhCQgqgDADgHQgGgFgSACIgFAAQitAwh2A7Qi7BGiTA/Qi9BQhZAAQg4AAgPghg");
	this.shape_109.setTransform(-183.3611,-94.1677);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#666666").s().p("AvrEiQgjhWELjEQEAi7GNiEIAugLIAagBQEngJD7BmQBlAaBaAdQDYBKBGBHQAeAfABAeQAFBmjggXIrphNQgqgEADgHQgGgGgTACIgEABQitAth4A5Qi8BEiUA8Qi7BLhYAAQg8AAgPgig");
	this.shape_110.setTransform(-183.4716,-96.4364);
	this.shape_110._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96}]}).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_110}]},1).to({state:[]},1).to({state:[]},2).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(14).to({_off:false},0).wait(5).to({_off:true},1).wait(14));

	// wing_front
	this.instance_3 = new lib.seagullwing_front();
	this.instance_3.setTransform(-40.85,-28.3,1,1,0,0,0,250.5,-3.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(1).to({regX:250.4,rotation:8.1839,x:-40.95},0).wait(1).to({regX:250.5,rotation:24.9524,x:-40.9},0).wait(2).to({regX:250.4,rotation:-35.0474,x:-35.1,y:-48.15},0).wait(2).to({regX:250.5,rotation:0,skewY:180,x:-174.15,y:-28.3},0).wait(1).to({regX:250.4,skewX:-8.1839,skewY:171.8161,x:-174.05},0).wait(1).to({regX:250.5,skewX:-24.9524,skewY:155.0476,x:-174.1},0).wait(2).to({regX:250.4,skewX:35.0474,skewY:215.0474,x:-179.9,y:-48.15},0).wait(2));

	// seagull_body
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Ax4GoIgBgEQABhWA5g7QApgvAogrQCri5DGiMQBMg3BTgtQA0geA2gaQDMhhDagmIBzgHQANgBAQAAQBCAABEAOQAwAKArAcQBNAxB/AdQAUAKAUAGQB+AnBgh5IEDDNIACAwIAAAdQgBA5gaAtQg5BmhaBCQhZBBhiAqQg8Abg8AUQjUBPjhAIIijgHQjJgRjLgWQg+gFg+gDQi1gHi2AcQg+AOg8AVQg1ATgzABQgvgBgtgPg");
	this.shape_111.setTransform(-166.775,-67.2333);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Ax0GZIAAgBIgBgDIAAAAQABhPA0g4IAGgHQAjgnAkgkIAMgNQChinC5iCIAZgRQA+gsBDglIAegQQAkgTAlgSIAigQQC9hWDJglIAdgEIBXgFIAbgCIAdAAQA2AAA4AJIAXAFQAlAJAjATIARAKQBIArByAbIARAEQALAGAMAEIARAFQB1AhBbhmIAMgIIDyC5IAOAQQABAWAAAXIAAACIgBAdQgCAigMAeQgHASgKARQguBMhDA2QgSAQgUAOQhEAvhKAiIguAUQglAQgmANIgsAPQjBBFjLALIgmABIiAgGIghgBQi8gQi+gTIgWgCQg0gFg0gCIgTgBQivgGixAaIgHABQg7ANg5ATIgFACQg0ASgzAAQgvAAgsgPg");
	this.shape_112.setTransform(-168.625,-68.4875);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AxwGKIgBAAIgBgDIAAgBQABhNA2g2IAGgHQAkgmAkgkIAMgMQCiiiC6h+IAZgQQA/gqBDgjIAegQQAlgTAlgRIAhgPQC8hSDIgiIAegEIBVgFIAbgBIAdAAQA2ABA3AJIAWAFQAlAJAhATIASAKQBIAoBxAZIARAGIAYAJIAQAEQB0AeBahlIANgCIDyCzIAKASQABAXgBAWIAAACQAAAPgBAOQgDAhgOAdQgJARgKAQQgwBJhEA0IgoAcQhEAshKAgIguAUQglAPglALIgtAPQi/BAjJAKIgmAAIh/gFIghgCQi6gPi8gTIgVgCQg0gEgzgCIgSgBQiugFivAZIgHABQg7AMg4ATIgFABQg0ASgzAAQgtgBgsgOg");
	this.shape_113.setTransform(-170.4917,-69.7375);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AwUGKQgsgBgsgNIgBgBIgBgDIAAAAQABhLA3g1IAGgHQAlgmAkgiIANgNQCiicC7h5IAZgQQBAgoBDgiIAegPQAlgSAmgQIAhgPQC7hNDGggIAegDIBUgEIAbgBIAdAAQA1ABA2AJIAWAFQAkAKAhASIARAKQBJAmBwAYIARAFQAMAFAMAEIAQAEQBzAaBZhjIANAEIDzCtIAFAUIAAAsIAAACQAAAPgCAOQgEAggQAcQgJAQgLAQQgyBGhGAxIgoAaQhFAqhKAeIgvASQgkAOglALIgsAOQi+A8jIAIIglgBIh+gFIgggCQi4gOi6gSIgVgCQgzgEg0gCIgRAAQitgFisAYIgIABQg6AMg3ASIgFABQgyARgxAAIgDAAg");
	this.shape_114.setTransform(-172.3375,-71.0118);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AxpFtIgBgEQABhJA4g0QAogoAoglQCpifDDh5QBMgvBRgnQA0gZA1gWQDJhUDYggIBwgHQBRgDBRAOQAvAJAqAYQBMArB9AYQAUAJAVAFQB8AhBehnIEACwQADAhgCAhQAAAxgaAnQg4BXhZA5QhYA4hhAkQg7AYg7AQQjRBEjeAIIihgHQjGgOjJgTQg9gFg9gCQizgGi0AYQg9AMg6ASQg0ARg0AAQgtAAgtgNg");
	this.shape_115.setTransform(-174.1969,-72.2802);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AxrF5IgBgBIgBgDIAAAAQABhLA3g1IAHgGQAkgmAlgiIAMgNQCjiaC7h5IAZgQQBAgnBDgiIAegPQAlgSAmgQIAhgOQC7hNDGgfIAdgDIBVgFIAbAAIAdAAQA1ABA1AKIAXAEQAjAKAhASIARAKQBJAmBwAXIARAGQALAFAMADIARAEQByAaBZhjIAOAFIDyCsIAFAUIAAAtIAAACQgBAOgCAOQgEAggRAbQgJAQgLAQQgxBFhIAxIgnAaQhFAphLAeIguASQgkAOglAKIgsAOQi+A7jIAIIglgBIh9gFIgggCQi4gOi6gSIgVgCQgzgEgzgBIgSgBQisgFisAYIgHABQg6AMg3ASIgFABQg0ARgyAAQgsgBgsgNg");
	this.shape_116.setTransform(-172.7125,-71.2625);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AxvGEIAAAAIgBgDIAAgBQABhMA2g2IAGgHQAkgmAkgjIANgMQCiigC6h8IAZgQQA/gpBDgjIAegPQAlgTAmgRIAhgOQC8hQDHgiIAdgDIBVgFIAcgBIAdAAQA1ABA2AJIAXAFQAkAJAhATIASAKQBIAoBxAYIARAFQALAGAMADIARAFQBzAcBahkIANAAIDyCxIAIATQABAWAAAWIAAACIgCAdQgEAhgPAcQgIARgLAQQgwBHhGAzIgnAbQhFAshKAfIguATQglAPglALIgsAPQi/A+jJAJIglAAIh+gFIghgCQi5gPi7gSIgWgCQgzgEg0gCIgSgBQitgFiuAYIgHABQg6AMg4ATIgFABQg0ASgzAAQgsgBgtgOg");
	this.shape_117.setTransform(-171.2417,-70.2375);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AxxGRIgBgBIgBgDIAAgBQABhNA1g3IAGgHQAkgnAjgkIANgMQChikC5h/IAagRQA+grBDgkIAfgPQAkgUAlgRIAigPQC8hUDIgjIAegEIBWgFIAbgCIAcAAQA3ABA3AJIAXAFQAkAJAjATIAQAKQBJApBxAaIARAFIAYAJIAQAFQB1AfBahlIANgEIDyC1IALARIABAtIAAACQAAAPgBAOQgDAigNAdQgIARgLAQQguBLhEA1QgUAPgUANQhDAthLAiIguATQglAQgkAMIgtAPQjABCjKAKIgmABIh/gGIgigCQi6gPi9gTIgVgCQg0gEg0gCIgSgBQivgGivAZIgHABQg8ANg3ATIgGACQg0ARgyAAQguAAgsgOg");
	this.shape_118.setTransform(-169.75,-69.2625);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("Ax1GcIAAgBIgBgDIAAAAQABhPA0g4IAGgHQAjgoAjgkIANgNQCgipC5iCIAZgSQA+grBDglIAegRQAkgTAmgSIAhgQQC9hYDJgkIAegFIBWgFIAcgCIAdAAQA2AAA4AJIAXAFQAmAIAiAUIARAKQBIArBzAbIARAFIAXAKIARAFQB1AhBbhmIAMgJIDyC6IAPAPIABAuIAAACIgBAdQgBAigMAfQgHASgKAQQguBNhCA3QgTAQgUAOQhEAvhJAjIguAVQgmAQglANIgtAPQjBBFjLAMIgmABIiAgGIgigBQi8gQi+gUIgWgCIhogGIgTgBQiwgHixAbIgHABQg7AMg5AUIgFACQg1ASgzAAQguAAgtgPg");
	this.shape_119.setTransform(-168.275,-68.2375);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AwcG4IgBgEQABhZA1g+QAlgxAlgsQCdjAC3iRQBFg6BMguQAxgfAxgbQC8hlDIgnIBqgIQAMgBAOABQA9gBA/APQAsALAnAdQBHAzB1AdQASALATAGQB0AoBYh9IDuDVIACAyIAAAeQgBA7gYAvQg0BphTBFQhSBDhaAsQg3Acg4AUQjDBSjOAJIiWgIQi5gRi6gXQg5gFg5gDQingHioAdQg5AOg2AWQgxAUgwAAQgrAAgpgQg");
	this.shape_120.setTransform(-123.225,-13.8833);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("Ax4HWIgBgEQABhfA5hCQApg0AogwQCrjNDGicQBMg9BTgyQA0ghA2gcQDMhsDagqIBzgIQANgBAQAAQBCAABEAPQAwAMArAfQBNA2B/AgQAUAMAUAGQB+ArBgiGIEDDkIACA1IAAAgQgBA/gaAyQg5BxhaBKQhZBHhiAvQg8Aeg8AWQjUBXjhAKIijgIQjJgTjLgYQg+gGg+gDQi1gIi2AfQg+APg8AYQg1AVgzABQgvgBgtgRg");
	this.shape_121.setTransform(-127.175,-7.8333);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AxZIXIgBgFQgJhfA0hHQAng9AhguQCVjZC5ivQBHhEBNg5QAtgkA4gkQDDh/DUg8IBwgTIAdgDQBBgGBGAJQAxAHAtAbQBVAvB+AUQAYAKASAEQCCAfBTiNIEXDKIAJBVQAFA/gVA2QguB0hTBSQhUBQhcA3Qg8Alg3AZQjMBrjeAeIijAGQjngBivgFQhIAAg0ADQi0AJi0AvQhEAYgxAbQg1AZgyAGIgTAAQgmAAgkgJg");
	this.shape_122.setTransform(-118.995,-16.0313);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AO1GkQg8gVg+gOQi2gci1AHQg+ADg+AFQjLAWjJARIijAHQjhgIjUhPQg8gUg8gbQhigqhZhBQhahCg5hmQgagtgBg5IAAgdIACgwIEDjNQBgB5B+gnQAUgGAUgKQB/gdBNgxQArgcAwgKQBEgOBCAAQAQAAANABIBzAHQDaAmDMBhQA2AaA0AeQBTAtBMA3QDGCMCrC5QAoArApAvQA5A7ABBWIgBAEQgtAPgvABQgzgBg1gTg");
	this.shape_123.setTransform(-87.825,-7.8333);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("ANoG0Qg2gWg5gOQiogdinAHQg5ADg5AFQi6AXi5ARIiWAIQjOgJjDhSQg4gUg3gcQhagshShDQhThFg0hpQgYgvgBg7IAAgeIACgyIDujVQBYB9B0goQATgGASgLQB1gdBHgzQAngdAsgLQA/gPA9ABQAOgBAMABIBqAIQDIAnC8BlQAxAbAxAfQBMAuBFA6QC3CRCdDAQAlAsAlAxQA1A+ABBZIgBAEQgpAQgrAAQgwAAgxgUg");
	this.shape_124.setTransform(-91.775,-13.8833);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AO1HSQg8gYg+gPQi2gfi1AIQg+ADg+AGQjLAYjJATIijAIQjhgKjUhXQg8gWg8geQhigvhZhHQhahKg5hxQgagygBg/IAAggIACg1IEDjkQBgCGB+grQAUgGAUgMQB/ggBNg2QArgfAwgMQBEgPBCAAQAQAAANABIBzAIQDaAqDMBsQA2AcA0AhQBTAyBMA9QDGCcCrDNQAoAwApA0QA5BCABBfIgBAEQgtARgvABQgzgBg1gVg");
	this.shape_125.setTransform(-87.825,-7.8333);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AP9IgQgygGg1gZQgxgbhEgYQi0gvi0gJQg0gDhIAAQivAFjnABIijgGQjegejMhrQg3gZg8glQhcg3hUhQQhThSguh0QgVg2AFg/IAJhVIEXjKQBTCNCCgfQASgEAYgKQB+gUBVgvQAtgbAxgHQBGgJBBAGIAdADIBwATQDUA8DDB/QA4AkAtAkQBNA5BHBEQC5CvCVDZQAhAuAnA9QA0BHgJBfIgBAFQgkAJgmAAIgTAAg");
	this.shape_126.setTransform(-96.005,-16.0313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111,p:{x:-166.775,y:-67.2333}}]}).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115,p:{y:-72.2802}}]},1).to({state:[{t:this.shape_116,p:{y:-71.2625}}]},1).to({state:[{t:this.shape_117,p:{y:-70.2375}}]},1).to({state:[{t:this.shape_118,p:{y:-69.2625}}]},1).to({state:[{t:this.shape_119,p:{y:-68.2375}}]},1).to({state:[{t:this.shape_111,p:{x:-166.775,y:-67.2333}}]},1).to({state:[{t:this.shape_119,p:{y:-67.2375}}]},1).to({state:[{t:this.shape_118,p:{y:-67.2625}}]},1).to({state:[{t:this.shape_117,p:{y:-67.2375}}]},1).to({state:[{t:this.shape_116,p:{y:-67.2625}}]},1).to({state:[{t:this.shape_115,p:{y:-67.2802}}]},1).to({state:[{t:this.shape_116,p:{y:-67.2625}}]},1).to({state:[{t:this.shape_117,p:{y:-67.2375}}]},1).to({state:[{t:this.shape_118,p:{y:-67.2625}}]},1).to({state:[{t:this.shape_119,p:{y:-67.2375}}]},1).to({state:[{t:this.shape_111,p:{x:-166.775,y:-67.2333}}]},1).to({state:[]},1).to({state:[{t:this.shape_111,p:{x:-127.175,y:-7.8333}}]},2).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},2).to({state:[{t:this.shape_123}]},2).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},2).wait(2));

	// back_legs
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#663300").s().p("Ah4ChIADgGIAFgMQAahIAZhRIAOgwQAkhWAZhgIAngDIg6DaQgNBFgTAtIA7AFIBJAFIhIAWIAYAOIBKAsIh3gOIBBBPg");
	this.shape_127.setTransform(-182.275,-10.05);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#663300").s().p("AhzCEIAEgGIAHgLQAmhDAfhNQAMgXAIgWQAohRAjhfIAnABQgsB9ghBXQgUBDgZAqQAgANAdAJIBGAVIhLAGIAVATIA+A7IhxgnIAvBbg");
	this.shape_128.setTransform(-186.85,-10.575);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#663300").s().p("Ah9BpIAFgGIAJgJQAxg8AmhKQANgVAJgTQAvhOAqhbIAnADQg2B6gnBTQgbBCggAlQAfAaAbAPIBAAjIhLgLIAQAYIAxBHIhlg/IAaBjg");
	this.shape_129.setTransform(-189.6,-11.725);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#663300").s().p("AiOBPIAFgFIAKgHQA7gzAshGQAQgTAJgRQA2hJAxhYIAnAGQg/B1gvBQQghA+gmAgQAcAnAXAUIA2AwIhGgaIAKAaIAhBQIhWhTIAFBmg");
	this.shape_130.setTransform(-191.3,-13.425);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#663300").s().p("AidA3IAGgDIAMgFQBAgpA0hCQASgRAJgNQA8hGA4hTIAmAKQhJBug0BNQgoA5grAbQAVAxATAZIAqA7Ig/gpIAFAcIAPBVIhDhiIgRBkg");
	this.shape_131.setTransform(-192.875,-15.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#663300").s().p("AhwBOIAGgDIALgHQA9guAshHQASgRgDgDQAchYAVhiIAngGQgaCDgTBaQgYBBgzAaQAYAwAVAXIAwA2IhDgiIAHAbIAWBUIhKheIgIBng");
	this.shape_132.setTransform(-188.275,-14.55);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#663300").s().p("AhmBZIAFgEIAKgHQA5gzAnhLIAGgIIAAABQAGgJgGAIQgGhbgShiIAhgTQAbCCAQBaQgIBBg7AhQAcAtAXAWIA0AxIhGgcIAKAaIAdBRIhRhWIAABng");
	this.shape_133.setTransform(-179.925,-15.55);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#663300").s().p("AhpBUIAFgFIAJgHQA1g4AghNIABgCIAFAKQAGgcgLASQgmhNg0hQIAYgfQBJBuAyBPQAHA9hBApQAfArAZAUIA4AtIhIgXIAMAaIAkBOIhYhPIAHBmg");
	this.shape_134.setTransform(-171.325,-18.05);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#663300").s().p("AhSBBIAFgFIAIgJQAtg4AZhLIAPAOQAAgsgMAVIgDAJQg9g1hJgzIAKgmIC4CAQAUAzhFA4QAkAnAaASIA8AoIhKgQIAPAYIAqBMIhghHIASBkg");
	this.shape_135.setTransform(-167.45,-21.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#663300").s().p("AhBAkIAFgFIAHgJQAmg3ARhGIAgALQgRg3gKAXIgFAVQhHgXhQgSIgGgmQCDAaBZAVQAbAohEBIQAoAkAbAOIBBAjIhMgKIARAYIAwBHIhmg+IAaBjg");
	this.shape_136.setTransform(-165.85,-25.65);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#663300").s().p("AgfA+IAEgFIAFgLQAahBgVhUIAQAGQgQgkgBAZIABAFQhNgghYgZIgDgoIDYA9QAnArglBNQA9AxAbAOIBBAhIhMgIIARAYIAzBGIhng8IAcBig");
	this.shape_137.setTransform(-162.55,-24);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#663300").s().p("AAGBKIABgGIADgLQAOhBhAhMIgDgIIADABQgGgMADALQhRgohdghIAAgnQB+ArBXAfQAyAqgHBFQBVA2AdANIBBAgIhMgGIASAWIA1BFIhpg5IAgBhg");
	this.shape_138.setTransform(-159.1,-23.525);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#663300").s().p("AAqBHIABgFIABgKQAAg7higyQgQgUgGAAQhPgthdgoIADgnQB6AzBWAlQA7AjAUA0ICMA+IBDAeIhMgEIASAWIA2BDIhqg2IAiBhg");
	this.shape_139.setTransform(-156.025,-24.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#663300").s().p("ABIA3IAAgFIgBgIQgKgxh5gOIgtgXQhMgzhagtIAFgmIDKBjQBCAbAnAbQCHAjAdAMIBDAcIhMgCIATAVIA4BCIhsgzIAlBgg");
	this.shape_140.setTransform(-153.675,-26.05);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#663300").s().p("ABbAdIgBgDIgCgGQgQgliCAcQgYgEgrgQQhJg3hXgzIAHgmQBzBBBRAvQBEAQAxgEQCZAPAdALIBEAZIhMAAIATAVIA6BAIhtgwIAnBfg");
	this.shape_141.setTransform(-152.275,-28.575);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#663300").s().p("AA5BXIgBgFIgBgJQgLgxh5gLQgWgMghgbQg4hJhFhJIASgjQBdBfA/BDQA9AmAuANQCIAhAdALIBEAbIhMAAIATAUIA6BBIhtgxIAmBeg");
	this.shape_142.setTransform(-155.125,-22.85);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#663300").s().p("AAGCBIABgGIAAgKQgCg7hkguQgRgRgWgiQgghXguhZIAbgcQA+B1AqBSQAuA1AmAeICOA5IBEAbIhMgBIATAVIA5BAIhsgwIAmBdg");
	this.shape_143.setTransform(-159.55,-18.15);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#663300").s().p("Ag2CXIABgGIADgLQAIhChFhGQgJgXgLglQgGhbgUhjIAigUQAbCDARBaQAcBBAYApQBYAxAdAMIBDAbIhLgBIATAUIA5BBIhtgxIAmBfg");
	this.shape_144.setTransform(-165.125,-14.85);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#663300").s().p("AhqCYIACgGIAFgLQAVhFgfhTQgCgZACgjQAThZAJhlIAmgKQgKCEgKBdQAHBGAHAvQA/AsAdAMIBEAaIhMgBIATAWIA5BAIhtgxIAmBfg");
	this.shape_145.setTransform(-172.7375,-13.325);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#663300").s().p("Ah4ChIAIgSQAahIAZhRIAOgwQAkhWAZhgIAngDIg6DaQgNBFgTAtICEAKIhIAWIBiA6Ih3gOIBBBPg");
	this.shape_146.setTransform(-182.275,-10.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127}]}).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[]},1).to({state:[]},2).wait(12));

	// foot_back
	this.instance_4 = new lib.seagull_back_foot();
	this.instance_4.setTransform(-120,32.6,1,1,0,45,-135,-29.7,-46.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).wait(1).to({regY:-46.5,skewX:59.9984,skewY:-120.0016,x:-120.15,y:32.65},0).wait(1).to({skewX:39.2738,skewY:-140.7262,x:-120.05},0).wait(2).to({skewX:74.9821,skewY:-105.0179,x:-120.1,y:32.7},0).wait(2).to({regY:-46.6,rotation:-45,skewX:0,skewY:0,x:-95,y:32.6},0).wait(1).to({regY:-46.5,rotation:-59.9984,x:-94.85,y:32.65},0).wait(1).to({rotation:-39.2732,x:-94.95},0).wait(2).to({rotation:-74.9821,x:-94.9,y:32.7},0).wait(2));

	// back_wing
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AGMDPQhdAFhoALIgXgKQhVgpg2ggIgqgRQkThkjDgTQkig+AvhUQAvhTE6gOQDNgIDhAsIAvAKQBdAbBcA2QDnBwCjBzQgCA6AcAmIAAAFQACAPgLALQhcgrjkAIg");
	this.shape_147.setTransform(-177.9809,-111.1546);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AGQDKQhdAHhoAOIgWgJQhYgog2geIgqgPQkWhdjDgLQkjg3AshVQArhUE6gXQDNgODjAlIAvAIQBeAaBdAyQDqBpCmBvQAAA6AcAlIABAGQADANgMAMQhdgnjjAOg");
	this.shape_148.setTransform(-178.3916,-109.6804);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AC5DSQhYglg3gdIgrgNQkXhVjEgGQklgtAqhXQAohVE5ghQDNgUDkAfIAvAHQBeAWBfAwQDtBiCpBrQADA6AcAjIABAGQADANgLANQhegljiAVQhfAJhmASg");
	this.shape_149.setTransform(-178.7572,-107.721);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AC9DNQhZgjg4gaIgsgNQkZhMjEAAQkmgmAohWQAmhXE4gqQDMgaDkAYIAwAFQBeAUBhAtQDvBbCtBmQADA6AeAjIABAGQADANgKAMQhfghjiAbQhdAMhnAUg");
	this.shape_150.setTransform(-179.0756,-105.6635);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("ADCDIQhbgfg4gaIgsgLQkbhEjEAGQkngcAkhYQAkhYE2gzQDMggDlAQIAvAFQBgAQBhArQDyBUCvBhQAGA6AeAiIACAGQAEANgLAMQhfgejiAhQhdAPhmAXg");
	this.shape_151.setTransform(-179.3177,-103.6557);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AC+DMQhagig3gaIgsgNQkahKjEABQkmgkAnhXQAlhXE4gsQDMgbDlAXIAvAFQBfATBhAsQDwBaCtBlQAEA6AeAjIABAGQADANgLAMQheghjiAdQheAMhmAVg");
	this.shape_152.setTransform(-179.1396,-105.2614);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AC7DQQhZgkg3gcIgrgNQkZhSjEgDQklgrAphWQAohXE4gjQDNgXDjAcIAwAGQBeAWBgAuQDuBgCqBpQADA6AdAjIABAGQADANgLAMQhdgkjjAYQheAKhnATg");
	this.shape_153.setTransform(-178.8888,-106.8762);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AC4DUQhZgmg2gdIgrgOQkXhYjDgIQklgxArhWQAqhWE5gcQDNgRDkAhIAvAHQBeAYBeAwQDsBlCoBtQABA6AdAkIABAGQACANgLAMQhdgmjjATQheAHhnARg");
	this.shape_154.setTransform(-178.6274,-108.564);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AGQDLQheAGhoAOIgWgJQhXgpg2geIgrgPQkUhejEgNQkjg4AthVQAshUE6gWQDNgMDjAmIAuAJQBeAaBdAyQDqBrClBwQAAA6AcAlIABAGQACANgLAMQhdgojjANg");
	this.shape_155.setTransform(-178.304,-109.969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_147}]}).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[]},1).to({state:[]},2).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_147).to({_off:true},1).wait(8).to({_off:false},0).wait(10).to({_off:true},1).wait(14));

	// wing_back
	this.instance_5 = new lib.seagullwing_back();
	this.instance_5.setTransform(-53.6,-42.65,1,1,7.7327,0,0,134.7,-8.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).wait(1).to({rotation:17.958,x:-53.55,y:-42.6},0).wait(1).to({regX:142.3,regY:-8.8,rotation:13.9374,x:-40.95,y:-43.2},0).wait(2).to({regX:142.2,rotation:-56.252,x:-44.9,y:-47.2},0).wait(2).to({regX:134.7,regY:-8.2,rotation:0,skewX:-7.7327,skewY:172.2673,x:-161.4,y:-42.65},0).wait(1).to({skewX:-17.958,skewY:162.042,x:-161.45,y:-42.6},0).wait(1).to({regX:142.3,regY:-8.8,skewX:-13.9374,skewY:166.0626,x:-174.05,y:-43.2},0).wait(2).to({regX:142.2,skewX:56.252,skewY:236.252,x:-170.1,y:-47.2},0).wait(2));

	// saegull_head
	this.instance_6 = new lib.angryseagullhead();
	this.instance_6.setTransform(-65.6,-96.75,0.8654,0.8654,8.2354,0,0,24.6,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:14.9311},0).wait(1).to({x:-69.35},0).wait(1).to({x:-72.35,y:-95.25},0).wait(1).to({regX:0,regY:0,rotation:8.2354,x:-97.15,y:-90.7},0).wait(1).to({x:-95.65},0).wait(1).to({x:-94.15},0).wait(1).to({x:-92.65},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:4.2692,x:-90.5,y:-88.55},0).wait(1).to({regX:24.6,regY:-12.1,rotation:8.2354,x:-65.6,y:-96.75},0).wait(1).to({x:-67.1,y:-95.25},0).wait(1).to({x:-69.35,y:-93},0).wait(1).to({x:-70.85,y:-91.5},0).wait(1).to({x:-72.35,y:-90.75},0).wait(1).to({regX:0,regY:0,x:-97.15,y:-85.7},0).wait(1).to({x:-95.65},0).wait(1).to({x:-93.4},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:13.2198,x:-91.25,y:-89.5},0).wait(1).to({x:-89.75},0).wait(1).to({regX:0,regY:0,rotation:8.2354,x:-88.15,y:-89.45},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1,scaleY:1,rotation:0,x:-53.8,y:-18.15},0).wait(1).to({y:-22.15},0).wait(1).to({x:-54.8,y:-25.15},0).wait(2).to({x:-52.8},0).wait(2).to({skewY:180,x:-161.2,y:-18.15},0).wait(1).to({y:-22.15},0).wait(1).to({x:-160.2,y:-25.15},0).wait(2).to({x:-162.2},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295,-158.9,472.5,275.8);


(lib.beach = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//createjs.Sound.play("wave");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(101));

	// Wave
	this.instance = new lib.wave_1();
	this.instance.setTransform(714,19.55,1.4497,1.2555,0,0,0,502.8,-7.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(54));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAUSIAAtlAAAhQIAAzB");
	this.shape.setTransform(-461.95,58.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],10.5,-1555.1,10.5,864.6).s().p("EhKmAixIAA4UIAAtkIAAn+IAAzBIAAkqMCVNAAAMAAABFhg");
	this.shape_1.setTransform(15.525,121.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-477.4,7,477.5,7).s().p("EhKmAC5IAAlxMCVNAAAIAAFxg");
	this.shape_2.setTransform(15.525,-119.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],10.5,-51.1,10.5,421.7).s().p("EhKmAVDMAAAgqFMCVNAAAMAAAAqFg");
	this.shape_3.setTransform(15.525,-273.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("EhKmAMHMAAAgtxMCVNAAAMAAAAtxEBKnAUFIAANmMiVNAAAIAAtm");
	this.shape_4.setTransform(15.525,-27.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-477.4,0,477.5,0).s().p("EhKmAD/IAAn9MCVNAAAIAAH9g");
	this.shape_5.setTransform(15.525,75.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],10.5,-131.9,10.5,341).s().p("EhKmAhrIAAtmMCVNAAAIAANmgEhKmAMHMAAAgtxMCVNAAAMAAAAtxg");
	this.shape_6.setTransform(15.525,-27.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("EBKnAUFIAANmMiVNAAAIAAtmEhKmAMHMAAAgtxMCVNAAAMAAAAtx");
	this.shape_7.setTransform(15.525,-27.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},99).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-472,-407.8,992.4,751.4000000000001);


(lib.cut_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.youLoseBox("synched",0);
	this.instance.setTransform(679.8,-872.15,1,1,0,0,0,180,-42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(14));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAiAIAA+NEAAAAgOIAA1l");
	this.shape.setTransform(0,-453.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],16.6,-2469.8,16.6,1373.2).s().p("Eh2eA3NMAAAgmmIAA1kIAAsqIAA+NIAAnYMDs9AAAMAAABuZg");
	this.shape_1.setTransform(758.325,-353.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-758.3,11.2,758.3,11.2).s().p("Eh2eAElIAApKMDs9AAAIAAJKg");
	this.shape_2.setTransform(758.325,-736);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],16.6,-81.2,16.6,669.8).s().p("Eh2eAhbMAAAhC1MDs9AAAMAAABC1g");
	this.shape_3.setTransform(758.325,-979.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1193.2,1517.7,1193.2);


(lib.crab_scorecard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// claws
	this.instance = new lib.crab_claw("synched",0);
	this.instance.setTransform(94.5,-16.55,0.5764,0.5764,0,-13.9774,166.0226,102.6,-82);

	this.instance_1 = new lib.crab_claw("synched",0);
	this.instance_1.setTransform(-100.25,-16.6,0.5764,0.5764,13.9774,0,0,102.5,-82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_1,p:{startPosition:24}},{t:this.instance,p:{startPosition:24}}]},39).wait(1));

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AFWhDIhZA/Ig8AqIgxAjAlVhIIBZBAIA6AoIA0Al");
	this.shape.setTransform(0.45,-1.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AD+A8QgaAAgSgRQgTgRAAgYQAAgHACgGQAEgPANgMQARgQAaAAIABAAIACAAQAaAAATAQQASARAAAXQAAAYgSARQgTARgaAAIgCAAgADBgLIA8grgAksAnQgSgRAAgXQAAgYASgRQATgRAaAAIADAAIA7AqQACAHAAAJQAAAXgTARQgTARgaAAQgaAAgTgRgAjBgRgAj8g7QAYABASAQQAMALAFAOgAj8g7IAAAAg");
	this.shape_1.setTransform(0.45,3.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(6,1,1).p("AFfg1IhiAwIhCAhIg3AaAleg0IBkAsIBCAbIA6AZ");
	this.shape_2.setTransform(0.3,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADrA7IgCgBQgagEgPgTQgQgTADgXQACgIADgHQAGgNAOgKQAVgNAZADIABABIABAAQAbAEAPATQAQAUgEAXQgDAXgVAOQgQALgTAAIgMgBgAC4gWIBCghgAkXAvQgWgNgEgXQgFgXAOgUQAPgUAagGIADAAIBBAcQAEAHACAJQAFAWgPAUQgPAVgZAFQgIACgHAAQgRAAgQgJgAj8g6QAYgEAUAMQAOAIAHAMgAj8g6g");
	this.shape_3.setTransform(0.5509,3.3033);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},19).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(1));

	// mouth
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("AjEANQDQgzC5Az");
	this.shape_4.setTransform(2.125,25.8625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.749)").ss(4.5,1,1).p("ACPAUIkkAAQAEgFAGgDQAPgIAHgEQACAAAAAAQADgBACgBQAFgCAFgCQAAgBAAAAQABAAABAAQALgEALgDIAAAAQAGgCAFgBQABAAAAAAQAOgDANgCQALgBAKgBQAMgBANAAQAGAAAGAAQABAAAAAAQABAAABAAQAQACARACQAKACALADQAHACAHACQABABAAAAQAEABADABQABABAAAAQABAAAAAAIABAAQADACAEABQAEADADACQAFACABADQACADABAAQAAAAABAAIABAAQAAABABAAIAAAAQABABACABIAAAAQABAAABAAQAAABAAAAQABAAAAAAIAAAAQABABAAAAIABAAQACACABABQABABAAAAQABACABABQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABABIAAAAIAAAAQAAAAAAABIABAAQAAAAAAAAQAAABAAAAQAAAAABAAQgBAAAAgBIAAAAQgBAAAAgBQgBgCAAgCgACVAZQAAAAAAAAIAAABACUAZQAAgBAAAA");
	this.shape_5.setTransform(-3.1,25.1125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.502)").ss(3,1,1).p("AihAeQACgIAGgHQARgNAJgGQACgBAAAAQACgBACgCQAHgDAGgEQAAAAABAAQABAAAAgBQAOgFANgGQABAAABgBQAGgCAHgCQABAAABAAQARgEAQgDQAOgBANgBQAPgBARABQAHABAIABQABAAABAAQABABABAAQAVAEAUAFQANAFAMAFQAJAFAJAFQABABAAAAQAEACAEADQABAAAAABQABAAAAAAIAAABQAFACAEADQAFAEACAFQADAHgCAFQgCAFgEABQgDAAgCAAQgBAAAAAAQgCAAgBABQgDAAgEAAQAAAAgBAAQgIABgHAAQgBABAAAAQgDAAgDAAIAAAAQgDABgCAAQgBAAAAAAQgCAAgDABQAAAAgBAAQgBAAgBAAQAAAAgBAAQgHABgGACQgBAAgBAAQgKABgJACIgBAAQgCAAgCAAQAAAAgBAAQAAABgBAAIAAAAQgBAAAAAAQgDAAgDAAIgBAAQAAAAgBgBQAAABgBAAQgBAAgCAAQgCAAgDgCQgGgEgBgHg");
	this.shape_6.setTransform(-2.285,24.135);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("Ai8AmQAAgLAHgJQATgSAKgJQACgCAAAAQADgCACgCQAHgFAHgEQABgBABAAQABgBABAAQAQgIAQgIIABAAQAJgDAIgDQABAAABgBQAUgEAVgFQAQgBARgBQARAAAUACQAKACAJABQABAAACABQABAAABAAQAZAIAZAIQAOAIAPAIQALAHAKAHQAAABABAAQAEAEAEADQABABABAAQAAABABAAIAAAAQAFAFAEAFQAGAHABAHQACAKgGAIQgFAIgJAAQgGABgFAAQgBAAgCAAQgEAAgCAAQgHABgIAAQgBAAgBAAQgRAAgRABQAAAAgCAAQgGAAgGAAQgBABgBAAQgFAAgFAAQgBAAgCAAQgFAAgEAAQgCABgBAAQgCAAgDAAQgBAAgBAAQgPABgPABQgBABgEAAQgTAAgVABQgBAAgBAAQgEAAgEAAQgBAAgBAAQgCAAgBAAQgBAAAAAAQgBAAgBAAQgHgBgHAAQAAAAgBAAQAAAAgBgBQgCAAgBABQgDgBgEAAQgFgBgGgDQgIgGgCgLg");
	this.shape_7.setTransform(-0.0398,23.2958);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhzBQIgEgBIgNAAIgDAAIgFAAIgBgBIgDAAIgVgCIgCAAIgCAAIgEAAIgMgCQgHgBgIgFQgMgIgDgOQgCgPAIgMIAHgKIACgDIAXgWIABgBIABgBIAGgFIAQgMIACgBIACgBIAlgUIABAAIABgBIATgHIADgBIAwgLIAngCQAUAAAYAEIAWAEIADABIADAAIA6AWIAiAVIAXAUIABABIAKAJIABACIABABIABAAIAAABIAKANQAGAIAAAKQABANgJALQgJAKgOABIgRABIgEAAIgKABIgXAAIgDAAIg0AAIgDABIgTAAIgEAAIgPAAIgEABIgPAAIgEAAIgIAAIgEABIgtABIgIABg");
	this.shape_8.setTransform(2.225,22.4722);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah0BPIgEgBIgNAAIgDAAIgFAAIgBgBIgYgCIgCAAIgCAAIgHAAIgJgCQgHgBgHgEIgBgBQgKgGgDgMIgBgEQgCgOAHgMIABgBIAHgKIACgDIAYgVIABgCIADgBIAEgFIAQgLIACgBIACgBIAlgTIAWgIIACgBIABAAIAvgKIAFAAIAYgCIAKgBIAAAAIAKAAIAQABIAFACIACAAIALABIAWAEIADABIADAAIAGADIABAAIAzAUIAiAUIAJAIIADACIAIAIIACAAIABABIAAABIALAKIABACIABABIABAAIAAABIAKANIACAFQADAGAAAHQAAAGgBAEQgDAIgGAFQgDADgEADQgHAEgJAAIgVABIgJABIhOAAIgEAAIgSAAIgEABIgPAAIgEAAIgPAAIgEABIgIAAIgDABIgGAAIggABIgIAAIgIABg");
	this.shape_9.setTransform(2.2039,22.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah4BNIgDAAIgDAAIgHAAIgEAAIgFAAIgBgBIgDAAIgVgCIgKAAIgJgCQgHgBgHgEIgBgBQgKgHgDgMIgBgEQgCgNAIgMIABgBIAHgJIACgEIAZgWIADgCIAEgEIARgLIACgBIABgBIAmgTIABAAIABAAIAEgCIAPgGIADAAIABAAIApgKIALAAIAXgBIAJgBIABAAIALAAIAQABIAEABIACAAIAMACIAWAEIADABIADAAIAFACIABAAIAzAUIAiAVIAJAHIADADIALAIIABABIAAAAIALAKIABACIABABIABAAIAAABIAJANIACAEQADAHgBAHQAAAFgCAFQgCAHgGAFIgIAFQgHAEgJABIgVABIgJAAIgXAAIgDAAIhKAAIgEABIgPAAIgEAAIgPAAIgDAAIgJAAIgDABIgFAAIggABIgIAAIgJABIg+AAg");
	this.shape_10.setTransform(2.1825,22.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiKBLIgFAAIgBAAIgYgBIgCAAIgCgBIgGAAIgJgCQgHgBgHgEIgBgBQgKgIgCgLIgBgEQgCgOAIgKIABgBIAKgNIAJgIIABgBIAPgNIACgBIABgBIAVgOIACgBIACgCIAlgSIABgBIAGgCIAPgFIACAAIABAAIApgJIALgCIAXAAIAJgBIABAAIALAAIAQABIAEABIACABIAMABIAWAEIADABIADAAIAFADIABAAIAzATIArAcIABABIALAJIACAAIABABIAAABIALAKIABACIABABIABAAIAAABQAFAHAEAGIACAFQACAGgBAHQAAAGgCAEQgDAHgHAFIgHAEQgIAEgJAAIgVABIgJAAIhNAAIgEABIgSgBIgEABIgiAAIgEAAIgIAAIgDABIgGAAIggABIgIAAIgIAAIhPABg");
	this.shape_11.setTransform(2.1682,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiSBKIgXgBIgCAAIgCgBIgGAAIgJgCQgHgBgHgFIgBgBQgKgHgCgMIAAgDQgCgOAIgLIABgBIAIgJIACgDIAJgHIACgBIABgBIAMgLIACgBIACgBIABgBIAEgEIARgKIACgBIACgCIAsgUIAPgFIADgBIABAAIApgIIALgBIAWgBIAJgBIABAAIALABIAQABIAEAAIACABIAMABIAhAIIABAAIAzATIArAcIABABIADABIAIAHIACABIAMAMIACACIABAAIAAABIAAABQAFAGAEAIIABAEQACAHgBAGIgDAKQgDAHgHAEIgIAEQgHADgJAAIgVABIgJAAIgXAAIgDAAIgzAAIgEAAIgTAAIgDAAIgjAAIgDAAIgIAAIgDABIgGAAIggABIgIABIgIAAIhXABg");
	this.shape_12.setTransform(2.1798,22.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah8BJIgDAAIgDAAIgHAAIgDAAIgggBIgCgBIgGAAIgJgCQgHgBgHgFIgBgBQgJgIgCgMIAAgDQgCgNAJgLIABgBIAiggIACgBIACgBIABgBIAEgEIATgKIACgCIAlgRIACAAIAFgDIASgFIABAAIApgIIALgBIAXgBIAJAAIABAAIAKAAIAQABIAEABIACAAIAMABIAWAFIADABIADAAIAGABIABAAIAvATIADABIAsAbIADADIAIAGIACACIABABIAAABIALAJIACACIABABIAAAAIAAABQAGAHADAIIABADQABAIgBAGQgBAFgDAFQgDAGgHAEQgEADgEAAQgIADgJABIgVAAIgIAAIgXAAIgDAAIhKgBIgDABIgjgBIgDABIgHAAIgEAAIgGAAIggACIgIAAIgIAAIg+ABg");
	this.shape_13.setTransform(2.1838,22.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah9BIIgDAAIgDAAIgHAAIgDAAIgpgCIgIgCQgHgCgHgEIgBgBQgJgIgBgNIgBgCQgBgNAJgLIABgBIAWgVIANgKIACgCIAcgRIAlgRIACAAIABAAIAEgCIAQgFIACgBIABAAIApgIIALAAIAXgBIAJAAIABAAIAKAAIAQABIAEABIACAAIAMACIAWAEIADABIADAAIAGACIABAAIAvASIAvAcIADADIAIAGIACACIABABIAAAAIALAKIACACIABABIAAAAIAAABQAGAHACAIIABADQABAHgBAHQgBAFgDAEQgFAHgGADIgJADQgIACgIABIgVAAIgJAAIh1gBIgEAAIgQAAIgEAAIgGAAIgEABIgGAAIggABIgIAAIgIABIgmAAIgEABIgVAAg");
	this.shape_14.setTransform(2.1647,22.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah+BGIgDAAIgDABIgzgCIgIgCQgHgBgHgGIgBgBQgJgIgBgMIAAgCQgBgOAJgKIABgBIAVgTIABgBIAXgRIATgKIACgCIAngQIABAAIAEgDIATgFIABAAIApgHIALgBIAWgBIAJAAIABAAIAKAAIAQACIAEAAIACAAIAMACIAWAFIADABIAJABIABAAIAvASIAvAcIABABIAKAIIAOANIACACIABABIAAAAIAAABQAGAHACAIIABADQABAIgCAGQgCAFgDAFQgFAFgGAEIgJACIgRACIgVAAIgIAAIgXgBIgDABIhbgCIgEABIgQgBIAAAAIgEAAIgGAAIgFABIgFAAIggABIgIABIgJAAIglABIgEAAIgVABg");
	this.shape_15.setTransform(2.1864,23.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AivBFIgDAAIgGAAIgIgCQgHgDgGgEIgCgBQgIgJgBgNIAAgBQgBgOAJgJIABgCIAVgSIABgBIABgBIACgBIANgKIACgBIABgBIAYgNIACgBIAGgDIAngQIASgFIABAAIA0gIIAWgBIAJAAIABAAIAKABIAQABIAEABIACAAIANACIAWAEIADACIACAAIAGABIABAAIAvASIAvAbIABABIACABIAIAIIAEACIAKAKIACACIABABIAAABIAAABQAGAGACAIIABAEQAAAHgCAGQgCAGgEADQgFAHgHACIgJADIgRABIgVAAIgIAAIhMgCIgEABIg4gCIgEAAIgGAAIgFABIgFAAIggACIgIAAIgJAAIglABIgEABg");
	this.shape_16.setTransform(2.1987,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ai5BDIgJgCQgHgCgGgFIgBgBQgJgJAAgNIAAAAQAAgOAJgKIABgBIAVgSIABgBIABAAIAOgLIAEgCIABgBIBBgeIABAAIAEgCIATgFIABAAIApgHIALAAIAVgBIAJAAIABAAIALABIAQABIAEAAIABABIANACIAWAEIADABIAIACIABAAIAwARIAuAcIABABIADABIAIAHIABABIACABIALAKIACACIABABIAAABIAAABQAGAGABAJIABADQAAAIgDAGQgCAFgEAEQgFAGgHACIgKACIgRAAIgVAAIgIAAIgWgBIgDABIhvgDIgEAAIgGAAIgFABIgFAAIggABIgIABIgJAAIglABIgEABIgbAAIgDABg");
	this.shape_17.setTransform(2.2237,23.2167);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ai6BDQgMgBgKgJQgJgKAAgNQAAgOAJgKIAWgSIACgBIABgBIACgCIARgLIAggQIAngPIATgFIApgGIALgBIAVAAIAKAAIALAAIAQACIAEAAIABAAIAuAJIABAAIAwASIAuAbIABABIADABIAIAHIABABIACABIALAKQAKAJAAAPQAAANgKAJQgJAJgNAAIi2gEIgEAAIgHAAIgJABIggABIgIABIguABIgEABIgbAAIgDABg");
	this.shape_18.setTransform(2.225,23.2917);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.039)").ss(0.3,1,1).p("AjVAhQAAgNAKgKQAWgSABgBQACgBABgBQAIgFAIgGQAQgHAPgJQAUgGATgIQAJgCAKgCQAUgDAUgEQAGAAAFAAQANgBAIAAQAEAAAFAAQAHAAADABQAIABAIAAQACAAACAAQABABAAAAQAXAEAWAEQAZAJAXAIQAXANAWANQABAAAAABQABABACAAQADADAFADQAAABABABQABAAABAAQAFAGAGAEQAKAJAAAOQAAAMgJAJQgKAJgLAAQhWgChWgCQgCABgCAAQgEAAgEAAQgBAAgGAAQgPABgPABQgFAAgDAAQgVABgWABQgCAAgCAAQgMABgNAAQgCAAgBAAQgYAAgYgBQgLAAgJgJQgJgJAAgNg");
	this.shape_19.setTransform(1.85,23.3917);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.078)").ss(0.5,1,1).p("AjQAgQAAgMAJgKQAXgRAAgBQACgBABgBQAIgFAIgFQAPgIAQgIQASgGATgHQAJgDAKgCQATgDAUgDQAFAAAFgBQANgBAHABQAEAAAGAAQAGAAAEAAQAHABAIAAQACAAACAAQABABAAAAQAWAEAXAEQAXAIAXAIQAWAMAWANQAAAAABABQACABABAAQAEADADADQABABABAAQABABABAAQAFAFAFAEQAKAJAAANQAAAMgIAJQgIAIgMAAQhRgChRgCQgBABgCAAQgEAAgDAAQgDAAgFAAQgNABgOABQgFAAgCABQgVABgUAAQgCABgCAAQgMAAgMAAQgBABgBAAQgWgBgXAAQgLgBgIgIQgJgIAAgNg");
	this.shape_20.setTransform(1.45,23.4917);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.122)").ss(0.7,1,1).p("AjMAfQABgMAJgJQAVgRABAAQADgBAAgBQAIgFAIgFQAPgHAOgIQATgGASgHQAJgCAJgDQATgCAUgEQAFAAAFAAQAMgBAIAAQAEAAAFAAQAGAAADAAQAIABAHABQACAAACAAQABAAAAAAQAWAEAVAEQAXAIAWAHQAWAMAWAMQAAAAAAABQACAAABABQAEADADADQACAAAAABQABABABAAQAFAEAFAEQAKAIABANQAAAMgIAIQgIAIgKgBQhMgBhMgBQgBAAgCAAQgDAAgEAAQgCABgFAAQgMABgNAAQgFAAgCABQgTABgTABQgCAAgCAAQgLABgLAAQgBAAgCAAQgUAAgWAAQgKgBgHgIQgJgIAAgMg");
	this.shape_21.setTransform(1.1,23.5917);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.161)").ss(1,1,1).p("AjHAfQABgMAJgJQAVgQAAAAQADgCAAAAQAIgFAIgFQAOgHAPgHQARgGASgHQAJgCAJgCQASgDATgDQAFAAAFgBQAMgBAHABQAEAAAFAAQAGgBAEABQAHABAHAAQACAAACAAQABAAAAAAQAVAEAVAEQAXAHAVAHQAVALAVAMQABAAAAAAQACABABABQADADAEACQABABABAAQAAABABABQAFADAGAEQAJAIABAMQAAALgHAIQgHAIgKgBQhHgBhGgBQgCAAgBAAQgDAAgDABQgCAAgFAAQgMABgMABQgEAAgCAAQgSABgRABQgCAAgBAAQgLABgKAAQgCABgBAAQgTAAgUAAQgJgBgHgHQgIgIAAgLg");
	this.shape_22.setTransform(0.7016,23.6875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.2)").ss(1.2,1,1).p("AjCAeQABgLAIgJQAVgPABgBQACgBABgBQAHgEAIgFQAOgGAOgIQARgFASgHQAIgCAJgCQASgDASgDQAFAAAFAAQAMgBAHAAQADAAAFAAQAGAAADAAQAHABAHAAQACAAACAAQABABAAAAQAVADAUADQAWAHAVAHQAVALAVALQAAAAABAAQABABABABQADACAEADQABABAAAAQABABABAAQAFAEAFAEQAJAHABALQABALgHAHQgGAIgJgBQhCgBhBgBQgCABgBAAQgDAAgDAAQgCAAgEAAQgLABgMABQgEAAgBABQgQABgQAAQgCABgBAAQgKABgKAAQgBAAgBAAQgSAAgSAAQgJAAgGgHQgIgIABgKg");
	this.shape_23.setTransform(0.3268,23.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.239)").ss(1.5,1,1).p("Ai+AdQABgLAJgIQAUgOABgBQACgBABgBQAHgFAHgEQAOgGAOgHQARgFAQgHQAJgCAIgCQASgCARgDQAFAAAFgBQALgBAHAAQAEAAAFAAQAFAAAEAAQAGABAHABQACAAACAAQABAAAAAAQAUADAUADQAVAHAUAGQAVAKAUALQABAAAAAAQABABABAAQAEADADACQABABABAAQABABAAAAQAFAEAFAEQAJAGABALQABAKgGAIQgGAGgIAAQg8gBg9AAQgBAAgBAAQgDAAgCAAQgCABgEAAQgKABgLAAQgEABgBAAQgPABgPABQgBAAgBAAQgJABgJAAQgBABgBAAQgRAAgRAAQgIAAgGgHQgHgHABgKg");
	this.shape_24.setTransform(-0.0429,23.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.278)").ss(1.7,1,1).p("Ai5AcQABgKAIgHQAVgPAAgBQACAAABgBQAHgEAHgFQANgGAOgHQAQgFARgFQAIgCAIgDQARgCARgDQAFAAAFAAQALgCAHABQADgBAFAAQAFAAADABQAHABAGAAQACAAACAAQABAAAAAAQAUADATADQAVAGAUAGQAUAKATAJQABABAAAAQABAAABABQAEACADACQABACAAAAQABAAABABQAFADAFADQAJAHABAKQABAKgFAHQgGAGgHAAQg3gBg4AAQgBAAgBAAQgCAAgDAAQgBABgEAAQgJABgKABQgEAAgBAAQgOACgNAAQgBABgBAAQgIAAgIAAQgBABgBAAQgPAAgQABQgHgBgFgGQgHgGAAgKg");
	this.shape_25.setTransform(-0.4173,24);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.322)").ss(1.9,1,1).p("Ai1AbQACgKAIgHQATgNABgBQACgBABgBQAHgEAGgEQAOgGANgGQAQgFAQgGQAIgCAHgBQARgDARgDQAEAAAFAAQALgBAGAAQAEAAAEAAQAFAAAEAAQAGAAAGABQACAAACAAQABAAAAAAQATADASACQAVAGATAGQAUAJATAJQAAAAABABQABAAABABQADACADACQABABABAAQABABAAAAQAFADAFADQAIAGACAKQABAJgEAHQgFAGgHgBQgygBgyABQgBAAgBAAQgCAAgCAAQgCABgDAAQgJABgIABQgEAAgBAAQgNABgMABQgBABgBAAQgHAAgHABQgBAAgBAAQgNABgOAAQgHAAgFgGQgGgGAAgJg");
	this.shape_26.setTransform(-0.7909,24.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.361)").ss(2.2,1,1).p("AiwAaQACgJAIgHQATgNAAAAQACgBABgBQAHgEAGgDQANgGANgGQAPgFAQgFQAIgCAHgCQARgCAQgDQAEAAAFgBQAKgBAHABQADgBAEAAQAFAAADAAQAGABAHAAQABAAACAAQABAAAAAAQASADATACQATAGATAFQATAIATAJQAAAAABABQABAAABAAQADADADACQABAAABABQAAAAABABQAFADAEACQAJAGACAJQABAJgEAGQgEAFgGAAQgtgBgtABQgBAAgBAAQgCAAgCABQgBAAgDAAQgHABgIABQgDAAgBABQgMABgLABQgBAAgBAAQgHABgGAAQgBABgBAAQgLAAgNABQgFAAgFgGQgFgFAAgJg");
	this.shape_27.setTransform(-1.1795,24.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.4)").ss(2.4,1,1).p("AisAZQACgIAIgHQATgMAAAAQACgBABgBQAGgEAHgDQAMgGANgFQAPgFAPgFQAHgCAIgCQAPgCAQgDQAEAAAFAAQAKgBAGAAQADAAAFAAQAFgBACABQAGAAAGAAQACAAACAAQAAABABAAQASACARACQAUAFASAFQASAIASAIQABAAAAAAQABABABAAQADACAEACQAAABABAAQABABABAAQAEADAFACQAIAGACAIQACAIgEAGQgEAFgFAAQgogBgoABQAAABgBAAQgCAAgBAAQgBAAgDABQgHABgHAAQgDABAAAAQgKABgKABQgBAAgBAAQgGABgGABQgBAAAAAAQgLABgKABQgFgBgEgEQgFgGAAgIg");
	this.shape_28.setTransform(-1.5417,24.3375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0.439)").ss(2.7,1,1).p("AinAYQACgIAHgGQATgLAAgBQACAAABgBQAGgEAGgDQAMgFAMgGQAPgEAPgFQAHgCAHgBQAPgDAQgCQAEAAAEgBQAKgBAGABQADgBAEAAQAFAAADAAQAFAAAGABQACAAABAAQABAAABAAQARACARACQATAFARAEQASAHASAIQABAAAAAAQABABABAAQADACADACQABAAABABQAAAAABABQAEADAFABQAIAFADAJQABAHgDAFQgDAFgFAAQgigBgjACQgBAAAAAAQgCAAgBAAQAAABgDAAQgGABgGABQgDAAAAAAQgJACgJABQgBAAAAAAQgFABgGAAQAAABgBAAQgJAAgKABQgEAAgDgEQgFgFAAgIg");
	this.shape_29.setTransform(-1.9,24.4375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.478)").ss(2.9,1,1).p("AijAXQADgIAHgFQASgLABAAQABgBABgBQAGgDAGgDQAMgFAMgFQAOgFAOgEQAHgCAHgBQAPgDAPgCQAEAAAEgBQAJgBAGABQADgBAEAAQAFAAACAAQAGAAAGAAQABAAACAAQAAABABAAQAQABARACQASAFARAEQASAGARAHQAAABABAAQABAAABABQADABADACQABAAAAABQABAAABABQAEACAEADQAIAEADAHQACAHgDAFQgCAFgEgBQgdAAgeABQgBABAAAAQgBAAgBAAQgBABgCAAQgFABgFABQgCAAgBAAQgHACgIABQAAAAgBAAQgEABgFAAQAAABgBAAQgIAAgIACQgEAAgCgEQgFgFABgHg");
	this.shape_30.setTransform(-2.2806,24.5625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.522)").ss(3.1,1,1).p("AieAXQACgHAHgGQASgKAAAAQACgBABgBQAGgCAGgEQALgEALgFQAOgFAOgEQAHgBAGgCQAPgCAOgCQAEAAAEgBQAJAAAGgBQADAAADAAQAFAAADAAQAFAAAFAAQACAAABAAQABAAABAAQAQACAQABQARAEARAEQARAHARAFQAAAAABABQABABAAAAQADACADABQABAAAAAAQABABABAAQAEADAEADQAIADADAHQACAGgCAFQgBAEgEAAQgYAAgYABQgBAAAAAAQgBABgBAAQgBAAgBABQgEABgFAAQgCABAAAAQgGABgGABQgBABAAAAQgEABgDABQgBAAAAAAQgHABgHABQgDAAgCgEQgEgEABgGg");
	this.shape_31.setTransform(-2.6306,24.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.561)").ss(3.4,1,1).p("AiaAWQADgHAHgFQARgKAAAAQACgBAAAAQAGgDAGgDQALgEALgFQANgEAOgEQAGgBAHgCQAOgCANgCQAEAAAEgBQAJAAAGgBQACAAAEAAQAFAAACAAQAGAAAFAAQABAAACAAQAAAAABAAQAPACAQABQARADAQAEQAQAGARAFQAAAAABABQABAAAAAAQADACADABQABABAAAAQABAAABAAQAEADAEACQAHADADAGQADAGgBAEQgBAEgDAAQgTAAgTACQgBAAAAAAQgBAAAAABQgBAAgBABQgDABgEAAQgBABgBAAQgEABgFABQAAABgBAAQgDABgCABQgBAAAAAAQgFABgGABQgCAAgCgDQgDgEAAgFg");
	this.shape_32.setTransform(-3,24.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.6)").ss(3.6,1,1).p("AiWAVQADgHAHgEQARgKAAAAQACAAAAAAQAGgDAGgDQAKgEALgEQANgEANgEQAGgBAGgBQAOgCANgCQAEgBADAAQAJgBAGAAQACAAADgBQAEAAADAAQAFAAAFAAQABAAACAAQABAAAAAAQAPACAPABQAQADAQADQAQAFAQAFQAAAAABABQABAAAAAAQADACADABQABAAAAAAQABABAAAAQAEACAEACQAIADADAGQADAFgBAEQAAADgCAAQgOAAgOACIgBAAQAAABgBAAQAAABgBAAQgCABgDABQgBAAAAAAQgEACgDABIAAAAQgDABgCABIAAAAQgEABgEACQgCAAAAgDQgEgDABgFg");
	this.shape_33.setTransform(-3.3458,24.8786);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.639)").ss(3.9,1,1).p("AiRAUQADgGAGgEQARgJAAAAQABgBABAAQAGgCAFgDQAKgDALgEQAMgEANgEQAGgBAGgBQAMgCANgCQAEAAADgBQAJAAAFgBQADAAADAAQAEgBACABQAFAAAFAAQABAAACAAQAAAAABAAQAOABAOABQARACAOADQAQAFAPAEQABAAAAAAQABABABAAQACABADABQABABAAAAQABAAABAAQAEACAEACQAHADADAFQADAEAAAEQAAADgBAAQgJAAgJADIAAAAIAAAAQAAABgBAAQgCABgBABQgBAAAAABQgCABgCABIgBAAQgBACgBABIgBAAQgCABgCACQgCAAAAgCQgDgEABgEg");
	this.shape_34.setTransform(-3.6937,24.9875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.678)").ss(4.1,1,1).p("AiNATQADgFAHgEQAQgJAAAAQABAAABAAQAFgCAGgCQAJgEAKgEQAMgDAMgDQAGgBAGgCQAMgCANgBQADgBAEAAQAHgBAGAAQACAAADgBQAEAAACAAQAFAAAFAAQABAAABAAQABAAAAAAQAOABAOABQAQACAOACQAPAEAPAEQAAAAABAAQABABAAAAQADABADABQAAAAABAAQAAABABAAQAEACAEABQAHADADAEQAEAEAAADQABADgBAAQgDAAgEADIAAABQAAAAAAABQgBABgBAAQAAABAAAAQgBACgBABQAAABgBABIAAAAQgBABgBACQgBABABgCQgDgDABgEg");
	this.shape_35.setTransform(-4.0167,25.08);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.722)").ss(4.3,1,1).p("ACMASIkaAAQAEgFAGgEQAPgHABAAQABgBABAAQAFgBAFgDQAKgDAJgDQAMgDALgEQAGgBAFgBQAMgCAMgBQAEgBADAAQAHgBAGAAQADAAADgBQACAAADAAQAEAAAFAAQABAAABAAQABAAAAAAQANAAAOABQAPACANACQAPADAOAEQABAAAAAAQABAAABAAQACABADABQABAAABAAQAAABAAAAQAEABAEACQAHACADAEQAEADABADIACACQABABABADQABAAAAABIABAAQAAABAAABQAAABAAAAQAAABABABQAAAAAAABIABAAQAAABAAABQAAACABACQAAAAAAgBQgBgDABgDg");
	this.shape_36.setTransform(-3.9,25.2063);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0.761)").ss(4.6,1,1).p("ACPASIklAAQAEgFAGgDQAPgHABAAQABgBAAAAQAGgCAEgBQAKgDAJgDQALgDALgDQAGgBAFgBQALgCAMgBQADgBADAAQAHgBAGAAQADgBACAAQAEAAACAAQAEAAAEgBQABAAABAAQABABAAAAQANAAAMAAQAPACAOABQAOADANADQABAAAAAAQABAAAAABQADAAACABQABAAABABQAAAAABAAQAEABADABQAHADAEADQAEACABACQACADABgBQAGABAHADQAAABABAAQAAAAABAAQABABAAAAQABABABABQAAAAAAABQACABACACIAAAAQAAAAABABQAAAAABABQACACACACQABAAACgBQgCgCABgCg");
	this.shape_37.setTransform(-3.05,25.2833);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.8)").ss(4.8,1,1).p("ACUAQIkxAAQAEgEAGgCQAOgHABAAQABAAAAAAQAFgCAFgBQAJgDAJgDQAKgDALgCQAFgBAFgBQALgCALgBQADgBADAAQAHgBAFAAQADgBADAAQADAAACAAQAEAAAEgBQABAAACAAQAAAAABAAQALAAAMABQAOABANABQANACANACQABABABAAQABAAAAAAQACABADAAQAAAAABABQABAAAAAAQADABAEABQAGACAFADQAEACACABQADACABAAQAMABAMADIAAAAQABABABAAQABABABAAQACABACABQAAAAAAABQADABADACQABAAAAAAQACABACABQADACADACQACABACgBQgBgBABgDg");
	this.shape_38.setTransform(-2.2,25.4125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0.839)").ss(5.1,1,1).p("ACbAQIk/AAQADgDAGgDQAOgGABAAQAAAAABAAQAFgCAEgCQAJgCAIgCQALgDAKgCQAFgBAFAAQAKgCAKgBQADgBADgBQAHAAAFAAQADgBACgBQADAAACAAQAEAAAEAAQABAAABAAQABAAAAAAQAMAAALgBQANABANABQANACAMABQABAAABABQAAAAABAAQACAAACABQABABAAAAQABAAABAAQADAAADACQAHAAAEADQAEACADABQADACADAAQARAAAQAEQABAAAAAAQABAAABAAQABABABABQADAAADACQAAAAABABQAFABAEABQAAAAABAAQACACADABIAAAAQACABACABQADABACABQADABACAAQAAgBAAgCg");
	this.shape_39.setTransform(-1.35,25.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.878)").ss(5.3,1,1).p("AClAPIlSAAQAFgDAFgCQAOgFABAAQAAgBABAAQAEgBAFgCQAIgBAIgCQAKgDAKgCQAEgBAFAAQAKgCAKgBQADgBADAAQAGgBAFAAQACgBADAAQACgBADABQADgBAEAAQABAAABAAQABAAAAAAQALAAALgBQANAAALABQAMABANABQAAAAABAAQAAABABAAQACAAACAAQABABAAAAQABAAAAAAQAEAAADABQAGABAFACQAEABADACQAEABADAAQAXABAVADQABAAAAAAQACAAABABQABAAACABQADABAEABQABAAABABQAFABAGABQABAAAAAAQAEACADABIAAAAQAFABAGADQABAAABABQADAAADABQAAgBABgBg");
	this.shape_40.setTransform(-0.475,25.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.922)").ss(5.5,1,1).p("ACvAOIlkAAQAFgDAFgBQANgFABAAQABAAAAAAQAFgBAEgCQAIgCAHgBQAKgCAJgCQAFAAAEgBQAJgCAKgBQADAAACgBQAGAAAFgBQADAAACgBQACAAACAAQAEAAADgBQABAAABAAQABAAAAAAQALAAAKgBQANAAALAAQALABAMAAQAAAAABAAQAAAAABABQACAAACAAQABAAABAAQAAAAAAAAQADABAEAAQAGABAFABQAFABADABQAEABAFgBQAbACAbAEQAAAAABAAQACABABAAQABAAACAAQAFABAFABQABAAABABQAHABAHACQAAAAABAAQAEABAEACIAAAAQAIACAIACQABABABAAQADABACAAQAAgBACAAg");
	this.shape_41.setTransform(0.4,25.7125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.961)").ss(5.8,1,1).p("Ai8AOQAFgCAFgCQANgDABAAQAAgBABAAQAEgBAEgBQAIgCAHgBQAJgBAJgCQAEgBAEAAQAJgCAJgBQADAAADgBQAFAAAFgBQACAAACgBQACAAADAAQADgBADAAQABAAABAAQABAAAAAAQAKgBAKgBQAMAAAKAAQAMAAAKAAQABAAAAAAQABAAAAAAQACAAACAAQABAAAAAAQABAAAAAAQAEAAADABQAFAAAGABQAEAAAFABQAFAAAEAAQAhABAgAFQABAAAAAAQACAAACABQACAAACABQAFABAGAAQABAAABABQAIABAJACQABAAAAAAQAFABAFACQAAAAABAAQAJACAJADQAEAAAFACg");
	this.shape_42.setTransform(1.175,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// body
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C03E21").s().p("AnxDmQjNhfAAiHQAAiGDNhfQDOhgEjAAQEjAADOBgQDOBfAACGQAACHjOBfQjOBgkjAAQkjAAjOhgg");
	this.shape_43.setTransform(0.8,34.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C03E21").s().p("AnyDmQjPhfAAiHQAAiGDPhfQDOhgEkAAQElAADOBgQDPBfAACGQAACHjPBfQjOBgklAAQkkAAjOhgg");
	this.shape_44.setTransform(0.8,34.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C03E21").s().p("An1DmQjPhfAAiHQAAiGDPhfQDQhgElAAQEmAADPBgQDQBfAACGQAACHjQBfQjPBgkmAAQklAAjQhgg");
	this.shape_45.setTransform(0.8,34.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C03E21").s().p("An3DmQjQhfAAiHQAAiGDQhfQDRhgEmAAQEoAADPBgQDRBfAACGQAACHjRBfQjPBgkoAAQkmAAjRhgg");
	this.shape_46.setTransform(0.8,34.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C03E21").s().p("An5DnQjRhgAAiHQAAiGDRhfQDRhgEoAAQEoAADSBgQDRBfAACGQAACHjRBgQjSBfkoAAQkoAAjRhfg");
	this.shape_47.setTransform(0.8,34.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C03E21").s().p("An7DnQjShgAAiHQAAiGDShgQDShfEpAAQEqAADSBfQDSBgAACGQAACHjSBgQjSBfkqAAQkpAAjShfg");
	this.shape_48.setTransform(0.825,34.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C03E21").s().p("An+DnQjShgAAiHQAAiGDShgQDUhfEqAAQErAADTBfQDTBgAACGQAACHjTBgQjTBfkrAAQkqAAjUhfg");
	this.shape_49.setTransform(0.825,34.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C03E21").s().p("AoADnQjThgAAiHQAAiGDThgQDVhfErAAQEsAADUBfQDUBgAACGQAACHjUBgQjUBfksAAQkrAAjVhfg");
	this.shape_50.setTransform(0.825,34.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C03E21").s().p("AoCDnQjUhgAAiHQAAiGDUhgQDVhfEtAAQEtAADVBfQDVBgAACGQAACHjVBgQjVBfktAAQktAAjVhfg");
	this.shape_51.setTransform(0.825,34.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C03E21").s().p("AoEDnQjVhgAAiHQAAiGDVhgQDWhfEuAAQEvAADVBfQDWBgAACGQAACHjWBgQjVBfkvAAQkuAAjWhfg");
	this.shape_52.setTransform(0.825,34.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C03E21").s().p("AoGDnQjXhgABiHQgBiGDXhgQDXhgEvAAQEwAADWBgQDYBgAACGQAACHjYBgQjWBgkwAAQkvAAjXhgg");
	this.shape_53.setTransform(0.8,34.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C03E21").s().p("AoIDnQjXhgAAiHQAAiGDXhgQDYhgEwAAQExAADXBgQDYBgAACGQAACHjYBgQjXBgkxAAQkwAAjYhgg");
	this.shape_54.setTransform(0.8,34.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C03E21").s().p("AoKDnQjYhggBiHQABiGDYhgQDZhgExAAQEzAADYBgQDZBgAACGQAACHjZBgQjYBgkzAAQkxAAjZhgg");
	this.shape_55.setTransform(0.8,34.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C03E21").s().p("AoMDnQjahgABiHQgBiGDahgQDahgEyAAQE0AADZBgQDZBgABCGQgBCHjZBgQjZBgk0AAQkyAAjahgg");
	this.shape_56.setTransform(0.8,34.625);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C03E21").s().p("AoODnQjahgAAiHQAAiGDahgQDahgE0AAQE1AADaBgQDbBggBCGQABCHjbBgQjaBgk1AAQk0AAjahgg");
	this.shape_57.setTransform(0.8,34.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C03E21").s().p("AoRDnQjbhgAAiHQAAiHDbhfQDchgE1AAQE2AADbBgQDcBfAACHQAACHjcBgQjbBgk2AAQk1AAjchgg");
	this.shape_58.setTransform(0.825,34.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C03E21").s().p("AoTDoQjchhAAiHQAAiHDchfQDchgE3AAQE3AADcBgQDdBfAACHQAACHjdBhQjcBfk3AAQk3AAjchfg");
	this.shape_59.setTransform(0.825,34.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C03E21").s().p("AoVDoQjdhhAAiHQAAiHDdhfQDdhgE4AAQE5AADcBgQDeBfAACHQAACHjeBhQjcBfk5AAQk4AAjdhfg");
	this.shape_60.setTransform(0.825,34.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C03E21").s().p("AoXDoQjehhAAiHQAAiHDehfQDehgE5AAQE6AADeBgQDeBfAACHQAACHjeBhQjeBfk6AAQk5AAjehfg");
	this.shape_61.setTransform(0.825,34.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C03E21").s().p("AoZDoQjfhhAAiHQAAiHDfhfQDfhgE6AAQE7AADfBgQDfBfAACHQAACHjfBhQjfBfk7AAQk6AAjfhfg");
	this.shape_62.setTransform(0.825,34.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C03E21").s().p("AoVDoQjdhhAAiHQAAiHDdhfQDdhgE4AAQE5AADdBgQDdBfAACHQAACHjdBhQjdBfk5AAQk4AAjdhfg");
	this.shape_63.setTransform(0.825,34.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C03E21").s().p("AoTDoQjchhAAiHQAAiHDchfQDchgE3AAQE4AADcBgQDcBfAACHQAACHjcBhQjcBfk4AAQk3AAjchfg");
	this.shape_64.setTransform(0.825,34.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C03E21").s().p("AoRDnQjbhgAAiHQAAiHDbhfQDbhgE2AAQE2AADcBgQDbBfAACHQAACHjbBgQjcBgk2AAQk2AAjbhgg");
	this.shape_65.setTransform(0.825,34.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C03E21").s().p("AoPDnQjahgAAiHQAAiGDahgQDbhgE0AAQE1AADbBgQDaBgAACGQAACHjaBgQjbBgk1AAQk0AAjbhgg");
	this.shape_66.setTransform(0.825,34.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C03E21").s().p("AoNDnQjZhgAAiHQAAiGDZhgQDahgEzAAQE0AADZBgQDaBgAACGQAACHjaBgQjZBgk0AAQkzAAjahgg");
	this.shape_67.setTransform(0.825,34.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C03E21").s().p("AoLDnQjYhggBiHQABiGDYhgQDZhgEyAAQEzAADZBgQDZBgAACGQAACHjZBgQjZBgkzAAQkyAAjZhgg");
	this.shape_68.setTransform(0.8,34.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C03E21").s().p("AoJDnQjYhgAAiHQAAiGDYhgQDYhgExAAQEyAADXBgQDZBgAACGQAACHjZBgQjXBgkyAAQkxAAjYhgg");
	this.shape_69.setTransform(0.825,34.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C03E21").s().p("AoHDnQjXhgAAiHQAAiGDXhgQDXhgEwAAQEwAADXBgQDYBgAACGQAACHjYBgQjXBgkwAAQkwAAjXhgg");
	this.shape_70.setTransform(0.825,34.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C03E21").s().p("AoFDnQjWhgAAiHQAAiHDWhfQDXhgEuAAQEvAADWBgQDXBfAACHQAACHjXBgQjWBgkvAAQkuAAjXhgg");
	this.shape_71.setTransform(0.825,34.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C03E21").s().p("AoDDnQjVhgAAiHQAAiGDVhgQDWhfEtAAQEuAADWBfQDVBgAACGQAACHjVBgQjWBfkuAAQktAAjWhfg");
	this.shape_72.setTransform(0.8,34.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C03E21").s().p("AoBDnQjUhgAAiHQAAiGDUhgQDVhfEsAAQEtAADUBfQDVBgAACGQAACHjVBgQjUBfktAAQksAAjVhfg");
	this.shape_73.setTransform(0.8,34.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C03E21").s().p("An/DnQjThgAAiHQAAiGDThgQDUhfErAAQEsAADTBfQDUBgAACGQAACHjUBgQjTBfksAAQkrAAjUhfg");
	this.shape_74.setTransform(0.825,34.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C03E21").s().p("An8DnQjUhgAAiHQAAiGDUhgQDShfEqAAQEqAADUBfQDTBggBCGQABCHjTBgQjUBfkqAAQkqAAjShfg");
	this.shape_75.setTransform(0.8,34.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C03E21").s().p("An7DnQjShgABiHQgBiGDShfQDThgEoAAQEpAADTBgQDRBfAACGQAACHjRBgQjTBfkpAAQkoAAjThfg");
	this.shape_76.setTransform(0.8,34.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C03E21").s().p("An5DnQjQhggBiHQABiGDQhfQDShgEnAAQEpAADQBgQDSBfAACGQAACHjSBgQjQBfkpAAQknAAjShfg");
	this.shape_77.setTransform(0.8,34.625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C03E21").s().p("An3DmQjQhfAAiHQAAiGDQhfQDRhgEmAAQEnAADQBgQDQBfAACGQAACHjQBfQjQBgknAAQkmAAjRhgg");
	this.shape_78.setTransform(0.8,34.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C03E21").s().p("An0DmQjQhfAAiHQAAiGDQhfQDPhgElAAQEmAADPBgQDQBfAACGQAACHjQBfQjPBgkmAAQklAAjPhgg");
	this.shape_79.setTransform(0.8,34.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

	// legs
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C02B1E").s().p("AK9GSIg9heQhYgfgZhLIgpgQQhNgigxgqIApg4QBfAnAqBSQAXAFAUAGQBJAYAnAzIAFAPQAZBpgQAYgAq5EUIAFgPQAngzBKgYQAUgGAWgFQAqhSBggnIAnA4QgxAqhMAiIgoAQQgaBLhYAfIg9BeIgFADQgRgYAZhpgAPjDoIg3hkQh6AWhQg0QiNAgiKhAIAlg0QB2gBB/AsQBYgcB6AnIAdANQAZAwACA1QAAAWgDAYgAvqDoQgFgYABgWQABg1AZgwIAegNQB6gnBYAcQB/gsB2ABIAkA0QiIBAiPggQhPA0h6gWIg3BkgAS+BmIhOjuQh8A1h/gKQh3BFiZACIgPhUQCDgvCYATQBchLChgFIAsAAIAKgBIAAABIAGAUQAzCSgWCagAypjCIAGgUIAAgBIAKABIArAAQCiAFBcBLQCZgTCDAvIgQBUQiZgCh3hFQh/AKh8g1IhODuIgJAEQgViaAyiSgAUalJQivA0ijgHQihBEivAbIgRhaQCqgyCrgGQCeg4ChgNIBiAPQAqCvgUB6IgIAigA1zhcQgTh6ArivIBhgPQChANCeA4QCsAGCpAyIgRBaQivgbighEQikAHivg0IhREPg");
	this.shape_80.setTransform(-0.85,49.45);

	this.instance_2 = new lib.crab_legs("synched",0);
	this.instance_2.setTransform(-0.85,49.5,0.5764,0.5764,0,0,0,243.1,-70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.shape_80}]},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-86.9,280.4,182.7);


(lib.Crab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
		
		this.stage.getChildAt(0).deck.visible = false;
		this.stage.getChildAt(0).scorecard.visible = false;
		this.stage.getChildAt(0).beachBg.visible = false;
		
		//this.stage.getChildAt(0).nextLevelAlert.gotoAndStop(3);
		
		exportRoot.gotoAndStop("level2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// claws
	this.instance = new lib.crab_claw("synched",0);
	this.instance.setTransform(94.5,-16.55,0.5764,0.5764,0,-13.9774,166.0226,102.6,-82);

	this.instance_1 = new lib.crab_claw("synched",0);
	this.instance_1.setTransform(-100.25,-16.6,0.5764,0.5764,13.9774,0,0,102.5,-82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_1,p:{startPosition:24}},{t:this.instance,p:{startPosition:24}}]},39).wait(1));

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AFWhDIhZA/Ig8AqIgxAjAlVhIIBZBAIA6AoIA0Al");
	this.shape.setTransform(0.45,-1.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AD+A8QgaAAgSgRQgTgRAAgYQAAgHACgGIA8grIABAAIACAAQAaAAATAQQASARAAAXQAAAYgSARQgTARgaAAIgCAAgAksAnQgSgRAAgXQAAgYASgRQATgRAaAAIADAAQAYABASAQQAMALAFAOQACAHAAAJQAAAXgTARQgTARgaAAQgaAAgTgRgAjBgRIg7gqgADSgmQARgQAaAAIg8ArQAEgPANgMgAD9g2g");
	this.shape_1.setTransform(0.45,3.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(6,1,1).p("AFfg1IhiAwIhCAhIg3AaAleg0IBkAsIBCAbIA6AZ");
	this.shape_2.setTransform(0.3,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADrA7IgCgBQgagEgPgTQgQgTADgXQACgIADgHIBCghIABABIABAAQAbAEAPATQAQAUgEAXQgDAXgVAOQgQALgTAAIgMgBgAkXAvQgWgNgEgXQgFgXAOgUQAPgUAagGIADAAQAYgEAUAMQAOAIAHAMQAEAHACAJQAFAWgPAUQgPAVgZAFQgIACgHAAQgRAAgQgJgAi7geIhBgcgADMgtQAVgNAZADIhCAhQAGgNAOgKgAD6g3IAAAAg");
	this.shape_3.setTransform(0.5509,3.3033);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},19).to({state:[{t:this.shape_1},{t:this.shape}]},20).wait(1));

	// mouth
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("AjEANQDQgzC5Az");
	this.shape_4.setTransform(2.125,25.8625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.749)").ss(4.5,1,1).p("ACPAUIkkAAQAEgFAGgDQAPgIAHgEQACAAAAAAQADgBACgBQAFgCAFgCQAAgBAAAAQABAAABAAQALgEALgDIAAAAQAGgCAFgBQABAAAAAAQAOgDANgCQALgBAKgBQAMgBANAAQAGAAAGAAQABAAAAAAQABAAABAAQAQACARACQAKACALADQAHACAHACQABABAAAAQAEABADABQABABAAAAQABAAAAAAIABAAQADACAEABQAEADADACQAFACABADQACADABAAQAAAAABAAIABAAQAAABABAAIAAAAQABABACABIAAAAQABAAABAAQAAABAAAAQABAAAAAAIAAAAQABABAAAAIABAAQACACABABQABABAAAAQABACABABQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABABIAAAAIAAAAQAAAAAAABIABAAQAAAAAAAAQAAABAAAAQAAAAABAAQgBAAAAgBIAAAAQgBAAAAgBQgBgCAAgCgACVAZQAAAAAAAAIAAABACUAZQAAgBAAAA");
	this.shape_5.setTransform(-3.1,25.1125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.502)").ss(3,1,1).p("AihAeQACgIAGgHQARgNAJgGQACgBAAAAQACgBACgCQAHgDAGgEQAAAAABAAQABAAAAgBQAOgFANgGQABAAABgBQAGgCAHgCQABAAABAAQARgEAQgDQAOgBANgBQAPgBARABQAHABAIABQABAAABAAQABABABAAQAVAEAUAFQANAFAMAFQAJAFAJAFQABABAAAAQAEACAEADQABAAAAABQABAAAAAAIAAABQAFACAEADQAFAEACAFQADAHgCAFQgCAFgEABQgDAAgCAAQgBAAAAAAQgCAAgBABQgDAAgEAAQAAAAgBAAQgIABgHAAQgBABAAAAQgDAAgDAAIAAAAQgDABgCAAQgBAAAAAAQgCAAgDABQAAAAgBAAQgBAAgBAAQAAAAgBAAQgHABgGACQgBAAgBAAQgKABgJACIgBAAQgCAAgCAAQAAAAgBAAQAAABgBAAIAAAAQgBAAAAAAQgDAAgDAAIgBAAQAAAAgBgBQAAABgBAAQgBAAgCAAQgCAAgDgCQgGgEgBgHg");
	this.shape_6.setTransform(-2.285,24.135);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("Ai8AmQAAgLAHgJQATgSAKgJQACgCAAAAQADgCACgCQAHgFAHgEQABgBABAAQABgBABAAQAQgIAQgIIABAAQAJgDAIgDQABAAABgBQAUgEAVgFQAQgBARgBQARAAAUACQAKACAJABQABAAACABQABAAABAAQAZAIAZAIQAOAIAPAIQALAHAKAHQAAABABAAQAEAEAEADQABABABAAQAAABABAAIAAAAQAFAFAEAFQAGAHABAHQACAKgGAIQgFAIgJAAQgGABgFAAQgBAAgCAAQgEAAgCAAQgHABgIAAQgBAAgBAAQgRAAgRABQAAAAgCAAQgGAAgGAAQgBABgBAAQgFAAgFAAQgBAAgCAAQgFAAgEAAQgCABgBAAQgCAAgDAAQgBAAgBAAQgPABgPABQgBABgEAAQgTAAgVABQgBAAgBAAQgEAAgEAAQgBAAgBAAQgCAAgBAAQgBAAAAAAQgBAAgBAAQgHgBgHAAQAAAAgBAAQAAAAgBgBQgCAAgBABQgDgBgEAAQgFgBgGgDQgIgGgCgLg");
	this.shape_7.setTransform(-0.0398,23.2958);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhzBQIgEgBIgNAAIgDAAIgFAAIgBgBIgDAAIgVgCIgCAAIgCAAIgEAAIgMgCQgHgBgIgFQgMgIgDgOQgCgPAIgMIAHgKIACgDIAXgWIABgBIABgBIAGgFIAQgMIACgBIACgBIAlgUIABAAIABgBIATgHIADgBIAwgLIAngCQAUAAAYAEIAWAEIADABIADAAIA6AWIAiAVIAXAUIABABIAKAJIABACIABABIABAAIAAABIAKANQAGAIAAAKQABANgJALQgJAKgOABIgRABIgEAAIgKABIgXAAIgDAAIg0AAIgDABIgTAAIgEAAIgPAAIgEABIgPAAIgEAAIgIAAIgEABIgtABIgIABg");
	this.shape_8.setTransform(2.225,22.4722);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah0BPIgEgBIgNAAIgDAAIgFAAIgBgBIgYgCIgCAAIgCAAIgHAAIgJgCQgHgBgHgEIgBgBQgKgGgDgMIgBgEQgCgOAHgMIABgBIAHgKIACgDIAYgVIABgCIADgBIAEgFIAQgLIACgBIACgBIAlgTIAWgIIACgBIABAAIAvgKIAFAAIAYgCIAKgBIAAAAIAKAAIAQABIAFACIACAAIALABIAWAEIADABIADAAIAGADIABAAIAzAUIAiAUIAJAIIADACIAIAIIACAAIABABIAAABIALAKIABACIABABIABAAIAAABIAKANIACAFQADAGAAAHQAAAGgBAEQgDAIgGAFQgDADgEADQgHAEgJAAIgVABIgJABIhOAAIgEAAIgSAAIgEABIgPAAIgEAAIgPAAIgEABIgIAAIgDABIgGAAIggABIgIAAIgIABg");
	this.shape_9.setTransform(2.2039,22.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah4BNIgDAAIgDAAIgHAAIgEAAIgFAAIgBgBIgDAAIgVgCIgKAAIgJgCQgHgBgHgEIgBgBQgKgHgDgMIgBgEQgCgNAIgMIABgBIAHgJIACgEIAZgWIADgCIAEgEIARgLIACgBIABgBIAmgTIABAAIABAAIAEgCIAPgGIADAAIABAAIApgKIALAAIAXgBIAJgBIABAAIALAAIAQABIAEABIACAAIAMACIAWAEIADABIADAAIAFACIABAAIAzAUIAiAVIAJAHIADADIALAIIABABIAAAAIALAKIABACIABABIABAAIAAABIAJANIACAEQADAHgBAHQAAAFgCAFQgCAHgGAFIgIAFQgHAEgJABIgVABIgJAAIgXAAIgDAAIhKAAIgEABIgPAAIgEAAIgPAAIgDAAIgJAAIgDABIgFAAIggABIgIAAIgJABIg+AAg");
	this.shape_10.setTransform(2.1825,22.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiKBLIgFAAIgBAAIgYgBIgCAAIgCgBIgGAAIgJgCQgHgBgHgEIgBgBQgKgIgCgLIgBgEQgCgOAIgKIABgBIAKgNIAJgIIABgBIAPgNIACgBIABgBIAVgOIACgBIACgCIAlgSIABgBIAGgCIAPgFIACAAIABAAIApgJIALgCIAXAAIAJgBIABAAIALAAIAQABIAEABIACABIAMABIAWAEIADABIADAAIAFADIABAAIAzATIArAcIABABIALAJIACAAIABABIAAABIALAKIABACIABABIABAAIAAABQAFAHAEAGIACAFQACAGgBAHQAAAGgCAEQgDAHgHAFIgHAEQgIAEgJAAIgVABIgJAAIhNAAIgEABIgSgBIgEABIgiAAIgEAAIgIAAIgDABIgGAAIggABIgIAAIgIAAIhPABg");
	this.shape_11.setTransform(2.1682,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiSBKIgXgBIgCAAIgCgBIgGAAIgJgCQgHgBgHgFIgBgBQgKgHgCgMIAAgDQgCgOAIgLIABgBIAIgJIACgDIAJgHIACgBIABgBIAMgLIACgBIACgBIABgBIAEgEIARgKIACgBIACgCIAsgUIAPgFIADgBIABAAIApgIIALgBIAWgBIAJgBIABAAIALABIAQABIAEAAIACABIAMABIAhAIIABAAIAzATIArAcIABABIADABIAIAHIACABIAMAMIACACIABAAIAAABIAAABQAFAGAEAIIABAEQACAHgBAGIgDAKQgDAHgHAEIgIAEQgHADgJAAIgVABIgJAAIgXAAIgDAAIgzAAIgEAAIgTAAIgDAAIgjAAIgDAAIgIAAIgDABIgGAAIggABIgIABIgIAAIhXABg");
	this.shape_12.setTransform(2.1798,22.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah8BJIgDAAIgDAAIgHAAIgDAAIgggBIgCgBIgGAAIgJgCQgHgBgHgFIgBgBQgJgIgCgMIAAgDQgCgNAJgLIABgBIAiggIACgBIACgBIABgBIAEgEIATgKIACgCIAlgRIACAAIAFgDIASgFIABAAIApgIIALgBIAXgBIAJAAIABAAIAKAAIAQABIAEABIACAAIAMABIAWAFIADABIADAAIAGABIABAAIAvATIADABIAsAbIADADIAIAGIACACIABABIAAABIALAJIACACIABABIAAAAIAAABQAGAHADAIIABADQABAIgBAGQgBAFgDAFQgDAGgHAEQgEADgEAAQgIADgJABIgVAAIgIAAIgXAAIgDAAIhKgBIgDABIgjgBIgDABIgHAAIgEAAIgGAAIggACIgIAAIgIAAIg+ABg");
	this.shape_13.setTransform(2.1838,22.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah9BIIgDAAIgDAAIgHAAIgDAAIgpgCIgIgCQgHgCgHgEIgBgBQgJgIgBgNIgBgCQgBgNAJgLIABgBIAWgVIANgKIACgCIAcgRIAlgRIACAAIABAAIAEgCIAQgFIACgBIABAAIApgIIALAAIAXgBIAJAAIABAAIAKAAIAQABIAEABIACAAIAMACIAWAEIADABIADAAIAGACIABAAIAvASIAvAcIADADIAIAGIACACIABABIAAAAIALAKIACACIABABIAAAAIAAABQAGAHACAIIABADQABAHgBAHQgBAFgDAEQgFAHgGADIgJADQgIACgIABIgVAAIgJAAIh1gBIgEAAIgQAAIgEAAIgGAAIgEABIgGAAIggABIgIAAIgIABIgmAAIgEABIgVAAg");
	this.shape_14.setTransform(2.1647,22.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah+BGIgDAAIgDABIgzgCIgIgCQgHgBgHgGIgBgBQgJgIgBgMIAAgCQgBgOAJgKIABgBIAVgTIABgBIAXgRIATgKIACgCIAngQIABAAIAEgDIATgFIABAAIApgHIALgBIAWgBIAJAAIABAAIAKAAIAQACIAEAAIACAAIAMACIAWAFIADABIAJABIABAAIAvASIAvAcIABABIAKAIIAOANIACACIABABIAAAAIAAABQAGAHACAIIABADQABAIgCAGQgCAFgDAFQgFAFgGAEIgJACIgRACIgVAAIgIAAIgXgBIgDABIhbgCIgEABIgQgBIAAAAIgEAAIgGAAIgFABIgFAAIggABIgIABIgJAAIglABIgEAAIgVABg");
	this.shape_15.setTransform(2.1864,23.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AivBFIgDAAIgGAAIgIgCQgHgDgGgEIgCgBQgIgJgBgNIAAgBQgBgOAJgJIABgCIAVgSIABgBIABgBIACgBIANgKIACgBIABgBIAYgNIACgBIAGgDIAngQIASgFIABAAIA0gIIAWgBIAJAAIABAAIAKABIAQABIAEABIACAAIANACIAWAEIADACIACAAIAGABIABAAIAvASIAvAbIABABIACABIAIAIIAEACIAKAKIACACIABABIAAABIAAABQAGAGACAIIABAEQAAAHgCAGQgCAGgEADQgFAHgHACIgJADIgRABIgVAAIgIAAIhMgCIgEABIg4gCIgEAAIgGAAIgFABIgFAAIggACIgIAAIgJAAIglABIgEABg");
	this.shape_16.setTransform(2.1987,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ai5BDIgJgCQgHgCgGgFIgBgBQgJgJAAgNIAAAAQAAgOAJgKIABgBIAVgSIABgBIABAAIAOgLIAEgCIABgBIBBgeIABAAIAEgCIATgFIABAAIApgHIALAAIAVgBIAJAAIABAAIALABIAQABIAEAAIABABIANACIAWAEIADABIAIACIABAAIAwARIAuAcIABABIADABIAIAHIABABIACABIALAKIACACIABABIAAABIAAABQAGAGABAJIABADQAAAIgDAGQgCAFgEAEQgFAGgHACIgKACIgRAAIgVAAIgIAAIgWgBIgDABIhvgDIgEAAIgGAAIgFABIgFAAIggABIgIABIgJAAIglABIgEABIgbAAIgDABg");
	this.shape_17.setTransform(2.2237,23.2167);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ai6BDQgMgBgKgJQgJgKAAgNQAAgOAJgKIAWgSIACgBIABgBIACgCIARgLIAggQIAngPIATgFIApgGIALgBIAVAAIAKAAIALAAIAQACIAEAAIABAAIAuAJIABAAIAwASIAuAbIABABIADABIAIAHIABABIACABIALAKQAKAJAAAPQAAANgKAJQgJAJgNAAIi2gEIgEAAIgHAAIgJABIggABIgIABIguABIgEABIgbAAIgDABg");
	this.shape_18.setTransform(2.225,23.2917);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.039)").ss(0.3,1,1).p("AjVAhQAAgNAKgKQAWgSABgBQACgBABgBQAIgFAIgGQAQgHAPgJQAUgGATgIQAJgCAKgCQAUgDAUgEQAGAAAFAAQANgBAIAAQAEAAAFAAQAHAAADABQAIABAIAAQACAAACAAQABABAAAAQAXAEAWAEQAZAJAXAIQAXANAWANQABAAAAABQABABACAAQADADAFADQAAABABABQABAAABAAQAFAGAGAEQAKAJAAAOQAAAMgJAJQgKAJgLAAQhWgChWgCQgCABgCAAQgEAAgEAAQgBAAgGAAQgPABgPABQgFAAgDAAQgVABgWABQgCAAgCAAQgMABgNAAQgCAAgBAAQgYAAgYgBQgLAAgJgJQgJgJAAgNg");
	this.shape_19.setTransform(1.85,23.3917);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.078)").ss(0.5,1,1).p("AjQAgQAAgMAJgKQAXgRAAgBQACgBABgBQAIgFAIgFQAPgIAQgIQASgGATgHQAJgDAKgCQATgDAUgDQAFAAAFgBQANgBAHABQAEAAAGAAQAGAAAEAAQAHABAIAAQACAAACAAQABABAAAAQAWAEAXAEQAXAIAXAIQAWAMAWANQAAAAABABQACABABAAQAEADADADQABABABAAQABABABAAQAFAFAFAEQAKAJAAANQAAAMgIAJQgIAIgMAAQhRgChRgCQgBABgCAAQgEAAgDAAQgDAAgFAAQgNABgOABQgFAAgCABQgVABgUAAQgCABgCAAQgMAAgMAAQgBABgBAAQgWgBgXAAQgLgBgIgIQgJgIAAgNg");
	this.shape_20.setTransform(1.45,23.4917);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.122)").ss(0.7,1,1).p("AjMAfQABgMAJgJQAVgRABAAQADgBAAgBQAIgFAIgFQAPgHAOgIQATgGASgHQAJgCAJgDQATgCAUgEQAFAAAFAAQAMgBAIAAQAEAAAFAAQAGAAADAAQAIABAHABQACAAACAAQABAAAAAAQAWAEAVAEQAXAIAWAHQAWAMAWAMQAAAAAAABQACAAABABQAEADADADQACAAAAABQABABABAAQAFAEAFAEQAKAIABANQAAAMgIAIQgIAIgKgBQhMgBhMgBQgBAAgCAAQgDAAgEAAQgCABgFAAQgMABgNAAQgFAAgCABQgTABgTABQgCAAgCAAQgLABgLAAQgBAAgCAAQgUAAgWAAQgKgBgHgIQgJgIAAgMg");
	this.shape_21.setTransform(1.1,23.5917);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.161)").ss(1,1,1).p("AjHAfQABgMAJgJQAVgQAAAAQADgCAAAAQAIgFAIgFQAOgHAPgHQARgGASgHQAJgCAJgCQASgDATgDQAFAAAFgBQAMgBAHABQAEAAAFAAQAGgBAEABQAHABAHAAQACAAACAAQABAAAAAAQAVAEAVAEQAXAHAVAHQAVALAVAMQABAAAAAAQACABABABQADADAEACQABABABAAQAAABABABQAFADAGAEQAJAIABAMQAAALgHAIQgHAIgKgBQhHgBhGgBQgCAAgBAAQgDAAgDABQgCAAgFAAQgMABgMABQgEAAgCAAQgSABgRABQgCAAgBAAQgLABgKAAQgCABgBAAQgTAAgUAAQgJgBgHgHQgIgIAAgLg");
	this.shape_22.setTransform(0.7016,23.6875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.2)").ss(1.2,1,1).p("AjCAeQABgLAIgJQAVgPABgBQACgBABgBQAHgEAIgFQAOgGAOgIQARgFASgHQAIgCAJgCQASgDASgDQAFAAAFAAQAMgBAHAAQADAAAFAAQAGAAADAAQAHABAHAAQACAAACAAQABABAAAAQAVADAUADQAWAHAVAHQAVALAVALQAAAAABAAQABABABABQADACAEADQABABAAAAQABABABAAQAFAEAFAEQAJAHABALQABALgHAHQgGAIgJgBQhCgBhBgBQgCABgBAAQgDAAgDAAQgCAAgEAAQgLABgMABQgEAAgBABQgQABgQAAQgCABgBAAQgKABgKAAQgBAAgBAAQgSAAgSAAQgJAAgGgHQgIgIABgKg");
	this.shape_23.setTransform(0.3268,23.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.239)").ss(1.5,1,1).p("Ai+AdQABgLAJgIQAUgOABgBQACgBABgBQAHgFAHgEQAOgGAOgHQARgFAQgHQAJgCAIgCQASgCARgDQAFAAAFgBQALgBAHAAQAEAAAFAAQAFAAAEAAQAGABAHABQACAAACAAQABAAAAAAQAUADAUADQAVAHAUAGQAVAKAUALQABAAAAAAQABABABAAQAEADADACQABABABAAQABABAAAAQAFAEAFAEQAJAGABALQABAKgGAIQgGAGgIAAQg8gBg9AAQgBAAgBAAQgDAAgCAAQgCABgEAAQgKABgLAAQgEABgBAAQgPABgPABQgBAAgBAAQgJABgJAAQgBABgBAAQgRAAgRAAQgIAAgGgHQgHgHABgKg");
	this.shape_24.setTransform(-0.0429,23.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.278)").ss(1.7,1,1).p("Ai5AcQABgKAIgHQAVgPAAgBQACAAABgBQAHgEAHgFQANgGAOgHQAQgFARgFQAIgCAIgDQARgCARgDQAFAAAFAAQALgCAHABQADgBAFAAQAFAAADABQAHABAGAAQACAAACAAQABAAAAAAQAUADATADQAVAGAUAGQAUAKATAJQABABAAAAQABAAABABQAEACADACQABACAAAAQABAAABABQAFADAFADQAJAHABAKQABAKgFAHQgGAGgHAAQg3gBg4AAQgBAAgBAAQgCAAgDAAQgBABgEAAQgJABgKABQgEAAgBAAQgOACgNAAQgBABgBAAQgIAAgIAAQgBABgBAAQgPAAgQABQgHgBgFgGQgHgGAAgKg");
	this.shape_25.setTransform(-0.4173,24);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.322)").ss(1.9,1,1).p("Ai1AbQACgKAIgHQATgNABgBQACgBABgBQAHgEAGgEQAOgGANgGQAQgFAQgGQAIgCAHgBQARgDARgDQAEAAAFAAQALgBAGAAQAEAAAEAAQAFAAAEAAQAGAAAGABQACAAACAAQABAAAAAAQATADASACQAVAGATAGQAUAJATAJQAAAAABABQABAAABABQADACADACQABABABAAQABABAAAAQAFADAFADQAIAGACAKQABAJgEAHQgFAGgHgBQgygBgyABQgBAAgBAAQgCAAgCAAQgCABgDAAQgJABgIABQgEAAgBAAQgNABgMABQgBABgBAAQgHAAgHABQgBAAgBAAQgNABgOAAQgHAAgFgGQgGgGAAgJg");
	this.shape_26.setTransform(-0.7909,24.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.361)").ss(2.2,1,1).p("AiwAaQACgJAIgHQATgNAAAAQACgBABgBQAHgEAGgDQANgGANgGQAPgFAQgFQAIgCAHgCQARgCAQgDQAEAAAFgBQAKgBAHABQADgBAEAAQAFAAADAAQAGABAHAAQABAAACAAQABAAAAAAQASADATACQATAGATAFQATAIATAJQAAAAABABQABAAABAAQADADADACQABAAABABQAAAAABABQAFADAEACQAJAGACAJQABAJgEAGQgEAFgGAAQgtgBgtABQgBAAgBAAQgCAAgCABQgBAAgDAAQgHABgIABQgDAAgBABQgMABgLABQgBAAgBAAQgHABgGAAQgBABgBAAQgLAAgNABQgFAAgFgGQgFgFAAgJg");
	this.shape_27.setTransform(-1.1795,24.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.4)").ss(2.4,1,1).p("AisAZQACgIAIgHQATgMAAAAQACgBABgBQAGgEAHgDQAMgGANgFQAPgFAPgFQAHgCAIgCQAPgCAQgDQAEAAAFAAQAKgBAGAAQADAAAFAAQAFgBACABQAGAAAGAAQACAAACAAQAAABABAAQASACARACQAUAFASAFQASAIASAIQABAAAAAAQABABABAAQADACAEACQAAABABAAQABABABAAQAEADAFACQAIAGACAIQACAIgEAGQgEAFgFAAQgogBgoABQAAABgBAAQgCAAgBAAQgBAAgDABQgHABgHAAQgDABAAAAQgKABgKABQgBAAgBAAQgGABgGABQgBAAAAAAQgLABgKABQgFgBgEgEQgFgGAAgIg");
	this.shape_28.setTransform(-1.5417,24.3375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0.439)").ss(2.7,1,1).p("AinAYQACgIAHgGQATgLAAgBQACAAABgBQAGgEAGgDQAMgFAMgGQAPgEAPgFQAHgCAHgBQAPgDAQgCQAEAAAEgBQAKgBAGABQADgBAEAAQAFAAADAAQAFAAAGABQACAAABAAQABAAABAAQARACARACQATAFARAEQASAHASAIQABAAAAAAQABABABAAQADACADACQABAAABABQAAAAABABQAEADAFABQAIAFADAJQABAHgDAFQgDAFgFAAQgigBgjACQgBAAAAAAQgCAAgBAAQAAABgDAAQgGABgGABQgDAAAAAAQgJACgJABQgBAAAAAAQgFABgGAAQAAABgBAAQgJAAgKABQgEAAgDgEQgFgFAAgIg");
	this.shape_29.setTransform(-1.9,24.4375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.478)").ss(2.9,1,1).p("AijAXQADgIAHgFQASgLABAAQABgBABgBQAGgDAGgDQAMgFAMgFQAOgFAOgEQAHgCAHgBQAPgDAPgCQAEAAAEgBQAJgBAGABQADgBAEAAQAFAAACAAQAGAAAGAAQABAAACAAQAAABABAAQAQABARACQASAFARAEQASAGARAHQAAABABAAQABAAABABQADABADACQABAAAAABQABAAABABQAEACAEADQAIAEADAHQACAHgDAFQgCAFgEgBQgdAAgeABQgBABAAAAQgBAAgBAAQgBABgCAAQgFABgFABQgCAAgBAAQgHACgIABQAAAAgBAAQgEABgFAAQAAABgBAAQgIAAgIACQgEAAgCgEQgFgFABgHg");
	this.shape_30.setTransform(-2.2806,24.5625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.522)").ss(3.1,1,1).p("AieAXQACgHAHgGQASgKAAAAQACgBABgBQAGgCAGgEQALgEALgFQAOgFAOgEQAHgBAGgCQAPgCAOgCQAEAAAEgBQAJAAAGgBQADAAADAAQAFAAADAAQAFAAAFAAQACAAABAAQABAAABAAQAQACAQABQARAEARAEQARAHARAFQAAAAABABQABABAAAAQADACADABQABAAAAAAQABABABAAQAEADAEADQAIADADAHQACAGgCAFQgBAEgEAAQgYAAgYABQgBAAAAAAQgBABgBAAQgBAAgBABQgEABgFAAQgCABAAAAQgGABgGABQgBABAAAAQgEABgDABQgBAAAAAAQgHABgHABQgDAAgCgEQgEgEABgGg");
	this.shape_31.setTransform(-2.6306,24.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.561)").ss(3.4,1,1).p("AiaAWQADgHAHgFQARgKAAAAQACgBAAAAQAGgDAGgDQALgEALgFQANgEAOgEQAGgBAHgCQAOgCANgCQAEAAAEgBQAJAAAGgBQACAAAEAAQAFAAACAAQAGAAAFAAQABAAACAAQAAAAABAAQAPACAQABQARADAQAEQAQAGARAFQAAAAABABQABAAAAAAQADACADABQABABAAAAQABAAABAAQAEADAEACQAHADADAGQADAGgBAEQgBAEgDAAQgTAAgTACQgBAAAAAAQgBAAAAABQgBAAgBABQgDABgEAAQgBABgBAAQgEABgFABQAAABgBAAQgDABgCABQgBAAAAAAQgFABgGABQgCAAgCgDQgDgEAAgFg");
	this.shape_32.setTransform(-3,24.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.6)").ss(3.6,1,1).p("AiWAVQADgHAHgEQARgKAAAAQACAAAAAAQAGgDAGgDQAKgEALgEQANgEANgEQAGgBAGgBQAOgCANgCQAEgBADAAQAJgBAGAAQACAAADgBQAEAAADAAQAFAAAFAAQABAAACAAQABAAAAAAQAPACAPABQAQADAQADQAQAFAQAFQAAAAABABQABAAAAAAQADACADABQABAAAAAAQABABAAAAQAEACAEACQAIADADAGQADAFgBAEQAAADgCAAQgOAAgOACIgBAAQAAABgBAAQAAABgBAAQgCABgDABQgBAAAAAAQgEACgDABIAAAAQgDABgCABIAAAAQgEABgEACQgCAAAAgDQgEgDABgFg");
	this.shape_33.setTransform(-3.3458,24.8786);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.639)").ss(3.9,1,1).p("AiRAUQADgGAGgEQARgJAAAAQABgBABAAQAGgCAFgDQAKgDALgEQAMgEANgEQAGgBAGgBQAMgCANgCQAEAAADgBQAJAAAFgBQADAAADAAQAEgBACABQAFAAAFAAQABAAACAAQAAAAABAAQAOABAOABQARACAOADQAQAFAPAEQABAAAAAAQABABABAAQACABADABQABABAAAAQABAAABAAQAEACAEACQAHADADAFQADAEAAAEQAAADgBAAQgJAAgJADIAAAAIAAAAQAAABgBAAQgCABgBABQgBAAAAABQgCABgCABIgBAAQgBACgBABIgBAAQgCABgCACQgCAAAAgCQgDgEABgEg");
	this.shape_34.setTransform(-3.6937,24.9875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.678)").ss(4.1,1,1).p("AiNATQADgFAHgEQAQgJAAAAQABAAABAAQAFgCAGgCQAJgEAKgEQAMgDAMgDQAGgBAGgCQAMgCANgBQADgBAEAAQAHgBAGAAQACAAADgBQAEAAACAAQAFAAAFAAQABAAABAAQABAAAAAAQAOABAOABQAQACAOACQAPAEAPAEQAAAAABAAQABABAAAAQADABADABQAAAAABAAQAAABABAAQAEACAEABQAHADADAEQAEAEAAADQABADgBAAQgDAAgEADIAAABQAAAAAAABQgBABgBAAQAAABAAAAQgBACgBABQAAABgBABIAAAAQgBABgBACQgBABABgCQgDgDABgEg");
	this.shape_35.setTransform(-4.0167,25.08);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.722)").ss(4.3,1,1).p("ACMASIkaAAQAEgFAGgEQAPgHABAAQABgBABAAQAFgBAFgDQAKgDAJgDQAMgDALgEQAGgBAFgBQAMgCAMgBQAEgBADAAQAHgBAGAAQADAAADgBQACAAADAAQAEAAAFAAQABAAABAAQABAAAAAAQANAAAOABQAPACANACQAPADAOAEQABAAAAAAQABAAABAAQACABADABQABAAABAAQAAABAAAAQAEABAEACQAHACADAEQAEADABADIACACQABABABADQABAAAAABIABAAQAAABAAABQAAABAAAAQAAABABABQAAAAAAABIABAAQAAABAAABQAAACABACQAAAAAAgBQgBgDABgDg");
	this.shape_36.setTransform(-3.9,25.2063);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0.761)").ss(4.6,1,1).p("ACPASIklAAQAEgFAGgDQAPgHABAAQABgBAAAAQAGgCAEgBQAKgDAJgDQALgDALgDQAGgBAFgBQALgCAMgBQADgBADAAQAHgBAGAAQADgBACAAQAEAAACAAQAEAAAEgBQABAAABAAQABABAAAAQANAAAMAAQAPACAOABQAOADANADQABAAAAAAQABAAAAABQADAAACABQABAAABABQAAAAABAAQAEABADABQAHADAEADQAEACABACQACADABgBQAGABAHADQAAABABAAQAAAAABAAQABABAAAAQABABABABQAAAAAAABQACABACACIAAAAQAAAAABABQAAAAABABQACACACACQABAAACgBQgCgCABgCg");
	this.shape_37.setTransform(-3.05,25.2833);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.8)").ss(4.8,1,1).p("ACUAQIkxAAQAEgEAGgCQAOgHABAAQABAAAAAAQAFgCAFgBQAJgDAJgDQAKgDALgCQAFgBAFgBQALgCALgBQADgBADAAQAHgBAFAAQADgBADAAQADAAACAAQAEAAAEgBQABAAACAAQAAAAABAAQALAAAMABQAOABANABQANACANACQABABABAAQABAAAAAAQACABADAAQAAAAABABQABAAAAAAQADABAEABQAGACAFADQAEACACABQADACABAAQAMABAMADIAAAAQABABABAAQABABABAAQACABACABQAAAAAAABQADABADACQABAAAAAAQACABACABQADACADACQACABACgBQgBgBABgDg");
	this.shape_38.setTransform(-2.2,25.4125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0.839)").ss(5.1,1,1).p("ACbAQIk/AAQADgDAGgDQAOgGABAAQAAAAABAAQAFgCAEgCQAJgCAIgCQALgDAKgCQAFgBAFAAQAKgCAKgBQADgBADgBQAHAAAFAAQADgBACgBQADAAACAAQAEAAAEAAQABAAABAAQABAAAAAAQAMAAALgBQANABANABQANACAMABQABAAABABQAAAAABAAQACAAACABQABABAAAAQABAAABAAQADAAADACQAHAAAEADQAEACADABQADACADAAQARAAAQAEQABAAAAAAQABAAABAAQABABABABQADAAADACQAAAAABABQAFABAEABQAAAAABAAQACACADABIAAAAQACABACABQADABACABQADABACAAQAAgBAAgCg");
	this.shape_39.setTransform(-1.35,25.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.878)").ss(5.3,1,1).p("AClAPIlSAAQAFgDAFgCQAOgFABAAQAAgBABAAQAEgBAFgCQAIgBAIgCQAKgDAKgCQAEgBAFAAQAKgCAKgBQADgBADAAQAGgBAFAAQACgBADAAQACgBADABQADgBAEAAQABAAABAAQABAAAAAAQALAAALgBQANAAALABQAMABANABQAAAAABAAQAAABABAAQACAAACAAQABABAAAAQABAAAAAAQAEAAADABQAGABAFACQAEABADACQAEABADAAQAXABAVADQABAAAAAAQACAAABABQABAAACABQADABAEABQABAAABABQAFABAGABQABAAAAAAQAEACADABIAAAAQAFABAGADQABAAABABQADAAADABQAAgBABgBg");
	this.shape_40.setTransform(-0.475,25.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.922)").ss(5.5,1,1).p("ACvAOIlkAAQAFgDAFgBQANgFABAAQABAAAAAAQAFgBAEgCQAIgCAHgBQAKgCAJgCQAFAAAEgBQAJgCAKgBQADAAACgBQAGAAAFgBQADAAACgBQACAAACAAQAEAAADgBQABAAABAAQABAAAAAAQALAAAKgBQANAAALAAQALABAMAAQAAAAABAAQAAAAABABQACAAACAAQABAAABAAQAAAAAAAAQADABAEAAQAGABAFABQAFABADABQAEABAFgBQAbACAbAEQAAAAABAAQACABABAAQABAAACAAQAFABAFABQABAAABABQAHABAHACQAAAAABAAQAEABAEACIAAAAQAIACAIACQABABABAAQADABACAAQAAgBACAAg");
	this.shape_41.setTransform(0.4,25.7125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.961)").ss(5.8,1,1).p("Ai8AOQAFgCAFgCQANgDABAAQAAgBABAAQAEgBAEgBQAIgCAHgBQAJgBAJgCQAEgBAEAAQAJgCAJgBQADAAADgBQAFAAAFgBQACAAACgBQACAAADAAQADgBADAAQABAAABAAQABAAAAAAQAKgBAKgBQAMAAAKAAQAMAAAKAAQABAAAAAAQABAAAAAAQACAAACAAQABAAAAAAQABAAAAAAQAEAAADABQAFAAAGABQAEAAAFABQAFAAAEAAQAhABAgAFQABAAAAAAQACAAACABQACAAACABQAFABAGAAQABAAABABQAIABAJACQABAAAAAAQAFABAFACQAAAAABAAQAJACAJADQAEAAAFACg");
	this.shape_42.setTransform(1.175,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// body
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C03E21").s().p("AnxDmQjNhfAAiHQAAiGDNhfQDOhgEjAAQEjAADOBgQDOBfAACGQAACHjOBfQjOBgkjAAQkjAAjOhgg");
	this.shape_43.setTransform(0.8,34.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C03E21").s().p("AnyDmQjPhfAAiHQAAiGDPhfQDOhgEkAAQElAADOBgQDPBfAACGQAACHjPBfQjOBgklAAQkkAAjOhgg");
	this.shape_44.setTransform(0.8,34.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C03E21").s().p("An1DmQjPhfAAiHQAAiGDPhfQDQhgElAAQEmAADPBgQDQBfAACGQAACHjQBfQjPBgkmAAQklAAjQhgg");
	this.shape_45.setTransform(0.8,34.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C03E21").s().p("An3DmQjQhfAAiHQAAiGDQhfQDRhgEmAAQEoAADPBgQDRBfAACGQAACHjRBfQjPBgkoAAQkmAAjRhgg");
	this.shape_46.setTransform(0.8,34.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C03E21").s().p("An5DnQjRhgAAiHQAAiGDRhfQDRhgEoAAQEoAADSBgQDRBfAACGQAACHjRBgQjSBfkoAAQkoAAjRhfg");
	this.shape_47.setTransform(0.8,34.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C03E21").s().p("An7DnQjShgAAiHQAAiGDShgQDShfEpAAQEqAADSBfQDSBgAACGQAACHjSBgQjSBfkqAAQkpAAjShfg");
	this.shape_48.setTransform(0.825,34.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C03E21").s().p("An+DnQjShgAAiHQAAiGDShgQDUhfEqAAQErAADTBfQDTBgAACGQAACHjTBgQjTBfkrAAQkqAAjUhfg");
	this.shape_49.setTransform(0.825,34.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C03E21").s().p("AoADnQjThgAAiHQAAiGDThgQDVhfErAAQEsAADUBfQDUBgAACGQAACHjUBgQjUBfksAAQkrAAjVhfg");
	this.shape_50.setTransform(0.825,34.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C03E21").s().p("AoCDnQjUhgAAiHQAAiGDUhgQDVhfEtAAQEtAADVBfQDVBgAACGQAACHjVBgQjVBfktAAQktAAjVhfg");
	this.shape_51.setTransform(0.825,34.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C03E21").s().p("AoEDnQjVhgAAiHQAAiGDVhgQDWhfEuAAQEvAADVBfQDWBgAACGQAACHjWBgQjVBfkvAAQkuAAjWhfg");
	this.shape_52.setTransform(0.825,34.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C03E21").s().p("AoGDnQjXhgABiHQgBiGDXhgQDXhgEvAAQEwAADWBgQDYBgAACGQAACHjYBgQjWBgkwAAQkvAAjXhgg");
	this.shape_53.setTransform(0.8,34.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C03E21").s().p("AoIDnQjXhgAAiHQAAiGDXhgQDYhgEwAAQExAADXBgQDYBgAACGQAACHjYBgQjXBgkxAAQkwAAjYhgg");
	this.shape_54.setTransform(0.8,34.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C03E21").s().p("AoKDnQjYhggBiHQABiGDYhgQDZhgExAAQEzAADYBgQDZBgAACGQAACHjZBgQjYBgkzAAQkxAAjZhgg");
	this.shape_55.setTransform(0.8,34.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C03E21").s().p("AoMDnQjahgABiHQgBiGDahgQDahgEyAAQE0AADZBgQDZBgABCGQgBCHjZBgQjZBgk0AAQkyAAjahgg");
	this.shape_56.setTransform(0.8,34.625);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C03E21").s().p("AoODnQjahgAAiHQAAiGDahgQDahgE0AAQE1AADaBgQDbBggBCGQABCHjbBgQjaBgk1AAQk0AAjahgg");
	this.shape_57.setTransform(0.8,34.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C03E21").s().p("AoRDnQjbhgAAiHQAAiHDbhfQDchgE1AAQE2AADbBgQDcBfAACHQAACHjcBgQjbBgk2AAQk1AAjchgg");
	this.shape_58.setTransform(0.825,34.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C03E21").s().p("AoTDoQjchhAAiHQAAiHDchfQDchgE3AAQE3AADcBgQDdBfAACHQAACHjdBhQjcBfk3AAQk3AAjchfg");
	this.shape_59.setTransform(0.825,34.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C03E21").s().p("AoVDoQjdhhAAiHQAAiHDdhfQDdhgE4AAQE5AADcBgQDeBfAACHQAACHjeBhQjcBfk5AAQk4AAjdhfg");
	this.shape_60.setTransform(0.825,34.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C03E21").s().p("AoXDoQjehhAAiHQAAiHDehfQDehgE5AAQE6AADeBgQDeBfAACHQAACHjeBhQjeBfk6AAQk5AAjehfg");
	this.shape_61.setTransform(0.825,34.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C03E21").s().p("AoZDoQjfhhAAiHQAAiHDfhfQDfhgE6AAQE7AADfBgQDfBfAACHQAACHjfBhQjfBfk7AAQk6AAjfhfg");
	this.shape_62.setTransform(0.825,34.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C03E21").s().p("AoVDoQjdhhAAiHQAAiHDdhfQDdhgE4AAQE5AADdBgQDdBfAACHQAACHjdBhQjdBfk5AAQk4AAjdhfg");
	this.shape_63.setTransform(0.825,34.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C03E21").s().p("AoTDoQjchhAAiHQAAiHDchfQDchgE3AAQE4AADcBgQDcBfAACHQAACHjcBhQjcBfk4AAQk3AAjchfg");
	this.shape_64.setTransform(0.825,34.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C03E21").s().p("AoRDnQjbhgAAiHQAAiHDbhfQDbhgE2AAQE2AADcBgQDbBfAACHQAACHjbBgQjcBgk2AAQk2AAjbhgg");
	this.shape_65.setTransform(0.825,34.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C03E21").s().p("AoPDnQjahgAAiHQAAiGDahgQDbhgE0AAQE1AADbBgQDaBgAACGQAACHjaBgQjbBgk1AAQk0AAjbhgg");
	this.shape_66.setTransform(0.825,34.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C03E21").s().p("AoNDnQjZhgAAiHQAAiGDZhgQDahgEzAAQE0AADZBgQDaBgAACGQAACHjaBgQjZBgk0AAQkzAAjahgg");
	this.shape_67.setTransform(0.825,34.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C03E21").s().p("AoLDnQjYhggBiHQABiGDYhgQDZhgEyAAQEzAADZBgQDZBgAACGQAACHjZBgQjZBgkzAAQkyAAjZhgg");
	this.shape_68.setTransform(0.8,34.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C03E21").s().p("AoJDnQjYhgAAiHQAAiGDYhgQDYhgExAAQEyAADXBgQDZBgAACGQAACHjZBgQjXBgkyAAQkxAAjYhgg");
	this.shape_69.setTransform(0.825,34.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C03E21").s().p("AoHDnQjXhgAAiHQAAiGDXhgQDXhgEwAAQEwAADXBgQDYBgAACGQAACHjYBgQjXBgkwAAQkwAAjXhgg");
	this.shape_70.setTransform(0.825,34.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C03E21").s().p("AoFDnQjWhgAAiHQAAiHDWhfQDXhgEuAAQEvAADWBgQDXBfAACHQAACHjXBgQjWBgkvAAQkuAAjXhgg");
	this.shape_71.setTransform(0.825,34.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C03E21").s().p("AoDDnQjVhgAAiHQAAiGDVhgQDWhfEtAAQEuAADWBfQDVBgAACGQAACHjVBgQjWBfkuAAQktAAjWhfg");
	this.shape_72.setTransform(0.8,34.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C03E21").s().p("AoBDnQjUhgAAiHQAAiGDUhgQDVhfEsAAQEtAADUBfQDVBgAACGQAACHjVBgQjUBfktAAQksAAjVhfg");
	this.shape_73.setTransform(0.8,34.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C03E21").s().p("An/DnQjThgAAiHQAAiGDThgQDUhfErAAQEsAADTBfQDUBgAACGQAACHjUBgQjTBfksAAQkrAAjUhfg");
	this.shape_74.setTransform(0.825,34.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C03E21").s().p("An8DnQjUhgAAiHQAAiGDUhgQDShfEqAAQEqAADUBfQDTBggBCGQABCHjTBgQjUBfkqAAQkqAAjShfg");
	this.shape_75.setTransform(0.8,34.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C03E21").s().p("An7DnQjShgABiHQgBiGDShfQDThgEoAAQEpAADTBgQDRBfAACGQAACHjRBgQjTBfkpAAQkoAAjThfg");
	this.shape_76.setTransform(0.8,34.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C03E21").s().p("An5DnQjQhggBiHQABiGDQhfQDShgEnAAQEpAADQBgQDSBfAACGQAACHjSBgQjQBfkpAAQknAAjShfg");
	this.shape_77.setTransform(0.8,34.625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C03E21").s().p("An3DmQjQhfAAiHQAAiGDQhfQDRhgEmAAQEnAADQBgQDQBfAACGQAACHjQBfQjQBgknAAQkmAAjRhgg");
	this.shape_78.setTransform(0.8,34.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C03E21").s().p("An0DmQjQhfAAiHQAAiGDQhfQDPhgElAAQEmAADPBgQDQBfAACGQAACHjQBfQjPBgkmAAQklAAjPhgg");
	this.shape_79.setTransform(0.8,34.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

	// legs
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C02B1E").s().p("AK9GSIg9heQhYgfgZhLIgpgQQhNgigxgqIApg4QBfAnAqBSQAXAFAUAGQBJAYAnAzIAFAPQAZBpgQAYgAq5EUIAFgPQAngzBKgYQAUgGAWgFQAqhSBggnIAnA4QgxAqhMAiIgoAQQgaBLhYAfIg9BeIgFADQgRgYAZhpgAPjDoIg3hkQh6AWhQg0QiNAgiKhAIAlg0QB2gBB/AsQBYgcB6AnIAdANQAZAwACA1QAAAWgDAYgAvqDoQgFgYABgWQABg1AZgwIAegNQB6gnBYAcQB/gsB2ABIAkA0QiIBAiPggQhPA0h6gWIg3BkgAS+BmIhOjuQh8A1h/gKQh3BFiZACIgPhUQCDgvCYATQBchLChgFIAsAAIAKgBIAAABIAGAUQAzCSgWCagAypjCIAGgUIAAgBIAKABIArAAQCiAFBcBLQCZgTCDAvIgQBUQiZgCh3hFQh/AKh8g1IhODuIgJAEQgViaAyiSgAUalJQivA0ijgHQihBEivAbIgRhaQCqgyCrgGQCeg4ChgNIBiAPQAqCvgUB6IgIAigA1zhcQgTh6ArivIBhgPQChANCeA4QCsAGCpAyIgRBaQivgbighEQikAHivg0IhREPg");
	this.shape_80.setTransform(-0.85,49.45);

	this.instance_2 = new lib.crab_legs("synched",0);
	this.instance_2.setTransform(-0.85,49.5,0.5764,0.5764,0,0,0,243.1,-70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.shape_80}]},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-86.9,280.4,182.7);


(lib.Card = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Number
	this.txt = new cjs.Text("1", "normal 700 56px 'tk-skolar-sans-latin'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 93;
	this.txt.lineWidth = 26;
	this.txt.parent = this;
	this.txt.setTransform(-0.2,-51.1);
	if(!lib.properties.webfonts['tk-skolar-sans-latin']) {
		lib.webFontTxtInst['tk-skolar-sans-latin'] = lib.webFontTxtInst['tk-skolar-sans-latin'] || [];
		lib.webFontTxtInst['tk-skolar-sans-latin'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(2).to({scaleX:0.95,scaleY:0.95,x:-0.1527,y:-48.5},0).to({_off:true},1).wait(1));

	// Highlight
	this.instance = new lib.CardHighlight();
	this.instance.setTransform(0.05,0.05);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:0,y:0},0).to({_off:true},1).wait(1));

	// Paper
	this.paper = new lib.CardPaper();
	this.paper.name = "paper";
	this.paper.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.paper).wait(2).to({scaleX:0.95,scaleY:0.95,y:0},0).wait(1).to({scaleX:1,scaleY:1,y:-0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-75.4,109.6,151);


(lib.Cheeseburger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bun
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(-82.25,-13.9);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(-82.25,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.2,regY:-0.1,scaleX:1.1438,scaleY:0.7972,x:-82.5,y:-14},10,cjs.Ease.quadIn).wait(1).to({regX:0.4,regY:0.5,scaleX:1.0971,scaleY:0.9416,x:-81.7,y:-13.35},0).wait(1).to({scaleX:1.0663,scaleY:1.0371,x:-81.65,y:-13.3},0).wait(1).to({scaleX:1.0451,scaleY:1.1027,x:-81.7,y:-13.2},0).wait(1).to({scaleX:1.0302,scaleY:1.1488,x:-81.65},0).wait(1).to({scaleX:1.0196,scaleY:1.1817,y:-13.15},0).wait(1).to({scaleX:1.012,scaleY:1.2053},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:1.0065,scaleY:1.2222,x:-82.3,y:-13.85},0).wait(1).to({regX:0.4,regY:0.5,scaleX:1.004,scaleY:1.1372,x:-81.55,y:-13.2},0).wait(1).to({scaleX:1.0023,scaleY:1.0786},0).wait(1).to({scaleX:1.0012,scaleY:1.0397,y:-13.25},0).wait(1).to({scaleX:1.0005,scaleY:1.0159},0).wait(1).to({scaleX:1.0001,scaleY:1.0036},0).to({_off:true},1).wait(1));

	// lettuce
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.setTransform(-77.45,-35.35);

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.setTransform(-77.45,-35.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.1,scaleX:1.1408,scaleY:0.7774,x:-77.55},10,cjs.Ease.quadIn).wait(1).to({regX:0,scaleX:1.0951,scaleY:1.2124,x:-77.416,y:-35.367},0).wait(1).to({scaleX:1.0649,scaleY:1.5004,x:-77.3935,y:-35.3782},0).wait(1).to({scaleX:1.0442,scaleY:1.6979,x:-77.3781,y:-35.3859},0).wait(1).to({scaleX:1.0296,scaleY:1.8369,x:-77.3673,y:-35.3914},0).wait(1).to({scaleX:1.0192,scaleY:1.936,x:-77.3595,y:-35.3952},0).wait(1).to({scaleX:1.0117,scaleY:2.0071,x:-77.354,y:-35.398},0).wait(1).to({regX:-0.1,scaleX:1.0064,scaleY:2.058,x:-77.45,y:-35.4},0).wait(1).to({regX:0,scaleX:1.0039,scaleY:1.6534,x:-77.35,y:-35.3809},0).wait(1).to({scaleX:1.0023,scaleY:1.374,y:-35.3677},0).wait(1).to({scaleX:1.0011,scaleY:1.189,y:-35.3589},0).wait(1).to({scaleX:1.0005,scaleY:1.0758,y:-35.3536},0).wait(1).to({scaleX:1.0001,scaleY:1.0171,y:-35.3508},0).to({_off:true},1).wait(1));

	// tomato
	this.instance_4 = new lib.Tween10("synched",0);
	this.instance_4.setTransform(-79.55,-28.6);

	this.instance_5 = new lib.Tween11("synched",0);
	this.instance_5.setTransform(-79.55,-28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.0667,scaleY:0.8028},10,cjs.Ease.quadIn).wait(1).to({scaleX:1.045,scaleY:0.9492,y:-23.9665},0).wait(1).to({scaleX:1.0307,scaleY:1.046,y:-20.9002},0).wait(1).to({scaleX:1.0209,scaleY:1.1125,y:-18.7959},0).wait(1).to({scaleX:1.014,scaleY:1.1592,y:-17.3163},0).wait(1).to({scaleX:1.0091,scaleY:1.1925,y:-16.2609},0).wait(1).to({scaleX:1.0055,scaleY:1.2164,y:-15.5036},0).wait(1).to({scaleX:1.003,scaleY:1.2336,y:-14.9},0).wait(1).to({scaleX:1.0018,scaleY:1.1443,x:-79.5309,y:-20.119},0).wait(1).to({scaleX:1.0011,scaleY:1.0826,x:-79.5177,y:-23.7245},0).wait(1).to({scaleX:1.0005,scaleY:1.0417,x:-79.5089,y:-26.1114},0).wait(1).to({scaleX:1.0002,scaleY:1.0167,x:-79.5036,y:-27.5726},0).wait(1).to({scaleX:1,scaleY:1.0038,x:-79.5008,y:-28.3289},0).to({_off:true},1).wait(1));

	// patty
	this.instance_6 = new lib.Tween12("synched",0);
	this.instance_6.setTransform(-78.75,6.35);

	this.instance_7 = new lib.Tween13("synched",0);
	this.instance_7.setTransform(-78.75,6.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.1073,scaleY:0.7935},10,cjs.Ease.quadIn).wait(1).to({regY:0.2,scaleX:1.0725,scaleY:1.2708,y:11.25},0).wait(1).to({scaleX:1.0495,scaleY:1.5866,y:14.4},0).wait(1).to({scaleX:1.0337,scaleY:1.8033,y:16.6},0).wait(1).to({scaleX:1.0225,scaleY:1.9557,y:18.15},0).wait(1).to({scaleX:1.0146,scaleY:2.0644,y:19.2},0).wait(1).to({scaleX:1.0089,scaleY:2.1424,y:20.05},0).wait(1).to({regY:0,scaleX:1.0049,scaleY:2.1982,x:-78.8},0).wait(1).to({regY:0.2,scaleX:1.003,scaleY:1.7401,x:-78.75,y:15.1},0).wait(1).to({scaleX:1.0017,scaleY:1.4236,y:11.45},0).wait(1).to({scaleX:1.0009,scaleY:1.2141,y:9},0).wait(1).to({scaleX:1.0003,scaleY:1.0858,y:7.45},0).wait(1).to({scaleX:1.0001,scaleY:1.0194,y:6.7},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.9,-132.3,378.29999999999995,238.20000000000002);


(lib.beachBgFade = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_143 = function() {
		this.stop();
		
		function fadeIn() {
		
			var skipButton = this.stage.getChildAt(0).skipButton;
			var title = this.stage.getChildAt(0).title;
			var startButton = this.stage.getChildAt(0).startButton;
			
			title.alpha = 0.0;
			startButton.alpha = 0.0;
			startButton.visible = true;
			title.visible = true;
			
			createjs.Tween.get(skipButton).to({
				alpha: 0
			}, 1000);
			createjs.Tween.get(title).to({
				alpha: 1
			}, 3000);
				createjs.Tween.get(startButton).to({
				alpha: 1
			}, 3000);
		}
		
		function goToTitle()
		{
			exportRoot.gotoAndStop("titlescreen");
		}
		
		//fadeIn();
		setTimeout(fadeIn, 1500);
		setTimeout(goToTitle, 1500);
	}
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143).call(this.frame_143).wait(1).call(this.frame_144).wait(1));

	// shapes
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(823.5,-371.6);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(823.5,-371.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(823.5,-371.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},47).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},47).to({_off:true,alpha:1},96).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},96).to({startPosition:0},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-743.2,1647.1,743.2);


(lib.beach_reflection = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flying_birds
	this.instance = new lib.stick_birds_flying();
	this.instance.setTransform(-98.95,-51.7,0.2851,0.2851,0,0,0,52.8,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:53.1,regY:-14.4,scaleX:0.2832,scaleY:0.2832,x:-98.25,y:-51.75},0).wait(1).to({scaleX:0.2813,scaleY:0.2813,x:-97.7,y:-51.5},0).wait(1).to({scaleX:0.2794,scaleY:0.2794,x:-97.15,y:-51.25},0).wait(1).to({scaleX:0.2775,scaleY:0.2775,x:-96.6,y:-51.05},0).wait(1).to({scaleX:0.2756,scaleY:0.2756,x:-96,y:-50.8},0).wait(1).to({scaleX:0.2738,scaleY:0.2738,x:-95.45,y:-50.6},0).wait(1).to({scaleX:0.2719,scaleY:0.2719,x:-94.9,y:-50.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-94.35,y:-50.1},0).wait(1).to({scaleX:0.2681,scaleY:0.2681,x:-93.8,y:-49.85},0).wait(1).to({scaleX:0.2662,scaleY:0.2662,x:-93.2,y:-49.65},0).wait(1).to({scaleX:0.2643,scaleY:0.2643,x:-92.65,y:-49.4},0).wait(1).to({scaleX:0.2625,scaleY:0.2625,x:-92.1,y:-49.2},0).wait(1).to({scaleX:0.2606,scaleY:0.2606,x:-91.55,y:-48.95},0).wait(1).to({scaleX:0.2587,scaleY:0.2587,x:-91,y:-48.7},0).wait(1).to({scaleX:0.2568,scaleY:0.2568,x:-90.4,y:-48.45},0).wait(1).to({scaleX:0.2549,scaleY:0.2549,x:-89.85,y:-48.2},0).wait(1).to({scaleX:0.253,scaleY:0.253,x:-89.3,y:-48},0).wait(1).to({scaleX:0.2512,scaleY:0.2512,x:-88.75,y:-47.75},0).wait(1).to({scaleX:0.2493,scaleY:0.2493,x:-88.2,y:-47.55},0).wait(1).to({scaleX:0.2474,scaleY:0.2474,x:-87.6,y:-47.25},0).wait(1).to({scaleX:0.2455,scaleY:0.2455,x:-87.05,y:-47.05},0).wait(1).to({scaleX:0.2436,scaleY:0.2436,x:-86.5,y:-46.8},0).wait(1).to({scaleX:0.2417,scaleY:0.2417,x:-85.95,y:-46.6},0).wait(1).to({scaleX:0.2399,scaleY:0.2399,x:-85.4,y:-46.35},0).wait(1).to({scaleX:0.238,scaleY:0.238,x:-84.8,y:-46.15},0).wait(1).to({scaleX:0.2361,scaleY:0.2361,x:-84.25,y:-45.9},0).wait(1).to({scaleX:0.2342,scaleY:0.2342,x:-83.7,y:-45.6},0).wait(1).to({scaleX:0.2323,scaleY:0.2323,x:-83.15,y:-45.4},0).wait(1).to({scaleX:0.2304,scaleY:0.2304,x:-82.6,y:-45.15},0).wait(1).to({scaleX:0.2286,scaleY:0.2286,x:-82,y:-44.95},0).wait(1).to({scaleX:0.2267,scaleY:0.2267,x:-81.45,y:-44.7},0).wait(1).to({scaleX:0.2248,scaleY:0.2248,x:-80.9,y:-44.5},0).wait(1).to({scaleX:0.2229,scaleY:0.2229,x:-80.35,y:-44.25},0).wait(1).to({scaleX:0.221,scaleY:0.221,x:-79.8,y:-44},0).wait(1).to({scaleX:0.2191,scaleY:0.2191,x:-79.2,y:-43.75},0).wait(1).to({scaleX:0.2173,scaleY:0.2173,x:-78.65,y:-43.55},0).wait(1).to({scaleX:0.2154,scaleY:0.2154,x:-78.1,y:-43.3},0).wait(1).to({scaleX:0.2135,scaleY:0.2135,x:-77.55,y:-43.05},0).wait(1).to({scaleX:0.2116,scaleY:0.2116,x:-77,y:-42.85},0).wait(1).to({scaleX:0.2097,scaleY:0.2097,x:-76.4,y:-42.55},0).wait(1).to({scaleX:0.2078,scaleY:0.2078,x:-75.85,y:-42.35},0).wait(1).to({scaleX:0.206,scaleY:0.206,x:-75.3,y:-42.1},0).wait(1).to({scaleX:0.2041,scaleY:0.2041,x:-74.75,y:-41.9},0).wait(1).to({scaleX:0.2022,scaleY:0.2022,x:-74.2,y:-41.65},0).wait(1).to({scaleX:0.2003,scaleY:0.2003,x:-73.6,y:-41.45},0).wait(1).to({scaleX:0.1984,scaleY:0.1984,x:-73.05,y:-41.2},0).wait(1).to({scaleX:0.1965,scaleY:0.1965,x:-72.5,y:-40.95},0).wait(1).to({scaleX:0.1947,scaleY:0.1947,x:-71.95,y:-40.7},0).wait(1).to({scaleX:0.1928,scaleY:0.1928,x:-71.4,y:-40.5},0).wait(1).to({scaleX:0.1909,scaleY:0.1909,x:-70.8,y:-40.25},0).wait(1).to({scaleX:0.189,scaleY:0.189,x:-70.25,y:-40},0).wait(1).to({scaleX:0.1871,scaleY:0.1871,x:-69.7,y:-39.8},0).wait(1).to({scaleX:0.1852,scaleY:0.1852,x:-69.15,y:-39.55},0).wait(1).to({scaleX:0.1834,scaleY:0.1834,x:-68.6,y:-39.3},0).wait(1).to({scaleX:0.1815,scaleY:0.1815,x:-68,y:-39.05},0).wait(1).to({scaleX:0.1796,scaleY:0.1796,x:-67.45,y:-38.85},0).wait(1).to({scaleX:0.1777,scaleY:0.1777,x:-66.9,y:-38.6},0).wait(1).to({scaleX:0.1758,scaleY:0.1758,x:-66.35,y:-38.4},0).wait(1).to({scaleX:0.1739,scaleY:0.1739,x:-65.8,y:-38.15},0).wait(1).to({scaleX:0.1721,scaleY:0.1721,x:-65.2,y:-37.9},0).wait(1).to({scaleX:0.1702,scaleY:0.1702,x:-64.65,y:-37.65},0).wait(1).to({scaleX:0.1683,scaleY:0.1683,x:-64.1,y:-37.4},0).wait(1).to({scaleX:0.1664,scaleY:0.1664,x:-63.55,y:-37.2},0).wait(1).to({scaleX:0.1645,scaleY:0.1645,x:-62.95,y:-36.95},0).wait(1).to({scaleX:0.1626,scaleY:0.1626,x:-62.4,y:-36.75},0).wait(1).to({scaleX:0.1608,scaleY:0.1608,x:-61.85,y:-36.5},0).wait(1).to({scaleX:0.1589,scaleY:0.1589,x:-61.3,y:-36.25},0).wait(1).to({scaleX:0.157,scaleY:0.157,x:-60.75,y:-36},0).wait(1).to({scaleX:0.1551,scaleY:0.1551,x:-60.15,y:-35.8},0).wait(1).to({scaleX:0.1532,scaleY:0.1532,x:-59.6,y:-35.55},0).wait(1).to({scaleX:0.1513,scaleY:0.1513,x:-59.05,y:-35.35},0).wait(1).to({scaleX:0.1495,scaleY:0.1495,x:-58.5,y:-35.1},0).wait(1).to({scaleX:0.1476,scaleY:0.1476,x:-57.95,y:-34.85},0).wait(1).to({scaleX:0.1457,scaleY:0.1457,x:-57.35,y:-34.6},0).wait(1).to({scaleX:0.1438,scaleY:0.1438,x:-56.8,y:-34.35},0).wait(1).to({scaleX:0.1419,scaleY:0.1419,x:-56.25,y:-34.15},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-55.7,y:-33.9},0).wait(1).to({scaleX:0.1382,scaleY:0.1382,x:-55.15,y:-33.7},0).wait(1).to({scaleX:0.1363,scaleY:0.1363,x:-54.55,y:-33.45},0).wait(1).to({scaleX:0.1344,scaleY:0.1344,x:-54,y:-33.2},0).wait(1).to({scaleX:0.1325,scaleY:0.1325,x:-53.45,y:-32.95},0).wait(1).to({scaleX:0.1306,scaleY:0.1306,x:-52.9,y:-32.75},0).wait(1).to({scaleX:0.1287,scaleY:0.1287,x:-52.35,y:-32.5},0).wait(1).to({scaleX:0.1269,scaleY:0.1269,x:-51.75,y:-32.3},0).wait(1).to({scaleX:0.125,scaleY:0.125,x:-51.2,y:-32.05},0).wait(1).to({scaleX:0.1231,scaleY:0.1231,x:-50.65,y:-31.8},0).wait(1).to({scaleX:0.1212,scaleY:0.1212,x:-50.1,y:-31.55},0).wait(1).to({scaleX:0.1193,scaleY:0.1193,x:-49.55,y:-31.3},0).wait(1).to({scaleX:0.1174,scaleY:0.1174,x:-48.95,y:-31.1},0).wait(1).to({scaleX:0.1156,scaleY:0.1156,x:-48.4,y:-30.85},0).wait(1).to({scaleX:0.1137,scaleY:0.1137,x:-47.85,y:-30.65},0).wait(1).to({scaleX:0.1118,scaleY:0.1118,x:-47.3,y:-30.4},0).wait(1).to({scaleX:0.1099,scaleY:0.1099,x:-46.75,y:-30.2},0).wait(1).to({scaleX:0.108,scaleY:0.108,x:-46.15,y:-29.9},0).wait(1).to({scaleX:0.1061,scaleY:0.1061,x:-45.6,y:-29.7},0).wait(1).to({scaleX:0.1043,scaleY:0.1043,x:-45.05,y:-29.45},0).wait(1).to({scaleX:0.1024,scaleY:0.1024,x:-44.5,y:-29.2},0).wait(1).to({scaleX:0.1005,scaleY:0.1005,x:-43.95,y:-29},0).wait(2));

	// Wave
	this.instance_1 = new lib.wave();
	this.instance_1.setTransform(714.05,19.55,1.4497,1.2555,0,0,0,502.8,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// Beach_Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBKnAUFIAANmMiVNAAAIAAtmEhKmAMHMAAAgtxMCVNAAAMAAAAtx");
	this.shape.setTransform(15.525,-27.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-477.4,0,477.5,0).s().p("EhKmAD/IAAn9MCVNAAAIAAH9g");
	this.shape_1.setTransform(15.525,75.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],10.5,-131.9,10.5,341).s().p("EhKmAhrIAAtmMCVNAAAIAANmgEhKmAMHMAAAgtxMCVNAAAMAAAAtxg");
	this.shape_2.setTransform(15.525,-27.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},99).wait(1));

	// land_test
	this.land_background_mc = new lib.land_background();
	this.land_background_mc.name = "land_background_mc";
	this.land_background_mc.setTransform(-44.8,-51.1,1.5402,2.0214,0,0,0,-0.5,-161.9);
	this.land_background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.land_background_mc).wait(99).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-797.9,-466.6,1506.3,830.7);


(lib.beach_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		createjs.Sound.play("wave");
	}
	this.frame_99 = function() {
		this.stop();
		
		this.stage.getChildAt(0).louie.visible = true;
		this.stage.getChildAt(0).land_background_mc.visible = true;
		this.stage.getChildAt(0).beach_background_mc.visible = false;
		
		this.stage.getChildAt(0).louie.gotoAndPlay(2);
	}
	this.frame_100 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1).call(this.frame_100).wait(1));

	// birdLayer
	this.stickSeagulls = new lib.stick_birds_flying();
	this.stickSeagulls.name = "stickSeagulls";
	this.stickSeagulls.setTransform(-98.95,-51.7,0.2851,0.2851,0,0,0,52.8,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.stickSeagulls).wait(1).to({regX:53.1,regY:-14.4,scaleX:0.2832,scaleY:0.2832,x:-98.25,y:-51.75},0).wait(1).to({scaleX:0.2813,scaleY:0.2813,x:-97.7,y:-51.5},0).wait(1).to({scaleX:0.2794,scaleY:0.2794,x:-97.15,y:-51.25},0).wait(1).to({scaleX:0.2775,scaleY:0.2775,x:-96.6,y:-51.05},0).wait(1).to({scaleX:0.2756,scaleY:0.2756,x:-96,y:-50.8},0).wait(1).to({scaleX:0.2738,scaleY:0.2738,x:-95.45,y:-50.6},0).wait(1).to({scaleX:0.2719,scaleY:0.2719,x:-94.9,y:-50.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-94.35,y:-50.1},0).wait(1).to({scaleX:0.2681,scaleY:0.2681,x:-93.8,y:-49.85},0).wait(1).to({scaleX:0.2662,scaleY:0.2662,x:-93.2,y:-49.65},0).wait(1).to({scaleX:0.2643,scaleY:0.2643,x:-92.65,y:-49.4},0).wait(1).to({scaleX:0.2625,scaleY:0.2625,x:-92.1,y:-49.2},0).wait(1).to({scaleX:0.2606,scaleY:0.2606,x:-91.55,y:-48.95},0).wait(1).to({scaleX:0.2587,scaleY:0.2587,x:-91,y:-48.7},0).wait(1).to({scaleX:0.2568,scaleY:0.2568,x:-90.4,y:-48.45},0).wait(1).to({scaleX:0.2549,scaleY:0.2549,x:-89.85,y:-48.2},0).wait(1).to({scaleX:0.253,scaleY:0.253,x:-89.3,y:-48},0).wait(1).to({scaleX:0.2512,scaleY:0.2512,x:-88.75,y:-47.75},0).wait(1).to({scaleX:0.2493,scaleY:0.2493,x:-88.2,y:-47.55},0).wait(1).to({scaleX:0.2474,scaleY:0.2474,x:-87.6,y:-47.25},0).wait(1).to({scaleX:0.2455,scaleY:0.2455,x:-87.05,y:-47.05},0).wait(1).to({scaleX:0.2436,scaleY:0.2436,x:-86.5,y:-46.8},0).wait(1).to({scaleX:0.2417,scaleY:0.2417,x:-85.95,y:-46.6},0).wait(1).to({scaleX:0.2399,scaleY:0.2399,x:-85.4,y:-46.35},0).wait(1).to({scaleX:0.238,scaleY:0.238,x:-84.8,y:-46.15},0).wait(1).to({scaleX:0.2361,scaleY:0.2361,x:-84.25,y:-45.9},0).wait(1).to({scaleX:0.2342,scaleY:0.2342,x:-83.7,y:-45.6},0).wait(1).to({scaleX:0.2323,scaleY:0.2323,x:-83.15,y:-45.4},0).wait(1).to({scaleX:0.2304,scaleY:0.2304,x:-82.6,y:-45.15},0).wait(1).to({scaleX:0.2286,scaleY:0.2286,x:-82,y:-44.95},0).wait(1).to({scaleX:0.2267,scaleY:0.2267,x:-81.45,y:-44.7},0).wait(1).to({scaleX:0.2248,scaleY:0.2248,x:-80.9,y:-44.5},0).wait(1).to({scaleX:0.2229,scaleY:0.2229,x:-80.35,y:-44.25},0).wait(1).to({scaleX:0.221,scaleY:0.221,x:-79.8,y:-44},0).wait(1).to({scaleX:0.2191,scaleY:0.2191,x:-79.2,y:-43.75},0).wait(1).to({scaleX:0.2173,scaleY:0.2173,x:-78.65,y:-43.55},0).wait(1).to({scaleX:0.2154,scaleY:0.2154,x:-78.1,y:-43.3},0).wait(1).to({scaleX:0.2135,scaleY:0.2135,x:-77.55,y:-43.05},0).wait(1).to({scaleX:0.2116,scaleY:0.2116,x:-77,y:-42.85},0).wait(1).to({scaleX:0.2097,scaleY:0.2097,x:-76.4,y:-42.55},0).wait(1).to({scaleX:0.2078,scaleY:0.2078,x:-75.85,y:-42.35},0).wait(1).to({scaleX:0.206,scaleY:0.206,x:-75.3,y:-42.1},0).wait(1).to({scaleX:0.2041,scaleY:0.2041,x:-74.75,y:-41.9},0).wait(1).to({scaleX:0.2022,scaleY:0.2022,x:-74.2,y:-41.65},0).wait(1).to({scaleX:0.2003,scaleY:0.2003,x:-73.6,y:-41.45},0).wait(1).to({scaleX:0.1984,scaleY:0.1984,x:-73.05,y:-41.2},0).wait(1).to({scaleX:0.1965,scaleY:0.1965,x:-72.5,y:-40.95},0).wait(1).to({scaleX:0.1947,scaleY:0.1947,x:-71.95,y:-40.7},0).wait(1).to({scaleX:0.1928,scaleY:0.1928,x:-71.4,y:-40.5},0).wait(1).to({scaleX:0.1909,scaleY:0.1909,x:-70.8,y:-40.25},0).wait(1).to({scaleX:0.189,scaleY:0.189,x:-70.25,y:-40},0).wait(1).to({scaleX:0.1871,scaleY:0.1871,x:-69.7,y:-39.8},0).wait(1).to({scaleX:0.1852,scaleY:0.1852,x:-69.15,y:-39.55},0).wait(1).to({scaleX:0.1834,scaleY:0.1834,x:-68.6,y:-39.3},0).wait(1).to({scaleX:0.1815,scaleY:0.1815,x:-68,y:-39.05},0).wait(1).to({scaleX:0.1796,scaleY:0.1796,x:-67.45,y:-38.85},0).wait(1).to({scaleX:0.1777,scaleY:0.1777,x:-66.9,y:-38.6},0).wait(1).to({scaleX:0.1758,scaleY:0.1758,x:-66.35,y:-38.4},0).wait(1).to({scaleX:0.1739,scaleY:0.1739,x:-65.8,y:-38.15},0).wait(1).to({scaleX:0.1721,scaleY:0.1721,x:-65.2,y:-37.9},0).wait(1).to({scaleX:0.1702,scaleY:0.1702,x:-64.65,y:-37.65},0).wait(1).to({scaleX:0.1683,scaleY:0.1683,x:-64.1,y:-37.4},0).wait(1).to({scaleX:0.1664,scaleY:0.1664,x:-63.55,y:-37.2},0).wait(1).to({scaleX:0.1645,scaleY:0.1645,x:-62.95,y:-36.95},0).wait(1).to({scaleX:0.1626,scaleY:0.1626,x:-62.4,y:-36.75},0).wait(1).to({scaleX:0.1608,scaleY:0.1608,x:-61.85,y:-36.5},0).wait(1).to({scaleX:0.1589,scaleY:0.1589,x:-61.3,y:-36.25},0).wait(1).to({scaleX:0.157,scaleY:0.157,x:-60.75,y:-36},0).wait(1).to({scaleX:0.1551,scaleY:0.1551,x:-60.15,y:-35.8},0).wait(1).to({scaleX:0.1532,scaleY:0.1532,x:-59.6,y:-35.55},0).wait(1).to({scaleX:0.1513,scaleY:0.1513,x:-59.05,y:-35.35},0).wait(1).to({scaleX:0.1495,scaleY:0.1495,x:-58.5,y:-35.1},0).wait(1).to({scaleX:0.1476,scaleY:0.1476,x:-57.95,y:-34.85},0).wait(1).to({scaleX:0.1457,scaleY:0.1457,x:-57.35,y:-34.6},0).wait(1).to({scaleX:0.1438,scaleY:0.1438,x:-56.8,y:-34.35},0).wait(1).to({scaleX:0.1419,scaleY:0.1419,x:-56.25,y:-34.15},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-55.7,y:-33.9},0).wait(1).to({scaleX:0.1382,scaleY:0.1382,x:-55.15,y:-33.7},0).wait(1).to({scaleX:0.1363,scaleY:0.1363,x:-54.55,y:-33.45},0).wait(1).to({scaleX:0.1344,scaleY:0.1344,x:-54,y:-33.2},0).wait(1).to({scaleX:0.1325,scaleY:0.1325,x:-53.45,y:-32.95},0).wait(1).to({scaleX:0.1306,scaleY:0.1306,x:-52.9,y:-32.75},0).wait(1).to({scaleX:0.1287,scaleY:0.1287,x:-52.35,y:-32.5},0).wait(1).to({scaleX:0.1269,scaleY:0.1269,x:-51.75,y:-32.3},0).wait(1).to({scaleX:0.125,scaleY:0.125,x:-51.2,y:-32.05},0).wait(1).to({scaleX:0.1231,scaleY:0.1231,x:-50.65,y:-31.8},0).wait(1).to({scaleX:0.1212,scaleY:0.1212,x:-50.1,y:-31.55},0).wait(1).to({scaleX:0.1193,scaleY:0.1193,x:-49.55,y:-31.3},0).wait(1).to({scaleX:0.1174,scaleY:0.1174,x:-48.95,y:-31.1},0).wait(1).to({scaleX:0.1156,scaleY:0.1156,x:-48.4,y:-30.85},0).wait(1).to({scaleX:0.1137,scaleY:0.1137,x:-47.85,y:-30.65},0).wait(1).to({scaleX:0.1118,scaleY:0.1118,x:-47.3,y:-30.4},0).wait(1).to({scaleX:0.1099,scaleY:0.1099,x:-46.75,y:-30.2},0).wait(1).to({scaleX:0.108,scaleY:0.108,x:-46.15,y:-29.9},0).wait(1).to({scaleX:0.1061,scaleY:0.1061,x:-45.6,y:-29.7},0).wait(1).to({scaleX:0.1043,scaleY:0.1043,x:-45.05,y:-29.45},0).wait(1).to({scaleX:0.1024,scaleY:0.1024,x:-44.5,y:-29.2},0).wait(1).to({scaleX:0.1005,scaleY:0.1005,x:-43.95,y:-29},0).wait(1).to({_off:true},1).wait(1));

	// Wave
	this.instance_1 = new lib.wave();
	this.instance_1.setTransform(714.05,19.55,1.4497,1.2555,0,0,0,502.8,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

	// background
	this.instance_2 = new lib.beachBackground("synched",0);
	this.instance_2.setTransform(15.45,-27.5,1,1,0,0,0,477.4,-215.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("EBKnAUFIAANmMiVNAAAIAAtmEhKmAMHMAAAgtxMCVNAAAMAAAAtx");
	this.shape_8.setTransform(15.525,-27.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-477.4,0,477.5,0).s().p("EhKmAD/IAAn9MCVNAAAIAAH9g");
	this.shape_9.setTransform(15.525,75.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],10.5,-131.9,10.5,341).s().p("EhKmAhrIAAtmMCVNAAAIAANmgEhKmAMHMAAAgtxMCVNAAAMAAAAtxg");
	this.shape_10.setTransform(15.525,-27.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("EhKmAMHMAAAgtxMCVNAAAMAAAAtxEBKnAUFIAANmMiVNAAAIAAtm");
	this.shape_11.setTransform(15.525,-27.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.instance_2}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},99).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-472,-243.9,992.5,432.9);


(lib.backGroundThree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.beach_towel("synched",0);
	this.instance.setTransform(114.25,-112,0.5029,0.5029,0,0,0,-71.9,5.9);

	this.instance_1 = new lib.beachball("synched",0);
	this.instance_1.setTransform(1760.45,-121,0.4402,0.4402,0,0,0,-226.2,-20.7);

	this.umbrellaRight = new lib.umbrella();
	this.umbrellaRight.name = "umbrellaRight";
	this.umbrellaRight.setTransform(1714.95,-245.95,1,1,0,0,0,-59.1,19.7);

	this.umbrellaLeft = new lib.umbrella();
	this.umbrellaLeft.name = "umbrellaLeft";
	this.umbrellaLeft.setTransform(252.75,-245.95,1,1,0,0,0,-59.1,19.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,102,0,0)").s().p("EiWdAOMIAA8XMEs7AAAIAAcXgAkfCeIFJAAIAAlKIlJAAg");
	this.shape.setTransform(963.025,-90.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.umbrellaLeft},{t:this.umbrellaRight},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backGroundThree, new cjs.Rectangle(0,-441.7,1926.1,441.7), null);


(lib.background1lv1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud();
	this.instance.setTransform(730.2,-235,0.83,1,0,0,0,-1.4,0.6);

	this.instance_1 = new lib.cloud2();
	this.instance_1.setTransform(1269.95,-385.65,1.7507,1.8661,0,0,0,-2,8.2);

	this.instance_2 = new lib.cloud();
	this.instance_2.setTransform(570.4,-375.15,0.6872,0.6867,0,0,0,-1.2,0.2);

	this.instance_3 = new lib.cloud();
	this.instance_3.setTransform(950.2,-335,0.83,1,0,0,0,-1.4,0.6);

	this.instance_4 = new lib.cloud2();
	this.instance_4.setTransform(1354.1,-255.1,1.3089,1.1015,0,0,0,-2.1,8.2);

	this.instance_5 = new lib.cloud();
	this.instance_5.setTransform(1287.55,-286.7,1,1,0,0,0,-1.4,0.6);

	this.instance_6 = new lib.cloud2();
	this.instance_6.setTransform(830.25,-195.25,1.7805,1.0602,0,0,0,-2.1,8.2);

	this.instance_7 = new lib.cloud2();
	this.instance_7.setTransform(1102.45,-264.15,1.7507,1.8661,0,0,0,-2,8.2);

	this.instance_8 = new lib.cloud2();
	this.instance_8.setTransform(990.3,-248.05,1.7805,1.2614,0,0,0,-2.1,8.2);

	this.instance_9 = new lib.cloud2();
	this.instance_9.setTransform(650.4,-258.2,2.378,1.9756,0,0,0,-2,8.2);

	this.instance_10 = new lib.cloud();
	this.instance_10.setTransform(400.05,-234,1,1,0,0,0,-1.4,0.6);

	this.instance_11 = new lib.cloud();
	this.instance_11.setTransform(510.2,-275,1,1,0,0,0,-1.4,0.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiOMAZSMAAAhfjMEcZAAAMAAABfjECONAp7IAAcXMkcZAAAIAA8X");
	this.shape.setTransform(852.275,-245.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-910.1,0,910.1,0).s().p("EiOMAIVIAAwoMEcZAAAIAAQog");
	this.shape_1.setTransform(852.275,-29.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],20,-131.4,20,855.7).s().p("EiOMAvyMAAAhfjMEcZAAAMAAABfjg");
	this.shape_2.setTransform(852.275,-389.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background1lv1, new cjs.Rectangle(-58.8,-695.8,1822.2,901.5999999999999), null);


(lib.sky_reflection_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// bird
	this.instance = new lib.mainSeagull_flying();
	this.instance.setTransform(2050.35,-542.15,1,1,0,0,0,182.7,-289.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-242.1,x:1992.75,y:-494.8},0).wait(1).to({x:1935.15,y:-495.05},0).wait(1).to({x:1877.55,y:-495.3},0).wait(1).to({x:1820,y:-495.55},0).wait(1).to({x:1762.4,y:-495.8},0).wait(1).to({x:1704.8,y:-496.05},0).wait(1).to({x:1647.25,y:-496.3},0).wait(1).to({x:1589.65,y:-496.6},0).wait(1).to({x:1532.05,y:-496.85},0).wait(1).to({x:1474.5,y:-497.1},0).wait(1).to({x:1416.9,y:-497.35},0).wait(1).to({x:1359.3,y:-497.6},0).wait(1).to({x:1301.75,y:-497.85},0).wait(1).to({x:1244.15,y:-498.1},0).wait(1).to({x:1186.55,y:-498.35},0).wait(1).to({x:1128.95,y:-498.65},0).wait(1).to({x:1071.4,y:-498.9},0).wait(1).to({x:1013.8,y:-499.15},0).wait(1).to({x:956.2,y:-499.4},0).wait(1).to({x:898.65,y:-499.65},0).wait(1).to({x:841.05,y:-499.9},0).wait(1).to({x:783.45,y:-500.15},0).wait(1).to({x:725.9,y:-500.4},0).wait(1).to({x:668.3,y:-500.7},0).wait(1).to({x:610.7,y:-500.95},0).wait(1).to({x:553.15,y:-501.2},0).wait(1).to({x:495.55,y:-501.45},0).wait(1).to({x:437.95,y:-501.7},0).wait(1).to({x:380.35,y:-501.95},0).wait(1).to({x:322.8,y:-502.2},0).wait(1).to({x:265.2,y:-502.45},0).wait(1).to({x:207.6,y:-502.75},0).wait(1).to({x:150.1,y:-503},0).wait(1).to({x:92.5,y:-503.25},0).wait(1).to({x:34.9,y:-503.5},0).wait(1).to({x:-22.65,y:-503.75},0).wait(1).to({x:-80.25,y:-504},0).wait(1).to({x:-137.85,y:-504.25},0).wait(1).to({x:-195.45,y:-504.55},0).wait(1));

	// background_graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiOMAZSMAAAhfjMEcZAAAMAAABfjECONAp7IAAcXMkcZAAAIAA8X");
	this.shape.setTransform(910.125,-449.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],20,-275.4,20,711.7).s().p("EiOMBGSIAA8XMEcZAAAIAAcXgEiOMAZSMAAAhfjMEcZAAAMAAABfjg");
	this.shape_1.setTransform(910.125,-449.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-910.1,0,910.1,0).s().p("EiOMAIUIAAwoMEcZAAAIAAQog");
	this.shape_2.setTransform(910.125,-234.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368.4,-900.6,2591.7000000000003,901.6);


(lib.sky_reflection = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// seagull_flying
	this.instance = new lib.sky_reflection_background();
	this.instance.setTransform(910.1,-449.9,1,1,0,0,0,910.1,-449.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-900.1,2223.8,900.6);


(lib.seagull_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
		
		this.stage.getChildAt(0).louie.visible = true;
		this.stage.getChildAt(0).land_background_mc.visible = true;
		this.stage.getChildAt(0).beach_background_mc.visible = false;
		this.stage.getChildAt(0).mainSeagull_mc.visible = false;
		
		this.stage.getChildAt(0).louie.gotoAndPlay(77);
	}
	this.frame_52 = function() {
		createjs.Sound.play("nomnom");
	}
	this.frame_289 = function() {
		this.stage.getChildAt(0).beach_background_mc.visible = true;
		this.stage.getChildAt(0).burgerCloseUp.visible = true;
		this.stage.getChildAt(0).beachTowel.visible = false;
		this.stage.getChildAt(0).beachBall.visible = false;
		this.stage.getChildAt(0).chair.visible = false;
		this.stage.getChildAt(0).umbrella.visible = false;
		this.stage.getChildAt(0).mainSeagull_mc.visible = true;
		this.stage.getChildAt(0).louieSit.visible = false;
		
		this.stage.getChildAt(0).burgerCloseUp.gotoAndPlay(1);
	}
	this.frame_294 = function() {
		createjs.Sound.stop("nomnom");
		createjs.Sound.play("music");
	}
	this.frame_304 = function() {
		createjs.Sound.play("squawk");
	}
	this.frame_337 = function() {
		createjs.Sound.play("punch");
	}
	this.frame_412 = function() {
		createjs.Sound.play("hit");
	}
	this.frame_431 = function() {
		createjs.Sound.play("hit");
	}
	this.frame_450 = function() {
		this.stop();
		
		this.stage.getChildAt(0).lipSyncLouie.visible = true;
		
		this.stage.getChildAt(0).lipSyncLouie.gotoAndPlay(0);
	}
	this.frame_451 = function() {
		createjs.Sound.play("steps");
	}
	this.frame_472 = function() {
		this.stage.getChildAt(0).beachBg.visible = true;
		
		this.stage.getChildAt(0).beachBg.gotoAndPlay(2);
	}
	this.frame_494 = function() {
		createjs.Sound.play("squawk");
	}
	this.frame_538 = function() {
		this.gotoAndPlay(510);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(5).call(this.frame_52).wait(237).call(this.frame_289).wait(5).call(this.frame_294).wait(10).call(this.frame_304).wait(33).call(this.frame_337).wait(75).call(this.frame_412).wait(19).call(this.frame_431).wait(19).call(this.frame_450).wait(1).call(this.frame_451).wait(21).call(this.frame_472).wait(22).call(this.frame_494).wait(44).call(this.frame_538).wait(1));

	// seagullTween
	this.seagullDefeated = new lib.seagullTumble();
	this.seagullDefeated.name = "seagullDefeated";
	this.seagullDefeated.setTransform(154.55,-321.35,1,1,0,0,0,-194,143.6);
	this.seagullDefeated._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seagullDefeated).wait(376).to({_off:false},0).wait(1).to({regX:-189.9,regY:37.4,x:131.2,y:-427.15},0).wait(1).to({x:104.1,y:-426},0).wait(1).to({x:77.3,y:-424.15},0).wait(1).to({x:50.7,y:-421.5},0).wait(1).to({x:24.3,y:-418.15},0).wait(1).to({x:-1.85,y:-414},0).wait(1).to({x:-27.85,y:-409.2},0).wait(1).to({x:-53.7,y:-403.65},0).wait(1).to({x:-79.35,y:-397.4},0).wait(1).to({x:-104.8,y:-390.45},0).wait(1).to({x:-130.1,y:-382.8},0).wait(1).to({x:-155.25,y:-374.5},0).wait(1).to({x:-180.2,y:-365.5},0).wait(1).to({x:-204.95,y:-355.85},0).wait(1).to({x:-229.6,y:-345.55},0).wait(1).to({x:-254.05,y:-334.6},0).wait(1).to({x:-278.35,y:-323.1},0).wait(1).to({x:-302.5,y:-310.95},0).wait(1).to({x:-326.45,y:-298.25},0).wait(1).to({x:-350.2,y:-285},0).wait(1).to({x:-373.85,y:-271.2},0).wait(1).to({x:-397.25,y:-256.9},0).wait(1).to({x:-420.55,y:-242.15},0).wait(1).to({x:-443.6,y:-227},0).wait(1).to({x:-466.5,y:-211.4},0).wait(1).to({x:-489.25,y:-195.5},0).wait(1).to({x:-511.75,y:-179.35},0).wait(1).to({x:-534.1,y:-162.95},0).wait(1).to({x:-556.25,y:-146.5},0).wait(1).to({x:-578.2,y:-130},0).wait(1).to({x:-599.95,y:-113.65},0).wait(1).to({x:-621.5,y:-97.65},0).wait(1).to({x:-642.85,y:-82.2},0).wait(1).to({x:-663.95,y:-67.65},0).wait(1).to({x:-684.85,y:-54.6},0).wait(1).to({scaleX:1.447,scaleY:0.7337,x:-703.7,y:-15.6},0).wait(1).to({scaleX:1.5,scaleY:0.7,x:-723.95,y:-27.95},0).wait(1).to({scaleX:1.4429,scaleY:0.7325,x:-744.4,y:-49.55},0).wait(1).to({scaleX:1,scaleY:1,x:-766.2,y:-95.9},0).wait(1).to({scaleX:0.7185,x:-787.1,y:-112.25},0).wait(1).to({scaleX:0.4369,x:-807.7,y:-126.35},0).wait(1).to({scaleX:0.1554,x:-828.1,y:-137.7},0).wait(1).to({scaleX:0.1261,skewY:180,x:-848.2,y:-146},0).wait(1).to({scaleX:0.4077,x:-868.05,y:-151.05},0).wait(1).to({scaleX:0.6892,x:-887.55,y:-152.7},0).wait(1).to({scaleX:0.5015,x:-904.9,y:-151.05},0).wait(1).to({scaleX:0.3138,x:-921.95,y:-146},0).wait(1).to({scaleX:0.1261,x:-938.7,y:-137.7},0).wait(1).to({scaleX:0.0616,skewY:0,x:-955.1,y:-126.35},0).wait(1).to({scaleX:0.2492,x:-971.15,y:-112.25},0).wait(1).to({scaleX:0.4369,x:-986.85,y:-95.9},0).wait(1).to({scaleX:0.6246,x:-1002.2,y:-78},0).wait(1).to({scaleX:0.8123,x:-1017.2,y:-59.85},0).wait(1).to({scaleX:1,x:-1031.8,y:-43.9},0).wait(1).to({scaleX:1.3,scaleY:0.8005,x:-1045.5,y:-30.5},0).wait(1).to({scaleX:1,scaleY:1,x:-1061.3,y:-59.35},0).wait(1).to({x:-1075.4,y:-65.95},0).wait(1).to({x:-1089,y:-70.95},0).wait(1).to({x:-1102.15,y:-74.1},0).wait(1).to({x:-1114.8,y:-75.15},0).wait(1).to({x:-1126.9,y:-74.1},0).wait(1).to({x:-1138.45,y:-70.95},0).wait(1).to({x:-1149.35,y:-65.95},0).wait(1).to({x:-1159.65,y:-59.35},0).wait(1).to({x:-1169.3,y:-51.7},0).wait(1).to({scaleX:1.2016,scaleY:0.9,x:-1177.4,y:-33.25},0).wait(1).to({scaleX:1,scaleY:1,x:-1186.35,y:-47.75},0).wait(1).to({x:-1193.65,y:-50.85},0).wait(1).to({x:-1200.1,y:-52.8},0).wait(1).to({x:-1205.6,y:-53.5},0).wait(1).to({x:-1210.05,y:-52.8},0).wait(1).to({x:-1213.35,y:-50.85},0).wait(1).to({x:-1215.45,y:-47.75},0).wait(1).to({x:-1216.2,y:-43.9},0).to({_off:true},1).wait(88));

	// seagullWalk
	this.ikNode_1 = new lib.seagullWalk();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-1070.05,32.85);
	this.ikNode_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(451).to({_off:false},0).wait(1).to({regX:-94.2,regY:-57.3,x:-1131.1,y:-24.45},0).wait(1).to({x:-1098},0).wait(1).to({x:-1064.9},0).wait(1).to({x:-1031.8},0).wait(1).to({x:-998.7},0).wait(1).to({x:-965.6},0).wait(1).to({x:-932.5},0).wait(1).to({x:-899.4},0).wait(1).to({x:-866.3},0).wait(1).to({x:-833.2},0).wait(1).to({x:-800.05},0).wait(1).to({x:-766.95},0).wait(1).to({x:-733.85},0).wait(1).to({x:-700.75},0).wait(1).to({x:-667.65},0).wait(1).to({x:-634.55},0).wait(1).to({x:-601.45},0).wait(1).to({x:-568.35},0).wait(1).to({x:-535.25},0).wait(1).to({x:-502.15},0).to({_off:true},1).wait(67));

	// seagullTumble
	this.instance = new lib.mainSeagull_flying();
	this.instance.setTransform(424.05,-94.3,1,1,0,0,0,182.7,-289.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(376).to({_off:false},0).to({_off:true},75).wait(88));

	// seagullAngryClose
	this.instance_1 = new lib.seagullAngryCloseUp("synched",0);
	this.instance_1.setTransform(-542.3,-71.3,1,1,0,0,0,-61.1,-96.2);
	this.instance_1._off = true;

	this.seagullAngry = new lib.seagullAngryCloseUp();
	this.seagullAngry.name = "seagullAngry";
	this.seagullAngry.setTransform(-542.35,-71,1.8893,1.8893,0,0,0,-61.1,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},472).to({state:[{t:this.instance_1}]},37).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.seagullAngry}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(472).to({_off:false},0).to({regY:-96,scaleX:1.8893,scaleY:1.8893,x:-542.35,y:-71,startPosition:22},37).to({regX:-61.2,scaleX:1.8233,scaleY:1.8233,x:-542.65,y:-71.1,startPosition:24},15).to({_off:true,regX:-61.1,scaleX:1.8893,scaleY:1.8893,x:-542.35,y:-71,mode:"independent"},14).wait(1));

	// seagullClose
	this.birdAttack = new lib.bird_bite();
	this.birdAttack.name = "birdAttack";
	this.birdAttack.setTransform(-1443.65,137.9,1,1,0,0,0,-35.9,82);
	this.birdAttack._off = true;

	this.birdHit = new lib.bird_bite();
	this.birdHit.name = "birdHit";
	this.birdHit.setTransform(-700,-170.1,1.1088,1.1088,-4.1874,0,0,-35.9,80.5);
	this.birdHit.alpha = 0;
	this.birdHit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.birdAttack).wait(290).to({_off:false},0).wait(1).to({regX:-45.2,regY:49.7,scaleX:1.0448,scaleY:1.0448,x:-1438.3,y:100.05},0).wait(1).to({scaleX:1.0897,scaleY:1.0897,x:-1421.15,y:93.85},0).wait(1).to({scaleX:1.1345,scaleY:1.1345,x:-1401.7,y:87},0).wait(1).to({scaleX:1.1793,scaleY:1.1793,x:-1379.75,y:79.5},0).wait(1).to({scaleX:1.2241,scaleY:1.2241,x:-1355.45,y:71.35},0).wait(1).to({scaleX:1.269,scaleY:1.269,x:-1328.75,y:62.6},0).wait(1).to({scaleX:1.3138,scaleY:1.3138,x:-1299.65,y:53.15},0).wait(1).to({scaleX:1.3586,scaleY:1.3586,x:-1268.1,y:43},0).wait(1).to({scaleX:1.4034,scaleY:1.4034,x:-1234.2,y:32.3},0).wait(1).to({scaleX:1.4483,scaleY:1.4483,x:-1197.85,y:20.9},0).wait(1).to({scaleX:1.4931,scaleY:1.4931,x:-1159.15,y:8.8},0).wait(1).to({scaleX:1.5379,scaleY:1.5379,x:-1118,y:-3.85},0).wait(1).to({scaleX:1.5828,scaleY:1.5828,x:-1074.5,y:-17.25},0).wait(1).to({scaleX:1.6276,scaleY:1.6276,x:-1028.55,y:-31.25},0).wait(1).to({x:-979.75,y:-44.45},0).wait(1).to({x:-928.6,y:-58.35},0).wait(1).to({x:-875.05,y:-72.85},0).wait(1).to({x:-819.1,y:-88.05},0).wait(1).to({x:-809.8,y:-90.55},0).wait(36).to({regX:-35.9,regY:82,scaleX:1.3804,scaleY:1.3804,rotation:-13.8975,x:-731.9,y:-118},0).to({_off:true},1).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.birdHit).wait(346).to({_off:false},0).wait(1).to({regX:-45.2,regY:49.7,scaleX:1.1089,scaleY:1.1089,rotation:-4.1881,x:-778.8,y:-209.95,alpha:0.0345},0).wait(1).to({x:-840.25,y:-216.1,alpha:0.069},0).wait(1).to({x:-897.4,y:-221.8,alpha:0.1034},0).wait(1).to({x:-950.25,y:-227.1,alpha:0.1379},0).wait(1).to({x:-999.05,y:-231.95,alpha:0.1724},0).wait(1).to({x:-1043.95,y:-236.45,alpha:0.2069},0).wait(1).to({x:-1085.1,y:-240.55,alpha:0.2414},0).wait(1).to({x:-1122.7,y:-244.3,alpha:0.2759},0).wait(1).to({x:-1156.85,y:-247.75,alpha:0.3103},0).wait(1).to({x:-1187.75,y:-250.8,alpha:0.3448},0).wait(1).to({x:-1215.6,y:-253.6,alpha:0.3793},0).wait(1).to({x:-1240.5,y:-256.1,alpha:0.4138},0).wait(1).to({x:-1262.65,y:-258.3,alpha:0.4483},0).wait(1).to({x:-1282.15,y:-260.25,alpha:0.4828},0).wait(1).to({x:-1299.25,y:-261.95,alpha:0.5172},0).wait(1).to({x:-1314.1,y:-263.45,alpha:0.5517},0).wait(1).to({x:-1326.8,y:-264.7,alpha:0.5862},0).wait(1).to({x:-1337.55,y:-265.8,alpha:0.6207},0).wait(1).to({x:-1346.5,y:-266.65,alpha:0.6552},0).wait(1).to({x:-1353.85,y:-267.4,alpha:0.6897},0).wait(1).to({x:-1359.75,y:-268,alpha:0.7241},0).wait(1).to({x:-1364.35,y:-268.45,alpha:0.7586},0).wait(1).to({x:-1367.75,y:-268.8,alpha:0.7931},0).wait(1).to({x:-1370.25,y:-269.05,alpha:0.8276},0).wait(1).to({x:-1371.85,y:-269.2,alpha:0.8621},0).wait(1).to({x:-1372.85,y:-269.3,alpha:0.8966},0).wait(1).to({x:-1373.4,y:-269.35,alpha:0.931},0).wait(1).to({x:-1373.6,alpha:0.9655},0).wait(1).to({x:-1373.65,y:-269.4,alpha:1},0).to({_off:true},1).wait(163));

	// flightPath
	this.mainSeagull_mc = new lib.mainSeagull_flying();
	this.mainSeagull_mc.name = "mainSeagull_mc";
	this.mainSeagull_mc.setTransform(186.65,-399.2,1,1,0,0,0,182.7,-289.7);

	this.timeline.addTween(cjs.Tween.get(this.mainSeagull_mc).to({guide:{path:[186.6,-399,159.4,-402.3,132.1,-405.6,83.1,-412.1,34.1,-418.6,-20.2,-426.5,-74.5,-434.3,-118.9,-439.5,-163.3,-440.4,-208,-441.3,-252.5,-437.9,-265.6,-436.7,-278.7,-435.5,-278.8,-435.5,-279,-435.4,-279.2,-435.4,-279.5,-435.4,-304.4,-432.3,-329.4,-429.2,-367.2,-422.9,-405.1,-416.5,-415.8,-414.3,-426.5,-412.1,-461.9,-403.6,-497.4,-395,-552.8,-380.2,-608.3,-365.3,-626.6,-360.9,-645,-356.5,-697.7,-345,-750.5,-333.5,-792.2,-327,-833.9,-320.4,-848.8,-318.7,-863.8,-317,-878.5,-315.7,-893.3,-314.4,-893.6,-314.4,-893.9,-314.3,-922.8,-312.6,-951.7,-310.9,-982,-310.3,-1012.4,-309.6,-1034.5,-309.8,-1056.6,-310,-1057.6,-310,-1058,-310.1,-1086.9,-311.4,-1115.8,-312.6,-1135.7,-314.1,-1155.6,-315.6,-1177.4,-317.6,-1199.2,-320.3,-1199.6,-320.3,-1200,-320.3,-1221.5,-320.4,-1243.1,-320.4]}},47).wait(1).to({regX:152.6,regY:-247,scaleX:0.5301,scaleY:0.5301,x:89.9,y:-533.25},0).to({regX:182.6,regY:-289.7,guide:{path:[89.9,-533.1,89.3,-533.4,88.6,-533.6,82.8,-536.1,75.2,-535.8,50.9,-534.8,20.2,-528.6,8.6,-526.2,-33.7,-516.1,-113.3,-497.1,-214.5,-479.8,-275.8,-469.3,-397.3,-451.3,-459.2,-442.1,-490,-438.4,-541.6,-432.3,-583.2,-430.9,-598.3,-430.5,-609.5,-430.7,-623.7,-431.1,-635.6,-432.6,-649.7,-434.5,-667.8,-439.1,-667.9,-439.1,-699.4,-447.6,-780.5,-469.5,-868.2,-477.4,-953.3,-485.1,-1040.7,-479.3,-1059.4,-478,-1070.9,-476.2,-1087.3,-473.6,-1099.7,-468.6,-1105.5,-466.3,-1108.8,-463.1,-1113,-459.2,-1112,-455,-1111.8,-454.3,-1111.5,-453.8]}},31).wait(16).to({regX:182.7,scaleX:0.4548,skewY:180,x:-1319.75,y:-547.1},0).to({guide:{path:[-1319.6,-547,-1320.6,-546.7,-1321.5,-546.3,-1327.4,-543.7,-1327.5,-539.3,-1327.7,-534.2,-1320.5,-531.8,-1314.6,-529.9,-1306.7,-530.3,-1256.5,-533.2,-1193.9,-528.7,-1156,-526,-1081.5,-517.4,-1054.3,-514.2,-1040.7,-511.9,-1018.2,-508.1,-1001.2,-502.4,-973.3,-492.9,-941.9,-472,-930.6,-464.5,-915,-452.8,-897.4,-439.6,-888.6,-433.1,-854.3,-407.9,-809.5,-380.1,-779.1,-361.1,-727.1,-330.9,-703.6,-317.3,-690.4,-310.4,-669.7,-299.6,-651.8,-292.9,-635.2,-286.8,-612.4,-281.1,-606.2,-279.5,-572.2,-271.9,-560.4,-269.3,-554,-267.2,-544.1,-264,-537.4,-259.6,-534.9,-258,-530.1,-254.2,-525.4,-250.4,-522.8,-248.7,-516.6,-244.7,-507.8,-241.8,-501.9,-239.8,-491.5,-237.3,-439.6,-225.3,-372.9,-218.8,-332.9,-214.8,-252.4,-210.4,-241.7,-209.8,-236,-209.9,-226.8,-210,-219.7,-211.6,-210.3,-213.6,-199.8,-219.3,-195.5,-221.6,-181.7,-230.2,-152.6,-248.4,-110.9,-267.9,-102.3,-271.9,-36.9,-300.8,-14.2,-310.8,14.6,-324,29.2,-330.7,65.7,-347.6,81.4,-354.9,97.2,-362.3,102.8,-364.9,105.8,-368,109.7,-372,107.9,-375.8,106.6,-378.4,103.5,-379.4]}},44).to({scaleX:0.4368,rotation:-7.4879,skewY:0,x:126.55,y:-320.1},76).to({guide:{path:[126.5,-320,124.2,-320.5,121.8,-319.8,118.9,-319,115.9,-316.6,114.1,-315.1,111,-311.8,88.9,-288.2,67.9,-267.7,45.7,-246,29.8,-233.7,7.7,-216.6,-13.7,-208,-66.9,-186.5,-144.5,-204.8,-174.1,-211.8,-201.8,-222.5,-209.2,-225.4,-224,-231.3,-236.9,-236.2,-246.6,-238.5,-259,-241.5,-275,-242.6,-284.7,-243.2,-303.7,-243.4,-325.2,-243.6,-336,-243.1,-353.9,-242.3,-367.8,-239.2,-373.6,-237.9,-384.7,-234.6,-396.1,-231.3,-401.6,-230.1,-411.4,-227.8,-423.7,-226.5,-431.1,-225.6,-446.1,-224.5,-499,-220.7,-557.4,-217.1,-579.8,-215.7,-591.5,-215.6,-610.4,-215.5,-625.4,-217.7,-642.1,-220.2,-673.2,-229.9,-705.1,-239.7,-720.9,-242.3,-732.5,-244.2,-746.6,-244.8,-757,-245.3,-772.5,-245.1,-782.6,-245,-788.6,-244.4,-797.5,-243.5,-804.3,-241.1,-816.3,-236.9,-834.4,-221.5,-844.4,-213.1,-848.6,-210,-856.8,-203.9,-864.1,-200.7,-873.3,-196.7,-885.6,-195.3,-894.2,-194.3,-908,-194.5,-953,-195,-1003.6,-202.3,-1046.4,-208.5,-1098,-220.2,-1102.8,-221.3,-1105.4,-221.5,-1109.5,-221.9,-1112.7,-220.8,-1116.3,-219.6,-1118.4,-216.1,-1119.6,-214,-1119.6,-212.1]}},74).to({_off:true},1).wait(249));

	// skyBackground
	this.sky = new lib.sky();
	this.sky.name = "sky";
	this.sky.setTransform(-528.45,-153.45,1,1,0,0,0,910.1,-449.9);

	this.timeline.addTween(cjs.Tween.get(this.sky).to({_off:true},48).wait(424).to({_off:false},0).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1969.3,-678.6,2566.3,1254.5);


(lib.scorecard_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("=", "normal 700 30px 'tk-skolar-sans-latin'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 41;
	this.text.parent = this;
	this.text.setTransform(106.3,-185.6);
	if(!lib.properties.webfonts['tk-skolar-sans-latin']) {
		lib.webFontTxtInst['tk-skolar-sans-latin'] = lib.webFontTxtInst['tk-skolar-sans-latin'] || [];
		lib.webFontTxtInst['tk-skolar-sans-latin'].push(this.text);
	}

	this.score = new cjs.Text("0", "normal 700 56px 'tk-skolar-sans-latin'");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 93;
	this.score.lineWidth = 121;
	this.score.parent = this;
	this.score.setTransform(156.05,-211.1);
	if(!lib.properties.webfonts['tk-skolar-sans-latin']) {
		lib.webFontTxtInst['tk-skolar-sans-latin'] = lib.webFontTxtInst['tk-skolar-sans-latin'] || [];
		lib.webFontTxtInst['tk-skolar-sans-latin'].push(this.score);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.score},{t:this.text}]}).wait(1));

	// background
	this.instance = new lib.crab_scorecard();
	this.instance.setTransform(658.65,-181.4,0.2876,0.2876,0,0,0,-0.7,-2.1);

	this.text_1 = new cjs.Text("= End Level", "normal 700 30px 'tk-skolar-sans-latin'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 51;
	this.text_1.lineWidth = 190;
	this.text_1.parent = this;
	this.text_1.setTransform(794.15,-185.6);
	if(!lib.properties.webfonts['tk-skolar-sans-latin']) {
		lib.webFontTxtInst['tk-skolar-sans-latin'] = lib.webFontTxtInst['tk-skolar-sans-latin'] || [];
		lib.webFontTxtInst['tk-skolar-sans-latin'].push(this.text_1);
	}

	this.instance_1 = new lib.Cheeseburger();
	this.instance_1.setTransform(35.45,-178.05,0.2385,0.2385,0,0,0,-81.5,-13.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(10,1,1).p("Atlu1IbLAAIAAdrI7LAAg");
	this.shape.setTransform(439.3678,-179.537,5.28,0.3895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3FFFF").s().p("AtlO2IAA9rIbLAAIAAdrg");
	this.shape_1.setTransform(439.3678,-179.537,5.28,0.3895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.text_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scorecard_mc, new cjs.Rectangle(-25,-221.5,928.7,113), null);


(lib.lv1youlosecut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_69 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// text
	this.instance = new lib.youLosetext();
	this.instance.setTransform(750.05,-1105.9,1,1,0,0,0,357.9,-103.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:358.1,regY:-86.5,x:750.35,y:-1038.3,alpha:0.0435},0).wait(1).to({x:750.5,y:-989.2,alpha:0.087},0).wait(1).to({x:750.6,y:-941.5,alpha:0.1304},0).wait(1).to({x:750.7,y:-895.3,alpha:0.1739},0).wait(1).to({x:750.85,y:-850.4,alpha:0.2174},0).wait(1).to({x:750.95,y:-806.95,alpha:0.2609},0).wait(1).to({x:751.05,y:-764.85,alpha:0.3043},0).wait(1).to({x:751.15,y:-724.1,alpha:0.3478},0).wait(1).to({x:751.25,y:-695.5,alpha:0.3913},0).wait(1).to({y:-695.7,alpha:0.4348},0).wait(1).to({y:-695.9,alpha:0.4783},0).wait(1).to({y:-696.1,alpha:0.5217},0).wait(1).to({y:-696.3,alpha:0.5652},0).wait(1).to({y:-696.5,alpha:0.6087},0).wait(1).to({y:-696.65,alpha:0.6522},0).wait(1).to({y:-696.85,alpha:0.6957},0).wait(1).to({y:-697,alpha:0.7391},0).wait(1).to({y:-697.15,alpha:0.7826},0).wait(1).to({y:-697.35,alpha:0.8261},0).wait(1).to({y:-697.5,alpha:0.8696},0).wait(1).to({y:-697.6,alpha:0.913},0).wait(1).to({y:-697.75,alpha:0.9565},0).wait(1).to({y:-697.9,alpha:1},0).wait(1).to({y:-698},0).wait(1).to({y:-698.15},0).wait(1).to({y:-698.25},0).wait(1).to({y:-698.35},0).wait(1).to({y:-698.45},0).wait(1).to({y:-698.55},0).wait(1).to({y:-698.65},0).wait(1).to({y:-698.75},0).wait(1).to({y:-698.85},0).wait(1).to({y:-698.95},0).wait(1).to({y:-699},0).wait(1).to({y:-699.05},0).wait(1).to({y:-699.15},0).wait(1).to({y:-699.2},0).wait(1).to({y:-699.25},0).wait(1).to({y:-699.35},0).wait(1).to({y:-699.4},0).wait(1).to({y:-699.45},0).wait(2).to({y:-699.5},0).wait(1).to({y:-699.55},0).wait(1).to({y:-699.6},0).wait(1).to({y:-699.65},0).wait(2).to({y:-699.7},0).wait(2).to({y:-699.75},0).wait(3).to({y:-699.8},0).wait(3).to({y:-699.85},0).wait(13).to({y:-699.9},0).wait(1));

	// crab
	this.instance_1 = new lib.Crab("synched",0);
	this.instance_1.setTransform(583.1,-393.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.8,regY:-2,x:591.4,y:-392.75,startPosition:1},0).wait(1).to({x:600.55,y:-385.2,startPosition:2},0).wait(1).to({x:609.7,y:-374.4,startPosition:3},0).wait(1).to({x:618.85,y:-376.15,startPosition:4},0).wait(1).to({x:628,y:-386.4,startPosition:5},0).wait(1).to({x:637.15,y:-393.3,startPosition:6},0).wait(1).to({x:646.3,y:-395.4,startPosition:7},0).wait(1).to({x:655.45,y:-392.3,startPosition:8},0).wait(1).to({x:664.55,y:-384.6,startPosition:9},0).wait(1).to({x:673.7,y:-373.85,startPosition:10},0).wait(1).to({x:682.85,y:-376.75,startPosition:11},0).wait(1).to({x:692,y:-387.05,startPosition:12},0).wait(1).to({x:701.15,y:-393.7,startPosition:13},0).wait(1).to({x:710.3,y:-395.3,startPosition:14},0).wait(1).to({x:719.45,y:-391.6,startPosition:15},0).wait(1).to({x:728.6,y:-383.25,startPosition:16},0).wait(1).to({x:737.75,y:-372.05,startPosition:17},0).wait(1).to({x:746.85,y:-378.4,startPosition:18},0).wait(1).to({x:756,y:-388.1,startPosition:19},0).wait(1).to({x:765.15,y:-394.15,startPosition:20},0).wait(1).to({x:774.3,y:-395.2,startPosition:21},0).wait(1).to({x:783.45,y:-391.05,startPosition:22},0).wait(1).to({x:792.6,y:-382.6,startPosition:23},0).wait(1).to({x:801.75,y:-371.55,startPosition:24},0).wait(1).to({x:810.9,y:-379,startPosition:25},0).wait(1).to({x:820,y:-388.75,startPosition:26},0).wait(1).to({x:829.15,y:-394.45,startPosition:27},0).wait(1).to({x:838.3,y:-395,startPosition:28},0).wait(1).to({x:847.45,y:-390.25,startPosition:29},0).wait(1).to({x:856.6,y:-381.2,startPosition:30},0).wait(1).to({x:865.75,y:-369.65,startPosition:31},0).wait(1).to({x:874.9,y:-380.55,startPosition:32},0).wait(1).to({x:884.05,y:-389.7,startPosition:33},0).wait(1).to({x:893.2,y:-394.75,startPosition:34},0).wait(1).to({x:884.45,startPosition:35},0).wait(1).to({x:875.75,y:-389.7,startPosition:36},0).wait(1).to({x:867.05,y:-380.55,startPosition:37},0).wait(1).to({x:858.3,y:-369.65,startPosition:38},0).wait(1).to({x:849.6,y:-381.2,startPosition:39},0).wait(1).to({x:840.9,y:-390.25,startPosition:0},0).wait(1).to({x:832.2,y:-395,startPosition:1},0).wait(1).to({x:823.45,y:-394.45,startPosition:2},0).wait(1).to({x:814.75,y:-388.75,startPosition:3},0).wait(1).to({x:806.05,y:-379,startPosition:4},0).wait(1).to({x:797.3,y:-371.55,startPosition:5},0).wait(1).to({x:788.6,y:-382.6,startPosition:6},0).wait(1).to({x:779.9,y:-391.05,startPosition:7},0).wait(1).to({x:771.2,y:-395.2,startPosition:8},0).wait(1).to({x:762.45,y:-394.15,startPosition:9},0).wait(1).to({x:753.75,y:-388.1,startPosition:10},0).wait(1).to({x:745.05,y:-378.4,startPosition:11},0).wait(1).to({x:736.3,y:-372.05,startPosition:12},0).wait(1).to({x:727.6,y:-383.25,startPosition:13},0).wait(1).to({x:718.9,y:-391.6,startPosition:14},0).wait(1).to({x:710.2,y:-395.3,startPosition:15},0).wait(1).to({x:701.45,y:-393.7,startPosition:16},0).wait(1).to({x:692.75,y:-387.05,startPosition:17},0).wait(1).to({x:684.05,y:-376.75,startPosition:18},0).wait(1).to({x:675.3,y:-373.85,startPosition:19},0).wait(1).to({x:666.6,y:-384.6,startPosition:20},0).wait(1).to({x:657.9,y:-392.3,startPosition:21},0).wait(1).to({x:649.2,y:-395.4,startPosition:22},0).wait(1).to({x:640.45,y:-393.3,startPosition:23},0).wait(1).to({x:631.75,y:-386.4,startPosition:24},0).wait(1).to({x:623.05,y:-376.15,startPosition:25},0).wait(1).to({x:614.3,y:-374.4,startPosition:26},0).wait(1).to({x:605.6,y:-385.2,startPosition:27},0).wait(1).to({x:596.9,y:-392.75,startPosition:28},0).wait(1).to({x:588.2,y:-395.45,startPosition:29},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAiAIAA+NEAAAAgOIAA1l");
	this.shape.setTransform(0,-453.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],16.6,-2469.8,16.6,1373.2).s().p("Eh2eA3NMAAAgmmIAA1kIAAsqIAA+NIAAnYMDs9AAAMAAABuZg");
	this.shape_1.setTransform(758.325,-353.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],16.6,-81.2,16.6,669.8).s().p("Eh2eAhbMAAAhC1MDs9AAAMAAABC1g");
	this.shape_2.setTransform(758.325,-979.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-758.3,11.2,758.3,11.2).s().p("Eh2eAElIAApKMDs9AAAIAAJKg");
	this.shape_3.setTransform(758.325,-736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1213.4,1517.7,1213.4);


(lib.louie_upperbody_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shoulder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ADqE7Im5AAQgTh5gGiEQgMkHBDg4QBLg/B/AHQB2AGAvAyQAiAlAJEPQAECHgDCBg");
	this.shape.setTransform(48.5981,-140.935);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4197C7").s().p("AjPE7QgTh5gGiEQgMkHBDg4QBLg/B/AHQB2AGAvAyQAiAlAJEPQAECHgDCBg");
	this.shape_1.setTransform(48.5981,-140.935);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// arm
	this.instance = new lib.frontarm();
	this.instance.setTransform(91.5,-116.7,1,1,14.9996,0,0,74.5,-68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shirt
	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.setTransform(55.1,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.louie_upperbody_mc, new cjs.Rectangle(-0.4,-195.5,162.70000000000002,199), null);


(lib.Louie_Back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head_and_body
	this.instance = new lib.body_sitting();
	this.instance.setTransform(-8.45,-306.85,1,1,0,0,0,175.4,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({rotation:4.4659,x:-8.4},0).wait(20).to({rotation:0,x:-8.45},0).wait(1));

	// rightarm
	this.instance_1 = new lib.rightarm_sitting();
	this.instance_1.setTransform(112.1,-197.65,1,1,0,0,0,41.7,174.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({regX:41.8,regY:174.2,rotation:-6.9817,x:112.2,y:-197.75},0).wait(20).to({regX:41.7,regY:174.3,rotation:0,x:112.1,y:-197.65},0).wait(1));

	// burger
	this.instance_2 = new lib.Cheeseburger();
	this.instance_2.setTransform(61.3,-366.45,0.2787,0.2787,0,0,0,-80,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({regX:-81.6,regY:-13.5,x:46.2,y:-359.95},0).wait(20).to({regX:-80,regY:-13.2,x:61.3,y:-366.45},0).wait(1));

	// Legs
	this.instance_3 = new lib.CachedBmp_8408();
	this.instance_3.setTransform(-149.5,-181.5,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_8409();
	this.instance_4.setTransform(-149.5,-181.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_8410();
	this.instance_5.setTransform(-149.5,-181.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_5}]},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.7,-532,436.2,590);


(lib.Deck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Card();
	this.instance.setTransform(394.8,156.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_1 = new lib.Card();
	this.instance_1.setTransform(282,156.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_2 = new lib.Card();
	this.instance_2.setTransform(169.2,156.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_3 = new lib.Card();
	this.instance_3.setTransform(56.4,156.4);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_4 = new lib.Card();
	this.instance_4.setTransform(-56.4,156.4);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_5 = new lib.Card();
	this.instance_5.setTransform(-169.2,156.4);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_6 = new lib.Card();
	this.instance_6.setTransform(394.8,0);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_7 = new lib.Card();
	this.instance_7.setTransform(282,0);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_8 = new lib.Card();
	this.instance_8.setTransform(169.2,0);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_9 = new lib.Card();
	this.instance_9.setTransform(56.4,0);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_10 = new lib.Card();
	this.instance_10.setTransform(-56.4,0);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_11 = new lib.Card();
	this.instance_11.setTransform(-169.2,0);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_12 = new lib.Card();
	this.instance_12.setTransform(394.8,-156.4);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_13 = new lib.Card();
	this.instance_13.setTransform(282,-156.4);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_14 = new lib.Card();
	this.instance_14.setTransform(169.2,-156.4);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_15 = new lib.Card();
	this.instance_15.setTransform(56.4,-156.4);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_16 = new lib.Card();
	this.instance_16.setTransform(-56.4,-156.4);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.Card(), 3);

	this.instance_17 = new lib.Card();
	this.instance_17.setTransform(-169.2,-156.4);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.Card(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Deck, new cjs.Rectangle(-223.4,-231.3,672.6,462.8), null);


(lib.cut2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new cjs.Text("You ate too many cheeseburgers!!", "60px 'Modak'");
	this.text.textAlign = "center";
	this.text.lineHeight = 91;
	this.text.lineWidth = 712;
	this.text.parent = this;
	this.text.setTransform(876.8,-809.5,0.8757,0.8757);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("Egw/ANKIAA6TMBh/AAAIAAaTg");
	this.shape.setTransform(876.925,-761.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	// seagull
	this.instance = new lib.seagullAnimate();
	this.instance.setTransform(1016.2,-486.1,0.437,0.437,0,0,0,-28.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.instance_1 = new lib.cut_bg("synched",0);
	this.instance_1.setTransform(758.1,-596.6,1,1,0,0,0,758.1,-596.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut2, new cjs.Rectangle(-1,-1193.2,1517.7,1193.2), null);


(lib.burgertween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Louie_right_arm();
	this.instance.setTransform(14.65,26.2,1,1,-18.443,0,0,59.4,-111.5);

	this.instance_1 = new lib.Cheeseburger();
	this.instance_1.setTransform(-44.1,-56.8,0.3318,0.3318,0,0,0,-81.9,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-116.9,198.5,235.8);


(lib.right_arm_burger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_63 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(63).call(this.frame_63).wait(1));

	// hand
	this.instance = new lib.handSlap();
	this.instance.setTransform(157.8,-186.55,0.306,0.306,8.4449,0,0,-619.1,141);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(1).to({regX:-631.7,regY:159.2,rotation:4.6161,x:134.95,y:-178.7},0).wait(1).to({rotation:0.7857,x:107.35,y:-174.45},0).wait(1).to({rotation:-3.0448,x:70.6,y:-168.95},0).wait(1).to({rotation:-6.8753,x:24.45,y:-162.1},0).wait(1).to({rotation:-10.7057,x:-30.95,y:-154},0).wait(1).to({rotation:-14.5362,x:-95.6,y:-144.6},0).wait(1).to({x:-131.25,y:-139},0).wait(1).to({x:-143.7,y:-136.35},0).wait(1).to({x:-154.6,y:-134.05},0).wait(1).to({x:-163.9,y:-132.1},0).wait(1).to({x:-171.7,y:-130.45},0).wait(1).to({x:-177.85,y:-129.1},0).wait(1).to({x:-182.55,y:-128.15},0).wait(1).to({x:-185.65,y:-127.45},0).wait(1));

	// bugerClose
	this.instance_1 = new lib.burgertween("synched",0);
	this.instance_1.setTransform(98.95,-116.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},5).to({x:143.65,y:-46.3},5).to({_off:true},10).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.6,-239.5,716.3,312.1);


(lib.LouieCharacter_gameai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {louIdle:0,louRight:46,louLeft:62,louLaugh:78,louCry:88};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_44 = function() {
		this.gotoAndPlay("louIdle");
	}
	this.frame_61 = function() {
		this.gotoAndPlay("louRight");
	}
	this.frame_77 = function() {
		this.gotoAndPlay("louLeft");
	}
	this.frame_87 = function() {
		this.gotoAndPlay("louLaugh");
	}
	this.frame_94 = function() {
		this.gotoAndPlay("louCry");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(17).call(this.frame_61).wait(16).call(this.frame_77).wait(10).call(this.frame_87).wait(7).call(this.frame_94).wait(1));

	// tears
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Al6CGIgKgHQgFgCgHAAIgNgBQgLgBgDgFQgCgDAAgFIABgOQAAgIADgDQAFgHAKACQANABANAJQAIAGANANQAJALgBAHQgBAHgIADIgEAAQgFAAgFgDgAGBBMIgLgEQgGgCgEAAQgMACgFAAQgMgBAAgJQgPAGgGgFQgFgEABgHQABgHAGgFQAHgFATAAIAyABQAQABAFABQAMAEADAKQACAHgEAIQgEAHgIADQgFACgHAAQgIAAgKgDgAECg4QgFgDgBgHQAAgGADgGIAHgKQADgGAEgNQADgNAEgGQAGgHAJgDQAGACAOgBQAOABADAIQACAGgFALQgGAOgIADQgJACgEACQgHACgGALQgGAMgEADQgFAFgGAAIgGgBg");
	this.shape.setTransform(1063.8731,203.0955);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AIDCMIgKgGQgFgEgEgBQgMgBgFgCQgLgEACgIQgQABgEgGQgEgEADgIQADgGAGgDQAJgDASAFIAwANQAPAGAEACQALAHAAAKQABAIgGAGQgGAGgIABIgFAAQgLAAgNgJgAojBiQgDgBgCgFIgHgMQgEgHABgFQABgIAKgDQALgFAQABQAKABASAFQANAEADAHQACAHgGAGQgFAFgHAAIgNgBQgFAAgGADIgMAGQgGADgEAAIgFgBgAFkhkQgHgFgEgBQgHgEgLAEQgNADgFAAQgMAAgDgJQgCgGAFgFQAEgFAGgCIAMgCQAGgCANgHQAMgHAGAAQAKgCAIAFQADAGALAIQAIALgEAIQgCAFgLAEQgKAEgHAAIgGgBg");
	this.shape_1.setTransform(1065.2669,202.7536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AKQDPQgLgEgJgMIgFgHQgDgEgDgCIgMgJQgHgHAEgDQgMgGgCgFQgCgEAFgCQADgBAGABQAHACANAKIAfAbIANAMQAGAIgCAFQgCAEgGAAIgCAAQgFAAgFgDgAqSCWQgCgBgDgDIgIgLQgEgGgBgFQgBgIAGgFQAGgHAMgBQAHgBANACQAKABAEAGQAEAHgDAGQgCAGgFABIgKABQgDABgDAFIgHAIQgEAEgDAAIgDAAgAJCieQgNAAgEgFIgEgLQgDgGgJgBQgLgCgEgCQgHgFACgJQACgGAFgCQAGgDAFABIAKACQAEACAMgBQAMgCAFACQAHADADAHQAAAGADAMQAAAMgHAGQgCACgHAAIgFAAg");
	this.shape_2.setTransform(1062.352,205.5806);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},88).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).wait(3));

	// louieBodyUpper
	this.instance = new lib.louie_upperbody_mc();
	this.instance.setTransform(538.1,141.7,1,1,0,0,0,15.5,-92.8);

	this.instance_1 = new lib.Tween23("synched",0);
	this.instance_1.setTransform(618.95,63.4,1,1,-18.5265,0,0,0.1,0.1);

	this.instance_2 = new lib.frontarm();
	this.instance_2.setTransform(619.3,101.4,0.9999,0.9999,11.4715,0,0,25.8,-48.9);

	this.instance_3 = new lib.Tween20("synched",0);
	this.instance_3.setTransform(606,106.3,1,1,18.6948);

	this.instance_4 = new lib.Tween23("synched",0);
	this.instance_4.setTransform(599.4,49.35,0.9999,0.9999,95.0296,0,0,0.2,-0.1);

	this.instance_5 = new lib.backarm();
	this.instance_5.setTransform(549.15,98.4,0.9999,0.9999,98.7743,0,0,60.8,-43.6);

	this.instance_6 = new lib.CachedBmp_8412();
	this.instance_6.setTransform(542.05,59.9,0.5,0.5);

	this.instance_7 = new lib.soda();
	this.instance_7.setTransform(647.5,95.1,0.2685,0.2685,-9.9554,0,0,-76.9,12.4);

	this.instance_8 = new lib.CachedBmp_4561();
	this.instance_8.setTransform(589.1,101.25,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_8413();
	this.instance_9.setTransform(538.95,52.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_8414();
	this.instance_10.setTransform(523.05,59.3,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_4563();
	this.instance_11.setTransform(576.9,94.6,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_8415();
	this.instance_12.setTransform(540.85,63.5,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_4565();
	this.instance_13.setTransform(588.05,104.4,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_8416();
	this.instance_14.setTransform(1025.05,212.7,0.5,0.5);

	this.instance_15 = new lib.Cheeseburger();
	this.instance_15.setTransform(1054.55,294.5,0.1468,0.1468,-29.9953,0,0,-81.8,-13);

	this.instance_16 = new lib.CachedBmp_4575();
	this.instance_16.setTransform(1050.7,146.85,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_8417();
	this.instance_17.setTransform(1025.05,212.7,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_8418();
	this.instance_18.setTransform(1016.95,212.7,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_4573();
	this.instance_19.setTransform(1046.75,151,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_8419();
	this.instance_20.setTransform(1016.95,212.7,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_8420();
	this.instance_21.setTransform(1025.05,212.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{regX:60.8,regY:-43.6,rotation:98.7743,x:549.15,y:98.4,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0}},{t:this.instance_4,p:{y:49.35,regX:0.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:95.0296,skewX:0,skewY:0,x:599.4}},{t:this.instance_3,p:{y:106.3,regX:0,regY:0,rotation:18.6948,x:606,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.4715,skewX:0,skewY:0,x:619.3,y:101.4,regX:25.8,regY:-48.9}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:-18.5265,skewX:0,skewY:0,x:618.95,y:63.4,regX:0.1,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:10,regY:-53,rotation:83.7754,x:566.2,y:61.55,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0}},{t:this.instance_4,p:{y:61.35,regX:0.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:95.0296,skewX:0,skewY:0,x:599.4}},{t:this.instance_3,p:{y:118.3,regX:0,regY:0,rotation:18.6948,x:606,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.9061,scaleY:0.9962,rotation:0,skewX:25.3731,skewY:27.6766,x:613.9,y:107.45,regX:25.8,regY:-48.9}},{t:this.instance_1,p:{scaleX:0.9125,scaleY:0.9905,rotation:0,skewX:-1.8212,skewY:-5.3782,x:623.4,y:70.7,regX:0.1,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:61.1,regY:-43.6,rotation:52.4394,x:617.7,y:121.6,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0}},{t:this.instance}]},2).to({state:[{t:this.instance_5,p:{regX:61.1,regY:-43.6,rotation:-9.8171,x:716.35,y:79.05,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0}},{t:this.instance_3,p:{y:98.85,regX:0.1,regY:-0.1,rotation:23.6803,x:633.9,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:92.1321,skewX:0,skewY:0,x:621,y:109.25,regX:74.6,regY:-68.2}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:53.6809,skewX:0,skewY:0,x:638.45,y:49.9,regX:0.1,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:61,regY:-43.4,rotation:0,x:715.35,y:44.35,scaleX:1.0005,scaleY:0.9067,skewX:-45.3075,skewY:-52.5111}},{t:this.instance_4,p:{y:62.75,regX:0.1,regY:0.2,scaleX:1.007,scaleY:0.8994,rotation:0,skewX:-49.1592,skewY:-55.6287,x:653.65}},{t:this.instance_3,p:{y:102.85,regX:0.1,regY:0,rotation:0,x:606.15,scaleX:0.9762,scaleY:1.0221,skewX:17.7114,skewY:19.7227}},{t:this.instance_2,p:{scaleX:1.0271,scaleY:0.9708,rotation:0,skewX:98.4122,skewY:99.1276,x:559.6,y:48.5,regX:25.9,regY:-49.1}},{t:this.instance_1,p:{scaleX:1.008,scaleY:0.9906,rotation:0,skewX:67.1932,skewY:70.3494,x:589.45,y:47.5,regX:0.4,regY:0}}]},2).to({state:[{t:this.instance_5,p:{regX:10,regY:-53,rotation:-21.2235,x:654.15,y:104.8,scaleX:0.9998,scaleY:0.9998,skewX:0,skewY:0}},{t:this.instance_4,p:{y:82,regX:0.2,regY:-0.1,scaleX:0.9998,scaleY:0.9998,rotation:-24.9698,skewX:0,skewY:0,x:641.7}},{t:this.instance_3,p:{y:118.3,regX:0,regY:0,rotation:18.6948,x:606,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.9061,scaleY:0.9962,rotation:0,skewX:85.3726,skewY:87.677,x:578.9,y:80.8,regX:25.8,regY:-48.9}},{t:this.instance_1,p:{scaleX:0.9125,scaleY:0.9905,rotation:0,skewX:58.1788,skewY:54.6212,x:615.5,y:70.7,regX:0.2,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:61.1,regY:-43.6,rotation:52.4394,x:617.7,y:121.6,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0}},{t:this.instance}]},2).to({state:[{t:this.instance_5,p:{regX:61.1,regY:-43.6,rotation:-9.8171,x:716.35,y:79.05,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0}},{t:this.instance_3,p:{y:98.85,regX:0.1,regY:-0.1,rotation:23.6803,x:633.9,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:92.1321,skewX:0,skewY:0,x:621,y:109.25,regX:74.6,regY:-68.2}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:53.6809,skewX:0,skewY:0,x:638.45,y:49.9,regX:0.1,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:60.8,regY:-43.6,rotation:0,x:723.15,y:98.4,scaleX:0.9999,scaleY:0.9999,skewX:-98.7743,skewY:81.2257}},{t:this.instance_4,p:{y:49.35,regX:0.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:0,skewX:-95.0296,skewY:84.9704,x:672.9}},{t:this.instance_3,p:{y:106.3,regX:0,regY:0,rotation:0,x:666.3,scaleX:1,scaleY:1,skewX:-18.6948,skewY:161.3052}},{t:this.instance_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,skewX:-11.4715,skewY:168.5285,x:653,y:101.4,regX:25.8,regY:-48.9}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,skewX:18.5265,skewY:-161.4735,x:653.35,y:63.4,regX:0.1,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:10,regY:-53,rotation:0,x:706.1,y:61.55,scaleX:0.9999,scaleY:0.9999,skewX:-83.7754,skewY:96.2237}},{t:this.instance_4,p:{y:61.35,regX:0.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:0,skewX:-95.0296,skewY:84.9704,x:672.9}},{t:this.instance_3,p:{y:118.3,regX:0,regY:0,rotation:0,x:666.3,scaleX:1,scaleY:1,skewX:-18.6948,skewY:161.3052}},{t:this.instance_2,p:{scaleX:0.9061,scaleY:0.9962,rotation:0,skewX:-25.3723,skewY:152.3234,x:658.4,y:107.45,regX:25.8,regY:-48.9}},{t:this.instance_1,p:{scaleX:0.9125,scaleY:0.9905,rotation:0,skewX:1.8212,skewY:-174.6218,x:648.9,y:70.7,regX:0.1,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:61.1,regY:-43.6,rotation:0,x:654.6,y:121.6,scaleX:0.9999,scaleY:0.9999,skewX:-52.4394,skewY:127.5606}},{t:this.instance}]},2).to({state:[{t:this.instance_5,p:{regX:61.1,regY:-43.6,rotation:0,x:555.95,y:79.05,scaleX:0.9999,scaleY:0.9999,skewX:9.8171,skewY:-170.1829}},{t:this.instance_3,p:{y:98.85,regX:0.1,regY:-0.1,rotation:0,x:638.4,scaleX:1,scaleY:1,skewX:-23.6803,skewY:156.3194}},{t:this.instance_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,skewX:-92.1321,skewY:87.8679,x:651.3,y:109.25,regX:74.6,regY:-68.2}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,skewX:-53.6809,skewY:126.3191,x:633.85,y:49.9,regX:0.1,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:61,regY:-43.4,rotation:0,x:556.95,y:44.35,scaleX:1.0005,scaleY:0.9067,skewX:45.3075,skewY:-127.4882}},{t:this.instance_4,p:{y:62.75,regX:0.1,regY:0.2,scaleX:1.007,scaleY:0.8994,rotation:0,skewX:49.1592,skewY:-124.3713,x:618.65}},{t:this.instance_3,p:{y:102.85,regX:0.1,regY:0,rotation:0,x:666.15,scaleX:0.9762,scaleY:1.0221,skewX:-17.7114,skewY:160.2773}},{t:this.instance_2,p:{scaleX:1.0271,scaleY:0.9708,rotation:0,skewX:-98.4122,skewY:80.8724,x:712.7,y:48.5,regX:25.9,regY:-49.1}},{t:this.instance_1,p:{scaleX:1.008,scaleY:0.9906,rotation:0,skewX:-67.1932,skewY:109.6506,x:682.85,y:47.5,regX:0.4,regY:0}}]},2).to({state:[{t:this.instance_5,p:{regX:10,regY:-53,rotation:0,x:618.15,y:104.8,scaleX:0.9998,scaleY:0.9998,skewX:21.2235,skewY:-158.7765}},{t:this.instance_4,p:{y:82,regX:0.2,regY:-0.1,scaleX:0.9998,scaleY:0.9998,rotation:0,skewX:24.9698,skewY:-155.0299,x:630.6}},{t:this.instance_3,p:{y:118.3,regX:0,regY:0,rotation:0,x:666.3,scaleX:1,scaleY:1,skewX:-18.6948,skewY:161.3052}},{t:this.instance_2,p:{scaleX:0.9061,scaleY:0.9962,rotation:0,skewX:-85.3726,skewY:92.323,x:693.4,y:80.8,regX:25.8,regY:-48.9}},{t:this.instance_1,p:{scaleX:0.9125,scaleY:0.9905,rotation:0,skewX:-58.1784,skewY:125.3788,x:656.8,y:70.7,regX:0.2,regY:0.1}}]},2).to({state:[{t:this.instance_5,p:{regX:61.1,regY:-43.6,rotation:0,x:654.6,y:121.6,scaleX:0.9999,scaleY:0.9999,skewX:-52.4394,skewY:127.5606}},{t:this.instance}]},2).to({state:[{t:this.instance_5,p:{regX:61.1,regY:-43.6,rotation:0,x:555.95,y:79.05,scaleX:0.9999,scaleY:0.9999,skewX:9.8171,skewY:-170.1829}},{t:this.instance_3,p:{y:98.85,regX:0.1,regY:-0.1,rotation:0,x:638.4,scaleX:1,scaleY:1,skewX:-23.6803,skewY:156.3194}},{t:this.instance_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,skewX:-92.1321,skewY:87.8679,x:651.3,y:109.25,regX:74.6,regY:-68.2}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,skewX:-53.6809,skewY:126.3191,x:633.85,y:49.9,regX:0.1,regY:0.1}}]},2).to({state:[{t:this.instance_8},{t:this.instance_3,p:{y:135.85,regX:0,regY:0,rotation:-2.4924,x:574.6,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_7,p:{regX:-76.9,regY:12.4,rotation:-9.9554,x:647.5,y:95.1,scaleX:0.2685,scaleY:0.2685,skewX:0,skewY:0}},{t:this.instance_6}]},2).to({state:[{t:this.instance_8},{t:this.instance_3,p:{y:135.85,regX:0,regY:0,rotation:-2.4924,x:574.6,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_7,p:{regX:-76.8,regY:12.5,rotation:-16.9438,x:645.25,y:78.3,scaleX:0.2685,scaleY:0.2685,skewX:0,skewY:0}},{t:this.instance_9}]},2).to({state:[{t:this.instance_11},{t:this.instance_3,p:{y:134.15,regX:0,regY:0,rotation:0,x:564.95,scaleX:1.0828,scaleY:1.0023,skewX:-9.9842,skewY:-8.5075}},{t:this.instance_7,p:{regX:-76.3,regY:12.5,rotation:0,x:638.4,y:85.15,scaleX:0.2895,scaleY:0.2704,skewX:-18.0045,skewY:-15.4384}},{t:this.instance_10}]},2).to({state:[{t:this.instance_13},{t:this.instance_3,p:{y:139.4,regX:0.1,regY:0.1,rotation:-2.9721,x:573.9,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_7,p:{regX:-76.5,regY:12.6,rotation:-10.4324,x:646.45,y:98,scaleX:0.2685,scaleY:0.2685,skewX:0,skewY:0}},{t:this.instance_12}]},4).to({state:[{t:this.instance_16},{t:this.instance_3,p:{y:313.6,regX:-0.1,regY:0.1,rotation:0,x:1147.7,scaleX:0.9999,scaleY:0.9999,skewX:-12.0279,skewY:167.9721}},{t:this.instance_15,p:{x:1054.55,y:294.5}},{t:this.instance_14}]},2).to({state:[{t:this.instance_16},{t:this.instance_3,p:{y:313.6,regX:-0.1,regY:0.1,rotation:0,x:1147.7,scaleX:0.9999,scaleY:0.9999,skewX:-12.0279,skewY:167.9721}},{t:this.instance_15,p:{x:1055.95,y:294.05}},{t:this.instance_17}]},2).to({state:[{t:this.instance_19},{t:this.instance_3,p:{y:310.2,regX:-0.1,regY:0.1,rotation:0,x:1147.7,scaleX:0.9999,scaleY:0.9999,skewX:-12.0279,skewY:167.9721}},{t:this.instance_18}]},1).to({state:[{t:this.instance_19},{t:this.instance_3,p:{y:310.2,regX:-0.1,regY:0.1,rotation:0,x:1147.7,scaleX:0.9999,scaleY:0.9999,skewX:-12.0279,skewY:167.9721}},{t:this.instance_20}]},2).to({state:[{t:this.instance_16},{t:this.instance_3,p:{y:313.6,regX:-0.1,regY:0.1,rotation:0,x:1147.7,scaleX:0.9999,scaleY:0.9999,skewX:-12.0279,skewY:167.9721}},{t:this.instance_21}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:86.7,regY:-96,x:609.3,y:138.5},0).wait(13).to({regX:15.5,regY:-92.8,x:538.1,y:137.7},0).wait(1).to({regX:86.7,regY:-96,x:609.3,y:134.5},0).wait(29).to({regX:15.5,regY:-92.8,x:538.1,y:141.7},0).to({_off:true},2).wait(4).to({_off:false,regY:-92.7,rotation:18.6948,x:567,y:113.5},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false,rotation:0,skewX:-18.6948,skewY:161.3052,x:705.3},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(19));

	// soda
	this.instance_22 = new lib.soda();
	this.instance_22.setTransform(1172.85,459.45,0.2702,0.3016,-85.4347,0,0,-76.9,12.8);

	this.instance_23 = new lib.Cheeseburger();
	this.instance_23.setTransform(1044.3,292.4,0.1468,0.1468,-29.9953,0,0,-81.8,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},88).to({state:[{t:this.instance_22},{t:this.instance_23,p:{x:1044.3,y:292.4}}]},3).to({state:[{t:this.instance_22},{t:this.instance_23,p:{x:1057.6,y:294.05}}]},3).wait(1));

	// sodaspill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("AgbCDQgRgGgDgPQgBgDABgDIg3gFIh9gNQgdgDgMgHQgJgFgGgJQgGgKACgKQACgPAZgPQAlgTAogKIAKgDQAggHAhAAQgMgLAEgSQAEgRAOgKQAMgIASgDQAJgBAXgBQBIgFBGgXQAbgKANACQALABAIAHQAJAIAAAJQgBAIgFAOQgCALAHASQAHAUABAIIgBAIQgBAPgMANIgeAgIgMAMIAGAAQANABAZAHQANADAcABIAjABQAoABADAWQACAIgFAHQgFAHgHAEQgIAEgYACIhWAFIiZAIIgJAAQgNAAgHgCgAhHAqIBLAAIhUgEQABAEAIAAg");
	this.shape_3.setTransform(1144.2423,469.6023);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(88).to({_off:false},0).wait(7));

	// louieBodyLower
	this.instance_24 = new lib.CachedBmp_8421();
	this.instance_24.setTransform(505.35,205.8,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_8422();
	this.instance_25.setTransform(505.35,205.8,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_8423();
	this.instance_26.setTransform(505.35,205.8,0.5,0.5);

	this.instance_27 = new lib.shortsfront();
	this.instance_27.setTransform(571.1,205.7,1,1,0,0,0,60.2,-58.8);

	this.instance_28 = new lib.CachedBmp_8424();
	this.instance_28.setTransform(424.45,158.75,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_4580();
	this.instance_29.setTransform(542.05,146.45,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_8425();
	this.instance_30.setTransform(464.3,162.65,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_4587();
	this.instance_31.setTransform(542.05,153.55,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_8426();
	this.instance_32.setTransform(448.7,168.25,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_8427();
	this.instance_33.setTransform(468.25,132.75,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_8428();
	this.instance_34.setTransform(414,164.65,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_8429();
	this.instance_35.setTransform(464.3,162.65,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_8430();
	this.instance_36.setTransform(448.7,168.25,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_8431();
	this.instance_37.setTransform(468.25,132.75,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_8432();
	this.instance_38.setTransform(504,158.65,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_4591();
	this.instance_39.setTransform(648.7,146.45,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_8433();
	this.instance_40.setTransform(546.1,162.6,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_4598();
	this.instance_41.setTransform(648.7,153.55,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_8434();
	this.instance_42.setTransform(630.5,168.25,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_8435();
	this.instance_43.setTransform(537.35,132.75,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_8436();
	this.instance_44.setTransform(527.05,164.6,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_8437();
	this.instance_45.setTransform(546.1,162.6,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_8438();
	this.instance_46.setTransform(630.5,168.25,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_8439();
	this.instance_47.setTransform(537.35,132.75,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_8440();
	this.instance_48.setTransform(505.35,205.8,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_8441();
	this.instance_49.setTransform(505.35,205.8,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_8442();
	this.instance_50.setTransform(505.35,205.8,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_8443();
	this.instance_51.setTransform(890.75,328.35,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_8444();
	this.instance_52.setTransform(890.75,328.35,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_8445();
	this.instance_53.setTransform(890.75,328.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.instance_25}]},14).to({state:[{t:this.instance_26}]},30).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27,p:{y:205.7,skewY:0,x:571.1}}]},2).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_27,p:{y:209.7,skewY:0,x:571.1}}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_31},{t:this.instance_35},{t:this.instance_27,p:{y:209.7,skewY:0,x:571.1}}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_27,p:{y:205.7,skewY:180,x:701.2}}]},2).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_27,p:{y:209.7,skewY:180,x:701.2}}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_41},{t:this.instance_45},{t:this.instance_27,p:{y:209.7,skewY:180,x:701.2}}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},4).to({state:[{t:this.instance_50}]},4).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},3).to({state:[{t:this.instance_53}]},3).wait(1));

	// louieHat
	this.instance_54 = new lib.Tween32("synched",0);
	this.instance_54.setTransform(604.65,-31.7);

	this.instance_55 = new lib.Tween33("synched",0);
	this.instance_55.setTransform(604.65,-33.7);
	this.instance_55._off = true;

	this.instance_56 = new lib.Tween34("synched",0);
	this.instance_56.setTransform(604.65,-31.7);

	this.instance_57 = new lib.CachedBmp_8446();
	this.instance_57.setTransform(608.6,-80.55,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_8447();
	this.instance_58.setTransform(608.6,-67.55,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_8448();
	this.instance_59.setTransform(608.6,-67.55,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_8449();
	this.instance_60.setTransform(551.5,-80.55,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_8450();
	this.instance_61.setTransform(551.5,-67.55,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_8451();
	this.instance_62.setTransform(551.5,-67.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_54}]}).to({state:[{t:this.instance_55}]},14).to({state:[{t:this.instance_56}]},30).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_58}]},2).to({state:[]},2).to({state:[{t:this.instance_59}]},6).to({state:[]},2).to({state:[{t:this.instance_60}]},4).to({state:[{t:this.instance_61}]},2).to({state:[]},2).to({state:[{t:this.instance_62}]},6).to({state:[]},2).to({state:[{t:this.instance_54}]},4).to({state:[{t:this.instance_54}]},4).to({state:[{t:this.instance_54}]},4).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_54}]},3).to({state:[{t:this.instance_54}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({_off:true,y:-33.7},14).wait(64).to({_off:false,rotation:-2.4924,x:594.25,y:-32},0).wait(4).to({regX:0.1,regY:-0.1,scaleX:1.0828,scaleY:1.0023,rotation:0,skewX:-9.9842,skewY:-8.5075,x:564.85,y:-34.9},0).wait(4).to({scaleX:1,scaleY:1,rotation:-2.9721,skewX:0,skewY:0,x:592.15,y:-28.7},0).wait(2).to({regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:0,skewX:-42.0269,skewY:137.9731,x:1055.55,y:185.7},0).wait(3).to({regX:0,regY:0,skewX:-45.7314,skewY:134.2686,x:1053.2,y:190.7},0).wait(3).to({regX:0.1,regY:0.1,skewX:-42.0269,skewY:137.9731,x:1055.55,y:185.7},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).to({_off:false},14).to({_off:true,y:-31.7},30).wait(51));

	// louieHead
	this.instance_63 = new lib.Tween35("synched",0);
	this.instance_63.setTransform(590.45,18.7);

	this.instance_64 = new lib.Tween36("synched",0);
	this.instance_64.setTransform(590.45,16.7);
	this.instance_64._off = true;

	this.instance_65 = new lib.Tween37("synched",0);
	this.instance_65.setTransform(590.45,19.7);

	this.instance_66 = new lib.CachedBmp_8452();
	this.instance_66.setTransform(604.6,-42.85,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_8453();
	this.instance_67.setTransform(604.6,-30.85,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_8454();
	this.instance_68.setTransform(607.35,-58.6,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_8455();
	this.instance_69.setTransform(645.05,-77.4,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_8456();
	this.instance_70.setTransform(607.35,-85.6,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_8457();
	this.instance_71.setTransform(604.6,-30.85,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_8458();
	this.instance_72.setTransform(607.35,-58.6,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_8459();
	this.instance_73.setTransform(645.05,-78.3,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_8460();
	this.instance_74.setTransform(573.75,-42.85,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_8461();
	this.instance_75.setTransform(573.75,-30.85,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_8462();
	this.instance_76.setTransform(548.75,-58.6,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_8463();
	this.instance_77.setTransform(507.6,-78.3,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_8464();
	this.instance_78.setTransform(552.2,-86.5,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_8465();
	this.instance_79.setTransform(573.75,-30.85,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_8466();
	this.instance_80.setTransform(548.75,-58.6,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_8467();
	this.instance_81.setTransform(507.6,-78.3,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_8468();
	this.instance_82.setTransform(534.8,-15.7,0.5,0.5);

	this.instance_83 = new lib.laughMouth();
	this.instance_83.setTransform(612.3,31,0.2316,0.2648,-2.4904,0,0,-21.8,-10.3);

	this.instance_84 = new lib.CachedBmp_4634();
	this.instance_84.setTransform(538.55,-16.4,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_8469();
	this.instance_85.setTransform(534.8,-15.7,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_8470();
	this.instance_86.setTransform(534.8,-15.7,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_8471();
	this.instance_87.setTransform(505.9,-21.75,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_4636();
	this.instance_88.setTransform(508.35,-21.55,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_8472();
	this.instance_89.setTransform(532.9,-12.55,0.5,0.5);

	this.instance_90 = new lib.CachedBmp_4638();
	this.instance_90.setTransform(536.7,-13.2,0.5,0.5);

	this.instance_91 = new lib.sadmouth("synched",0);
	this.instance_91.setTransform(1089.65,245.5,0.5316,1,-29.9992,0,0,10.8,1.3);

	this.instance_92 = new lib.CachedBmp_8473();
	this.instance_92.setTransform(1046.45,161.05,0.5,0.5);

	this.instance_93 = new lib.CachedBmp_8474();
	this.instance_93.setTransform(1046.25,162.8,0.5,0.5);

	this.instance_94 = new lib.CachedBmp_8475();
	this.instance_94.setTransform(1046.45,161.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_63}]}).to({state:[{t:this.instance_64}]},14).to({state:[{t:this.instance_65}]},30).to({state:[{t:this.instance_66}]},2).to({state:[{t:this.instance_67}]},2).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_69}]},2).to({state:[{t:this.instance_70}]},2).to({state:[{t:this.instance_71}]},2).to({state:[{t:this.instance_72}]},2).to({state:[{t:this.instance_73}]},2).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_75}]},2).to({state:[{t:this.instance_76}]},2).to({state:[{t:this.instance_77}]},2).to({state:[{t:this.instance_78}]},2).to({state:[{t:this.instance_79}]},2).to({state:[{t:this.instance_80}]},2).to({state:[{t:this.instance_81}]},2).to({state:[{t:this.instance_84},{t:this.instance_83,p:{regX:-21.8,regY:-10.3,scaleX:0.2316,scaleY:0.2648,rotation:-2.4904,y:31,x:612.3,skewX:0,skewY:0}},{t:this.instance_82}]},2).to({state:[{t:this.instance_84},{t:this.instance_83,p:{regX:-21.5,regY:-10.2,scaleX:0.1853,scaleY:0.1484,rotation:-2.4862,y:30.9,x:612.3,skewX:0,skewY:0}},{t:this.instance_85}]},2).to({state:[{t:this.instance_84},{t:this.instance_83,p:{regX:-21,regY:-10.1,scaleX:0.1846,scaleY:0.1702,rotation:-2.482,y:30.9,x:612.4,skewX:0,skewY:0}},{t:this.instance_86}]},1).to({state:[{t:this.instance_88},{t:this.instance_83,p:{regX:-21.5,regY:-10.2,scaleX:0.2508,scaleY:0.2654,rotation:0,y:25.65,x:592.3,skewX:-9.9801,skewY:-8.5068}},{t:this.instance_87}]},1).to({state:[{t:this.instance_90},{t:this.instance_83,p:{regX:-21.4,regY:-10.1,scaleX:0.2316,scaleY:0.2648,rotation:-2.9699,y:34.25,x:610.7,skewX:0,skewY:0}},{t:this.instance_89}]},4).to({state:[{t:this.instance_92},{t:this.instance_91,p:{rotation:-29.9992,y:245.5}}]},2).to({state:[{t:this.instance_93},{t:this.instance_91,p:{rotation:-44.9988,y:248.8}}]},3).to({state:[{t:this.instance_94},{t:this.instance_91,p:{rotation:-29.9992,y:245.5}}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({_off:true,y:16.7},14).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).to({_off:false},14).to({_off:true,y:19.7},30).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(414,-86.5,808.9000000000001,577.9);


(lib.louie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		createjs.Sound.play("nomnom");
	}
	this.frame_74 = function() {
		this.stop();
		
		this.stage.getChildAt(0).louie.visible = false;
		this.stage.getChildAt(0).land_background_mc.visible = false;
		this.stage.getChildAt(0).beach_background_mc.visible = true;
		this.stage.getChildAt(0).beach_background_mc.stickSeagulls.visible = false;
		this.stage.getChildAt(0).mainSeagull_mc.visible = true;
		
		
		this.stage.getChildAt(0).mainSeagull_mc.gotoAndPlay(2);
	}
	this.frame_75 = function() {
		this.stop();
		
		this.stage.getChildAt(0).louie.visible = true;
		this.stage.getChildAt(0).land_background_mc.visible = true;
		this.stage.getChildAt(0).beach_background_mc.visible = false;
		this.stage.getChildAt(0).beach_background_mc.stickSeagulls.visible = false;
	}
	this.frame_77 = function() {
		createjs.Sound.stop("nomnomn");
		createjs.Sound.play("slurp");
		createjs.Sound.play("music");
	}
	this.frame_114 = function() {
		this.stop();
		
		this.stage.getChildAt(0).louie.visible = false;
		this.stage.getChildAt(0).land_background_mc.visible = false;
		this.stage.getChildAt(0).beach_background_mc.visible = true;
		this.stage.getChildAt(0).beach_background_mc.stickSeagulls.visible = false;
		this.stage.getChildAt(0).mainSeagull_mc.visible = true;
		this.stage.getChildAt(0).chair.visible = true;
		this.stage.getChildAt(0).beachBall.visible = true;
		this.stage.getChildAt(0).beachTowel.visible = true;
		this.stage.getChildAt(0).umbrella.visible = true;
		this.stage.getChildAt(0).louieSit.visible = true;
		
		
		this.stage.getChildAt(0).mainSeagull_mc.gotoAndPlay(50);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(45).call(this.frame_74).wait(1).call(this.frame_75).wait(2).call(this.frame_77).wait(37).call(this.frame_114).wait(1));

	// rightarm_withburger
	this.instance = new lib.right_arm_burger();
	this.instance.setTransform(-127.7,250.45,0.8943,0.8943,47.1779,0,0,86.7,-19.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-0.6,regY:-94.9,scaleX:0.8897,scaleY:0.8944,rotation:45.7103,x:-129.65,y:141.85},0).wait(1).to({scaleX:0.8851,rotation:44.2429,x:-128.3,y:136.65},0).wait(1).to({scaleX:0.8804,rotation:42.7754,x:-126.85,y:131.5},0).wait(1).to({scaleX:0.8757,rotation:41.3079,x:-125.4,y:126.4},0).wait(1).to({scaleX:0.8711,rotation:39.8405,x:-123.9,y:121.35},0).wait(1).to({scaleX:0.8664,rotation:38.373,x:-122.45,y:116.4},0).wait(1).to({scaleX:0.8618,rotation:36.9055,x:-120.95,y:111.45},0).wait(1).to({scaleX:0.8571,rotation:35.4381,x:-119.4,y:106.55},0).wait(1).to({scaleX:0.8525,rotation:33.9706,x:-117.8,y:101.65},0).wait(1).to({scaleX:0.8478,rotation:32.5031,x:-116.3,y:96.9},0).wait(1).to({scaleX:0.8432,rotation:31.0356,x:-114.7,y:92.15},0).wait(1).to({scaleX:0.8385,rotation:29.5682,x:-113,y:87.45},0).wait(1).to({scaleX:0.8339,rotation:28.1007,x:-111.35,y:82.8},0).wait(1).to({scaleX:0.8292,rotation:26.6332,x:-109.65,y:78.2},0).wait(1).to({scaleX:0.8245,rotation:25.1658,x:-107.9,y:73.6},0).wait(1).to({scaleX:0.8199,rotation:23.6983,x:-106.15,y:69.05},0).wait(1).to({scaleX:0.8152,rotation:22.2308,x:-104.35,y:64.55},0).wait(1).to({scaleX:0.8106,rotation:20.7634,x:-102.5,y:60.15},0).wait(1).to({scaleX:0.8059,rotation:19.2959,x:-100.6,y:55.7},0).wait(1).to({scaleX:0.8013,rotation:17.8284,x:-98.7,y:51.3},0).wait(1).to({scaleX:0.7966,rotation:16.361,x:-96.8,y:46.9},0).wait(1).to({scaleX:0.7919,rotation:14.8935,x:-94.8,y:42.7},0).wait(1).to({scaleX:0.7873,rotation:13.426,x:-92.8,y:38.4},0).wait(1).to({scaleX:0.7826,rotation:11.9586,x:-90.7,y:34.1},0).wait(1).to({scaleX:0.778,rotation:10.4911,x:-88.65,y:29.9},0).wait(1).to({scaleX:0.7733,rotation:9.0236,x:-86.5,y:25.75},0).wait(1).to({scaleX:0.7687,rotation:7.5562,x:-84.3,y:21.6},0).wait(1).to({regX:84.7,regY:-17.2,scaleX:0.7686,rotation:7.5547,x:-26.7,y:97.65},0).wait(1).to({regX:-0.6,regY:-94.9,scaleX:0.7561,rotation:7.5562,x:-81.45,y:20.25},0).wait(1).to({scaleX:0.7434,x:-80.4,y:20.4},0).wait(1).to({scaleX:0.7308,x:-79.35,y:20.55},0).wait(1).to({scaleX:0.7182,x:-78.3,y:20.7},0).wait(6).to({regX:84.3,regY:-16.6,scaleX:0.7686,rotation:7.5536,x:-26.75,y:97.7},0).wait(1).to({regX:-0.6,regY:-94.9,rotation:7.555,x:-82.25,y:19.65},0).wait(7).to({regX:85.8,regY:-18.5,scaleX:0.7182,rotation:7.5547,x:-26.7,y:97.7},0).wait(1).to({regX:84.5,regY:-17,scaleX:0.7686,x:-26.75,y:97.75},0).wait(1).to({regX:-0.6,regY:-94.9,scaleX:0.7561,rotation:7.5562,x:-81.35,y:20.15},0).wait(1).to({scaleX:0.7434,x:-80.3,y:20.3},0).wait(1).to({scaleX:0.7308,x:-79.25,y:20.45},0).wait(1).to({scaleX:0.7182,x:-78.2,y:20.6},0).wait(6).to({regX:84.2,regY:-16.6,scaleX:0.7686,rotation:7.5536,x:-26.75,y:97.65},0).wait(1).to({regX:-0.6,regY:-94.9,rotation:7.555,x:-82.15,y:19.6},0).wait(7).to({regX:85.8,regY:-18.5,scaleX:0.7182,rotation:7.5547,x:-26.7,y:97.7},0).wait(1).to({_off:true},8).wait(40));

	// soda_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_75 = new cjs.Graphics().p("AtCK7IAA11IaFAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_graphics_75,x:-31.95,y:12.725}).wait(40));

	// sodaLayer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A1705E").s().p("ACZSYQgNgNgRgaIg9hiQgIgNgIgFQgFgDgGABQgHAAgDAFQgHAJALARIAgA0QAaAqAVAeIgBABQgHAHgQgFQgTgGgSgVQgMgMgQgaIhOh/QgJgOgIgBQgGAAgFAGQgEAFAAAGQAAAKAJAOIAzBWIAFAKIgFgCQgYgIgQgcQgKgSgJgiIgoiKQgPgxgEgaQgIgrADgjQAIgrgBgWQAAgKgDgRIgFgbIABhBQAAglgLgWQgBgagJgrQgKgzgBgYQgBgVABgjQACgoAAgRQgBgjgMhDIhPnDQgjjGgIiHQgEhMAEg4IACgSIgBgJQAGgGAAgNIgCgRIgJhAQgDgRgCgGIgFgMIgDgPIgDgVIgDgRIgCgEIADgVIACgIIAgiaIBOASIBSATIB5AhQBGATA0ABQAvACBHgMIATAAIgHGKQgDCUgEA4IgKB/IgxIiQgIBSgBAqQgDBEAGA2IALBKQAGAtgCAeQgBAOACAKQgUgEgUABQgBgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgFgFgIADQgGACgFAEQgGACgEADQgGAGADAJQADAKAIAEIAEACIACAAQAFACAHgBIATgCQAlgDAUAQQAKAJAJASIAOAfQAGANAPARIAYAeQAbAogNAeQgFANgPAMIgPAMIgPgaQgbgvgXgOQgIgGgKgBQgLAAgFAIQgDAFACAHQACAHAFAGQAGAFAQAKQALAJALAUIASAgIAJAOIACAEQAEAIgBAGIgBAIQgBAEABACQADAJAPADQASACAGgKQAGgKgJgQIgDgGIAPgKIAGAAQAKAAAJgEIAQgJQAJgGAIAAQAFBNgDBTQgDA+gNAgQgKAXgRASQgOANgPAGIgCgEQgcglgQgnIgOgiQgJgSgKgLQgGgHgHgDQgJgDgGAEQgFADgBAHQgBAFACAGQACAGAKANQAIAMAHATIAMAgQAKAVARAVQAHAKADAHQgGACgFADQgHAFgCAIIgWACQgWAAgTgTg");
	this.shape.setTransform(-163.6187,324.35);

	this.instance_1 = new lib.soda();
	this.instance_1.setTransform(-37.75,43.4,1,1,0,0,0,-79,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A1705E").s().p("ADZaJQgSgTgYglIhXiLQgLgUgLgGQgIgEgJABQgJABgFAGQgKANAQAZIAtBJQAlA8AgAqIgCACQgLAKgWgHQgcgJgZgdQgRgRgXglIhwi2QgMgUgMAAQgIAAgHAHQgGAIAAAJQAAAOANAUIBIB7IAJANIgIgCQgjgNgWgnQgOgZgOgxIg5jEQgUhGgHglQgLg9AFgxQALg+gBgfQgBgOgEgYQgGgdAAgKQgBgFABhXQAAg0gOggQgDglgMg9QgOhJgCgiQgCgdACgzQADg4AAgZQgBgxgRhfIhxqDQgxkYgMjBQgGhsAHhQIACgaIgBgMQAIgKAAgRQAAgMgDgNIgMhbQgFgYgDgIIgHgRQgCgHgCgPIgEgeQgCgNgCgKIgDgHIAFgdIACgMIAujbIBuAZIB1AcQByAhA6APQBjAZBKACQBEADBkgRIAcAAIgKIxQgEDTgGBPIgOC1IhHMIQgKB1gDA7QgEBhAJBOQAFAjALBGQAJA/gDArQgCAVADAOQgcgGgdAAQgDgDgCgBQgIgGgMAEQgHADgIAGQgIACgGAEQgJAIAEAOQAFAOALAGIAGADIADAAQAHACAKAAIAbgDQA1gFAcAXQAPAMAMAaIAUAsQAJATAVAYIAiAqQAmA5gSArQgIASgUASIgWARIgVgmQgmhCghgUQgMgJgOAAQgPgBgHALQgFAIACAKQADAKAHAHQAKAJAWANQAQANAQAcQAWArADAEIANATQABADADADQAEAKgBAJIgBALQgCAHACADQADANAWADQAZADAKgOQAIgNgNgZIgEgHQALgHAKgIIAJABQANAAANgGIAXgOQANgHALgBQAHBugEB1QgEBZgTAuQgOAhgYAYQgTATgWAJIgDgFQgng2gYg4IgUgvQgMgagOgQQgJgKgKgEQgMgEgKAGQgGAEgBAJQgCAJADAIQADAJAOASQALARAKAbIARAtQAPAeAXAfQALANAFAJQgKAEgHAEQgKAHgCAMQgNAAgTADQgfgBgcgag");
	this.shape_1.setTransform(-221.262,483.175);

	var maskedShapeInstanceList = [this.shape,this.instance_1,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.instance_1}]},74).wait(40));

	// Mouth
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghBaQgLgBgXgGQgWgGgMgBIgaAAQgQAAgJgGIgJgHIgKgIQgEgCgKgCIgOgEQgHgEgEgGQgEgHAAgIQgBgIAEgHQAEgHAHgDQAGgDAMgDQAIgEAKgKIAQgRQAUgUAjgJQARgEAtgEIBRgJQAwgFAiABQAUABALAFIAWALQAQAHADACQAIAGACAKQACALgDAKQgFAPgTARQgdAcgZALQgNAGgcAKIgVAKIgWAKQgMAEghAEQgTADgLAAIgJgBg");
	this.shape_2.setTransform(-29.1414,-55.4858);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghAhIgigDIgigDIgaAAQgQAAgJgCIgJgCIgKgDIgOgBIgOgCQgHgBgEgDQgEgCAAgDQgBgDAEgCQAEgDAHAAIASgDQAIgBAKgEIAQgGQAUgHAjgDIA+gDIBRgDQAwgCAiAAQAUAAALACIAWAEIATADQAIADACADQACAEgDAEQgFAFgTAGQgdAKgZAEIgpAGIgVADIgWAEIgtADIggABIgHAAg");
	this.shape_3.setTransform(-29.1414,-55.8237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAoIgigDIgjgDIgcAAQgPAAgKgDIgJgDIgKgEIgOgBIgPgCQgHgCgEgDQgFgDAAgDQAAgEAEgDQAEgDAHgBIASgDQAJgBAKgFIAQgHQAVgJAjgEQASgCAugCIBUgDQAxgDAjABQAUAAALACIAWAFIAUAEQAIADADAEQACAFgEAEQgFAHgTAHQgeAMgZAFIgqAIQgHAAgPAEIgXAEQgMACgiACIghABIgHAAg");
	this.shape_4.setTransform(-29.1414,-55.8229);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAwQgMgBgYgEIgkgDIgcAAQgQAAgKgDIgJgEIgKgEIgPgCIgPgDQgHgBgEgEQgFgDAAgEQgBgEAEgEQAFgEAHgBIASgDQAJgDAKgFIARgIQAWgLAkgFQASgCAvgCQA5gEAdAAQAygDAkAAQAUAAAMADIAXAGIAUAEQAIAEADAFQACAGgEAFQgEAIgUAJQgfAOgaAGQgOAEgdAFQgGAAgRAFQgOAEgJABQgMACgjACIgjACIgFAAg");
	this.shape_5.setTransform(-29.1444,-55.8236);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjA3IgkgFQgYgDgNgBIgdAAQgQAAgKgDIgKgFIgKgFIgPgBIgPgEQgIgBgEgFQgFgEAAgEQgBgFAFgEQAEgFAHgBIATgEQAJgDALgGIARgKQAWgMAlgFQASgDAxgDIBYgFQAzgDAlABQAVAAALADIAYAHIAVAFQAIAEADAGQACAHgEAGQgFAJgUAKQgfARgbAHQgOAEgeAGIgXAGIgYAGQgMACgkADIghABIgJAAg");
	this.shape_6.setTransform(-29.1544,-55.8143);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkA/QgMgBgagFQgYgEgNgBIgdAAQgRAAgLgEIgKgEIgKgGIgQgCQgKgCgFgCQgIgCgEgEQgFgFAAgFQAAgGAEgFQAEgEAIgCIATgFQAKgDAKgHIASgLQAWgOAmgGQATgDAxgDQA8gFAegBQA1gEAlABQAWAAAMAEIAYAIIAVAGQAJAFADAGQACAIgEAHQgFAKgVALQggAUgbAHQgPAFgeAHQgHABgRAFIgYAHQgNADgkADQgXACgNAAIgHAAg");
	this.shape_7.setTransform(-29.1414,-55.8225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBGQgNgBgZgFQgZgEgOgBIgeAAQgRAAgLgFIgKgFIgKgHIgQgCQgLgCgFgCQgIgCgEgFQgFgGAAgFQgBgHAEgFQAFgFAIgDIATgFQAKgDALgIIASgMQAXgQAngHQATgDAzgDQA9gGAfgBQA2gEAmABQAWAAAMAEIAZAJIAVAGQAJAGADAHQACAJgEAHQgFAMgVANQghAVgcAJQgPAFgfAIQgHABgRAGIgZAIQgNADglADQgXACgNAAIgIAAg");
	this.shape_8.setTransform(-29.1444,-55.8216);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmBOQgNgBgagGIgngGIgfAAQgSAAgLgFIgKgGIgLgHIgQgCQgLgDgFgCQgIgDgFgFQgFgGAAgGQAAgHAEgGQAFgGAIgDIAUgGQAKgDALgJIASgOQAYgRAngIQAUgDA0gEQA+gGAggBQA3gFAnABQAXAAAMAFIAaAKIAVAHQAKAGADAIQACAKgEAIQgFANgWAOQgiAYgcAJQgQAGggAJQgGABgSAHQgQAGgKACQgNAEgmADQgYADgOAAIgHAAg");
	this.shape_9.setTransform(-29.1444,-55.8222);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBVQgNgCgbgGQgagFgOgBIggAAQgSAAgLgGIgLgGIgLgIIgQgDQgLgCgGgDQgIgCgEgHQgGgGAAgHQAAgIAEgGQAFgHAIgDIAVgGQAKgEALgJIATgQQAYgTApgIQATgEA1gEQBAgGAhgCQA4gFAoACQAXAAANAFIAaAKIAWAIQAKAHACAIQADALgEAJQgGAOgWAQQgiAageALQgPAGghAJQgHACgSAHIgaAKQgOADgmAEQgYADgOAAIgIAAg");
	this.shape_10.setTransform(-29.1544,-55.7969);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnBcQgNgBgcgHQgbgGgOgBIggAAQgSAAgMgGIgLgHIgLgIIgRgDIgRgGQgIgDgFgHQgFgHAAgHQgBgIAFgIQAFgHAIgDIAVgHQAKgEAMgKIATgRQAZgVApgJQAUgEA2gEQBCgHAhgCQA5gFApABQAYAAANAGIAaALIAXAJQAKAHADAJQACAMgEAKQgFAPgXASQgjAcgeALQgQAHghAKQgHACgTAIIgbAKQgOAEgnAEQgZAEgOAAIgIgBg");
	this.shape_11.setTransform(-29.1544,-55.7973);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoBkQgOgCgcgHQgbgGgOgCIghAAQgTAAgMgGQgDgDgIgFIgLgJIgSgDQgLgDgGgDQgIgDgFgIQgGgHAAgIQAAgJAEgIQAGgIAIgDIAVgIQALgEAMgLIATgSQAZgXArgJQAUgFA4gFQBCgHAigCQA7gGAqACQAYAAANAGIAbAMIAXAJQAKAIADAKQADANgFAKQgFARgXATQgkAfgfAMQgQAHgiALQgHACgTAJIgbALQgPAEgoAFQgZADgPAAIgIAAg");
	this.shape_12.setTransform(-29.1579,-55.7962);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpBsQgOgCgdgIQgcgGgPgCIghAAQgTAAgMgHIgLgIIgMgKQgGgCgMgBQgLgDgGgEQgJgDgFgIQgFgIAAgJQgBgJAEgJQAGgIAIgEIAWgIQALgFAMgLIAUgUQAagZArgKQAVgFA4gEQBFgJAigBQA8gHAqACQAZAAAOAGIAbANIAYAKQAKAJADALQACANgEAMQgFASgYAUQglAhgfANQgQAIgjAMQgHABgUAKQgSAJgKADQgOAEgqAFQgaAEgOAAIgIAAg");
	this.shape_13.setTransform(-29.1444,-55.8049);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgqBzQgOgCgdgIQgdgIgPgBIgiAAQgTAAgMgHIgMgJIgMgLQgGgCgMgBQgMgEgGgDQgJgEgFgIQgFgJAAgJQgBgLAFgJQAFgIAIgFIAXgIQALgFANgNIAUgVQAagaAsgLQAVgFA6gFQBGgJAjgCQA9gHArACQAZAAAOAHIAcAOIAZALQAKAIADAMQACAOgEANQgGATgYAWQglAjggAOQgRAJgjAMQgIACgTALIgdAMQgPAFgqAFQgaAEgPAAIgJAAg");
	this.shape_14.setTransform(-29.1544,-55.7956);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqB6QgPgCgegJQgdgHgPgCIgjAAQgUAAgMgIIgMgJIgMgLIgTgEQgMgEgGgEQgJgDgFgJQgGgKAAgJQAAgLAEgKQAGgJAIgFQAIgEAPgFQAMgGAMgNIAVgWQAbgcAtgMQAVgFA7gGQBHgJAkgCQA+gIAsACQAaAAAOAIIAdAPIAZALQAKAKADAMQADAPgFAOQgFAUgZAXQgmAmghAPQgRAJgkANQgHACgVALQgSAKgLAEQgPAFgrAFQgbAFgPAAIgIgBg");
	this.shape_15.setTransform(-29.1579,-55.7961);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgrCCQgPgCgfgKQgdgIgQgCIgjAAQgVAAgMgIIgMgKIgNgMIgTgEQgMgEgGgEQgJgEgFgJQgGgKAAgKQgBgMAFgKQAGgKAIgFIAYgKQALgGANgOIAVgYQAbgdAugMQAWgGA8gGQBJgKAkgCQBAgIAtACQAaAAAOAIIAeAQIAZAMQALAKADANQACAQgEAOQgGAWgZAZQgnAoghAPQgSAKglAOQgHACgVAMQgTAKgKAEQgQAGgsAGQgbAEgQAAIgIAAg");
	this.shape_16.setTransform(-29.1579,-55.795);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmBJIgngGIgngGIgfAAQgSAAgLgFIgLgFIgKgHIgRgCIgQgFQgIgCgEgFQgFgGAAgGQgBgGAEgGQAFgGAIgCIAUgGQAKgDALgIIATgNQAXgRAogHQATgDA1gEQA/gFAfgBQA4gFAnABQAWAAANAFIAaAJIAVAHQAKAFADAIQACAJgEAIQgFAMgWAOQgiAWgdAJQgPAGggAIQgHABgSAGQgQAGgJACQgOADgmAEQgZADgNAAIgHgBg");
	this.shape_17.setTransform(-29.1694,-55.848);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglBFQgNgBgagFIgngFIgeAAQgSAAgLgFIgKgFIgLgGIgQgCIgQgFQgIgCgEgFQgFgFAAgGQgBgGAEgGQAFgFAIgCIAUgFQAKgDALgIIASgNQAXgQAogGQASgDA0gDQA+gGAggBQA2gEAnABQAWAAANAEIAZAJIAVAHQAKAFADAHQACAIgEAIQgFAMgWANQghAVgdAIQgOAGghAHQgGABgSAGQgQAGgJACQgNADgmADQgXADgOAAIgHgBg");
	this.shape_18.setTransform(-29.1694,-55.8475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkA6IglgFIglgFIgeAAQgRAAgKgDIgKgFIgKgFIgQgCIgPgDQgIgCgEgEQgFgFAAgEQAAgGAEgEQAEgFAIgCIATgEQAKgCAKgHIASgKQAWgOAmgFQASgDAygCQA7gFAegBQA1gDAlABQAWAAAMADIAYAHIAVAGQAJAEACAGQACAHgDAHQgFAJgVALQggASgbAHQgPAEgeAHQgHAAgRAGIgYAGQgNACgkADIgmACIgFAAg");
	this.shape_19.setTransform(-29.1664,-55.8319);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAnIgjgDIgigDIgcAAQgPAAgKgDIgJgDIgKgDIgOgCIgPgCQgHgBgEgDQgFgDAAgDQAAgEAEgDQAEgDAHgBIASgDQAJgBAKgFIAQgHQAVgJAjgDQASgCAugCIBTgDQAygDAiABQAUAAAMACIAWAFIAUAEQAIADADAEQACAEgEAFQgFAGgTAHQgeAMgZAFIgrAHIgVAEIgXAEQgMACgiACIgiABIgGAAg");
	this.shape_20.setTransform(-29.1444,-55.8242);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghAoIgjgEIgjgDIgbAAQgQAAgKgCIgJgDIgKgEIgOgBIgPgDQgHgBgEgDQgFgDAAgDQAAgEAEgDQAEgDAHgBIASgDQAJgBAKgFIAQgHQAVgJAkgEQARgCAugBIBUgEQAxgCAjAAQAUAAAMADIAWAEIAUAEQAIADACAEQACAFgDAFQgFAGgTAHQgeAMgaAFIgqAHIgWAFIgWAEQgMACgiABIgjACIgFAAg");
	this.shape_21.setTransform(-29.1664,-55.8242);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiArQgLgBgYgDIgjgDIgcAAQgQAAgKgDIgJgDIgKgEIgPgCIgOgCQgHgCgEgDQgFgDAAgDQgBgEAEgEQAFgDAHgBIASgDQAJgCAKgEIAQgIQAWgKAkgEQARgCAvgCIBVgEQAxgDAkABQAUAAALADIAXAFIAUAEQAIADADAFQACAFgEAFQgEAHgUAHQgeANgaAFQgOAEgdAEIgWAFIgXAFIguADIgjACIgGAAg");
	this.shape_22.setTransform(-29.1664,-55.8325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiAmIgigDIgjgDIgbAAQgQAAgKgCIgJgDIgKgEIgOgBIgOgCQgHgCgEgCQgFgDAAgDQAAgEAEgDQAEgDAHgBIASgCIASgGIAQgHQAVgJAkgEIA/gDIBTgEQAxgCAjABQAUAAALACIAXAFIATADQAIADADAEQACAFgEAEQgEAGgUAHQgdAMgaAEIgqAIIgWAEIgWAEIguADIghABIgHAAg");
	this.shape_23.setTransform(-29.1414,-55.833);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghAjIgigDIgjgDIgaAAQgQAAgJgCIgKgDIgJgDIgOgBIgOgCQgHgBgEgDQgFgDAAgCQAAgDAEgDQAEgDAHAAIARgDQAJgCAJgDIARgHQAUgIAjgDIA+gDIBTgDQAwgCAiAAQAUAAALACIAWAFIATADQAIACADAEQACAEgEAEQgEAGgTAGQgeAKgZAFIgpAGIgWAEIgWAEIgtADIggABIgHAAg");
	this.shape_24.setTransform(-29.1414,-55.8237);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAiIgigDIgigDIgbAAQgPAAgKgCIgJgDIgJgDIgOgBIgPgCQgHgBgEgCQgEgDAAgDQgBgDAEgCQAEgDAHAAIASgDQAJgBAJgEIAQgGQAVgIAigDIA/gDIBRgDQAxgCAiAAQATAAALACIAWAEIAUAEQAIACACAEQACAEgDADQgFAGgTAGQgdAKgZAEIgpAGIgWAEIgWAEIgtADIggABIgHAAg");
	this.shape_25.setTransform(-29.1414,-55.8237);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAuQgGAAgNgEIgSgDIgPAAQgIAAgFgDIgFgEIgGgEIgHgCQgGgBgCgBQgEgCgCgDQgCgEAAgEQgBgEACgDIAGgFIAKgEQAFgCAFgFIAJgIQALgLATgEQAJgCAZgCIAsgFQAagDASABQALAAAGADIAMAGIAKAEQAFAEABAFQABAFgCAFQgCAIgKAIQgQAOgOAGIgWAJQgEAAgIAFIgMAFQgGACgSACIgRACIgEgBg");
	this.shape_26.setTransform(-30.0133,-57.5482);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZA4QgJAAgSgFQgRgDgJgBIgVAAQgMAAgHgEIgHgEIgIgFIgLgCQgIgBgDgCQgFgCgDgEQgEgEAAgFQAAgFACgEQAEgFAFgCIAOgEQAHgCAHgGIANgLQAQgMAbgGQANgCAjgDIBAgFQAlgEAaABQAPAAAJAEIASAHIAOAFQAGAEADAGQABAHgDAGQgDAKgPAKQgXARgUAHQgKAEgVAGIgRAGIgRAHQgJACgaACQgQADgJAAIgFgBg");
	this.shape_27.setTransform(-30.0542,-57.5986);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},12).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_17}]},12).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},7).to({state:[{t:this.shape_26}]},12).to({state:[{t:this.shape_27}]},4).to({state:[{t:this.shape_26}]},5).wait(31));

	// mustache
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AlXB7IgNgGQgRABgPgCQgSgCgWgJQgSgGgJgIQgMgLgGgSQgKgbAHgXQAHgaAYgKQAJgEANgBIAXgBQAXgBAKADQAKAEAHAKQAGALgBAKQgBALgIAJQgIAJgMABQgHABgOgDQgNgCgHABQADALAUADQAvAGA8gRQAYgHBNgeQAngOAYABQAMABAXAGQAOAEAGAEQAJAHACARQADARgEAMQACALgFANQgGARgNAMQgNAMgRAFQgKADgOAAIgYAAQgfAAhAAGIgRABQgtAAgegMgABuBaQgQgJgKgOQgHgMgCgMQgHgKgCgRQgCgQAHgJQAEgHANgHQAVgMALgDQAXgIApAEQBSAJAZABQA+ABAtgSQATgIgBgMQgHABgMAGQgNAGgHACQgLABgKgGQgLgHgEgKQgEgLAEgMQAEgLAJgHQAIgFAWgFQAIgBAQgFQAMgCAKACQAaADAOAZQAMAUgDAcQAAAUgJANQgHAKgQALQgTANgRAGQgOAGgRAEQgEAFgHAFQgeAWg3AMQg/AKgfAJIgXAGQgNADgLAAQgRAAgQgIg");
	this.shape_28.setTransform(-32.6855,-75.0876);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AlbB2IgNgFQgSACgPAAQgSAAgXgHQgSgEgKgHQgNgJgIgSQgMgaAEgXQAFgbAXgMQAIgFANgDIAXgCQAXgEAKACQALADAHAKQAIAJAAAKQAAAMgIAKQgHAJgLADQgHABgOgBQgOgCgHACQAEALAUABQAwABA6gXQAYgJBJglQAmgSAXgBQAMgBAXAEQAPACAGAEQAKAHAEAQQAEAQgCAMQACAMgDANQgEARgMAOQgMANgRAGQgJAEgNACIgYACQggADg+ANQgZADgVAAQgaAAgVgFgACIBFQgSgCgPgKQgOgLgIgQQgGgMABgMQgGgLAAgRQABgQAIgJQAFgGAOgFQAWgJALgCQAYgEAoAJQBQAVAZAEQA9AJAvgLQAUgFABgMQgHAAgNAFQgOAEgHAAQgLAAgJgIQgKgIgCgLQgDgLAGgLQAFgKAKgGQAJgEAWgCIAYgCQANgBAJADQAZAHALAbQAJAVgGAcQgEATgKAMQgIAIgRAJQgVAKgSAEQgPAFgRABQgFAEgHAEQghARg5AFQhAACgfAEIgYADIgKAAIgNgBg");
	this.shape_29.setTransform(-32.043,-71.9758);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AiSCEIgYgBQgfgChAADQg5gBgigQIgNgGQgRgBgPgDQgSgDgWgKQgQgHgJgIQgMgLgFgTQgHgcAHgVQAJgbAYgIQAKgEAMAAIAYABQAXAAAJAEQAKAEAGAKQAGALgCALQgCAKgIAJQgIAIgMACIgVgEQgNgEgIABQADALAUAFQAvAJA8gPQAagFBOgaQAogKAWACQANABAWAGQAPAEAFAGQAJAJACAQQAAARgDAMQAAAMgFAMQgHAQgOAMQgOALgRADQgJACgKAAIgFAAgAB5BjQgQgJgKgNQgIgMgCgMQgHgKgDgRQgCgQAHgKQAEgGANgHQAUgNALgEQAXgHApACQBSAIAaAAQA9gBAtgSQASgIgBgMQgHABgLAGQgNAHgHABQgLACgKgGQgLgHgFgKQgEgLAEgLQADgMAJgGQAIgGAWgGIAYgGQAMgCAKABQAaADAOAZQANATgCAdQAAATgJAOQgGAKgPALQgUANgRAHQgNAGgSAFIgKAKQgeAVg3AOQg/AMgeAJIgXAHQgMADgLAAIgCAAQgRAAgPgHg");
	this.shape_30.setTransform(-32.2295,-73.474);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AjQC8IgigBQgtgDhaAEQhRgCgwgWIgTgJQgYgCgVgEQgbgDgegPQgYgKgNgMQgQgPgHgbQgLgnALgfQANgmAigMQANgFASgBIAiACQAhAAAMAFQAPAGAJAPQAIAQgDAPQgDAPgMAMQgLAMgRACIgdgFQgUgGgKACQAEAQAcAGQBDANBWgVQAkgHBwglQA4gPAgACQASACAgAKQAUAFAHAIQANANADAXQABAZgFAQQAAARgHASQgKAWgUASQgTAOgZAFQgMADgOAAIgIAAgACsCNQgWgMgPgUQgMgQgCgSQgKgOgEgYQgDgWAJgPQAGgIATgLQAcgTAQgFQAggKA7ADQB1ALAkABQBYgCBAgZQAZgMgBgRQgKABgQAJQgTAJgKADQgQACgOgJQgPgJgHgOQgFgRAFgPQAEgRANgJQAMgIAfgIQAMgCAVgHQARgDAPACQAlAEAUAjQASAbgCApQgBAcgMATQgJAOgVAQQgcATgYAKQgUAJgYAHQgFAGgKAIQgqAehPAUQhZARgrANQgfAJgCABQgRAEgQAAIgEAAQgXAAgVgKg");
	this.shape_31.setTransform(-34.3973,-82.6514);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AjNC9IgigBQgqgDhVADQhOgCg0gUQgQgGgLgGQgYgCgTgEQgbgDgdgOQgYgKgPgMQgRgPgHgaQgLglAJgfQAMgmAggOQAOgHATgCIAiACQAgAAAMAFQAQAFAJAPQAJAPgCAPQgCAPgLAMQgLAMgRAEQgJAAgUgEQgTgGgLABQADAOAYAGQA+ANBRgSQAmgFBugjQA3gOAmAAQAWAAAgAKQAUAFAJAIQAOANACAVQACAYgEARQAAASgHARQgKAWgSASQgTAPgZAGQgNAEgSAAIgDAAgACsCPQgWgNgPgTQgMgQgCgSQgLgOgEgYQgCgWAIgPQAGgJATgLQAcgSAQgFQAggLA7ADQB1AKAkABQBYgCA/gaQAagMgCgRQgsATgKADQgQACgOgIQgQgKgGgOQgGgQAFgQQAEgQANgJQAMgJAfgIQAMgCAVgHQARgDAPABQAlAFAUAiQATAbgDApQAAAcgMAUQgJAOgVAQQgcASgYALQgTAJgZAHQgFAGgJAIQgrAfhOAUQhZASgrANQgfAJgCABQgRAEgQAAIgGAAQgWAAgUgJg");
	this.shape_32.setTransform(-34.3876,-82.8202);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjtC9QgmgChQACQhLgCg3gTQgWgGgPgIQgWgCgTgEQgagEgdgNQgYgKgPgMQgSgPgIgZQgLgjAIgfQAKgmAegPQAOgKAVgCIAiABQAeABANAEQARAFAKAOQAJAOgBAQQgBAOgLANQgKAMgRAEQgJABgUgDQgRgFgMAAQAAAMAVAFQA5AOBMgQQApgDBsggQA0gOAugCQAZgBAgAJQAUAFALAJQAOAMADAUQADAXgEASQgBASgGASQgJAVgSASQgSAPgYAHQgQAGgUgBIgCAAIgggBgACsCQQgWgMgQgTQgLgQgDgSQgKgOgFgYQgCgWAJgPQAFgIATgLQAcgTAQgGQAggKA6ACQB1AKAlAAQBXgDBAgaQAZgMgBgRQgtAUgKACQgQADgOgJQgPgJgHgOQgGgQAFgQQAEgQANgKQAMgIAfgJQAMgCAVgGQARgEAOACQAmAEAUAiQATAbgCApQAAAcgMATQgJAOgVARQgcASgYALQgTAJgZAHIgOAOQgqAfhOAVQhaATgqANQgfAJgCABQgRAFgQAAIgGAAQgWAAgUgKg");
	this.shape_33.setTransform(-34.3837,-83.0033);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AjqC+QgjgChLACQhIgDg7gSQgbgGgSgKQgVgCgSgEQgagEgcgMQgYgKgRgNQgSgOgIgYQgMghAHgfQAIgmAdgQQAOgNAWgDIAhABQAeABANAEQATAFAJANQAKANAAAQQgBAPgKAMQgJANgQAFQgKACgTgDQgRgFgNAAQgBAKARAFQA0ANBHgNQArgBBqgeQAzgNA1gFQAcgBAgAIQAUAFAMAJQAPAMAEATQADAWgDASQgBATgHARQgHAVgRASQgSAQgYAIQgQAGgUAAIgDAAIgfgBgACsCSQgWgMgQgTQgLgQgDgSQgLgOgEgYQgDgWAJgPQAGgIASgMQAcgTAQgFQAggLA6ACQB1AJAlAAQBXgDBAgbQAZgMgCgRQgsAUgKADQgQACgOgIQgQgJgGgOQgGgRAFgPQAEgRANgJQALgJAfgIQAMgDAVgGQARgEAOABQAmAEAVAiQASAbgCApQAAAcgLAUQgJAOgVAQQgcATgXALQgUAJgYAHQgFAHgJAIQgqAfhOAVQhaATgqAOQgfAJgCABQgRAFgPAAIgGAAQgXAAgUgJg");
	this.shape_34.setTransform(-34.3826,-83.1655);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AjoC/QgfgChHABQhEgDg/gQQghgHgVgLQgTgDgRgFQgagDgbgMQgYgJgTgNQgSgPgJgWQgMgfAFgfQAHgmAbgSQAOgPAYgEIAhABQAdABAMAEQAVAEAKAMQAKANABAQQAAAPgJANQgKANgPAFQgKADgTgCQgQgFgOgBQgDAIAPAFQAtAOBDgLQAtABBogdQAygMA8gGQAfgDAfAIQAUAFAPAKQAPAKAEATQAFAVgEASQAAAUgHARQgHAVgQARQgRARgXAIQgRAHgVABIgGAAIgcgBgACsCTQgWgMgQgTQgMgPgCgSQgLgOgFgZQgDgWAJgPQAGgIASgLQAbgTARgGQAggLA6ACQB1AIAlAAQBXgEA/gbQAagNgCgRQgsAVgKADQgQADgOgJQgQgJgHgOQgGgQAFgQQAEgRANgJQALgJAfgIQAMgDAVgHQARgEAOACQAlAEAWAiQASAagBAqQAAAbgLAUQgKAOgUARQgcATgXAKQgUAKgYAHQgFAHgJAIQgqAfhOAWQhZATgqAOQgfAKgCABQgRAFgPAAIgHABQgWAAgUgKg");
	this.shape_35.setTransform(-34.3929,-83.3417);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AjlDAQgcgChCABQhBgEhCgOQgngHgZgNQgSgEgPgEQgagEgagLQgZgIgUgOQgSgOgKgVQgMgeAEgeQAFgmAZgUQAPgSAZgEIAhAAQAcABAMAEQAWAEAKAMQALAMACAPQABAQgJANQgJANgPAGQgKAEgTgCQgPgEgOgCQgGAGAMAEQAoAPA+gJQAwAEBmgbQAwgMBCgIQAjgEAfAHQAUAFARAKQAPAKAFASQAFAUgDATQAAAUgHARQgGAUgPASQgRARgXAKQgRAHgVABIgKAAIgYgBgACsCVQgWgMgQgTQgMgPgDgSQgLgOgEgYQgEgWAJgPQAGgJASgLQAbgTARgGQAfgLA7ABQB1AIAlgBQBXgEA/gcQAZgMgCgRQgsAUgKADQgQADgOgIQgQgJgGgOQgHgQAFgQQAEgRANgJQALgJAfgJQAMgCAVgHQARgEAOABQAlAEAWAhQATAbgCApQABAcgMAUQgJAOgUARQgcATgXAKQgTALgZAHQgEAGgKAIQgpAghOAXQhZATgqAPQgfAJgCACQgRAEgPABIgHAAQgWAAgUgJg");
	this.shape_36.setTransform(-34.3945,-83.5133);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AjjDBQgXgBg+gBQg+gEhGgNQgtgHgbgPIgfgIQgagEgZgKQgZgIgVgOQgUgOgJgUQgNgcADgeQADgmAYgVQAOgVAbgFIAhAAQAbACAMADQAYAEAKALQALALADAQQACAPgJANQgIAOgOAGQgLAFgTgBIgdgGQgHAEAIADQAjAPA5gGQAyAGBkgZQAvgLBJgLQAmgFAfAHQAUAFATALQAQAJAEAQQAHAUgDATQAAAVgHARQgGAUgOARQgPASgXAKQgSAJgWABIgKAAIgYgBgACsCXQgWgMgQgTQgMgPgDgSQgLgOgFgYQgDgWAIgPQAGgKASgKQAbgUARgFQAfgMA7ABQB1AHAlgBQBXgFA/gcQAZgMgCgRQgsAVgKADQgQADgOgJQgQgJgHgNQgGgRAEgPQAEgRANgKQALgJAfgJQAMgCAVgHQARgEAOABQAlADAWAiQATAagBAqQABAbgMAUQgJAPgUAQQgbAUgYAKQgTALgYAHQgFAGgJAJQgpAghOAXQhZAUgqAOQgfAKgCACQgRAEgPABIgJAAQgVAAgTgIg");
	this.shape_37.setTransform(-34.3933,-83.6633);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AjgDCIhMgCQg8gEhJgMQgzgHgegRIgdgJQgagEgYgJQgZgIgXgOQgUgOgJgTQgOgaACgdQABgmAWgXQAPgYAcgFQARgCAQABQAaACAMADQAZAEALAKQAMAKADAQQADAQgIANQgHAOgPAHQgLAGgSgBIgdgGQgJACAFADQAeAPAzgEQA1AIBigXQAtgJBQgPQApgFAgAHQATAEAVALQARAKAEAOQAHATgBAUQgBAWgHAQQgFATgNARQgPATgWALQgSAKgXABIgIAAIgagBgACtCYQgXgLgQgTQgMgPgDgSQgLgOgFgYQgDgWAIgPQAGgKASgKQAbgUAQgGQAggMA6ABQB1AGAlgBQBXgFA/gcQAZgNgCgRQgsAVgKADQgQADgOgIQgQgJgHgOQgGgQAEgQQAEgQAMgKQAMgJAegJQAMgDAVgHQARgEAOABQAmADAWAiQATAagBApQABAcgLAUQgJAOgVARQgbAUgXALQgTAKgYAIIgOAOQgpAghOAYQhZAVgqAOQgfAKgBACQgRAFgQAAIgKAAQgUABgSgJg");
	this.shape_38.setTransform(-34.4314,-83.8521);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AjeDDIhDgCQg4gFhNgLQg5gHghgTIgbgJQgagEgXgIQgZgIgYgPQgVgNgKgSQgOgYABgdQgBgmAVgZQAPgaAdgGQARgCAQABQAZACAMADQAbAEALAJQAMAJAEAQQAEAQgIAOQgGANgOAIQgMAHgSAAIgcgHQgMABACACQAZAPAvgBQA3AKBggVICCgZQAsgGAgAGQATADAWAMQASAJAFAOQAIARgBAVQgBAXgHAQQgEASgMASQgPATgWAMQgSAKgXACIgMAAIgXgBgACtCaQgXgLgQgTQgMgQgDgSQgLgNgGgYQgDgWAJgPQAFgKASgLQAbgUAQgFQAfgMA7AAQB1AFAlgBQBXgGA/gcQAYgNgCgRQgrAVgKADQgQADgPgIQgPgIgIgOQgGgRAEgPQAEgRAMgKQAMgJAfgJQAMgDAUgHQASgEAOABQAlADAWAhQATAaAAApQAAAcgLAUQgIAPgVARQgbATgWALQgUALgYAIQgEAGgKAIQgpAhhNAYQhYAVgqAPQggAKgBACQgRAFgQAAIgKABQgUAAgSgIg");
	this.shape_39.setTransform(-34.4498,-84.0269);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AjaDEIg7gDIiGgOQg+gIglgUIgZgKQgZgEgXgIQgZgHgZgPQgVgOgLgQQgOgWgBgdQgCgmATgaQAPgdAfgHQAQgCAQABQAZACAMADQAcADALAIQANAJAFAQQAEAQgGAPQgGANgOAJQgMAIgRAAIgdgHQgNgCgCACQAUAQApABQA6AMBegTICIgbQAvgHAgAGQATADAYANQASAIAGANQAIAQAAAVQgBAYgHAQQgDASgMARQgOAUgVANQgTALgYACIgMAAIgWgBgACuCbQgXgLgQgTQgMgPgEgSQgLgNgFgZQgEgWAIgPQAGgJASgLQAbgUAQgGQAfgMA6AAQB2AFAlgCQBXgGA+gdQAZgOgCgRQgsAWgKADQgQAEgOgJQgQgIgHgOQgHgQAFgQQADgQANgKQALgJAegKIAhgKQARgFAOACQAmACAWAhQATAaAAAqQABAcgLATQgIAPgVARQgbAUgWALQgUALgYAIQgEAGgJAIQgpAhhNAZQhZAWgqAPQgfAKgBACQgRAFgPABIgLAAQgUAAgSgIg");
	this.shape_40.setTransform(-34.5056,-84.1852);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AjXDGIgzgEIiGgNQhEgIgpgWIgVgLQgZgDgWgHQgagHgbgQQgVgNgLgQQgOgUgDgcQgDgnARgbQAPgfAggIQAPgDARABIAkAFQAeADALAIQANAIAGAQQAFAQgFAPQgGANgNAKQgMAJgSAAIgdgHQgPgEgEACQAOAQAlADQA8AOBcgRQAogGBlgWQAygIAgAFQATADAaANQATAIAGAMQAJAPAAAWQgBAYgHAQQgCARgLARQgNAVgVAOQgUALgYADIgPABIgTgBgACuCdQgXgLgQgTQgMgPgDgSQgMgNgFgYQgEgWAIgPQAGgKARgLQAbgUAQgGQAggNA6AAQB2AEAkgBQBXgHA+geQAZgNgCgRQgrAWgKADQgQADgPgIQgQgIgHgOQgHgQAEgQQAEgRAMgJQALgKAfgJQAMgDAUgIQARgEAPABQAlACAXAhQATAaAAApQABAcgKAUQgJAPgUARQgbAUgXALQgTALgYAIQgEAHgKAIQgoAhhNAZQhYAWgqAQQgfALgCABQgQAFgQABIgKABQgVAAgSgIg");
	this.shape_41.setTransform(-34.5755,-84.3591);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AjUDGIgrgEQgvgGhXgGQhKgIgsgYIgTgLQgZgEgVgGQgagGgcgRQgVgNgMgOQgPgSgDgcQgGgnAPgdQAQgiAhgIQAPgDASAAIAiAFQAfAEAMAGQAOAIAGAQQAHAQgGAPQgFAOgNAKQgMAKgRAAQgKgBgTgGQgRgFgHABQAIAQAgAFQA/ARBagPQAmgFBsgYQA1gKAgAFQATADAdAOQASAHAHAKQAKAPAAAWQgBAZgGAQQgCARgKARQgMAVgVAPQgUAMgZACIgQACIgSgCgACvCeQgXgKgRgTQgMgPgDgSQgMgNgGgZQgEgWAJgPQAFgJASgMQAagUAQgGQAggMA6gBQB2ADAkgCQBXgHA/geQAYgOgCgRQgrAXgKADQgQAEgPgJQgQgIgHgNQgHgRAEgPQADgRANgKQALgKAegJQAMgDAVgIQARgFAOACQAlACAXAgQAUAaAAAqQACAbgLAUQgJAPgUASQgaAUgXALQgTALgYAIQgFAHgJAIQgoAhhNAaQhYAXgqAQQgfAKgBACQgRAFgPABIgLABQgUAAgSgIg");
	this.shape_42.setTransform(-34.6398,-84.5298);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AjRDHIgigEQgsgHhbgEQhQgJgugaIgRgLQgZgEgUgFQgagGgegRQgWgNgMgNQgPgQgFgcQgHgnAOgeQAQglAigJQAOgEASABIAiAFQAhADAMAGQAOAHAHAQQAHAQgEAPQgFAOgMALQgNALgRABQgJgBgTgGQgTgIgLABQADAQAbAIQBBATBYgNQAlgEBzgbQA4gKAgAEQATADAeAOQAUAHAGAJQAMANAAAXQgBAagGAPQgCARgIARQgMAWgVAPQgUANgaADIgQACIgSgCgACwCgQgXgLgRgSQgMgPgEgSQgLgOgGgYQgEgWAIgPQAFgJASgNQAagTAQgGQAggNA6gBQB2ACAkgCQBXgIA+geQAZgOgDgRQgKACgPALQgSAKgKADQgQAEgOgIQgQgIgIgOQgHgQAEgQQADgRANgKQALgJAegKQAMgDAVgIQARgFAOABQAlACAXAhQAUAZABAqQABAcgKAUQgJAPgUARQgaAUgXAMQgTALgYAIQgEAHgJAIQgoAihNAaQhYAXgqAQQgfALgBACQgRAFgPABIgMABQgUAAgRgHg");
	this.shape_43.setTransform(-34.7351,-84.6958);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},25).to({state:[{t:this.shape_30}]},5).to({state:[{t:this.shape_29}]},5).to({state:[{t:this.shape_30}]},5).to({state:[{t:this.shape_29}]},6).to({state:[{t:this.shape_30}]},5).to({state:[{t:this.shape_29}]},5).to({state:[{t:this.shape_30}]},5).to({state:[{t:this.shape_30}]},6).to({state:[{t:this.shape_31}]},7).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(31).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},6).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(6).to({_off:true},7).wait(40));

	// hat
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#99FFCC").s().p("AlyAzQAFgmAJgXQAHgTANgSQAMgRASgOQAhgbArgPQAlgMAwgFQAdgDA6gCIDDgGQAggBAQACQAaADAoAMQAoAMAQANQARAOARAlQAUAqAQAoIgSAIIhIgIQgUgDgMAEQgIADgFAHQgFAHABAIQADANAYAKQgfAEgVgJQgNgGgJgKQgJgKgCgNQgEgSAMgXQALgaAUgNQAZgQAXAKIAMAHQAIADAFgBQAIgCADgIQADgIgDgIQgFgMgTgHQgfgKgiAQQghAQgSAfQgRAbAAAfQgBAhATAXIAAANIhsgCIAAgKQAZgBAGgLQAIgOgRgTQgLgNgLABQgGAAgFAGQgEAGAEAFIhhAUQgDhAADgxQABgagIgKQgFgIgLgBQgLgBgEAIQgDAEADAQQAFAZAAApQgBA1ABAMQABATAHAKQgdAAgQABIgVACIABgCQABgIgFgQQgRgygHgwQgCgQgFgIQgDgFgGgDQgHgCgFADQgGADgFAKIgcA7IgMACQgMghgfgQQgQgJgKAHQgDACgCAEIgFAKQgOAlAOAQQgKAKACATIAGAeIADAQQABAJADAGQADAHAIAEQAEACADAAQAEAAADgCQAJgFABgTQACgkgBgQQgBgegGgVQANAeAXAJQANAFAOgEQAPgFAGgLIAFgKQAEgFAEAAIASBFQACAKAEAGIgXAGQgNAEghAPQgdAMgSAFIgOACIAAAAIgiAFQgYACgPAEQABgxAFgxg");
	this.shape_44.setTransform(-31.7625,-187.42);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("ArxFaQgchXAAg2QAAgdAHggQAKgzARgoQASgrA0hOQBAhhAngtQBAhKBFgiQAggQBHgWQBFgWAhgRIAHgEQACAGAFADQAIAFAOgCQALgBAWgFQAWgGALgBIAXgDQANgEATgVIAFgHQAFAGAOAAQAgACA+gOQBAgNAgABQAgABA3ARIBfAbQCCAlBDAdQBqAtBABBQAAAYAIATQAHAQANASIAYAfQAoA0AZA7Qg8gGhNgDQgBgJgEgNQgehZgrhZQgVgrgRgRQgdgdg5gNQgogJgzgDQghgBg8ABIhWABQhCABghACQhOAGg+AZQhFAbgrAvQgOANgIAOIgBACQgLAUgCATQAAAHACATIAAAPIABAZQgCAUgEAaIgMBIQgCANABALIgBAAQgMABgMAJQhXA8hhBLQgnAegSAUQgdAegKAgIgCAGIgEAGIgDAGQgQAfgLAPQgPASgfATQgjAUgQALIgYASQgOAKgLAEQgIAEgJABQgIgngehagAjdluQgSAEgbAKIApgKIAIgCIgCgCIgCAAgAsFGuQgThAgIg6IAFAOIARAuQAEAOAJAtQAEAVAFAQQgKgKgHgYgAjFBNIAJADIgTAFIAKgIgAilgFQAPgEAXgCIAjgFIAAAAIANgCQASgFAdgMQAhgPANgEIAWgGQAHALAJgBQAGAAAEgFQAEgFABgFIAUgCQARgBAcAAQAEAFAEACQAIAFAMgCIATgEIATgGIBEABIBsACIANAAQAPAMAVAGQAbAIAhgDQAcgDAPgKIATgOQAIgGAGgDIANgCIAOAAQAGgBAEgCIAJAAIASA4IjCABQg1AAgTgCIgsgFQgcgEgRAAQgfgBglAHQgnAGiQAgQhvAahHADIAAgpgAEQgCIAbAAIAKABgAjYmjQAAgFgEgEIADgDIACgDQAOgBAJADIAJAEQgQAEgRAGIAAgBgAkGmoIAAABIgPAEIAPgFgAhvnFIAFACIgMAKQgEACgNACIgeAFQAbgNAbgIgAEEnOIgJgDQAPABALACQAZAFAuAUgAg/nRIAAgBQAlgHAlgBIhAAMIgFACIgFgFg");
	this.shape_45.setTransform(-52.8375,-171.9125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("AtQGJIADgFIAEgGIgCANIgFgCgAqvEHQAyglBohFIADgCIASgFIAJABQAJAAARgDIEwg/QBLgQAwgCIAlAAIAYADIAjAEQAWACBCABICNABIAFAEQAIAEALABIAVgBQBZgKBaAOIAPACQAbAFAbAHQB4AeBlBFIAHAKIALAEIAEABQAQAFAJAGQANAKAAANQAAAHgGAFQgFAGgGgBQgFAAgFgDIgJgHQgLgIgNgDIgSgEQgFgCgDgFQhRgShwgFQjagKgjgEIhDgLQgogGgcgBQglgDgxADIhVAIIg4AFIhKgBQh3gChLAJQhqANhQAkQgbAMglAVIgYANQh0AohvA5QAqhCBVhAgAnFCfQgIABgPAGQABACADAAIAGgCQAPgFAQgDIgHAAIgLABgALhETQhigShigOQA1AAAkAFQAfAEAuAMIA5AOIgBAAQgLAAgPgDgAoDlrQgKgDgNABQARgVAdgGQAggHAaAPQgcAJgaAMIgTAFIgIgFg");
	this.shape_46.setTransform(-20.5,-178.8733);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("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");
	this.shape_47.setTransform(-34.5574,-171.5792);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#99FFCC").s().p("AoEBHQAGg1AMggQALgbASgZQARgXAZgUQAtglA9gVQAygRBEgHQAogEBRgDIERgJQAtgBAWACQAkAEA3ARQA5ASAVARQAYAUAZA0QAbA6AXA5IgaAKIhkgKQgcgEgQAFQgMAEgHAKQgGAKABAKQAEATAhAOQgrAGgegNQgRgIgNgOQgNgPgDgSQgFgZAQggQARglAbgSQAjgWAgAOIARAKQALAEAHgCQALgCAFgLQAEgLgEgMQgIgRgagJQgsgPgvAXQgtAWgaArQgXAngBArQgBAvAaAfIAAASIiXgCIAAgPQAkgBAIgPQALgUgXgaQgQgSgPABQgJAAgGAJQgGAIAFAHIiIAcQgDhaADhEQACglgLgOQgHgLgPgCQgPgBgHALQgDAHADAWQAIAjgBA4QgBBLABAQQACAbAKAOQgoAAgXACIgcADIAAgDQABgMgHgWQgXhGgJhDQgDgWgIgLQgEgIgJgDQgJgEgHAEQgIAEgHAPIgnBSIgRADQgRgugrgWQgWgNgPAKQgDADgEAFIgGAPQgUAzAUAWQgPAPAEAZIAIArIAEAWQACANADAIQAFAKAKAFQAGADAGAAQAFAAAEgDQANgHABgbQACgygBgWQgBgpgJgeQATAqAgAMQASAHATgFQAVgHAJgQQAEgLADgDQAEgHAHAAIAYBiQADANAGAJIggAIQgSAGgvAUQgoARgZAGIgTAEIgwAGQghAEgVAFQABhFAIhEg");
	this.shape_48.setTransform(-35.375,-243.0667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AwaHiQgoh5AAhMQAAgnAKguQANhGAYg4QAag9BJhtQBZiHA2g+QBZhoBhgwQAsgWBjgfQBggfAugXIAKgFQADAIAHAEQAMAIASgEQAQAAAegJQAfgHAPgCQAfgDABgBQATgFAageIAIgKQAHAJATAAQAtACBXgTQBYgTAtACQAtACBMAXICFAlQC2A1BdAoQCTA/BbBbQAAAhALAbQAJAWASAZIAiArQA3BJAkBTQhVgJhrgEQgBgNgGgTQgqh7g7h8Qgdg9gZgXQgogphQgTQg3gMhIgDQgugChTABIh4ABQhdACgtAEQhtAIhXAiQhgAlg8BCIgBACIgCABIgDADQgQAPgIARIgCAEIgBAAQgQAbgBAaQgBALAEAbIAAAUIAAAjQgCAbgFAlIgRBkQgEATACAOIgBAAQgRADgQAMQh6BUiIBpQg2ApgZAbQgoAqgOAtIgDAKIgFAIIgEAIQgXAsgQAUQgUAagrAaQgxAbgXAQIghAYQgTAPgQAFQgMAGgLACQgMg2gph/gAk1n/QgaAGgkAOQAbgIAegIIAKgBIgCgDIgDAAgAw3JXQgahZgMhSIAIAVQASAwAFAPQAGAUAMBAQAGAdAGAWQgNgOgKgigAkTBrQAFADAHACIgaAHQAJgGAFgGgAjngHQAVgGAhgDIAwgHIATgEQAZgGAogQQAugVASgGIAggIQAJAPANgBQAIgBAGgHQAFgGACgHIAcgDQAXgCAoAAQAEAHAHAEQALAFAQgCQAHAAAUgFIAagIIBfABICXACIARABQAVAQAeAJQAmALAtgFQAogEAVgOIAagTQAKgJAKgEIARgCIAVgBQAIgBAFgBIANgCIAZBOIkOACQhLAAgagDIg+gHQgmgFgYgBQgrAAg0AIQg3AJjIAtQicAlhjAEQgBgdABgcgAF8gDQAUgBARAAIAOABgAktpJQgBgIgFgFIADgFIAEgEQASgBAOAEIAMAGQgXAGgWAJIAAgCgAlupQIAAABIgVAGIAVgHgAibp5IAGAEQgKAKgGADQgFAEgTACQgVACgUAFQAlgSAmgMgAFrqFIgNgEQAVABAQADQAhAHBCAdgAhYqJIgBgBQA0gLA1gBIhaARIgIADIgGgHg");
	this.shape_49.setTransform(-64.775,-221.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009900").s().p("AyfIlIAEgIIAFgIQgCAJAAAJIgHgCgAu+FvQBFg0CRhgIAEgDIAagHIAMABQAMABAXgEIGqhYQBngXBEgCIAzAAIAiADQAmAFALABQAeADBcABIDFABIAHAGQALAGARABIAcgCQB9gNB9ATIAWAEQAlAGAlAKQCoAqCMBgQAGAHAEAIIAQAFIAEABQAYAHALAIQATAOAAASQgBAKgHAHQgGAIgKgBQgHAAgHgEIgMgKQgPgLgSgEQgUgDgFgCQgIgEgEgGQhxgaidgHQkvgNgxgGIhdgPQg5gJglgBQg1gEhEAEIh4ALIhMAHIhpgCQilgChqANQiUARhuAzQgmAQg0AdIghATQihA4ibBPQA6hcB3hZgAp4DdQgLADgWAIQABACAGAAIAHgCQAVgIAXgEIgJAAIgQABgAQEGAQiJgZiIgTQBJgBAzAHQArAGBAAQIBPATQgQAAgVgDgArPn7QgOgEgSACQAYgeApgJQAsgJAkAVQgmANglARIgaAGIgMgHg");
	this.shape_50.setTransform(-19.675,-231.135);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("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");
	this.shape_51.setTransform(-39.3009,-220.9344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},74).wait(40));

	// eyebrows
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("ApuBOQgMgGgDgRQgDgQAKgLQAGgHAQgGQA/gZBEgLQAhgGBDgGIBxgKQBVgJAyABQAfABAOAHQAQAJAJASQAIARgCATQgCAZgPAJQgKAGgagCQgUgBgoABQgcABg8gIQg6gHgfABQgdABgzAJQg3AJgZACQgqACgNADIggAKIgOABQgKAAgIgEgACRAZQgSgNgBgaQgBgVALgLQAHgHAUgIQAggKANgBQANgCAaAAIAoAAIAoABIAoADQAVABAhgEIAwgEQAsgEAXAAQAlAAAdAKQARAFAKAKQAMANgDAPQgFAQgTAFQgHACgJABIgRAAQgxgBhXAHIhWAJQhbAIg0ALQgZAFgMAAQgVAAgNgKg");
	this.shape_52.setTransform(-36.8378,-135.1516);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("At1BvQgSgJgEgYQgDgXANgPQAJgKAXgJQBagkBggQQAvgJBfgIIChgOQB5gMBHAAQAtACATAKQAXANAMAaQAMAYgCAbQgDAkgWANQgPAIglgDQgbgCg5ADQgoAAhWgKQhTgKgrABQgpABhJANQhPANgiACQg8AEgTAEIguAOQgKACgIAAQgPAAgMgGgADPAkQgagTgBgmQgCgdAPgQQAKgKAdgLQAugOARgDQATgCAmAAIA5AAQAlAAATABIA5AFQAeABAvgFIBEgHQA/gFAhAAQA0AAApAOQAZAIANANQASATgFAVQgGAXgbAIQgKACgOABIgXAAQhGgBh8ALIh7AMQiAAMhLAPQgkAHgQAAQgeAAgSgNg");
	this.shape_53.setTransform(-40.9317,-170.3762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52}]}).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},74).wait(40));

	// Glasses_frames
	this.instance_2 = new lib.glasses_frames("synched",0);
	this.instance_2.setTransform(-30.5,-114.7,1,1,0,0,0,67.9,-15.2);

	this.instance_3 = new lib.glasses_lens("synched",0);
	this.instance_3.setTransform(-64.85,-113.5,1,1,0,0,0,30.2,-14);
	this.instance_3.alpha = 0.5313;

	this.instance_4 = new lib.glasses_lens("synched",0);
	this.instance_4.setTransform(7.1,-120.15,1,1,0,0,0,30.2,-14);
	this.instance_4.alpha = 0.5313;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:30.2,regY:-14,scaleX:1,scaleY:1,x:7.1,y:-120.15}},{t:this.instance_3,p:{regX:30.2,regY:-14,scaleX:1,scaleY:1,x:-64.85,y:-113.5}},{t:this.instance_2,p:{regX:67.9,regY:-15.2,scaleX:1,scaleY:1,x:-30.5,y:-114.7}}]}).to({state:[{t:this.instance_4,p:{regX:30.2,regY:-14,scaleX:1,scaleY:1,x:7.1,y:-120.15}},{t:this.instance_3,p:{regX:30.2,regY:-14,scaleX:1,scaleY:1,x:-64.85,y:-113.5}},{t:this.instance_2,p:{regX:67.9,regY:-15.2,scaleX:1,scaleY:1,x:-30.5,y:-114.7}}]},1).to({state:[{t:this.instance_4,p:{regX:29.4,regY:-14.2,scaleX:1.4214,scaleY:1.4214,x:21.55,y:-148.1}},{t:this.instance_3,p:{regX:29.5,regY:-14.2,scaleX:1.4214,scaleY:1.4214,x:-80.55,y:-138.65}},{t:this.instance_2,p:{regX:67.1,regY:-15.6,scaleX:1.4214,scaleY:1.4214,x:-31.95,y:-140.6}}]},74).wait(40));

	// glasses_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AonB9QgggRgTgXQgXgbgPg8QgHgaAEgOQAEgTATgPQATgPAcgHQASgFAhgEQE/gmErACQBVABAqgCQAkgCBIgHQBlgGBiANQAkAFAVAHQAVAHAPAMQARAOAEASQAHAbgWAmQgoBAhMAlQhBAghWAGQgyAEgpgFQgsgFgrgQQgsgRgTgWQgHgHgOgYQgNgUgKgJQgWgTgkgCQgXgBgqAHQgWAEgKAGQgIAEgTATQgbAegjAYIglAXQgkAUgNAFQgbAMgyAKQg+AOgkAAIgEAAQg/AAg4gfg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AonB9QgggRgTgXQgXgbgPg8QgHgaAEgOQAEgTATgPQATgPAcgHQASgFAhgEQE/gmErACQBVABAqgCQAkgCBIgHQBlgGBiANQAkAFAVAHQAVAHAPAMQARAOAEASQAHAbgWAmQgoBAhMAlQhBAghWAGQgyAEgpgFQgsgFgrgQQgsgRgTgWQgHgHgOgYQgNgUgKgJQgWgTgkgCQgXgBgqAHQgWAEgKAGQgIAEgTATQgbAegjAYIglAXQgkAUgNAFQgbAMgyAKQg+AOgkAAIgEAAQg/AAg4gfg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AsQmdQgugZgbggQgggmgWhXQgKgmAGgTQAFgcAcgVQAagUAogLQAagHAvgFQHFg2GrACQB5ABA8gDQAzgCBmgKQCPgICLASQA0AHAeAKQAdAKAWARQAYAUAGAaQAKAmggA2Qg5BchsA1QhcAth7AJQhGAFg6gHQhAgHg8gWQg/gYgbgfQgKgLgUghQgSgegPgMQgegcg0gDQghgCg8ALQggAFgOAIQgKAGgbAdQgnArgyAiIg1AgQgyAcgUAIQglAQhIAPQhYAUgzAAIgGAAQhZAAhQgsg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-29.1736,y:-114.1708}).wait(1).to({graphics:mask_1_graphics_1,x:-29.1736,y:-114.1708}).wait(74).to({graphics:mask_1_graphics_75,x:-30.0432,y:-81.342}).wait(40));

	// glasses_animation
	this.instance_5 = new lib.stick_birds_flying();
	this.instance_5.setTransform(6.6,-121.1,0.0399,0.0399,-1.3817,0,0,54.3,-15);

	this.instance_6 = new lib.stick_birds_flying();
	this.instance_6.setTransform(-62,-116.65,0.0399,0.0399,-6.6791,0,0,52.1,-14.1);

	this.instance_7 = new lib.beach_reflection();
	this.instance_7.setTransform(3.55,-118.15,0.0644,0.0673,-0.7409,0,0,12.1,-28.9);
	this.instance_7.alpha = 0.6016;

	this.instance_8 = new lib.beach_reflection();
	this.instance_8.setTransform(-64.5,-112.9,0.0568,0.0568,-5.9542,0,0,10.9,-28.1);
	this.instance_8.alpha = 0.6016;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgDAIIABgBIAGgOIAAABIgBAOg");
	this.shape_54.setTransform(-125.859,-89.075);

	this.instance_9 = new lib.beach_background();
	this.instance_9.setTransform(3.55,-118.15,0.0644,0.0673,-0.7409,0,0,12.1,-28.9);
	this.instance_9.alpha = 0.6016;

	this.instance_10 = new lib.beach_background();
	this.instance_10.setTransform(-64.5,-112.9,0.0568,0.0568,-5.9542,0,0,10.9,-28.1);
	this.instance_10.alpha = 0.6016;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("ACSBAIglgNIgNgHIgHgIIgMABQAPgBATABQATABAPgBQALAVAKAMQgHgBgNgFgAiXgRIAKgLIgJAKIgPARgAg7gTIAGgQIAIgTIAHgPIAAABQABAdgNAPIgIAHIgFACIAEgEg");
	this.shape_55.setTransform(-121.575,-82.85);

	this.instance_11 = new lib.sky_reflection();
	this.instance_11.setTransform(19.75,-144.05,0.0429,0.0429,0.4887,0,0,909.1,-451.4);

	this.instance_12 = new lib.sky_reflection();
	this.instance_12.setTransform(-80.75,-140,0.043,0.043,-6.4458,0,0,909.8,-451.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AACgCIAKgKIgJAKIgOAPg");
	this.shape_56.setTransform(-136.9625,-84.4125);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.shape_54,this.instance_9,this.instance_10,this.shape_55,this.instance_11,this.instance_12,this.shape_56];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.shape_55},{t:this.instance_10},{t:this.instance_9},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.shape_56},{t:this.instance_12},{t:this.instance_11}]},74).to({state:[{t:this.shape_56},{t:this.instance_12},{t:this.instance_11}]},39).wait(1));

	// glasses_and_nose
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAkExQgKgBgQgJQgRgMgIgCQgLgCgPADIgaAGQgoAJgngPQgngPgFgdQgCgQAJgRQAHgMAPgRIAngsQAagdAVgBIgBgXQgBgMgIgWQgEgPAAgeQgPAPgMAKQglAhgmANIhLAZQgdgCgVAEQgtAHgwgNQgwgNgSgSIgbgcQgJgKgQgPQgKgJgSgWQgRgTgQgHQgUgJgcAEQgSADggAMQgWAIgOgBIgLAIQgLAHggAHQgsAKgQgSIgmgrQgWgZAzgQQA0gQAdgFIBKgNQArgIAegKQAUgHAjgQQAmgRAQgGQBUgfBqAAIDGAAIBZAAQAFgFAGgCQAFgCAJABIAOADIAAAAIABAAIDfgeIAKgBQBzgvB7ANQAZACAkAHIA+ALQBbAOBXAAQAlAAAPAEQAdAJAIAYQADAHgBALIAFAIQAFAKgBANQgBAMgIAJQgIAIgPAHIgaAKQgVALgWAaQgjArgVATQgTASgeARIg1AbQg6AdggAHQgSAEgYABIgqABQglAAgSgEQgbgEgfgQQgUgKgigVQgegSgQgLQgPgLgMgLIgDA/QgBAxAVAaQAFAHAPANQAPANAGAIQAMARAAAXQABAXgMATQgMASgUALQgUAKgWABIgtgEQgbgDgQAHQgHAEgaAWQgTAQgPAAIgCAAgAALDOIAIALQAFAGAFABQAJACAKgIIARgPQATgQA1ADQA0AEATgQQgUgHgQgTQgOgRgHgXQgGgTgCgZIAAguIAChKQgRgVgngBQgmgBgTADQgTADgoAZQAAAVgBARIAAACIAFAdQAKApAAASQABAdgNAPQgHAJgMACQAAAGgCAGQgGARgaAZIgfAdIAfgBQAKgaAfgFIAMgBQAXAAANARg");
	this.shape_57.setTransform(-38.5811,-106.2271);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AA0GxQgPAAgXgOQgZgQgLgDQgQgEgUAFIglAJQg5ANg4gWQg3gVgHgqQgEgWAOgZQAKgRAVgYIA4g+QAkgpAegCIgBghQgCgQgMggQgFgWAAgrQgVAWgRAPQg1Avg2ASIhqAjQgqgDgdAGQhBALhEgTQhEgSgagaQgbgagMgOQgMgOgXgWQgOgNgZggQgZgbgWgKQgdgMgoAGQgZAEguARQgfAMgVgCQgGAGgJAFQgQAKgtALQg/ANgWgZIg2g+QgggjBJgXQBJgXAqgHIBqgSQA9gLAqgPQAdgKAxgWQA2gZAYgIQB2gsCYAAQCXgBCCABIB/AAQAGgIAJgCQAIgDAMACIAUADIACAAIE9gpIAPgCQCjhDCuASQAlAEAzAJIBXAPQCDAVB7gBQA0AAAWAHQApANAMAhQADALgBAPQAEAFADAGQAIAPgCASQgCARgLANQgLAMgVAJIglAPQgeAPggAlQgyA+gdAaQgcAagpAYQgXAMg2AbQhRAqgvAJQgZAGgiACIg8AAQg0AAgagFQgmgGgsgWQgdgOgwgeQgrgagWgQQgWgQgRgQIgFBbQgBBFAeAlQAIAKAVATQAVASAIALQASAZAAAhQABAggSAbQgQAZgcAQQgdAPggABIg/gGQgmgEgXAKQgLAFglAgQgaAWgVAAIgDAAgAAQElIALAPQAIAJAHACQANADAOgMQAIgGAQgQQAbgWBLAFQBKAFAbgXQgdgKgWgbQgVgYgJggQgJgbgCglIAAhBIADhqQgZgdg3gBQg3gCgbAEQgbAEg4AkQAAAegCAYIAAACQACATAFAYQAOA6ABAaQABAogTAWQgKAMgRAEQAAAJgDAIQgIAYglAjIgtAqIAsgCQAPglAsgGIASgCQAgAAATAYg");
	this.shape_58.setTransform(-43.4478,-129.2362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57}]}).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},74).wait(40));

	// head
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A0715E").s().p("AAyJ8QgsgChXgJQhigKgvgNQgzgNhggrQg5gagdgRQgugdg0g0QhqhqgVhkQgGgdgChDIgEjPQgBgTgBgJIgCgHQAEgFABgGQAFgTgYgWQgqglg2gGQgPgCgTAAIgHAAQgaAAgNAKIgBABIAAgDQAVgGATgUQAMgOAQgbIAIgNIANgHQAagMAMgIQAVgMAHgRQADgIADgQQADgHAGgJQAQAEAWgDQAVgDAMgEQARgGAJgLQAJgLAIgZQAJgSAdgZQB9hnCsggQCmgeCjAtIBRAXQAwAMAjABQAPAAAogEQAjgDAUACQAhACAqARIBIAeQBMAfBLAJIA7AGQAWADARAEQgEAFgCAJQgCAJADASIARBjIAFAlQABATgEAPQgEACgEADQgHAHgCAKQgCAKADAKQACAIAFALIAJASQAIAUADAiQATCvg0CrQgVBIgdAuQgYAlg8BAIgtAvQgbAYgXARQgkAYhJAfIiMA9IgRgEQgMgDgeADQgmAEgsAAIgygBgAryC6QgTgRgJgmIgGgeQgEgUgDgLQgGgVgUgpQgghNAJhVQAogEAhAYIACABQgCAPAFAXQARBagDBYIgCA8QgBAYACATIgBAAgAMiCKQAJgyAEgyIACgnQADhGgGhIQgEglgGgbQAFgFAGgNQAFgGANgIQAIgGAFgEIAIgCQAPgDAIAEQAIAEAEAJQAEAIgBAKQAAAMgMAWQgVAqgJAZQgWA6gBA8QgBATACAUQACAdgBALQgCAXgXAlIgCgBg");
	this.shape_59.setTransform(-37.465,-90.0678);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("ACoLJIgEgDIgMABQg8AGhMgEQgpgChegJQhtgLg1gOQg7gPhigsQgsgUgZgMQglgTgbgUQgxgjg4hBQgxg7gcgyQgTgjgLgjQgSAHgUgMQgNgHgRgVIgKgRIgBABQgOAPgUgDQgJgCgIgGQgHgGgDgJQgDgIABgOQABgRgBgFIgJgaQgHgSgIgmQgFgWAHgLQAFgIALgCIAHgBIgGgLIgCgFQgJAFgKAAQgOAAgIgJQgIgIgBgNQgBgIABgRQACgqgKg/IgQhpQgEgeANgMQAFgEAKgDQAKgEAEgDQAHgFAFgKIAHgSQAJgYAQgCQAGAAAIADIAOAFIAOABIADAAIATgKQAAgJAGgNQAEgKAGgGQAIgIAJAAIABAAIAFgJQARgcAPgHQAKgGANABQAGAAAEADQB5hnBkg4QCIhLCBgIIBNgCQAvAAAdgEQAQgDAqgJQAlgJAWgCQAmgEBAAKQBRANAWABQAXACAlgCIA8gBQA6AABIAMQAsAHBVATIESA+QAoAJACAVQADARgUAKQgRAJgXAAQAPAQAVAJQAUAIAWgCQANAAAZgEQAWgCANAJQAPALgBAXQgBAWgPAPQgNAMgVAIQgOAFgaAFQARAGgCAWQgCAVgRAIQgdAMgpgaQgPgKg2guQgSgRgRgLQACAQABATQABAfgEAsIgFA4QAKgIAKgEQACgHAGgEQAIgHAPgCIAagBIAcAAQAQABALAFQATAKAMAaQAWAwgQAvQgEALgHAPIgNAYQgPAggNA2QgKApADAYIAFAWQADAOAAAIQABARgNAgQgLAfgIARQgSAngWAIQgNAEgPgDIgKgEIgHAXQgOA2gUAqQgWAugpAxQgaAfg1A1QgzAzgaATQggAWhAAcIieBHQgaAMgPAAQgMAAgJgGgAC1KDQAHACAGAEIADgCICNg8QBJgfAjgZQAYgQAagZIAuguQA8hAAXglQAdgvAWhHQAzisgTivQgCghgJgUIgIgTQgFgLgCgHQgDgKACgKQABgLAHgGQAEgEAFgCQADgPgBgTIgFglIgRhiQgDgSACgJQACgJAFgFQgRgFgWgDIg8gGQhKgIhMgfIhIgfQgqgQghgDQgVgBgiADQgoADgQAAQgjAAgvgMIhSgYQiigsimAeQisAfh+BoQgcAYgJASQgJAagIAKQgJAMgSAGQgLAEgWADQgVADgRgFQgGAKgCAHQgEAQgDAIQgGAQgVANQgMAHgaAMIgOAHIgHAOQgQAbgNAOQgSAUgWAFIABADIABgBQAMgKAbAAIAGAAQATAAAQACQA2AGApAlQAYAWgEATQgBAGgEAFIABAIQACAJAAASIAFDQQACBDAGAcQAUBkBrBrQA0A0AtAcQAeASA4AZQBgArAzAOQAvAMBiAKQBYAJAsACQBJAEA7gHIAZgBQALAAAGABgAt4iPQgJBVAhBMQATApAHAWQADAKADAUIAGAfQAJAlAUASIAAAAQgBgTABgYIACg9QAChYgRhZQgEgXACgPIgCgCQgdgUghAAIgMABgAMrjwIgIABQgFAFgJAFQgNAIgEAGQgGANgGAGQAHAaADAlQAHBIgDBGIgDAnQgEAzgJAyIADABQAWglADgYQABgKgCgdQgCgUABgUQABg7AVg6QAJgZAWgrQALgWABgMQABgJgEgJQgEgJgIgDQgFgDgHAAIgLACg");
	this.shape_60.setTransform(-33.1391,-91.1204);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A0715E").s().p("ABHOIQg/gDh8gMQiMgPhCgRQhJgUiJg9QhQgkgqgZQhBgohKhKQiXiYgdiOQgJgpgDhfIgGknQgBgbgCgNIgBgJQAFgIABgJQAHgbgjgfQg7g1hMgIQgWgDgbAAIgKAAQglAAgSAOIgCACIAAgFQAegIAbgcQARgUAXgmIALgUIATgJQAlgSARgKQAegSAJgXQAEgMAFgXQAEgKAJgNQAXAGAfgEQAegEAQgGQAZgIANgRQAMgPAMgkQANgaApgiQCyiUD1gsQDsgrDnA/IB0AiQBEARAyAAQAWAAA5gFQAxgEAdACQAvAEA8AXIBmAsQBsAsBqAMIBVAIQAfAFAZAHQgHAGgDANQgDANAEAZIAYCMQAGAjACASQABAbgEAVQgHADgGAFQgKAKgCAOQgDAPAEAOQADALAHAPIAMAbQAMAcAEAwQAbD5hJD0QgfBmgpBCQgiA0hVBbQgrAtgWAVQglAjgiAYQgyAjhoAsIjIBWIgXgGIAAAAQgSgEgqAEQg2AGg+AAQgiAAgmgCgAwxEJQgbgZgNg1QgEgNgFgfQgFgcgEgPQgJgfgcg6QguhtANh5QA4gGAwAiIAEADQgEAVAGAgQAZCAgEB9IgDBWQAAAiABAcgAR0DFQANhHAGhHIADg4QAEhlgJhmQgFg1gJglQAIgIAIgTQAHgIASgMQAMgHAHgHIAMgCQAUgEAMAFQAMAFAGANQAFAMgBAOQgBARgQAfQgfA9gNAjQgeBTgCBVQAAAcACAcQADApgCAPQgDAiggA0IgEgBg");
	this.shape_61.setTransform(-41.8339,-106.2538);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ADvP2IgGgFIgQACQhWAIhsgGQg7gCiFgNQibgQhMgTQhUgViMhAQg+gbgjgSQg1gbgngcQhFgyhPhdQhHhTgnhHQgcgzgPgwQgZAIgdgQQgTgKgXgeQgJgMgGgMIgCABQgTAWgcgFQgOgCgKgJQgLgJgEgNQgEgLABgUQABgYgBgHQgBgFgLggQgKgagMg2QgHgfAJgPQAIgMAPgDIAKgBIgIgQIgDgHQgMAHgPAAQgTAAgNgMQgKgMgCgTQgCgLACgZQADg7gOhaIgXiVIgCgTQAAgcAPgNQAGgFAPgFQAPgGAFgEQAKgHAHgPIAKgZQAMgiAYgCQAIgBAMAEIAUAHQAFACAPAAIADAAQARgHAKgHQABgNAIgTQAGgOAIgJQALgLANABIACAAIAHgOQAZgnAUgLQAPgIASABQAIABAHAEQCriTCPhQQDBhqC3gMQAVgBBZgBQBDAAAqgGQAWgEA8gNQA1gNAegDIAfgBQAxAABCAKQB0ATAfABQAhACA0gCIBVgCQBTABBnARQA9AKB5AbIGHBXQA4ANAEAeQADAZgcAOQgYAMghABQAVAXAeAMQAdALAfgCQASgBAkgFQAggDASANQAUAOAAAcIgBAHQgBAegVAWQgSARgfAMQgTAGglAHQAYAJgDAfQgDAfgYAKQgpASg6glQgWgPhMhBQgbgXgYgQQAEAWABAbQABAsgFA/IgHBQQAOgMAOgGQADgJAIgHQAMgKAVgCQAIgBAdAAQANABAagBQAYABAPAHQAcAOAQAlQAgBEgXBEQgFAPgLAVIgSAjQgVAtgTBMQgPA7AFAiIAHAgQAEATABANQAAAXgRAuQgQAsgLAZQgaA2ggAMQgSAGgVgFIgPgGIgJAiQgUBMgdA8QggBBg6BGQglAshLBMQhIBIgmAbQgtAghbAoIjgBlQglARgWAAQgRAAgNgJgAEBOTIABAAQAKADAIAFIAFgDIDHhWQBogsAzgjQAhgXAmgjQAWgVArgtQBVhbAhg1QAqhCAehmQBJj0gbj5QgDgwgMgcIgMgaQgHgQgDgLQgFgOADgOQACgPAKgJQAGgFAHgDQAEgVgBgbQgBgSgGgjIgYiMQgEgaACgNQADgMAHgHQgZgHgfgEIhUgJQhqgMhtgsIhmgrQg8gYgvgDQgdgCgxAEQg5AFgWAAQgygBhDgRIh0ghQjohAjsArQj0AtizCTQgoAjgNAaQgMAkgMAPQgNAQgZAJQgQAFgfAFQgfAEgXgHQgJAOgDAKQgFAXgEALQgKAXgdASQgSALgkARIgUAKIgKATQgXAngSATQgaAdgfAIIABAEIABgBQASgPAmAAIAJAAQAbAAAWADQBNAJA7A0QAiAggGAbQgCAJgFAHIACAKQACANABAaIAGEoQADBfAIAoQAdCPCYCXQBKBKBBApQAqAZBQAkQCIA9BJATQBDASCLAOQB9ANA/ADQBoAFBTgJQAVgCAPAAQAPAAAJACgAzvjMQgNB4AuBuQAcA6AJAfQAFAOAFAdQAFAeADANQANA2AcAZIAAAAQgBgbABgjIADhWQADh+gYh/QgGggADgVIgDgDQgpgcgvAAIgRABgASBlWIgLACQgHAGgMAIQgTALgGAJQgJASgIAJQAKAlAFA0QAJBngEBkIgEA4QgGBIgMBHIADABQAgg1AEghQABgPgDgqQgCgcABgcQABhVAfhSQANgkAeg8QARggAAgRQACgNgGgMQgGgNgLgFQgHgDgJAAQgHAAgKACg");
	this.shape_62.setTransform(-35.6875,-107.7375);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A0715E").s().p("ABHOIQhAgDh8gNQiLgOhCgSQhJgTiIg9QhQgkgqgZQhBgphKhKQiXiXgdiOQgJgpgDhfIgGknQgBgbgCgNIgCgJQAFgIACgJQAGgbgigfQg7g1hNgIQgWgDgaAAIgKAAQglAAgSAOQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAegIAagcQASgUAXgmQATgYALgFQAkgSASgKQAdgSAKgXQAEgMAEgXQAEgKAJgNQAXAGAfgEQAegEAQgGQAZgIANgRQAMgPAMgkQANgaApgiQCyiUD0gsQDsgsDnBAIB0AiQBEARAyAAQAWAAA5gFQAxgEAdACQAvAEA8AXIBmAsQBsAsBqAMIBVAIQAfAFAZAHQgHAHgDAMQgDANAEAaIAYCMQAGAjACASQABAbgEAVQgHADgGAFQgKAJgCAPQgDAPAEAOQADALAHAPIAMAbQAMAcAEAwQAaD5hJD0QgeBmgqBCQghA0hVBbQgrAtgWAVQgmAjghAXQgzAjhoAsIjHBWIgXgFQgSgFgqAEQg1AGg+AAQgjAAglgCgAxYC7QgEgNgFgfQgFgcgEgPQgJgfgcg6QguhtANh5QA4gGAwAiQAAAYAGAgQAZCAgEB9IgDBWQAAAiABAcQgcgagNg1gARzDGQAMhHAGhHIAEg4QAEhlgJhmQgFg1gJglQAIgIAIgTQAHgIASgMQAYgPAHgBQAUgEAMAFQAMAFAGANQAFAMgBAOQgBARgQAfQgfA9gNAjQgfBTgBBUQgBAdACAcQADApgBAPQgEAiggA0IgDgBg");
	this.shape_63.setTransform(-41.8339,-106.2158);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ADuP3IgGgFIgRACQhVAHhrgGQg8gCiFgNQibgQhLgTQhUgViMhAQg+gbgjgSQg0gbgngcQhGgyhOhdQhHhTgnhHQgcgzgPgwQgZAJgdgQQgSgKgYgfQgJgLgGgMIgCAAQgTAWgcgFQgOgCgKgIQgLgKgEgMQgDgMAAgUQACgXgCgIQAAgFgMggQgKgZgMg3QgGgfAJgPQAHgMAPgDIAKAAIgIgQIgDgHQgMAGgPAAQgTABgMgNQgLgLgCgTQgBgMABgYQADg7gOhaIgYiVIgBgTQAAgdAPgMQAGgGAOgFQAPgFAGgFQAKgHAGgOIAKgaQANgiAXgCQAIgBAMAFIAUAHQAFABAPAAIADABQASgIAJgGQABgNAIgTQAHgPAHgIQAMgMANABIABAAIAIgNQAXgnAVgLQAPgJARACQAJABAHADQCqiSCQhQQDAhrC3gMQAUgBBagBQBDAAAqgGQAWgEA8gNQA0gNAfgDQAOgBARAAQAwAABCAKQB1ATAfABQAhACA0gCIBVgCQBTABBnARQA9AKB6AbIGGBYQA4ANAEAeQADAYgcAPQgXAMghAAQAUAXAeAMQAeAMAfgCQARgBAlgGQAfgDASAOQAUAOAAAcIAAAHQgCAegVAWQgSARgeAMQgUAGglAHQAYAJgDAfQgEAfgXAKQgpASg6glQgXgPhLhBQgbgXgYgQQAEAWABAbQABAsgGA/IgHBQQAPgMAOgGQADgJAIgHQAMgKAUgCQAIgBAeAAQANABAagBQAXABAPAHQAcAOAQAlQAgBFgXBDQgEAQgMAUIgRAjQgWAtgSBNQgPA7AEAiIAHAgQAEATABAMQABAYgSAuQgQArgLAZQgaA3ggALQgSAHgVgFIgPgGIgJAhQgUBMgdA8QggBCg6BFQglAshLBMQhIBIglAbQguAghbAnIjfBlQglARgXAAQgQAAgNgIgAzukpQAbAAAVADQBNAIA7A1QAjAfgHAbQgCAJgEAIIABAJQACANABAbIAGEnQADBfAJApQAdCOCXCXQBLBKBAApQAqAZBQAkQCIA9BJATQBCASCLAOQB+ANA+ADQBoAFBTgJQAqgEATAFIAWAFIDIhWQBngsAzgjQAigXAlgjQAWgVArgtQBVhbAhg0QAqhCAehmQBJj0gaj5QgEgwgMgcIgMgbQgGgPgDgLQgFgOADgPQACgPAKgJQAGgFAHgDQAEgVgBgbQgBgSgHgjIgYiMQgDgaACgNQADgMAHgHQgZgHgfgFIhUgIQhrgMhsgsIhmgsQg8gXgvgEQgdgCgxAEQg5AFgWAAQgyAAhEgRIh0giQjnhAjsAsQj0AsiyCUQgpAigNAaQgLAkgMAPQgOARgYAIQgRAGgeAEQgfAEgXgGQgJANgEAKQgEAXgEAMQgKAXgdASQgRAKglASQgLAFgTAYQgXAmgRAUQgbAcgeAIQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQASgOAlAAIAKAAgAzujMQgNB5AuBtQAcA6AJAfQAFAPAFAcQAEAfAEANQANA1AcAaQgBgcAAgiIAEhWQADh+gZh/QgGggAAgYQgogdgvAAIgRABgASAlVQgHABgXAPQgTAMgHAIQgIATgIAIQAKAlAEA1QAJBmgEBkIgEA5QgGBHgMBHIADABQAhg0ADgiQABgPgDgpQgBgcAAgdQABhUAghTQANgjAeg9QAQgfABgRQACgOgGgMQgGgNgMgFQgGgDgJAAQgIAAgJACg");
	this.shape_64.setTransform(-35.65,-107.7062);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A0715E").s().p("AE9OFQgSgFgqAEQhTAJhogFQg/gDh8gNQiLgPhCgRQhJgUiIg9QhPgkgqgZQhBgohKhKQiXiXgdiOQgJgpgDhfIgHknQgBgagCgNIgBgKQAFgHABgJQAHgbgjggQg7g1hMgIQgWgDgbAAIgJAAQgmAAgRAOQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAegIAagcQASgUAWgmQATgYALgFQAlgSARgKQAdgSAKgXQAEgMAFgXQADgKAJgNQAXAGAfgEQAegEAQgGQAZgIANgRQAMgPAMgkQANgaAogiQCyiUD0gtQDsgrDoBAIB0AiQBDARAyAAQAWAAA5gFQAxgEAdACQAvAEA8AXIBmAsQBtAsBqAMIBUAJQAfAEAZAHQgHAHgDAMQgCANAEAaIAXCMQAGAkACASQABAbgEAVQgHADgGAFQgKAJgCAPQgDAOAEAOQADALAHAQIAMAaQAMAcADAxQAbD5hJD0QgfBmgqBCQghA0hVBbQgrAtgWAUQglAjgiAYQgyAjhoArIjHBWIgXgFgAxXC7QgDgNgFgfQgFgcgFgPQgJgfgcg6QguhtAMh5QA5gGAwAiQAAAYAGAgQAYCAgDB9QgCA5AAAdQgBAiABAbQgcgZgNg1gARxDHQANhHAGhHIAEg5QAEhkgJhmQgFg1gJglQAIgJAIgSQAHgJASgLQAYgPAHgBQAUgFAMAGQAMAFAGANQAFAMgBANQgBARgQAgQgfA9gNAjQgfBTgBBUQgBAdACAcQADApgCAPQgDAiggA0IgEgBg");
	this.shape_65.setTransform(-41.8339,-106.1931);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("ADtP3IgGgFIgRACQhVAIhsgGQg7gDiEgNQibgQhLgTQhUgWiLg/Qg+gcgjgRQg0gbgngcQhGgyhOhdQhHhTgnhHQgcgygPgxQgZAJgdgQQgSgKgYgfQgIgLgHgMIgBAAQgTAWgdgFQgNgCgLgIQgLgKgEgMQgDgMAAgUQACgXgCgIQAAgFgMggQgKgZgLg2QgHgfAJgPQAHgMAPgDIAKgBIgIgQIgDgHQgMAHgPAAQgTAAgMgMQgLgMgCgTQgBgLABgZQADg7gOhaIgYiVIgBgTQAAgcAPgNQAFgFAPgFQAPgGAFgEQAKgHAHgPIAKgZQAMgiAXgCQAIgBAMAEIAUAHQAFACAPAAIAEAAQARgHAKgHQAAgNAIgTQAGgOAIgJQALgLANABIACAAIAHgOQAZgnAUgLQAPgIARABQAJABAGAEQCriTCPhQQDAhrC3gMQAVgBBZgBQBDAAAqgGQAWgEA8gNQA0gNAfgDQAOgBARAAQAwAABDAKQB0ATAfABQAhACA0gCIBVgCQBTABBnARQA9AKB5AbIGHBYQA4ANAEAeQAEAZgdAOQgXANghAAQAVAXAdAMQAeAMAfgCQASgBAkgGQAfgDASANQAUAPAAAcIAAAGQgBAfgWAWQgSARgfAMQgTAGglAHQAYAJgDAfQgDAfgYALQgpASg6gmQgWgPhMhBQgbgXgYgRQAEAXABAbQABAsgGA/IgHBQQAPgLANgHQAEgJAHgGQANgKAUgDQAIgBAdAAQAOABAagBQAXACAPAHQAcANAQAlQAgBFgXBEQgFAPgLAVIgSAjQgVAtgTBMQgPA7AEAiIAHAhQAEATABAMQABAYgSAuQgQArgLAZQgaA2ggAMQgSAGgVgFIgPgGIgJAiQgUBMgdA8QggBBg6BFQglAshLBMQhIBIgmAbQgtAfhbAoIjfBlQglAQgWAAQgQAAgNgIgAD/OUIAXAFIDHhVQBogsAygjQAigXAlgjQAWgVArgtQBVhbAhg0QAqhCAfhmQBJj0gbj5QgDgwgMgcIgMgbQgHgPgDgLQgEgOADgPQACgOAKgKQAGgFAHgDQAEgVgBgbQgCgSgGgjIgXiNQgEgZACgNQADgNAHgGQgZgHgfgFIhUgIQhqgMhtgtIhmgrQg8gYgvgDQgdgCgxAEQg5AFgWAAQgygBhDgRIh0giQjog/jsArQj0AsiyCUQgoAjgNAaQgMAkgMAPQgNAQgZAJQgQAFgeAFQgfAEgXgHQgJAOgDAKQgFAXgEALQgKAXgdASQgRALglARQgLAGgTAXQgWAngSATQgaAdgeAIQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABABQARgPAmAAIAJAAQAbAAAWADQBMAJA7A1QAjAfgHAbQgBAJgFAIIABAJQACANABAbIAHEnQADBfAJAoQAdCOCXCYQBKBJBBApQAqAZBPAkQCIA9BJATQBCASCLAPQB9AMA+ADQBoAFBTgIQAUgDAOAAQARAAAJADgAzujLQgMB4AuBuQAcA6AJAfQAFAOAFAdQAFAeADANQANA2AcAZQgBgbABgjQAAgcACg6QADh+gYh/QgGggAAgYQgpgcgvAAIgRABgAR/lUQgHABgYAPQgSAMgHAIQgIATgIAIQAJAlAFA1QAJBngEBkIgEA4QgGBIgNBHIAEABQAgg1ADghQACgPgDgqQgCgcABgcQABhVAfhSQANgkAfg8QAQggABgRQABgOgFgMQgGgNgMgFQgGgDgKAAQgHAAgJACg");
	this.shape_66.setTransform(-35.625,-107.7062);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A0715E").s().p("AE9OFQgTgFgqAFQhSAIhogFQg/gDh8gNQiKgPhCgRQhJgUiIg9QhPgkgqgZQhBgohJhKQiXiXgeiOQgIgogEhfIgGknQgBgbgDgNIgBgJQAFgIABgJQAHgbgjgfQg7g1hMgIQgWgEgaAAIgKAAQglAAgSAPQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAegIAagdQASgTAXgnQASgXALgGQAlgRARgLQAdgSAKgXQAEgLAEgXQAEgKAJgOQAXAHAfgEQAegFAQgFQAZgJANgQQAMgPALgkQANgaApgjQCxiUD0gsQDsgsDnBAIB0AiQBEARAyABQAWAAA5gFQAxgEAdACQAvADA8AYIBmAsQBsAsBqAMIBVAIQAfAFAZAHQgHAHgDAMQgDANAEAaIAYCNQAGAjABASQABAbgEAVQgHADgGAFQgKAJgCAPQgDAPAEAOQADALAHAPIAMAbQAMAcAEAwQAaD5hJD0QgfBmgqBCQghA0hVBbQgrAtgWAVQgmAighAYQgyAihoAsIjHBVIgWgFgAxVC7QgEgNgFgeQgFgdgEgOQgJgfgcg6QgvhuANh4QA4gGAwAiQAAAYAGAgQAZB/gDB9IgDBWQAAAiABAcQgcgagNg1gARwDJQANhHAGhIIAEg4QAEhkgJhnQgFg1gJglQAIgIAJgTQAGgIATgMQAYgPAGgBQAVgEAMAFQALAFAGANQAGAMgCAOQAAARgRAfQgfA9gNAkQgfBSgBBVQgBAcACAdQADApgCAPQgDAiggA0IgEgBg");
	this.shape_67.setTransform(-41.8589,-106.1551);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("ADrP3IgGgFIgQACQhVAHhsgGQg6gCiFgOQiagQhLgTQhUgViKhAQg/gbgigSQg1gbgmgbQhGgzhPhcQhGhTgnhHQgcgzgPgwQgZAJgdgQQgTgKgWgfQgJgLgHgMIgBAAQgTAWgcgFQgOgCgKgIQgLgKgEgMQgDgMgBgUQACgXgCgIQAAgFgLggQgKgZgMg3QgHgeAIgPQAIgMAPgDIAKgBIgIgQIgDgHQgMAHgPAAQgTAAgNgMQgKgMgCgTQgCgLACgZQADg7gOhaIgYiVIgBgTQAAgcAOgNQAGgFAPgFQAOgGAGgEQAJgHAHgPIAKgZQAMgiAYgCQAHgBAMAEIAUAHQAFACAQAAIADAAQARgHAKgHQAAgNAJgTQAFgOAIgJQAMgLAMABIACAAIAHgOQAYgnAVgLQAPgIARABQAIABAHAEQCqiTCPhQQDAhrC3gMQAUgCBaAAQBDAAApgHQAXgDA8gOQA1gNAegCQAOgCARABQAwgBBDALQBzASAgACQAgACA1gCIBVgCQBTAABnASQA+AKB5AbIGGBYQA5ANAEAeQADAZgdAPQgXAMghAAQAVAXAeAMQAdAMAfgCQASgBAkgGQAfgDATAOQATAOAAAcIAAAHQgBAegWAWQgSASgfALQgSAHglAHQAYAIgEAgQgEAfgYAKQgoASg6glQgXgPhMhCQgagXgYgQQADAWACAbQAAAsgFBAIgHBQQAOgMAOgGQAEgJAHgHQAMgKAVgCQAIgBAdAAQANABAbgBQAXABAQAHQAcAOAPAlQAgBFgYBEQgFAPgKAVIgSAjQgVAtgUBMQgOA8AEAiIAHAgQADATABAMQABAYgSAuQgQArgLAZQgaA3ggALQgSAGgVgFIgPgGIgJAiQgUBMgdA8QggBBg6BFQglAshLBMQhIBIglAaQguAghaAnIjfBkQgmARgWAAQgQAAgNgIgAD+OUIAXAFIDHhVQBngsAzgiQAggYAmgiQAWgVArgtQBVhbAhg0QAqhCAfhmQBJj0gaj5QgDgwgMgcIgNgbQgHgPgDgLQgDgOACgPQADgPAJgJQAGgFAIgDQADgVgBgbQgBgSgGgjIgXiNQgFgaADgNQADgMAHgHQgZgHgfgFIhVgIQhqgMhsgsIhmgsQg8gYgvgDQgdgCgxAEQg5AFgWAAQgygBhDgRIh0giQjohAjrAsQj1AsixCUQgpAjgMAaQgMAkgMAPQgNAQgZAJQgQAFgeAFQgfAEgXgHQgJAOgDAKQgFAXgEALQgKAXgdASQgRALglARQgKAGgTAXQgXAngRATQgaAdgfAIQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQASgPAmAAIAJAAQAaAAAWAEQBNAIA6A1QAjAfgHAbQgBAJgFAIIACAJQACANABAbIAHEnQADBfAIAoQAeCOCXCXQBJBKBBAoQAqAZBPAkQCIA9BJAUQBCARCLAPQB8ANA+ADQBoAFBSgIQAUgCAPAAQAQAAAKACgAztjLQgMB4AuBuQAcA6AJAfQAEAOAGAdQAFAeADANQANA1AcAaQgBgcAAgiIADhWQADh+gZh+QgGggAAgYQgpgdgvAAIgQABgAR+lTQgHABgYAPQgTAMgGAIQgJATgIAIQAKAlAEA1QAJBngEBkIgEA4QgGBIgNBHIAEABQAgg0AEgiQABgPgDgpQgBgdAAgcQAChVAfhSQANgkAeg9QARgfABgRQABgOgGgMQgFgNgMgFQgHgDgJAAQgHAAgJACg");
	this.shape_68.setTransform(-35.6,-107.6812);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A0715E").s().p("AE7OFQgSgFgqAFQhSAIhogFQg/gDh7gNQiKgPhCgRQhJgUiHg9QhQgkgpgZQhBgohKhKQiWiXgeiOQgIgpgEheIgHknQgBgbgCgNIgBgJQAEgIACgJQAGgbgigfQg7g1hMgIQgWgDgbAAIgJAAQglAAgSAOQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAegIAagcQARgUAXgmQATgYALgFQAkgSARgKQAegSAJgXQAEgMAFgXQADgKAJgOQAXAHAfgEQAegFAQgFQAZgJANgQQAMgPALgkQANgaAogjQCyiUDzgtQDsgrDnBAIB0AiQBEARAyAAQAWAAA5gFQAxgEAdACQAvAEA8AYIBmAsQBsAsBqAMIBVAJQAfAEAZAHQgHAHgDAMQgDAOAEAZIAYCNQAGAjABASQABAcgEAVQgHADgGAFQgKAJgCAPQgDAOAEAOQADALAHAQIAMAbQAMAcADAwQAbD5hKD0QgfBmgpBCQgiA0hVBbQgrAsgWAVQglAjghAXQgzAjhnArIjHBVIgXgFgAxUC7QgDgNgGgeQgFgdgEgOQgJgfgcg6QgvhuANh4QA4gGAwAiQAAAYAGAgQAZCAgDB8IgDBWQAAAiABAcQgcgagNg1gARvDKQAMhHAHhHIADg5QAFhkgJhnQgFg1gJglQAIgIAIgTQAHgJATgLQAYgPAGgBQAVgFAMAGQALAFAGANQAGAMgCAOQgBARgQAfQgfA9gNAkQgfBSgCBVQAAAdACAcQACApgBAPQgEAiggA0IgDgBg");
	this.shape_69.setTransform(-41.8589,-106.114);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ADqP3IgGgFIgQACQhVAIhrgHQg8gCiDgOQiagQhLgTQhUgViKhAQg+gbgjgSQg0gbgngcQhFgyhPhcQhGhTgnhHQgcgygPgxQgZAJgdgQQgSgKgYgfQgIgLgHgMIgBAAQgTAWgcgFQgNgCgLgIQgLgKgEgMQgDgMAAgUQABgXgBgHQgBgFgLggQgKgagMg2QgHgfAJgPQAHgMAQgDIAJAAIgIgQIgDgHQgMAGgPAAQgTAAgMgMQgLgLgCgTQgBgMABgYQADg7gPhaIgXiVIgCgTQAAgdAPgMQAGgGAOgFQAPgFAFgFQAKgHAHgOIAJgaQANgiAXgCQAIgBAMAFIAUAHQAFABAPAAIADABQARgIAKgGQAAgNAJgTQAGgPAHgIQALgMANABIACAAIAHgNQAYgnAVgLQAPgJARACQAJABAGADQCqiTCOhQQDAhrC3gMQAVgBBYgBQBEAAApgGQAXgEA8gOQA0gNAfgCQAOgCARABQAwgBBCALQB0ASAgACQAgACA1gCQBFgCAQAAQBTABBnARQA9AKB6AbIGHBYQA4AOAEAeQADAZgcAOQgYAMghABQAVAXAeAMQAdAMAfgCQASgBAkgGQAggDASANQAUAPAAAcIgBAHQgBAegWAWQgSASgeALQgTAHgmAHQAYAIgDAgQgDAfgYAKQgpASg7glQgWgPhLhCQgbgXgYgQQADAWABAbQABAsgFBAIgHBQQAOgLAOgHQADgJAIgHQAMgKAVgCQAIgBAdAAQAOABAagBQAXABAPAIQAcANAQAlQAgBFgYBEQgFAQgLAUIgRAjQgWAtgTBNQgPA7AEAiIAHAgQAEATABANQAAAXgRAuQgRAsgLAZQgaA2ggAMQgSAGgVgFIgPgGIgJAiQgUBLgdA8QggBBg6BGQglArhLBMQhIBIglAaQguAghaAnIjfBkQglARgWAAQgQgBgNgIgAD8OVIAXAFIDHhVQBngsAzgiQAhgYAlgiQAWgVArgtQBVhaAig1QAphBAfhmQBKj0gbj6QgDgwgMgcIgMgbQgHgPgDgLQgEgOADgPQACgOAKgKQAGgFAHgDQAEgVgBgbQgBgSgGgjIgYiNQgEgaADgNQADgNAHgGQgZgHgfgFIhVgIQhqgNhsgsIhmgsQg8gXgvgEQgdgCgxAEQg5AFgWAAQgygBhEgRIh0ghQjnhAjsArQjzAsiyCVQgoAigNAaQgLAkgMAPQgNARgZAIQgQAGgeAEQgfAEgXgGQgJANgDAKQgFAXgEAMQgJAXgeASQgRALgkARQgLAGgTAXQgXAngRATQgaAcgeAIQAAABAAAAQAAAAAAABQABAAAAAAQAAABABAAQASgOAlAAIAJAAQAbAAAWADQBMAJA7A0QAiAggGAbQgCAJgEAHIABAKQACANABAaIAHEnQAEBfAIAoQAeCOCWCXQBKBKBBApQApAYBQAkQCHA9BJAUQBCASCKAOQB8ANA+ADQBoAGBSgJQAUgCAOAAQARAAAJADgAzsjKQgNB4AvBtQAcA6AJAfQAEAPAFAcQAGAeADANQANA2AcAZQgBgbAAgjIADhVQADh+gZh/QgGggAAgYQgpgcguAAIgRABgAR8lSQgGABgYAPQgTAMgHAJQgIASgIAJQAJAlAFA0QAJBngFBkIgDA5QgHBIgMBHIADABQAgg1AEghQABgPgCgqQgCgcAAgcQAChVAfhTQANgjAfg9QAQggABgRQACgNgGgMQgGgOgLgFQgHgDgJAAQgIAAgJACg");
	this.shape_70.setTransform(-35.5758,-107.6562);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A0715E").s().p("AE6OFQgSgFgqAEQhSAJhngFQg/gEh7gMQiKgPhCgSQhJgUiHg8QhPglgqgYQhAgphKhKQiWiXgeiNQgIgpgEheIgHknQgBgbgCgNIgCgJQAFgIABgJQAHgagjggQg6g1hMgIQgWgDgbAAIgJAAQgmAAgRAOQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAegIAagcQARgUAXgmQASgYALgFQAkgSASgKQAdgSAJgXQAEgMAFgXQADgKAJgOQAXAHAfgEQAegEAQgGQAZgIANgRQALgPAMgkQANgaAogjQCxiUD0gtQDrgrDnBAIB0AiQBEARAyAAQAWAAA5gFQAxgEAdACQAvAEA8AYIBmAsQBsAsBrAMIBUAJQAfAEAZAIQgHAGgDANQgCANAEAaIAXCNQAGAjABASQABAbgEAVQgHADgGAFQgKAKgCAPQgDAOAEAOQADALAHAQIAMAaQAMAdADAwQAaD5hKD0QgeBmgqBCQgiA0hUBaQgrAtgWAVQgmAighAYQgyAihoAsIjGBUIgXgFgAxTC7QgDgNgFgeQgGgdgEgOQgJgfgcg6QgvhuANh4QA4gGAvAiQAAAYAHAgQAZCAgDB8IgDBWIABA+QgcgagNg1gARtDLQANhHAGhHIAEg5QAEhkgIhnQgFg1gJglQAIgJAIgSQAHgJATgLQAYgPAGgBQAVgFAMAGQALAFAGANQAGAMgCAOQgBARgQAfQgfA9gNAkQgfBSgCBVQgBAdACAcQADApgCAPQgDAiggA0IgEgBg");
	this.shape_71.setTransform(-41.8733,-106.0801);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("ADpP3QgEgCgCgDIgQACQhVAIhrgHQg7gCiEgOQiZgQhLgTQhUgViKhAQg+gbgigSQg0gbgngcQhFgyhOhcQhGhTgnhHQgcgygQgwQgZAIgcgQQgTgKgXgeQgJgMgGgMIgCABQgSAWgcgFQgOgDgKgIQgLgKgEgMQgEgLABgUQABgYgCgHQAAgFgMggQgKgZgLg3QgIgfAJgPQAIgMAPgCIAKgBIgJgQIgDgHQgMAHgOAAQgTAAgNgNQgKgLgCgTQgCgLABgZQADg7gOhaIgYiVIgCgTQAAgcAPgNQAGgFAOgFQAPgGAFgEQAKgHAGgPIAKgZQAMgiAYgCQAIgBAMAEIATAHQAFACAPAAIAEAAQAQgHAKgHQABgNAIgTQAGgOAHgJQAMgLANABIABAAIAIgOQAYgnAUgLQAPgJARACQAJABAGAEQCqiUCOhQQC/hrC3gMQAVgBBZgBQBDAAAqgGQAWgEA8gOQA0gNAfgCQAOgCARABQAwgBBCALQB0ATAgABQAgACA1gCIBVgCQBTABBnARQA+AKB5AbIGIBZQA4ANAEAeQADAZgdAPQgXAMgiAAQAVAYAeAMQAdALAggCQASgBAkgFQAggDASANQATAPAAAcIAAAHQgBAegWAWQgSASgfALQgTAHglAHQAYAIgEAgQgDAfgYAKQgpATg6gmQgWgPhMhCQgbgXgYgQQAEAWABAbQAAAsgFBAIgHBQQAOgLAOgHQADgJAIgGQAMgKAVgDQAIgBAdAAQAOABAagBQAXACAPAHQAcANAQAmQAgBFgYBDQgFAQgLAVIgSAjQgVAtgTBNQgQA7AFAiIAHAgQADATABAMQABAYgSAuQgQArgLAZQgbA3gfALQgTAHgUgFIgPgGIgJAhQgVBMgcA8QghBBg6BFQglAshLBLQhIBIglAaQgtAghbAnIjeBjQglARgWAAQgQAAgNgJgAD7OVIAXAFIDGhUQBogsAygiQAhgYAmgiQAWgVArgtQBUhaAig0QAqhCAehmQBKj0gaj5QgDgwgMgdIgMgaQgHgQgDgLQgEgOADgOQACgPAKgKQAGgFAHgDQAEgVgBgbQgBgSgGgjIgXiNQgEgaACgNQADgNAHgGQgZgIgfgEIhUgJQhrgMhsgsIhmgsQg8gYgvgEQgdgCgxAEQg5AFgWAAQgyAAhEgRIh0giQjnhAjrArQj0AtixCUQgoAjgNAaQgMAkgLAPQgNARgZAIQgQAGgeAEQgfAEgXgHQgJAOgDAKQgFAXgEAMQgJAXgdASQgSAKgkASQgLAFgSAYQgXAmgRAUQgaAcgeAIQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQARgOAmAAIAJAAQAbAAAWADQBMAIA6A1QAjAggHAaQgBAJgFAIIACAJQACANABAbIAHEnQAEBeAIApQAeCNCWCXQBKBKBAApQAqAYBPAlQCHA8BJAUQBCASCKAPQB8AMA+AEQBnAFBSgJQASgCAOAAQASAAAKADgAzrjKQgNB4AvBuQAcA6AJAfQAEAOAGAdQAFAeADANQANA1AcAaIgBg+IADhWQADh9gZh/QgHggAAgYQgogdgvAAIgQABgAR7lQQgGABgYAPQgTALgHAJQgIASgIAJQAJAlAFA1QAIBngEBkIgEA5QgGBHgNBHIAEABQAgg0ADgiQACgPgDgpQgCgcABgdQAChVAfhSQANgkAfg9QAQgfABgRQACgOgGgMQgGgNgLgFQgHgDgJAAQgIAAgJACg");
	this.shape_72.setTransform(-35.5508,-107.6562);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A0715E").s().p("AE5OGQgSgFgqAEQhSAIhngFQg/gDh7gNQiJgPhCgSQhIgUiHg8QhPglgqgYQhAgphKhJQiWiXgeiOQgIgogEhfIgIkmQgBgbgCgNIgBgJQAEgIACgJQAGgbgigfQg7g1hMgJQgWgDgaAAIgKAAQglAAgRAPQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAegIAagdQARgTAWgnQATgXALgGQAkgRARgLQAdgSAJgXQAEgLAFgXQAEgLAIgNQAXAGAfgDQAegFAQgFQAZgJANgRQALgPAMgkQANgaAogiQCxiVDzgtQDrgrDoBAIB0AiQBDARAyABQAWAAA5gFQAxgEAdACQAvADA8AYIBmAsQBtAtBqAMIBUAJQAfAEAaAHQgIAHgDANQgCANAEAZIAXCOQAGAjABASQABAbgEAWQgHADgGAFQgKAJgCAPQgDAOAEAOQADALAHAQIAMAbQAMAcADAwQAaD6hKD0QgfBmgqBBQghA0hVBbQgrAsgWAVQglAigiAYQgyAihnArIjGBVIgXgFgAxSC7QgDgNgFgeQgFgcgFgPQgJgfgcg6QgvhtAMh4QA4gGAwAhQAAAYAGAgQAZCAgCB9IgCBVQgBAjABAbQgbgZgOg2gARsDNQAMhHAHhIIAEg4QAEhlgIhnQgFg1gJglQAIgIAIgTQAHgIATgMQAYgPAGgBQAVgFAMAGQALAFAGANQAGAMgCAOQgBARgQAgQgfA8gNAkQggBTgBBVQgBAcACAcQACAqgBAPQgEAhggA1IgDgBg");
	this.shape_73.setTransform(-41.8733,-106.051);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("ADnP3QgDgCgCgDIgRACQhUAHhrgGQg7gDiEgNQiZgQhKgUQhUgViKhAQg9gbgjgSQg0gbgmgbQhFgzhPhbQhGhUgnhGQgcgygPgxQgZAJgcgQQgTgKgXgeIgPgYIgCABQgSAVgcgFQgOgCgKgIQgLgKgEgMQgEgMABgTQABgYgCgHQAAgFgMggQgKgagLg2QgIgfAJgPQAHgMAQgCIAKgBIgJgQIgDgHQgMAHgPAAQgSAAgNgNQgKgLgCgTQgCgLABgZQADg7gPhaIgYiVIgBgTQgBgcAPgNQAGgFAOgFQAPgGAGgEQAJgHAHgPIAJgZQAMgiAYgCQAIgBAMAEIATAHQAFACAPAAIAEAAQAQgHAKgHQABgNAIgTQAGgOAHgJQAMgLAMABIACAAIAHgOQAYgnAVgLQAOgJASACQAIABAHAEQCpiUCOhQQC/hsC3gLQAUgCBZAAQBEAAApgHQAXgDA8gOQA0gNAegDQAOgBASAAQAvAABDAKQB0ATAgACQAgACA1gCIBVgCQBTAABnARQA+ALB5AbIGIBZQA4ANAEAeQADAZgdAPQgXAMgiABQAVAXAeAMQAdAMAggCQASgBAkgGQAggDASANQATAPAAAcIAAAHQgBAfgWAVQgSASgfAMQgTAGglAHQAYAJgEAgQgDAegZALQgoASg7glQgWgPhMhDQgagWgYgRQADAXABAaQABAtgFBAIgIBQQAPgMANgGQAEgJAHgHQANgKAVgCQAIgBAdAAQANABAagBQAYABAPAHQAcAOAQAlQAfBFgXBEQgFAQgMAVIgRAjQgWAtgTBNQgPA7AEAiIAHAgQADATABANQABAXgSAuQgQAsgLAZQgbA2ggALQgSAHgVgFIgOgGIgKAhQgUBMgdA8QggBBg6BFQglArhLBMQhIBHglAaQguAghaAnIjeBjQglARgVAAQgRAAgNgJgAD6OVIAXAFIDFhUQBogrAygjQAhgXAmgjQAVgUArgtQBVhaAig0QAphCAfhmQBKj0gZj5QgEgxgMgcIgLgaQgHgQgDgLQgFgOADgPQACgOAKgKQAHgFAHgDQAEgVgBgbQgCgSgGgkIgXiNQgEgaADgNQADgNAHgGQgZgHgfgFIhVgIQhqgNhsgsIhmgsQg8gYgvgEQgegCgxAEQg5AFgWAAQgyAAhDgRIh0giQjnhBjrAsQj0AtiwCUQgpAjgMAaQgMAkgMAPQgNARgYAIQgQAGgeAEQgfAEgXgHQgJAOgDAKQgFAXgEAMQgJAXgdASQgSAKgkASQgLAFgSAYQgXAmgRAUQgaAcgeAIQAAABAAAAQABABAAAAQAAAAAAABQABAAAAAAQASgOAlAAIAJAAQAbAAAWADQBMAIA6A1QAjAggHAbQgBAJgFAHIACAKQACANABAaIAIEnQADBeAJApQAdCNCXCXQBJBKBBAoQApAZBPAkQCHA9BIAUQBCARCKAPQB8ANA9AEQBoAFBSgJQASgBAOAAQARAAALACgAzrjKQgMB4AuBuQAcA6AKAfQAEAOAFAdQAFAeAEANQANA1AcAZQgBgbAAgiIAChWQADh9gZh/QgGggAAgYQgpgdguAAIgRABgAR6lPQgHAAgYAQQgTALgGAJQgJASgIAJQAJAlAFA1QAJBngFBkIgEA5QgGBHgNBHIAEABQAgg0ADgiQACgPgDgpQgCgcABgdQAChVAfhSQANgkAfg9QARggAAgRQACgNgFgMQgGgNgMgFQgGgDgJAAQgIAAgJACg");
	this.shape_74.setTransform(-35.5258,-107.6312);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A0715E").s().p("AE5OGQgTgFgpAEQhSAIhngFQg/gEh6gMQiKgQhCgRQhIgUiGg9QhPgkgqgZQhAgohJhKQiWiXgeiNQgJgogDhfIgIkmQgCgbgCgNIgBgJQAFgIABgJQAGgbgigfQg7g1hMgJQgVgDgbAAIgJAAQglAAgSAPQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAegIAagdQARgTAWgnQATgXALgGQAkgRARgLQAdgSAJgXQAEgLAFgXQADgKAJgOQAXAHAfgEQAegFAQgFQAYgJANgQQAMgQAMgkQAMgaAogjQCxiUDzgtQDrgrDnBAIB0AiQBDARAzABQAWAAA5gFQAxgEAdACQAvADA8AYIBmAsQBsAtBqAMIBVAJQAfAEAZAIQgHAGgDANQgDANAEAaIAYCNQAFAkACASQABAbgFAVQgHADgGAFQgKAKgCAPQgDAOAFAOQADALAHAQIALAbQAMAcADAwQAaD6hKD0QgfBlgqBCQghA0hVBaQgrAtgWAVQglAigiAXQgyAjhnArIjGBUIgWgFgAxQC7QgDgNgGgeQgFgcgEgPQgKgfgcg6QguhtAMh4QA4gGAvAhQAAAYAHAgQAZCAgCB9QgDA5AAAcQAAAjABAbQgcgagNg1gARqDOQANhHAHhIIAEg4QAEhlgIhnQgFg1gJglQAIgIAJgTQAGgJATgLQAYgPAHgBQAUgFAMAGQAMAFAGANQAFAMgCAOQAAARgRAgQgfA8gNAkQgfBTgCBVQgBAcACAcQADAqgCAPQgEAhggA1IgEgBg");
	this.shape_75.setTransform(-41.9077,-106.0051);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AEEQAQgRAAgNgJIgGgFIgQACQhVAIhqgHQg7gDiDgNQiZgQhLgUQhSgViKhAQg+gbgigSQg0gbgngbQhEgzhOhbQhGhTgnhHQgcgygQgwQgYAIgdgQQgSgKgYgeQgIgMgHgMIgBABQgTAWgcgFQgNgDgLgIQgLgKgDgMQgEgLAAgUQACgYgCgHQgBgFgMggQgJgZgMg2QgIgfAKgPQAHgMAPgDIAKgBIgJgQIgDgGQgLAGgQAAQgSAAgMgMQgLgMgCgTQgCgLACgYQACg7gPhaIgYiVIgCgTQAAgdAPgMQAGgGAOgFQAOgFAGgFQAKgHAGgOIAKgaQAMgiAXgCQAIgBAMAFIAUAHQAFABAPAAIADABQAQgIALgGQAAgNAIgTQAGgPAIgIQAKgMAOABIABAAIAIgNQAXgoAVgLQAOgIASABQAIABAGAEQCqiTCNhRQC/hsC3gLQAUgCBZAAQBEAAApgHQAXgDA8gOQA0gNAfgDQANgBASAAQAwAABCAKQB0ATAgACQAgACA1gCIBVgCQBTAABnASQA9AKB6AbIGIBZQA4ANAEAfQADAZgcAPQgZAMggAAQAVAYAdAMQAdALAggCQASgBAkgFQAggDASANQAUAPAAAcIgBAHQgBAfgWAVQgTASgeAMQgTAGgmAHQAYAJgDAgQgEAfgXAKQgpASg7glQgWgPhLhDQgbgXgYgQQAEAWAAAbQABAtgFBAIgIBQQAPgLANgHQADgJAJgGQAMgLAUgCQAJgBAcAAQAOABAagBQAYACAPAHQAcANAQAmQAfBFgXBEQgFAPgMAVIgSAjQgVAugTBMQgQA7AEAjIAHAgQAEATABAMQAAAYgSAuQgQArgLAZQgbA3gfALQgSAGgVgFIgPgGIgJAiQgVBLgcA8QghBBg6BFQglAshLBLQhIBHglAaQgtAghaAnIjfBjQgjAQgVAAIgBAAgAD5OWIAWAFIDGhUQBngrAygjQAhgXAmgiQAWgVArgtQBVhaAhg0QAqhCAehlQBLj0gaj6QgDgwgMgcIgLgbQgIgQgCgLQgFgOADgOQACgPAKgKQAGgFAHgDQAFgVgBgbQgCgSgFgkIgYiNQgEgaADgNQADgNAHgGQgZgIgfgEIhVgJQhqgMhsgtIhmgsQg9gYgugDQgdgCgxAEQg5AFgWAAQgzgBhDgRIh0giQjnhAjsArQjzAtiwCUQgoAjgMAaQgMAkgMAQQgNAQgYAJQgQAFgeAFQgfAEgXgHQgJAOgDAKQgFAXgEALQgJAXgdASQgRALgkARQgLAGgTAXQgWAngRATQgaAdgeAIQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQARgPAmAAIAJAAQAbAAAVADQBMAJA6A1QAjAfgGAbQgBAJgFAIIABAJQACANABAbIAJEmQADBfAJAoQAdCNCXCXQBJBKBAAoQApAZBQAkQCGA9BIAUQBCARCKAQQB7AMA9AEQBoAFBSgIQASgCAOAAQARAAALADgAzqjJQgMB4AuBtQAcA6AKAfQAEAPAFAcQAFAeAEANQANA1AcAaQgBgbAAgjQAAgcADg5QACh+gah/QgGggAAgYQgogcgvAAIgQABgAR5lOQgHABgYAPQgTALgGAJQgJATgIAIQAJAlAFA1QAIBngEBlIgEA4QgHBIgNBHIAEABQAgg1AEghQACgPgDgqQgCgcABgcQAChVAehTQAOgkAfg8QARggAAgRQACgOgFgMQgHgNgLgFQgHgDgJAAQgHAAgJACg");
	this.shape_76.setTransform(-35.5002,-107.6305);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A0715E").s().p("AE4OGQgTgFgpAEQhSAIhngFQg/gEh6gNQiJgPhBgSQhIgTiHg9QhPgkgpgZQhAgphJhJQiWiXgeiNQgJgogDhfIgJkmQgBgbgCgNIgCgJQAFgIACgJQAGgbgjgfQg6g1hMgJQgWgDgaAAIgKAAQglAAgRAPQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAegIAagdQARgTAWgnQATgXAKgGQAkgRARgLQAdgSAKgXIAIgiQADgKAJgOQAXAHAfgEQAegFAQgFQAYgJANgQQAMgQAMgkQAMgaAogjQCwiUDzgtQDrgsDnBBIB0AiQBEARAyABQAWAAA5gFQAxgEAdACQAvADA8AYIBmAsQBsAtBrAMIBUAJQAfAFAZAHQgHAHgDAMQgCANAEAaIAXCOQAFAjACATQABAbgFAVQgHADgGAFQgKAKgCAOQgDAPAFAOQACALAHAQIAMAaQAMAdADAwQAZD6hKD0QgfBlgpBCQgiA0hVBaQgrAsgWAVQglAjghAXQgyAihnArIjGBUIgWgFgAxPC7QgDgNgFgeQgGgcgEgPQgJgfgdg6QguhtAMh4QA3gGAwAiQAAAYAHAgQAZB/gCB9QgDA5AAAcIABA+QgbgagOg1gARpDPQANhHAGhIIAEg4QAFhlgIhnQgFg1gJglQAIgJAJgSQAGgJATgLQAYgPAHgBQAUgFAMAGQAMAFAGANQAFAMgCAOQAAARgRAgQgfA8gNAkQggBTgCBVQAAAcABAcQADAqgCAPQgDAighA0IgDgBg");
	this.shape_77.setTransform(-41.9077,-105.976);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("ADlP4IgGgFIgQACQhVAHhqgHQg7gDiDgNQiYgQhKgUQhTgViKhAQg9gbgjgSQg0gbgmgbQhFgzhOhbQhGhTgmhHQgcgygQgwQgZAIgcgQQgSgKgYgeQgIgLgHgMIgBAAQgTAWgcgFQgNgCgKgJQgLgJgEgNQgEgLAAgUQACgXgCgIQgBgFgLgfQgKgagMg2QgHgfAIgPQAIgMAPgDIAKAAIgJgQIgDgHQgMAGgOAAQgTABgMgNQgLgLgCgTQgCgMACgYQACg7gPhaIgYiVIgCgTQAAgcAOgNQAGgFAOgFQAPgGAGgEQAJgHAHgPIAJgZQAMgiAXgCQAIgBAMAEIAUAHQAFACAPAAIADAAQARgHAKgHQAAgNAIgTQAGgOAHgJQAMgLANABIABAAIAHgOQAYgnAUgLQAPgJARACQAJABAGADQCpiTCNhRQC/hsC3gLQAUgCBZAAQBDAAAqgHQAWgDA8gOQA1gNAegDQAOgBARAAQAwAABDAKQB0ATAfACQAhACA1gCIBVgCQBTAABnASQA+AKB5AbIGIBaQA4ANAEAeQADAZgcAPQgYAMghABQAVAXAdAMQAeAMAfgCQASgBAkgGQAggDASAOQAUAOAAAdIgBAHQgBAfgWAVQgSASgfAMQgTAGglAHQAYAJgEAgQgEAfgYAKQgpASg6glQgWgPhMhDQgagXgYgQQADAWABAbQABAtgGBAIgHBQQAOgLAOgHQADgJAIgGQANgLAUgCQAIgBAdAAQAOABAagBQAYACAPAHQAcAOAPAlQAgBFgYBEQgFAQgLAVIgSAjQgWAtgTBNQgQA7AEAiIAHAgQAEATABANQAAAXgSAuQgQAsgLAZQgaA2ggAMQgSAGgVgFIgPgGIgJAhQgVBMgcA8QghBBg6BEQglAshLBLQhIBHglAaQgtAghaAnIjeBiQgkAQgWAAQgQAAgNgIgAD3OWIAXAFIDFhTQBngrAygjQAigXAlgiQAWgVArgtQBUhaAig0QAqhBAfhmQBKjzgZj7QgDgwgMgcIgMgbQgHgPgDgMQgEgOADgOQACgPAKgKQAGgFAHgDQAEgVgBgbQgBgSgGgkIgXiNQgEgaADgNQADgNAHgHQgZgHgfgEIhVgJQhqgMhtgtIhmgsQg8gYgvgEQgdgCgxAEQg5AFgWAAQgyAAhDgSIh0giQjnhAjrArQjzAtiwCVQgoAjgNAaQgMAkgLAPQgNARgZAIQgQAGgeAEQgfAEgWgGQgJANgDAKIgJAjQgJAXgdASQgRAKgkASQgLAFgSAYQgXAmgRAUQgaAcgeAIQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQASgOAlAAIAJAAQAbAAAWADQBLAJA7A0QAiAggGAbQgBAJgFAHIABAKQACANACAaIAIEnQAEBeAJAoQAdCOCWCWQBJBKBAAoQAqAZBPAkQCGA9BIAUQBBARCKAQQB7ANA+ADQBmAGBSgJQATgCAOAAQARAAAKADgAzqjJQgLB4AuBuQAcA6AJAfQAFAOAFAcQAFAfAEANQANA1AcAZIgBg9QAAgdACg5QACh9gZh/QgGggAAgYQgpgdguAAIgRABgAR3lNQgGABgZAPQgSAMgHAIQgJATgHAIQAJAmAEA1QAIBngEBkIgEA5QgHBHgNBHIAEACQAgg1AEghQACgQgDgpQgCgcABgdQAChVAfhSQANgkAfg9QARggABgRQABgNgFgNQgGgNgLgFQgHgDgJAAQgIAAgJACg");
	this.shape_78.setTransform(-35.4752,-107.6062);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A0715E").s().p("AE3OGQgTgFgpAEQhSAIhngGQg+gDh6gNQiJgQhBgRQhIgUiGg9QhPgkgpgZQhAgohJhJQiWiXgeiNQgJgogEhfIgIkmQgBgbgDgMIgBgKQAFgHABgJQAGgbgiggQg7g1hLgIQgWgEgaAAIgKAAQglAAgRAPQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAegIAZgdQARgTAXgnQASgXALgGQAkgRARgLQAdgSAJgXQAEgLAEgXQAEgKAIgOQAXAHAfgEQAegFAQgFQAYgJANgQQAMgQALgkQANgaAogjQCwiUDygtQDrgsDoBBIBzAiQBEARAyABQAWAAA5gFQAxgEAdACQAvADA8AYIBmAtQBtAsBqANIBUAIQAfAFAaAHQgIAHgDANQgCANAEAaIAXCOQAFAjACASQABAbgFAWQgHADgGAFQgKAJgCAPQgDAPAEAOQADALAHAQIAMAaQAMAcADAxQAZD6hKD0QggBlgpBCQgiA0hVBaQgrAsgVAVQgmAighAXQgyAihnArIjFBUIgWgFgAxNC7QgEgNgFgeQgFgcgFgPQgJgfgcg6QgvhtAMh4QA3gGAwAiQAAAYAGAgQAaB/gCB9IgDBVIABA+QgbgagNg1gARnDQQANhHAHhIIAEg4QAFhlgIhnQgFg1gJglQAIgJAJgSQAGgJATgLQAYgQAHgBQAUgEAMAGQAMAFAGANQAFAMgCANQAAASgRAfQgfA9gOAkQgfBTgCBVQgBAcACAdQADApgCAPQgEAiggA0IgEgBg");
	this.shape_79.setTransform(-41.9077,-105.9381);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("ADkP4IgGgFIgRACQhUAHhqgHQg7gDiCgOQiZgQhJgUQhTgViJg/Qg+gcgigSQg0gbgmgbQhFgyhOhcQhGhTgmhGQgdgygPgwQgZAIgcgQQgSgKgXgeQgJgMgGgLIgCAAQgSAWgcgFQgOgDgKgIQgLgKgEgMQgDgLAAgUQABgXgCgIQAAgFgMggQgKgZgMg2QgHgfAJgPQAHgMAPgDIAKAAIgIgQIgEgHQgLAGgPAAQgTABgMgNQgLgLgCgTQgBgMAAgYQADg7gPhaIgYiVIgCgTQAAgcAOgNQAGgFAOgFQAOgGAGgEQAKgHAGgPIAKgZQAMgiAXgCQAHgBANAEIATAHQAFACAPAAIAEAAQAQgHAKgHQAAgNAJgTQAFgOAIgJQALgLANABIABAAIAIgOQAXgnAVgLQAOgJARACQAJABAGADQCpiTCNhRQC+hsC3gLQAUgCBZgBQBDAAAqgGQAWgEA8gOQA1gNAegCQAOgCARABQAwgBBDALQB0ATAgABQAgACA0gCIBWgCQBTABBnARQA+AKB5AcIGJBaQA4ANAEAeQACAZgcAPQgYAMghABQAVAXAeANQAdALAfgCQATgBAjgFQAhgDASANQAUAPgBAcIAAAHQgBAfgWAWQgTASgfALQgTAHglAHQAYAIgEAgQgDAfgYALQgpASg7glQgWgQhLhCQgbgXgYgRQADAXABAbQAAAsgFBBIgHBQQAOgMAOgGQADgJAIgHQANgKAUgCQAIgBAdAAQAOABAagBQAXABAPAIQAdANAPAmQAgBFgYBEQgFAQgMAVIgSAjQgVAtgUBNQgPA7AEAiIAHAhQAEASAAANQAAAYgRAuQgRArgLAZQgaA2ggAMQgSAGgVgFIgPgGIgJAhQgVBMgcA8QghBAg6BFQglAshLBLQhIBHglAaQgtAfhaAnIjdBiQglAQgVAAQgQAAgNgIgAD2OWIAWAFIDFhTQBogrAxgiQAigXAlgjQAVgUArgtQBWhaAhg0QAqhBAfhmQBKjzgYj7QgEgwgMgcIgLgbQgHgQgDgLQgEgOADgOQABgPALgKQAGgFAHgDQAEgVgBgbQgCgTgFgjIgXiOQgEgaADgNQADgNAHgGQgZgIgggEIhUgJQhqgMhsgtIhmgsQg9gYgvgEQgdgCgxAEQg5AFgWAAQgyAAhEgSIhzgiQjnhBjrAsQjzAtiwCVQgoAjgNAaQgLAkgLAPQgNARgZAIQgQAGgeAEQgeAEgXgGQgJANgDAKQgFAXgEAMQgJAXgdASQgRAKgkASQgKAFgTAYQgWAmgRAUQgaAcgeAIQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQARgOAmAAIAJAAQAbAAAVADQBMAJA6A1QAjAfgGAbQgCAJgFAIIACAJQACANABAbIAJEmQAEBeAIAoQAeCNCWCXQBJBJBAApQAqAZBOAkQCGA9BIATQBBASCJAPQB7ANA+AEQBnAFBRgIQASgBAOAAQASAAAKACgAzpjJQgLB4AuBuQAcA6AKAfQAEAOAFAcQAFAfAEANQANA1AbAZIgBg9IADhWQACh9gZh/QgHggAAgYQgpgcguAAIgQAAgAR2lMQgGABgZAPQgTALgGAJQgJATgIAIQAJAlAFA2QAIBngFBkIgDA5QgHBHgNBIIADABQAgg1AEghQACgPgDgqQgBgcABgdQABhVAghSQANgkAfg9QARggAAgRQACgOgFgMQgGgNgLgFQgHgDgKAAQgHAAgJACg");
	this.shape_80.setTransform(-35.4502,-107.5812);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A0715E").s().p("AE1OGQgSgFgpAEQhSAIhmgFQg/gEh5gNQiJgPhBgSQhIgUiGg9QhOgkgqgZQhAgohJhJQiViXgeiNQgJgogEheIgJkmQgBgbgCgNIgBgJQAEgIACgJQAGgbgigfQg7g1hMgJQgVgDgbAAIgJAAQglAAgRAOQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAdgIAagcQARgUAWgmQATgYAKgFQAkgSARgKQAdgSAJgXIAJgjQADgKAJgNQAWAGAfgEQAegEAQgGQAYgIANgRQAMgPALgkQANgaAogjQCviVDzgtQDrgsDnBBIB0AiQBDARAyABQAWAAA5gFQAxgEAdACQAvAEA8AYIBmAsQBtAtBqAMIBVAJQAfAFAZAHQgHAHgDAMQgDANAEAaIAXCPQAFAjACASQABAcgFAVQgHADgGAFQgKAKgCAOQgDAPAEAOQADALAHAQIAMAbQAMAcADAwQAZD7hLDzQgfBmgqBBQghA0hVBaQgrAsgWAVQglAighAXQgzAihmArIjFBTIgXgFgAxMC7QgEgNgFgeQgFgcgFgOQgJgfgcg6QgvhtALh5QA4gFAwAhQAAAYAGAgQAZCAgBB8IgCBWQgBAiACAbQgcgZgNg2gARmDSQANhHAHhIIAEg5QAEhkgIhoQgEg1gJglQAIgIAIgTQAHgJATgLQAYgPAGgBQAVgFAMAGQALAFAHANQAFAMgCAOQAAARgRAgQgfA9gOAjQgfBTgCBVQgBAdACAcQACAqgBAPQgEAhghA1IgDgBg");
	this.shape_81.setTransform(-41.9077,-105.901);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AD/QAQgQAAgNgIIgGgFIgQACQhUAHhqgHQg6gDiDgOQiYgQhKgUQhSgViJhAQg9gbgjgSQgzgbgngbQhEgyhOhcQhGhTgmhGQgcgygQgwQgYAIgdgQQgSgKgXgeQgJgLgGgMIgCAAQgSAWgcgFQgNgCgLgJQgLgJgEgNQgDgLAAgUQABgXgBgHQgBgFgLggQgLgagMg2QgHgfAJgOQAHgMAPgDIAKgBIgJgQIgDgHQgLAHgPAAQgTAAgMgMQgLgMgCgTQgBgLABgYQACg7gPhaIgZiVIgCgTQAAgdAPgMQAFgGAPgFQAOgFAGgEQAJgIAHgOIAJgaQAMgiAXgCQAIgBAMAFIATAHIAUACIAEAAQARgHAJgHQAAgNAIgTQAGgPAIgIQALgMANABIABAAIAHgNQAYgoAUgLQAPgIARABQAIABAHAEQCoiUCNhRQC+hsC3gLQAUgCBZAAQBDgBAqgGQAWgEA8gNQA0gOAfgCQAOgCARABQAwgBBDALQB0ATAfABQAhACA0gCIBWgCQBTABBnARQA+ALB5AbIGJBaQA4ANAEAfQADAZgdAPQgYAMghABQAVAXAeAMQAdAMAfgCQASgBAlgGQAggDASAOQAUAOgBAdIAAAHQgCAfgWAWQgSASgfALQgTAHglAHQAYAJgEAgQgEAegYALQgpASg6glQgWgQhMhCQgagXgYgRQADAXABAbQABAsgGBBIgIBQQAPgLAOgHQADgJAIgGQAMgLAVgCQAIgBAdAAQAOABAagBQAXACAPAHQAcAOAQAlQAfBFgYBFQgFAPgLAVIgSAjQgWAugTBNQgQA7AEAiIAHAgQAEATABANQAAAXgSAuQgRAsgLAZQgaA2ggALQgSAHgVgFIgPgHIgJAiQgVBLgcA8QghBBg6BFQglArhLBLQhIBHglAaQgtAfhaAnIjdBhQgjAQgVAAIgCAAgAD0OXIAXAFIDFhTQBmgrAzgiQAhgXAlgjQAWgUArgtQBVhZAhg0QAqhCAfhlQBLj0gZj6QgDgxgMgcIgMgbQgHgPgDgMQgEgOADgOQACgPAKgKQAGgFAHgDQAFgVgBgbQgCgSgFgkIgXiOQgEgaADgNQADgNAHgHQgZgHgfgEIhVgJQhqgMhtgtIhmgtQg8gYgvgDQgdgDgxAFQg5AFgWAAQgygBhDgRIh0gjQjnhAjrArQjzAtivCVQgoAjgNAaQgLAlgMAPQgNAQgYAJQgQAFgeAFQgfAEgWgHQgJAOgDAKIgJAiQgJAXgdATQgRAKgkARQgKAGgTAYQgWAmgRATQgaAdgdAIQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQASgPAkABIAJAAQAbAAAVADQBMAIA7A1QAiAggGAbQgCAJgEAHIABAKQACANABAaIAJEmQAEBeAJApQAeCNCVCWQBJBKBAAoQAqAZBOAkQCGA9BIATQBBASCJAQQB6ANA+ADQBmAGBSgIQATgCAOAAQARAAAJADgAzpjIQgLB4AvBtQAcA6AJAfQAFAOAFAdQAFAeAEANQANA1AcAZQgCgbABgiIAChVQABh9gZh/QgGggAAgYQgpgdgvAAIgQABgAR0lLQgGABgYAPQgTAMgHAIQgIATgIAJQAJAlAEA1QAIBngEBlIgEA5QgHBHgNBHIADABQAhg0AEgiQACgPgDgpQgCgdABgcQAChVAfhTQAOgkAfg9QARggAAgRQACgNgFgMQgHgOgLgFQgGgDgJAAQgIAAgKACg");
	this.shape_82.setTransform(-35.4494,-107.5805);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A0715E").s().p("AE0OGQgSgFgpAEQhSAIhmgGQg+gDh6gNQiIgQhBgSQhIgTiFg9QhPgkgpgZQhAgohJhKQiViWgeiNQgJgogEheIgJkmQgBgbgCgNIgCgJQAFgIABgJQAGgbgigfQg7g1hLgJQgVgDgbAAIgJAAQglAAgSAOQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAegIAagcQARgUAWgmQASgYALgFQAkgSARgKQAcgSAJgXQAEgMAFgXQADgKAJgNQAWAGAfgEQAegEAQgGQAYgIANgRQAMgPALgkQANgaAngjQCwiVDygtQDrgsDnBBIB0AiQBDARAyABQAWAAA5gFQAxgEAdACQAvAEA8AYIBmAsQBtAtBqANIBVAIQAfAFAZAHQgHAHgDANQgDANAEAaIAXCOQAFAkACASQABAbgFAWQgHADgGAFQgKAJgCAPQgDAPAEAOQADALAHAQIAMAaQAMAdADAwQAYD7hLDzQgfBmgpBBQgiA0hVBaIhBBBQglAighAXQgyAihnAqIjEBTIgXgFgAxLC7QgEgNgFgeQgFgcgFgOQgJgfgcg6QgvhtALh5QA4gFAvAhQAAAYAHAgQAZCAgBB8IgCBWIABA9QgcgagNg1gARkDTQANhHAHhIIAEg5QAFhkgIhoQgEg1gJglQAIgJAIgSQAHgJATgLQAYgQAGgBQAVgEAMAGQALAFAHANQAFAMgCAOQAAARgRAgQggA9gNAjQgfBTgDBVQgBAdACAcQADAqgCAPQgEAhggA1IgEgBg");
	this.shape_83.setTransform(-41.9327,-105.8631);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("ADhP4IgGgFIgQACQhUAHhqgHQg6gDiCgOQiYgQhJgUQhTgViIhAQg+gbgigSQgzgbgngbQhEgyhOhcQhFhSgnhHQgcgygQgwQgYAJgdgQQgSgKgXgfQgJgLgGgMIgBABQgTAVgcgFQgNgCgKgIQgLgKgEgMQgEgMABgUQABgXgCgHQAAgFgMggQgKgZgMg2QgIgfAJgPQAHgMAPgDIAKAAIgIgQIgEgHQgLAGgPAAQgSABgNgNQgKgLgCgTQgCgMABgYQACg7gPhZQgYiLgBgKIgCgUQAAgcAOgNQAGgFAOgFQAPgGAFgEQAKgHAGgOIAKgaQALgiAYgCQAHgBAMAEIAUAIIAUABIADABQARgIAJgGQABgOAIgTQAGgOAHgJQALgLANABIABAAIAIgOQAXgnAUgLQAPgJARACQAIABAHADQCoiTCMhRQC+htC3gLQAUgCBZAAQBDgBAqgGQAWgEA8gNQA1gOAegCQAOgCARABQAwgBBDALQB0ATAfABQAhACA1gCIBVgCQBTABBnASQA+AKB6AcIGIBZQA5AOADAfQAEAZgdAPQgYAMghAAQAVAYAdAMQAeAMAfgCQASgBAlgGQAfgDASAOQAUAOAAAdIgBAHQgBAfgWAWQgTASgeALQgUAHglAHQAYAJgEAgQgDAfgYAKQgqASg6glQgWgQhLhCQgbgYgYgQQADAWABAcQABAsgGBBIgIBRQAPgMAOgHQADgJAIgGQAMgLAVgCQAIgBAdAAQAOABAagBQAXACAPAHQAcAOAQAlQAfBGgYBEQgFAQgLAVIgSAjQgWAtgUBNQgPA7AEAjIAGAgQAEATABAMQAAAYgSAuQgQArgLAZQgbA3ggALQgSAGgVgFIgPgGIgJAhQgVBMgcA7QghBBg6BFQglArhLBLQhIBHglAaQgtAfhaAmIjcBiQgkAQgWAAQgQAAgNgJgADzOXIAXAFIDEhTQBngqAygiQAhgXAlgiIBBhBQBVhaAig0QAphBAfhmQBLjzgYj7QgDgwgMgdIgMgaQgHgQgDgLQgEgOADgPQACgPAKgJQAGgFAHgDQAFgWgBgbQgCgSgFgkIgXiOQgEgaADgNQADgNAHgHQgZgHgfgFIhVgIQhqgNhtgtIhmgsQg8gYgvgEQgdgCgxAEQg5AFgWAAQgygBhDgRIh0giQjnhBjrAsQjyAtiwCVQgnAjgNAaQgLAkgMAPQgNARgYAIQgQAGgeAEQgfAEgWgGQgJANgDAKQgFAXgEAMQgJAXgcASQgRAKgkASQgLAFgSAYQgWAmgRAUQgaAcgeAIQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAQASgOAlAAIAJAAQAbAAAVADQBLAJA7A1QAiAfgGAbQgBAJgFAIIACAJQACANABAbIAJEmQAEBeAJAoQAeCNCVCWQBJBKBAAoQApAZBPAkQCFA9BIATQBBASCIAQQB7ANA9ADQBmAGBSgIQATgCANAAQARAAAKADgAzojIQgLB5AvBtQAcA6AJAfQAFAOAFAcQAFAeAEANQANA1AcAaIgBg9IAChWQABh9gZh/QgHggAAgYQgpgdguAAIgQABgARzlKQgGABgYAQQgTALgHAJQgIASgIAJQAJAlAEA1QAIBogFBkIgEA5QgHBIgNBHIAEABQAgg1AEghQACgPgDgqQgCgcABgdQADhVAfhTQANgjAgg9QARggAAgRQACgOgFgMQgHgNgLgFQgHgEgJAAQgIAAgJACg");
	this.shape_84.setTransform(-35.4244,-107.5562);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A0715E").s().p("AEzOGQgSgFgpAEQhRAIhmgGQg/gDh5gOQiIgPhBgSQhHgUiGg9QhOgkgpgYQhAgphJhJQiViWgeiNQgJgogEheIgJkmQgCgbgCgNIgBgJQAEgIACgJQAGgagiggQg7g1hLgJQgWgDgaAAIgKAAQgkAAgSAOQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAegIAagcQAQgTAWgnQATgXAKgGQAkgRARgLQAdgSAJgXIAIgjQADgKAJgNQAXAGAegEQAegEAQgGQAYgIANgRQAMgPALgkQAMgaAogjQCviWDygtQDrgrDnBBIB0AiQBDARAyABQAWAAA5gFQAxgEAdACQAvAEA8AYIBmAsQBtAtBqANIBVAJQAfAEAZAHQgHAHgDANQgDANAEAaIAXCPQAFAjACATQABAbgFAVQgHADgGAFQgKAKgCAPQgDAOAEAOQADAMAHAPIAMAbQALAdADAwQAZD7hLDzQgfBmgqBBQgiA0hUBZIhBBBQglAighAXQgzAihmArIjEBSIgXgFgAxKC7QgDgNgGgeQgFgcgFgOQgJgfgcg6QgvhtALh4QA3gGAwAhQAAAYAHAgQAZCAgBB8IgCBVQAAAjABAbQgbgagOg1gARjDUQANhHAHhIIAEg5QAFhkgIhoQgEg1gJglQAIgJAIgSQAHgJATgMQAYgPAGgBQAVgEAMAFQALAFAHAOQAFAMgCAOQgBARgQAgQggA9gNAjQggBTgCBWQgBAcACAcQACAqgBAPQgEAhghA1IgDgBg");
	this.shape_85.setTransform(-41.9327,-105.822);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("ADgP4IgGgFIgQACQhUAHhpgHQg7gDiBgOQiYgRhJgTQhTgWiIg/Qg9gcgigSQgzgagngcQhEgyhOhbQhFhTgnhGQgcgygQgwQgYAIgcgQQgTgKgXgeQgJgLgGgMIgCAAQgRAWgcgFQgNgCgLgJQgLgJgDgNQgEgLAAgUQABgXgBgHQgBgFgLggQgLgZgMg2QgHgfAJgPQAGgMAPgDIAKAAIgJgQIgCgHQgMAGgOAAQgTAAgMgMQgLgLgCgTQgCgMABgYQACg7gPhZQgYiLgBgKIgCgUQAAgcAOgNQAGgFAOgFQAPgGAFgEQAJgHAHgOIAJgaQAMgiAXgCQAIgBAMAEIATAIIAUABIADABQARgIAJgGQABgOAIgTQAGgOAHgJQALgLANABIACAAIAGgOQAYgnAUgLQAPgJARACQAJABAGADQCniUCNhRQC+hsC2gMQAVgBBYgBQBDAAAqgGIBSgSQA1gNAegDQAOgBARAAQAwAABDALQBzASAgACQAhACA1gCQBEgCARAAQBTABBnARQA+AKB6AcIGJBaQA4AOAEAfQADAZgdAPQgYAMgiAAQAWAYAeAMQAdAMAfgCQASgBAlgGQAggDARAOQAVAOgBAdIgBAHQgBAfgWAWQgSASgfAMQgUAGglAHQAYAJgEAgQgDAfgYALQgpASg7gmQgWgPhMhDQgagXgYgRQADAXABAbQABAtgGBAIgIBRQAPgLAOgHQADgJAIgHQAMgKAVgCQAIgBAdAAQANABAagBQAYABAPAIQAcAOAQAlQAfBGgYBEQgFAQgMAVIgSAjQgWAtgTBNQgQA7AEAjIAHAgQAEATABAMQAAAYgSAuQgRArgLAZQgbA3gfALQgTAGgUgFIgPgGIgJAiQgVBLgdA7QggBBg6BFQgmArhLBKQhHBHglAaQgtAfhaAnIjcBhQglAQgVAAQgQgBgNgIgADyOXIAXAFIDDhSQBngrAygiQAigXAlgiIBAhBQBVhZAhg0QArhBAfhmQBKjzgYj7QgDgwgLgdIgMgbQgHgPgDgMQgEgOADgOQACgPAKgKQAGgFAHgDQAFgVgBgbQgCgTgGgjIgWiPQgEgaADgNQADgNAHgHQgZgHgfgEIhVgJQhqgNhtgtIhmgsQg8gYgvgEQgdgCgxAEQg5AFgWAAQgygBhDgRIh0giQjnhBjrArQjyAtivCWQgoAjgMAaQgMAkgLAPQgNARgYAIQgQAGgeAEQgfAEgWgGQgJANgDAKIgIAjQgKAXgcASQgRALgkARQgKAGgTAXQgWAngRATQgZAcgeAIQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQARgOAlAAIAJAAQAbAAAWADQBKAJA8A1QAhAggFAaQgCAJgEAIIABAJQACANACAbIAJEmQAEBeAJAoQAeCNCVCWQBJBJBAApQAoAYBPAkQCGA9BHAUQBBASCIAPQB6AOA+ADQBmAGBRgIQASgCAOAAQARAAAKADgAznjHQgLB4AvBtQAcA6AJAfQAFAOAFAcQAGAeADANQAOA1AbAaQgBgbAAgjIABhVQACh9gZh/QgHggAAgYQgpgcgtAAIgRABgARylJQgGABgYAPQgTAMgHAJQgJASgHAJQAIAlAFA1QAIBogGBkIgDA5QgHBIgNBHIADABQAhg1AEghQABgPgCgqQgCgcABgcQAChWAghTQANgjAgg9QAQggABgRQACgOgFgMQgHgOgLgFQgHgDgJAAQgIAAgJACg");
	this.shape_86.setTransform(-35.4002,-107.5312);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A0715E").s().p("AEyOGQgSgFgpAEQhRAIhmgGQg+gEh5gNQiIgQhBgRQhHgUiFg9QhOgkgpgZQhAgohJhJQiViXgeiMQgJgogEheIgKkmQgBgbgCgMIgCgKQAFgHABgJQAGgbgiggQg7g1hLgJQgVgDgaAAIgKAAQgkAAgSAOQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAegIAZgcQARgTAWgnQASgXALgGQAjgRARgLQAdgSAJgXQAEgMAEgXQAEgKAIgNQAXAGAegEQAegEAQgGQAYgIANgRQAMgPALgkQAMgaAogjQCviWDygtQDqgsDnBBIB0AjQBDARAyABQAWAAA5gFQAxgEAdACQAvAEA9AYIBmAsQBsAuBqAMIBVAJQAfAEAaAIQgIAGgDANQgDANAEAbIAXCOQAFAkACASQABAcgFAVQgHADgGAFQgKAKgCAPQgDAOAEAOQADALAHAQIAMAbQALAcADAxQAYD7hLDzQgfBmgqBBQghA0hVBZIhBBBQglAighAXQgyAihmAqIjEBSIgXgFgAxJC7QgDgNgGgeQgFgcgEgOQgKgfgcg6QgvhtALh4QA3gGAwAiQAAAYAGAgQAaB/gBB8IgCBVQAAAiABAcQgbgagOg1gARhDVQANhHAHhIIAFg5QAFhkgIhoQgFg1gIglQAHgJAJgTQAHgIATgMQAYgPAGgBQAVgFAMAGQALAFAHAOQAFAMgCANQgBASgRAgQgfA9gNAjQggBTgCBWQgBAcABAcQADAqgCAPQgEAiggA0IgEgBg");
	this.shape_87.setTransform(-41.9327,-105.7881);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AD7QBQgQAAgMgJIgGgFIgQACQhUAHhpgHQg7gDiBgOQiXgRhKgUQhSgViIg/Qg9gcgigSQgzgbgmgbQhEgyhOhbQhFhTgnhGQgcgygQgwQgYAJgcgQQgSgKgYgeIgPgYIgBABQgSAVgcgFQgNgCgKgIQgLgKgEgMQgEgMAAgTQABgYgBgHQgBgFgLggQgLgZgMg2QgHgfAIgOQAHgMAQgDIAJgBIgIgQIgDgHQgMAHgPAAQgSAAgMgMQgLgMgCgTQgCgLABgYQACg7gPhaQgYiKgBgLIgCgTQgBgdAPgMQAFgGAPgFQAOgFAGgEQAJgIAGgOIAKgaQALgiAXgCQAIgBAMAFIATAHIAUACIAEAAQAQgHAKgHQAAgNAIgTQAGgPAHgIQALgMANABIABAAIAIgNQAXgoAUgLQAPgIARABQAIABAHAEQCmiUCNhRQC+htC2gMQAUgBBZgBQBDAAAqgGIBSgSQA0gNAfgDQAOgBARAAQAwAABCALQB1ASAfACQAhACA0gCQBGgCAQAAQBTABBnARQA+AKB6AcIGJBbQA4ANAEAfQADAZgdAPQgYAMghABQAVAYAeAMQAdAMAfgCQASgBAlgGQAggDASAOQAUAOgBAdIAAAHQgCAfgWAWQgSASgfAMQgUAGglAHQAYAJgEAgQgDAfgZALQgpASg6gmQgWgPhMhDQgagXgYgRQADAXABAbQAAAtgFBBIgIBQQAOgLAOgHQADgJAIgGQANgLAVgCQAIgBAdAAQANABAagBQAYACAPAHQAcAOAQAlQAfBGgYBFQgGAPgLAVIgSAjQgWAugUBNQgQA7AEAiIAHAhQAEASABANQAAAYgSAuQgRArgLAZQgbA2ggAMQgSAGgUgFIgPgGQgGAQgEARQgUBLgdA8QghBBg6BEQglArhLBLQhHBGglAaQgtAfhaAmIjcBhQgjAQgVAAIgCAAgADxOYIAWAFIDEhTQBmgqAzgiQAhgXAlgiIBAhAQBVhaAig0QAphBAghlQBLj0gYj7QgDgwgMgcIgMgbQgHgQgCgLQgFgOADgPQACgPALgJQAGgFAHgDQAEgWgBgbQgBgTgGgjIgWiPQgEgaADgNQADgNAHgHQgZgHgfgFIhVgIQhqgNhtgtIhmgtQg8gYgvgEQgdgCgxAEQg5AFgWAAQgyAAhEgSIhzgiQjnhBjrAsQjyAtiuCVQgoAjgMAaQgMAlgMAPQgMAQgYAJQgQAFgeAFQgfAEgWgHQgJAOgDAKQgFAXgEAMQgJAXgcASQgRAKgkASQgKAFgSAYQgWAmgRAUQgaAcgdAIQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQARgOAlAAIAJAAQAaAAAWADQBLAJA7A1QAiAfgGAbQgCAJgEAIIABAJQACANACAbIAKElQAEBeAJAoQAeCNCVCWQBIBJBAApQApAYBOAkQCFA9BIAUQBAASCIAQQB6ANA+AEQBlAFBSgHQASgCAOAAQARAAAKADgAzmjHQgLB4AuBtQAdA6AJAfQAFAOAFAdQAFAeAEANQANA1AcAZQgCgbAAgiIAChVQACh9gah/QgHggAAgYQgogdguAAIgQABgARxlHQgHAAgYAQQgTALgGAJQgJATgIAIQAJAlAEA2QAIBngFBlIgEA5QgHBHgNBHIADACQAhg1AEghQABgQgCgpQgCgcABgdQAChVAghTQAOgkAfg9QARggABgRQABgOgFgMQgGgNgLgFQgHgDgJAAQgIAAgJACg");
	this.shape_88.setTransform(-35.3752,-107.5305);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#A0715E").s().p("AExOHQgSgGgpAFQhRAHhmgGQg+gDh5gOQiHgQhBgRQhHgUiFg9QhOgkgpgZQg/gohJhJQiViWgeiNQgJgogEheIgKklQgBgbgDgNIgBgJQAEgIACgJQAGgbgigfQg7g1hLgJQgVgDgbAAIgJAAQglAAgRAOQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAegIAZgcQARgUAWgmQASgYAKgFQAkgSARgKQAcgSAJgXQAEgMAFgXQADgKAIgOQAXAHAfgEQAdgFAQgFQAYgJANgQQAMgPALglQAMgaAogjQCuiVDyguQDqgsDnBCIB0AiQBDASAyAAQAWAAA5gFQAxgEAeACQAvAEA8AYIBmAtQBsAtBrANIBUAJQAfAEAaAIQgIAGgDANQgCANAEAaIAWCQQAFAjACATQABAbgFAVQgHADgGAFQgKAKgCAPQgDAOAEAPQADALAHAQIALAaQAMAdADAwQAYD7hLD0QggBlgpBBQgiA0hVBZIhABBQgmAiggAXQgzAhhmArIjDBSIgXgFgAxHC8QgEgNgFgeQgGgdgEgOQgKgfgcg6QgvhtALh4QA3gFAvAhQABAYAGAgQAaCAgBB8IgCBVIABA9QgbgZgNg1gARgDXQANhIAHhHIAEg5QAFhlgHhnQgFg2gJglQAIgJAJgSQAHgJATgLQAYgQAGgBQAVgEAMAGQALAFAHANQAFAMgCAOQgBARgRAgQgfA9gOAkQgfBTgDBVQgBAdACAcQACAqgBAPQgEAhghA1IgDgBg");
	this.shape_89.setTransform(-41.9327,-105.759);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("ADdP5IgFgFIgQACQhUAGhpgHQg6gDiBgOQiXgRhJgUQhSgViIhAQg9gbgigSQgzgbgngbQhDgyhOhbQhFhTgnhGQgcgygQgvQgYAIgcgQQgSgKgXgeQgJgMgHgLIgBAAQgSAWgbgGQgOgCgKgIQgLgKgEgMQgDgLgBgUQACgXgCgIQgBgFgLgfQgLgagLg2QgIgeAJgPQAHgMAPgDIAKAAIgJgQIgDgHQgMAGgOAAQgTAAgMgMQgLgLgCgTQgBgMABgYQABg7gPhZQgYiLgBgKIgCgUQgBgcAPgNQAFgFAOgFQAPgGAFgEQAJgHAHgOIAJgaQAMgiAXgCQAHgBAMAEIATAIIAVABIADABQARgIAJgGQAAgOAIgTQAGgOAHgJQALgLANABIACAAIAHgOQAXgnAUgLQAPgJARACQAIABAHADQCmiUCMhRQC9htC3gLQAUgCBZgBQBDAAApgGQAXgEA8gOQA0gNAfgDQAPgBAQAAQAvAABEALQB0ASAfACQAgACA2gCQBFgCAPAAQBUABBnARQA+ALB6AcIGJBaQA5AOAEAfQACAZgcAPQgYAMgiABQAVAXAeANQAdALAggBQARgCAmgFQAfgDASANQAUAPAAAdIgBAHQgBAfgWAWQgTASgfAMQgTAGgmAHQAYAJgEAgQgDAfgYALQgqASg6glQgXgQhKhDQgbgXgYgRQADAXABAbQAAAtgFBBIgIBRQAOgMAOgHQADgJAIgGQANgLAVgCQAIgBAdAAQANABAbgBQAXACAPAHQAcAOAQAmQAfBFgZBFQgFAQgLAVIgSAjQgXAtgTBNQgQA8AEAiIAGAgQAEATABANQAAAXgSAuIgcBFQgaA2ghALQgRAGgVgFIgPgGQgFARgFARQgUBLgdA7QggBBg6BEQgmArhLBLQhHBGglAaQgtAfhaAmIjbBgQgkAQgWAAQgQAAgNgIgADvOYIAXAFIDEhSQBlgqAzgiQAggXAmgiIBAhAQBVhaAigzQAqhBAfhmQBLjzgYj7QgCgxgMgcIgMgbQgHgQgDgLQgEgOADgPQACgPALgJQAGgFAHgDQAEgWgBgbQgBgSgGgkIgWiPQgEgaADgNQACgNAIgHQgZgHgfgFIhVgJQhrgMhsgtIhmgtQg8gYgvgEQgdgCgxAEQg5AFgWAAQgygBhDgRIh0gjQjnhBjrAsQjyAtiuCWQgnAjgNAaQgLAkgMAPQgNARgXAIQgRAGgdAEQgfAEgWgGQgJANgDAKQgEAXgFAMQgIAXgdASQgRALgkARQgKAGgSAXQgWAngRATQgZAcgdAIQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQAQgOAmAAIAJAAQAaAAAVAEQBLAIA7A1QAiAggGAbQgBAJgFAHIACAKQACANABAaIAKEmQAEBeAKAoQAeCMCVCWQBIBJBAApQApAYBOAkQCEA9BIAUQBAASCIAQQB6ANA9AEQBlAGBSgIQASgCAOAAQAQAAAKADgAzmjGQgKB4AuBtQAcA6AKAfQAFAOAFAcQAFAeAEANQANA1AcAZIgBg9IABhVQABh9gah+QgGggAAgYQgpgdgvAAIgPABgARwlGQgHABgYAPQgTALgGAJQgKATgHAIQAIAmAFA1QAHBogEBkIgEA5QgIBIgNBHIAEABQAgg0AEgiQACgPgDgpQgBgdABgcQAChWAghTQANgjAgg+QARggABgRQABgNgFgNQgGgNgLgFQgHgDgKAAQgHAAgJACg");
	this.shape_90.setTransform(-35.3502,-107.5062);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A0715E").s().p("AEwOHQgSgGgpAEQhRAIhlgGQg+gEh5gNQiHgQhBgSQhHgUiEg8QhOglgpgYQg/gphJhJQiViWgeiMQgJgogEheIgLklQgBgbgCgNIgCgJQAFgIABgJQAGgagiggQg6g1hLgJQgWgDgaAAIgJAAQglAAgRAOQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAegIAZgcQAQgUAWgmQASgYALgFQAjgSARgKQAdgSAIgXQAEgMAFgXQADgKAJgOQAWAHAfgEQAdgEAQgGQAYgIANgRQALgPAMglQAMgaAogjQCuiWDxgtQDqgsDnBCIB0AiQBDASAyAAQAWAAA5gFQAxgEAeACQAvAEA8AYIBmAtQBsAtBrANIBVAJQAfAEAZAIQgHAGgDANQgDAOAEAaIAWCPQAFAkACASQABAcgFAVQgHADgGAFQgKAKgCAPQgDAOAEAOQADALAHAQIALAbQAMAdADAwQAXD7hLD0QgfBlgqBBQgiA0hUBZIhBBAQglAighAXQgyAihmAqIjDBSIgXgFgAxGC8QgEgNgFgeQgGgdgEgOQgKgfgcg6QgvhtALh4QA3gFAvAhQAAAYAHAgQAaCAgBB8IgCBVQAAAiACAbQgcgZgNg1gAReDYQANhIAIhHIAEg5QAFhlgHhnQgFg2gJglQAIgJAJgSQAHgJATgMQAYgPAGgBQAVgFAMAGQALAFAHAOQAFAMgCAOQgBARgRAgQgfA9gOAkQggBTgCBVQgBAdABAcQADAqgCAPQgEAhggA1IgEgBg");
	this.shape_91.setTransform(-41.9464,-105.709);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("ADcP4QgEgCgCgDIgQACQhTAHhpgHQg6gDiBgPQiXgRhJgTQhSgWiHg/Qg9gcgigRQgzgbgmgbQhEgzhNhaQhFhTgnhGQgcgygQgwQgYAJgcgQQgSgKgXgeIgPgYIgCABQgSAVgbgFQgOgCgKgIQgLgKgEgMQgDgMAAgTQABgYgCgHQAAgFgMgfQgKgagMg2QgIgeAJgPQAHgMAPgDIAJAAIgIgQIgDgHQgMAGgOAAQgTAAgMgMQgLgMgCgSQgBgMAAgYQACg7gPhZQgZiLgBgKIgCgUQAAgcAOgNQAGgFAOgFQAOgGAGgEQAJgHAGgOIAJgaQAMgiAXgCQAIgBAMAEIATAIIAUABIADABQAQgIAKgGQAAgOAIgTQAGgOAHgJQALgLANABIABAAIAIgOQAXgnAUgLQAOgJARACQAJABAGADQCmiUCMhRQC+htC2gMQAUgCBZAAQBDAAAqgHQAWgDA8gOQA0gOAegCQAPgCARABQAvgBBDALQB0ATAgACQAgACA1gCIBWgCQBTAABnASQA+AKB6AcIGKBbQA4ANAEAgQADAZgdAPQgYAMgiABQAVAXAeANQAdAMAggCQASgBAlgGQAggDASAOQATAOAAAdIgBAHQgBAfgWAWQgTATgfALQgTAHgmAHQAYAJgEAgQgDAfgZALQgpASg6gmQgWgPhMhEQgagXgYgRQADAXABAbQAAAtgGBBIgIBRQAPgLAOgHQADgJAIgHQAMgKAVgCQAIgBAdAAQAOABAagBQAYABAPAIQAcAOAPAlQAfBGgYBFQgFAPgMAWIgSAjQgWAtgUBNQgQA8AEAiIAHAgQADATABANQAAAYgSAuIgcBEQgbA2gfALQgTAGgUgFIgPgGIgJAiQgVBLgdA7QghBBg6BEQglArhLBKQhHBHglAZQgtAfhaAmIjbBgQgkAQgVAAQgQAAgNgJgADuOYIAXAFIDDhSQBmgqAyghQAhgXAlgiIBBhAQBUhaAigzQAqhBAfhmQBLjzgXj7QgDgxgMgcIgLgbQgHgQgDgLQgEgOADgPQACgPAKgJQAGgFAHgDQAFgWgBgbQgCgTgFgjIgWiQQgEgaADgNQADgNAHgHQgZgHgfgFIhVgIQhrgNhsgtIhmgtQg8gZgvgDQgegCgxAEQg5AFgWAAQgygBhDgRIh0gjQjnhBjqAsQjxAtiuCWQgoAjgMAaQgMAkgLAPQgNARgYAJQgQAFgdAFQgfADgWgGQgJANgDALQgFAXgEALQgIAXgdASQgRALgjARQgLAGgSAXQgWAngQATQgZAdgeAIQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQARgPAlAAIAJAAQAaAAAWAEQBLAIA6A1QAiAggGAbQgBAJgFAHIACAKQACANABAaIALEmQAEBeAJAoQAeCMCVCWQBJBJA/AoQApAZBOAkQCEA9BHAUQBBARCHAQQB6AOA+AEQBkAGBRgIIAegCQATAAAKADgAzljGQgLB4AvBtQAcA6AKAfQAEAOAGAcQAFAeAEANQANA1AcAZQgCgbAAgiIAChVQABh9gah+QgHggAAgYQgpgdguAAIgPABgARulFQgGAAgYAQQgTALgHAJQgJATgIAIQAJAmAFA1QAHBogFBlIgEA4QgIBIgNBHIAEABQAgg0AEgiQACgPgDgpQgBgdABgcQAChWAghTQAOgkAfg9QARggABgRQACgOgFgMQgHgNgLgFQgGgDgKAAQgHAAgKACg");
	this.shape_92.setTransform(-35.3252,-107.4812);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A0715E").s().p("AEwOHQgTgGgoAEQhRAIhmgGQg9gEh5gNQiHgRhAgRQhHgUiEg9QhOgkgpgZQg/gohIhJQiViWgeiMQgJgogFheIgKklQgCgbgCgMIgCgKQAFgHABgJQAGgbgiggQg6g1hLgJQgVgDgbAAIgJAAQgkAAgSAOQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAegIAZgcQARgUAVgmQASgYALgFQAjgSARgKQAcgSAJgXQAEgMAFgXQADgKAIgOQAXAHAegEQAegEAQgGQAYgIAMgRQAMgPALglQAMgaAogjQCuiWDxgtQDqgsDnBBIB0AjQBDASAyAAQAWAAA5gFQAxgEAdACQAvAEA9AYIBmAtQBsAuBqAMIBVAJQAfAFAaAHQgIAHgDANQgDANAEAaIAWCQQAGAjABATQABAbgEAWQgHADgHAFQgKAJgCAPQgDAPAEAOQADALAHAQIAMAbQALAcADAxQAXD7hLD0QggBlgpBBQgiA0hVBZIhABAQglAighAXQgyAhhmAqIjDBSIgWgFgAxEC8QgEgNgGgeQgFgdgEgOQgKgfgcg6QgvhtAKh4QA3gFAvAhQABAYAGAgQAaCAgBB8IgBBVQAAAiABAbQgbgagNg0gARdDZQANhIAIhHIAEg5QAFhlgHhnQgFg2gIglQAIgJAJgTQAGgJATgLQAYgPAHgBQAVgFAMAGQALAFAGAOQAFAMgCANQAAASgRAgQggA9gOAkQgfBTgDBVQgBAdABAcQADAqgCAPQgEAhggA1IgEgBg");
	this.shape_93.setTransform(-41.9714,-105.684);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AD4QBQgQAAgNgIQgEgCgCgDIgQACQhTAGhpgHQg6gDiBgPQiWgRhJgTQhRgWiHg/Qg9gcgigSQgzgagmgbQhEgzhNhaQhGhTgmhGQgcgygPgvQgZAIgcgQQgSgKgXgeQgIgMgHgLIgBAAQgSAWgcgGQgNgCgLgIQgKgKgEgMQgEgLAAgUQABgXgBgHQgBgFgLggQgLgZgMg2QgIgfAJgPQAGgMAQgCIAKgBIgJgQIgDgHQgLAHgPAAQgTAAgMgNQgKgLgCgTQgCgLABgYQACg7gRhaQgYiKgBgLIgCgTQAAgdAOgMQAFgGAPgFQANgFAGgEQAJgIAHgOIAJgaQALgiAXgCQAIgBAMAFIATAHIAUACIAEAAQAQgHAKgHQAAgNAHgTQAGgPAIgIQAKgMANABIACAAIAGgNQAXgoAVgLQAOgJARACQAJABAGAEQCmiVCLhRQC+htC2gMQAUgCBZAAQBDAAAqgHQAVgDA9gOQA0gOAfgCQAOgCARABQAwgBBCALQB1ATAfACQAhACA0gCIBWgCQBTAABnASQA+AKB6AdIGKBbQA5ANADAfQADAZgdAQQgYAMghAAQAVAYAdANQAeALAfgBQASgCAlgFQAggDASANQAUAPgBAdIAAAHQgCAfgWAWQgTATgfALQgTAHglAHQAXAJgEAgQgDAfgYALQgqASg6gmQgWgPhLhEQgbgXgYgRQADAXABAbQAAAtgGBBIgIBSQAPgMANgHQAEgJAIgGQAMgLAVgCQAIgBAdAAQAOABAagBQAYACAPAHQAbAOAQAmQAfBGgYBEQgGAQgLAVIgSAjQgWAugUBNQgQA7AEAjIAGAgQAEATABANQgBAXgRAuIgcBFQgbA2ghALQgRAGgVgFIgPgGIgKAhQgUBLgdA8QggBAg6BFQgmAqhLBLQhHBGglAZQgtAfhaAmIjaBgQgjAPgVAAIgBAAgADtOZIAWAFIDDhSQBmgqAyghQAhgXAlgiIBBhAQBVhZAhg0QAqhBAghlQBKj0gWj7QgEgxgLgcIgLgbQgHgQgDgLQgFgOAEgPQACgPAKgJQAGgFAHgDQAFgWgBgbQgCgTgFgjIgWiQQgFgaADgNQAEgNAHgHQgZgHgggFIhUgJQhqgMhtguIhmgtQg8gYgvgEQgdgCgxAEQg5AFgXAAQgyAAhDgSIh0gjQjnhBjqAsQjxAtiuCWQgnAjgMAaQgMAlgLAPQgNARgYAIQgQAGgdAEQgfAEgWgHQgJAOgDAKQgEAXgEAMQgKAXgbASQgRAKgkASQgKAFgSAYQgWAmgRAUQgZAcgdAIQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQARgOAlAAIAJAAQAaAAAVADQBLAJA7A1QAhAggFAbQgCAJgFAHIACAKQACAMACAbIALElQAEBeAJAoQAeCMCVCWQBIBJBAAoQApAZBNAkQCEA9BHAUQBBARCGARQB6ANA+AEQBkAGBRgIIAegBQASAAALADgAzkjGQgLB4AvBtQAcA6AKAfQAFAOAEAdQAGAeAEANQANA0AcAaQgCgbAAgiIAChVQABh9gah/QgHgggBgYQgogcguAAIgPAAgARtlEQgGABgYAPQgTALgHAJQgJATgIAJQAJAlAEA2QAIBngFBlIgFA5QgHBHgNBIIADABQAhg1ADghQACgPgDgqQgBgcABgdQADhVAghTQANgkAgg9QARggABgSQABgNgEgMQgHgOgLgFQgHgDgKAAQgHAAgJACg");
	this.shape_94.setTransform(-35.3002,-107.4805);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A0715E").s().p("AEuOHQgSgGgoAEQhRAIhlgGQg+gEh4gOQiHgQhAgSQhHgUiEg8QhNglgpgYQg/gohJhJQiUiWgeiMQgJgogFheIgLklQgBgbgCgMIgCgKQAEgHACgJQAGgbgiggQg7g1hKgJQgWgDgaAAIgJAAQglAAgRAOQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAegIAZgcQAQgUAWgmQASgYAKgFQAkgSARgKQAcgSAJgXQADgMAFgXQADgKAJgOQAWAHAegEQAegEAQgGQAYgIAMgRQAMgPALglQAMgaAogjQCtiWDxgtQDqgsDnBBIB0AjQBDARAyABQAWAAA5gFQAxgEAdACQAvAEA9AYIBmAtQBsAuBrAMIBVAJQAfAFAZAHQgHAHgDANQgDANAEAbIAVCPQAGAkABATQABAbgEAVQgHADgHAFQgKAKgCAPQgDAPAEAOQADALAHAQIAMAbQALAcADAxQAXD7hMD0QgfBlgqBBQgiAzhUBZIhBBBQglAhghAXQgyAihmAqIjCBRIgXgFgAxDC7IgJgqQgGgdgEgOQgKgfgcg6QgvhtAKh4QA3gFAvAhQAAAYAHAgQAaCAgBB8IgBBVIACA9QgcgagNg1gARcDaQANhHAHhIIAFg5QAFhlgHhoQgFg1gIgmQAIgIAIgTQAHgJATgLQAYgPAHgBQAVgFAMAGQALAFAGANQAFANgCANQAAASgRAgQggA9gOAkQggBTgCBVQgCAdACAcQACAqgBAPQgEAhghA1IgDgBg");
	this.shape_95.setTransform(-41.9714,-105.634);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("ADZP5QgDgCgCgDIgQACQhUAGhogHQg6gDiAgPQiWgRhJgTQhRgWiHg/Qg9gcgigSQgygagmgcQhEgyhNhaQhFhTgnhFQgcgygQgwQgYAIgcgQQgSgKgXgeQgJgLgGgMIgBAAQgSAWgcgFQgNgDgKgIQgLgKgEgMQgEgLABgUQAAgXgBgHQgBgFgLggQgLgZgMg2QgIgfAJgOQAHgMAPgDIAJAAIgIgQIgDgHQgMAGgOAAQgSAAgNgMQgKgMgCgTQgCgLABgYQABg7gPhZQgZiLgBgKIgCgUQgBgcAOgNQAGgFAOgFQAOgGAGgEQAJgHAGgOIAJgaQALgiAYgCQAHgBAMAEIATAIIAUABIAEABQAQgIAJgGQABgOAIgTQAFgOAHgJQALgLANABIACAAIAHgOQAWgnAVgLQAOgJARACQAIABAHADQCliUCMhSQC9htC2gMQAUgCBZAAQBDAAApgHQAWgDA8gOQA1gOAegCQAPgCAQABQAwgBBDALQB0ATAgACQAgACA1gCIBWgCQBTAABnASQA+AKB6AdIGKBbQA5ANADAgQADAZgdAPQgYAMghABQAVAYAdAMQAeAMAfgCQASgBAlgGQAggDASAOQAUAPgBAdIAAAHQgCAfgWAWQgTATgfALQgTAHgmAHQAYAJgEAgQgEAfgYALQgpASg6gmQgXgPhLhEQgagXgYgRQADAXABAbQAAAtgGBBIgIBSQAOgMAOgGQADgKAIgGQANgLAVgCQAIgBAdAAQAOABAagBQAXACAPAHQAcAOAQAmQAfBGgZBFQgFAPgLAWIgTAjQgWAtgUBOQgQA7AEAiIAGAhQAEASABANQAAAYgSAuIgcBEQgbA2ggALQgSAHgVgFIgPgHIgJAiQgVBLgdA7QghBBg6BEQglArhLBKQhHBGglAZQgtAfhZAmIjbBfQgkAQgVAAQgQgBgNgIgADrOZIAXAFIDChRQBmgqAyghQAhgXAlgiIBBhAQBUhZAigzQAqhBAfhmQBMjzgXj7QgDgxgLgdIgMgbQgHgPgDgMQgEgOADgOQACgPAKgKQAHgFAHgDQAEgVgBgcQgBgTgGgjIgViQQgEgaADgOQADgMAHgHQgZgIgfgEIhVgJQhrgNhsgtIhmgtQg9gZgvgDQgdgDgxAFQg5AFgWAAQgygBhDgSIh0giQjnhCjqAsQjxAtitCXQgoAjgMAaQgLAkgMAPQgMARgYAJQgQAFgeAFQgeADgWgGQgJANgDALQgFAXgDALQgJAXgcATQgRAKgkARQgKAGgSAYQgWAmgQATQgZAdgeAIQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQARgPAlABIAJAAQAaAAAWADQBKAIA7A2QAiAfgGAbQgCAJgEAIIACAJQACANABAbIALElQAFBdAJApQAeCLCUCWQBJBJA/AoQApAZBNAkQCEA9BHAUQBAASCHAQQB5ANA+AEQBkAGBRgHIAegCQASAAAKADgAzkjFQgKB4AvBtQAcA6AKAfQAEAOAGAcIAJArQANA1AcAZIgCg9IABhVQABh8gah/QgHggAAgYQgpgdguAAIgPABgARslDQgHABgYAPQgTAMgHAJQgIASgIAJQAIAlAFA2QAHBogFBlIgFA5QgHBHgNBHIADABQAhg0AEgiQABgPgCgpQgCgdACgcQAChWAghTQAOgkAgg9QARggAAgRQACgOgFgMQgGgOgLgFQgHgDgJAAQgIAAgJACg");
	this.shape_96.setTransform(-35.2752,-107.4562);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#A0715E").s().p("AEtOHQgSgFgoAEQhRAHhlgGQg9gEh4gOQiHgQhAgSQhHgUiDg8QhOglgogYQg/gohJhJQiUiWgeiMQgJgogFhdIgLklQgCgbgCgNIgBgJQAEgIABgJQAGgagiggQg6g1hLgJQgVgDgaAAIgJAAQglgBgRAPQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAegIAYgdQARgTAWgmQARgYALgGQAjgRARgKQAcgTAJgXQAEgLAEgXQADgLAJgNQAWAGAfgDQAdgFAQgFQAYgJAMgRQAMgPALgkQAMgaAogjQCtiXDxgtQDpgsDnBCIB0AiQBDASAyABQAWAAA5gFQAxgFAeADQAvADA8AZIBmAtQBsAtBrANIBVAJQAfAFAZAHQgHAHgDANQgDANAEAaIAVCQQAGAkABATQABAbgEAWQgHADgHAFQgKAJgCAPQgDAPAEAOQADALAHAQIALAbQAMAdADAwQAXD8hMDzQggBmgqBAQghA0hVBZIhABAQglAhghAXQgyAihmApIjCBRIgXgFgAxCC8IgJgrQgGgcgEgOQgKgfgcg6QgvhtAKh4QA2gGAwAiQAAAYAHAgQAaCAgBB7QgBA5AAAcQAAAiACAbQgcgZgNg1gARaDbQANhHAIhHIAEg5QAGhlgHhoQgFg2gIglQAHgJAJgSQAHgJATgMQAYgPAHgBQAVgFAMAGQALAFAGAOQAFAMgCAOQAAARgSAgQgfA9gOAkQggBTgDBWQgBAcACAdQACApgCAQQgEAhggA1IgEgCg");
	this.shape_97.setTransform(-41.9714,-105.605);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("ADYP5QgDgCgCgDIgRACQhSAGhpgHQg5gEiBgOQiVgRhJgUQhRgWiHg/Qg8gcgigRQgzgbglgbQhEgyhNhbQhFhSgnhGQgcgygPgvQgZAIgbgQQgSgKgXgeQgKgMgFgLIgCAAQgSAWgbgGQgNgCgKgIQgMgKgDgMQgEgLAAgUQABgXgCgHQAAgFgMggQgLgZgLg2QgIgfAIgOQAHgMAPgDIAKAAIgJgQIgDgHQgLAGgPAAQgSAAgMgMQgLgMgCgTQgCgLABgYQACg7gQhZQgaiLAAgKIgCgUQgBgcAOgNQAGgFAOgFQAOgGAGgEQAIgHAHgOIAJgaQALgiAXgCQAIgBAMAEIATAIIAUABIADABQAQgIAKgGQAAgOAIgTQAFgOAHgJQAMgLAMABIACAAIAHgOQAXgnAUgLQAOgJARACQAIABAHADQCliVCLhRQC9huC2gLQAUgCBZAAQBDgBAqgGQAWgEA8gOQA0gNAegDQAPgBARAAQAvAABDALQB0ATAgABQAgACA1gCIBWgCQBTABBnASQA/AKB5AcIGLBcQA4ANAEAgQADAZgdAPQgZANghAAQAVAYAeAMQAdAMAggBQARgCAmgFQAfgDATANQATAPAAAdIgBAHQgBAggXAWQgSASggAMQgTAGglAHQAYAJgFAhQgDAfgZALQgpASg6gmQgXgQhLhDQgbgYgXgRQADAXABAcQAAAtgGBBIgIBRQAOgLAOgHQADgJAIgHQAMgKAWgCQAHgBAeAAQANABAbgBQAXABAQAIQAcAOAOAmQAgBGgZBFQgFAPgMAWIgSAjQgWAtgVBOQgQA7AEAiIAHAhQADATABAMQAAAYgSAuQgRArgLAZQgcA2gfAMQgSAGgVgFIgOgHIgKAiQgVBLgdA7QghBBg5BEQgmAqhKBKQhIBGglAaQgtAehZAmIjaBfQgkAQgVAAQgQgBgNgIgADqOZIAWAFIDDhRQBmgpAygiQAhgXAlghIBAhAQBVhZAhg0QAqhAAghmQBMjzgXj8QgDgwgMgdIgLgbQgHgQgDgLQgEgOADgPQACgPAKgJQAGgFAIgDQAEgWgBgbQgCgTgFgkIgViQQgEgaADgNQADgNAHgHQgZgHgfgFIhVgJQhrgNhtgtIhlgtQg8gZgvgDQgegDgxAFQg5AFgWAAQgygBhDgSIhzgiQjohCjpAsQjxAtitCXQgoAjgMAaQgLAkgMAPQgNARgXAJQgQAFgdAFQgfADgWgGQgJANgDALQgEAXgEALQgJAXgdATQgQAKgjARQgLAGgRAYQgWAmgRATQgYAdgeAIQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQARgPAkABIAJAAQAbAAAVADQBLAJA6A1QAiAggGAaQgBAJgEAIIABAJQACANACAbIALElQAFBdAIAoQAfCMCUCWQBJBJA/AoQAoAYBNAlQCEA8BHAUQBAASCHAQQB5AOA9AEQBkAGBQgHIAfgCQASAAAKADgAzjjFQgLB4AwBtQAcA6AKAfQAEAOAGAcIAJArQANA1AcAZQgCgbAAgiQAAgcABg5QABh8gah/QgHggAAgYQgpgdguAAIgPABgARqlCQgGABgYAPQgTAMgHAJQgJASgIAJQAJAlAFA2QAHBogGBlIgFA5QgHBHgNBHIAEACQAgg1AEghQACgQgCgpQgCgdABgcQAChWAhhTQAOgkAfg9QASggAAgRQACgOgFgMQgGgOgLgFQgHgDgJAAQgIAAgKACg");
	this.shape_98.setTransform(-35.2502,-107.4312);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A0715E").s().p("AEsOHQgSgFgoAEQhRAHhkgGQg9gEh5gOQiGgQhAgSQhGgUiEg9QhNgkgpgZQg/gohIhJQiUiVgeiMQgJgogFhdIgMklQgBgbgCgNIgCgJQAEgIACgJQAGgagiggQg7g1hKgJQgVgDgaAAIgKAAQgkgBgRAPQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAdgIAZgdQARgTAVgmQASgYAKgGQAkgRAQgKQAcgTAJgXQAEgLAEgXQADgLAJgNQAWAGAfgDQAdgFAQgFQAYgJAMgRQAMgPALgkQAMgaAngjQCtiXDxgtQDqgtDmBCIB0AjQBDASAyABQAWAAA5gFQAxgFAeADQAvADA8AZIBmAtQBsAuBrAMIBVAJQAfAFAZAHQgHAHgDANQgDANAEAbIAVCQQAGAkABASQABAcgEAVQgHADgHAFQgKAKgCAPQgDAPAEAOQADALAHAQIALAbQAMAdADAwQAWD8hMDzQgfBmgqBAQgiA0hUBYIhBBAQglAighAXQgyAhhlAqIjCBQIgXgFgAxBC8QgEgNgFgeQgGgcgEgOQgKgfgcg6QgvhtAKh4QA2gGAwAiQAAAYAHAgQAaCAgBB7QgBA5AAAcQAAAiACAbQgbgZgOg1gARZDcQANhHAHhHIAFg5QAFhlgHhoQgEg2gIglQAHgJAJgTQAHgJATgLQAYgPAHgBQAVgFAMAGQALAFAGAOQAFAMgCAOQAAARgSAgQgfA9gOAkQggBTgDBWQgBAcABAdQACApgBAQQgEAhghA1IgDgCg");
	this.shape_99.setTransform(-41.9714,-105.571);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ADzQCQgQAAgMgJQgEgCgCgDIgQACQhTAGhogHQg5gEiAgOQiWgRhIgUQhRgWiHg/Qg8gcghgRQgzgbgmgbQhDgyhNhbQhFhSgnhGQgcgxgQgwQgXAIgcgQQgSgKgXgeQgJgLgGgMIgCABQgSAVgbgFQgNgDgKgIQgLgKgEgMQgEgLAAgUQABgXgCgHQAAgFgMgfQgKgagMg2QgIgeAIgPQAHgMAPgCIAKgBIgJgQIgDgHQgLAHgPAAQgSAAgMgNQgLgLgCgUQgCgKABgYQABg7gQhaQgZiKgBgLIgCgTQAAgdAOgMQAFgGAOgFQAOgFAGgEQAJgIAGgOIAJgaQALgiAXgCQAIgBAMAFIATAHIAUACIADAAQAQgHAKgHQAAgNAIgTQAFgPAIgIQAKgMANABIACAAIAHgNQAWgoAUgLQAPgJARACQAIABAGAEQCliVCLhSQC9huC2gLQAUgCBYAAQBDgBAqgGQAWgEA8gOQA0gNAfgDQAOgBARAAQAwAABDALQB0ATAfABQAhACA1gCIBVgCQBUABBnASQA+AKB6AdIGLBbQA4AOAEAfQADAagdAPQgYAMgiABQAVAYAeAMQAdAMAggCQASgBAlgGQAggDASAOQATAPAAAdIgBAHQgBAggXAWQgSASgfAMQgUAGglAHQAXAJgEAhQgEAfgYALQgpASg7gmQgWgQhLhDQgagYgYgRQADAXAAAcQABAtgGBBIgJBSQAPgMAOgHQADgJAIgGQAMgLAVgCQAIgBAeAAQANABAagBQAYACAPAHQAcAOAPAmQAfBGgYBFQgGAQgLAVIgTAjQgWAugUBNQgQA7ADAjIAHAgQADATABANQAAAYgSAuQgRArgLAZQgbA2ggALQgSAGgVgFIgOgGIgKAhQgVBLgdA8QghBAg6BEQglArhLBJQhHBGglAaQgtAehZAmIjaBeQgjAQgUAAIgCAAgADpOaIAWAFIDChRQBmgpAygiQAhgXAlghIBAhAQBVhZAhgzQAqhBAghlQBMj0gXj7QgDgxgLgcIgMgbQgHgQgCgMQgFgOAEgOQACgPAKgKQAGgFAHgDQAFgWgBgbQgCgTgFgkIgWiQQgEgaADgNQADgNAIgHQgagIgfgEIhVgJQhqgNhtguIhmgtQg8gYgvgEQgdgCgxAEQg5AFgWAAQgygBhDgRIhzgjQjohCjqAsQjwAuitCWQgoAjgLAaQgMAlgLAPQgNARgYAIQgPAGgeAEQgeAEgXgHQgIAOgDAKQgFAXgDAMQgJAXgcASQgRAKgjASQgLAFgRAYQgWAmgQAUQgZAcgdAIQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQARgOAkAAIAJAAQAaAAAVADQBLAJA6A1QAiAggGAbQgBAJgEAHIABAKQACANACAaIAMElQAEBeAJAoQAfCLCUCWQBIBJA/AoQAoAYBOAlQCDA8BHAUQBAASCGARQB5ANA9AEQBkAHBQgIIAegBQASAAALADgAzjjFQgKB4AvBtQAdA6AJAfQAFAOAFAdQAGAdAEANQANA1AbAZQgBgbAAghQgBgdACg4QAAh9gah+QgHggAAgYQgpgdguAAIgPAAgARplBQgGABgYAQQgTALgHAJQgJATgIAIQAJAmAEA1QAHBogGBlIgEA5QgIBIgNBHIAEABQAgg0AEgiQACgPgCgqQgCgcABgdQADhVAghTQAOgkAgg9QARghABgRQACgOgFgMQgHgNgLgFQgHgEgJAAQgIAAgJACg");
	this.shape_100.setTransform(-35.2252,-107.4305);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A0715E").s().p("AEsOHQgTgFgoAEQhQAHhlgGQg8gEh4gOQiHgRg/gRQhHgUiDg9QhNgkgogZQg/gohIhJQiUiVgeiMQgJgogGhdIgLklQgCgbgCgMIgCgKQAFgHABgJQAGgbgiggQg7g1hKgJQgVgDgaAAIgJAAQglAAgRAOQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAegIAYgcQARgUAVgmQASgYALgFQAigSARgKQAcgSAJgXQAEgMAEgXQADgKAJgOQAWAHAegEQAegFAQgFQAXgJANgQQALgQALgkQAMgbAogjQCsiWDxguQDpgsDnBCIB0AjQBDASAyAAQAWAAA5gFQAxgEAdACQAvAEA9AZIBmAtQBsAuBrANIBVAJQAfAEAZAIQgHAGgDANQgDAOAEAaIAVCRQAGAjABATQAAAcgEAVQgHADgGAFQgLAKgCAPQgDAOAEAPQADALAHAQIAMAbQALAcADAxQAWD8hMD0QggBkgpBBQgiAzhVBZIhABAQglAighAWQgyAhhlAqIjCBQIgWgFgAw/C8QgEgNgFgeQgGgcgEgPQgKgfgcg5QgvhtAJh4QA2gFAwAhQAAAYAHAgQAaCAAAB7IgBBVIACA9QgcgagNg0gARXDeQAOhIAIhHIAEg5QAGhlgHhoQgFg2gIgmQAIgIAJgTQAGgJATgLQAZgQAGAAQAVgFAMAGQALAFAGANQAFANgBANQgBASgRAgQggA9gOAkQggBUgDBVQgBAdABAcQADAqgCAPQgEAhghA1IgEgBg");
	this.shape_101.setTransform(-42.0077,-105.53);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("ADVP5IgGgFIgQACQhSAGhogHQg6gDh/gPQiVgShIgTQhRgWiGg/Qg8gcgigSQgzgagmgbQhDgzhNhaQhFhSgmhFQgcgygQgwQgYAIgcgPQgSgLgXgdIgPgYIgBABQgSAVgbgFQgNgCgKgJQgLgJgEgMQgEgMAAgTQABgYgCgHQAAgFgMgfQgKgZgNg2QgHgfAIgOQAHgMAPgDIAJgBIgIgQIgDgGQgMAGgOAAQgSAAgNgMQgKgMgCgUQgCgKABgYQABg7gQhZQgZiLgBgKQgCgLAAgIQgBgdAOgMQAFgGAOgFQAPgFAFgFQAJgHAGgOIAJgaQALgiAXgCQAIgBAMAFIATAHQAFABAOAAIAEABQAQgIAKgGQAAgNAIgTQAFgPAHgJQALgMANACIABAAIAHgOQAXgoAUgLQAOgIARABQAJABAGAEQCkiVCMhSQC8htC2gMQAUgCBYAAQBDAAAqgHQAWgEA8gOQA0gNAfgDQAOgCARABQAwgBBCAMQB1ATAfACQAhACA1gCQBFgDAQABQBUAABnASQA+AKB6AdIGLBcQA5ANADAgQADAZgdAQQgZAMghAAQAVAYAeANQAdAMAggCQASgBAlgGQAggDASAOQAUAPgBAdQgBADABAEQgCAfgXAXQgTASgfAMQgTAGgmAHQAYAJgEAhQgEAfgYALQgqASg6gmQgWgQhLhEQgbgXgYgRQADAXABAcQAAAtgGBBIgIBSQAPgMANgGQAEgKAIgGQAMgLAVgCQAIgBAdAAQAOABAagBQAYACAPAHQAcAOAPAmQAfBHgZBFQgFAPgMAVIgSAkQgXAugUBNQgQA7AEAjIAGAgQAEATAAANQAAAXgSAuIgcBFQgbA2ggALQgSAGgVgFIgPgGQgFAQgEARQgVBLgdA7QghBAg6BEQglArhLBKQhHBFglAZQgtAfhZAmIjZBeQgkAPgVAAQgQAAgNgJgADnOaIAWAFIDChQQBmgqAyghQAggWAlgiIBBhAQBUhZAigzQAqhBAghkQBMj0gXj8QgCgxgMgcIgLgbQgHgQgDgLQgEgPADgOQACgPAKgKQAGgFAHgDQAFgVgBgcQgBgTgFgjIgWiRQgEgaADgOQADgNAIgGQgagIgfgEIhVgJQhqgNhtguIhmgtQg8gZgvgEQgdgCgxAEQg5AFgWAAQgzAAhDgSIhygjQjohCjqAsQjxAuisCWQgnAjgMAbQgLAkgMAQQgMAQgYAJQgQAFgdAFQgfAEgWgHQgIAOgDAKQgFAXgEAMQgIAXgcASQgRAKgjASQgKAFgSAYQgWAmgQAUQgZAcgdAIQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQARgOAkAAIAJAAQAaAAAWADQBKAJA6A1QAiAggFAbQgCAJgEAHIABAKQADAMABAbIAMElQAFBdAJAoQAfCMCTCVQBIBJA/AoQApAZBMAkQCEA9BGAUQBAARCGARQB4AOA+AEQBjAGBRgHQASgCANAAQARAAAKADgAzijEQgKB4AvBtQAcA5AKAfQAFAPAFAcQAGAeADANQAOA0AbAaIgCg9IAChVQAAh8gbh/QgGgggBgYQgpgcgtAAIgPAAgARok/QgHAAgYAQQgTALgHAJQgJATgIAIQAJAmAEA2QAHBogFBlIgFA5QgHBHgOBIIADABQAhg1AEghQACgPgCgqQgCgcACgdQAChVAhhUQANgkAgg9QARggABgSQACgNgFgNQgGgNgMgFQgGgDgJAAQgIAAgJACg");
	this.shape_102.setTransform(-35.1777,-107.43);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A0715E").s().p("AErOHQgTgFgoAEQhQAHhkgHQg9gEh4gNQiGgRg/gSQhGgUiEg9QhMgkgpgYQg/gphHhIQiUiWgeiLQgJgogGhdIgMklQgBgbgDgMIgBgKQAEgHACgJQAFgbgiggQg6g1hKgJQgVgDgaAAIgKAAQgkAAgRAOQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAdgIAZgcQARgUAVgmQASgYAKgFQAjgSARgKQAbgSAJgXIAIgjQADgKAJgOQAWAHAegEQAegFAQgFQAXgJANgQQALgQALgkQAMgbAngjQCsiWDxguQDqgsDmBCIB0AjQBDASAyAAQAWAAA5gFQAxgEAdACQAvAEA9AZIBmAtQBsAuBrANIBVAJQAfAEAZAIQgHAHgDANQgDANAEAbIAVCQQAGAkABATQAAAbgEAWQgHADgGAFQgLAKgCAPQgDAOAEAOQADAMAHAQIAMAbQALAcADAxQAWD8hMD0QggBkgqBBQgiAzhUBZIhBBAQglAhggAXQgyAhhmApIjBBQIgWgFgAw+C8QgEgNgFgeQgGgcgEgPQgKgfgcg5QgvhtAJh4QA2gFAwAhQAAAYAHAgQAaCAAAB7IgBBVIACA9QgbgagOg0gARWDfQAOhIAHhHIAFg5QAFhlgHhoQgEg2gIgmQAIgIAJgTQAGgJATgLQAZgQAGgBQAVgEAMAGQALAFAGANQAFANgBANQgBASgRAgQggA9gOAkQggBUgDBVQgCAdACAcQACAqgCAPQgEAhghA1IgDgBg");
	this.shape_103.setTransform(-42.0077,-105.496);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("ADxQCQgQAAgNgIIgGgFIgQACQhSAGhogIQg5gDh/gPQiVgShIgTQhRgWiGg/Qg8gcghgSQgzgagmgbQhDgzhMhaQhFhSgnhFQgcgygQgvQgXAIgcgQQgSgKgXgeQgJgMgGgLIgCAAQgSAVgagFQgOgCgKgIQgLgKgDgMQgEgMAAgTQABgXgCgHQgBgFgLggQgLgZgMg2QgIgeAJgPQAGgMAPgDIAKAAIgJgQIgDgHQgLAGgPAAQgSAAgMgMQgLgLgCgUQgCgLABgYQABg6gQhaQgZiKgBgLQgCgKAAgJQgBgdAOgMQAFgFAOgFQAOgGAGgEQAJgHAGgPIAJgZQALgjAXgCQAHgBAMAFIAUAHQAFACAOAAIADAAQARgHAJgHQAAgNAIgTQAGgPAHgIQAKgMANABIACAAIAHgOQAWgnAUgLQAOgJARACQAJABAGADQCkiUCLhSQC8huC2gMQAUgCBYAAQBDAAAqgHQAWgEA8gOQA0gNAfgDQAOgCARABQAwgBBCAMQB1ATAfACQAhACA1gCQBFgDAQABQBUAABnASQA+AKB7AdIGLBcQA4AOAEAfQACAagdAPQgYAMgiABQAVAYAeANQAdALAggBQASgCAlgFQAggDASAOQAUAOAAAeQgBADAAAEQgCAfgWAXQgTASgfAMQgUAGglAHQAXAJgEAhQgEAfgYALQgqASg6gmQgWgQhLhEQgagXgYgRQADAXAAAcQAAAtgGBBIgIBSQAPgMANgGQAEgJAIgHQAMgLAVgCQAIgBAdABQAOABAagBQAYABAPAIQAcAOAPAmQAfBGgZBFQgFAQgMAVIgTAkQgWAtgUBNQgRA8AEAiIAHAhQADASABANQAAAYgTAuIgcBEQgbA2ggALQgSAGgUgFIgPgGQgGARgEARQgVBLgdA7QghBAg6BEQglAqhLBKQhHBFglAZQgsAfhZAlIjaBeQgiAPgVAAIgBAAgADmOaIAWAGIDChQQBlgqAyghQAhgWAlgiIBAhAQBVhYAigzQAphBAghlQBMjzgWj8QgCgxgMgdIgLgbQgHgQgDgLQgEgOADgPQACgPAKgKQAGgFAHgDQAFgVgBgcQgBgTgFgjIgWiRQgEgbADgNQADgNAIgHQgagHgfgFIhVgJQhqgMhtguIhmguQg8gYgvgEQgdgCgxAEQg5AFgWAAQgzgBhDgSIhygjQjohCjqAtQjwAtisCXQgnAjgMAaQgLAlgMAPQgMARgYAIQgQAGgdAEQgfAEgWgGQgIANgDAKIgIAjQgJAXgcASQgRALgiARQgLAGgSAXQgVAngQATQgZAcgdAIQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQARgOAkAAIAJAAQAaAAAVAEQBKAIA7A2QAiAfgGAbQgBAJgFAIIACAJQACANACAbIAMEkQAFBeAJAoQAfCLCTCVQBIBJA/AoQAoAZBNAkQCDA9BGAUQBAARCGARQB4AOA9AEQBjAGBRgHQARgBAOAAQARAAAKACgAzhjDQgKB3AvBuQAcA5AKAfQAFAOAFAcQAGAeAEANQANA1AbAZIgCg9IAChUQAAh9gbh+QgHggAAgYQgpgdgtAAIgPABgARnk+QgHABgYAPQgTALgHAJQgJATgIAJQAJAlAEA2QAHBogGBlIgEA5QgIBIgOBHIAEABQAhg0AEgiQACgPgDgpQgBgdABgcQADhWAghTQAOgkAgg+QARggABgRQACgOgFgMQgGgOgMgFQgHgDgJAAQgIAAgIACg");
	this.shape_104.setTransform(-35.1527,-107.4292);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#A0715E").s().p("AEqOHQgTgFgoAEQhQAHhkgGQg8gEh4gOQiGgRg/gSQhGgUiDg9QhNgkgogYQg/gphHhIQiUiVgeiMQgJgngGheIgMkkQgCgbgCgNIgCgJQAFgIABgJQAGgagiggQg7g1hKgJQgVgEgaAAIgJAAQgkAAgRAOQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAdgIAZgcQAQgTAWgnQARgXALgGQAigRARgLQAcgSAIgXQAEgMAFgXQADgKAIgNQAWAGAfgEQAdgEAQgGQAXgIANgRQALgPALglQAMgaAngjQCsiXDwguQDqgsDmBCIB0AjQBDASAyABQAWAAA5gFQAxgEAeACQAvAEA8AYIBmAuQBsAuBrANIBVAJQAfAEAaAIQgIAGgDAOQgDANAEAaIAVCRQAGAkABATQAAAbgEAWQgHADgGAFQgLAKgCAPQgDAOAEAPQADALAHAQIALAbQAMAdADAwQAVD9hMDzQggBlgqBAQghA0hVBYIhABAQglAhghAXQgyAhhlApIjBBQIgWgGgAw9C8QgEgNgFgeQgGgcgEgOQgKgfgcg5QgvhuAJh3QA2gGAvAiQABAYAGAgQAbB/AAB8QgBA4AAAcQAAAiACAbQgbgZgOg1gARUDgQAOhHAIhIIAEg5QAGhlgHhoQgEg2gIglQAHgJAKgTQAGgJATgLQAZgQAGAAQAVgFAMAGQALAFAGAOQAFAMgBAOQgBARgSAgQgfA+gOAkQghBTgDBWQgBAcABAdQADApgCAQQgEAhghA1IgEgCg");
	this.shape_105.setTransform(-42.0077,-105.467);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("ADvQDQgQAAgMgJIgGgFIgQACQhSAGhogIQg5gDh/gPQiUgShJgUQhQgViGhAQg7gbgigSQgzgbglgaQhDgzhNhaQhFhSgmhFQgcgygQgvQgXAIgcgQQgSgKgXgeIgPgXIgCABQgSAVgagGQgOgCgJgIQgLgKgEgMQgEgLAAgUQABgXgCgHQgBgFgLgfQgLgagMg2QgIgeAIgOQAHgMAPgDIAKgBIgJgQIgDgGQgLAGgPAAQgSAAgMgMQgLgMgCgUQgCgKABgYQABg7gQhZQgaiLgBgKQgCgLAAgIQgBgdAOgMQAGgGAOgFQAOgFAFgFQAJgHAGgOIAJgaQALgiAXgCQAHgBAMAFIAUAHQAFABAOAAIADABQARgIAJgGQAAgNAIgTQAFgPAIgJQAKgMANACIABAAIAHgOQAXgoAUgLQAOgIARABQAIABAHAEQCjiVCLhSQC8huC2gMQATgCBZAAQBDAAAqgHQAWgEA8gOQA0gNAegDQAPgCARABQAvgBBDAMQB0ATAgACQAgACA1gCQBGgDAQABQBUAABnASQA+ALB6AcIGMBdQA4ANAEAgQACAZgdAQQgYAMgiABQAVAYAeAMQAdAMAggBQASgCAlgFQAggDASANQAUAPAAAeQgBADAAAEQgCAfgWAXQgTASgfAMQgUAGglAHQAXAJgEAhQgEAfgYALQgqATg6gnQgWgQhLhEQgbgXgYgRQADAXABAcQAAAtgGBCIgJBRQAPgMAOgGQADgJAIgHQANgKAVgDQAIgBAdABQANABAbgBQAYABAPAIQAcAOAPAmQAeBGgZBGQgFAPgMAVIgSAkQgXAugUBNQgQA7ADAjIAHAgQADATABANQAAAYgTAuQgRArgLAZQgbA2ggALQgSAGgVgFIgOgGQgGAQgEARQgVBLgdA7QghBAg6BEQglAqhLBKQhHBFglAZQgtAfhYAlIjZBdQgjAQgVAAIgBAAgADlObIAWAFIDBhQQBlgpAyghQAhgWAlgiIBAg/QBVhZAhgzQAqhBAghkQBMj0gVj8QgDgxgMgcIgLgbQgHgRgDgLQgEgOADgPQACgPALgJQAGgFAHgDQAEgWAAgcQgBgSgGgkIgViRQgEgbADgNQADgNAIgHQgagHgfgFIhVgJQhrgNhsguIhmgtQg8gZgvgEQgegCgxAEQg5AFgWAAQgyAAhDgSIhzgjQjnhDjqAtQjwAuisCWQgnAjgMAbQgLAkgLAQQgNAQgXAJQgQAFgdAFQgfAEgWgHQgIAOgDAKQgFAXgEAMQgIAXgcASQgRAKgiASQgLAFgRAYQgWAmgQAUQgZAcgdAIQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABQARgOAkAAIAJAAQAaAAAVADQBKAJA7A1QAiAggGAbQgBAJgFAHIACAKQACANACAaIAMElQAGBdAJAoQAeCLCUCVQBHBJA/AoQAoAZBNAkQCDA9BGAUQA/ARCGARQB4AOA9AEQBjAHBQgHQASgCAOAAQARAAAKADgAzhjDQgJB4AvBtQAcA5AKAfQAEAPAGAcQAFAeAEANQAOA0AbAZQgCgbAAghQAAgcABg5QAAh8gbh+QgGgggBgYQgpgegtAAIgPABgARlk9QgGABgZAQQgTALgGAJQgKATgHAIQAIAmAEA2QAHBogGBlIgEA5QgIBHgOBIIAEABQAhg0AEgiQACgPgDgqQgBgcABgdQADhVAhhUQAOgkAfg9QASghABgRQABgOgFgMQgGgNgLgFQgHgEgKAAQgHAAgJACg");
	this.shape_106.setTransform(-35.1277,-107.4042);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A0715E").s().p("AEoOHQgSgFgoAEQhQAHhjgGQg9gFh3gOQiGgQg/gSQhGgUiDg9QhMgkgogZQg/gohIhJQiTiVgeiLQgJgogGhdIgNkkQgBgbgCgNIgCgJQAEgIACgJQAFgagiggQg6g1hKgJQgVgDgaAAIgJAAQgkgBgRAOQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAdgIAZgcQAQgTAVgmQASgYAKgGQAjgRAQgKQAcgTAJgXIAIgjQADgKAIgNQAWAGAfgEQAdgEAQgGQAXgIANgRQALgPALglQAMgaAngjQCriXDxguQDpgsDmBCIB0AjQBDASAyABQAWAAA5gFQAxgFAeADQAvAEA8AYIBmAuQBsAuBrANIBVAJQAfAEAaAIQgIAHgDANQgDANAEAbIAVCRQAGAkABATQAAAbgEAWQgHADgGAFQgLAKgCAPQgDAOAEAOQADAMAHAQIALAbQAMAdACAwQAWD9hNDzQgfBlgqBAQgiAzhUBZIhBA/QglAiggAWQgyAhhlApIjBBQIgXgGgAw8C8IgJgrQgGgcgEgOQgKgfgcg5QgvhuAJh3QA2gGAvAiQAAAYAHAgQAbCAAAB7QgBA4AAAcIACA9QgbgZgOg1gARTDhQAOhHAHhHIAFg6QAGhlgHhoQgEg2gIgmQAHgIAJgTQAHgJATgLQAZgQAGAAQAVgFAMAGQALAFAGANQAFANgBAOQgBARgSAgQggA+gNAkQghBTgDBWQgBAcABAdQACApgCAQQgEAhghA1IgDgCg");
	this.shape_107.setTransform(-42.0077,-105.417);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("ADSP6IgGgFIgQACQhSAFhogHQg5gEh/gOQiTgShIgUQhRgWiFg/Qg8gcghgRQgzgbglgbQhDgyhNhaQhEhSgnhFQgcgygQgvQgXAIgcgQQgSgKgXgeQgJgMgGgLIgBAAQgSAVgbgFQgNgCgKgIQgLgKgEgMQgDgMAAgTQAAgXgCgHQAAgFgMgfQgKgagNg2QgIgeAJgOQAHgMAOgDIAKgBIgJgQIgDgGQgLAGgOAAQgTAAgMgMQgKgMgDgUQgBgKAAgYQABg7gQhZQgaiLgBgKQgCgLAAgIQgBgdAOgMQAGgGANgFQAPgFAFgFQAJgHAGgOIAJgaQALgiAXgCQAHgBAMAFIATAHQAFABAOAAIAEABQAQgIAJgGQABgNAHgTQAGgPAHgJQALgMAMACIACAAIAHgOQAWgoAUgLQAOgIARABQAIABAHAEQCjiVCLhSQC7hvC2gLQAUgCBYAAQBDgBAqgGQAWgEA8gOQA0gOAegCQAPgCARAAQAvAABDALQB0ATAgACQAgACA2gCQBFgCAQAAQBUABBnASQA/AKB6AdIGLBcQA5AOADAgQADAagdAPQgZAMghABQAVAYAeAMQAdAMAggBQASgCAlgFQAggDASAOQAUAOgBAeQgBADABAEQgCAggXAWQgTASgfAMQgUAHglAHQAYAJgFAhQgEAfgYALQgqASg6gmQgWgQhLhEQgbgYgYgRQADAXABAcQAAAtgGBCIgJBSQAPgMAOgGQADgKAIgGQANgLAVgCQAIgBAdAAQAOABAagBQAYACAPAHQAcAPAPAmQAeBGgZBGQgFAPgMAVIgSAkQgXAugUBNQgRA7AEAjIAGAgQAEATAAANQAAAYgSAuQgRArgMAZQgbA2gfALQgTAGgUgFIgPgGQgFAQgEARQgWBLgdA7QghBAg6BEQglAqhLBJQhHBGglAZQgsAehZAlIjYBdQgkAQgVAAQgQgBgMgIgADjObIAXAFIDBhPQBlgpAyghQAggXAlghIBBhAQBUhYAigzQAqhBAfhkQBNj0gWj8QgCgxgMgdIgLgbQgHgQgDgLQgEgOADgPQACgPALgKQAGgFAHgDQAEgVAAgcQgBgTgGgkIgViRQgEgaADgOQADgNAIgHQgagHgfgFIhVgJQhrgNhsguIhmgtQg8gZgvgEQgegCgxAEQg5AFgWAAQgygBhDgRIhzgjQjnhDjpAtQjxAtirCXQgnAjgMAbQgLAkgLAQQgNAQgXAJQgQAFgdAFQgfAEgWgHQgIAOgDAKIgIAjQgJAXgcASQgQAKgjASQgKAFgSAYQgVAmgQAUQgZAcgdAIQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQARgOAkAAIAJAAQAaAAAVADQBKAJA6A1QAiAggFAbQgCAJgEAHIACAKQACANABAaIANElQAGBdAJAoQAeCLCTCVQBIBJA/AoQAoAYBMAkQCDA9BGAUQA/ASCGARQB3AOA+AEQBiAHBQgHQASgCANAAQARAAAKADgAzgjDQgJB4AvBtQAcA5AKAfQAEAPAGAcIAJAqQAOA1AbAZIgCg8QAAgcABg5QAAh8gbh+QgHggAAgYQgpgdguAAIgOAAgARkk8QgGABgZAPQgTAMgHAJQgJASgHAJQAIAmAEA1QAHBpgGBlIgFA5QgHBIgOBHIADABQAhg0AEgiQACgPgCgqQgBgcABgdQADhVAhhUQANgkAgg9QASghABgRQABgOgFgMQgGgOgLgFQgHgDgJAAQgIAAgJACg");
	this.shape_108.setTransform(-35.1027,-107.38);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A0715E").s().p("AEnOHQgSgFgoAEQhQAHhjgHQg8gEh4gOQiFgRg/gSQhGgUiCg9QhMgkgpgYQg+gohIhJQiSiVgfiLQgJgogGhdIgNkkIgEgnIgBgKQAEgHABgJQAGgbgiggQg7g1hJgJQgVgDgaAAIgJAAQgkgBgRAOQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAdgIAYgcQARgTAVgmQARgYALgGQAigRARgKQAbgTAJgXIAIgjQADgKAIgNQAWAGAfgEQAdgEAQgGQAXgIANgRQALgPALglQAMgaAngjQCriXDwguQDpgtDnBDIBzAjQBDASAzABQAWAAA5gFQAxgFAdADQAvAEA8AYIBmAuQBtAuBqANIBVAJQAfAFAaAHQgIAHgDANQgDANAEAbIAVCRQAGAkABATQAAAcgEAVQgHADgGAFQgLAKgCAPQgDAPAEAOQADAMAHAQIALAbQAMAcACAxQAWD9hNDzQggBlgqBAQgiAzhUBYIhBBAQgkAhghAXQgyAhhlApIjBBPIgWgGgAw6C8QgEgNgGgeQgFgcgFgOQgKgfgcg5QgvhuAJh3QA1gGAwAiQAAAYAHAgQAbCAAAB7QgBA4AAAcIACA9QgbgagNg0gARRDiQAOhHAIhHIAFg6QAFhlgGhoQgEg2gIgmQAHgIAJgTQAHgJATgLQAZgQAGgBQAVgEAMAGQALAFAGANQAFANgBANQgBASgSAgQggA+gOAkQggBTgDBWQgCAcACAdQACApgCAQQgEAhghA1IgEgCg");
	this.shape_109.setTransform(-42.0327,-105.392);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("ADsQDQgQAAgMgJIgGgFIgQACQhSAGhngIQg5gEh+gOQiUgShIgUQhQgWiFg/Qg7gcgigSQgygagmgbQhCgyhNhaQhFhSgmhFQgcgygQgvQgXAIgcgQQgSgKgXgeQgJgLgGgMIgBABQgSAVgbgGQgNgCgKgIQgLgKgDgMQgEgLAAgUQAAgXgCgHQAAgFgMgfQgKgZgNg2QgIgfAJgOQAGgMAPgDIAKAAIgJgQIgDgHQgLAGgPAAQgSAAgMgMQgKgLgDgUQgCgLABgYQABg6gQhaQgaiKgBgLQgCgKAAgJQgBgdANgMQAGgFAOgFQAOgGAFgEQAJgHAGgPIAJgZQALgjAXgCQAHgBAMAFIATAHQAFACAOAAIAEAAQAQgHAJgHQABgNAHgTQAGgPAHgIQAKgMANABIACAAIAGgOQAWgnAVgLQAOgJARACQAIABAGADQCjiVCLhSQC7hvC1gLQAUgCBZAAQBDgBApgGQAWgEA8gOQA1gOAegCQAOgCARAAQAwAABDALQB0ATAgACQAgACA1gCQBGgCAQAAQBTABBoASQA+AKB7AdIGLBdQA5AOADAfQADAagdAQQgZAMghAAQAVAZAeAMQAdAMAggBIA3gIQAggDASAOQAUAPgBAeQgBADABAEQgCAggXAWQgTASgfAMQgUAHglAHQAXAJgEAhQgEAfgYALQgqASg6gmQgXgQhKhEQgbgYgYgRQADAXABAcQAAAtgGBCIgJBSQAPgMANgGQAEgJAIgHQAMgLAVgCQAIgBAeABQANABAagBQAYABAPAIQAcAOAPAmQAfBHgZBFQgGAQgLAVIgTAkQgXAtgUBOQgRA7AEAjIAGAgQAEATAAANQAAAXgSAuQgRAsgMAZQgbA2ggALQgSAGgUgFIgPgHQgGARgEARQgVBLgdA7QghBAg6BDQglAqhLBKQhHBFglAZQgsAehZAlIjYBdQgjAPgUAAIgCAAgADiObIAWAGIDBhPQBlgpAyghQAggXAlghIBAhAQBVhYAigzQAphAAghlQBNjzgVj9QgDgxgLgcIgMgbQgHgQgCgMQgFgOAEgPQACgPAKgKQAGgFAHgDQAFgVgBgcQgBgTgFgkIgViRQgEgbADgNQADgNAHgHQgZgHgfgFIhVgJQhrgNhsguIhmguQg9gYgvgEQgdgDgxAFQg5AFgWAAQgygBhDgSIhzgjQjnhDjqAtQjwAuirCXQgnAjgLAaQgLAlgMAPQgMARgYAIQgPAGgeAEQgeAEgWgGQgJANgCAKIgIAjQgJAXgcATQgQAKgjARQgKAGgSAYQgVAmgQATQgZAcgdAIQAAABAAAAQABABAAAAQAAAAAAABQABAAAAAAQARgOAkABIAJAAQAaAAAVADQBKAJA6A1QAiAggFAbQgCAJgEAHIACAKIAEAnIANEkQAFBdAJAoQAfCLCTCVQBHBJA/AoQAoAYBMAkQCDA9BGAUQA/ASCFARQB3AOA9AEQBjAHBQgHQASgBANAAQARAAAKACgAzgjCQgJB3AvBuQAdA5AKAfQAEAOAGAcQAFAeAEANQAOA0AbAaIgCg9QgBgcACg4QgBh8gah/QgHgggBgYQgpgdgtAAIgPABgARjk7QgHABgYAQQgTALgHAJQgJATgIAIQAIAmAEA2QAHBogGBlIgFA6QgHBHgOBHIADACQAhg1AEghQACgQgCgpQgBgdABgcQADhWAhhTQAOgkAgg+QARggABgSQACgNgFgNQgGgNgMgFQgHgEgJAAQgHAAgJACg");
	this.shape_110.setTransform(-35.0778,-107.3792);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A0715E").s().p("AEmOHQgSgFgoAEQhPAHhkgHQg8gEh3gOQiFgRg/gSQhFgUiDg9QhMgkgogZQg+gohIhIQiSiVgfiLQgJgogGhdIgNkkIgEgnIgCgKQAEgHACgJQAFgbgiggQg6g1hKgJQgVgDgZAAIgKAAQgjgBgRAPQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAdgIAYgdQAQgTAVgmQASgYAKgGQAjgRAQgKQAcgTAIgXQAEgLAEgXQADgLAJgNQAWAGAegDQAdgFAQgFQAXgJANgRQALgPALglQALgaAogjQCqiYDwgtQDpgtDnBDIBzAjQBDASAzABQAWAAA5gFQAxgFAdADQAvADA8AZIBmAuQBtAuBqANIBWAJQAfAFAZAHQgHAHgDANQgEAOAEAbIAVCRQAGAkABATQAAAcgEAVQgHADgHAFQgKAKgCAPQgDAPAEAOQADALAHAQIALAcQALAcADAxQAVD9hNDzQggBlgqBAQghAzhVBYIhABAQglAhghAWQgxAhhlApIjBBPIgWgGgAw5C8IgKgrQgFgcgFgOQgKgfgcg5QgvhuAJh3QA1gGAwAiQAAAYAHAgQAbCAAAB7QgBA4AAAcQABAiACAbQgbgagOg0gARQDjQAOhHAHhHIAFg5QAGhmgGhoQgEg2gIgmQAHgIAJgTQAHgJATgMQAZgPAGgBQAVgFAMAGQALAFAGAOQAFAMgCAOQAAASgSAgQggA9gOAlQghBTgDBWQgBAcABAdQACApgCAQQgEAhghA1IgDgCg");
	this.shape_111.setTransform(-42.0464,-105.342);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("ADrQDQgQAAgMgJQgEgCgCgDIgQACQhSAGhmgIQg5gEh/gOQiTgShIgUQhQgWiEg/Qg8gcghgSQgygagmgbQhCgyhNhaQhEhSgnhFQgcgxgQgwQgXAIgcgQQgRgKgXgdQgJgMgGgMIgCABQgSAVgagFQgNgDgKgIQgLgKgEgMQgEgLAAgTQABgYgCgGQgBgFgLggQgLgZgMg2QgIgeAIgPQAHgMAPgCIAJgBIgJgQIgDgGQgLAGgOAAQgSAAgMgNQgLgLgCgUQgCgKAAgYQABg7gQhZQgaiLgBgKQgCgLAAgIQgBgdANgMQAGgGAOgFQAOgFAFgFQAJgHAGgOIAJgaQAKgiAXgCQAIgBAMAFIATAHQAFABAOAAIADABQAQgIAKgGQAAgNAIgTQAFgPAHgJQALgMAMACIACAAIAHgOQAWgoAUgLQAOgJARACQAIABAGAEQCjiWCKhSQC7hvC2gLQAUgCBYAAQBDgBAqgGQAVgEA8gOQA1gOAegCQAOgCARAAQAwAABDALQB0AUAgABQAgACA1gCIBWgCQBUABBnASQA/AKB6AdIGMBdQA4AOAEAgQACAagdAPQgYAMgiABQAVAYAeANQAdAMAggCQASgBAlgGQAhgDASAOQATAPAAAeQgBADAAAEQgCAggXAWQgTASgfAMQgUAHglAHQAYAJgFAhQgEAfgYALQgqATg6gnQgWgQhLhEQgbgYgYgRQADAXABAcQAAAtgGBCIgJBSQAPgLANgHQAEgJAIgHQAMgKAVgDQAIgBAeABQANABAagBQAYABAPAIQAcAOAPAmQAfBHgZBFQgGAQgLAVIgTAkQgXAugUBNQgRA7ADAjIAHAhQADASABANQAAAYgTAuQgRArgLAZQgcA2gfALQgTAGgUgFIgPgGIgJAhQgWBLgdA7QghBAg6BEQglAqhLBJQhHBFgkAZQgtAehYAlIjYBcQgjAPgVAAIgBAAgADhOcIAWAFIDAhPQBlgoAyghQAhgXAkghIBBg/QBUhYAigzQAqhBAghkQBNj0gWj8QgCgxgLgdIgMgbQgHgQgCgMQgFgOAEgOQACgPAKgKQAGgFAHgDQAFgWgBgcQgBgTgFgkIgViRQgEgbADgNQADgNAIgHQgagIgfgEIhVgJQhrgNhsgvIhmgtQg9gZgvgEQgdgCgxAEQg5AFgWAAQgygBhDgSIhzgjQjnhCjpAsQjwAuirCXQgnAjgLAbQgMAkgLAQQgMARgYAIQgPAGgeAEQgeAEgWgHQgIAOgDAKQgFAXgDAMQgJAXgbASQgRAKgiASQgLAFgRAYQgVAmgQAUQgZAcgdAIQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQARgOAkAAIAJAAQAaAAAVADQBKAJA6A2QAiAggGAaQgBAJgEAIIABAJIAEAoIAOEkQAFBdAJAoQAfCKCTCVQBHBJA/AoQAoAYBMAlQCCA8BGAUQA/ASCFARQB3AOA9AFQBiAGBQgHIAdgBQASAAALADgAzfjCQgJB4AvBtQAdA5AKAfQAEAPAGAcIAJAqQAOA1AbAZQgCgbAAghQgBgdACg4QgBh8gbh+QgHggAAgYQgpgegtAAIgPABgARik5QgHAAgYAQQgTALgHAJQgJATgIAJQAIAlAEA2QAHBpgGBlIgFA5QgIBIgOBHIAEABQAhg0AEgiQACgPgCgqQgCgcACgdQADhVAhhUQAOgkAgg9QARghABgRQACgOgFgMQgGgOgMgFQgHgEgJAAQgHAAgJADg");
	this.shape_112.setTransform(-35.0528,-107.3542);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A0715E").s().p("AElOIQgSgFgoADQhPAHhjgHQg8gEh3gOQiFgRg/gSQhFgUiCg9QhMgkgogZQg+gohIhIQiSiVgfiKQgJgogGhdIgOkkQgBgbgDgNIgBgJQAEgIABgJQAGgagiggQg6g2hKgIQgVgEgaAAIgJAAQgkAAgQAOQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAdgIAYgcQAQgUAVgmQARgYALgFQAigSARgKQAbgSAJgXQADgMAFgXQACgKAJgOQAWAHAegEQAdgEAQgGQAXgIANgRQALgQALgkQALgbAngjQCriXDvguQDpgtDnBDIB0AjQBCASAzABQAWAAA5gFQAxgEAdACQAvAEA8AZIBmAuQBtAuBrANIBVAJQAfAFAZAHQgHAHgDANQgDAOAEAaIAUCSQAGAkABATQAAAcgEAVQgHADgHAFQgKAKgCAPQgDAPAEAOQADAMAHAQIALAbQALAdADAxQAVD8hND0QggBkgqBBQgiAyhUBYIhBBAQglAhggAWQgyAhhlApIjABOIgWgFgAw4C8QgEgNgFgdQgGgcgFgPQgKgfgcg5QgvhtAIh4QA2gFAvAiQABAYAHAgQAaB/ABB7IAABVIACA8QgbgZgOg1gARODlQAOhHAIhIIAFg5QAGhlgGhpQgEg2gJgmQAIgIAJgTQAHgJATgLQAZgQAGgBQAVgEAMAGQALAFAGANQAFANgCAOQAAARgSAgQggA+gOAkQghBUgDBVQgCAdACAdQACApgCAPQgEAighA0IgEgBg");
	this.shape_113.setTransform(-42.0464,-105.313);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("ADNP6QgDgCgCgDIgQACQhSAGhmgIQg5gEh+gPQiTgShIgUQhQgWiEg/Qg7gcgigRQgygbglgbQhDgyhMhZQhFhSgmhFQgcgygQgvQgXAIgcgQQgSgKgWgeQgJgLgGgMIgCABQgSAVgagGQgNgCgKgIQgLgKgEgMQgEgLAAgUQABgXgCgHQgBgFgLgfQgLgZgMg2QgIgeAIgPQAHgMAOgCIAKgBIgJgQIgDgGQgLAGgOAAQgSAAgNgNQgKgLgCgUQgCgKAAgYQABg7gQhZQgbiLgBgKQgCgLAAgIQgBgdAOgMQAFgGAOgFQAOgFAFgFQAJgHAGgOIAJgaQAKgiAXgCQAIgBAMAFIATAHQAFABAOAAIADABQAQgIAKgGQAAgNAHgTQAGgPAHgJQAKgMANACIACAAIAGgOQAWgoAUgLQAOgJARACQAIABAHAEQCiiWCKhSQC7hvC1gLQAUgDBZAAQBCAAAqgHQAWgDA8gPQA0gNAfgDQAOgCARABQAwgBBDAMQB0ATAfACQAhACA1gCIBWgCQBTAABoATQA+AKB7AdIGMBdQA5AOADAgQACAagdAPQgYANgiAAQAVAYAeANQAdAMAggBIA3gIQAhgDASAOQATAPAAAeQgBADAAAEQgCAggXAWQgTATgfAMQgUAGglAHQAXAJgEAhQgEAggYALQgqASg6gmQgXgQhKhFQgbgYgYgRQADAXABAcQAAAugHBCIgJBSQAPgMAOgGQADgKAIgGQANgLAVgCQAIgBAdAAQAOABAagBQAYACAPAIQAcAOAPAmQAeBHgZBFQgFAQgMAVIgTAkQgXAugUBNQgRA8AEAiIAGAhQADATABAMQAAAYgTAuIgcBEQgcA2gfALQgTAGgUgFIgPgGIgJAhQgWBLgdA7QghBAg6BDQglAqhLBJQhHBFglAZQgsAehYAlIjYBcQgkAPgUAAQgQAAgNgJgADfOcIAWAFIDAhOQBlgpAyghQAggWAlghIBBhAQBUhYAigyQAqhBAghkQBNj0gVj8QgDgxgLgdIgLgbQgHgQgDgMQgEgOADgPQACgPAKgKQAHgFAHgDQAEgVAAgcQgBgTgGgkIgUiSQgEgaADgOQADgNAHgHQgZgHgfgFIhVgJQhrgNhtguIhmguQg8gZgvgEQgdgCgxAEQg5AFgWAAQgzgBhCgSIhzgjQjohDjpAtQjvAuirCXQgnAjgLAbQgLAkgLAQQgNARgXAIQgQAGgdAEQgeAEgWgHQgJAOgCAKQgFAXgDAMQgJAXgbASQgRAKgiASQgLAFgRAYQgVAmgQAUQgYAcgdAIQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAQgOAkAAIAJAAQAaAAAVAEQBKAIA6A2QAiAggGAaQgBAJgEAIIABAJQADANABAbIAOEkQAGBdAJAoQAfCKCSCVQBIBIA+AoQAoAZBMAkQCCA9BFAUQA/ASCFARQB3AOA9AEQBiAHBPgHIAdgBQATAAAKADgAzfjCQgIB4AvBtQAcA5AKAfQAFAPAGAcQAFAdAEANQAOA1AbAZIgCg8IAAhVQgBh8gah+QgHgggBgYQgpgdguAAIgOAAgARgk5QgGABgZAQQgTALgHAJQgJATgIAIQAJAmAEA2QAGBpgGBlIgFA5QgIBIgOBHIAEABQAhg0AEgiQACgPgCgpQgCgdACgdQADhVAhhUQAOgkAgg+QASggAAgRQACgOgFgNQgGgNgLgFQgHgEgKAAQgHAAgJACg");
	this.shape_114.setTransform(-35.0278,-107.33);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A0715E").s().p("AEkOIQgSgFgoADQhPAHhjgHQg8gEh3gOQiEgSg+gSQhGgUiCg8QhLglgogYQg/gohHhIQiSiVgfiLQgJgngGhdIgOkkQgCgbgCgMIgCgKQAEgHACgJQAFgbgiggQg6g1hJgJQgVgEgaAAIgJAAQgkAAgQAOQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAcgIAYgcQARgUAVgmQARgYAKgFQAjgSAQgKQAbgSAJgXQAEgMAEgXQADgKAIgOQAWAHAegEQAdgEAQgGQAXgIANgRQALgQALgkQALgbAngjQCqiXDwguQDpgtDmBDIB0AjQBDASAyABQAWAAA5gFQAxgEAdACQAvAEA9AZIBmAuQBsAuBrANIBVAJQAfAFAaAIQgIAGgDAOQgDANAEAbIAUCSQAGAkABATQAAAbgEAWQgHADgHAFQgKAKgCAPQgDAPAEAOQACALAHARIAMAbQALAcADAxQAUD9hND0QggBkgqBAQgiAzhUBYIhAA/QglAhghAXQgxAghlApIjABOIgWgFgAw3C8QgEgNgFgdQgGgcgEgPQgKgfgdg5QgvhtAIh4QA2gFAvAiQAAAYAHAgQAbB/ABB7IAABVIACA8QgbgZgOg1gARNDmQAOhHAIhIIAFg5QAGhlgHhpQgEg2gIgmQAIgIAJgTQAHgJATgLQAZgQAGgBQAVgFAMAHQALAFAGANQAFANgCANQAAASgSAgQggA+gOAkQghBUgDBVQgCAdABAdQACApgCAQQgEAhghA1IgDgCg");
	this.shape_115.setTransform(-42.0464,-105.279);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("ADoQDQgPAAgNgIQgDgCgCgDIgQACQhSAFhlgIQg6gEh+gPQiSgShIgUQhPgWiFg/Qg7gcghgRQgygbglgbQhDgyhMhZQhEhSgnhFQgcgygPgvQgYAIgbgPQgSgLgXgdQgJgMgGgLIgBAAQgSAVgbgFQgNgDgJgIQgLgKgEgLQgEgMAAgTQAAgXgCgHQAAgFgMggQgKgZgNg2QgIgeAIgOQAHgMAPgDIAJAAIgIgQIgEgHQgLAGgOAAQgSAAgMgMQgLgMgCgTQgCgLABgYQAAg6gQhaQgbiKgBgLQgCgKAAgJQgBgdAOgMQAFgFAOgFQAOgGAFgEQAJgHAGgPIAJgZQAKgjAXgCQAHgBAMAFIATAHQAFACAOAAIAEAAQAQgHAJgHQAAgNAIgTQAFgPAHgIQALgMAMABIACAAIAHgOQAVgnAVgLQAOgJAQACQAIABAHADQCiiVCKhTQC6hvC2gLQATgDBZAAQBDAAApgHQAWgDA8gPQA0gNAfgDQAOgCARABQAwgBBDAMQB0ATAgACQAgACA1gCIBWgCQBUAABnATQA/AKB6AdIGMBeQA5ANADAgQADAagdAQQgZAMghABQAVAYAdANQAeAMAggCQASgBAlgGQAggDASAOQAUAPgBAeQgBADABAEQgCAggXAWQgTATggAMQgUAGglAHQAYAJgFAhQgEAggYALQgqASg6gmQgXgQhKhFQgbgYgYgRQADAXABAcQAAAugHBCIgJBSQAPgMAOgGQADgJAIgHQANgLAVgCQAIgBAdABQAOABAagBQAYABAPAIQAcAOAPAmQAeBHgZBGQgGAPgLAWIgTAkQgXAtgVBOQgQA7ADAjIAGAhQAEASAAANQAAAYgSAuQgSArgLAZQgbA2ggALQgSAGgVgFIgOgHQgGARgEARQgWBLgdA7QghA/g6BEQglAqhKBJQhIBEgkAZQgtAehYAlIjXBbQgjAPgVAAIgBAAgADeOcIAWAGIDAhPQBlgoAxghQAhgWAlghIBAg/QBUhYAigzQAqhAAghlQBNjzgUj9QgDgxgLgdIgMgbQgHgQgCgLQgEgPADgOQACgQAKgJQAHgFAHgDQAEgWAAgcQgBgTgGgkIgUiSQgEgbADgNQADgNAIgHQgagIgfgEIhVgJQhrgNhsgvIhmguQg9gZgvgDQgdgDgxAFQg5AFgWAAQgygBhDgSIhzgkQjnhDjpAtQjwAuiqCYQgnAjgLAaQgLAlgLAPQgNARgXAJQgQAFgdAFQgeADgWgGQgIANgDALQgEAXgEALQgJAXgbATQgQAKgjARQgKAGgRAYQgVAmgRATQgYAdgcAIQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAQgPAkABIAJAAQAaAAAVADQBJAJA6A2QAiAfgFAbQgCAJgEAIIACAJQACANACAbIAOEjQAGBdAJAoQAfCKCSCVQBHBIA/AoQAoAZBLAkQCCA9BGAUQA+ASCEARQB3AOA9AFQBiAGBPgGIAdgCQASAAALADgAzejBQgIB3AvBuQAdA5AKAfQAEAOAGAcQAFAeAEANQAOA0AbAZIgCg8IAAhUQgBh8gbh+QgHggAAgYQgpgeguAAIgOABgARfk3QgGAAgZAQQgTALgHAJQgJATgIAJQAIAlAEA3QAHBogGBmIgFA5QgIBHgOBIIADABQAhg0AEgiQACgPgCgqQgBgdACgcQADhWAhhTQAOglAgg9QASghAAgRQACgOgFgMQgGgOgLgFQgHgDgKAAQgHAAgJACg");
	this.shape_116.setTransform(-35.0028,-107.3292);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#A0715E").s().p("AEjOIQgSgFgoADQhPAHhjgHQg7gEh3gPQiEgRg+gSQhGgUiBg9QhMgkgogYQg+gphHhIQiSiUgfiLQgJgngGhdIgPkkQgBgbgDgMIgBgKQAEgHABgJQAGgbgiggQg6g1hKgJQgVgEgZAAIgJAAQgkAAgQAOQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAcgIAYgcQAQgTAVgnQARgXALgGQAigRAQgLQAcgSAIgXIAIgjQADgKAIgOQAWAHAegEQAdgEAQgGQAXgIANgRQALgQALgkQALgbAngjQCqiYDvguQDpgsDmBDIB0AjQBDASAyABQAWAAA5gFQAxgEAdACQAvAEA9AZIBmAuQBsAuBrANIBVAKQAfAEAaAIQgIAHgDANQgDANAEAbIAUCSQAGAkABATQAAAcgEAWQgHADgHAFQgKAKgCAPQgDAOAEAPQACALAHAQIAMAcQALAcACAxQAVD9hND0QghBkgqBAQghAzhVBYIhAA/QglAhggAWQgyAhhkAoIjABOIgWgFgAw2C8IgJgqQgGgcgEgPQgKgfgdg5QgvhtAIh3QA1gGAwAiQAAAYAHAgQAbB/ABB7IAABUQAAAiACAbQgbgZgOg1gARLDnQAOhHAIhIIAFg5QAGhlgGhpQgEg2gIgmQAIgIAJgTQAHgJATgMQAZgPAGgBQAVgFAMAGQALAFAGAOQAFAMgCAOQgBASgRAgQggA+gOAkQgiBUgDBWQgBAcABAdQACApgCAQQgEAhghA1IgEgCg");
	this.shape_117.setTransform(-42.0464,-105.238);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("ADnQEQgQgBgMgIQgEgCgCgDIgQACQhRAFhlgIQg6gEh+gPQiSgShHgUQhQgWiEg/Qg6gcgigRQgygbglgbQhCgyhMhZQhFhSgmhFQgcgxgQgvQgXAHgbgPQgSgLgXgdIgPgXIgCAAQgRAVgagFQgOgCgJgJQgLgJgEgMQgEgMAAgTQAAgXgCgHQAAgFgMgfQgKgZgNg2QgIgeAIgPQAHgMAPgCIAJgBIgJgQIgDgGQgLAGgOAAQgSgBgMgMQgLgLgCgUQgCgKAAgYQABg7gRhZQgaiLgBgKQgCgLAAgIQgCgdAOgMQAFgGAOgFQAOgFAGgFQAIgHAGgOIAJgaQAKgiAXgCQAHgBAMAFIATAHQAFABAOAAIAEABQAQgIAJgGQAAgNAIgTQAFgPAHgJQALgMAMACIACAAIAGgOQAWgoAUgLQAOgJARACQAIABAHAEQChiWCKhTQC6hvC1gLQAUgCBYgBQBDAAAqgGQAWgEA8gPQA0gNAegDQAPgCASABQAugBBDAMQB1ATAfACQAhACA1gCQBFgCARAAQBTABBoASQA/AKB6AdIGNBeQA4AOAEAgQACAagdAPQgZANgiAAQAVAZAeAMQAdAMAhgBIA3gHQAggDASAOQAUAPgBAeQgBADABAEQgCAggXAWQgTATggAMQgUAGglAHQAYAJgFAhQgEAggZALQgpATg7gnQgWgQhLhFQgagYgYgRQADAXAAAcQAAAugGBCIgJBSQAPgLANgHQAEgJAIgHQAMgKAWgDQAIgBAdABQANABAbgBQAYABAPAIQAcAOAPAnQAeBHgaBFQgFAQgMAVIgTAkQgXAugUBNQgRA8ADAiIAHAhQADATAAANQAAAYgSAuQgSArgLAZQgcA1gfAMQgTAFgUgFIgOgGQgGARgEARQgWBKgdA7QghBAg6BDQglAqhLBJQhHBEgkAZQgtAehYAlIjXBbQgjAPgUAAIgBAAgADdOdIAWAFIC/hOQBlgoAxghQAhgWAlghIBAg/QBUhYAigzQAqhAAghkQBNj0gUj9QgDgxgLgcIgLgcQgHgQgDgLQgEgPADgOQACgPALgKQAGgFAHgDQAFgWgBgcQgBgTgFgkIgViSQgEgbAEgNQADgNAHgHQgZgIgfgEIhWgKQhqgNhtguIhmguQg8gZgvgEQgegCgxAEQg5AFgWAAQgygBhDgSIhygjQjohDjoAsQjwAuipCYQgoAjgLAbQgLAkgLAQQgMARgXAIQgQAGgdAEQgeAEgWgHQgJAOgCAKIgIAjQgJAXgbASQgRALgiARQgKAGgRAXQgVAngQATQgYAcgdAIQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQARgOAjAAIAJAAQAaAAAVAEQBJAJA6A1QAiAggFAbQgCAJgEAHIACAKQACAMACAbIAOEkQAGBdAJAnQAfCLCTCUQBHBIA+ApQAoAYBLAkQCCA9BFAUQA/ASCEARQB2APA9AEQBiAHBPgHIAdgBQASAAALADgAzdjAQgJB3AwBtQAcA5AKAfQAFAPAFAcIAKAqQAOA1AbAZQgCgbgBgiIABhUQgBh8gbh+QgHgggBgYQgpgdgtAAIgOABgARek2QgHABgYAPQgUAMgGAJQgKATgHAIQAIAmAEA2QAGBpgGBlIgFA5QgIBIgOBHIADACQAhg1AEghQACgQgCgpQgBgdACgcQADhWAhhUQAOgkAgg+QASggABgSQACgOgFgMQgGgOgMgFQgGgDgJAAQgIAAgJACg");
	this.shape_118.setTransform(-34.9816,-107.3042);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A0715E").s().p("AEjOIQgTgFgnAEQhPAGhjgHQg7gFh3gOQiDgRg/gSQhFgUiBg9QhMgkgngZQg+gohHhIQiSiVggiJQgJgogGhdIgOkjQgCgbgDgNIgBgKQAEgHABgJQAGgbgigfQg6g2hJgJQgVgEgaAAIgJAAQgkAAgQAOQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAdgJAXgbQAQgUAVgnQARgXALgGQAigRAQgKQAcgSAIgYQAEgMAEgXQADgKAIgNQAWAGAegEQAdgEAQgGQAXgIAMgRQALgPALglQALgbAngiQCqiZDvgtQDoguDnBEIBzAjQBDATAzAAQAWAAA5gFQAxgEAdACQAvAEA8AZIBmAuQBtAvBrANIBVAJQAfAEAaAJQgIAGgDAOQgDANAEAbIAUCSQAFAkABAUQABAbgFAWQgHADgGAFQgLAJgCAQQgDAPAEAOQADALAHAQIALAbQALAdADAyQAUD9hNDzQghBlgqA/QgiAzhUBYIhAA/QglAhggAWQgyAhhkAnIjABPIgVgGgAw0C9QgEgNgFgeQgGgcgFgPQgKgegcg6QgwhtAJh3QA1gGAvAiQAAAZAHAfQAcCAABB6IgBBUIADA9QgbgagOgzgARKDoQAOhHAIhHIAFg6QAHhlgGhpQgEg2gIgmQAHgIAKgTQAGgKAUgKQAYgRAHAAQAUgFAMAGQAMAFAGAOQAFAMgCAOQgBASgSAhQggA9gOAkQghBUgEBWQgBAcABAdQACApgCAQQgEAhghA1IgEgCg");
	this.shape_119.setTransform(-42.0714,-105.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("ADKP7QgEgCgCgDIgQACQhRAFhlgIQg6gEh9gPQiSgThHgUQhPgViEhAQg7gbghgSQgygbglgaQhCgzhMhZQhEhRgnhFQgcgygPgvQgYAIgbgPQgSgLgXgdIgPgXIgBAAQgSAVgagFQgNgDgKgIQgLgKgDgLQgEgMgBgTQABgXgCgHQgBgFgLgfQgLgZgMg2QgIgeAIgPQAGgMAPgCIAJgBIgIgQIgEgGQgLAGgOAAQgSgBgMgMQgKgLgDgUQgCgKABgYQAAg7gQhZQgbiLgBgKQgCgLAAgIQgCgdAOgMQAFgGAOgFQAOgFAFgFQAJgHAGgOIAIgaQALgiAWgCQAIgBAMAFIATAHQAFABAOAAIADABQAQgIAKgGQAAgNAHgTQAFgPAHgJQALgMAMACIACAAIAHgOQAVgoAUgLQAOgJARACQAIABAHAEQChiWCJhTQC6hvC2gMQATgCBZAAQBCAAAqgHQAWgEA8gOQA0gOAfgCQAOgCASAAQAvAABCALQB1AUAfACQAhACA1gCQBFgDARABQBUAABnATQA/AKB6AdIGNBeQA5AOADAgQACAagdAQQgYAMgiAAQAVAZAeANQAdAMAggCQASgBAlgGQAhgDASAOQATAPAAAeQgBADAAAEQgCAggXAXQgTASgfAMQgUAHgmAHQAYAJgFAhQgEAggYALQgqASg6gnQgXgQhKhFQgbgYgYgRQADAXABAdQgBAtgGBDIgJBSQAPgMANgGQAEgKAIgGQAMgLAWgCQAIgBAdAAQANABAbgBQAYACAPAIQAcAOAPAmQAeBIgaBFQgFAQgMAVIgTAkQgXAugVBNQgRA8AEAjIAGAgQADATABANQAAAYgTAuQgRArgMAZQgbA2ggALQgSAFgUgFIgPgGQgGARgEARQgWBKgdA7QghBAg6BDQglAqhKBIQhIBFgkAYQgsAehYAlIjXBbQgkAPgUAAQgQgBgMgIgADcOdIAVAFIDAhOQBkgoAyggQAggXAlggIBAg/QBUhYAigzQAqhAAhhkQBNj0gUj9QgDgxgLgdIgLgbQgHgQgDgLQgEgPADgOQACgQALgJQAGgFAHgDQAFgWgBgcQgBgTgFgkIgUiSQgEgbADgOQADgNAIgHQgagIgfgEIhVgJQhrgOhtguIhmguQg8gZgvgEQgdgCgxAEQg5AFgWAAQgzgBhDgSIhygjQjohEjoAtQjvAuiqCYQgnAjgLAbQgLAkgLAQQgMARgXAIQgQAGgdAEQgeAEgWgHQgIAOgDAKQgEAXgEAMQgIAXgcASQgQALgiARQgLAGgRAXQgVAngQATQgXAcgdAIQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAQgOAkAAIAJAAQAaAAAVAEQBJAJA6A1QAiAggGAbQgBAJgEAHIABAKQADAMACAbIAOEkQAGBdAJAnQAgCKCSCVQBHBIA+AoQAnAYBMAlQCBA8BFAVQA/ARCDASQB3AOA8AFQBiAHBPgHIAdgBQASAAALADgAzcjAQgJB3AwBtQAcA5AKAfQAFAPAGAcQAFAdAEANQAOA0AbAaIgDg9IABhUQgBh8gch+QgHggAAgYQgpgdgtAAIgOABgARdk1QgHAAgYAQQgUALgGAKQgKASgHAJQAIAmAEA2QAGBpgHBlIgFA5QgIBIgOBHIAEACQAhg1AEghQACgQgCgpQgBgdABgcQAEhWAhhUQAOgkAgg+QASggABgSQACgOgFgMQgGgOgMgFQgHgDgJAAQgIAAgIACg");
	this.shape_120.setTransform(-34.9569,-107.28);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#A0715E").s().p("AEhOIQgSgFgnAEQhPAGhigHQg8gEh2gPQiDgRg/gSQhFgViBg8QhLglgogYQg+gohHhIQiRiUggiKQgJgogGhdIgPkjIgEgoIgBgJQADgIACgJQAFgaghggQg7g2hJgJQgVgDgZAAIgJAAQgkAAgQAOQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAcgIAYgcQAQgUAVgmQARgYAKgFQAigSARgKQAbgSAIgXIAIgjQADgLAIgNQAWAGAegDQAdgFAQgFQAXgJAMgRQALgPALglQALgaAngjQCpiZDvguQDpgsDmBDIB0AjQBCASAzABQAWAAA5gFQAxgEAdACQAvAEA8AZIBmAuQBtAvBrANIBVAKQAfAEAaAIQgIAHgDANQgDANAEAbIAUCTQAFAkABATQABAcgFAWQgHADgGAFQgLAKgCAPQgDAOAEAPQADALAHAQIALAcQALAdACAxQAVD9hODzQggBlgqBAQgiAyhUBYIhBA/QgkAgghAXQgyAghkAoIi/BOIgWgGgAwzC8IgJgqQgGgcgFgOQgKgfgcg5QgwhtAIh4QA1gFAwAiQAAAYAHAgQAbB/ACB7QgBA4ABAcQAAAhACAbQgbgZgOg1gARJDqQAOhHAIhIIAFg5QAGhmgGhpQgDg2gIgmQAHgIAJgTQAHgJAUgMQAYgPAGgBQAVgFAMAGQALAFAHAOQAFANgCAOQgBARgSAhQggA9gOAkQgiBUgDBWQgCAdACAcQABAqgBAPQgFAighA0IgDgBg");
	this.shape_121.setTransform(-42.0714,-105.163);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("ADlQEQgQgBgMgIQgEgCgCgDIgQACQhRAFhlgIQg5gEh9gPQiSgThHgUQhPgWiDg/Qg7gcghgRQgygbglgbQhCgyhMhZQhEhRgmhFQgcgxgQgvQgXAHgcgPQgRgLgXgdQgJgMgGgLIgCAAQgRAVgagFQgNgCgKgJQgLgJgEgMQgEgMAAgTQAAgXgBgHQgBgFgLgfQgLgZgNg2QgIgeAIgOQAHgMAOgDIAJAAIgIgQIgDgHQgLAGgOAAQgSAAgMgMQgLgMgCgTQgCgLAAgYQABg6gRhZQgbiLgBgKIgDgUQgBgdAOgMQAFgFAOgFQAOgGAFgEQAIgHAHgOIAIgaQAKgjAXgCQAHgBAMAFIATAIIATABIAEABQAQgIAJgGQAAgOAHgTQAGgPAHgIQAKgMANABIABAAIAHgOQAVgnAUgLQAOgJARACQAIABAHADQCgiWCKhTQC6hvC1gMQAUgCBYAAQBCAAAqgHQAWgEA8gOQA0gOAfgCQAOgCASAAQAvAABDAMQB0ATAfACQAhACA1gCQBGgDAQABQBUAABnATQA/AKB7AdIGNBeQA4AOAEAhQACAagdAPQgZANgiAAQAVAZAeAMQAdAMAggBIA4gHQAggDASAOQAUAPgBAeQgBADABAEQgDAggXAXQgTASgfAMQgUAHgmAHQAYAJgFAhQgEAggYALQgqASg6gnQgXgQhKhFQgbgYgYgRQADAXABAdQAAAtgHBDIgJBSQAPgLAOgHQADgJAIgHQAMgLAWgCQAIgBAdABQAOABAagBQAYABAPAIQAcAOAPAnQAeBHgaBGQgFAPgMAWIgTAkQgXAtgVBOQgRA7ADAjIAHAhIAEAfQgBAYgSAuQgSArgLAZQgcA2gfALQgTAGgUgFIgPgGQgFAQgEARQgWBLgdA6QghBAg6BDQgmAqhKBIQhHBFglAYQgsAehYAlIjWBaQgjAPgUAAIgBAAgADaOdIAWAGIC/hOQBkgoAyggQAhgXAkggIBBg/QBUhYAigyQAqhAAghlQBOjzgVj9QgCgxgLgdIgLgcQgHgQgDgLQgEgPADgOQACgPALgKQAGgFAHgDQAFgWgBgcQgBgTgFgkIgUiTQgEgbADgNQADgNAIgHQgagIgfgEIhVgKQhrgNhtgvIhmguQg8gZgvgEQgdgCgxAEQg5AFgWAAQgzgBhCgSIhzgjQjnhDjpAsQjvAuipCZQgnAjgLAaQgLAlgLAPQgMARgXAJQgQAFgdAFQgeADgWgGQgIANgDALIgIAjQgIAXgbASQgRAKgiASQgKAFgRAYQgVAmgQAUQgYAcgcAIQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAQgOAkAAIAJAAQAZAAAVADQBJAJA7A2QAhAggFAaQgCAJgDAIIABAJIAEAoIAPEjQAGBdAJAoQAgCKCRCUQBHBIA+AoQAoAYBLAlQCBA8BFAVQA/ASCDARQB2APA9AEQBhAHBPgGIAdgCQASAAAKADgAzcjAQgIB4AwBtQAcA5AKAfQAFAOAGAcIAJAqQAOA1AbAZQgCgbAAghQgBgcABg4QgCh8gbh+QgHggAAgYQgpgdgtAAIgPAAgARbk0QgGABgYAPQgUAMgHAJQgJATgHAIQAIAmADA2QAGBpgGBmIgFA5QgIBIgOBHIADABQAhg0AFgiQABgPgBgqQgCgcACgdQADhWAihUQAOgkAgg9QASghABgRQACgOgFgNQgHgOgLgFQgHgDgJAAQgHAAgKACg");
	this.shape_122.setTransform(-34.9528,-107.2792);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A0715E").s().p("AEgOIQgSgFgnAEQhPAGhigHQg7gFh2gOQiDgSg/gSQhFgUiAg9QhLgkgogYQg+gohHhIQiRiVggiJQgJgogGhdIgPkjQgCgbgCgMIgCgKQAEgHABgJQAGgbgiggQg6g2hJgIQgVgEgZAAIgJAAQgkAAgQAOQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAcgIAYgcQAQgUAUgmQARgYALgFQAigSAQgKQAbgSAIgXQAEgMAEgXQADgLAIgNQAWAGAegDQAdgFAQgFQAXgJAMgRQALgPALglQALgaAngjQCpiZDuguQDpgtDmBEIB0AjQBCASAzABQAWAAA5gFQAxgEAdACQAvAEA9AZIBmAvQBsAuBrAOIBVAJQAfAEAaAIQgIAHgDANQgDAOAEAbIAUCTQAFAkABATQABAcgFAWQgHADgGAFQgLAJgCAQQgDAOAEAPQADALAHAQIALAcQALAcACAyQAUD9hODzQggBlgqBAQgiAyhUBYIhAA+QglAhggAWQgyAghkAoIi/BOIgWgGgAwxC8QgEgNgGgdQgGgcgEgOQgLgfgcg5QgwhtAIh4QA1gFAvAiQABAYAHAgQAbB/ACB7IAABUQAAAhACAbQgbgZgNg1gARHDrQAOhHAJhIIAFg5QAGhmgGhpQgEg2gIgmQAIgIAJgTQAHgKAUgLQAYgQAGAAQAVgFAMAGQALAFAHAOQAFAMgCAOQgBASgSAgQggA+gPAkQghBUgDBWQgCAdABAdQACApgCAPQgEAighA0IgEgBg");
	this.shape_123.setTransform(-42.0714,-105.125);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("ADjQEQgQAAgMgJQgDgCgCgDIgQACQhRAFhlgIQg5gEh9gPQiRgThHgUQhPgWiDg/Qg7gcghgRQgxgbglgbQhCgyhMhZQhEhRgnhFQgcgxgPgvQgXAIgcgQQgSgKgWgeQgJgMgGgLIgCABQgRAVgagGQgNgCgKgIQgLgKgEgMQgEgLAAgUQAAgXgBgGQgBgFgLggQgLgZgNg1QgIgfAIgOQAGgMAPgCIAJgBIgIgQIgEgHQgKAHgPAAQgRgBgNgMQgKgLgCgUQgCgKAAgYQAAg7gRhZQgbiKgBgLIgCgTQgBgdANgMQAFgGAOgFQAOgFAFgEQAJgIAGgOIAIgaQAKgiAXgCQAHgBAMAFIATAHIATACIAEAAQAQgHAJgHQAAgNAHgTQAFgPAIgJQAKgMAMACIACAAIAHgOQAVgoAUgLQAOgJARACQAIABAGAEQChiXCJhSQC5hwC2gLQATgDBYAAQBDAAAqgHIBSgSQA0gOAegCQAPgCASAAQAuAABDAMQB1ATAfACQAhACA1gCQBFgDARABQBUAABnATQA/AKB6AeIGOBeQA5AOADAgQACAagdAQQgZAMgiABQAVAYAeANQAdAMAggBIA4gHQAggDASAOQAUAPgBAeQgBADABAEQgDAggXAXQgTASgfAMQgUAHgmAHQAYAJgFAhQgEAggYALQgqATg7gnQgWgRhKhFQgbgYgYgRQADAXAAAdQAAAtgGBDIgKBTQAPgMAOgHQADgJAIgHQANgKAVgDQAIgBAeABQANABAbgBQAXABAPAIQAcAOAPAnQAeBHgaBGQgFAQgMAVIgTAkQgXAugVBOQgRA7AEAjIAGAhIAEAfQgBAYgSAuIgdBEQgcA2ggALQgSAGgUgFIgPgHQgGARgEARQgWBKgdA7QghA/g6BEQglAphKBJQhIBEgkAYQgsAehYAkIjWBbQgjAOgTAAIgCAAgADZOeIAWAFIC+hNQBkgoAyggQAggXAlggIBAg/QBVhXAhgzQAqhAAhhkQBOj0gUj9QgDgxgLgdIgLgbQgHgRgDgLQgEgOAEgPQACgPAKgKQAHgFAHgDQAEgWAAgcQgBgTgGgkIgUiTQgEgbAEgNQADgOAIgGQgagIgfgFIhWgJQhqgNhtgvIhmguQg8gZgvgEQgegDgxAFQg5AFgWAAQgygBhDgSIhygkQjohDjoAtQjvAuipCYQgnAjgLAbQgKAlgMAPQgMARgXAIQgPAGgdAEQgeAEgWgHQgIAOgDAKQgEAXgEAMQgIAXgbATQgRAKgiARQgKAGgRAYQgVAmgQATQgXAcgdAIQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQARgOAjABIAJAAQAaAAAUADQBJAJA7A2QAhAggFAaQgCAJgDAIIABAJQADANABAbIAPEjQAHBcAJAoQAfCKCSCUQBHBIA+AoQAnAYBLAlQCBA8BFAVQA+ASCDARQB2APA8AEQBiAHBPgGIAdgCQARAAALAEgAzbi/QgIB3AwBtQAcA5AKAfQAFAOAFAdQAGAdAEANQAOA0AbAZQgCgagBgiIAAhUQgBh7gch/QgHggAAgYQgpgdguAAIgNABgARakzQgHABgYAQQgTALgHAJQgJATgIAJQAIAlAEA3QAGBpgHBlIgFA6QgIBHgOBIIADABQAhg1AFghQABgPgBgqQgCgdACgcQAEhWAhhUQAOgkAhg+QARghABgRQACgOgFgMQgGgOgLgFQgHgEgKAAQgHAAgJACg");
	this.shape_124.setTransform(-34.9278,-107.2542);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A0715E").s().p("AEfOIQgSgFgnAEQhPAGhigHQg7gFh2gPQiCgRg+gSQhFgViBg8QhLglgngYQg+gohHhIQiRiUggiKQgJgngGhdIgQkjQgBgbgDgMIgBgKQADgHACgJQAFgbghggQg7g1hIgJQgVgEgaAAIgJAAQgjAAgQAOQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAcgIAYgcQAPgUAVgmQARgYAKgFQAigSAQgKQAcgSAIgXIAIgjQACgLAIgNQAWAGAegDQAdgFAQgFQAXgJAMgRQALgPALglQALgaAngjQCoiZDvguQDogtDmBEIB0AjQBDASAyABQAWAAA5gFQAxgEAdACQAvAEA9AZIBmAvQBsAuBrAOIBVAJQAfAFAaAHQgIAHgDAOQgDANAEAbIAUCTQAFAkABAUQABAbgFAWQgHADgGAFQgLAKgCAPQgDAPAEAOQACAMAHAQIAMAbQALAdACAxQAUD+hODzQghBlgqA/QgiAzhUBXIhAA/QglAgggAXQgyAghjAoIi/BNIgWgGgAwwC8QgEgNgGgdQgGgcgEgOQgKgfgdg5QgwhtAIh4QA1gFAvAiQABAYAHAgQAbB/ACB7IAABUIACA8QgagZgOg1gARGDsQAOhHAIhIIAFg5QAHhmgGhpQgEg2gIgmQAIgJAJgSQAHgKAUgLQAYgQAGAAQAVgFAMAGQALAFAHAOQAFAMgCAOQgBASgSAgQghA+gOAkQghBUgEBWQgBAdABAdQABApgBAQQgFAhghA1IgDgCg");
	this.shape_125.setTransform(-42.0714,-105.096);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("ADGP7QgDgCgCgDIgQACQhRAFhlgIQg5gEh8gQQiRgThHgUQhPgViDhAQg6gbghgSQgygbgkgaQhCgyhMhZQhEhSgmhEQgcgxgQgvQgXAHgbgPQgSgLgXgdQgJgMgGgLIgBABQgSAUgagFQgNgCgJgJQgLgJgEgMQgEgMAAgTQAAgXgCgHQAAgFgMgfQgLgZgMg2QgJgeAIgOQAHgMAOgCIAKgBIgJgQIgDgHQgLAHgOAAQgSgBgMgMQgLgLgCgUQgCgKAAgYQABg7gRhZQgciKgBgLIgCgTQgBgdANgMQAFgGAOgFQAOgFAFgEQAIgIAHgOIAIgaQAKgiAXgCQAHgBAMAFIATAHIATACIADAAQAQgHAJgHQAAgNAIgTQAFgPAHgJQAKgMANACIABAAIAHgOQAVgoAUgLQAOgJARACQAIABAGAEQCgiXCJhTQC6hvC1gMQATgCBZAAQBCgBAqgGIBSgSQA0gOAegDQAPgCASABQAugBBDAMQB1ATAfACQAhACA1gCQBFgCARAAQBUABBnASQA/ALB7AdIGNBfQA5AOADAgQADAageAQQgYAMgiABQAVAYAeANQAdAMAggBIA4gHQAggDASAOQATAPAAAeQgBADAAAEQgCAggXAXQgTATggAMQgUAGglAHQAXAKgFAhQgEAfgYAMQgqASg6gnQgXgQhKhFQgbgYgYgSQADAYABAcQgBAugGBDIgKBSQAPgMAOgGQADgKAIgGQANgLAVgCQAIgBAeAAQANABAbgBQAYACAPAIQAcAOAOAnQAeBHgaBGQgFAQgMAVIgTAkQgXAugVBOQgRA7ADAjIAGAhIAEAfQAAAYgTAuIgdBEQgcA2gfALQgTAGgUgFIgOgHQgGARgEARQgWBKgdA7QghA/g6BDQgmAqhKBIQhHBEglAZQgsAdhYAlIjVBZQgkAPgUAAQgQAAgMgJgADYOeIAWAFIC+hNQBkgoAyggQAggWAlghIBAg+QBUhYAigyQAqhAAghkQBOj0gTj9QgDgxgLgdIgLgbQgHgRgDgLQgEgPAEgOQACgPAKgKQAHgFAHgDQAEgWAAgcQgBgTgGgkIgTiTQgEgbADgOQADgNAIgHQgagIgfgEIhVgKQhrgNhtgvIhmguQg8gZgvgEQgegDgxAFQg5AFgWAAQgygBhDgSIhygkQjohEjoAtQjuAvipCYQgnAjgLAbQgKAlgMAPQgMARgXAIQgPAGgdAEQgeAEgWgHQgIAOgDAKIgIAjQgIAXgbATQgQAKgiARQgLAGgQAYQgVAmgQATQgXAcgdAIQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAQgOAkABIAJAAQAZAAAVADQBJAJA6A2QAiAggGAaQgBAJgEAIIACAJQACANACAbIAPEjQAHBcAJAoQAfCKCSCUQBHBIA9AoQAoAYBLAkQCAA9BFAUQA+ASCDASQB2APA8AEQBhAHBPgGIAdgBQARAAALADgAzai/QgIB3AwBtQAcA5AKAfQAFAOAGAdQAFAdAEANQAOA0AbAZIgDg8IAAhUQgBh7gch+QgHggAAgYQgqgegtAAIgNABgARZkyQgHABgYAQQgTALgHAJQgKATgHAIQAIAmAEA3QAFBpgGBlIgFA6QgJBHgOBIIAEABQAhg0AEgiQACgPgCgqQgBgdACgcQADhWAihUQAOgkAgg+QASghABgRQACgOgFgNQgGgNgLgFQgHgEgKAAQgHAAgJACg");
	this.shape_126.setTransform(-34.9028,-107.23);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A0715E").s().p("AEfOJQgSgGgnAEQhPAGhigIQg7gEh1gPQiDgRg+gTQhFgTiAg+QhLgjgngZQg+gohGhIQiRiUggiKQgJgngHhcIgPkkQgCgbgDgMIgBgJQAEgIABgJQAFgaghggQg7g2hIgJQgVgDgZgBIgJAAQgkAAgQAOQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAcgIAYgcQAQgUAUgmQARgXAKgGQAigSAQgJQAbgTAJgXQADgMAEgXQADgKAIgNQAWAGAegEQAdgEAPgGQAXgIAMgRQAMgPAKgmQALgaAngkQCoiYDuguQDpgtDmBEIBzAjQBDASAzACQAWAAA5gGQAxgEAdACQAvAEA8AZIBmAvQBtAvBrANIBVAJQAfAFAaAIQgIAHgDANQgDAOAEAbIAUCTQAFAkABAUQAAAbgFAWQgHADgGAFQgKAKgCAPQgEAPAEAOQADAMAHAQIALAbQALAdACAxQAUD+hODzQghBlgqBAQgiAyhUBXIhAA/QglAhggAWQgyAfhjApIi/BMIgVgFgAwuC8QgEgNgGgdQgGgcgFgOQgKgfgcg5QgwhtAIh3QA0gGAvAjQABAYAHAfQAcB/ACB7IgBBUIADA8QgbgagNg0gAREDuQAPhIAIhHIAFg6QAHhmgGhpQgDg2gIgmQAHgJAKgTQAHgJATgLQAYgQAHAAQAVgFAMAGQALAFAGAOQAFANgCANQgBASgSAhQggA9gPAlQghBTgEBXQgBAcABAdQACAqgCAPQgFAhghA1IgEgBg");
	this.shape_127.setTransform(-42.1062,-105.05);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("ADgQEQgPAAgMgJIgGgFIgQACQhRAFhkgIQg5gEh8gQQiRgThGgUQhPgViChAQg7gbghgSQgxgbglgaQhCgyhLhZQhEhRgmhFQgcgxgQgvQgXAIgcgQQgRgKgXgeQgJgLgGgMIgBABQgSAVgagGQgNgCgJgIQgLgKgEgMQgEgLAAgUQAAgXgCgGQAAgFgMgfQgLgZgNg2QgIgeAIgOQAHgMAOgDIAJgBIgIgQIgEgGQgKAGgOAAQgSAAgMgMQgLgMgCgUQgCgKAAgYQAAg6gRhZQgbiLgBgKIgDgUQgBgdANgMQAGgFANgFQAOgGAFgEQAJgHAGgOIAIgaQAKgjAXgCQAHgBAMAFIATAIIATABIADABQAQgIAJgGQAAgOAIgTQAFgPAHgIQAKgMANABIABAAIAHgOQAVgoAUgLQAOgIAQABQAIABAHAEQCgiWCIhTQC5hwC1gMQAUgCBYAAQBDgBAqgGIBRgSQA1gOAegDQAOgCASABQAvgBBDAMQB0ATAgACQAgACA2gCQBFgCARAAQBTABBoATQA/AKB7AeIGNBeQA5AOADAhQADAageAQQgZAMghAAQAVAZAeANQAdAMAggBIA4gIQAggDASAPQAUAPgBAeQgBADAAAEQgCAggXAXQgUATgfAMQgUAGgmAHQAYAKgFAhQgEAggYALQgrASg6gnQgWgQhKhFQgbgZgYgRQADAXAAAdQAAAugHBDIgJBTQAPgMAOgHQADgJAIgHQANgLAVgCQAIgBAdABQAOABAagBQAYABAPAIQAcAOAPAnQAeBIgaBGQgGAPgLAWIgUAkQgXAugVBNQgRA8ADAjIAGAgQAEATAAANQAAAYgTAuQgSArgLAZQgcA2gfALQgTAFgUgFIgPgGQgFAQgEARQgXBLgcA6QgiBAg6BDQglAphKBIQhIBEgkAZQgsAdhYAkIjVBaQgiAOgUAAIgCAAgADWOeIAWAGIC+hNQBkgoAyggQAggWAkggIBBg/QBUhXAigzQAqhAAghkQBOjzgTj+QgCgxgLgdIgMgbQgHgQgCgMQgEgOADgPQACgPALgKQAGgFAHgDQAFgWgBgcQgBgTgFgkIgUiTQgEgcAEgNQADgNAHgHQgZgIgfgFIhWgJQhrgNhsgvIhmgvQg9gZgvgEQgdgCgxAEQg5AFgWAAQgygBhDgSIhzgkQjnhDjoAtQjuAuipCYQgmAkgLAaQgLAlgLAQQgMAQgXAJQgQAFgdAFQgeAEgVgHQgJAOgCAKQgEAXgEAMQgIAXgbASQgQAKgiASQgKAFgRAYQgVAmgQAUQgXAcgdAIQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQARgOAjAAIAJAAQAaAAAUAEQBJAJA6A1QAiAggFAbQgCAJgEAHIACAKQACAMACAbIAQEjQAGBdAKAnQAfCKCRCUQBHBIA9AoQAoAYBLAkQCAA9BFAUQA9ASCDASQB1APA9AEQBgAIBPgGIAdgCQASAAAKADgAzai/QgHB4AvBtQAdA5AKAfQAEAOAGAcQAGAdAEANQAOA0AbAaIgDg8IAAhUQgCh8gbh+QgIggAAgYQgpgdgtAAIgOAAgARXkxQgGABgZAQQgTALgHAJQgJATgIAJQAIAmAEA2QAFBpgGBmIgFA5QgJBIgOBHIADACQAig1AEghQACgQgCgpQgBgdACgdQAEhWAhhUQAOgkAhg+QASggABgSQABgOgEgMQgHgOgLgFQgHgEgJAAQgIAAgJACg");
	this.shape_128.setTransform(-34.8762,-107.2292);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#A0715E").s().p("AEeOJQgSgGgnAEQhPAGhigHQg7gFh1gPQiCgSg+gSQhEgUiAg9QhLgkgngYQg+gohGhIQiRiUggiJQgJgogHhcIgQkjQgCgbgCgMIgCgKQAEgHACgJQAFgbgiggQg6g2hJgJQgUgDgaAAIgJAAQgjgBgQAOQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAcgIAYgcQAPgTAVgmQARgYAKgGQAigRAQgKQAbgTAIgXIAIgjQACgKAIgNQAWAGAegEQAdgEAPgGQAXgIAMgRQAMgPAKglQALgbAngjQCoiZDuguQDogtDmBEIB0AjQBCATAzABQAWAAA5gFQAxgFAdADQAvAEA9AZIBmAuQBsAvBrAOIBVAJQAfAFAaAHQgIAHgDAOQgDANAEAbIAUCUQAFAkABATQAAAcgFAWQgHADgGAFQgKAKgCAPQgEAPAEAOQADAMAHAQIALAcQALAcACAyQATD+hODzQghBkgpBAQgiAyhVBXIhAA/QgkAgggAWQgyAghkAoIi+BMIgVgFgAwtC9QgEgNgGgeQgGgcgEgOQgLgfgcg5QgwhtAHh3QA1gFAvAiQABAYAHAgQAbB/ADB6QgBA4ABAcQAAAhACAbQgagZgOg0gARDDvQAOhIAJhHIAFg6QAHhlgGhpQgEg3gHgmQAHgIAKgTQAHgKATgLQAYgQAHAAQAVgFAMAGQALAFAGAOQAFANgCANQgBASgSAhQggA+gPAkQghBUgEBWQgCAcABAdQACAqgCAPQgEAigiA0IgDgBg");
	this.shape_129.setTransform(-42.1062,-105.021);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("ADfQFQgPgBgMgIIgGgFIgQACQhQAEhkgIQg5gEh8gQQiRgThGgUQhOgWiDg/Qg6gcghgRQgxgbglgaQhCgyhLhZQhEhRgmhFQgcgxgQgvQgXAIgbgQQgSgKgWgdQgJgMgGgLIgCAAQgRAVgagGQgNgCgKgIQgLgKgDgMQgEgLgBgTQABgXgCgHQgBgFgLgfQgLgZgNg2QgIgeAIgOQAGgMAPgDIAJAAIgJgQIgDgHQgLAGgOAAQgSAAgMgMQgKgLgDgUQgCgLABgXQAAg7gShZQgbiKgBgLIgDgTQgBgdANgMQAFgGAOgFQAOgFAFgEQAIgIAHgOIAIgaQAKgiAWgCQAHgBAMAFIATAHIATACIAEAAQAQgHAJgHQAAgNAHgTQAFgPAHgJQAKgMANACIABAAIAHgOQAVgoAUgLQAOgJAQACQAIABAHADQCfiWCJhTQC5hwC1gMQATgCBYAAQBDgBAqgGQAWgEA8gOQA0gOAegDQAOgCATABQAugBBDAMQB1ATAfACQAhACA1gCQBFgCARAAQBUABBnATQA/AKB7AeIGOBfQA5AOADAgQACAagdAQQgZANgiAAQAVAZAeANQAdAMAggBIA4gIQAggDASAOQAUAPgBAfQgBADABAEQgDAggXAXQgTATggAMQgUAGglAHQAXAKgFAhQgEAggYALQgrASg6gnQgWgQhKhFQgbgZgYgRQADAXAAAdQAAAugHBDIgJBTQAPgMAOgHQADgJAIgHQANgLAVgCQAIgBAdABQAOABAagBQAYABAPAIQAcAPAPAmQAeBIgaBGQgGAQgMAVIgTAkQgXAugVBNQgRA8ADAjIAGAhQADATABANQgBAXgTAuQgRAsgMAZQgbA1ggALQgSAGgVgFIgOgHQgGARgEARQgWBKgdA7QghA/g6BDQgmAphKBJQhHBDgkAZQgtAdhXAkIjVBZQgiAPgVAAIgBAAgADVOfIAWAFIC+hMQBjgoAyggQAggWAlggIBAg/QBUhXAigyQAqhAAhhkQBOjzgTj+QgCgygMgcIgLgcQgHgQgCgMQgEgOADgPQACgPALgKQAGgFAHgDQAFgWgBgcQgBgTgFgkIgUiUQgEgbAEgNQADgOAIgHQgagHgfgFIhWgJQhqgOhtgvIhmguQg8gZgvgEQgegDgxAFQg5AFgWAAQgygBhDgTIhygjQjohEjoAtQjuAuioCZQgmAjgLAbQgLAlgLAPQgMARgXAIQgQAGgcAEQgfAEgVgGQgIANgDAKIgIAjQgIAXgbATQgQAKgiARQgKAGgRAYQgUAmgQATQgXAcgdAIQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQARgOAjABIAJAAQAZAAAVADQBIAJA7A2QAhAggFAbQgBAJgEAHIABAKQADAMACAbIAQEjQAGBcAKAoQAfCJCRCUQBHBIA9AoQAoAYBKAkQCAA9BFAUQA9ASCDASQB1APA8AFQBgAHBPgGIAdgCQASAAAKAEgAzZi+QgHB3AvBtQAdA5AKAfQAFAOAFAcQAGAeAEANQAOA0AbAZQgCgbgBghQgBgcABg4QgCh7gch+QgHggAAgYQgqgegtAAIgNABgARWkvQgGAAgZAQQgTALgHAKQgJATgIAIQAIAmAEA3QAFBpgGBlIgGA6QgIBHgPBIIAEABQAhg0AFgiQACgPgCgqQgBgdACgcQADhWAihUQAOgkAhg+QASghABgSQABgNgEgNQgHgOgLgFQgHgEgJAAQgIAAgJADg");
	this.shape_130.setTransform(-34.8512,-107.2042);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#A0715E").s().p("AEdOJQgSgGgnAEQhPAGhhgHQg7gFh1gPQiCgSg+gSQhEgUiAg9QhKgkgogZQg9gohGhHQiRiUggiJQgJgogHhcIgQkjQgCgbgDgMIgBgKQAEgHABgJQAFgbghggQg6g2hJgJQgVgDgZAAIgJAAQgjgBgQAPQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAcgIAXgdQAQgTAUgmQARgYAKgGQAigRAQgKQAbgTAIgXQAEgLAEgXQACgLAIgNQAWAGAegDQAdgFAPgFQAXgJAMgRQALgPALglQALgbAngjQCniZDuguQDoguDmBEIB0AkQBCATAzABQAWAAA5gFQAxgFAdADQAvADA9AaIBmAuQBsAwBrANIBVAJQAfAFAaAIQgIAHgDANQgDANAEAcIAUCTQAFAlABATQAAAcgFAWQgHADgGAFQgKAKgCAPQgEAPAEAOQADAMAHAQIALAbQALAdACAyQATD+hODzQghBkgqBAQgiAyhUBXIhAA+QglAhggAWQgyAghjAnIi+BMIgVgFgAwsC9QgEgNgGgeQgGgcgEgOQgLgfgcg5QgwhtAHh3QA1gFAvAiQAAAYAIAgQAbB/ADB6QgBA4ABAcIACA8QgagZgOg0gARBDwQAPhIAIhHIAGg5QAGhmgFhpQgEg3gHgmQAHgJAKgTQAHgJATgLQAYgQAHAAQAVgFAMAGQALAFAGAOQAFAMgCAOQgBASgSAhQghA9gOAlQgiBUgDBWQgCAcABAdQACAqgCAPQgFAighA0IgEgBg");
	this.shape_131.setTransform(-42.1192,-104.987);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("ADeQFQgQAAgMgJQgEgCgCgDIgPACQhRAEhkgIQg4gEh8gQQiQgThGgUQhPgWiCg/Qg6gcgggRQgygbglgaQhBgyhLhZQhEhRgmhFQgcgxgQguQgXAHgbgPQgSgLgWgdQgJgMgGgLIgCABQgRAUgagFQgNgDgKgIQgLgKgDgLQgEgMgBgTQABgXgCgHQgBgFgLgfQgLgZgNg1QgIgeAIgPQAGgMAOgCIAKgBIgJgQIgDgGQgLAGgOAAQgSAAgMgNQgKgLgDgUQgCgKAAgYQAAg6gRhZQgciLgBgKIgCgUQgBgdANgMQAFgFANgFQAOgGAGgEQAIgHAGgOIAIgaQAKgjAWgCQAIgBAMAFIASAIIATABIAEABQAPgIAKgGQAAgOAHgTQAFgPAHgIQAKgMANABIABAAIAHgOQAVgoAUgLQANgJARACQAIABAGAEQCfiXCJhTQC5hwC0gMQAUgCBYAAQBDgBAqgGQAVgEA8gOQA0gOAfgDQAOgCASABQAvgBBDAMQB0AUAgABQAgACA2gCIBVgCQBUABBoATQA/AKB7AeIGOBfQA5AOADAhQACAagdAQQgZAMgiABQAVAZAeAMQAdAMAggBIA4gHQAhgDASAOQATAPgBAfQgBADABAEQgDAggXAXQgTATggAMQgUAGglAHQAXAKgFAhQgEAggZALQgqATg6goQgWgQhLhFQgagZgYgRQADAXAAAdQAAAugHBDIgKBTQAPgMAOgHQADgJAJgGQAMgLAVgCQAIgBAeAAQANABAbgBQAYACAPAHQAcAPAOAnQAeBHgaBGQgFAQgMAWIgUAkQgXAugVBMQgRA9ADAjIAGAhQADASABANQgBAYgTAuQgRArgMAZQgcA2gfALQgTAFgUgFIgOgGQgGARgEAQQgWBLgdA6QgiBAg6BCQglAqhKBIQhHBDglAZQgsAdhXAkIjVBZQgiAOgUAAIgBAAgADUOfIAVAGIC+hMQBjgoAyggQAggWAlggIBAg/QBUhXAigyQAqhAAhhkQBOjzgTj+QgCgxgLgdIgLgbQgHgRgDgLQgEgPAEgOQACgQAKgKQAGgFAHgDQAFgWAAgbQgBgUgFgkIgUiUQgEgbADgNQADgOAIgHQgagIgfgEIhVgKQhrgNhsgvIhmgvQg9gZgvgEQgdgCgxAEQg5AFgWAAQgzgBhCgSIhzgkQjnhEjoAtQjuAvinCYQgnAkgLAaQgLAlgLAQQgMARgXAIQgPAGgdAEQgeAEgWgHQgIAOgCAKQgEAXgEAMQgIAXgbASQgQAKgiASQgKAFgRAYQgUAmgQAUQgXAcgcAIQAAABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAQgOAjAAIAJAAQAZAAAVAEQBJAJA6A2QAhAggFAaQgBAJgEAIIABAJQADANACAbIAQEiQAHBdAJAnQAgCJCRCUQBGBIA9AoQAoAYBKAlQCAA8BEAUQA+ASCCATQB1AOA8AFQBgAHBPgGIAbgBQATAAALADgAzZi+QgHB4AwBtQAcA5ALAfQAEAOAGAcQAGAdAEANQAOA0AaAZIgCg7QgBgdABg3QgDh8gbh+QgIggAAgYQgpgegtAAIgOABgARVkuQgHABgYAQQgTALgHAJQgKATgHAIQAHAmAEA3QAFBpgGBmIgGA5QgIBIgPBHIAEACQAhg1AFghQACgQgCgpQgBgdACgdQADhWAihUQAOgkAhg+QASghABgRQACgOgFgNQgGgNgLgFQgHgEgKAAQgHAAgJACg");
	this.shape_132.setTransform(-34.8261,-107.2042);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#A0715E").s().p("AEbOJQgSgGgmAEQhPAGhhgIQg7gEh0gPQiCgSg+gSQhEgVh/g8QhLglgngYQg9gohHhIQiQiTggiJQgJgogHhcIgRkjIgEgnIgBgKQADgHACgJQAFgbgiggQg6g2hIgJQgVgDgZAAIgJAAQgjAAgQAOQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAcgIAXgcQAQgUAUgmQARgYAKgFQAhgSARgKQAagSAIgXIAIgjQADgLAIgNQAVAGAegDQAdgFAQgFQAWgJAMgRQALgPALglQALgbAmgjQCoiZDtgvQDogtDmBEIB0AkQBCASAzABQAWAAA5gFQAxgEAdACQAvAEA9AaIBmAuQBsAwBrANIBWAKQAfAEAaAIQgIAHgDANQgEAOAEAbIAUCUQAFAkABAUQAAAcgFAWQgHADgGAFQgLAKgCAPQgDAOAEAPQADALAHARIALAbQALAdACAyQATD+hPDzQghBkgqBAQgiAyhUBXIhAA+QgkAgghAWQgxAghkAnIi9BMIgWgFgAwrC8QgEgNgGgdQgGgcgEgOQgLgfgcg5QgwhtAHh3QA0gFAwAiQAAAYAHAgQAcB/ADB6QgBA4ABAcIADA8QgbgZgOg1gARADxQAOhHAJhIIAFg5QAHhmgFhqQgEg2gHgmQAHgJAJgTQAHgJAUgLQAYgQAHgBQAVgFAMAHQALAFAGAOQAFAMgCAOQgBASgSAhQghA9gOAlQgiBUgEBWQgCAdACAcQABAqgCAPQgEAigiA0IgDgBg");
	this.shape_133.setTransform(-42.1192,-104.946);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("ADdQFQgQgBgMgIQgEgCgCgDIgPACQhRAEhjgIQg5gFh7gPQiQgThGgUQhOgWiChAQg6gbghgSQgxgaglgbQhBgyhLhYQhEhSgmhEQgcgxgQgvQgXAIgbgQQgRgKgXgdQgJgMgGgLIgCAAQgRAVgZgGQgNgCgKgIQgLgKgEgMQgEgLAAgTQAAgXgCgHQAAgFgMgfQgLgZgNg1QgIgfAIgOQAGgMAPgCIAJgBIgJgQIgDgGQgLAGgOAAQgRgBgMgMQgLgLgCgUQgCgKAAgYQAAg6gShZQgciLgBgKIgCgUQgCgdAOgMQAFgFANgFQAOgGAFgEQAIgHAHgOIAIgaQAJgjAXgCQAHgBAMAFIATAIIATABIADABQAQgIAJgGQAAgOAHgTQAFgPAHgIQAKgMANABIABAAIAHgOQAVgoAUgLQANgJARACQAIABAHAEQCeiXCIhTQC5hxC1gLQATgCBYAAQBDgBAqgGQAVgEA8gPQA0gOAfgCQAOgCASAAQAvAABDAMQB0ATAgACQAgACA2gCQBFgCARAAQBUABBnASQA/ALB7AeIGPBfQA4AOAEAhQACAageAQQgZAMgiABQAVAZAeANQAdAMAhgBIA4gIQAggDASAOQAUAPgBAfQgBADAAAEQgCAhgYAWQgTATgfAMQgVAHglAHQAXAJgFAiQgEAfgYAMQgrASg6gnQgWgQhKhGQgbgYgYgSQADAYAAAcQAAAugHBDIgKBUQAPgMAOgHQADgJAJgHQAMgLAWgCQAIgBAdABQAOABAagBQAYABAPAIQAcAPAPAmQAdBIgaBGQgFAQgMAWIgUAkQgXAugVBNQgSA8ADAjIAHAhQADASAAANQAAAYgTAuQgSArgLAZQgcA2ggALQgSAGgUgFIgPgHQgGARgEARQgWBKgdA6QghBAg6BCQgmAphKBIQhHBEgkAYQgsAdhYAkIjUBZQgiAOgUAAIgBAAgADSOfIAWAGIC9hMQBkgnAxggQAhgWAkghIBAg+QBUhXAigyQAqhAAhhkQBPjzgTj+QgCgxgLgdIgLgcQgHgQgDgMQgEgOADgPQACgPALgKQAGgFAHgDQAFgWAAgcQgBgTgFglIgUiTQgEgcAEgNQADgOAIgHQgagHgfgFIhWgJQhrgOhsgvIhmgvQg9gZgvgEQgdgDgxAFQg5AFgWAAQgzgBhCgSIhzgkQjnhEjoAtQjtAuioCZQgmAkgLAaQgLAlgLAQQgMARgWAIQgQAGgdAEQgeAEgVgHQgIAOgDAKIgIAjQgIAXgaATQgRAKghARQgKAGgRAYQgUAmgQATQgXAcgcAIQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAQgOAjABIAJAAQAZAAAVADQBIAJA6A2QAiAggFAaQgCAJgDAIIABAJIAEAoIAREiQAHBcAJAoQAgCJCQCUQBHBIA9AoQAnAYBLAkQB/A9BEAUQA+ASCCASQB0APA8AFQBgAHBPgGIAagBQATAAALADgAzYi9QgHB3AwBtQAcA5ALAfQAEAOAGAcQAGAdAEANQAOA0AbAZIgDg8QgBgcABg3QgDh7gch/QgHggAAgYQgpgdgtAAIgOABgARUktQgHAAgYAQQgUALgHAKQgJATgHAIQAHAmAEA3QAFBpgHBmIgFA6QgJBHgOBHIADACQAig1AEghQACgQgBgpQgCgdACgcQAEhXAihUQAOgkAhg+QASghABgRQACgOgFgNQgGgOgLgFQgHgDgKAAQgHAAgJACg");
	this.shape_134.setTransform(-34.8051,-107.1792);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#A0715E").s().p("AEaOJQgSgFgmADQhPAGhggHQg7gFh1gPQiBgSg9gSQhFgVh/g8QhKglgngYQg9gohHhIQiQiTggiJQgJgogHhcIgRkiQgCgbgCgNIgCgJQAEgIABgJQAFgaghggQg6g2hJgJQgUgDgZAAIgJAAQgjgBgRAOQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAdgIAXgcQAPgTAVgmQAQgYAKgGQAigRAQgKQAbgTAIgXQADgMAEgXQADgKAIgOQAVAHAegEQAdgEAQgGQAWgIAMgRQALgQALglQALgaAmgkQCniZDuguQDnguDmBFIB0AjQBDATAyABQAWAAA5gFQAxgFAdADQAvAEA9AZIBmAvQBsAvBrAOIBWAJQAfAFAaAIQgIAHgDANQgEAOAEAbIAUCUQAFAkABAUQAAAcgFAWQgHADgGAFQgLAKgCAPQgDAPAEAOQACAMAHAQIAMAcQALAdACAxQASD+hPDzQggBkgqBAQgiAyhUBXIhBA+QgkAgggAWQgyAghjAnIi9BMIgWgGgAwqC9QgEgNgGgdQgGgcgEgOQgKgfgdg5QgwhtAHh3QA0gFAvAiQABAYAHAgQAcB+ADB7IAABTIADA8QgbgZgOg0gAQ+DzQAPhIAJhHIAFg6QAHhmgFhpQgEg3gIgmQAIgIAJgTQAHgKAUgLQAYgQAHAAQAVgFAMAGQALAFAGAOQAFANgCAOQgBARgSAhQghA+gOAkQgiBUgEBXQgCAcABAdQACAqgCAPQgFAighA0IgEgBg");
	this.shape_135.setTransform(-42.1442,-104.908);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("ADbQFQgQAAgMgJQgDgCgCgDIgQACQhQAEhjgIQg5gEh7gQQiQgUhGgUQhNgViChAQg6gbgggSQgygbgkgaQhBgyhMhYQhDhRgmhFQgcgxgQguQgXAHgbgPQgSgLgWgdQgJgMgGgLIgCABQgRAUgZgFQgNgDgKgIQgLgKgDgLQgEgMgBgTQAAgXgCgGQAAgFgMgfQgLgZgNg2QgIgeAIgOQAGgMAPgDIAJAAIgJgQIgDgHQgLAGgOAAQgSAAgMgMQgKgMgDgTQgCgLABgXQgBg7gRhZQgciKgBgLIgDgTQgBgdANgMQAFgGAOgFQANgFAGgEQAIgIAGgOIAIgaQAKgiAWgCQAHgBAMAFIATAHIATACIADAAQAQgHAJgHQAAgNAHgTQAFgPAHgJQAKgMANACIABAAIAHgOQAUgoAUgLQAOgJARACQAIABAGADQCeiWCIhUQC5hwC0gMQAUgCBYAAQBCgBAqgGQAWgEA8gPQA0gOAfgCQAOgCASAAQAvAABCAMQB1ATAfACQAhACA1gCQBGgCAQAAQBUABBoATQA/AKB7AeIGPBfQA5AOADAhQACAbgeAQQgZAMgiAAQAVAZAeANQAdAMAhgBIA4gHQAggDASAOQAUAPgBAfQgBADAAAEQgCAggYAXQgTATgfAMQgVAHglAHQAXAJgFAiQgEAggZALQgqASg6gnQgXgQhKhGQgagZgYgRQACAXABAdQgBAugGBEIgKBTQAPgMAOgHQADgJAIgHQANgLAVgCQAIgBAeABQANABAbgBQAYABAPAIQAcAPAOAnQAeBIgbBGQgFAPgMAWIgTAkQgYAugVBNQgSA9AEAjIAGAgQADATAAANQAAAYgTAuIgeBEQgbA2ggALQgSAFgUgFIgPgGQgGAQgEARQgWBKgdA7QgiA/g6BDQglAphKBHQhHBEgkAYQgsAdhYAkIjUBYQgiAOgUAAIgBAAgADROgIAVAFIC+hLQBjgoAxgfQAggWAlggIBAg/QBUhWAigzQAqg/AhhkQBPjzgTj/QgCgxgLgdIgLgbQgHgRgDgLQgEgPAEgOQACgQAKgKQAHgFAHgDQAFgWgBgcQgBgTgFgkIgTiUQgEgcADgNQADgOAIgHQgagIgfgEIhVgKQhrgNhtgvIhmgvQg8gagvgEQgdgCgxAEQg5AFgWAAQgzgBhDgSIhygkQjnhEjoAtQjtAvinCZQgnAjgLAbQgKAlgLAPQgMARgXAJQgPAFgdAFQgeADgWgGQgIANgCALQgEAXgEAMQgIAXgbASQgQAKghASQgKAFgRAYQgUAmgQAUQgXAcgcAIQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABABQAQgOAjAAIAJAAQAZAAAVAEQBIAJA6A1QAiAggFAbQgCAJgDAHIABAKQADAMACAbIAQEjQAHBcAKAnQAgCJCQCUQBGBIA9AoQAnAYBLAkQB/A9BEAUQA9ASCCASQB0APA8AFQBgAIBOgGIAbgCQATAAALAEgAzXi9QgHB3AwBtQAcA5AKAfQAFAOAGAcQAGAdAEANQAOA0AaAaIgDg8IAAhUQgCh7gch+QgIggAAgYQgpgegtAAIgNABgARSksQgGABgZAQQgTALgHAJQgKATgHAJQAIAmADA2QAFBqgHBmIgFA5QgJBIgOBHIADACQAig1AEghQACgQgBgpQgBgdABgdQAEhWAihUQAPglAgg+QASggABgSQACgOgEgMQgHgOgLgFQgGgEgKAAQgIAAgJACg");
	this.shape_136.setTransform(-34.7803,-107.1542);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A0715E").s().p("AEZOJQgSgFgmADQhOAGhhgIQg7gEh0gPQiBgTg9gSQhEgUh/g9QhKgkgngYQg+gohGhIQiQiTggiJQgJgogHhcIgRkiQgCgbgDgMIgBgKQADgHACgJQAFgbgiggQg6g2hIgJQgUgDgaAAIgJAAQgjgBgQAOQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAcgIAYgcQAPgTAUgmQARgYAKgGQAhgRAQgKQAbgTAIgXIAIgjQACgKAIgOQAWAHAegEQAcgEAQgGQAWgIAMgRQALgQALglQAKgaAngkQCniZDtgvQDogtDmBEIBzAkQBDATAyABQAWAAA5gFQAxgFAeADQAvAEA8AZIBmAvQBtAwBrANIBVAKQAfAEAaAIQgIAHgDANQgDAOAEAbIATCVQAFAkABAUQAAAcgFAWQgHADgGAFQgLAKgCAPQgDAOAEAPQACALAHARIALAbQALAdACAyQATD+hPDzQghBkgqBAQgiAyhUBXIhAA+QglAgggAWQgxAfhjAnIi9BMIgWgGgAwoC9QgEgNgGgdQgGgcgFgOQgKgfgdg5QgwhtAHh3QA0gFAvAiQABAYAHAgQAcB+ADB7QgBA3ABAcIADA8QgagZgOg0gAQ9D0QAOhIAJhHIAGg6QAHhmgGhpQgDg3gIgmQAIgJAJgTQAHgJAUgLQAYgQAHgBQAVgFAMAHQALAFAGAOQAFAMgCAOQgBASgSAhQghA+gPAkQghBUgEBXQgCAcABAdQABAqgCAPQgEAigiA0IgDgBg");
	this.shape_137.setTransform(-42.1442,-104.871);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("ADaQFQgQAAgMgJQgDgCgCgDIgQACQhQAFhjgJQg5gEh6gQQiQgUhFgUQhOgWiBg/Qg6gcghgRQgxgbgkgaQhBgyhLhYQhEhRgmhEQgcgxgQgvQgXAHgbgPQgRgLgXgdQgJgMgGgLIgBABQgRAUgagFQgNgCgJgJQgLgJgEgMQgEgMAAgTQAAgXgCgGQgBgFgLgfQgLgZgNg2QgJgeAIgOQAGgMAPgCIAJgBIgJgQIgDgGQgLAGgOAAQgRgBgMgMQgLgLgCgUQgCgKAAgYQAAg6gShZQgciLgBgKIgDgUQgBgdANgMQAFgFANgFQAOgGAFgEQAIgHAHgOIAIgaQAJgjAXgCQAHgBAMAFIASAIIATABIAEABQAPgIAJgGQAAgOAHgTQAFgPAHgIQAKgMANABIABAAIAHgOQAVgoAUgLQANgJARACQAIABAGAEQCeiXCIhUQC4hwC1gMQATgCBYAAQBDgBAqgGQAVgEA8gPQA0gOAfgCQAOgCASAAQAvAABDAMQB0ATAgACQAgACA2gCQBFgCARAAQBUABBnATQA/AKB7AeIGPBgQA5AOADAhQACAagdAQQgZANgiAAQAVAZAeANQAdAMAggBIA4gHQAhgDASAOQATAPgBAfQgBADABAEQgDAggXAXQgUATgfAMQgVAHglAHQAXAJgFAiQgEAggYALQgrATg6goQgWgQhKhGQgbgZgYgRQADAXAAAdQAAAugHBEIgKBTQAPgMAOgGQADgKAIgGQANgLAVgCQAIgBAeAAQANABAbgBQAYACAPAIQAcAOAOAnQAeBIgbBGQgFAQgMAWIgUAkQgXAugVBNQgSA8ADAjIAGAhQADATABANQgBAYgTAuIgdBEQgcA1ggALQgSAGgUgFIgPgHQgGARgEARQgWBKgdA6QghA/g6BDQgmAphKBIQhHBDgkAYQgsAdhXAkIjUBXQgiAOgUAAIgBAAgADQOgIAVAGIC9hMQBjgnAygfQAggWAkggIBAg+QBUhXAigyQAqhAAhhkQBPjzgSj+QgCgygLgdIgLgbQgHgRgDgLQgEgPAEgOQACgPAKgKQAHgFAHgDQAFgWgBgcQgBgUgFgkIgTiVQgEgbAEgOQADgNAIgHQgagIgfgEIhWgKQhrgNhsgwIhmgvQg9gZgvgEQgdgDgxAFQg5AFgWAAQgzgBhCgTIhzgkQjnhEjoAtQjtAvinCZQgmAkgLAaQgKAlgLAQQgMARgXAIQgPAGgdAEQgeAEgVgHQgIAOgDAKIgIAjQgIAXgaATQgQAKgiARQgKAGgQAYQgUAmgQATQgXAcgcAIQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQAQgOAjABIAJAAQAZAAAVADQBIAJA6A2QAhAggFAbQgBAJgEAHIACAKQACAMACAbIAREiQAHBcAKAoQAgCJCQCTQBGBIA9AoQAnAYBKAkQB/A9BEAUQA9ASCCATQB0APA7AEQBgAIBOgGIAbgBQATAAALADgAzXi8QgGB3AwBtQAcA5ALAfQAEAOAGAcQAGAdAEANQAOA0AbAZIgDg8QgBgcAAg3QgDh7gch+QgHggAAgYQgqgegtAAIgNABgARRkrQgGABgZAQQgTALgHAJQgKATgHAJQAHAmAEA3QAFBpgHBmIgFA6QgJBHgPBIIAEABQAhg0AFgiQACgPgCgqQgBgdACgcQAEhXAihUQAOgkAhg+QASghABgSQACgOgEgMQgHgOgLgFQgHgEgJAAQgIAAgJACg");
	this.shape_138.setTransform(-34.7553,-107.1542);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#A0715E").s().p("AEYOJIAAAAQgRgFgnADQhOAGhhgIQg6gFh0gPQiBgSg9gSQhEgVh+g8QhKgkgogZQg8gnhGhIQiRiUgfiIQgKgogHhcIgRkiQgDgagCgNIgCgKQAEgHABgJQAFgbghggQg6g1hIgKQgUgDgZAAIgKAAQgigBgQAOIgCACIgBgFQAcgHAYgdQAPgTAUgmIAJgUIARgKQAigRAQgKQAbgTAIgXQADgLAEgXQADgLAIgOQAVAHAegEQAcgEAQgGQAXgIAMgRQALgPAKgmQALgaAmgkQCniZDtgvQDngtDmBEIBzAkQBDATAzABQAWAAA5gFQAxgEAdACQAvAEA8AZIBmAvQBtAwBrAOIBVAJQAgAFAZAHQgHAIgEANQgDAOAEAbIATCUQAFAlABAUQAAAbgEAWQgHADgHAFQgKALgDAPQgDAOAEAPQADAMAGAQIAMAbQAKAdACAyQATD/hQDyQghBkgqBAQghAyhUBXIhAA9QglAhggAVQgxAghjAnIi9BLgAv/EJQgagYgOg0QgEgNgGgdQgGgcgFgOQgKgfgcg5QgwhtAGh3QA0gFAvAiIADADQgCAVAHAgQAcB+ADB7IABBTIADA8gAQ8D1QAOhHAJhIIAFg6QAIhmgFhpQgEg3gIgmQAIgJAKgTQAHgJATgLQAMgIAIgHIALgCQAVgEAMAGQALAFAGAOQAFAMgCAOQgBASgSAhQghA+gOAlQgiBTgFBXQgCAdACAcQABAqgCAPQgFAighA0IgDgBg");
	this.shape_139.setTransform(-42.1603,-104.8497);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("ADYQFQgPAAgMgJQgEgCgCgDIgPACQhQAEhjgIQg4gFh7gQQiPgThGgUQhNgWiBhAQg6gbgggSQgxgaglgbQhBgxhLhZQhDhRgmhEQgcgxgQguQgXAHgbgPQgRgLgXgdQgJgMgGgLIgBABQgRAUgagFQgMgDgKgIQgLgKgEgLQgEgMAAgTQAAgXgCgGQgBgFgLgfQgLgZgNg2QgIgeAHgOQAGgMAPgCIAJgBIgJgQIgDgGQgLAGgOAAQgRgBgMgMQgLgLgCgUQgCgKAAgYQAAg6gShZQgdiLgBgKIgCgUQgCgdANgMQAFgFAOgFQAOgGAFgEQAIgHAGgOIAIgaQAJgjAXgCQAHgBAMAFIASAIQAFABAOAAIAEABQAQgIAIgGQAAgOAHgTQAGgPAGgIQALgMAMABIABAAIAHgOQAVgoATgLQAOgJAQACQAIABAHAEQCdiXCIhUQC4hxC0gLQAUgCBYgBQBDAAApgHQAWgEA8gOQA0gOAegDQAPgCASABQAugBBDAMQB1AUAfACQAhACA1gCQBGgDAQABQBUAABoATQA/ALB7AeIGPBgQA5AOADAhQADAageAQQgZANgiAAQAVAZAeANQAdAMAggBQATgCAlgFQAhgDASAOQATAPgBAfIAAAHQgDAhgXAXQgTATggAMQgUAGgmAHQAXAKgFAhQgEAggZAMQgqASg6gnQgWgRhLhGQgagYgYgSQADAYAAAdQgBAugHBDIgKBUQAPgMAOgHQAEgJAIgHQANgLAVgCQAIgBAdABQAOABAagBQAYACAPAHQAcAPAPAnQAdBIgaBGQgGAQgMAWIgTAkQgXAugWBNQgSA8ADAjIAGAhQADATABANQgBAYgTAuQgRArgMAZQgcA1ggALQgSAGgUgFIgPgHIgKAiQgWBKgdA6QgiA/g6BDQglAphKBHQhHBDgkAYQgsAdhXAkIjUBXQghAOgUAAIgCAAgADOOgIAAAAQAJACAIAGIAFgCIC8hLQBkgnAxggQAggWAkggIBAg+QBUhWAigyQAqhAAhhkQBQjzgTj+QgCgygLgdIgLgbQgGgRgDgLQgEgPADgOQADgQAKgKQAGgFAHgDQAFgWAAgcQgBgTgFglIgTiUQgEgbADgOQAEgOAHgHQgagHgfgFIhVgKQhrgNhtgwIhmgvQg8gZgvgEQgegDgxAFQg5AFgWAAQgygBhDgTIhygkQjnhEjoAtQjtAvimCZQgmAkgLAaQgKAmgMAPQgLARgXAIQgQAGgcAEQgeAEgWgHQgIAOgCAKQgEAXgEAMQgIAXgaATQgQAKgiARIgRAKIgJAUQgUAmgQATQgXAcgcAIIABAFIABgCQAQgOAjABIAJAAQAaAAAUADQBIAJA6A2QAhAggFAbQgBAJgEAHIACAKQACAMACAbIASEiQAHBcAJAoQAgCICQCUQBGBHA9AoQAnAYBKAlQB/A8BEAVQA9ASCBASQB0APA7AFQBgAIBOgGIAagBQATAAALADgAzWi8QgGB3AvBtQAdA5AKAfQAFAOAGAcQAGAdAEANQAOA0AaAYIAAABIgDg8IAAhTQgDh7gch+QgIggADgVIgDgDQgpgegtAAIgNABgARQkqIgMACQgHAGgMAJQgUALgHAJQgJATgIAJQAIAmADA3QAGBpgIBmIgFA6QgJBHgPBIIAEABQAhg0AFgiQACgPgCgqQgBgdACgcQAFhXAhhUQAPgkAhg+QASghABgSQACgOgFgMQgGgOgLgFQgHgEgKAAQgHAAgJACg");
	this.shape_140.setTransform(-34.7446,-107.1289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},74).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).wait(1));

	// body
	this.instance_13 = new lib.CachedBmp_4553();
	this.instance_13.setTransform(-208.95,-37.9,0.2359,0.2359);

	this.instance_14 = new lib.CachedBmp_4554();
	this.instance_14.setTransform(-285.75,-32.05,0.2359,0.2359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},74).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.7,-291.1,520.9,1411.6);


// stage content:
(lib.banjo_finishedGame_birddrop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {youLose:4,level1:2,cut2:5,cut3:6,cut4:7,level2:3,titlescreen:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// SETUP -- INTRO ANIMATION
		
		this.louie.visible = false;
		this.land_background_mc.visible = false;
		this.mainSeagull_mc.visible = false;
		this.chair.visible = false;
		this.beachBall.visible = false;
		this.umbrella.visible = false;
		this.beachTowel.visible = false;
		this.louieSit.visible = false;
		this.burgerCloseUp.visible = false;
		this.lipSyncLouie.visible = false;
		this.beachBg.visible = false;
		this.startButton.visible = false;
		this.stage.getChildAt(0).skipButton.mouseEnabled = false;
		
		createjs.Sound.muted = false; //universal sound is not muted
		this.skipButton.alpha = 0.0; // skip button is hidden
		
		function canClick () {
			this.stage.getChildAt(0).skipButton.mouseEnabled = true;
		}
		
		// PLAY BUTTON
		
		this.playButton.addEventListener("click", playIntro.bind(this));
		
		function playIntro()
		{
			this.beach_background_mc.gotoAndPlay(2);
			this.playButton.visible = false;
			this.title.visible = false;
			createjs.Sound.play("seagull");
			createjs.Sound.play("music");
			createjs.Sound.play("bleep");
			createjs.Tween.get(this.skipButton).wait(5000).to({ alpha: 1 }, 3000);
			
			setTimeout(canClick,4000);
		}
		
		// SKIP BUTTON
		
		this.skipButton.addEventListener("click", goToTitle.bind(this));
		
		function goToTitle()
		{
			this.stop();
			exportRoot.gotoAndStop("titlescreen");
		}
		
		// SOUND TOGGLE BUTTON
		
		this.soundButton.addEventListener("click", toggleSound.bind(this));
		
		function toggleSound()
		{
			createjs.Sound.muted = !createjs.Sound.muted; // sets muted sound to the inverse of itself when clicked
			//console.log("test");
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		// SET UP -- TITLE SSCREEN 
		
		createjs.Sound.stop(); //stops all other sounds
		createjs.Sound.play("music3", {loop:-1});
		
		this.beachBg.gotoAndStop(144);
		this.beachBg.alpha = 1.0;
		
		this.title.visible = true;
		this.startButton.visible = true;
		this.skipButton.visible = false;
		this.beachBg.visible = true;
			
		// START BUTTON
		
		this.startButton.addEventListener("click", startGame.bind(this));
		
		function startGame()
		{
			createjs.Sound.play("bleep");
			createjs.Sound.stop();
			createjs.Sound.play("music2", {loop:-1});
			this.gotoAndStop("level1");
		}
	}
	this.frame_2 = function() {
		// SETUP - GAME LEVEL 1 //
		
		var root = this;
		var deck = root.deck;
		var square = root.test;
		var seagull = root.seagull;
		var maxIndex = deck.children.length;
		var faces = [];
		var scorecard = root.scorecard;
		
		function start() {
		
			exportRoot.stop();
			stage.mouseMoveOutside = true;
			faces = getRandomArray(maxIndex);
			setFaces(faces, maxIndex);
			deck.on("click", onClickDeck);
			//console.log(points);
		
		}
		
		// DRAG SEAGULL AROUND
		
		this.seagull.addEventListener("pressmove", dragIT);
		
		
		function dragIT (e) {
		//globalToLocal converts global coordinates to Local coordinates	
			var p = stage.globalToLocal (e.stageX, e.stageY);
		//currentTarget is whatever movie clip object the mouse is over	
			e.currentTarget.x = p.x;
			e.currentTarget.y = p.y;
			this.stage.update();
			
			seagull.setBounds(p.x, p.y, 150,75);
			seagull.getTransformedBounds();
		}
		
		function onClickDeck(e) {
		
			var face = e.target;
			createjs.Sound.play("click");
		
			face.mouseEnabled = false;
			
			//console.log(scorecard.score.text);
		
			if (face.cheeseburger) {
				var burger = new lib.Cheeseburger();
				face.addChild(burger);
				burger.scaleX = 0.25;
				burger.scaleY = 0.25;
				createjs.Sound.play("chime");
				points++;
				scorecard.score.text = points;
				
			} else if (face.txt.text == 1 && scorecard.score.text == 0) {
				
				exportRoot.gotoAndStop("youLose");
				//console.log("You Lose Cut Scene Triggered");
				
				// change this to display 'you lose' animation
				
			} else {
				var crab = new lib.Crab();
				face.addChild(crab);
				crab.scaleX = .5;
				crab.scaleY = .5;
				createjs.Sound.play("squawk");
				deck.mouseEnabled = false;
		
			}
			
			if (points > 17){
				console.log ("this worked");
				exportRoot.gotoAndStop("cut2");
			}
		
			//console.log(scorecard.score.text);
			//console.log(face.txt.text);
		
		}
		
		function nextLevel() {
			
			this.gotoAndStop(3);
		}
		
		function setFaces(array, max) {
		
			for (var i = 0; i < max; i++) {
				var card = deck.getChildAt(i);
				//card.index = i;
				card.name = "card" + i;
				var result = Math.floor(Math.random() * 4) + 1;
				card.txt.alpha = 0.0;
				card.txt.text = result;
				card.cheeseburger = false;
				if (result >= 2 && result <= 4) {
					card.cheeseburger = true;
				}
				//console.log(card.name);
			}
		}
		
		//USE RANDOM ARRAY TO RANDOMIZE POSITION OF CARDS//
		
		function getRandomArray(max) {
		
			var array = [];
		
			for (var i = 0; i < max; i++)
				array[i] = Math.floor(i * 0.5);
		
			return array.sort(
				function (a, b) {
					return 0.5 - Math.random()
				}
			);
		
			return array;
		}
		
		//Run Start Function
		start();
		init();
	}
	this.frame_3 = function() {
		this.stop();
		var root = this;
		
		var ammo = [];
		var ammoRemaining = points;
		var seagull = this.seagull;
		var lou = this.louie2;
		var ground = this.backGroundTwo;
		var myNum;
		var frontCloud;
		var mousePosition = 0;
		var velocityX = 1;
		var velocityY = 0;
		var speed = 5;
		var isDead = false;
		createjs.Sound.stop();
		createjs.Sound.play("music2", {
			loop: -1
		});
		
		var dy = 10;
		var gravity = 0.1;
		var gravitySpeed = 0;
		
		var movementTimer = 0;
		
		root.stage.mouseMoveOutside = true;
		root.stage.getChildAt(0).ammoLeft.text = ammoRemaining;
		
		// SUBTLE BACKGROUND MOVEMENT //
		
		var midpoint = this.stage.canvas.width / 2
		var backgroundOneX = this.backGroundOne.x;
		
		root.stage.on("stagemousemove", function (e) {
			var mousePosition = e.stageX;
			var newX = 0;
			if (mousePosition < midpoint) {
				newX = (midpoint - mousePosition) / 5;
			} else if (mousePosition > midpoint) {
				newX = (mousePosition - midpoint) / 5;
				newX *= -1
			}
		
			createjs.Tween.get(root.backGroundOne, {
				override: true
			}).to({
				x: backgroundOneX + newX
			}, 2000, createjs.Ease.quintOut);
			createjs.Tween.get(root.backGroundTwo, {
				override: true
			}).to({
				x: backgroundOneX + 4 * (newX / 2)
			}, 1000, createjs.Ease.quintOut);
		});
		
		// ARRAY TO CREATE CLOUDS //
		
		var ele = new Array();
		for (var e = 0; e < 6; e++) {
			ele[e] = new lib.cloud();
			ele[e].speedX = 3;
			ele[e].speedY = 0;
			ele[e].x = Math.random() * -500 - 50;
			ele[e].y = (-1 * Math.random() * 150) - 400;
			ele[e].scaleX = ele[e].scaleY = 2.25 - (Math.random() * 4 / 2);
			ele[e].alpha = Math.random() + 0.3;
			this.stage.getChildAt(0).backGroundOne.addChild(ele[e]);
		}
		
		// INITIALIZE FUNCTION // 
		
		function init() {
			createjs.Ticker.on("tick", update);
			seagull.gotoAndPlay("seagullFlyLeft");
		}
		
		// IF LOUIE IS HIT -> PLAYER WINS //
		
		function youWin() {
			createjs.Sound.stop();
			exportRoot.gotoAndPlay("cut4");
			return;
		}
		
		function youLose() {
			createjs.Sound.stop();
			createjs.Sound.play("music4");
			this.stage.removeAllEventListeners("tick");
			exportRoot.gotoAndPlay("cut3");
		}
		
		function randomTimer() {
			movementTimer = (Math.random() * 50) + 50;
		}
		
		function changeDirection() {
		
			velocityX = -velocityX;
			if (velocityX <= 0) {
				lou.gotoAndPlay("louLeft");
			} else {
				lou.gotoAndPlay("louRight")
			}
		}
		
		function randomNumber() {
			myNum = Math.floor(Math.random() * 10000);
			return myNum
		}
		
		root.stage.addEventListener("mousedown", fl_MouseClickHandler.bind(this));
		//seagull.addEventListener("mousedown", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler() {
			fire();
			createjs.Sound.play("squawk");
		}
		
		function fire() {
			var dropping = new lib.poop();
			var pt = this.stage.getChildAt(0).seagull.getChildAt(0).exitArea.localToLocal(0, 0, this.stage.getChildAt(0).backGroundTwo);
			this.stage.getChildAt(0).backGroundTwo.addChild(dropping);
			dropping.x = pt.x + 15;
			dropping.y = pt.y + 15;
			this.stage.setChildIndex(dropping, this.document.numChildren - 1);
			ammo.push(dropping);
			resetGravity();
			ammoRemaining--;
			speed += 2;
			this.stage.getChildAt(0).ammoLeft.text = ammoRemaining;
			//console.log(ammoRemaining);
		}
		
		function resetGravity() {
			dy = 5;
			gravity = 1;
			gravitySpeed = 0;
		}
		
		function update() {
		
			isDead = false;
		
			for (var n = 0; n < 6; n++) {
				var child = ele[n];
				if (child.x < 1800) {
					child.x += child.speedX;
				} else {
					child.x = Math.random() * -1500 - 100;
					child.y = (-1 * Math.random() * 150) - 400;
					child.alpha = Math.random() + 0.3;
					child.speedX = 3;
					child.speedY = 0;
					child.scaleX = child.scaleY = 2.25 - (Math.random() * 4 / 2);
		
				}
			};
		
			//console.log(velocityX);
			//console.log(myNum);
			randomNumber();
			movementTimer--;
		
			if (movementTimer <= 0) {
				changeDirection();
				randomTimer();
			}
		
			lou.x += velocityX * speed;
		
			if (lou.x < 0) {
				lou.x = 0;
				randomTimer();
				changeDirection();
			}
		
			if (lou.x > 900) {
				//lou.x = 940;
				randomTimer();
				changeDirection();
			}
		
			//console.log(lou.x);
			//console.log(lou.y);
		
			for (var i = 0; i < ammo.length; i++) {
				var dropping = ammo[i];
				gravitySpeed += gravity;
				dropping.y += dy + gravitySpeed;
				dropping.x = dropping.x + 2;
		
				//console.log ("louie bounding coordinates: " + "(" + (lou.x - (lou.width * 0.5)) + ")" + "," + "(" + (lou.x + (lou.width * 0.5)) + ")" );
				//console.log("umbrella's height: " + ground.umbrellaLeft.getTransformedBounds().y);
		
				var pt = dropping.localToLocal(0, 0, lou);
				if (lou.hitTest(pt.x, pt.y)) {
					dropping.gotoAndPlay("splat");
					createjs.Sound.play("splatSound");
					removeObject(dropping, ammo);
					i--
					stage.removeChild(dropping);
					stage.removeAllEventListeners("tick");
					setTimeout(youWin, 400);
				};
		
				console.log(pt.x, pt.y);
				console.log("lou " + lou.x, lou.y);
				console.log("hittest " + lou.hitTest(pt.x, pt.y));
		
		
				if (dropping.y >= (ground.getTransformedBounds().height) - ground.y + 50) {
					dy = 0;
					removeObject(dropping, ammo);
					dropping.gotoAndPlay("splat");
					createjs.Sound.play("splatSound");
					i--
		
				} else if (dropping.y > ground.umbrellaLeft.getTransformedBounds().y + 75 && dropping.x < (ground.umbrellaLeft.x + (ground.umbrellaLeft.getTransformedBounds().width * 0.5)) && dropping.x > (ground.umbrellaLeft.x - (ground.umbrellaLeft.getTransformedBounds().width * 0.5))) {
					dy = 0
					removeObject(dropping, ammo);
					dropping.gotoAndPlay("splatTwo");
					createjs.Sound.play("splatSound");
				} else if (dropping.y > ground.umbrellaRight.getTransformedBounds().y + 75 && dropping.x < (ground.umbrellaRight.x + (ground.umbrellaRight.getTransformedBounds().width * 0.5)) && dropping.x > (ground.umbrellaRight.x - (ground.umbrellaRight.getTransformedBounds().width * 0.5))) {
					dy = 0
					removeObject(dropping, ammo);
					dropping.gotoAndPlay("splatTwo");
					createjs.Sound.play("splatSound");
				} else {
					lou.alpha = 1;
				};
				if (ammoRemaining == 0 && isDead == false && dy == 0) {
					createjs.Sound.play("gameOver");
					setTimeout(youLose, 500);
				}
			}
		}
		
		function removeObject(objectToRemove, array) {
			var i = array.indexOf(objectToRemove);
			if (i !== -1) {
				array.splice(i, 1);
			}
		}
		
		// SEAGULL MOVEMENT //
		
		this.addEventListener("tick", moveHorizontal.bind(this));
		
		function moveHorizontal(evt) {
			var p = this.globalToLocal(this.stage.mouseX, this.stage.mouseY);
			this.seagull.x += -2 + ((p.x - this.seagull.x) / 20);
		
			if (this.seagull.x <= 0) {
				this.seagull.x = 0
			}
		
			if (p.x > this.seagull.x) {
				this.seagull.setTransform(this.seagull.x, 100, 0.3, 0.3);
			} else {
				this.seagull.setTransform(this.seagull.x, 100, -0.3, 0.3);
			}
		}
		
		init();
	}
	this.frame_4 = function() {
		this.stop();
		
		createjs.Sound.stop();
		createjs.Sound.play("music4", {loop:-1});
		
		this.tryAgainButton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			window.location.reload();
		};
	}
	this.frame_5 = function() {
		this.stop();
		
		createjs.Sound.stop();
		createjs.Sound.play("music4", {loop:-1});
		createjs.Sound.play("laugh", {loop:-1});
		
		var lou = this.stage.getChildAt(0).louie2;
		
		lou.gotoAndPlay("louLaugh");
		
		this.tryAgainButton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			window.location.reload();
		}
	}
	this.frame_6 = function() {
		this.stop();
		
		createjs.Sound.stop();
		createjs.Sound.play("music4", {loop:-1});
		createjs.Sound.play("laugh", {loop:-1});
		
		var lou = this.stage.getChildAt(0).louie3;
		var seagull = this.stage.getChildAt(0).seagullAnimate;
		
		lou.gotoAndPlay("louLaugh");
		seagull.gotoAndPlay("seagullSad");
		
		this.tryAgainButton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			window.location.reload();
		}
	}
	this.frame_7 = function() {
		this.stop();
		
		createjs.Sound.stop();
		createjs.Sound.play("youWin", {loop:-1});
		createjs.Sound.play("birdlaugh", {loop:-1});
		createjs.Sound.play("cry", {loop:-1});
		
		var lou = this.stage.getChildAt(0).louie3;
		var seagull = this.stage.getChildAt(0).seagullAnimate;
		
		lou.gotoAndPlay("louCry");
		seagull.gotoAndPlay("seagullLaugh");
		
		this.tryAgainButton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			window.location.reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// tryagainButton
	this.tryAgainButton = new lib.tryAgain();
	this.tryAgainButton.name = "tryAgainButton";
	this.tryAgainButton.setTransform(480,357.65,0.779,0.779,0,0,0,144.8,-70.4);
	this.tryAgainButton._off = true;
	new cjs.ButtonHelper(this.tryAgainButton, 0, 1, 2, false, new lib.tryAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.tryAgainButton).wait(4).to({_off:false},0).wait(1).to({x:742.9,y:559.05},0).wait(3));

	// soundButton
	this.soundButton = new lib.soundButton();
	this.soundButton.name = "soundButton";
	this.soundButton.setTransform(910.65,599.2,0.4435,0.4435);
	new cjs.ButtonHelper(this.soundButton, 0, 1, 2, false, new lib.soundButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.soundButton).wait(8));

	// umbrella_Lv2
	this.backGroundTwo = new lib.backGroundThree();
	this.backGroundTwo.name = "backGroundTwo";
	this.backGroundTwo.setTransform(482,514.85,1,1,0,0,0,962.8,-205.2);
	this.backGroundTwo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.backGroundTwo).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// lv_1_lose
	this.cutScene = new lib.lv1youlosecut();
	this.cutScene.name = "cutScene";
	this.cutScene.setTransform(479.8,320.05,1,1,0,0,0,758.1,-596.6);
	this.cutScene._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cutScene).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// seagull
	this.seagull = new lib.seagullWalk_1();
	this.seagull.name = "seagull";
	this.seagull.setTransform(877.7,535.9,0.5013,0.5013,0,0,180,-134.8,-62.9);

	this.seagullAnimate = new lib.seagullAnimate();
	this.seagullAnimate.name = "seagullAnimate";
	this.seagullAnimate.setTransform(733.2,438.65,0.3826,0.3826,0,0,0,8.6,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.seagull,p:{regY:-62.9,scaleX:0.5013,scaleY:0.5013,x:877.7,y:535.9}}]},2).to({state:[{t:this.seagull,p:{regY:-62.8,scaleX:0.3537,scaleY:0.3537,x:841.4,y:150.55}}]},1).to({state:[]},1).to({state:[{t:this.seagullAnimate,p:{x:733.2,y:438.65}}]},2).to({state:[{t:this.seagullAnimate,p:{x:153.25,y:531.65}}]},1).wait(1));

	// Louie
	this.louie2 = new lib.LouieCharacter_gameai();
	this.louie2.name = "louie2";
	this.louie2.setTransform(-484.5,448.25,1,1,0,0,0,16,255.1);

	this.louie3 = new lib.LouieCharacter_gameai();
	this.louie3.name = "louie3";
	this.louie3.setTransform(99.3,590.5,0.7841,0.7841,0,0,0,522.4,438.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.louie2,p:{regX:16,regY:255.1,scaleX:1,scaleY:1,x:-484.5,y:448.25}}]},2).to({state:[{t:this.louie2,p:{regX:590,regY:191,scaleX:0.4483,scaleY:0.4483,x:241.65,y:514.65}}]},1).to({state:[]},1).to({state:[{t:this.louie2,p:{regX:522.4,regY:438.6,scaleX:0.7841,scaleY:0.7841,x:99.3,y:590.5}}]},1).to({state:[{t:this.louie3}]},1).to({state:[{t:this.louie3}]},1).wait(1));

	// Scorecard
	this.scorecard = new lib.scorecard_mc();
	this.scorecard.name = "scorecard";
	this.scorecard.setTransform(484.45,60.95,1,1,0,0,0,439.4,-165.1);
	this.scorecard._off = true;

	this.timeline.addTween(cjs.Tween.get(this.scorecard).wait(2).to({_off:false},0).to({_off:true},1).wait(5));

	// Deck
	this.deck = new lib.Deck();
	this.deck.name = "deck";
	this.deck.setTransform(496.15,360.55,0.8843,0.8843,0,0,0,113,0.1);
	this.deck._off = true;

	this.timeline.addTween(cjs.Tween.get(this.deck).wait(2).to({_off:false},0).to({_off:true},1).wait(5));

	// background
	this.instance = new lib.beach();
	this.instance.setTransform(261.3,232.55,1.5882,1.5882,0,0,0,46.5,-27.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(5));

	// youWin
	this.instance_1 = new lib.youWinBox();
	this.instance_1.setTransform(496,190.25,1,1,0,0,0,183,-120);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(1));

	// lv_1_lose_2
	this.instance_2 = new lib.cut2();
	this.instance_2.setTransform(479.8,320.05,1,1,0,0,0,758.1,-596.6);

	this.instance_3 = new lib.cut_bg("synched",0);
	this.instance_3.setTransform(646.3,504.3,1,1,0,0,0,838.1,-627.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAiAIAA+NEAAAAgOIAA1l");
	this.shape.setTransform(-191.8,678.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],16.6,-2469.8,16.6,1373.2).s().p("Eh2eA3NMAAAgmmIAA1kIAAsqIAA+NIAAnYMDs9AAAMAAABuZg");
	this.shape_1.setTransform(566.525,778.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],16.6,-81.2,16.6,669.8).s().p("Eh2eAhcMAAAhC2MDs9AAAMAAABC2g");
	this.shape_2.setTransform(566.525,152.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0000F3","#6D82FC","#6B80FC","#061315"],[0,0.345,0.443,1],-758.3,11.2,758.3,11.2).s().p("Eh2eAElIAApKMDs9AAAIAAJKg");
	this.shape_3.setTransform(566.525,396.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// score
	this.ammoLeft = new cjs.Text("0", "normal 700 30px 'tk-skolar-sans-latin'");
	this.ammoLeft.name = "ammoLeft";
	this.ammoLeft.textAlign = "center";
	this.ammoLeft.lineHeight = 51;
	this.ammoLeft.lineWidth = 82;
	this.ammoLeft.parent = this;
	this.ammoLeft.setTransform(231.05,73.2);
	if(!lib.properties.webfonts['tk-skolar-sans-latin']) {
		lib.webFontTxtInst['tk-skolar-sans-latin'] = lib.webFontTxtInst['tk-skolar-sans-latin'] || [];
		lib.webFontTxtInst['tk-skolar-sans-latin'].push(this.ammoLeft);
	}
	this.ammoLeft._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ammoLeft).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// scorecard_lv2
	this.text = new cjs.Text("DROPS =", "normal 700 30px 'tk-skolar-sans-latin'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(147.05,74.2);
	if(!lib.properties.webfonts['tk-skolar-sans-latin']) {
		lib.webFontTxtInst['tk-skolar-sans-latin'] = lib.webFontTxtInst['tk-skolar-sans-latin'] || [];
		lib.webFontTxtInst['tk-skolar-sans-latin'].push(this.text);
	}

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(7).p("Au1mPIdrAAIAAMfI9rAAg");
	this.shape_4.setTransform(167.075,88.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Au1GQIAAsfIdrAAIAAMfg");
	this.shape_5.setTransform(167.075,88.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text}]},3).to({state:[]},1).wait(4));

	// backgroundTwo
	this.instance_4 = new lib.background2lv2();
	this.instance_4.setTransform(479.95,475.15,1.0581,1,0,0,0,860.1,-169.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// backgroundOne
	this.backGroundOne = new lib.background1lv1();
	this.backGroundOne.name = "backGroundOne";
	this.backGroundOne.setTransform(480.05,272.05,1,1,0,0,0,851.9,-292.1);
	this.backGroundOne._off = true;

	this.timeline.addTween(cjs.Tween.get(this.backGroundOne).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// titleCard
	this.title = new cjs.Text("BIRD DROP", "96px 'Lazenby Computer'", "#ECBA01");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 117;
	this.title.lineWidth = 542;
	this.title.parent = this;
	this.title.setTransform(473.1605,44.8,1.6227,1.6227);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1).to({_off:true},1).wait(6));

	// skipButton
	this.skipButton = new lib.skipButton();
	this.skipButton.name = "skipButton";
	this.skipButton.setTransform(882.15,520.45,0.6149,0.6149);
	new cjs.ButtonHelper(this.skipButton, 0, 1, 2, false, new lib.skipButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.skipButton).wait(1).to({scaleX:1,scaleY:1,x:460.05,y:254.35},0).to({_off:true},1).wait(6));

	// startGameButton
	this.startButton = new lib.StartGameButton();
	this.startButton.name = "startButton";
	this.startButton.setTransform(469.8,360.75,1,1,0,0,0,218.2,-112.2);
	new cjs.ButtonHelper(this.startButton, 0, 1, 2, false, new lib.StartGameButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.startButton).wait(1).to({_off:true},1).wait(6));

	// playButton
	this.playButton = new lib.playButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(469.8,360.75,1,1,0,0,0,218.2,-112.2);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.playButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).to({_off:true},1).wait(7));

	// alphaLayer
	this.beachBg = new lib.beachBgFade();
	this.beachBg.name = "beachBg";
	this.beachBg.setTransform(474.95,330.9,1,1,0,0,0,823.5,-371.7);

	this.timeline.addTween(cjs.Tween.get(this.beachBg).wait(1).to({_off:true},1).wait(6));

	// burgerLayer
	this.burgerCloseUp = new lib.right_arm_burger();
	this.burgerCloseUp.name = "burgerCloseUp";
	this.burgerCloseUp.setTransform(798.25,740.5,5.0151,5.0151,0,0,0,99.2,-115.9);

	this.timeline.addTween(cjs.Tween.get(this.burgerCloseUp).to({_off:true},1).wait(7));

	// chairLayer
	this.chair = new lib.chair();
	this.chair.name = "chair";
	this.chair.setTransform(158.2,567.5,0.7794,0.7794,0,0,0,117.5,-109.2);

	this.timeline.addTween(cjs.Tween.get(this.chair).to({_off:true},1).wait(7));

	// beachBallLayer
	this.beachBall = new lib.beachball();
	this.beachBall.name = "beachBall";
	this.beachBall.setTransform(87.1,578.2,0.5306,0.5306,0,0,0,-226.6,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.beachBall).to({_off:true},1).wait(7));

	// seagullLayer
	this.mainSeagull_mc = new lib.seagull_1();
	this.mainSeagull_mc.name = "mainSeagull_mc";
	this.mainSeagull_mc.setTransform(1212.75,317,1,1,0,0,0,212.1,-262.6);

	this.timeline.addTween(cjs.Tween.get(this.mainSeagull_mc).to({_off:true},1).wait(7));

	// umbrellaLayer
	this.umbrella = new lib.umbrella();
	this.umbrella.name = "umbrella";
	this.umbrella.setTransform(48.15,463,1.1361,1.1361,0,0,0,-59.1,19.8);

	this.timeline.addTween(cjs.Tween.get(this.umbrella).to({_off:true},1).wait(7));

	// louieBackLayer
	this.louieSit = new lib.Louie_Back();
	this.louieSit.name = "louieSit";
	this.louieSit.setTransform(159.85,616.55,0.4988,0.4988,0,0,0,-141.5,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.louieSit).to({_off:true},1).wait(7));

	// beachTowelLayer
	this.beachTowel = new lib.beach_towel();
	this.beachTowel.name = "beachTowel";
	this.beachTowel.setTransform(371.2,653.2,1,1,0,0,0,-71.9,5.9);

	this.timeline.addTween(cjs.Tween.get(this.beachTowel).to({_off:true},1).wait(7));

	// lipSyncLayer
	this.lipSyncLouie = new lib.lipSyncLouie();
	this.lipSyncLouie.name = "lipSyncLouie";
	this.lipSyncLouie.setTransform(486,1179.15,2.2974,2.2974,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.lipSyncLouie).to({_off:true},1).wait(7));

	// louieLayer
	this.louie = new lib.louie();
	this.louie.name = "louie";
	this.louie.setTransform(479.3,1086.7,2.1192,2.1192,0,0,0,-27.1,282.5);

	this.timeline.addTween(cjs.Tween.get(this.louie).to({_off:true},1).wait(7));

	// landBackground
	this.land_background_mc = new lib.land_background();
	this.land_background_mc.name = "land_background_mc";
	this.land_background_mc.setTransform(640.9,299.85,1.5402,2.0214,0,0,0,-0.5,-161.9);

	this.timeline.addTween(cjs.Tween.get(this.land_background_mc).to({_off:true},1).wait(7));

	// beachBackground
	this.beach_background_mc = new lib.beach_background();
	this.beach_background_mc.name = "beach_background_mc";
	this.beach_background_mc.setTransform(605.4,340.1,1.2534,1.5779,0,0,0,25.9,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.beach_background_mc).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-51.6,1512.3,2372.5);
// library properties:
lib.properties = {
	id: '4C916D00CB2E4C0FA86C8EB980BD7C3E',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_4703.png", id:"CachedBmp_4703"},
		{src:"images/CachedBmp_4702.png", id:"CachedBmp_4702"},
		{src:"images/CachedBmp_4701.png", id:"CachedBmp_4701"},
		{src:"images/CachedBmp_4700.png", id:"CachedBmp_4700"},
		{src:"images/CachedBmp_4699.png", id:"CachedBmp_4699"},
		{src:"images/CachedBmp_4698.png", id:"CachedBmp_4698"},
		{src:"images/CachedBmp_4697.png", id:"CachedBmp_4697"},
		{src:"images/CachedBmp_4696.png", id:"CachedBmp_4696"},
		{src:"images/CachedBmp_4695.png", id:"CachedBmp_4695"},
		{src:"images/CachedBmp_4694.png", id:"CachedBmp_4694"},
		{src:"images/CachedBmp_4693.png", id:"CachedBmp_4693"},
		{src:"images/CachedBmp_4692.png", id:"CachedBmp_4692"},
		{src:"images/CachedBmp_4691.png", id:"CachedBmp_4691"},
		{src:"images/CachedBmp_4690.png", id:"CachedBmp_4690"},
		{src:"images/CachedBmp_4689.png", id:"CachedBmp_4689"},
		{src:"images/CachedBmp_4688.png", id:"CachedBmp_4688"},
		{src:"images/CachedBmp_4687.png", id:"CachedBmp_4687"},
		{src:"images/CachedBmp_4686.png", id:"CachedBmp_4686"},
		{src:"images/CachedBmp_4685.png", id:"CachedBmp_4685"},
		{src:"images/CachedBmp_4684.png", id:"CachedBmp_4684"},
		{src:"images/CachedBmp_4683.png", id:"CachedBmp_4683"},
		{src:"images/CachedBmp_4682.png", id:"CachedBmp_4682"},
		{src:"images/CachedBmp_4681.png", id:"CachedBmp_4681"},
		{src:"images/CachedBmp_4680.png", id:"CachedBmp_4680"},
		{src:"images/CachedBmp_4679.png", id:"CachedBmp_4679"},
		{src:"images/CachedBmp_4678.png", id:"CachedBmp_4678"},
		{src:"images/CachedBmp_4677.png", id:"CachedBmp_4677"},
		{src:"images/CachedBmp_4676.png", id:"CachedBmp_4676"},
		{src:"images/CachedBmp_4675.png", id:"CachedBmp_4675"},
		{src:"images/CachedBmp_4674.png", id:"CachedBmp_4674"},
		{src:"images/CachedBmp_4673.png", id:"CachedBmp_4673"},
		{src:"images/CachedBmp_4672.png", id:"CachedBmp_4672"},
		{src:"images/CachedBmp_4671.png", id:"CachedBmp_4671"},
		{src:"images/CachedBmp_4670.png", id:"CachedBmp_4670"},
		{src:"images/CachedBmp_4669.png", id:"CachedBmp_4669"},
		{src:"images/CachedBmp_4668.png", id:"CachedBmp_4668"},
		{src:"images/CachedBmp_4667.png", id:"CachedBmp_4667"},
		{src:"images/CachedBmp_4666.png", id:"CachedBmp_4666"},
		{src:"images/CachedBmp_4665.png", id:"CachedBmp_4665"},
		{src:"images/CachedBmp_4664.png", id:"CachedBmp_4664"},
		{src:"images/CachedBmp_8411.png", id:"CachedBmp_8411"},
		{src:"images/CachedBmp_4554.png", id:"CachedBmp_4554"},
		{src:"images/CachedBmp_4553.png", id:"CachedBmp_4553"},
		{src:"images/CachedBmp_4551.png", id:"CachedBmp_4551"},
		{src:"images/CachedBmp_4550.png", id:"CachedBmp_4550"},
		{src:"images/CachedBmp_4546.png", id:"CachedBmp_4546"},
		{src:"images/CachedBmp_4545.png", id:"CachedBmp_4545"},
		{src:"images/CachedBmp_4544.png", id:"CachedBmp_4544"},
		{src:"images/CachedBmp_4543.png", id:"CachedBmp_4543"},
		{src:"images/CachedBmp_4542.png", id:"CachedBmp_4542"},
		{src:"images/CachedBmp_4541.png", id:"CachedBmp_4541"},
		{src:"images/CachedBmp_4540.png", id:"CachedBmp_4540"},
		{src:"images/CachedBmp_4539.png", id:"CachedBmp_4539"},
		{src:"images/CachedBmp_4538.png", id:"CachedBmp_4538"},
		{src:"images/CachedBmp_4537.png", id:"CachedBmp_4537"},
		{src:"images/CachedBmp_4536.png", id:"CachedBmp_4536"},
		{src:"images/CachedBmp_4535.png", id:"CachedBmp_4535"},
		{src:"images/CachedBmp_4534.png", id:"CachedBmp_4534"},
		{src:"images/CachedBmp_4533.png", id:"CachedBmp_4533"},
		{src:"images/CachedBmp_4532.png", id:"CachedBmp_4532"},
		{src:"images/CachedBmp_4531.png", id:"CachedBmp_4531"},
		{src:"images/CachedBmp_4530.png", id:"CachedBmp_4530"},
		{src:"images/CachedBmp_4529.png", id:"CachedBmp_4529"},
		{src:"images/CachedBmp_4528.png", id:"CachedBmp_4528"},
		{src:"images/CachedBmp_4527.png", id:"CachedBmp_4527"},
		{src:"images/CachedBmp_4526.png", id:"CachedBmp_4526"},
		{src:"images/CachedBmp_4525.png", id:"CachedBmp_4525"},
		{src:"images/CachedBmp_4524.png", id:"CachedBmp_4524"},
		{src:"images/CachedBmp_4523.png", id:"CachedBmp_4523"},
		{src:"images/CachedBmp_4522.png", id:"CachedBmp_4522"},
		{src:"images/CachedBmp_4521.png", id:"CachedBmp_4521"},
		{src:"images/CachedBmp_4520.png", id:"CachedBmp_4520"},
		{src:"images/CachedBmp_4519.png", id:"CachedBmp_4519"},
		{src:"images/CachedBmp_4518.png", id:"CachedBmp_4518"},
		{src:"images/CachedBmp_4517.png", id:"CachedBmp_4517"},
		{src:"images/CachedBmp_4516.png", id:"CachedBmp_4516"},
		{src:"images/CachedBmp_4515.png", id:"CachedBmp_4515"},
		{src:"images/CachedBmp_4514.png", id:"CachedBmp_4514"},
		{src:"images/CachedBmp_4513.png", id:"CachedBmp_4513"},
		{src:"images/CachedBmp_4512.png", id:"CachedBmp_4512"},
		{src:"images/CachedBmp_4511.png", id:"CachedBmp_4511"},
		{src:"images/CachedBmp_4510.png", id:"CachedBmp_4510"},
		{src:"images/CachedBmp_4509.png", id:"CachedBmp_4509"},
		{src:"images/CachedBmp_4508.png", id:"CachedBmp_4508"},
		{src:"images/CachedBmp_4507.png", id:"CachedBmp_4507"},
		{src:"images/banjo_finishedGame_birddrop_atlas_1.png", id:"banjo_finishedGame_birddrop_atlas_1"},
		{src:"images/banjo_finishedGame_birddrop_atlas_2.png", id:"banjo_finishedGame_birddrop_atlas_2"},
		{src:"images/banjo_finishedGame_birddrop_atlas_3.png", id:"banjo_finishedGame_birddrop_atlas_3"},
		{src:"images/banjo_finishedGame_birddrop_atlas_4.png", id:"banjo_finishedGame_birddrop_atlas_4"},
		{src:"sounds/music.mp3", id:"music"},
		{src:"sounds/music2.mp3", id:"music2"},
		{src:"sounds/chime.mp3", id:"chime"},
		{src:"sounds/click.mp3", id:"click"},
		{src:"sounds/birdlaugh.mp3", id:"birdlaugh"},
		{src:"sounds/steps.mp3", id:"steps"},
		{src:"sounds/bleep.mp3", id:"bleep"},
		{src:"sounds/music3.mp3", id:"music3"},
		{src:"sounds/gameOver.mp3", id:"gameOver"},
		{src:"sounds/cry.mp3", id:"cry"},
		{src:"sounds/hit.mp3", id:"hit"},
		{src:"sounds/laugh.mp3", id:"laugh"},
		{src:"sounds/music4.mp3", id:"music4"},
		{src:"sounds/nomnom.mp3", id:"nomnom"},
		{src:"sounds/punch.mp3", id:"punch"},
		{src:"sounds/seagull.mp3", id:"seagull"},
		{src:"sounds/lipsync.mp3", id:"lipsync"},
		{src:"sounds/slurp.mp3", id:"slurp"},
		{src:"sounds/splatSound.mp3", id:"splatSound"},
		{src:"sounds/squawk.mp3", id:"squawk"},
		{src:"sounds/youWin.mp3", id:"youWin"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4C916D00CB2E4C0FA86C8EB980BD7C3E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;