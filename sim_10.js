(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 500,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/fl.jpg", id:"fl"}
	]
};



// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,22);


(lib.fl = function() {
	this.initialize(img.fl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,235);


(lib.vLabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAfQgGgFgBgJIANgCQABAFADADQADACADAAQAFAAADgDQABgEAAgHQAAgHgBgDQgDgBgFAAQgGAAgFADIgLgCIAHgjIAjAAIAAANIgYAAIgCANQAEgDAFAAQAHAAAGAGQAHAGAAAKQAAAJgFAGQgHAKgLAAQgKAAgGgFgABHAjIgZhGIAPAAIASA0IASg0IAPAAIgZBGgAg5AjIAAgOIAOAAIAAAOgAheAjIAAgyQgHAIgKACIAAgMQAFgBAGgGQAHgEACgHIALAAIAABGg");
	this.shape.setTransform(18,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCABgBAFQgBAFAAALQAAANABAEQABAFACACQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgFQABgEAAgNQAAgLgBgFQAAgEgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAgAhqAeQgGgFgBgJIANgBQAAAFADACQADADAEAAQAEAAADgEQADgDAAgFQAAgFgDgDQgDgEgEAAIgGABIACgJQAFABADgDQADgDAAgEQAAgDgCgDQgCgCgEAAQgDABgDACQgCACgBAFIgMgCQABgHADgDQACgEAFgDQAFgCAGAAQAKAAAGAHQAFAFAAAGQAAAKgKAGQAGABADACQAEAFAAAHQAAAJgHAGQgHAHgKAAQgKAAgGgGgABJAjIgZhGIAPAAIASA0IASg0IAPAAIgZBGgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_1.setTransform(17.8,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAfQgGgFgBgJIANgCQABAFADADQADACADAAQAFAAABgDQADgEAAgHQAAgHgDgDQgBgBgFAAQgGAAgFADIgLgCIAHgjIAjAAIAAANIgYAAIgCANQAEgDAFAAQAHAAAGAGQAHAGAAAKQAAAJgFAGQgHAKgLAAQgKAAgGgFgABKAjIgZhGIAPAAIASA0IASg0IAPAAIgZBGgAg2AjIAAgOIAOAAIAAAOgAhVAjIAAgPIgdAAIAAgMIAfgrIALAAIAAArIAJAAIAAAMIgJAAIAAAPgAhmAIIARAAIAAgWg");
	this.shape_2.setTransform(17.7,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCABgBAFQgBAFAAALQAAANABAEQABAFACACQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgFQABgEAAgNQAAgLgBgFQAAgEgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAgAhqAcQgHgJAAgTQAAgSAHgIQAIgJALAAQAIAAAGAEQAFAGABAIIgNABQAAgDgCgDQgCgCgEAAQgEAAgDAFQgDADgBAMQAFgFAIAAQAJAAAGAGQAGAEAAALQAAALgHAGQgGAHgKAAQgLAAgHgIgAhfABQgDAEAAAGQAAAGADAEQAEAEADAAQAEAAADgDQACgDAAgHQAAgHgCgDQgDgCgEAAQgEAAgDABgABJAjIgZhGIAPAAIASA0IASg0IAPAAIgZBGgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_3.setTransform(17.8,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAfQgGgFgBgJIANgCQAAAFACADQADACADAAQAFAAADgDQADgEAAgHQAAgHgDgDQgDgBgFAAQgGAAgDADIgLgCIAHgjIAjAAIAAANIgaAAIgCANQAEgDAFAAQAJAAAGAGQAHAGAAAKQAAAJgFAGQgHAKgNAAQgIAAgGgFgABZAjIgZhGIAPAAIASA0IASg0IAPAAIgZBGgAgnAjIAAgOIAOAAIAAAOgAhMAjIAAgyQgHAIgKACIAAgMQAFgBAGgGQAHgEACgHIALAAIAABGgAiBAQIAAgOIAbAAIAAAOg");
	this.shape_4.setTransform(17.9,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCABgBAFQgBAFAAALQAAANABAEQABAFACACQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgFQABgEAAgNQAAgLgBgFQAAgEgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAgAhrAcQgGgIAAgUQAAgTAHgIQAGgIAKAAQALAAAFAIQAHAIAAATQAAAUgHAJQgFAHgLAAQgKAAgHgIgAhegWQgCABgBAFQgCAFAAALQAAANACAEQABAFACACQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQACgCABgFQABgEAAgNQAAgLgBgFQgBgEgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAgABJAjIgZhGIAPAAIASA0IASg0IAPAAIgZBGgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_5.setTransform(17.8,8.6);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).wait(6).to({_off:true},1).wait(1));

	// Layer 2 copy 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCABgBAFQgBAFAAALQAAANABAEQABAFACACQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgFQABgEAAgNQAAgLgBgFQAAgEgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAgAhrAcQgGgIAAgUQAAgTAHgIQAGgIAKAAQALAAAFAIQAHAIAAATQAAAUgHAJQgFAHgLAAQgKAAgHgIgAhegWQgCABgBAFQgCAFAAALQAAANACAEQABAFACACQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQACgCABgFQABgEAAgNQAAgLgBgFQgBgEgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAgABJAjIgZhGIAPAAIASA0IASg0IAPAAIgZBGgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_6.setTransform(115.1,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(16));

	// Layer 2 copy 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAfQgGgGgBgIIANgCQABAFADACQADADADAAQAFAAADgDQABgDAAgIQAAgHgBgDQgDgBgFAAQgGAAgFADIgLgCIAHgiIAjAAIAAAMIgYAAIgCANQAEgDAFAAQAHAAAGAGQAHAGAAAKQAAAJgFAHQgHAJgLAAQgKAAgGgFgABHAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg5AjIAAgOIAOAAIAAAOgAheAjIAAgyQgHAIgKACIAAgMQAFgCAGgEQAHgFACgHIALAAIAABGg");
	this.shape_7.setTransform(40.7,57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCACgBAEQgBAFAAALQAAANABAEQABAFACABQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQABgGAAgMQAAgLgBgEQAAgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAgAhqAeQgGgFgBgJIANgCQAAAGADACQADADAEAAQAEAAADgEQADgDAAgFQAAgFgDgEQgDgDgEAAIgGABIACgIQAFgBADgCQADgDAAgDQAAgEgCgDQgCgCgEABQgDAAgDACQgCACgBAFIgMgCQABgGADgEQACgFAFgCQAFgCAGAAQAKAAAGAGQAFAGAAAHQAAAJgKAFQAGACADACQAEAFAAAGQAAAKgHAGQgHAHgKAAQgKAAgGgGgABJAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_8.setTransform(40.5,57);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAfQgGgGgBgIIANgCQABAFADACQADADADAAQAFAAABgDQADgDAAgIQAAgHgDgDQgBgBgFAAQgGAAgFADIgLgCIAHgiIAjAAIAAAMIgYAAIgCANQAEgDAFAAQAHAAAGAGQAHAGAAAKQAAAJgFAHQgHAJgLAAQgKAAgGgFgABKAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg2AjIAAgOIAOAAIAAAOgAhVAjIAAgPIgdAAIAAgLIAfgsIALAAIAAAsIAJAAIAAALIgJAAIAAAPgAhmAJIARAAIAAgXg");
	this.shape_9.setTransform(40.4,57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCACgBAEQgBAFAAALQAAANABAEQABAFACABQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQABgGAAgMQAAgLgBgEQAAgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAgAhqAcQgHgIAAgUQAAgRAHgJQAIgJALAAQAIAAAGAEQAFAGABAIIgNACQAAgEgCgDQgCgCgEABQgEgBgDAEQgDAEgBAMQAFgFAIAAQAJgBAGAHQAGAEAAALQAAALgHAGQgGAHgKAAQgLAAgHgIgAhfABQgDAEAAAGQAAAGADAEQAEAEADAAQAEAAADgDQACgDAAgHQAAgHgCgDQgDgCgEAAQgEAAgDABgABJAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_10.setTransform(40.5,57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAfQgGgGgBgIIANgCQAAAFACACQADADADAAQAFAAADgDQADgDAAgIQAAgHgDgDQgDgBgFAAQgGAAgDADIgLgCIAHgiIAjAAIAAAMIgaAAIgCANQAEgDAFAAQAJAAAGAGQAHAGAAAKQAAAJgFAHQgHAJgNAAQgIAAgGgFgABZAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAgnAjIAAgOIAOAAIAAAOgAhMAjIAAgyQgHAIgKACIAAgMQAFgCAGgEQAHgFACgHIALAAIAABGgAiBAQIAAgOIAbAAIAAAOg");
	this.shape_11.setTransform(40.6,57);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCACgBAEQgBAFAAALQAAANABAEQABAFACABQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQABgGAAgMQAAgLgBgEQAAgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAgAhrAcQgGgIAAgUQAAgTAHgIQAGgIAKAAQALAAAFAIQAHAIAAATQAAAUgHAJQgFAHgLAAQgKAAgHgIgAhegWQgCACgBAEQgCAFAAALQAAANACAEQABAFACABQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQACgCABgDQABgGAAgMQAAgLgBgEQgBgFgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAgABJAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_12.setTransform(40.5,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer 2 copy 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCACgBAEQgBAFAAALQAAANABAEQABAFACABQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQABgGAAgMQAAgLgBgEQAAgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAgAhrAcQgGgIAAgUQAAgTAHgIQAGgIAKAAQALAAAFAIQAHAIAAATQAAAUgHAJQgFAHgLAAQgKAAgHgIgAhegWQgCACgBAEQgCAFAAALQAAANACAEQABAFACABQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQACgCABgDQABgGAAgMQAAgLgBgEQgBgFgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAgABJAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_13.setTransform(128.4,57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAfQgGgGgBgIIANgCQABAFADACQADADADAAQAFAAADgDQABgDAAgIQAAgHgBgDQgDgBgFAAQgGAAgFADIgLgCIAHgiIAjAAIAAAMIgYAAIgCANQAEgDAFAAQAHAAAGAGQAHAGAAAKQAAAJgFAHQgHAJgLAAQgKAAgGgFgABHAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg5AjIAAgOIAOAAIAAAOgAheAjIAAgyQgHAIgKACIAAgMQAFgCAGgEQAHgFACgHIALAAIAABGg");
	this.shape_14.setTransform(128.6,57);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCACgBAEQgBAFAAALQAAANABAEQABAFACABQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQABgGAAgMQAAgLgBgEQAAgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAgAhqAeQgGgFgBgJIANgCQAAAGADACQADADAEAAQAEAAADgEQADgDAAgFQAAgFgDgEQgDgDgEAAIgGABIACgIQAFgBADgCQADgDAAgDQAAgEgCgDQgCgCgEABQgDAAgDACQgCACgBAFIgMgCQABgGADgEQACgFAFgCQAFgCAGAAQAKAAAGAGQAFAGAAAHQAAAJgKAFQAGACADACQAEAFAAAGQAAAKgHAGQgHAHgKAAQgKAAgGgGgABJAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_15.setTransform(118.4,57);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAfQgGgGgBgIIANgCQABAFADACQADADADAAQAFAAABgDQADgDAAgIQAAgHgDgDQgBgBgFAAQgGAAgFADIgLgCIAHgiIAjAAIAAAMIgYAAIgCANQAEgDAFAAQAHAAAGAGQAHAGAAAKQAAAJgFAHQgHAJgLAAQgKAAgGgFgABKAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg2AjIAAgOIAOAAIAAAOgAhVAjIAAgPIgdAAIAAgLIAfgsIALAAIAAAsIAJAAIAAALIgJAAIAAAPgAhmAJIARAAIAAgXg");
	this.shape_16.setTransform(118.3,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

	// Layer 2 copy 7
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCACgBAEQgBAFAAALQAAANABAEQABAFACABQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQABgGAAgMQAAgLgBgEQAAgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAgAhrAcQgGgIAAgUQAAgTAHgIQAGgIAKAAQALAAAFAIQAHAIAAATQAAAUgHAJQgFAHgLAAQgKAAgHgIgAhegWQgCACgBAEQgCAFAAALQAAANACAEQABAFACABQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQACgCABgDQABgGAAgMQAAgLgBgEQgBgFgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAgABJAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_17.setTransform(214.4,57);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAfQgGgGgBgIIANgCQABAFADACQADADADAAQAFAAADgDQABgDAAgIQAAgHgBgDQgDgBgFAAQgGAAgFADIgLgCIAHgiIAjAAIAAAMIgYAAIgCANQAEgDAFAAQAHAAAGAGQAHAGAAAKQAAAJgFAHQgHAJgLAAQgKAAgGgFgABHAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg5AjIAAgOIAOAAIAAAOgAheAjIAAgyQgHAIgKACIAAgMQAFgCAGgEQAHgFACgHIALAAIAABGg");
	this.shape_18.setTransform(209.6,57);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgTAHgIQAGgIALAAQAIAAAGAIQAHAIAAATQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCACgBAEQgBAFAAALQAAANABAEQABAFACABQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDQABgGAAgMQAAgLgBgEQAAgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAgAhqAeQgGgFgBgJIANgCQAAAGADACQADADAEAAQAEAAADgEQADgDAAgFQAAgFgDgEQgDgDgEAAIgGABIACgIQAFgBADgCQADgDAAgDQAAgEgCgDQgCgCgEABQgDAAgDACQgCACgBAFIgMgCQABgGADgEQACgFAFgCQAFgCAGAAQAKAAAGAGQAFAGAAAHQAAAJgKAFQAGACADACQAEAFAAAGQAAAKgHAGQgHAHgKAAQgKAAgGgGgABJAjIgZhFIAPAAIASAzIASgzIAPAAIgZBFgAg3AjIAAgOIAOAAIAAAOg");
	this.shape_19.setTransform(209.4,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Layer 2 copy 9
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgSAHgKQAGgHALAAQAIAAAGAHQAHAKAAASQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCABgBAFQgBAFAAALQAAAMABAFQABAFACACQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgFQABgEAAgNQAAgLgBgFQAAgFgCgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAgAhrAcQgGgIAAgUQAAgSAHgKQAGgHAKAAQALAAAFAHQAHAKAAASQAAAUgHAJQgFAHgLAAQgKAAgHgIgAhegWQgCABgBAFQgCAFAAALQAAAMACAFQABAFACACQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQACgCABgFQABgEAAgNQAAgLgBgFQgBgFgCgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAgABJAjIgZhGIAPAAIASAzIASgzIAPAAIgZBGgAg3AjIAAgNIAOAAIAAANg");
	this.shape_20.setTransform(316.9,56.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAfQgGgFgBgKIANgBQABAFADADQADACADAAQAFAAADgDQABgDAAgIQAAgGgBgEQgDgBgFAAQgGAAgFAEIgLgDIAHgjIAjAAIAAANIgYAAIgCAMQAEgCAFAAQAHAAAGAHQAHAEAAALQAAAJgFAGQgHAKgLAAQgKAAgGgFgABHAjIgZhGIAPAAIASAzIASgzIAPAAIgZBGgAg5AjIAAgNIAOAAIAAANgAheAjIAAgyQgHAHgKAEIAAgNQAFgBAGgGQAHgFACgGIALAAIAABGg");
	this.shape_21.setTransform(299.1,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},1).wait(1));

	// Layer 2 copy 11
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAcQgHgIAAgUQAAgSAHgKQAGgHALAAQAIAAAGAHQAHAKAAASQAAAUgHAJQgGAHgIAAQgLAAgGgIgAgLgWQgCACgBAEQgBAFAAALQAAAMABAFQABAEACACQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBAAgFQABgFAAgMQAAgLgBgFQAAgFgCgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAgAhrAcQgGgIAAgUQAAgSAHgKQAGgHAKAAQALAAAFAHQAHAKAAASQAAAUgHAJQgFAHgLAAQgKAAgHgIgAhegWQgCACgBAEQgCAFAAALQAAAMACAFQABAEACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQACgBABgFQABgFAAgMQAAgLgBgFQgBgFgCgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAgABJAjIgZhGIAPAAIASAzIASgzIAPAAIgZBGgAg3AjIAAgNIAOAAIAAANg");
	this.shape_22.setTransform(408.9,57.5);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

	// Layer 4
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACAA1Qg1AXhLAAQhKAAg0gXQg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWg");
	this.shape_23.setTransform(17.7,8.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,201,0,0.502)").s().p("Ah+A1Qg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWQg1AXhLAAQhKAAg0gXg");
	this.shape_24.setTransform(17.7,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(16));

	// Layer 5
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACAA1Qg1AXhLAAQhKAAg0gXQg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWg");
	this.shape_25.setTransform(115,8.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,201,0,0.502)").s().p("Ah+A1Qg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWQg1AXhLAAQhKAAg0gXg");
	this.shape_26.setTransform(115,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(16));

	// Layer 6
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACAA1Qg1AXhLAAQhKAAg0gXQg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWg");
	this.shape_27.setTransform(40.3,56.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,201,0,0.502)").s().p("Ah+A1Qg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWQg1AXhLAAQhKAAg0gXg");
	this.shape_28.setTransform(40.3,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(16));

	// Layer 2 copy 4
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACAA1Qg1AXhLAAQhKAAg0gXQg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWg");
	this.shape_29.setTransform(128.3,56.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,201,0,0.502)").s().p("Ah+A1Qg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWQg1AXhLAAQhKAAg0gXg");
	this.shape_30.setTransform(128.3,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{x:128.3}},{t:this.shape_29,p:{x:128.3}}]}).to({state:[{t:this.shape_30,p:{x:128.3}},{t:this.shape_29,p:{x:128.3}}]},1).to({state:[{t:this.shape_30,p:{x:118.3}},{t:this.shape_29,p:{x:118.3}}]},1).to({state:[{t:this.shape_30,p:{x:118.3}},{t:this.shape_29,p:{x:118.3}}]},1).to({state:[{t:this.shape_30,p:{x:128.3}},{t:this.shape_29,p:{x:128.3}}]},1).to({state:[{t:this.shape_30,p:{x:128.3}},{t:this.shape_29,p:{x:128.3}}]},1).to({state:[{t:this.shape_30,p:{x:118.3}},{t:this.shape_29,p:{x:118.3}}]},1).to({state:[{t:this.shape_30,p:{x:118.3}},{t:this.shape_29,p:{x:118.3}}]},1).to({state:[{t:this.shape_30,p:{x:128.3}},{t:this.shape_29,p:{x:128.3}}]},1).to({state:[{t:this.shape_30,p:{x:128.3}},{t:this.shape_29,p:{x:128.3}}]},1).to({state:[{t:this.shape_30,p:{x:118.3}},{t:this.shape_29,p:{x:118.3}}]},1).to({state:[{t:this.shape_30,p:{x:118.3}},{t:this.shape_29,p:{x:118.3}}]},1).to({state:[{t:this.shape_30,p:{x:128.3}},{t:this.shape_29,p:{x:128.3}}]},1).to({state:[{t:this.shape_30,p:{x:128.3}},{t:this.shape_29,p:{x:128.3}}]},1).to({state:[{t:this.shape_30,p:{x:118.3}},{t:this.shape_29,p:{x:118.3}}]},1).to({state:[{t:this.shape_30,p:{x:118.3}},{t:this.shape_29,p:{x:118.3}}]},1).wait(1));

	// Layer 2 copy 6
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACAA1Qg1AXhLAAQhKAAg0gXQg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWg");
	this.shape_31.setTransform(214.3,56.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,201,0,0.502)").s().p("Ah+A1Qg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWQg1AXhLAAQhKAAg0gXg");
	this.shape_32.setTransform(214.3,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32,p:{x:214.3}},{t:this.shape_31,p:{x:214.3}}]},1).to({state:[{t:this.shape_32,p:{x:209.3}},{t:this.shape_31,p:{x:209.3}}]},1).to({state:[{t:this.shape_32,p:{x:209.3}},{t:this.shape_31,p:{x:209.3}}]},1).to({state:[]},1).to({state:[{t:this.shape_32,p:{x:214.3}},{t:this.shape_31,p:{x:214.3}}]},1).to({state:[{t:this.shape_32,p:{x:209.3}},{t:this.shape_31,p:{x:209.3}}]},1).to({state:[{t:this.shape_32,p:{x:209.3}},{t:this.shape_31,p:{x:209.3}}]},1).to({state:[]},1).to({state:[{t:this.shape_32,p:{x:214.3}},{t:this.shape_31,p:{x:214.3}}]},1).to({state:[{t:this.shape_32,p:{x:209.3}},{t:this.shape_31,p:{x:209.3}}]},1).to({state:[{t:this.shape_32,p:{x:209.3}},{t:this.shape_31,p:{x:209.3}}]},1).to({state:[]},1).to({state:[{t:this.shape_32,p:{x:214.3}},{t:this.shape_31,p:{x:214.3}}]},1).to({state:[{t:this.shape_32,p:{x:209.3}},{t:this.shape_31,p:{x:209.3}}]},1).to({state:[{t:this.shape_32,p:{x:209.3}},{t:this.shape_31,p:{x:209.3}}]},1).wait(1));

	// Layer 2 copy 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACAA1Qg1AXhLAAQhKAAg0gXQg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWg");
	this.shape_33.setTransform(316.8,56.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,201,0,0.502)").s().p("Ah+A1Qg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWQg1AXhLAAQhKAAg0gXg");
	this.shape_34.setTransform(316.8,56.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34,p:{x:316.8}},{t:this.shape_33,p:{x:316.8}}]},2).to({state:[{t:this.shape_34,p:{x:298.8}},{t:this.shape_33,p:{x:298.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_34,p:{x:316.8}},{t:this.shape_33,p:{x:316.8}}]},2).to({state:[{t:this.shape_34,p:{x:298.8}},{t:this.shape_33,p:{x:298.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_34,p:{x:316.8}},{t:this.shape_33,p:{x:316.8}}]},2).to({state:[{t:this.shape_34,p:{x:298.8}},{t:this.shape_33,p:{x:298.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_34,p:{x:316.8}},{t:this.shape_33,p:{x:316.8}}]},2).to({state:[{t:this.shape_34,p:{x:298.8}},{t:this.shape_33,p:{x:298.8}}]},1).wait(1));

	// Layer 2 copy 10
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACAA1Qg1AXhLAAQhKAAg0gXQg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWg");
	this.shape_35.setTransform(408.8,57.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,201,0,0.502)").s().p("Ah+A1Qg1gWAAgfQAAgeA1gWQA0gXBKAAQBLAAA1AXQA0AWAAAeQAAAfg0AWQg1AXhLAAQhKAAg0gXg");
	this.shape_36.setTransform(408.8,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},3).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},3).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},3).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-0.2,148.8,65.7);


(lib._switch = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC422E","#A71303"],[0,0.957],-25.3,-9.9,25.4,-9.9).s().p("AhPCQIgni7IiGAAIAAgyQAAgZAMgRQAMgSARAAIAHAAQAEAPALAAQAKAAAEgPIASAAQAFAPAKAAQALAAAEgPIASAAQAEAPALAAQALAAAEgPIASAAQADAPALAAQAMAAADgPIASAAQAEAPAKAAQAKAAAEgPIASAAQAEAPALAAQAKAAAEgPIATAAQAEAPAKAAQALAAAEgPIASAAQAEAPALAAQALAAAEgPIASAAQADAPAMAAQALAAADgPIAIAAQARAAAMASQAMARAAAZIAAAyIiaAAIhjDFg");
	this.shape.setTransform(25.4,5.5,1,1,0,0,0,0,-9.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.8,30.9);


(lib.sp = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAnIAAgdIgdAAIAAgTIAdAAIAAgdIATAAIAAAdIAdAAIAAATIgdAAIAAAdg");
	this.shape.setTransform(0.1,0.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#66A901","#528700","rgba(146,255,0,0)"],[0.396,0.573,1],0,0,0,0,0,8.1).s().p("AgzAzQgVgVAAgeQAAgdAVgWQAWgVAdAAQAeAAAWAVQAVAWAAAdQAAAegVAVQgWAWgeAAQgdAAgWgWg");
	this.shape_1.setTransform(0.1,-0.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.6,14.8,14.8);


(lib.slidertrack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzATIAAglIPmAAIAAAlg");
	this.shape.setTransform(50,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,100,4);


(lib.sliderThumb = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.051)").s().p("AitCuIAAlcIFbAAIAAFcg");
	this.shape.setTransform(-0.4,-0.1);

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-5.1,-10.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-17.6,35,35);


(lib.radiobutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(170,170,170,0.251)","rgba(0,0,0,0.251)"],[0,1],-2.1,-2,0,-2.1,-2,6.4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape.setTransform(8.5,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#AAAAAA","#000000"],[0,1],-2.1,-2,0,-2.1,-2,6.4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape_1.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
	this.shape_2.setTransform(8.5,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#E1E1E1"],[0,1],0,6.4,0,-6.3).s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAaAAATASQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_3.setTransform(8.5,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E1E1E1","#AEAEAE"],[0,1],-5.2,-5.2,0,-5.2,-5.2,15.4).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZgAgsgsQgTATAAAZQAAAaATASQATATAZAAQAaAAASgTQATgSAAgaQAAgZgTgTQgSgTgaAAQgZAAgTATg");
	this.shape_4.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19,19.1);


(lib.light = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,168,195.5);


(lib.glasscopy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#838379","#6D572B"],[0.235,1],-12.1,-17.5,0,-12.1,-17.5,76.3).s().p("AgFIfQhIAAhogYQgkgIgJg4QgEgSAAgcIgBgnQAAgbgQgoIgOghIhmjAQgLgUgJgVQghhMAAhVQAAhVAhhNQAfhMA6g5QA6g6BLggQBNghBUAAQBUAABOAhQBLAgA6A6QA5A5AgBMQAhBNAABVQAABVghBMIgUAqIgKAQIhsDQQgOAogBAbIgBAnQAAAcgDASQgKA4gjAIQhpAYhIAAg");
	this.shape.setTransform(41.7,54.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83.5,108.7);


(lib.glass = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFEC","#FFCC66"],[0.235,1],-12.1,-17.5,0,-12.1,-17.5,76.3).s().p("AgFIfQhIAAhogYQgkgIgJg4QgEgSAAgcIgBgnQAAgbgQgoIgOghIhmjAQgLgUgJgVQghhMAAhVQAAhVAhhNQAfhMA6g5QA6g6BLggQBNghBUAAQBUAABOAhQBLAgA6A6QA5A5AgBMQAhBNAABVQAABVghBMIgUAqIgKAQIhsDQQgOAogBAbIgBAnQAAAcgDASQgKA4gjAIQhpAYhIAAg");
	this.shape.setTransform(41.7,54.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83.5,108.7);


(lib.dis_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.502)").s().p("EgtiAIOIAAwbMBbFAAAIAAQbg");
	this.shape.setTransform(291.5,52.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,583,105.3);


(lib.Bplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjeA/IAAhiIAMAAIAAAJQADgFAGgDQAFgDAGABQAKAAAHAEQAHAFADAJQAEAJABAJQgBAKgEAJQgEAIgHAGQgIAEgJAAQgFAAgFgCQgGgDgCgEIAAAjgAjNgTQgFAGAAANQgBAOAGAGQAFAHAJAAQAIAAAGgHQAFgHAAgNQAAgNgFgHQgFgHgJAAQgIAAgGAIgAFcAaIAAAJIgLAAIAAhiIAMAAIAAAkQAJgJALAAQAHgBAGADQAGADAEAEQAEAFACAHQACAHAAAIQAAARgJAKQgJAKgOAAQgMAAgIgLgAFjgTQgHAGAAANQABAMADAFQAGAKAJAAQAJAAAGgHQAFgHAAgNQABgNgGgHQgFgGgJgBQgIAAgFAIgADxAjQgGgDgDgEQgCgDgBgGIgBgLIAAgrIAMAAIAAAmIABANQABAFAEADQADADAGgBQAGAAAFgCQAFgDACgFQACgFAAgJIAAglIAMAAIAABGIgLAAIAAgKQgJAMgOAAQgGAAgGgCgAChAaIAAAJIgLAAIAAhiIAMAAIAAAkQAJgJAMAAQAGgBAGADQAGADAEAEQADAFADAHQACAHAAAIQAAARgJAKQgJAKgNAAQgNAAgIgLgACogTQgGAGgBANQAAAMAEAFQAGAKAJAAQAJAAAFgHQAGgHABgNQAAgNgGgHQgGgGgHgBQgJAAgFAIgAAnAbQgKgKAAgRQAAgRAKgKQAJgKAPABQAOAAAKAJQAJAKAAARIAAACIg2AAQAAAMAHAGQAFAHAKAAQAGAAAGgDQAEgEADgIIANACQgEALgHAGQgJAGgNAAQgPAAgJgKgAAxgVQgGAGgBAJIApAAQgBgJgEgEQgFgIgKAAQgIABgGAFgAgdAbQgKgKABgRQAAgLADgIQAFgJAIgFQAHgDAKAAQAJgBAIAHQAIAFACALIgNACQgBgHgEgEQgEgDgFgBQgKABgFAGQgGAGAAAOQAAAOAGAGQAFAHAKAAQAFAAAFgEQAEgFACgJIAMABQgDANgHAHQgJAHgJAAQgQAAgIgKgAhuAgQgHgHAAgJQAAgFACgEQADgFAEgCIAIgCIALgDQAPgBAIgDIAAgDQgBgHgDgEQgEgEgKAAQgIABgFACQgEAEgCAIIgMgDQACgHADgFQAFgEAGgDQAIgDAJABQAJAAAGABQAGACADAEQACADABAGIABALIAAAOQAAARABAFQABAFACADIgNAAQgCgEAAgFQgHAHgHACQgGACgHAAQgMAAgGgFgAhWAEIgMACQgDABgBADQgCADAAADQAAAFAEADQADAEAIgBQAHAAAGgCQAFgDADgGQACgFAAgHIAAgEQgHACgNACgAknAbQgJgKAAgRQAAgRAJgKQAKgKAPABQAPAAAJAJQAJAKAAARIAAACIg2AAQAAAMAHAGQAFAHAKAAQAGAAAGgDQAEgEADgIIANACQgDALgIAGQgJAGgNAAQgPAAgKgKgAkcgVQgGAGAAAJIAoAAQgBgJgDgEQgHgIgJAAQgIABgGAFgAEyAjIAAhiIANAAIAABigAiQAjIAAhiIANAAIAABigAlHAjIgOgUIgJgOIgHgFIgGgDIgIAAIgPAAIAAAqIgNAAIAAhiIAtAAQANABAHACQAHADAEAGQAEAHAAAJQAAAKgHAHQgGAIgPACIAIAFQAFADAGAIIASAbgAmCgSIAdAAQAJAAAFgCQAFgCADgFQADgEgBgEQAAgHgEgFQgGgEgLgBIggAAg");
	this.shape.setTransform(53.9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],-25.6,-11.5,-25.1,11.5).ss(1,0,0,4).p("AkqBuIJVAAAErhtIpVAA");
	this.shape_1.setTransform(65.1,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],21.6,-11.5,21.8,11.5).ss(1,0,0,4).p("ACyhtIlAAAQgeAAAAAeIAACfQAAAeAeAAIFAAA");
	this.shape_2.setTransform(17.3,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],-32.8,-11.5,-32.6,11.5).ss(1,0,0,4).p("AhCBuIBiAAQAeAAAAgeIAAifQAAgegeAAIhiAA");
	this.shape_3.setTransform(101.8,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AGaBtIpWAAIlBAAQgeAAAAgeIAAieQAAgeAeAAIFBAAIJWAAIBkAAQAeAAAAAeIAACeQAAAegeAAg");
	this.shape_4.setTransform(54,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],24.6,-11.5,25.1,11.5).ss(1,0,0,4).p("AkpBuIJTAAAEqhtIpTAA");
	this.shape_5.setTransform(42.1,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],33.1,-11.5,33.3,11.5).ss(1,0,0,4).p("AA/htIhaAAQgeAAAAAeIAACfQAAAeAeAAIBaAA");
	this.shape_6.setTransform(5.9,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-21.3,-11.5,-21.1,11.5).ss(1,0,0,4).p("Ai1BuIFIAAQAeAAAAgeIAAifQAAgegeAAIlIAA");
	this.shape_7.setTransform(90.2,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EBEBEB","#FBFBFB"],[0,0.992],13,9,13,-9).s().p("ACzBtIpTAAIhdAAQgeAAAAgeIAAieQAAgeAeAAIBdAAIJTAAIFLAAQAeAAAAAeIAACeQAAAegeAAg");
	this.shape_8.setTransform(54,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-15.2,-11.5,-14.7,11.5).ss(1,0,0,4).p("AFChtIqDAAAlBBuIKDAA");
	this.shape_9.setTransform(59.2,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],25.7,-11.5,25.9,11.5).ss(1,0,0,4).p("ACJhtIjuAAQgeAAAAAeIAACfQAAAeAeAAIDuAA");
	this.shape_10.setTransform(13.3,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-31,-11.5,-30.8,11.5).ss(1,0,0,4).p("AhUBuICGAAQAeAAAAgeIAAifQAAgegeAAIiGAA");
	this.shape_11.setTransform(100,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EFB8A0","#FEF1EF"],[0,0.992],-15,9,-15,-9).s().p("AF2BtIqDAAIjwAAQgeAAAAgeIAAieQAAgeAeAAIDwAAIKDAAICIAAQAeAAAAAeIAACeQAAAegeAAg");
	this.shape_12.setTransform(54,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,110,24);


(lib.battery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBEIAAg3Ig3AAIAAgZIA3AAIAAg3IAbAAIAAA3IA3AAIAAAZIg3AAIAAA3g");
	this.shape.setTransform(-25.8,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ADPBAIAAgkQgIAKgNAAQgNAAgIgJQgJgKAAgSQAAgQAJgKQAIgKANAAQAGAAAGADQAHADAEAGIAAgLIASAAIAABigAC0gPQgEAGAAAJQAAANAEAFQAEAGAIAAQAGAAAFgGQAFgFgBgLQAAgJgDgGQgFgHgIAAQgGAAgFAFgAArAlIgNAAIAAgPIANAAIAAgcIgBgKIgBgDIgDAAIgIABIgCgPQAHgCAIAAQAGAAADABQAFACACADIACAHIABAOIAAAeIAJAAIAAAPIgJAAIAAAOIgTALgAgCAlIgNAAIAAgPIANAAIAAgcIAAgKIgCgDIgDAAIgIABIgCgPQAIgCAIAAQADAAAEABQAEACACADIADAHIAAAOIAAAeIAJAAIAAAPIgJAAIAAAOIgRALgABeAjQgHgDgCgEQgDgFAAgMIAAgVIgBgOIgDgKIATAAIABAGIABACQAGgFAFgCQAGgCAGAAQALAAAHAGQAGAGAAAJQAAAGgDAFQgDADgFACQgGADgJACQgOACgFADIAAACQAAAFADACQACADAIAAQAFAAADgCQADgCABgFIASADQgDAKgHAFQgIAFgNAAQgOAAgFgDgABqgSQgEACAAAEIgBAJIAAADIAMgCIAKgDQAEgDAAgEQAAgEgDgDQgDgDgFAAQgFAAgFAEgAhSAcQgJgLAAgUIAxAAQAAgJgFgEQgEgFgHAAQgEAAgDACQgDADgCAFIgTgDQADgKAJgGQAHgFANAAQASAAAKAMQAGAKABANQAAASgKAKQgKAKgOAAQgQAAgKgKgAhDATQAEAFAGAAQAHAAADgFQAEgEAAgIIgcAAQAAAIAEAEgAiZAjIABACIgUAAIgSgyIgQAyIgUAAIAehRQACgGADgDQACgEADgCIAHgDIAKgBIALABIACAPIgIgBQgHAAgDAEQgDAEgCAGIAaBEIAHgQQAFADAEAAQADAAAEgCQADgCABgGQABgGAAgQIAAgXIAUAAIAABHIgSAAIAAgKQgEAHgEACQgEACgEAAQgHAAgHgDg");
	this.shape_1.setTransform(-14.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:-25.8,y:1.6}}]}).to({state:[{t:this.shape,p:{x:25.7,y:-1.6}},{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.text = new cjs.Text("battery", "14px 'Arial'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(12.2,-9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#676754","#212629","#61493F","#1B1A20","#250B0C","#443025"],[0,0.067,0.333,0.616,0.808,1],-12.5,-12.2,-12.5,12.3).s().p("AkdCDIAAkGIIwAAQAMAAAAANIAADtQAAAMgMAAg");
	this.shape_2.setTransform(15.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C67A5B","#824B2C","#FFD0B9","#B1824C","#C47D45","#613A1B"],[0,0.067,0.333,0.616,0.808,1],28.7,-12.2,28.7,12.3).s().p("AhxCDQgKAAgBgMIAAjtQABgNAKAAIDuAAIAAEGg");
	this.shape_3.setTransform(-26.1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFF8C6","#5A522D","#EDE0B4","#695437","#2B0700"],[0,0.118,0.251,0.416,0.992],0,-10.9,0,11.1).s().p("AgGAyIAAhjIANhFIAADtg");
	this.shape_4.setTransform(-39.3,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFF8C6","#5A522D","#EDE0B4","#695437","#2B0700"],[0,0.118,0.251,0.416,0.992],0,-4.5,0,4.5).s().p("AgSAzQgSAAAAgNIAAhMQAAgMASAAIAlAAQASAAAAAMIAABMQAAANgSAAg");
	this.shape_5.setTransform(-40.1,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#676754","#212629","#61493F","#1B1A20","#250B0C","#443025"],[0,0.067,0.333,0.616,0.808,1],12.5,12.3,12.5,-12.2).s().p("AkTCEQgKgBgBgMIAAjtQABgMAKAAIIyAAIAAEGg");
	this.shape_6.setTransform(-15.2,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#C67A5B","#824B2C","#FFD0B9","#B1824C","#C47D45","#613A1B"],[0,0.067,0.333,0.616,0.808,1],-28.7,12.3,-28.7,-12.2).s().p("Ah8CEIAAkGIDuAAQAKAAABAMIAADtQgBAMgKABg");
	this.shape_7.setTransform(26,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFF8C6","#5A522D","#EDE0B4","#695437","#2B0700"],[0,0.118,0.251,0.416,0.992],0,-10.9,0,11.1).s().p("AgGh2IANBFIAABjIgNBFg");
	this.shape_8.setTransform(39.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:-40.1,y:0.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text}]}).to({state:[{t:this.shape_5,p:{x:40,y:-0.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-13,87.7,26.4);


(lib.swB = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._switch("synched",0);
	this.instance.setTransform(25.4,12.7,1,1,0,0,0,25.4,12.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.8,30.9);


(lib.sw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BFBFBF","#E6E6E6","#BFBFBF","#7B7B7B","#7B7B7B","#DDDDDD"],[0.008,0.086,0.38,0.729,0.867,0.992],-1.4,0,1.5,0).s().p("AgLCJQgFgGAAgJIAAjzQAAgJAFgGQAGgGAFAAQAHAAAFAGQAFAGAAAIIAAD0QAAAJgFAGQgFAGgHAAQgFAAgGgGg");
	this.shape.setTransform(7.7,29.5,1,0.539,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BFBFBF","#E6E6E6","#BFBFBF","#7B7B7B","#7B7B7B","#DDDDDD"],[0.008,0.086,0.38,0.729,0.867,0.992],-1.4,0,1.5,0).s().p("AgLCJQgFgGAAgJIAAjzQAAgJAFgGQAGgGAFAAQAHAAAFAGQAFAGAAAIIAAD0QAAAJgFAGQgFAGgHAAQgFAAgGgGg");
	this.shape_1.setTransform(31.1,26.2,0.999,1.475,100.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:0.999,scaleY:1.475,rotation:100.8,x:31.1,y:26.2}},{t:this.shape,p:{regX:0,regY:0,scaleX:1,scaleY:0.539,rotation:90,x:7.7,y:29.5}}]}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:0.539,rotation:90,x:7.7,y:29.5}},{t:this.shape,p:{regX:0.1,regY:-14.6,scaleX:0.999,scaleY:1.474,rotation:94.6,x:52.2,y:30.3}}]},1).wait(1));

	// Layer 2
	this.swB = new lib.swB();
	this.swB.setTransform(36,10.4,1,1,0,0,0,25.4,15.4);
	new cjs.ButtonHelper(this.swB, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.swB).wait(1).to({x:26},0).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ak1AgIAAg/IJrAAIAAA/g");
	this.shape_2.setTransform(30.8,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-5,62.2,36.4);


(lib.MainSlider = function() {
	this.initialize();

	// Layer 1
	this.val = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val.name = "val";
	this.val.textAlign = "center";
	this.val.lineHeight = 14;
	this.val.lineWidth = 29;
	this.val.setTransform(21.2,3);

	this.sliderThumb = new lib.sliderThumb();
	this.sliderThumb.setTransform(157.3,10.4);

	this.slidertrack = new lib.slidertrack();
	this.slidertrack.setTransform(71.7,10.8,1.85,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjVhZIGrAAIAACzImrAAg");
	this.shape.setTransform(21.5,9);

	this.addChild(this.shape,this.slidertrack,this.sliderThumb,this.val);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-7.2,257.7,35);


(lib.RbGroupMain = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFAAsQgIgJAAgRQAAgRAHgHQAIgJALAAQALAAAHAJQAIAHAAAQQAAATgHAIQgIAJgLAAQgLAAgHgJgAFGAAQgEAFAAANQAAANAEAGQAFAHAHAAQAHAAAFgHQAEgGAAgNQAAgNgEgFQgFgGgHAAQgHAAgFAGgAEhA0IgohHIAABHIgJAAIAAhbIAKAAIAoBHIAAhHIAKAAIAABbgAjlATIAJgCQABAHADADQAEAEAGAAQAGAAAEgDQADgDAAgFQAAgEgDgCQgCgCgIgCQgKgDgEgDQgEgCgCgCQgCgEAAgFQAAgIAGgGQAFgFAKAAQAGAAAFACQAEACADAEQACAEABAHIgJABQgBgLgLAAQgGAAgDADQgDACAAAEQAAAEADACQACABAIADQAMABADADQAEACACAEQABADAAAGQAAAJgGAGQgGAGgKAAQgUAAgDgVgAkZAfQgIgJAAgQQAAgQAIgJQAHgJALAAQALAAAHAJQAHAJAAAPIAAADIgpAAQABALAEAGQAFAGAHAAQAKAAAEgOIAKACQgCAKgHAGQgGAFgJAAQgMAAgHgJgAkRgOQgFAGAAAIIAfAAQgBgIgDgFQgFgGgHAAQgGAAgEAFgAlOAnIAAgnIgdg0IAMAAIAPAcIAIAQIAJgRIAOgbIAMAAIgeA0IAAAng");
	this.shape.setTransform(-132,40.7);

	// Layer 1
	this.RadBut_2 = new lib.radiobutton();
	this.RadBut_2.setTransform(-72.2,41.1,1,1,0,0,0,61.1,8.6);

	this.RadBut_1 = new lib.radiobutton();
	this.RadBut_1.setTransform(-131.9,40.5,1,1,0,0,0,61.1,8.6);

	this.addChild(this.RadBut_1,this.RadBut_2,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.5,30.6,108.2,20);


(lib.RbGroupMain_1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD/AyQgHgIAAgMIAJgBQACASAMAAQAHAAAFgFQAEgGAAgJQAAgHgEgFQgEgGgHAAIgGACIABgKIABAAQAHAAAEgCQAFgFAAgHQAAgGgEgEQgDgEgGAAQgFAAgEAEQgDAEgBAJIgKgDQACgLAGgHQAHgFAIAAQAJgBAHAIQAGAHABAJQAAAHgEAFQgCADgFADQAEABADADQAEADABAFQACAFAAAFQAAAOgIAHQgHAIgLAAQgJAAgHgGgAOrA3IAAgWIghAAIAAgLIAjg6IAHAAIAAA6IALAAIAAALIgLAAIAAAWgAOTAWIAYAAIAAgngAlxAxQAAgGAEgJQAEgIALgLQAOgNAEgGQAEgHAAgGQAAgHgEgEQgFgFgFAAQgHAAgEAFQgEAFgBAIIgJgBQABgNAGgGQAHgIALAAQALAAAHAIQAFAJABAJQAAAJgFAIQgFAGgNAOIgLAMIgEAGIAmAAIAAALgAurAkIAAhHQgDAEgFAEIgKAGIAAgLQAHgFAGgGQAGgHACgFIAHAAIAABbg");
	this.shape.setTransform(-71.4,41);

	// Layer 1
	this.RadBut_4 = new lib.radiobutton();
	this.RadBut_4.setTransform(54.9,41.7,1,1,0,0,0,61.1,8.6);

	this.RadBut_3 = new lib.radiobutton();
	this.RadBut_3.setTransform(-11.3,41.7,1,1,0,0,0,61.1,8.6);

	this.RadBut_2 = new lib.radiobutton();
	this.RadBut_2.setTransform(-72.2,41.1,1,1,0,0,0,61.1,8.6);

	this.RadBut_1 = new lib.radiobutton();
	this.RadBut_1.setTransform(-131.9,40.5,1,1,0,0,0,61.1,8.6);

	this.addChild(this.RadBut_1,this.RadBut_2,this.RadBut_3,this.RadBut_4,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.5,30.6,232.3,20.7);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Guide: Layer 2
	this.instance = new lib.sp("synched",0);
	this.instance.setTransform(123.7,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[123.7,24.3,123.8,24.3,123.9,24.3,125.5,18.6,127.1,12.8,128.6,25.6,130.1,38.3,131.6,25.7,133.1,13.1,135.1,25.4,137.1,37.6,138.6,25.4,140.1,13.1,141.6,25.9,143.1,38.6,144.6,25.7,146.1,12.8,147.9,24.9,149.7,36.9,153,36.9,156.4,36.9,156.4,18.5,156.4,0.1,146,0.1,135.7,0.1]}},13).to({guide:{path:[135.7,0.1,93.6,0.1,51.6,0.1,44.5,0.1,39.5,7.1,37,10.6,35.9,14.1,29.6,14.1,23.3,14.1,23.1,17.7,22.9,21.3,15.9,21.9,7.9,20.3,4.6,19.5,1.3,18.6,-0.6,24,0.7,27,1.3,28.5,2.3,28.9,5,27.1,14.8,25.5,19.7,24.7,24.1,24.3,64.5,24.3,105,24.3]}},16).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(146,255,0,0.502)").ss(3,0,0,4).p("AHJAbIvmAAQgsAEgxAIQhjAQgbATQgKgEgGgPQgMgeASg1IBCASQBQAOBHgFIADhJIB/AAQALgjAZgjQAyhGBHAAIQYAAIAAFwIhDAAIgljyIgeECIgej+IgeD0Igoj0IgeD7Igej/g");
	this.shape.setTransform(78.2,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,159.5,46.2);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Guide: Layer 2
	this.instance = new lib.sp("synched",0);
	this.instance.setTransform(390.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[390.3,24.3,390.3,24.3,390.3,24.3,207.2,24.3,24.1,24.3,19.7,24.7,14.8,25.5,4.9,27.1,2.2,28.9,1.2,28.5,0.6,27,-0.6,24,1.2,18.6,4.5,19.5,7.8,20.3,15.8,21.9,22.9,21.3,23.1,17.7,23.2,14.1,29.6,14.1,35.9,14.1,37,10.6,39.5,7.1,44.5,0.1,51.6,0.1,79.5,0.1,107.4,0.1]}},17).to({guide:{path:[107.4,0.1,265.1,0.1,422.8,0.1,422.8,18.5,422.8,36.9,419.4,36.9,416.1,36.9,414.3,24.9,412.5,12.8,411,25.7,409.5,38.6,408,25.9,406.5,13.1,405,25.4,403.5,37.6,401.5,25.4,399.5,13.1,399.5,13.1,399.5,13.1]}},33).to({guide:{path:[399.5,13.1,398,25.7,396.5,38.3,395,25.6,393.5,12.8,393.5,12.8,393.5,12.8]}},2).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(146,255,0,0.502)").ss(3,0,0,4).p("Ae8CqIgej+IgeD0Igoj0IgeD7Igej/IgfBzMg5OAAAQgsAEgxAIQhjAQgbATQgKgEgGgPQgMgeASg1IBCASQBQAOBHgFIADhJIB/AAQALgjAZgjQAyhGBHAAMA6AAAAIAAFwIhDAAIgljyg");
	this.shape.setTransform(211.4,21.5,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,425.9,46.2);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Guide: Layer 2
	this.instance = new lib.sp("synched",0);
	this.instance.setTransform(303.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[303.3,24.3,303.3,24.3,303.3,24.3,204.5,24.3,105.8,24.3]}},13).to({guide:{path:[105.6,24.3,64.8,24.3,24.1,24.3,19.7,24.7,14.8,25.5,5,27.1,2.3,28.9,1.3,28.5,0.7,27,-0.6,24,1.3,18.6,4.6,19.5,7.9,20.3,15.9,21.9,22.9,21.3,23.1,17.7,23.3,14.1,29.6,14.1,35.9,14.1,37,10.6,39.5,7.1,44.5,0.1,51.6,0.1,68.4,0.1,85.2,0.1]}},15).to({guide:{path:[85.4,0.1,210.6,0.1,335.8,0.1,335.8,18.5,335.8,36.9,332.4,36.9,329.1,36.9,327.3,24.9,325.5,12.8,324,25.7,322.5,38.6,321,25.9,319.5,13.1,318,25.4,316.5,37.6,314.5,25.4,312.5,13.1,312.5,13.1,312.5,13.1]}},14).to({guide:{path:[312.5,13.1,311,25.7,309.5,38.3,308,25.6,306.5,12.8,306.5,12.8,306.5,12.8]}},2).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(146,255,0,0.502)").ss(3,0,0,4).p("AZMCaIgljyIgeECIgej+IgeD0Igoj0IgeD7Igej/IgfBzMgroAAAQgsAEgxAIQhjAQgbATQgKgEgGgPQgMgeASg1IBCASQBQAOBHgFIADhJIB/AAQALgjAZgjQAyhGBHAAMAsaAAAIAAFwg");
	this.shape.setTransform(167.9,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,338.9,46.2);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Guide: Layer 2
	this.instance = new lib.sp("synched",0);
	this.instance.setTransform(217.7,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[217.6,14.8,216.4,19.6,215.1,24.3,119.6,24.3,24.1,24.3,19.7,24.7,14.8,25.5,4.9,27.1,2.2,28.9,1.2,28.5,0.6,27,-0.6,24,1.2,18.6,4.5,19.5,7.8,20.3,15.8,21.9,22.9,21.3,23.1,17.7,23.2,14.1,29.6,14.1,35.9,14.1,37,10.6,39.5,7.1,44.5,0.1,51.6,0.1,55,0.1,58.4,0.1]}},15).to({guide:{path:[58.4,0,153,0,247.6,0,247.6,0,247.6,0]}},14).to({guide:{path:[247.6,0.2,247.6,18.6,247.6,37,244.2,37,240.9,37,239.1,24.9,237.3,12.8,235.8,25.7,234.3,38.6,232.8,25.9,231.3,13.2,229.8,25.4,228.3,37.6,226.3,25.4,224.3,13.2,224.3,13.2,224.3,13.2]}},6).to({guide:{path:[224.3,13.1,222.8,25.7,221.3,38.3,219.8,25.6,218.3,12.8,218.3,12.8,218.3,12.8]}},2).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(146,255,0,0.502)").ss(3,0,0,4).p("ATWCaIhDAAIgljyIgeECIgej+IgeD0Igoj0IgeD7Igej/IgfBzI92AAQgsAEgxAIQhjAQgbATQgKgEgGgPQgMgeASg1IBCASQBQAOBHgFIADhJIB/AAQALgjAZgjQAyhGBHAAIeoAAg");
	this.shape.setTransform(123.8,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,250.7,46.2);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Guide: Layer 2
	this.instance = new lib.sp("synched",0);
	this.instance.setTransform(122.9,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[122.8,24.3,73.4,24.3,24.1,24.3,19.7,24.7,14.8,25.5,5,27.1,2.3,28.9,1.3,28.5,0.7,27,-0.6,24,1.3,18.6,4.6,19.5,7.9,20.3,15.9,21.9,22.9,21.3,23.1,17.7,23.3,14.1,29.6,14.1,35.9,14.1,37,10.6,39.5,7.1,44.5,0.1,51.6,0.1,71.9,0.1,92.2,0.1]}},13).to({guide:{path:[92.2,0.1,124.3,0.1,156.4,0.1,156.4,18.5,156.4,36.9,153,36.9,149.7,36.9,147.9,24.9,146.1,12.8,144.6,25.7,143.1,38.6,141.6,25.9,140.1,13.1,138.6,25.4,137.1,37.6,135.1,25.4,133.1,13.1]}},14).to({guide:{path:[133.1,13.1,133.1,13.1,133.1,13.1,131.6,25.7,130.1,38.3,128.6,25.6,127.1,12.8,127.1,12.8,127.1,12.8]}},2).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(146,255,0,0.502)").ss(3,0,0,4).p("AHJAbIvmAAQgsAEgxAIQhjAQgbATQgKgEgGgPQgMgeASg1IBCASQBQAOBHgFIADhJIB/AAQALgjAZgjQAyhGBHAAIQYAAIAAFwIhDAAIgljyIgeECIgej+IgeD0Igoj0IgeD7Igej/g");
	this.shape.setTransform(78.2,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,159.5,46.2);


(lib.flashLight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.text = new cjs.Text("reflector", "14px 'Arial'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(83.6,-59.7);

	this.text_1 = new cjs.Text("spring (metal)", "14px 'Arial'", "#CCCCCC");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.setTransform(280.5,135.7);

	this.text_2 = new cjs.Text("case (plastic)", "14px 'Arial'", "#CCCCCC");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.setTransform(302.6,-17.6);

	this.text_3 = new cjs.Text("wire", "14px 'Arial'", "#CCCCCC");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 16;
	this.text_3.setTransform(249.1,-44.6);

	this.text_4 = new cjs.Text("on/off switch (plastic)", "14px 'Arial'", "#CCCCCC");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 148;
	this.text_4.setTransform(204.8,-76.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AENlmIoZLN");
	this.shape.setTransform(248,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("ASUPMIocp2AQ/poInMJOAH7vLIoLKjAowsBIpjL7");
	this.shape_1.setTransform(140.6,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,1,1).p("AX6NyImCnCACWtxIoMKjAuWqnIpjL5ALZoOInMJM");
	this.shape_2.setTransform(176.4,28.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(1,1,1).p("AUqNyIF3noAgatxIoNKjAxHqnIpkL5AInoOInMJMAarnvIkUFx");
	this.shape_3.setTransform(194.2,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,1,1).p("Ab2NyIF4noAnctxIoNKjA4JqnIpkL5ABloOInKJMATpnvIkUFx");
	this.shape_4.setTransform(239.2,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:248,y:37.1}},{t:this.text_4,p:{x:204.8,y:-76.5,text:"on/off switch (plastic)",lineWidth:148}},{t:this.text_3,p:{x:249.1,y:-44.6,text:"wire",lineWidth:26}},{t:this.text_2,p:{x:302.6,y:-17.6,text:"case (plastic)",lineWidth:83}},{t:this.text_1,p:{x:280.5,y:135.7,text:"spring (metal)",lineWidth:86}},{t:this.text,p:{x:83.6,y:-59.7,text:"reflector",lineWidth:51}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{x:338,y:15.1}},{t:this.text_4,p:{x:249.1,y:-44.6,text:"wire",lineWidth:26}},{t:this.text_3,p:{x:392.6,y:-39.6,text:"case (plastic)",lineWidth:83}},{t:this.text_2,p:{x:354.5,y:117.7,text:"spring (metal)",lineWidth:86}},{t:this.text_1,p:{x:83.6,y:-59.7,text:"reflector",lineWidth:51}},{t:this.text,p:{x:204.8,y:-76.5,text:"on/off switch (plastic)",lineWidth:148}}]},1).to({state:[{t:this.shape_3},{t:this.text_4,p:{x:249.1,y:-44.6,text:"wire",lineWidth:26}},{t:this.text_3,p:{x:392.6,y:-39.6,text:"case (plastic)",lineWidth:83}},{t:this.text_2,p:{x:342.5,y:117.7,text:"spring (metal)",lineWidth:86}},{t:this.text_1,p:{x:83.6,y:-59.7,text:"reflector",lineWidth:51}},{t:this.text,p:{x:204.8,y:-76.5,text:"on/off switch (plastic)",lineWidth:148}}]},1).to({state:[{t:this.shape_4},{t:this.text_4,p:{x:249.1,y:-44.6,text:"wire",lineWidth:26}},{t:this.text_3,p:{x:392.6,y:-39.6,text:"case (plastic)",lineWidth:83}},{t:this.text_2,p:{x:433.5,y:117.7,text:"spring (metal)",lineWidth:86}},{t:this.text_1,p:{x:83.6,y:-59.7,text:"reflector",lineWidth:51}},{t:this.text,p:{x:204.8,y:-76.5,text:"on/off switch (plastic)",lineWidth:148}}]},1).wait(1));

	// Layer 7
	this.b1 = new lib.battery();
	this.b1.setTransform(135.2,58.3);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(4));

	// Layer 2
	this.instance = new lib.battery("synched",0);
	this.instance.setTransform(302.2,79.6,1,1,0,0,0,78,21.3);

	this.instance_1 = new lib.battery("synched",0);
	this.instance_1.setTransform(302.2,79.6,1,1,0,0,0,78,21.3);

	this.instance_2 = new lib.battery("synched",0);
	this.instance_2.setTransform(302.2,79.6,1,1,0,0,0,78,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:302.2}}]},1).to({state:[{t:this.instance_1,p:{x:302.2}},{t:this.instance,p:{x:391.2}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:391.2}},{t:this.instance,p:{x:480.2}}]},1).wait(1));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#BFBFBF","#E6E6E6","#BFBFBF","#7B7B7B","#7B7B7B","#DDDDDD"],[0.008,0.086,0.38,0.729,0.867,0.992],-1.4,0,1.5,0).s().p("AgLCJQgFgGAAgJIAAjzQAAgJAFgGQAGgGAFAAQAHAAAFAGQAFAGAAAIIAAD0QAAAJgFAGQgFAGgHAAQgFAAgGgGg");
	this.shape_5.setTransform(81.1,49,1,0.539,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#BA3500","#FE7E5F","#C73800","#9E3103","#EC723E"],[0.569,0.71,0.784,0.91,1],9.9,12.3,0,9.9,12.3,20.4).s().p("AhiBPQALg5AsgqQA5g6BUAAIACAAIAAAgIgBAAQhHAAgwAxQghAhgLArg");
	this.shape_6.setTransform(96.1,41);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#BA3500","#FE7E5F","#C73800","#9E3103","#EC723E"],[0.569,0.71,0.784,0.91,1],9.9,12.3,0,9.9,12.3,20.4).s().p("AhiBPQALg5AsgqQA5g6BUAAIACAAIAAAgIgBAAQhHAAgwAxQghAhgLArg");
	this.shape_7.setTransform(96.1,41);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BA3500","#FE7E5F","#C73800","#611E00","#DE5815"],[0.008,0.086,0.463,0.851,0.992],-1.5,-6.9,1.6,-6.9).s().p("AgLBEQgGgGAAgJIAAh+IAjAAIAAB+QAAAJgFAGQgGAGgHAAQgGAAgFgGg");
	this.shape_8.setTransform(209.3,66.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA3500","#FE7E5F","#C73800","#611E00","#DE5815"],[0.008,0.086,0.463,0.851,0.992],-1.5,-6.1,1.6,-6.1).s().p("AgRBCIAAiDIAjAAIAACDg");
	this.shape_9.setTransform(209.3,52.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#BA3500","#FE7E5F","#C73800","#611E00","#DE5815"],[0.008,0.086,0.463,0.851,0.992],-1.5,7.7,1.6,7.7).s().p("AgRBCIAAhuQAAgJAGgGQAFgGAGAAQAHAAAGAGQAFAGAAAJIAABug");
	this.shape_10.setTransform(209.3,39.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BFBFBF","#E6E6E6","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],5.2,-0.8,-4.9,0.9).s().p("AAWGRQgUgPgCgZQhklbgQliQgEgZAOgVQAPgUAZgEQAYgEAVAOQAUAOACAZQANF3BnFHQAFAZgPAVQgPAUgYAEIgLABQgTAAgQgLg");
	this.shape_11.setTransform(201.1,60,0.283,0.344);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#BFBFBF","#E6E6E6","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],1.5,-0.2,-1.3,0.3).s().p("AAGCJQgGgEAAgJQgbh4gFh4QgBgIAEgIQAEgGAIgCQAGgCAGAGQAFAEAAAIQADCBAeBwQABAJgEAHQgEAHgHABIgDAAQgFAAgFgEg");
	this.shape_12.setTransform(194.5,60);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BFBFBF","#E6E6E6","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],5.2,-0.8,-4.9,0.9).s().p("AAWGRQgUgPgCgZQhklbgQliQgEgZAOgVQAPgUAZgEQAYgEAVAOQAUAOACAZQANF3BnFHQAFAZgPAVQgPAUgYAEIgLABQgTAAgQgLg");
	this.shape_13.setTransform(187.8,60,0.283,0.344);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BFBFBF","#E6E6E6","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],5.2,-0.8,-4.9,0.9).s().p("AAWGRQgUgPgCgZQhklbgQliQgEgZAOgVQAPgUAZgEQAYgEAVAOQAUAOACAZQANF3BnFHQAFAZgPAVQgPAUgYAEIgLABQgTAAgQgLg");
	this.shape_14.setTransform(181.1,60,0.283,0.344);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#8C8C8C","#666666","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],-5.1,0,5.2,0).s().p("AgpGPQgSgSAAgZIAArHQAAgZASgSQARgSAYAAQAZAAARARQASASAAAZIAALIQABAZgTASQgRASgZAAQgYAAgRgSg");
	this.shape_15.setTransform(179.3,60,0.283,0.344);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#8C8C8C","#666666","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],-5.2,-0.8,4.9,0.9).s().p("AhDGbQgZgEgOgUQgPgVAFgZQAoh+AaiHIAMhCIAOhVQATiNAFiVQACgZAUgOQAVgOAYAEQAZAEAPAUQAOAVgDAZQgJCzgdCvQgRBngYBmIgIAeQgNA4gRA4QgCAZgUAPQgQALgTAAIgLgBg");
	this.shape_16.setTransform(184.5,60,0.283,0.344);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#8C8C8C","#666666","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],-5.2,-0.8,4.9,0.9).s().p("AhDGbQgZgEgOgUQgPgVAFgZQAoh+AaiHIAMhCIAOhVQATiNAFiVQACgZAUgOQAVgOAYAEQAZAEAPAUQAOAVgDAZQgJCzgdCvQgRBngYBmIgIAeQgNA4gRA4QgCAZgUAPQgQALgTAAIgLgBg");
	this.shape_17.setTransform(191.1,60,0.283,0.344);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#8C8C8C","#666666","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],-5.2,-0.8,4.9,0.9).s().p("AhDGbQgZgEgOgUQgPgVAFgZQAoh+AaiHIAMhCIAOhVQATiNAFiVQACgZAUgOQAVgOAYAEQAZAEAPAUQAOAVgDAZQgJCzgdCvQgRBngYBmIgIAeQgNA4gRA4QgCAZgUAPQgQALgTAAIgLgBg");
	this.shape_18.setTransform(197.7,60,0.283,0.344);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#8C8C8C","#666666","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],-33,-5.1,-33,5.2).s().p("AhWA8IAAh3IBwAAQAZgBARATQATARgBAYQAAAZgRARQgSASgZAAg");
	this.shape_19.setTransform(209.1,72.3,0.219,0.344);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#8C8C8C","#666666","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],-11.3,-5.1,-11.3,5.2).s().p("AgdA8IAAh3IA6AAIAAB3g");
	this.shape_20.setTransform(206.5,72.3,0.219,0.344);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#8C8C8C","#666666","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],9.5,-5.1,9.5,5.2).s().p("AgaA8IAAh3IA1AAIAAB3g");
	this.shape_21.setTransform(205.3,72.3,0.219,0.344);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#8C8C8C","#666666","#616161","#2F2F2F","#7B7B7B","#DDDDDD"],[0.008,0.086,0.533,0.729,0.867,0.992],34.5,-5.1,34.5,5.2).s().p("AgLA8QgZAAgSgSQgSgRAAgZQAAgYASgRQASgTAZABIBUAAIAAB3g");
	this.shape_22.setTransform(203.1,72.3,0.219,0.344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{x:203.1}},{t:this.shape_21,p:{x:205.3}},{t:this.shape_20,p:{x:206.5}},{t:this.shape_19,p:{x:209.1}},{t:this.shape_18,p:{x:197.7}},{t:this.shape_17,p:{x:191.1}},{t:this.shape_16,p:{x:184.5}},{t:this.shape_15,p:{x:179.3}},{t:this.shape_14,p:{x:181.1}},{t:this.shape_13,p:{x:187.8}},{t:this.shape_12,p:{x:194.5}},{t:this.shape_11,p:{x:201.1}},{t:this.shape_10,p:{x:209.3}},{t:this.shape_9,p:{x:209.3}},{t:this.shape_8,p:{x:209.3}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_22,p:{x:293.6}},{t:this.shape_21,p:{x:295.8}},{t:this.shape_20,p:{x:297}},{t:this.shape_19,p:{x:299.6}},{t:this.shape_18,p:{x:288.2}},{t:this.shape_17,p:{x:281.6}},{t:this.shape_16,p:{x:275}},{t:this.shape_15,p:{x:269.8}},{t:this.shape_14,p:{x:271.6}},{t:this.shape_13,p:{x:278.3}},{t:this.shape_12,p:{x:285}},{t:this.shape_11,p:{x:291.6}},{t:this.shape_10,p:{x:299.8}},{t:this.shape_9,p:{x:299.8}},{t:this.shape_8,p:{x:299.8}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_22,p:{x:382.6}},{t:this.shape_21,p:{x:384.8}},{t:this.shape_20,p:{x:386}},{t:this.shape_19,p:{x:388.6}},{t:this.shape_18,p:{x:377.2}},{t:this.shape_17,p:{x:370.6}},{t:this.shape_16,p:{x:364}},{t:this.shape_15,p:{x:358.8}},{t:this.shape_14,p:{x:360.6}},{t:this.shape_13,p:{x:367.3}},{t:this.shape_12,p:{x:374}},{t:this.shape_11,p:{x:380.6}},{t:this.shape_10,p:{x:388.8}},{t:this.shape_9,p:{x:388.8}},{t:this.shape_8,p:{x:388.8}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:470.6}},{t:this.shape_21,p:{x:472.8}},{t:this.shape_20,p:{x:474}},{t:this.shape_19,p:{x:476.6}},{t:this.shape_18,p:{x:465.2}},{t:this.shape_17,p:{x:458.6}},{t:this.shape_16,p:{x:452}},{t:this.shape_15,p:{x:446.8}},{t:this.shape_14,p:{x:448.6}},{t:this.shape_13,p:{x:455.3}},{t:this.shape_12,p:{x:462}},{t:this.shape_11,p:{x:468.6}},{t:this.shape_10,p:{x:476.8}},{t:this.shape_9,p:{x:476.8}},{t:this.shape_8,p:{x:476.8}}]},1).wait(1));

	// Layer 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CCCCCC").ss(2,1,1).p("AmGJvIMNk3AmGpuIMNE3");
	this.shape_23.setTransform(39.2,57);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#AAAAAA","#595959","#A2A2A2"],[0,0.118,0.427],-88.7,-51.7,264.9,-51.7).s().p("AtoDcIgOgRIAAhxIMQk1IBoAAIAAA4IN0AAIAAB+InCAAQgFABgCgFIgBgEQgOgLgPAAQgEAAgEgIIgGgRQgIgagPAAIgDABQgLAAgFAZQgGAZgIAAQgEAAgDgHIgFgSQgJgZgQgBQgPAAgKAVQgIAQAAAOQAAAHgGAFIgGAFIgtAAQgLAAgGAZQgGAXgGgBQgFABgDgJIgHgOQgHgbgQAAIgEACQgKAAgGAZQgGAXgHgBQgEABgEgJIgFgOQgJgbgPAAIgIACQgKAAgGAZQgGAXgGgBQgFABgDgJIgGgOQgJgbgNAAIgEACQgKAAgGAZQgGAXgHgBQgEABgEgJIgFgOQgJgbgPAAIgBAAIkOD4IgOAGQgPAGgNABg");
	this.shape_24.setTransform(88.7,110.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A2A2A2").s().p("AArBJIgrgwIgCgEIiDAAIAAhdIB0ACIARABIAOACQBGAEAyAlIgPAAIAABjg");
	this.shape_25.setTransform(165.5,13.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FFFFFF","#595959","#DEDEDE"],[0,0.118,0.427],-652.2,0,189,0).s().p("AgDHfIAFgJIAAgUIACAAIAAAdgAACnBIAAgTIgFgKIAHAAIAAAdg");
	this.shape_26.setTransform(187.9,58.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FFFFFF","#595959","#A2A2A2"],[0,0.118,0.427],-329.9,0,23.6,0).s().p("ABwIZIgLgQIgbAAIgIAKIg5AAIgJgKIgcAAIgIAJIgqAAIgNgQIAAgkIAAgcIgYAAIgKAAIgBAAIAAATIgIAJIhkAAIAAh+IFXAAIAArZIlXAAIAAhlIAPAAIBVAAIAIAKIAAATIABAAIAKAAIAYAAIAAgdIAAgkIANgQIAqAAIAIAKIAcAAIAJgKIA5AAIAIAJIAbAAIALgPIBFAAQAZAAARCxQAMCCAABEIAAFCQAABEgMCCQgRCygZAAg");
	this.shape_27.setTransform(201,58.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#AAAAAA","#595959","#DEDEDE"],[0,0.118,0.427],-57.7,53.2,295.9,53.2).s().p("ADODMIsNk0IAAhRIANgSIHjAAQANAAAPAFIANAIIEMD4IABgBQAQAAAIgZIAGgSQADgIAFAAQAGAAAGAZQAHAZAKAAIADABQAQAAAIgZIAGgSQADgIAFAAQAGAAAGAZQAHAZAKAAIAHABQAQAAAIgZIAGgSQADgIAFAAICFAAIAeAAIAABgIgeAAIgBAAIg5A0IirAAIAAAyg");
	this.shape_28.setTransform(57.7,5.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#BA3500","#FE7E5F","#C73800","#611E00","#DE5815"],[0.008,0.086,0.463,0.851,0.992],170.3,-1.5,170.3,1.6).s().p("A1VASIAAgjMAqrAAAIAAAjg");
	this.shape_29.setTransform(176.2,34.5,0.177,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#BA3500","#FE7E5F","#C73800","#611E00","#DE5815"],[0.008,0.086,0.463,0.851,0.992],4.8,-1.5,4.8,1.6).s().p("Ah/ASIAAgjID/AAIAAAjg");
	this.shape_30.setTransform(202.7,34.5,0.177,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#BA3500","#FE7E5F","#C73800","#611E00","#DE5815"],[0.008,0.086,0.463,0.851,0.992],-23.6,-1.5,-23.6,1.6).s().p("AhIASIAAgjICRAAIAAAjg");
	this.shape_31.setTransform(206.3,34.5,0.177,1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#BA3500","#FE7E5F","#C73800","#611E00","#DE5815"],[0.008,0.086,0.463,0.851,0.992],-8.2,-1.5,-8.2,1.6).s().p("Ag8ASIAAgjIBkAAQAJAAAGAFQAGAGAAAGQAAAHgGAFQgGAFgJABg");
	this.shape_32.setTransform(208.7,34.5,0.177,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A2A2A2","#626262","#A6A6A6","#5E5E5E","#777777","#2F2F2F"],[0,0.118,0.271,0.494,0.682,0.992],0,34.9,0,-35.5).s().p("AgVFnIAArNIArAAIAALNg");
	this.shape_33.setTransform(78.2,57.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#BBBBBB","#3C3C3C","#3C3C3C","#1A1A1A"],[0,0.192,0.494,0.992],0,31.5,0,-36.7).s().p("AqiGSIAAsjIVFAAIAAMjg");
	this.shape_34.setTransform(278.8,55.8,1,1,0,0,0,132.9,0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#A2A2A2","#626262","#A6A6A6","#5E5E5E","#777777","#2F2F2F"],[0,0.118,0.271,0.494,0.682,0.992],0,60.6,0,-61.9).s().p("AgRJxIAAzhIAjAAIAAThg");
	this.shape_35.setTransform(1.9,57);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.bf(img.fl, null, new cjs.Matrix2D(0.44,0,0,0.531,-38.3,-62.5)).s().p("Al9JwIAAzfIGUAAIFnEFIAAL7IjxDBIgJAeg");
	this.shape_36.setTransform(41.1,56.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#AAAAAA","#595959","#A2A2A2"],[0,0.118,0.427],-87.2,-51.7,266.4,-51.7).s().p("AtZDbIgOgRIAAhwIMQk1IBoAAIAAA5INXAAIAAB+ImlAAQgFAAgCgFIgBgDQgOgLgPAAQgEAAgEgJIgGgRQgIgagPABIgDAAQgLAAgFAZQgGAagIAAQgEAAgDgIIgFgSQgJgZgQAAQgPgCgKAWQgIAQAAANQAAAHgGAHIgGADIgtAAQgLAAgGAZQgGAYgGAAQgFAAgDgJIgHgPQgHgagQAAIgEABQgKAAgGAZQgGAYgHAAQgEAAgEgJIgFgPQgJgagPAAIgIABQgKAAgGAZQgGAYgGAAQgFAAgDgJIgGgPQgJgagPAAIgEABQgIAAgGAZQgGAYgHAAQgEAAgEgJIgFgPQgJgagPAAIgBAAIkOD4IgOAHQgPAFgNAAg");
	this.shape_37.setTransform(87.2,110.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A2A2A2").s().p("AKzIZIgLgQIgbAAIgHAKIg6AAIgJgLIgeAAIgIAKIgqAAIgMgPIAAhBIgkAAIAAAUIgHAJIwKAAIAAh+IT+AAIAArZI0sAAIgrgxIgEgEIiDAAIAAhfIB1ABIASACIAOACQBGAFAyAjICHAAIClAAIB9AAIC3AAIAKAAICRAAIDiAAIAHAKIAAATIAkAAIAAhAIAMgQIAqAAIAIALIAeAAIAJgMIA6AAIAHAKIAbAAIALgPIBFAAQAZAAARCxQANCCAABEIAAFCQAABEgNCCQgRCygZAAg");
	this.shape_38.setTransform(233.5,58.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#AAAAAA","#595959","#DEDEDE"],[0,0.118,0.427],-57.7,53.3,295.9,53.3).s().p("ADODMIsNk0IAAhSIANgRIHjAAQANAAAPAGIANAHIEMD4IABgBQAQAAAIgZIAGgSQADgIAFAAQAGAAAGAZQAHAZAKAAIADABQAQAAAIgZIAGgSQADgIAFAAQAGAAAGAZQAHAZAKAAIAHABQAQAAAIgZIAGgSQADgIAFAAICFAAIAeAAIAABgIgeAAIgBAAIg5A1IirAAIAAAxg");
	this.shape_39.setTransform(57.7,5.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#BFBFBF","#E6E6E6","#BFBFBF","#7B7B7B","#7B7B7B","#DDDDDD"],[0.008,0.086,0.38,0.729,0.867,0.992],-1.4,0,1.5,0).s().p("AgLCJQgFgGAAgJIAAjzQAAgJAFgGQAGgGAFAAQAHAAAFAGQAFAGAAAIIAAD0QAAAJgFAGQgFAGgHAAQgFAAgGgGg");
	this.shape_40.setTransform(81.1,49,1,0.539,90);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#BA3500","#FE7E5F","#C73800","#9E3103","#EC723E"],[0.569,0.71,0.784,0.91,1],9.9,12.3,0,9.9,12.3,20.4).s().p("AhiBPQALg5AsgqQA5g6BUAAIACAAIAAAgIgBAAQhHAAgwAxQghAhgLArg");
	this.shape_41.setTransform(96.1,41);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#BBBBBB","#3C3C3C","#3C3C3C","#1A1A1A"],[0,0.192,0.494,0.992],-0.1,31.5,-0.1,-36.7).s().p("AxnGSIAAsjMAjPAAAIAAMjg");
	this.shape_42.setTransform(413,55.8,1,1,0,0,0,221.9,0.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#AAAAAA","#595959","#A2A2A2"],[0,0.118,0.427],-87.2,-51.7,266.4,-51.7).s().p("AtZDcIgOgRIAAhxIMQk1IBoAAIAAA4INXAAIAAB+ImlAAQgFABgCgFIgBgEQgOgLgPAAQgEAAgEgIIgGgRQgIgagPAAIgDAAQgLAAgFAaQgGAZgIAAQgEAAgDgIIgFgRQgJgZgQgBQgPAAgKAVQgIAQAAAOQAAAGgGAGIgGAFIgtAAQgLgBgGAZQgGAXgGAAQgFABgDgJIgHgPQgHgagQAAIgEACQgKgBgGAZQgGAXgHAAQgEABgEgJIgFgPQgJgagPAAIgIACQgKgBgGAZQgGAXgGAAQgFABgDgJIgGgPQgJgagPAAIgEACQgIgBgGAZQgGAXgHAAQgEABgEgJIgFgPQgJgagPAAIgBAAIkOD4IgOAGQgPAGgNABg");
	this.shape_43.setTransform(87.2,110.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A2A2A2").s().p("ARzIZIgLgPIgbAAIgIAJIg5AAIgJgKIgeAAIgIAKIgqAAIgNgQIAAhBIgjAAIAAAUIgIAJI+IAAIAAh+MAh9AAAIAArZMgirAAAIgsgxIgDgEIiDAAIAAhfIB0ABIASACIAPACQBFAFAzAkIPHAAIN4AAIAcAAIAIAJIAAAUIAjAAIAAhBIANgQIAqAAIAIALIAeAAIAJgMIA5AAIAIAKIAbAAIALgPIBFAAQAZAAARCxQAMCCAABEIAAFCQAABEgMCCQgRCygZAAg");
	this.shape_44.setTransform(278.3,58.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#AAAAAA","#595959","#DEDEDE"],[0,0.118,0.427],-57.7,53.3,295.9,53.3).s().p("ADODMIsNk0IAAhSIANgRIHjAAQANAAAPAGIANAHIEMD4IABgBQAQAAAIgZIAGgSQADgHAFAAQAGAAAGAYQAHAZAKAAIADABQAQAAAIgZIAGgSQADgHAFAAQAGAAAGAYQAHAZAKAAIAHABQAQAAAIgZIAGgSQADgHAFAAICFAAIAeAAIAABfIgeAAIgBAAIg5A1IirAAIAAAxg");
	this.shape_45.setTransform(57.7,5.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#BBBBBB","#3C3C3C","#3C3C3C","#1A1A1A"],[0,0.192,0.494,0.992],-0.1,31.5,-0.1,-36.7).s().p("A4oGSIAAsjMAxRAAAIAAMjg");
	this.shape_46.setTransform(546.4,55.8,1,1,0,0,0,310.3,0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#AAAAAA","#595959","#A2A2A2"],[0,0.118,0.427],-87.2,-51.7,266.4,-51.7).s().p("AtZDbIgOgQIAAhxIMQk0IBoAAIAAA4INXAAIAAB+ImlAAQgFgBgCgEIgBgDQgOgMgPAAQgEAAgEgIIgGgRQgIgagPAAIgDAAQgLAAgFAaQgGAZgIAAQgEAAgDgHIgFgSQgJgagQAAQgPgBgKAWQgIAQAAAOQAAAGgGAGIgGAEIgtAAQgLAAgGAZQgGAYgGAAQgFgBgDgIIgHgPQgHgagQAAIgEABQgKAAgGAZQgGAYgHAAQgEgBgEgIIgFgPQgJgagPAAIgIABQgKAAgGAZQgGAYgGAAQgFgBgDgIIgGgPQgJgagPAAIgEABQgIAAgGAZQgGAYgHAAQgEgBgEgIIgFgPQgJgagPAAIgBgBIkOD5IgOAGQgPAHgNgBg");
	this.shape_47.setTransform(87.2,110.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A2A2A2").s().p("AYwIZIgLgPIgbAAIgIAJIg5AAIgJgKIgeAAIgIAKIgqAAIgNgQIAAhBIgjAAIAAAUIgIAJMgsCAAAIAAh+MAv3AAAIAAraMgwlAAAIgsgwIgDgFIiDAAIAAheIB0ACIASABIAPACQBFAEAzAlMAhQAAAIESAAIFzAAIAIAJIAAAUIAjAAIAAhBIANgQIAqAAIAIAKIAeAAIAJgLIA5AAIAIAKIAbAAIALgPIBFAAQAZAAARCxQAMCCAABEIAAFCQAABEgMCDQgRCxgZAAg");
	this.shape_48.setTransform(322.8,58.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#AAAAAA","#595959","#DEDEDE"],[0,0.118,0.427],-57.7,53.3,295.9,53.3).s().p("ADODNIsNk2IAAhRIANgSIHjAAQANABAPAGIANAGIEMD5IABgBQAQAAAIgaIAGgRQADgIAFABQAGAAAGAYQAHAZAKAAIADABQAQAAAIgaIAGgRQADgIAFABQAGAAAGAYQAHAZAKAAIAHABQAQAAAIgaIAGgRQADgIAFABICFAAIAeAAIAABeIgeAAIgBAAIg5A1IirAAIAAAzg");
	this.shape_49.setTransform(57.7,5.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#BBBBBB","#3C3C3C","#3C3C3C","#1A1A1A"],[0,0.192,0.494,0.992],-0.1,31.5,-0.1,-36.7).s().p("A/gGSIAAsjMA/BAAAIAAMjg");
	this.shape_50.setTransform(676.8,55.8,1,1,0,0,0,396.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{scaleX:0.177,x:208.7}},{t:this.shape_31,p:{scaleX:0.177,x:206.3}},{t:this.shape_30,p:{scaleX:0.177,x:202.7}},{t:this.shape_29,p:{scaleX:0.177,x:176.2}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{y:57}}]}).to({state:[{t:this.shape_42},{t:this.shape_36},{t:this.shape_35},{t:this.shape_33},{t:this.shape_41},{t:this.shape_32,p:{scaleX:0.459,x:298.9}},{t:this.shape_31,p:{scaleX:0.459,x:292.7}},{t:this.shape_30,p:{scaleX:0.459,x:283.4}},{t:this.shape_29,p:{scaleX:0.459,x:214.8}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_23,p:{y:56.9}}]},1).to({state:[{t:this.shape_46},{t:this.shape_36},{t:this.shape_35},{t:this.shape_33},{t:this.shape_41},{t:this.shape_32,p:{scaleX:0.728,x:385.1}},{t:this.shape_31,p:{scaleX:0.728,x:375.3}},{t:this.shape_30,p:{scaleX:0.728,x:360.5}},{t:this.shape_29,p:{scaleX:0.728,x:251.6}},{t:this.shape_40},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_23,p:{y:56.9}}]},1).to({state:[{t:this.shape_50},{t:this.shape_36},{t:this.shape_35},{t:this.shape_33},{t:this.shape_41},{t:this.shape_32,p:{scaleX:1,x:472}},{t:this.shape_31,p:{scaleX:1,x:458.6}},{t:this.shape_30,p:{scaleX:1,x:438.3}},{t:this.shape_29,p:{scaleX:1,x:288.7}},{t:this.shape_40},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_23,p:{y:57}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-76.5,348.9,231.8);


(lib.charge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 4
	this.instance = new lib.p3();
	this.instance.setTransform(52.8,34.5);

	this.instance_1 = new lib.p4();
	this.instance_1.setTransform(52.8,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.p2();
	this.instance_2.setTransform(52.8,34.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_3 = new lib.p1();
	this.instance_3.setTransform(52.8,34.5);

	this.instance_4 = new lib.p5();
	this.instance_4.setTransform(52.8,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[]},1).to({state:[{t:this.instance_4}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.3,33,159.5,46.1);


(lib.buble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFCC","rgba(255,255,204,0)"],[0.647,1],0,0,0,0,0,54.8).s().p("Al+F/QififAAjgQAAjeCfigQCgifDeAAQDgAACfCfQCfCgAADeQAADgifCfQifCfjgAAQjeAAigifg");
	this.shape.setTransform(43.5,40.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 1
	this.instance = new lib.glass("synched",0);
	this.instance.setTransform(41.7,54.3,1,1,0,0,0,41.7,54.3);
	this.instance.alpha = 0.398;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#421200").ss(3,1,1).p("ACvgfQALAHABAKQgBASg8AOQg9AOhVAAQhWAAg9gOQgKgCgJgD");
	this.shape_1.setTransform(42.3,107.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#421200").ss(3,1,1).p("AC9gdQADAFABAIQAAACAAACQgDAYg3AIQgYAEh3AEQhvAEghgDQgZgDgPgG");
	this.shape_2.setTransform(41.6,137.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#421200").ss(3,1,1).p("AC9gdQADAFABAIQAAACAAACQgDAYg3AIQgYAEh3AEQhvAEghgDQgZgDgPgG");
	this.shape_3.setTransform(41.6,131.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#421200").ss(3,1,1).p("AC9gdQADAFABAIQAAACAAACQgDAYg3AIQgYAEh3AEQhvAEghgDQgZgDgPgG");
	this.shape_4.setTransform(41.6,125.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#421200").ss(3,1,1).p("AC9gdQADAFABAIQAAACAAACQgDAYg3AIQgYAEh3AEQhvAEghgDQgZgDgPgG");
	this.shape_5.setTransform(41.6,119.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#421200").ss(3,1,1).p("AC9gdQADAFABAIQAAACAAACQgDAYg3AIQgYAEh3AEQhvAEghgDQgZgDgPgG");
	this.shape_6.setTransform(41.6,113);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#9F713F","#DEA886","#FFEFDF","#B67F6B","#180000"],[0,0.063,0.176,0.455,1],-18.9,0.5,17.6,-0.3).s().p("AiNAoQg8gGgBgcQgBgOARgKQAOgKAdgDQARgDB+gEQBugEAhADQAkADAPAMIAGAGQADAFABAHIAAAEQgDAZg3AIQgYAEh5AEQg9ACgmAAQgdAAgOgBg");
	this.shape_7.setTransform(41.9,112.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#9F713F","#DEA886","#FFEFDF","#B67F6B","#180000"],[0,0.063,0.176,0.455,1],-18.9,0.5,17.6,-0.3).s().p("AiNAoQg8gGgBgcQgBgOARgKQAOgJAdgEQARgDB+gEQBugEAhADQAkAEAPALIAGAGQADAFABAIIAAAEQgDAYg3AJQgYADh5AEIhfACQggAAgPgBg");
	this.shape_8.setTransform(41.9,118.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#9F713F","#DEA886","#FFEFDF","#B67F6B","#180000"],[0,0.063,0.176,0.455,1],-18.9,0.5,17.6,-0.3).s().p("AiNAoQg8gGgBgcQgBgOARgKQAOgJAdgEQARgDB+gEQBugEAhADQAkAEAPALIAGAGQADAFABAHIAAAEQgDAZg3AIQgYAEh5AEQg9ACgmAAQgdAAgOgBg");
	this.shape_9.setTransform(41.9,124.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#9F713F","#DEA886","#FFEFDF","#B67F6B","#180000"],[0,0.063,0.176,0.455,1],-18.9,0.5,17.6,-0.3).s().p("AiNAoQg8gGgBgcQgBgOARgKQAOgJAdgEQARgCB+gFQBugDAhACQAkAEAPAMIAGAFQADAFABAIIAAAEQgDAYg3AJQgYADh5AEIhfACQggAAgPgBg");
	this.shape_10.setTransform(41.9,130.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#9F713F","#DEA886","#FFEFDF","#B67F6B","#180000"],[0,0.063,0.176,0.455,1],-18.9,0.5,17.6,-0.3).s().p("AiNAoQg8gGgBgcQgBgOARgKQAOgJAdgEQARgDB+gEQBugEAhADQAkAEAPALIAGAGQADAFABAHIAAAFQgDAYg3AIQgYAEh5AEQg9ACgmAAQgdAAgOgBg");
	this.shape_11.setTransform(41.9,136.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#E2AB6A","#E0902F","#D57636","#681000","#944921"],[0,0.212,0.62,0.816,1],-8.5,-2.6,0,-8.5,-2.6,28.9).s().p("Ag0A7QgSgBgggVQhLgsgXgzIGRABQgXAyhLAtQggAUgSABg");
	this.shape_12.setTransform(41,144.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A0000").s().p("AgkBXQgoAAAAgoIAAhdQAAgoAoAAIBJAAQAoAAAAAoIAABdQAAAogoAAg");
	this.shape_13.setTransform(41,145.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CC6600").ss(1,1,1).p("AAWhdIgCAJQgEAKgDAEQgDADABA1QAAAZACAaIgBA4IghAB");
	this.shape_14.setTransform(41.2,97.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#993300").s().p("AgSAQQgJgHABgJQgBgJAJgGQAIgHAKAAQALAAAIAHQAIAGAAAJQAAAJgIAHQgIAHgLAAQgKAAgIgHgAgJgHQgFADAAAEQAAADAFADQAEADAFAAQAGAAAEgDQAEgDABgDQgBgEgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_15.setTransform(41.1,85.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF6600").ss(0.3,1,1).p("AAMhKQAAgKADgUAAMhKQgBAFAAACQgEALgHABQgFgBABgMQAAgOAIAAQAGAAACAIgAgOBpQAPh5AFgTQAHgcgBgL");
	this.shape_16.setTransform(46.7,49.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF6600").ss(0.3,1,1).p("AgVhIQgBgNAHgBQAJgBABAMQAAAKgEACQgGADgDgEQgCgCAAgEIgBgCQgCgMABgUAAYBpIgpihQgDgIAAgG");
	this.shape_17.setTransform(35.1,49.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CC6600").ss(1,1,1).p("AgVhdIACAJQADAKAEAEQADADgBA1QgBAZgBAaIABA4IAhAB");
	this.shape_18.setTransform(40.5,97.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#993300").ss(0.3,1,1).p("AAGhiIgFAIQgCAJAAAKQAAAQgEBfIAAA7");
	this.shape_19.setTransform(46.4,96.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#993300").ss(0.3,1,1).p("AgDhiIADAIQABAIAAAFIADCw");
	this.shape_20.setTransform(35.5,96.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CC9966").ss(0.3,1,1).p("AAqhgIgBgKIhSACIADALQADAMAEAFQAGAGACBJQABAggBBIIAzAAIgBigQABgLAFgHQADgFADgKg");
	this.shape_21.setTransform(40.8,96);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFCC99","#FFFFEC","#FFCC99"],[0,0.235,1],-1.3,0,2,0).s().p("AgXBsIAAhpQgChJgGgHQgEgEgDgMIgDgLIBSgCIABAKIgDAKQgDALgDAEQgFAIgBALIABCgg");
	this.shape_22.setTransform(40.8,96);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#993300").ss(1,1,1).p("AAMAFIgMgCIgCgEIgJgD");
	this.shape_23.setTransform(45.1,85.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#993300").ss(1,1,1).p("AgOAGIAMgFIACgEIAPgC");
	this.shape_24.setTransform(36.8,85.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFCC99","#FFFFEC","#FFFFCC"],[0,0.235,1],-1.7,0,1.8,0).s().p("AABBAIgRAAIAAh/IAhgBIAACBIgQgBg");
	this.shape_25.setTransform(41.2,68.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#993300").ss(1,1,1).p("AAvjJIAEgbIgBgBQgCgCAAADQhSEBgCANQgCAGgFARQgEAQACAGQACAGAAADQgBABgDAEQgDADAAAXQAAALAAALIABA3QAAAHABAJIAGAL");
	this.shape_26.setTransform(51.9,67.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#993300").ss(1,1,1).p("AgsjIIgEgbQAAgBABAAQABgCAAADQBSEBADANQACAGAFASQAEAPgCAGQgBACgEAGQgBACACAEQADAFACAqIgDAfQgBAFgBAUIAAASIgIAH");
	this.shape_27.setTransform(30.5,66.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF6600").ss(0.3,1,1).p("AhcgHQAPAAAPAHQAOAGAFAAQAEAAATgDQARgDAKAAQAMAAAIADQAJAEAHAAQAGAAAPgHQAOgGAPAA");
	this.shape_28.setTransform(42.3,41.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF6600").ss(0.3,1,1).p("AiVAGQAPgBAagHQAZgKAIABQAFAAAVAIQAUAEATAAQAQAAAUgDQAUgFAIAAQAJAAAKAHQAKAHAMACQAZADAeAA");
	this.shape_29.setTransform(41.4,43.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFCC99","#FFFFEC","#FFCC99"],[0,0.235,1],-8.3,0,8.3,0).s().p("AhSDhIAAiIQAAgKAJgVQAIgVAAgLQAAgHgHgiQgHgeADgNQAEgOAOgHQARgGAHgEQANgGgDgKIAAh3IAxAAIAAB9QACAGAIAEQAHAEARAGQAOAHAEAOQADANgGAeQgIAiAAAHQAAALAIAVQAJAVAAAKIAACIg");
	this.shape_30.setTransform(41.1,84.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFEC","#FFCC66"],[0.235,1],0.3,0.2,0,0.3,0.2,4.9).s().p("AglAHQgFgEACgFIABgGIBQgBIABALQAAAEgHABQgOADgVAAQgeAAgHgDg");
	this.shape_31.setTransform(41,61);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFFEC","#FFCC66"],[0.235,1],0.7,0,0,0.7,0,4.7).s().p("AgmAAQAAgBAmAAQAoAAAAABQAAABgoABQgmgBAAgBg");
	this.shape_32.setTransform(41.2,59.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFDF").s().p("AAzB0QgCgTgKggQgUhAgig7Qglg+gThEQgJgigCgVQAoBnAnBPQAnBOAJAVQAVAvAAAfQAABZARAnQgdgtgDhTg");
	this.shape_33.setTransform(15.9,81.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFDF").s().p("AhBB0QAAgfAUgwQAKgUAmhPQAohOAohnQgCAVgJAiQgTBEglA+QgjA7gTBAQgKAggCATQgDBTgdAtQARgnAAhZg");
	this.shape_34.setTransform(66.9,82.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFDF").s().p("Ak0BPQASgrAcgkQBbhyChAAQCeAABnBpQAgAfAXAoQALATAFAOQgbgxg4gvQhuhiiKAAQiNAAhjBqQggAigXAoQgLAVgGANQAEgOAJgWg");
	this.shape_35.setTransform(42.2,15.9);

	this.instance_1 = new lib.glasscopy("synched",0);
	this.instance_1.setTransform(41.7,54.3,1,1,0,0,0,41.7,54.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF6600").ss(0.3,1,1).p("AgOBpQAPh5AFgTQAHgcgBgLQgBAFAAACQgEALgHABQgFgBABgMQAAgOAIAAQAGAAACAIQAAgKADgU");
	this.shape_36.setTransform(46.7,49.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF6600").ss(0.3,1,1).p("AAYBpIgpihQgDgIAAgGIgBgCQgCgMABgUAgVhIQgBgNAHgBQAJgBABAMQAAAKgEACQgGADgDgEQgCgCAAgE");
	this.shape_37.setTransform(35.1,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance,p:{alpha:0.398}}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance,p:{alpha:1}}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_37},{t:this.shape_36},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.5,153.9);


// stage content:



(lib.sim_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.dis_mc = new lib.dis_mc();
	this.dis_mc.setTransform(318.5,384.3,1,1,0,0,0,291.5,52.6);
	this.dis_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dis_mc).wait(1).to({_off:false},0).wait(1));

	// flash0.ai
	this.charge = new lib.charge();
	this.charge.setTransform(242.5,174.1,1,1,0,0,0,130.9,53.8);
	this.charge._off = true;

	this.timeline.addTween(cjs.Tween.get(this.charge).wait(1).to({_off:false},0).wait(1));

	// Layer 3
	this.text = new cjs.Text("bulb", "14px 'Arial'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(224,255.7);

	this.rb = new lib.Bplay();
	this.rb.setTransform(528.5,292.5,1,1,0,0,0,39,11);
	new cjs.ButtonHelper(this.rb, 0, 1, 2, false, new lib.Bplay(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AFFFsIqJrX");
	this.shape.setTransform(191.5,220.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.rb},{t:this.text}]},1).wait(1));

	// Layer 4
	this.vLabel = new lib.vLabel();
	this.vLabel.setTransform(245.8,180.2,1,1,0,0,0,73.4,32.5);
	this.vLabel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.vLabel).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.buble = new lib.buble();
	this.buble.setTransform(150,164.5,0.335,0.335,0,-90,90);
	this.buble._off = true;

	this.timeline.addTween(cjs.Tween.get(this.buble).wait(1).to({_off:false},0).wait(1));

	// Layer 6
	this.light = new lib.light();
	this.light.setTransform(21,78.5);

	this.sw = new lib.sw();
	this.sw.setTransform(246,140.7,1,1,0,0,0,30.7,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.sw},{t:this.light}]},1).wait(1));

	// Layer 7
	this.flashLight = new lib.flashLight();
	this.flashLight.setTransform(111.6,120);
	this.flashLight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flashLight).wait(1).to({_off:false},0).wait(1));

	// Layer 9
	this.val2 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val2.name = "val2";
	this.val2.textAlign = "center";
	this.val2.lineHeight = 14;
	this.val2.lineWidth = 29;
	this.val2.setTransform(352.1,405.9);

	this.sliderThumb2 = new lib.sliderThumb();
	this.sliderThumb2.setTransform(488.3,413.2);

	this.slidertrack2 = new lib.slidertrack();
	this.slidertrack2.setTransform(402.7,413.7,1.85,1);

	this.val1 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val1.name = "val1";
	this.val1.textAlign = "center";
	this.val1.lineHeight = 14;
	this.val1.lineWidth = 29;
	this.val1.setTransform(73.3,405.9);

	this.sliderThumb1 = new lib.sliderThumb();
	this.sliderThumb1.setTransform(209.4,413.2);

	this.slidertrack1 = new lib.slidertrack();
	this.slidertrack1.setTransform(123.8,413.7,1.85,1);

	this.rbGroup2 = new lib.RbGroupMain();
	this.rbGroup2.setTransform(700.7,342.7,1,1,0,0,0,61.1,21.4);

	this.rbGroup1 = new lib.RbGroupMain_1();
	this.rbGroup1.setTransform(360.7,342.7,1,1,0,0,0,61.1,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("A5IhZIGuAAIAACzImuAAgASbhZIGtAAIAACzImtAAg");
	this.shape_1.setTransform(213,411.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.rbGroup1},{t:this.rbGroup2},{t:this.slidertrack1},{t:this.sliderThumb1},{t:this.val1},{t:this.slidertrack2},{t:this.sliderThumb2},{t:this.val2}]},1).wait(1));

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhnA2IAAhTIAJAAIAAAIQAEgGAEgBQAEgDAGAAQAIAAAGAEQAGAEAEAHQADAIAAAIQAAAIgEAIQgDAIgHAEQgGAEgHAAQgGAAgEgCQgEgDgDgDIAAAegAhZgRQgFAHAAAKQAAAMAFAFQAFAGAHAAQAHAAAFgGQAFgFAAgMQAAgLgFgGQgFgGgHAAQgGAAgGAGgARlAYQgIgJAAgPQAAgJADgHQAEgIAGgDQAHgEAIAAQAKAAAHAFQAGAFACAKIgKABQgCgGgDgDQgEgDgFAAQgIAAgFAFQgFAGAAALQAAAMAFAFQAEAGAIAAQAGAAAEgEQAFgDABgJIAKACQgCALgHAGQgHAGgKAAQgNAAgHgIgAOWAbQgHgFgCgKIALgCQABAHAEADQAEADAHAAQAHAAAEgCQADgEAAgDQAAgEgDgDIgLgDIgQgEQgEgBgCgEQgDgEAAgEQAAgFACgDIAFgGIAHgDIAJgBQAHAAAGACQAGACACADQADAFABAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgDACQgEACAAADIACAFIAEACIAJADIAQAEQAEABADADQACAEAAAFQAAAGgDAEQgDAFgGADQgGACgHAAQgMAAgGgFgAMyAYQgIgJAAgPQAAgOAIgIQAIgJANAAQANAAAIAJQAIAIAAAOIgBACIguAAQABAKAFAGQAFAFAIAAQAGAAAEgDQAEgDACgHIALACQgCAKgHAEQgHAGgLAAQgOAAgIgIgAM7gSQgFAFAAAJIAiAAQAAgIgEgFQgFgFgIAAQgHAAgFAEgAInAYQgIgJAAgPQAAgQAKgIQAIgHALAAQANAAAIAJQAJAHAAAPQAAALgEAGQgEAIgHADQgGAEgJAAQgNAAgIgIgAIvgRQgFAHAAAKQAAAMAFAFQAGAGAHAAQAIAAAFgGQAGgFAAgMQAAgKgGgHQgFgFgIAAQgHAAgGAFgAGOAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAIAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFAAQgIAAgFAFQgFAGAAALQAAAMAFAFQAFAGAIAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgNAAgIgIgAEdAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAIAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFAAQgIAAgFAFQgFAGAAALQAAAMAFAFQAFAGAIAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgNAAgIgIgAC5AYQgIgJAAgPQAAgOAIgIQAIgJANAAQANAAAIAJQAIAIAAAOIgBACIguAAQABAKAFAGQAFAFAIAAQAGAAAEgDQAEgDACgHIALACQgCAKgHAEQgHAGgLAAQgOAAgIgIgADCgSQgFAFAAAJIAiAAQAAgIgEgFQgFgFgIAAQgHAAgFAEgAB9AbQgHgFgCgKIALgCQABAHAEADQAEADAHAAQAHAAAEgCQADgEAAgDQAAgEgDgDIgLgDIgQgEQgEgBgCgEQgDgEAAgEQAAgFACgDIAFgGIAHgDIAJgBQAHAAAGACQAGACACADQADAFABAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgDACQgEACAAADIACAFIAEACIAJADIAQAEQAEABADADQACAEAAAFQAAAGgDAEQgDAFgGADQgGACgHAAQgMAAgGgFgAA4AbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQANgCAGgCIAAgDQAAgGgDgDQgEgDgIAAQgHAAgEACQgEADgBAHIgLgCQACgGADgEQADgEAGgDQAGgCAIAAQAIAAAFACQAFACADACQACAEABADIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgGACgGAAQgKAAgGgFgABNAEQgHAAgDACQgCABgCACQgBACAAADQAAAEADADQADACAGABQAGgBAFgCQAFgDACgEQACgEAAgHIAAgDIgRAEgAgGAYQgIgJAAgPQAAgOAIgIQAGgJANAAQANAAAIAJQAIAIAAAOIgBACIgsAAQABAKADAGQAFAFAIAAQAGAAAEgDQAEgDACgHIALACQgCAKgHAEQgHAGgLAAQgOAAgGgIgAABgSQgDAFAAAJIAgAAQAAgIgEgFQgFgFgIAAQgHAAgFAEgAkKAYQgIgJAAgPQAAgQAKgIQAIgHALAAQANAAAIAJQAJAHAAAPQAAALgEAGQgEAIgHADQgGAEgJAAQgNAAgIgIgAkCgRQgFAHAAAKQAAAMAFAFQAGAGAHAAQAIAAAFgGQAGgFAAgMQAAgKgGgHQgFgFgIAAQgHAAgGAFgAmKAbQgGgFAAgIQAAgEACgEQACgEAEgCIAHgCIAKgBQAMgCAGgCIAAgDQAAgGgDgDQgEgDgIAAQgHAAgEACQgDADgCAHIgKgCQABgGAEgEQADgEAGgDQAGgCAIAAQAIAAAFACQAFACACACQADAEABADIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgFACgHAAQgKAAgFgFgAl2AEQgGAAgDACQgDABgBACQgCACAAADQAAAEAEADQADACAGABQAGgBAFgCQAEgDADgEQABgEAAgHIAAgDIgRAEgAnfAeQgEgDgDgDQgCgDgBgFIgBgJIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQAFAAAEgCQAEgDACgEQABgEAAgJIAAgeIALAAIAAA8IgKAAIAAgJQgHAKgMAAQgGAAgFgCgAqgAbQgGgFgCgKIAKgCQABAHAEADQAEADAHAAQAIAAADgCQAEgEAAgDQAAgEgDgDIgLgDIgQgEQgFgBgCgEQgCgEAAgEQAAgFACgDIAFgGIAHgDIAJgBQAHAAAGACQAFACADADQACAFABAGIgKABQgBgFgDgDQgDgCgHAAQgHAAgDACQgDACAAADIABAFIAEACIAKADIAPAEQAFABACADQADAEAAAFQAAAGgDAEQgEAFgFADQgGACgHAAQgNAAgGgFgAsDAYQgIgJAAgPQAAgOAIgIQAIgJANAAQAMAAAIAJQAIAIAAAOIAAACIguAAQAAAKAFAGQAGAFAHAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgNAAgIgIgAr6gSQgFAFgBAJIAjAAQgBgIgDgFQgFgFgIAAQgHAAgFAEgAwIAeQgEgDgDgDQgCgDgBgFIgBgJIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQAFAAAEgCQAEgDACgEQABgEAAgJIAAgeIALAAIAAA8IgKAAIAAgJQgHAKgMAAQgGAAgFgCgAyaAYQgIgJAAgPQAAgQAJgIQAIgHAMAAQANAAAIAJQAIAHAAAPQAAALgEAGQgDAIgHADQgHAEgIAAQgNAAgIgIgAySgRQgFAHAAAKQAAAMAFAFQAFAGAIAAQAIAAAFgGQAFgFAAgMQAAgKgFgHQgFgFgIAAQgIAAgFAFgARGAeIgEgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAKgHIAAAXIALAAIAAAIIgLAAIAAAiIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgEgCgALRAeIgEgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAKgHIAAAXIALAAIAAAIIgLAAIAAAiIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgEgCgAlCAeIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIALgHIAAAXIAKAAIAAAIIgKAAIAAAiIAAAFIACADIAEABIAEgBIACAKIgIABQgGAAgDgCgAtkAeIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIALgHIAAAXIAKAAIAAAIIgKAAIAAAiIAAAFIACADIAEABIAEgBIACAKIgIABQgGAAgDgCgATiAfIAAgNIAMAAIAAANgATEAfIAAgmQAAgIgDgEQgEgDgGAAQgFAAgEADQgEACgCAEQgBAEAAAIIAAAgIgLAAIAAhVIALAAIAAAgQAHgJALAAQAHAAAFADQAFADADAEQACAFAAAJIAAAmgAQkAfIAAg8IALAAIAAA8gAP9AfIgMgvIgNAvIgLAAIgTg8IALAAIAOAuIADgMIAKgiIALAAIAMAtIAOgtIAKAAIgTA8gAMTAfIAAgmQAAgIgDgEQgEgDgGAAQgFAAgEADQgEACgCAEQgBAEAAAIIAAAgIgLAAIAAhVIALAAIAAAgQAHgJALAAQAHAAAFADQAFADADAEQACAFAAAJIAAAmgAKOAfIAAglQAAgGgCgDQgBgDgDgCQgDgCgEAAQgHAAgFAEQgFAEAAANIAAAgIgKAAIAAg8IAJAAIAAAIQAHgKANAAQAGAAAEACQAFACACADQADADABAFIAAAKIAAAlgAHsAfIgUgfIgIAGIAAAZIgKAAIAAhVIAKAAIAAAyIAZgZIAOAAIgYAWIAaAmgAFvAfIAAg8IALAAIAAA8gAFUAfIAAhVIALAAIAABVgAglAfIAAhVIAKAAIAABVgAijAfIAAglQAAgGgCgDQgBgDgDgCQgDgCgEAAQgHAAgFAEQgFAEAAANIAAAgIgKAAIAAg8IAJAAIAAAIQAHgKANAAQAGAAAEACQAFACACADQADADABAFIAAAKIAAAlgAkoAfIAAg8IAKAAIAAA8gAmnAfIAAhVIAKAAIAABVgAoEAfIAAgmIgBgJIgDgEQgDgCgEAAQgGAAgEAEQgFAEAAALIAAAiIgKAAIAAgnQAAgHgDgEQgDgDgFAAQgFAAgEADQgDACgCAEQgCAEAAAJIAAAfIgKAAIAAg8IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAFADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAApgApoAfIAAg8IALAAIAAA8gAsiAfIAAgmQAAgIgEgEQgDgDgGAAQgFAAgEADQgEACgCAEQgCAEAAAIIAAAgIgKAAIAAhVIAKAAIAAAgQAIgJALAAQAHAAAFADQAFADACAEQACAFAAAJIAAAmgAuoAfIAAglQAAgGgBgDQgBgDgDgCQgEgCgEAAQgHAAgEAEQgFAEAAANIAAAgIgLAAIAAg8IAKAAIAAAIQAHgKAMAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAlgAw6AfIAAg8IAJAAIAAAJQAEgHADgCQADgCAEAAQAFAAAFAEIgDAJQgEgCgEAAQgDAAgDACQgDACgBAEQgCAFAAAHIAAAfgAzRAfIAAhLIgcAAIAAgKIBEAAIAAAKIgcAAIAABLgAQkgqIAAgMIALAAIAAAMgAFvgqIAAgMIALAAIAAAMgAkogqIAAgMIAKAAIAAAMgApogqIAAgMIALAAIAAAMg");
	this.shape_2.setTransform(325.3,443.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AJRGtIgShBIgDgKIgDAKIgSBBIgLAAIgXhVIAMAAIANA4IADARIAEgQIARg5IANAAIANArQAEAQACAOIAFgSIANg3IAMAAIgYBVgEgi0AGpIAAgKQAFgCADgDQADgDAEgGQADgFABgFQABgGAAgFQAAgJgDgIQgCgIgGgEQgGgEgJgBQgKAAgGAHQgJALAAAQQgBAMAGAJQAGAJAJAFIAAAKIgiAAIAAgKIAVABQgGgEgDgEQgFgFgDgIQgCgIgBgJQABgLAEgKQAFgKAIgFQAKgFALAAQAUAAAKAPQAIAKAAAQQAAAKgEAIQgCAHgGAFIgJAIIAWAAIAAAJgAciD8IAAhlIALAAIAAAKQAEgGAFgDQAFgDAHAAQAJAAAHAFQAIAFADAIQAEAKAAAJQAAAMgEAJQgEAJgIAEQgIAFgIAAQgGAAgFgDQgFgCgDgEIAAAkgAczCmQgGAIAAAOQAAANAGAIQAFAGAIAAQAJAAAGgHQAFgHAAgPQAAgOgFgGQgGgHgIAAQgIAAgGAHgEAgoADYQgJgLAAgRQAAgSAJgLQAJgJAQgBQAOAAAJAKQAJAKAAASIAAAEIg2AAQABALAGAHQAGAGAKAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgPAAgKgJgEAgyAClQgFAGgBAJIApAAQgBgJgEgFQgGgGgJgBQgJAAgGAGgAd1DYQgKgLAAgSQAAgUALgKQAKgHANgBQAPAAAJAKQAKAKAAARQAAAOgEAJQgEAHgIAEQgJAFgJAAQgPAAgJgJgAd+CmQgGAIAAANQAAAOAGAHQAGAHAJAAQAKAAAFgHQAHgHgBgOQABgNgHgIQgFgGgKgBQgJABgGAGgAa4DcQgIgEgDgJQgFgJAAgKQABgLADgKQADgIAIgFQAHgFAJAAQAHAAAFADQAFADADAEIAAgkIAMAAIAABlIgLAAIAAgJQgHAKgNAAQgJAAgHgFgAa6CmQgFAHAAAPQAAANAGAHQAFAHAJAAQAIAAAFgGQAGgHAAgNQAAgPgGgIQgFgGgJgBQgIAAgGAHgAZkDYQgKgLABgRQgBgSAKgLQAKgJAOgBQAPAAAJAKQAKAKgBASIAAAEIg2AAQABALAGAHQAGAGAJAAQAHAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgPAAgKgJgAZvClQgHAGAAAJIApAAQgCgJgDgFQgGgGgKgBQgIAAgFAGgAXsDbQgHgFABgKQAAgFACgFQACgEAFgCIAIgFIALgBQAPgCAHgDIAAgDQAAgIgDgCQgFgEgKgBQgIABgEADQgFACgCAIIgLgBQACgIADgFQAEgEAHgDQAHgDAJAAQAKAAAFADQAGABADAEQADAEABAEIABALIAAARQAAARABAFQAAAEADAFIgNAAQgDgFAAgEQgHAFgGACQgGADgIAAQgMAAgGgGgAYEDAIgLACQgDACgCACQgCADAAADQAAAFAEADQAEAEAIAAQAGAAAGgEQAFgDADgFQACgEAAgIIAAgFQgHADgNACgAVRDXIAAAJIgLAAIAAhlIAMAAIAAAkQAJgKALAAQAHAAAGADQAGACAEAFQAEAFACAIQACAGAAAIQAAATgJAKQgJAKgOAAQgMAAgIgKgAVYCmQgHAHAAANQABANADAHQAGAJAJAAQAJAAAGgHQAFgHAAgOQABgOgGgHQgFgHgJAAQgIABgFAGgATmDeQgGgCgDgDQgCgEgBgFIgBgMIAAgtIAMAAIAAAoIABANQABAFAEADQADADAGAAQAGgBAFgDQAFgCACgFQACgFAAgJIAAgnIAMAAIAABJIgLAAIAAgLQgJAMgOAAQgGAAgGgDgAqyDYQgJgLAAgRQAAgSAJgLQAKgJAPgBQAOAAAKAKQAJAKAAASIAAAEIg2AAQABALAFAHQAHAGAJAAQAHAAAEgEQAFgDADgIIAMABQgCAMgJAGQgHAGgNAAQgQAAgKgJgAqnClQgGAGgBAJIApAAQgBgJgEgFQgFgGgKgBQgIAAgGAGgAr4DYQgIgLgBgRQAAgNAFgIQADgJAIgEQAIgFAKAAQAMABAHAGQAHAFACALIgLACQgCgHgFgEQgEgEgGAAQgJAAgGAHQgGAGAAAPQAAAPAFAHQAHAGAJAAQAGAAAFgFQAGgEABgJIALACQgBAMgJAHQgHAHgMAAQgPAAgKgJgAuWDbQgHgFAAgKQAAgFACgFQADgEAEgCIAJgFIAKgBQAQgCAGgDIAAgDQAAgIgDgCQgFgEgJgBQgJABgEADQgEACgCAIIgMgBQACgIAEgFQADgEAIgDQAHgDAJAAQAJAAAGADQAGABACAEQAEAEABAEIAAALIAAARQAAARABAFQAAAEADAFIgNAAQgCgFAAgEQgHAFgHACQgGADgHAAQgMAAgGgGgAt/DAIgLACQgCACgCACQgCADAAADQAAAFAEADQADAEAIAAQAHAAAFgEQAGgDACgFQACgEAAgIIAAgFQgGADgOACgAwBDbQgHgGgCgLIALgCQACAHAEAEQAFAEAIAAQAJAAAEgEQAEgDAAgFQAAgEgDgCIgNgFQgOgDgFgCQgFgCgDgFQgDgEABgGQAAgFABgEQADgEAEgCQACgDAGgBQAFgCAFAAQAJAAAGADQAGACAEAEQACAFACAHIgMACQgBgHgEgCQgEgDgHgBQgIAAgEADQgDADgBADQAAABABABQAAAAAAABQAAAAAAABQABAAAAABIAFADIAKAEIASAFQAFADADAEQADAEAAAGQABAHgEAFQgEAFgGADQgHADgJAAQgOAAgHgGgAxmDbQgHgGgDgLIANgCQABAHAEAEQAFAEAJAAQAIAAAEgEQAEgDAAgFQAAgEgEgCIgMgFQgOgDgFgCQgFgCgDgFQgCgEAAgGQAAgFACgEQACgEAEgCQADgDAEgBQAGgCAFAAQAIAAAHADQAGACADAEQAEAFABAHIgMACQgBgHgEgCQgEgDgHgBQgIAAgEADQgDADgBADQAAABABABQAAAAAAABQAAAAAAABQABAAAAABIAFADIALAEIASAFQAFADADAEQACAEAAAGQAAAHgDAFQgEAFgGADQgHADgIAAQgPAAgHgGgAyzDYQgKgLAAgRQAAgSAKgLQAJgJAPgBQAOAAAKAKQAJAKAAASIAAAEIg2AAQABALAFAHQAHAGAJAAQAHAAAEgEQAFgDADgIIAMABQgCAMgJAGQgIAGgMAAQgQAAgJgJgAypClQgGAGgBAJIApAAQgBgJgEgFQgFgGgKgBQgJAAgFAGgA1RDXIAAAJIgMAAIAAhlIANAAIAAAkQAIgKAMAAQAHAAAFADQAHACADAFQAEAFADAIQABAGAAAIQABATgKAKQgJAKgNAAQgNAAgHgKgA1LCmQgGAHAAANQAAANAEAHQAFAJAKAAQAJAAAFgHQAGgHAAgOQAAgOgGgHQgFgHgIAAQgJABgFAGgA29DeQgGgCgCgDQgCgEgCgFIgBgMIAAgtIANAAIAAAoIAAANQACAFADADQAEADAGAAQAFgBAFgDQAFgCACgFQACgFAAgJIAAgnIANAAIAABJIgMAAIAAgLQgIAMgOAAQgHAAgGgDgAZBDeQgEgCgCgDQgBgEAAgLIAAgpIgJAAIAAgKIAJAAIAAgSIAMgHIAAAZIANAAIAAAKIgNAAIAAAqQAAAFABABIACADIAEABIAGgBIACAMIgKABQgGAAgEgDgAu3DeQgEgCgBgDQgBgEgBgLIAAgpIgJAAIAAgKIAJAAIAAgSIANgHIAAAZIAMAAIAAAKIgMAAIAAAqQAAAFABABIACADIADABIAGgBIACAMIgKABQgGAAgEgDgEAhxADgIAAhJIAKAAIAAALQAFgIADgCQAEgDAFAAQAFAAAHAEIgEALQgEgCgFAAQgFAAgDACQgCADgCAEQgCAHAAAHIAAAngAf1DgIgOg5IgPA5IgNAAIgWhJIAMAAIAQA6IAEgQIAMgqIAMAAIAPA4IARg4IALAAIgWBJgAW7DgIAAhJIALAAIAAALQAEgIAEgCQAEgDAEAAQAGAAAGAEIgDALQgFgCgEAAQgFAAgDACQgDADgCAEQgCAHAAAHIAAAngAUnDgIAAhlIANAAIAABlgAR9DgIAAhlIAmAAQALABAHADQAHACAEAHQADAGAAAHQABAGgEAGQgEAFgGAEQAIADAFAHQAGAGAAAIQAAAHgDAHQgDAFgFAEQgFADgGACQgGACgKAAgASKDTIAZAAIAJAAQAFAAADgCQADgCABgEQACgEAAgFQAAgFgCgFQgDgEgFgBQgFgCgKAAIgXAAgASKClIAVAAQAJABAFgCQAEgCADgDQACgDABgGQgBgEgCgFQgDgDgDgBQgFgCgLAAIgUAAgAscDgIAAgsQAAgIgCgEQgBgEgEgCQgEgCgEAAQgIAAgFAFQgGAFgBAOIAAAoIgMAAIAAhJIALAAIAAAKQAJgMAPAAQAGAAAFADQAGACACAEQADADABAGIABAMIAAAtgAwkDgIAAhJIALAAIAABJgAzoDgIAAhJIALAAIAAALQAFgIADgCQAEgDAEAAQAHAAAGAEIgEALQgFgCgEAAQgFAAgDACQgDADgBAEQgCAHAAAHIAAAngA17DgIAAhlIAMAAIAABlgA4lDgIAAhlIAlAAQALABAHADQAHACAEAHQAEAGAAAHQAAAGgEAGQgDAFgHAEQAJADAFAHQAFAGAAAIQAAAHgDAHQgDAFgFAEQgEADgGACQgHACgKAAgA4ZDTIAZAAIAJAAQAFAAADgCQADgCACgEQACgEAAgFQAAgFgDgFQgCgEgGgBQgEgCgKAAIgYAAgA4ZClIAWAAQAJABAEgCQAFgCADgDQACgDAAgGQAAgEgCgFQgDgDgEgBQgFgCgLAAIgUAAgAwkCJIAAgOIALAAIAAAOgEAhegErIgBgLIAGABQAEAAADgCQADgBABgCIADgJIACgEIgchIIAOAAIAOAqIAGARIAFgRIAPgqIANAAIgcBJIgHARQgDAGgEADQgFADgFAAIgIgCgAlllGQgIgFgCgMIAMgCQABAHAFAEQAEAEAJAAQAIAAAFgEQADgDAAgEQAAgEgDgDIgNgFQgNgDgGgCQgEgCgEgFQgCgEAAgGQAAgEACgFQACgEAEgDQADgCAFgBQAFgBAFAAQAJAAAHACQAGACADAFQADADABAIIgLABQgBgFgFgDQgDgDgIAAQgIAAgDACQgEADAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAABABAAIAEAEIALADIASAFQAFACADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgPAAgGgGgAmzlJQgKgKAAgSQAAgTAKgJQAJgKAPAAQAPgBAKAKQAIAKABASIAAADIg2AAQAAANAGAFQAGAHAJAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgQAAgJgJgAmpl8QgGAGAAAJIAoAAQgBgJgDgFQgGgGgKAAQgIgBgGAGgApPlJQgJgKAAgSQAAgTAJgJQAKgKAPAAQAOgBAKAKQAJAKAAASIAAADIg2AAQABANAFAFQAHAHAJAAQAHAAAEgEQAFgDADgIIAMABQgCAMgJAGQgHAGgNAAQgQAAgKgJgApEl8QgGAGgBAJIApAAQgBgJgEgFQgFgGgKAAQgIgBgGAGgArulGQgGgGAAgIQAAgGADgEQACgFAEgCIAJgFIALgCQAPgBAGgCIAAgEQABgIgEgDQgFgDgJAAQgJAAgDADQgFADgCAHIgMgCQACgHADgFQAFgEAHgDQAGgCAKAAQAJAAAGACQAGACACADQADADACAFIAAAMIAAAQQAAARABAFQAAAEADAFIgNAAQgCgFgBgEQgGAGgGACQgHACgHAAQgMAAgHgGgArWliIgKADQgDABgCADQgCADAAADQAAAFAEADQAEADAHABQAHAAAFgDQAGgDACgGQACgEAAgJIAAgEQgGADgOABgAswlIIgCgCIAAAJIgMAAIAAhkIANAAIAAAjQAHgKAMABQAHAAAGACQAGADAEAFQADAEADAHQACAHAAAIQAAATgJAKQgKAKgMAAQgMAAgGgIgAstl7QgEAGgBAIIAAAHQAAAJACAGIABAEQAGAJAKAAQAIAAAFgHQAHgHAAgOQgBgOgFgHQgGgHgHABQgJAAgGAGgAwxlIQgJgHgBgMIANgCQACAKAFAEQAFAFAIAAQAJAAAGgHQAFgGAAgMQABgFgCgFIgEgGQgGgGgJAAQgHAAgEADQgFACgDAFIgLgCIAJgzIAyAAIAAALIgoAAIgGAbQAJgGAKAAQANAAAKAJQAFAGADAIIABAJQAAAOgIAKQgKAMgQAAQgOAAgJgIgA1DlJQgKgKAAgTIABgHQABgPAJgIQAKgHANAAQAPgBAJAKQAJAIABANIAAAGQAAAOgEAIQgEAJgIADQgJAFgJAAQgPAAgJgJgA06l7QgFAGgBAIIAAAHQAAAOAGAHQAGAHAJAAQAKAAAFgHQAHgHgBgOIAAgHQgBgIgFgGQgFgGgKAAQgJAAgGAGgA3mlJQgKgKAAgSIABgIQABgNAIgHQAJgKAPAAQAOgBAKAKQAHAIACANIAAAHIAAADIg2AAQAAANAHAFQAFAHAKAAQAHAAAFgEQAEgDADgIIAMABQgDAMgHAGQgJAGgMAAQgQAAgJgJgA3cl8QgGAGgBAJIApAAQgBgJgEgFQgFgGgKAAQgJgBgFAGgA4ulKIAAAJIgMAAIAAhkIANAAIAAAjQAHgKAMABQAHAAAGACQAGADAEAFQADAEADAHIACAJIAAAGQAAATgJAKQgKAKgNAAQgMAAgHgKgA4pl7QgEAGgBAIIAAAHQgBAMAEAHQAGAJAKAAQAIAAAFgHQAHgHgBgOIAAgHQgBgJgEgFQgFgHgJABQgIAAgGAGgA7wlCQgFgDgDgEQgCgDgCgFIAAgMIAAgtIAMAAIAAAoIAAANQACAFAEADQADACAGABQAFAAAFgEQAFgCACgFQACgFAAgJIAAgnIAMAAIAABJIgLAAIAAgLQgIAMgOAAQgHAAgGgCgApylCQgEgDgBgDQgCgEAAgLIAAgpIgJAAIAAgKIAJAAIAAgSIANgHIAAAZIAMAAIAAAKIgMAAIAAAqQAAAFABABIABADIAEABIAGAAIACALIgKABQgGAAgEgCgAqZlCQgDgDgCgDQgBgEAAgLIAAgpIgKAAIAAgKIAKAAIAAgSIALgHIAAAZIANAAIAAAKIgNAAIAAAqQAAAFABABIADADIADABIAGAAIACALIgJABQgHAAgEgCgAnXlBIAAhJIAMAAIAABJgAoGlBIAAhJIALAAIAAALQAEgIAEgCQADgCAFAAQAGAAAGADIgEALQgEgCgEAAQgFAAgDACQgDADgBAEQgCAHgBAIIAAAmgAuklBIgnhkIAOAAIAaBIIAGARIAFgRIAbhIIAOAAIgnBkgAxblBIAAgPIAOAAIAAAPgAyOlBIAAhPQgEAFgHAEQgHAEgHACIAAgMQALgFAIgHQAHgGAEgHIAHAAIAABlgAz4lBIAAg/IgKAAIAAgKIAKAAIAAgIQAAgHACgDQACgGAEgCQAFgDAIgBIAMACIgCALIgIgBQgFAAgDACQgCADAAAGIAAAHIAOAAIAAAKIgOAAIAAA/gA2elBIAAhJIALAAIAAALQAEgIAEgCQAEgCAEAAQAGAAAGADIgDALQgFgCgEAAQgFAAgDACQgDADgCAEQgBAEAAAFIgBAGIAAAmgA5YlBIAAguQAAgHgCgEQAAgDgDgCQgEgCgEAAQgHAAgGAFQgFAFAAAKIAAABIAAArIgMAAIAAgvQAAgJgDgEQgDgEgHAAQgFAAgEADQgFADgCAFQgBADgBAGIAAAGIAAAmIgMAAIAAhJIALAAIAAAKQADgFAGgDQAGgDAGAAQAJAAAFADQAFADADAGQAIgMAOAAQAKAAAHAFQAFAGAAAMIAAAzgA8flBIg0hPIAABPIgNAAIAAhkIAOAAIA0BOIAAhOIANAAIAABkgAfnlPQgKgJABgSQgBgTAKgKQAKgKAOAAQAPAAAJAKQAKAKgBASIAAAEIg2AAQABALAGAHQAGAGAJAAQAHAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgKgKgAfymBQgHAGAAAJIApAAQgCgJgDgEQgGgIgKAAQgIABgFAFgAdIlKQgHgHAAgJQABgFACgFQACgEAEgDIAJgDIALgCQAPgCAHgDIAAgDQAAgHgEgDQgEgFgJAAQgJAAgEADQgEAEgCAIIgNgDQADgHADgFQAEgFAHgCQAHgCAJgBQAJAAAHACQAFACADAEQADADABAGIAAAKIAAARQAAARABAFQABAEADAEIgOAAQgCgDAAgGQgHAHgGABQgHADgGAAQgMAAgHgFgAdglmIgLACQgDACgBACQgCADAAADQAAAFADADQAEAEAHgBQAIAAAFgCQAGgDACgGQACgFAAgHIAAgFQgGADgOACgAcDlQIAAAJIgMAAIAAhkIANAAIAAAkQAIgKAMAAQAHABAFACQAGADAEAEQAEAFADAHQABAHAAAIQABATgJAKQgKAKgNAAQgNAAgHgLgAcJl/QgGAGAAANQAAAOAEAFQAFAKAKAAQAIAAAGgHQAGgHAAgOQAAgOgGgHQgFgGgIgBQgJAAgFAIgAaIlPQgKgJABgSQgBgTAKgKQAKgKAOAAQAPAAAJAKQAKAKgBASIAAAEIg2AAQABALAGAHQAGAGAJAAQAHAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgKgKgAaTmBQgHAGAAAJIApAAQgCgJgDgEQgGgIgKAAQgIABgFAFgAXrlPQgJgJAAgTQAAgUALgJQAJgJAOAAQAPAAAKAKQAJAKAAARQAAAOgEAJQgEAIgIAEQgIAEgKAAQgPAAgKgKgAX1l/QgGAGAAAOQAAAOAGAHQAGAHAJAAQAJAAAHgHQAFgHAAgOQAAgOgFgGQgHgIgJAAQgJAAgGAIgAV3lPQgKgJAAgSQAAgTAKgKQAJgKAPAAQAPAAAKAKQAIAKABASIAAAEIg2AAQAAALAGAHQAGAGAJAAQAHAAAFgDQAEgEADgIIANACQgDALgIAGQgIAGgNAAQgQAAgJgKgAWBmBQgGAGAAAJIAoAAQgBgJgDgEQgGgIgKAAQgIABgGAFgAUwlKQgHgHgCgLIAMgCQABAHAEAEQAGAEAIAAQAJAAADgDQAFgEAAgEQAAgEgEgDIgMgEQgPgDgEgDQgGgDgCgEQgDgEAAgGQAAgFACgEQACgEAEgCQADgDAFgBQAFgBAGgBQAIAAAGACQAHADADAFQADAEACAGIgNACQgBgFgDgEQgEgDgHAAQgJABgEACQgDADAAADQAAABAAABQAAAAAAABQABAAAAABQAAAAAAABIAFADIALADIASAGQAFADADAEQADAEAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgIgFgAS1lPQgKgJAAgSQAAgTAKgKQAJgKAPAAQAOAAAKAKQAJAKAAASIAAAEIg2AAQAAALAHAHQAFAGAKAAQAGAAAGgDQAEgEADgIIANACQgEALgHAGQgJAGgNAAQgPAAgJgKgAS/mBQgGAGgBAJIApAAQgBgJgEgEQgFgIgKAAQgIABgGAFgAQglPQgJgJAAgSQAAgTAJgKQAKgKAPAAQAPAAAJAKQAJAKAAASIAAAEIg2AAQABALAFAHQAHAGAJAAQAGAAAFgDQAFgEADgIIANACQgEALgIAGQgHAGgNAAQgQAAgKgKgAQrmBQgGAGAAAJIAoAAQgBgJgDgEQgHgIgJAAQgJABgFAFgAfElIQgEgCgCgDQgBgDAAgMIAAgqIgJAAIAAgJIAJAAIAAgSIAMgIIAAAaIANAAIAAAJIgNAAIAAArQAAAFABACIACACIAEABIAGAAIACAKIgKABQgGAAgEgCgAeclIQgDgCgBgDQgCgDAAgMIAAgqIgJAAIAAgJIAJAAIAAgSIAMgIIAAAaIAMAAIAAAJIgMAAIAAArQAAAFABACIACACIAEABIAFAAIADAKIgKABQgGAAgFgCgEAi6gFHIAAgNIAPAAIAAANgEAgwgFHIAAhIIALAAIAAALQAEgIAEgDQADgCAFAAQAFABAHADIgEAMQgFgDgEAAQgEAAgDADQgDACgCAEQgCAGAAAIIAAAmgAZklHIAAgsQAAgHgCgEQgBgEgEgCQgEgCgEAAQgJAAgFAFQgGAFAAAOIAAAnIgNAAIAAhIIAMAAIAAAKQAIgMAPAAQAHAAAFACQAFADADAEQADAEABAFIABAMIAAAsgAT9lHIAAhIIALAAIAAALQAFgIADgDQAEgCAEAAQAGABAGADIgDAMQgFgDgEAAQgFAAgDADQgDACgCAEQgCAGAAAIIAAAmgAR+lHIgchIIANAAIAQArIAEAPIAFgOIAPgsIAOAAIgcBIgAQAlHIgOgUIgJgOIgHgHIgGgDIgHAAIgQAAIAAAsIgNAAIAAhkIAtAAQANABAHACQAHADAEAGQAEAIAAAHQAAAMgHAGQgGAIgPACIAIAFQAGAFAFAIIARAbgAPFl+IAdAAQAJgBAFgBQAFgCADgFQACgEAAgFQABgGgGgFQgFgFgLAAIggAAgEAi7gFfIAAgEQAAgHACgFIAFgIIAJgJQAHgFACgEQABgEAAgEQAAgGgGgGQgFgFgIgBQgIAAgGAGQgFAEgBALIgNgCQACgNAIgIQAJgHAOAAQAOgBAJAJQAJAIAAALQAAAGgEAGQgDAFgIAJIgIAIIgDAFIgBALgAnXmYIAAgNIAMAAIAAANg");
	this.shape_3.setTransform(327.4,373.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(2,1,1).p("EAu8gUhQgFi+jDAAMhXnAAAQjIAAAADIMAAAAovQAADIDIAAMBXnAAAQDIAAAAjIMAAAgovQAAgFAAgFg");
	this.shape_4.setTransform(320,164.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#666666"],[0,1],0,-141.4,0,140.6).s().p("EgrzAXgQjIAAAAjIMAAAgovQAAjIDIAAMBXnAAAQDDAAAFC+IAAAKMAAAAovQAADIjIAAg");
	this.shape_5.setTransform(320,164.5);

	this.current = new cjs.Text("0.00", "12px 'Arial'");
	this.current.name = "current";
	this.current.textAlign = "center";
	this.current.lineHeight = 14;
	this.current.lineWidth = 108;
	this.current.setTransform(322,467.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9999").ss(2,1,1).p("ApqAyQAABkBkAAIQNAAQBkAAAAhkIAAhjQAAhkhkAAIwNAAQhkAAAABkg");
	this.shape_6.setTransform(322,473);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AoGCWQhkAAAAhkIAAhjQAAhkBkAAIQNAAQBkAAAABkIAABjQAABkhkAAg");
	this.shape_7.setTransform(322,473);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(2,1,1).p("EAr0gLxMhXnAAAQjIAAAADIIAARTQAADIDIAAMBXnAAAQDIAAAAjIIAAxTQAAjIjIAAg");
	this.shape_8.setTransform(320,398.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.current},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;