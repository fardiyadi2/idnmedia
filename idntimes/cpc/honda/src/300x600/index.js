(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,600,1200],[602,0,600,1200],[1204,0,600,1200]]},
		{name:"index_atlas_2", frames: [[1204,0,600,1200],[0,0,600,1200],[602,0,600,1200]]},
		{name:"index_atlas_3", frames: [[0,0,600,1200],[602,0,600,1200],[1204,0,600,1200]]},
		{name:"index_atlas_4", frames: [[1204,0,600,1200],[602,0,600,1200],[0,0,600,1200]]},
		{name:"index_atlas_5", frames: [[1204,0,600,1200],[0,0,600,1200],[602,0,600,1200]]},
		{name:"index_atlas_6", frames: [[602,0,300,600],[602,602,300,600],[0,1204,300,600],[302,1204,300,600],[0,0,600,1200]]}
];


// symbols:



(lib.bg1 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.car1 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.car2 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cursor = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.end = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.graphics = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hl1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hl2 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hl3 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.icon1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.icon2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.icon3 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logobig = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logosmall = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.orang1 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.potongan = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sense = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.snk = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.end();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.end();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logobig();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logobig();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sense();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sense();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hl3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hl3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cursor();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cursor();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hl2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hl2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snk();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snk();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.potongan();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.potongan();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.car2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.car2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hl1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hl1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.orang1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.orang1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.car1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.car1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.graphics();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.graphics();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,600,1200);


(lib.Scene_1_logosmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logosmall
	this.instance = new lib.logosmall();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(412));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_23
	this.instance = new lib.graphics();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(196));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(207));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_snk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// snk
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75,62.5,0.5,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,62.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},136).to({state:[{t:this.instance_1}]},6).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(136).to({_off:false},0).to({_off:true,alpha:1},6).wait(65));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sense = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sense
	this.instance = new lib.Tween35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.5,125);
	this.instance._off = true;

	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},281).to({state:[{t:this.instance_1}]},6).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(281).to({_off:false},0).to({_off:true,x:150},6).wait(125));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_potongan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// potongan
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(334.4,62.5,0.5,0.5,0,0,0,0.1,0);
	this.instance._off = true;

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,62.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},126).to({state:[{t:this.instance_1}]},8).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).to({_off:true,regX:0,x:75},8,cjs.Ease.cubicOut).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_orang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orang
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(314.5,125);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true,x:150},8,cjs.Ease.cubicOut).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},8,cjs.Ease.cubicOut).wait(75).to({startPosition:0},0).to({x:-161.25},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_onestep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// onestep
	this.instance = new lib.Tween33("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,194.3,2,2);
	this.instance._off = true;

	this.instance_1 = new lib.Tween34("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(274).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,y:125},7).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(274).to({_off:false},7).wait(59).to({startPosition:0},0).to({scaleX:0.2424,scaleY:0.2424,y:76.95,alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logobig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logobig
	this.instance = new lib.Tween37("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,207.35,2,2);
	this.instance._off = true;

	this.instance_1 = new lib.Tween38("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},350).to({state:[{t:this.instance_1}]},6).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(350).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,y:125},6).wait(56));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_kunjungi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kunjungi
	this.instance = new lib.Tween27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.2,188.1,2.0001,2,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.instance_1 = new lib.Tween28("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(207).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:150,y:125},8,cjs.Ease.cubicOut).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(207).to({_off:false},8,cjs.Ease.cubicOut).wait(51).to({startPosition:0},0).to({scaleX:0.226,scaleY:0.226,y:66.7,alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_icon3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon3
	this.instance = new lib.Tween23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({_off:true,alpha:1},6).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},6).wait(61).to({startPosition:0},0).to({x:-135.4},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_icon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon2
	this.instance = new lib.Tween21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({_off:true,alpha:1},6).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},6).wait(65).to({startPosition:0},0).to({x:-150},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_icon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon1
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({_off:true,alpha:1},6).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},6).wait(69).to({startPosition:0},0).to({x:2.5},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_hl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hl1
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(341.25,62.5,0.5,0.5,0,0,0,0.1,0);
	this.instance._off = true;

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,62.5,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({_off:true,regX:0,x:75},8,cjs.Ease.cubicOut).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},8,cjs.Ease.cubicOut).wait(54).to({startPosition:0},0).to({x:-189.15},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_graphics_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graphics_copy
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75,62.5,0.5,0.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,62.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_graphics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graphics
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75,62.5,0.5,0.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,62.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// end
	this.instance = new lib.Tween39("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75,62.5,0.5,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween40("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,62.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},403).to({state:[{t:this.instance_1}]},6).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(403).to({_off:false},0).to({_off:true,alpha:1},6).wait(24));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cursor
	this.instance = new lib.Tween31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(270.75,125);
	this.instance._off = true;

	this.instance_1 = new lib.Tween32("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},221).to({state:[{t:this.instance_1}]},6).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(221).to({_off:false},0).to({_off:true,x:150},6).wait(185));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_car2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// car2
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-119.15,62.55,0.5,0.5,0,0,0,0,0.1);
	this.instance._off = true;

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,62.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},114).to({state:[{t:this.instance_1}]},9).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({_off:true,regY:0,x:75,y:62.5},9,cjs.Ease.cubicOut).wait(84));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_car1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// car1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(450.1,125,1,1,0,0,0,0.1,0);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,regX:0,x:150},9,cjs.Ease.quadOut).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},9,cjs.Ease.quadOut).wait(89).to({startPosition:0},0).to({x:-147.25},7).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.Tween29("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.1,451.25,0.1391,0.1391);
	this.instance._off = true;

	this.instance_1 = new lib.Tween30("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:150,y:125},7).wait(189));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(216).to({_off:false},7).wait(29).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:0.9666,scaleY:0.9664,y:141.1},4).wait(1).to({regY:0,x:150.1,y:141},0).to({scaleX:0.9999,scaleY:0.9997,y:125},4).wait(65).to({regX:0,scaleX:1,scaleY:1,x:150},0).to({regX:0.1,scaleX:0.9666,scaleY:0.9664,y:141},4).wait(1).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9997,x:150.1,y:125},4).wait(58).to({regX:0,scaleX:1,scaleY:1,x:150},0).to({regX:0.1,scaleX:0.9666,scaleY:0.9664,y:141},4).wait(1).to({startPosition:0},0).to({scaleX:0.9999,scaleY:0.9997,x:150.1,y:125},4).wait(10));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg2
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween26("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},198).to({state:[{t:this.instance_1}]},7).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(198).to({_off:false},0).to({_off:true,alpha:1},7,cjs.Ease.cubicOut).wait(207));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_432 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(432).call(this.frame_432).wait(1));

	// end_obj_
	this.end = new lib.Scene_1_end();
	this.end.name = "end";
	this.end.parent = this;
	this.end.depth = 0;
	this.end.isAttachedToCamera = 0
	this.end.isAttachedToMask = 0
	this.end.layerDepth = 0
	this.end.layerIndex = 0
	this.end.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.end).wait(433));

	// logosmall_obj_
	this.logosmall = new lib.Scene_1_logosmall();
	this.logosmall.name = "logosmall";
	this.logosmall.parent = this;
	this.logosmall.setTransform(150,300,1,1,0,0,0,150,300);
	this.logosmall.depth = 0;
	this.logosmall.isAttachedToCamera = 0
	this.logosmall.isAttachedToMask = 0
	this.logosmall.layerDepth = 0
	this.logosmall.layerIndex = 1
	this.logosmall.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logosmall).to({_off:true},412).wait(21));

	// logobig_obj_
	this.logobig = new lib.Scene_1_logobig();
	this.logobig.name = "logobig";
	this.logobig.parent = this;
	this.logobig.depth = 0;
	this.logobig.isAttachedToCamera = 0
	this.logobig.isAttachedToMask = 0
	this.logobig.layerDepth = 0
	this.logobig.layerIndex = 2
	this.logobig.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logobig).wait(356).to({_off:true},56).wait(21));

	// sense_obj_
	this.sense = new lib.Scene_1_sense();
	this.sense.name = "sense";
	this.sense.parent = this;
	this.sense.depth = 0;
	this.sense.isAttachedToCamera = 0
	this.sense.isAttachedToMask = 0
	this.sense.layerDepth = 0
	this.sense.layerIndex = 3
	this.sense.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sense).wait(287).to({_off:true},125).wait(21));

	// onestep_obj_
	this.onestep = new lib.Scene_1_onestep();
	this.onestep.name = "onestep";
	this.onestep.parent = this;
	this.onestep.depth = 0;
	this.onestep.isAttachedToCamera = 0
	this.onestep.isAttachedToMask = 0
	this.onestep.layerDepth = 0
	this.onestep.layerIndex = 4
	this.onestep.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.onestep).wait(347).to({_off:true},1).wait(85));

	// cursor_obj_
	this.cursor = new lib.Scene_1_cursor();
	this.cursor.name = "cursor";
	this.cursor.parent = this;
	this.cursor.depth = 0;
	this.cursor.isAttachedToCamera = 0
	this.cursor.isAttachedToMask = 0
	this.cursor.layerDepth = 0
	this.cursor.layerIndex = 5
	this.cursor.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cursor).wait(227).to({_off:true},185).wait(21));

	// button_obj_
	this.button = new lib.Scene_1_button();
	this.button.name = "button";
	this.button.parent = this;
	this.button.depth = 0;
	this.button.isAttachedToCamera = 0
	this.button.isAttachedToMask = 0
	this.button.layerDepth = 0
	this.button.layerIndex = 6
	this.button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.button).wait(402).to({_off:true},10).wait(21));

	// kunjungi_obj_
	this.kunjungi = new lib.Scene_1_kunjungi();
	this.kunjungi.name = "kunjungi";
	this.kunjungi.parent = this;
	this.kunjungi.depth = 0;
	this.kunjungi.isAttachedToCamera = 0
	this.kunjungi.isAttachedToMask = 0
	this.kunjungi.layerDepth = 0
	this.kunjungi.layerIndex = 7
	this.kunjungi.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.kunjungi).wait(273).to({_off:true},1).wait(159));

	// bg2_obj_
	this.bg2 = new lib.Scene_1_bg2();
	this.bg2.name = "bg2";
	this.bg2.parent = this;
	this.bg2.depth = 0;
	this.bg2.isAttachedToCamera = 0
	this.bg2.isAttachedToMask = 0
	this.bg2.layerDepth = 0
	this.bg2.layerIndex = 8
	this.bg2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(205).to({_off:true},207).wait(21));

	// snk_obj_
	this.snk = new lib.Scene_1_snk();
	this.snk.name = "snk";
	this.snk.parent = this;
	this.snk.depth = 0;
	this.snk.isAttachedToCamera = 0
	this.snk.isAttachedToMask = 0
	this.snk.layerDepth = 0
	this.snk.layerIndex = 9
	this.snk.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.snk).wait(142).to({_off:true},65).wait(226));

	// potongan_obj_
	this.potongan = new lib.Scene_1_potongan();
	this.potongan.name = "potongan";
	this.potongan.parent = this;
	this.potongan.depth = 0;
	this.potongan.isAttachedToCamera = 0
	this.potongan.isAttachedToMask = 0
	this.potongan.layerDepth = 0
	this.potongan.layerIndex = 10
	this.potongan.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.potongan).wait(134).to({_off:true},73).wait(226));

	// car2_obj_
	this.car2 = new lib.Scene_1_car2();
	this.car2.name = "car2";
	this.car2.parent = this;
	this.car2.depth = 0;
	this.car2.isAttachedToCamera = 0
	this.car2.isAttachedToMask = 0
	this.car2.layerDepth = 0
	this.car2.layerIndex = 11
	this.car2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.car2).wait(123).to({_off:true},84).wait(226));

	// hl1_obj_
	this.hl1 = new lib.Scene_1_hl1();
	this.hl1.name = "hl1";
	this.hl1.parent = this;
	this.hl1.depth = 0;
	this.hl1.isAttachedToCamera = 0
	this.hl1.isAttachedToMask = 0
	this.hl1.layerDepth = 0
	this.hl1.layerIndex = 12
	this.hl1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hl1).wait(109).to({_off:true},1).wait(323));

	// icon3_obj_
	this.icon3 = new lib.Scene_1_icon3();
	this.icon3.name = "icon3";
	this.icon3.parent = this;
	this.icon3.depth = 0;
	this.icon3.isAttachedToCamera = 0
	this.icon3.isAttachedToMask = 0
	this.icon3.layerDepth = 0
	this.icon3.layerIndex = 13
	this.icon3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.icon3).wait(109).to({_off:true},1).wait(323));

	// icon2_obj_
	this.icon2 = new lib.Scene_1_icon2();
	this.icon2.name = "icon2";
	this.icon2.parent = this;
	this.icon2.depth = 0;
	this.icon2.isAttachedToCamera = 0
	this.icon2.isAttachedToMask = 0
	this.icon2.layerDepth = 0
	this.icon2.layerIndex = 14
	this.icon2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.icon2).wait(109).to({_off:true},1).wait(323));

	// icon1_obj_
	this.icon1 = new lib.Scene_1_icon1();
	this.icon1.name = "icon1";
	this.icon1.parent = this;
	this.icon1.depth = 0;
	this.icon1.isAttachedToCamera = 0
	this.icon1.isAttachedToMask = 0
	this.icon1.layerDepth = 0
	this.icon1.layerIndex = 15
	this.icon1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.icon1).wait(109).to({_off:true},1).wait(323));

	// orang_obj_
	this.orang = new lib.Scene_1_orang();
	this.orang.name = "orang";
	this.orang.parent = this;
	this.orang.depth = 0;
	this.orang.isAttachedToCamera = 0
	this.orang.isAttachedToMask = 0
	this.orang.layerDepth = 0
	this.orang.layerIndex = 16
	this.orang.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.orang).wait(109).to({_off:true},1).wait(323));

	// car1_obj_
	this.car1 = new lib.Scene_1_car1();
	this.car1.name = "car1";
	this.car1.parent = this;
	this.car1.depth = 0;
	this.car1.isAttachedToCamera = 0
	this.car1.isAttachedToMask = 0
	this.car1.layerDepth = 0
	this.car1.layerIndex = 17
	this.car1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.car1).wait(109).to({_off:true},1).wait(323));

	// Layer_23_obj_
	this.Layer_23 = new lib.Scene_1_Layer_23();
	this.Layer_23.name = "Layer_23";
	this.Layer_23.parent = this;
	this.Layer_23.depth = 0;
	this.Layer_23.isAttachedToCamera = 0
	this.Layer_23.isAttachedToMask = 0
	this.Layer_23.layerDepth = 0
	this.Layer_23.layerIndex = 18
	this.Layer_23.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_23).wait(12).to({_off:true},196).wait(225));

	// Layer_19_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("A3lFfIAAq9MAvLAAAIAAK9g");
	var mask_graphics_5 = new cjs.Graphics().p("A3lFVIAAqpMAvLAAAIAAKpg");
	var mask_graphics_6 = new cjs.Graphics().p("A3lFMIAAqWMAvLAAAIAAKWg");
	var mask_graphics_7 = new cjs.Graphics().p("A3lFCIAAqDMAvLAAAIAAKDg");
	var mask_graphics_8 = new cjs.Graphics().p("A3lE4IAApvMAvLAAAIAAJvg");
	var mask_graphics_9 = new cjs.Graphics().p("A3lEuIAApbMAvLAAAIAAJbg");
	var mask_graphics_10 = new cjs.Graphics().p("A3lEkIAApHMAvLAAAIAAJHg");
	var mask_graphics_11 = new cjs.Graphics().p("A3lEbIAAo1MAvLAAAIAAI1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:-151.025,y:35.0938}).wait(1).to({graphics:mask_graphics_5,x:-108.175,y:34.1351}).wait(1).to({graphics:mask_graphics_6,x:-65.325,y:33.0914}).wait(1).to({graphics:mask_graphics_7,x:-22.475,y:32.1816}).wait(1).to({graphics:mask_graphics_8,x:20.425,y:31.1389}).wait(1).to({graphics:mask_graphics_9,x:63.275,y:30.2281}).wait(1).to({graphics:mask_graphics_10,x:106.125,y:29.1865}).wait(1).to({graphics:mask_graphics_11,x:148.975,y:28.275}).wait(422));

	// graphics_copy_obj_
	this.graphics_copy = new lib.Scene_1_graphics_copy();
	this.graphics_copy.name = "graphics_copy";
	this.graphics_copy.parent = this;
	this.graphics_copy.depth = 0;
	this.graphics_copy.isAttachedToCamera = 0
	this.graphics_copy.isAttachedToMask = 0
	this.graphics_copy.layerDepth = 0
	this.graphics_copy.layerIndex = 19
	this.graphics_copy.maskLayerName = 0

	var maskedShapeInstanceList = [this.graphics_copy];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.graphics_copy).wait(11).to({_off:true},1).wait(421));

	// Layer_19 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("EgAJAu4IAAqdMAvLAAAIAAKdg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgEVAu4IAAqOMAwRAAAIAAKOg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgIgAu4IAAqAMAxVAAAIAAKAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgMrAu4IAApyMAyaAAAIAAJyg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgQ3Au4IAApjMAzfAAAIAAJjg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgVCAu4IAApVMA0kAAAIAAJVg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgZOAu4IAApHMA1pAAAIAAJHg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgbWAu4IAAo4MA2tAAAIAAI4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:301.025,y:299.9917}).wait(1).to({graphics:mask_1_graphics_5,x:281.1717,y:300.0315}).wait(1).to({graphics:mask_1_graphics_6,x:261.3173,y:300.0222}).wait(1).to({graphics:mask_1_graphics_7,x:241.464,y:300.0124}).wait(1).to({graphics:mask_1_graphics_8,x:221.6107,y:300.0031}).wait(1).to({graphics:mask_1_graphics_9,x:201.7574,y:300.0436}).wait(1).to({graphics:mask_1_graphics_10,x:181.903,y:300.0089}).wait(1).to({graphics:mask_1_graphics_11,x:148.979,y:299.9999}).wait(422));

	// graphics_obj_
	this.graphics = new lib.Scene_1_graphics();
	this.graphics.name = "graphics";
	this.graphics.parent = this;
	this.graphics.depth = 0;
	this.graphics.isAttachedToCamera = 0
	this.graphics.isAttachedToMask = 0
	this.graphics.layerDepth = 0
	this.graphics.layerIndex = 20
	this.graphics.maskLayerName = 0

	var maskedShapeInstanceList = [this.graphics];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.graphics).wait(11).to({_off:true},1).wait(421));

	// bg1_obj_
	this.bg1 = new lib.Scene_1_bg1();
	this.bg1.name = "bg1";
	this.bg1.parent = this;
	this.bg1.setTransform(150,300,1,1,0,0,0,150,300);
	this.bg1.depth = 0;
	this.bg1.isAttachedToCamera = 0
	this.bg1.isAttachedToMask = 0
	this.bg1.layerDepth = 0
	this.bg1.layerIndex = 21
	this.bg1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg1).to({_off:true},207).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.2,237.9,761.2,919.5000000000001);
// library properties:
lib.properties = {
	id: '94EF5247F8F5EF4098308C37404A1DFE',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png", id:"index_atlas_4"},
		{src:"images/index_atlas_5.png", id:"index_atlas_5"},
		{src:"images/index_atlas_6.png", id:"index_atlas_6"}
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
an.compositions['94EF5247F8F5EF4098308C37404A1DFE'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;