(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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


(lib.painter = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#006600").s().p("AlKEeIAIg5QAEgjAAhHQgBjMAChBQABg5AKicQAjACAxgEIBUgIQBcgICVADQC6ADA5gCQgCCXgtCSIgVBFQgEAUgEAkQgEApgDAQQgFAZgZBXQgUBEgBAsQhfATi3AGQi/AGhYAPg");
	this.shape.setTransform(-108.475,91.1452);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AGiDJQgTgSgigFQgVgCgpACIgZABIgFgUQgHgagVgvQgPgfgNgWQgegyglgLQgLgDgRgBIgcgCQgegDgvgOQgUgHgKgFIgOgIIgDAAQgwAFglAVQgcARguAxIgiAmQgYAagLAPIggAxQgRAWgSALIgBgBQgKgEgjgYQgagSgUgDQgKgCgKACIAAgBQgEgYAJgUQAEgJAJgMIAOgTIATgcQAMgSAIgJQAJgMASgPIAcgaQAJgKAmgvQAcgjAXgQQAWgPAugOQBbgcA+AEQAsADAXASQAGAGAEAGIAyAHQAhAFAUAEQA+AOAfAjIAPASIAOASIAVAVQANAMAGAJQAIALAJAXQAJAYAGAJIANAVQAIANADAIQAEANADAaQABAJAQAtQAMAggDAVQgBAIgDAHQgHgOgKgJg");
	this.shape_1.setTransform(-104.4163,20.9681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkqWJQgTgcAPg7QAniUBti4QCEjPA+hpQAlg9AUgsQAdg7AMg1QALgtADg8QACghAAhKIgBjaIgMAHQgeAMghgGQgbgEgggRIg1ggQiuhwjFhFQg/gWglgHIg2gIQgjgFgUgEQgugKgqgVQg4gcgIgnQgEgRAGgSQAGgRANgMQANgMASgGQARgFASADQAOACAUAIIAgAPQAUAIAcAGIAxAJQCFAZCOA+QB3AzCIBSIAtAbQAaANAWAHIAdAJQAJADAIADIgCm5IgJgBQibgXiFhSQhSgzgZg4QgSgoABg8QAAg0AOgoQALgcAhg1ICAjEQAshFAggeQAVgWAhgVQAXgNAngVQBrg1BJgGQAugEBGALIB0ASQBQAIAOADQA0ALAaAeQAVAZAGAnQAEAcgDAtQgUE/iRDNQhXB6hpAoQgeALghAGIAAGhQCRgDBmgOQBigNB2gfQB/ggCDgwQBKgbAigYIAsgeQAagRAWgCQAjgCAZAeQAaAfgJAhQgHAYgWAVQgRAPgdARQhtA+iTAtQhnAgioAkQhTARg7AJQg7AJhJAEIh6AEIAAEjQAABtgLA5IgHAbIARAPQBWBVCZDKQCVDDBcBZQAXAWAJALQAPAUADAUQACASgIARQgIAQgOALQgeAVglgJQgVgFgVgQQgPgLgVgVQgfggggglQgpgvg/hTIhmiGQg4hIgbghQgug3gpgoIgbAvQg6Beh4C8QhiCmgrCFQgPAugGAPQgPAigUATQgYAYgjABIgFAAQghAAgQgXgAEj0EQgiABgaAIQgcAIgyAdQgrAZgSATQgLAKgXAiQhfCRguBKQgaAogHAaQgNApAQAfQANAYAmAWQB/BOCZAHQA9ADAlgQQAcgNAngmQAdgbASgYQAggoAchCQAvhuAVh7QAGgiADggIAFgwQACgRgGgHQgGgIgTgCQiQgPgugDQgdgDgUAAIgNABgAzpSzQgSgKgMgUQgKgUgCgXQgCgcAOg7QAThYAHhyQAEhBADiLIAHm3QAAgdADgPQAEgYAMgPQALgOARgGIAOgEQAJgCAKACQAUADAbASQAjAYAKAEIABABQAXAKAhgBQASAAAqgFQBggLCgACQChADBGgCIAZAAQAqgCAUACQAiAFAUASQAJAJAHANQANAXAEAiQAMBTgQBpQgJA4gfCCQgdB7geCEQgUBWgFAuQgFAtgDALQgGAfgPATQgVAbgqAMQgdAHgxACIk7AMQhPADgrAEQhDAHg0APQgnAMgPACIgRACQgUAAgPgIgAxTICQgCBAABDNQAABHgEAkIgIA4IgPBbQBYgQC/gGQC4gFBfgTQABgsAUhFQAZhXAFgZQADgQAEgoQAEglAEgUIAVhGQAtiRACiXQg5ACi6gEQiWgChcAIIhUAIQgxAEgjgCQgKCcgBA5g");
	this.shape_2.setTransform(-29.4705,25.0789);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AmLChQAFgVAMgYIAYgrIAxhRQAagqARgRQARgQAcgQIAygZIBDgkQAngVAdgKIAKgEQBOgYA5AeQARAJATASIAFAFIAaAcIA6BDQARATAJAIQAPAOAPAHQAKAFAcAIQAZAFAMAIQANAJAIAPQAIAOABAQIAAAKQgUgIgggCQhfgFhfAMQgNgOgPgSQgxg8gKgKQgagagWACQgLABgLAJIgWAPQgOAKgbAKQghALgJAEQgiARgdAlQgSAYgbAvQgNAXgGAQQg8APgtAGIgjAGQgOADgLAGQgDgWAFgYg");
	this.shape_3.setTransform(-99.4345,48.2356);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(-20.0114,24.0167);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("AjqDVQgBhLgJg8IgJg6QgCgXAAhhQABhKgOgsQBagfBNgWIBugfQAwgOAmgIQBQgSBegGQgRAggJAuQgFAagGA4IgIBZIgHBPQgBASAABtQAABOgHAxQgEAagKAJQgIAIgVAFQg7AOhMANIiIAVIiEATQAEhYgBgwg");
	this.shape_5.setTransform(-99.825,104.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5}]},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.5,-119.7,262.8,288.8);


(lib.paintcan = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("AnBSpQgdgLgUghQgJgQgSgsQgNgjgRghQgHgQgKgGQgIgFgTAAIi+AAQgVAAgLgCQgTgFgPgQQgNgQgDgUQgCgTAJgXQAEgKAPgdIAagxQAaguA3gyQAyguApgKQAcgHAbAIQAcAJAOAXQAEAHAFAMIAIAUIAMAXQAIAOABAKIgBARQgBALABAGQACALANAVIAYAiIAaAiQAQAUAIAOQANAVARApIAZA/QAJAWADALQAFATgCAQQgDAigeATQgNAJgRACIgHAAQgNAAgMgEgAJVSfQgTAAgRgMQgRgLgIgSQgHgRAAglIAAjIIg/AAQgsAAgWgMQgagPgFgiQgFghAVgWQAQgSAegGQAUgEAkAAIAqAAIAAjWQAAgZACgNQADgVAJgPQAKgQASgIQASgJATACQASACAQAMQAQAMAHASQAHARAAAmIAADcIB5AAQAkAAAVAEQAeAHARASQASAUgCAdQgCAegUARQgQAOgbAFQgSADgfAAIh/gCIAAC8QAAAYgBAMQgDAUgHANQgKARgRALQgRAJgSAAIgCAAgAlORQQgTgQgHgeQgEgUAAgkIAAjvQAAgeADgQQAFgZAMgQQATgYAiABQAhAAATAXQANAQAEAZQADARAAAeIAADvQAAAdgDAPQgDAYgLARQgQAXgeAFIgOABQgWAAgQgNgACuRDQgUgBgRgMQgSgMgIgSQgLgYAFglQADgVAJgqQAJg3gPg3QgPg4gjgqQgYASgPAaQgOAbgDAeIABBUQAAAygVAYQgUAWghgCQghgBgSgXQgNgQgEgaQgDgQAAgfQABhPAHgoQAGghAPgpIAdhIQAVgxAVgSQAXgSAhgBQAfgBAeAOQAZALAaAXQAOANAeAfQAfAhAPAVQAXAfAJAeQAHAUACAbIABAwIgBCLQAAAdgCAQQgEAZgLAQQgLARgTAJQgQAIgRAAIgGAAgAxNQjQgagIgNgUQgKgSgBgaQAAgNAEghQAGgwAFhgIAKi2IAEkcQABgfAGgMQAJgTAbgLQARgGAggEQACgbAZgSQAXgRAfgDQApgEAlANQA7AVA2BBQAtA4ALAyQAHAfgGAdQgGAggSAWQgMAOgXAQQgcAUgIAIQgPANgSAXQgUAbgKANQgnAvgqAGQAGBGgWBBIgVA0QgLAfgDAWIgBAeQgBAUgBAKQgEAZgQAUQgQAUgXAJQgMAEgNAAQgLAAgMgEgAt2GJQAAAQgDAJIgIAQQgFAKADAHQAEACAHgHQAXgWAJgNIgegsQgBAGABAUgAk4JRQgWgGgNgQQgNgOgDgSQgEgSAFgSQAGgRAOgNQANgNASgFIASgDQAYAAAVAPQAUAPAHAXQAGAYgKAXQgLAYgVALQgLAHgCACIgPABQgOAAgNgEgA1rBbQgZgFgOgWQgGgJgFgNQgLgjAEgtQAJhxAiiKQAUhUAwiiQANgtAJgXQAOgmAQgbQAXgmAlgkQAcgbAugjQD+jFEth4QBVgiBEgSQBUgWBKgBQBIgBBaATQA2ALBnAfQBJAVAjAPQA7AZAkAjQAeAcAmA8QArBFAUAXQAiAmA3AkQAdAUBIAnQCqBeB7BSQCZBnByBsIBkBfQA7A0A0AbQA7AeAVASQAnAhgGAmQgFAZgWAQQgOAKgRAEQgIACgIAAQgoADg4gdQg+gihIg9IgXgUQhfhagxgrQiviejziDQiWhRgpgcQhnhFgvhSQgLgTgVgoQgTgjgTgTQgVgTghgOQgVgKgogMQhhgeg3gMQhWgThHAAQhhABhvAmQhUAchwA5QiEBEh7BMQhKAugrAkQg8AzggA3QgZAsgcBcQgoCDgQBBQgbBtgHBaIgCASIgDAhQgEAbgJAUQgMAYgVAOQgSALgSAAIgLgBg");
	this.shape.setTransform(32.0943,-123.0144);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AAhWuQmrgWjHgGQlEgLkFAIQgDgUgJgnQgJgrgCg8IAAhoQgBhlgSiZIgej9QgJhhgEh5QgChJgBiRIgN2zIAAgUQAagSgCgcQHigYHZhcQCxgiAxgHQCAgTBkAHQBMAGCCAeQCVAiA4AIQA8AIBKADQAtABBZAAIGmABQAeBpgGCMQgDA/gYDGQg8HwAbK8QAIDFAXGUQAWFqAIDKQh+AFigAAQl/AApCgdgApzsFQgpAKgzAuQg2AygbAuIgaAxQgPAdgDAKQgJAXACATQACAUAOAQQAOAQATAFQALACAWAAIC9AAQATAAAIAFQAKAGAIAQQAQAhANAjQASAsAJAQQAVAhAcALQAPAFARgBQARgCAOgJQAegTACgiQACgQgFgTQgDgLgIgWIgag/QgRgpgNgVQgIgOgQgUIgagiIgYgiQgNgVgBgLQgCgGACgLIAAgRQgBgKgHgOIgNgXIgIgUQgEgMgFgHQgOgXgcgJQgPgEgPAAQgMAAgMADgAHDqmQgfAGgQASQgVAWAGAhQAEAiAaAPQAWAMAsAAIA/AAIAADIQABAlAGARQAJASAQALQARAMATAAQATABASgKQARgLAKgRQAHgNADgUQABgMAAgYIAAi8IB/ACQAfAAATgDQAagFARgOQATgRACgeQACgdgSgUQgRgSgegHQgVgEgjAAIh6AAIAAjcQAAgmgGgRQgIgSgQgMQgPgMgTgCQgTgCgSAJQgSAIgKAQQgJAPgDAVQgCANAAAZIAADWIgqAAQgjAAgUAEgAlFruQgMAQgFAZQgDAQAAAeIAADvQAAAkAFAUQAHAeASAQQAVARAfgFQAegFAQgXQALgRAEgYQACgPAAgdIAAjvQAAgegCgRQgFgZgNgQQgTgXghAAIgBAAQghAAgTAXgACDpkQAOA3gIA3QgKAqgDAVQgFAlAMAYQAIASARAMQASAMATABQAVACASgKQAUgJALgRQAKgQAEgZQADgQAAgdIABiLIgBgwQgDgbgGgUQgKgegXgfQgPgVgfghQgdgfgPgNQgagXgZgLQgegOgfABQghABgXASQgVASgVAxIgdBIQgPApgGAhQgHAogBBPQABAfACAQQAEAaANAQQATAXAgABQAhACATgWQAXgYgBgyIgBhUQADgeAOgbQAPgaAYgSQAkAqAPA4gAuizbQgfADgXARQgZASgCAbQggAEgRAGQgaALgKATQgGAMgBAfIgEEcIgKC2QgFBggGAwQgEAhABANQAAAaALASQANAUAZAIQAZAIAYgIQAWgJARgUQAPgUAEgZQACgKAAgUIABgeQADgWALgfIAVg0QAWhBgGhGQAqgGAngvQAKgNAUgbQASgXAPgNQAIgIAcgUQAYgQALgOQASgWAHggQAFgdgHgfQgLgygtg4Qg2hBg6gVQgdgKgfAAIgTABgAkSvOIgSADQgSAFgNANQgOANgGARQgFASAEASQAEASAMAOQAOAQAVAGQAUAGAWgDQACgCALgHQAWgLAKgYQAKgXgGgYQgGgXgVgPQgUgPgXAAIgCAAgAtwvPQgCgHAEgKIAIgQQADgJAAgQQgBgUABgGIAeAsQgIANgXAWQgGAFgEAAIgCAAg");
	this.shape_1.setTransform(30.15,19.6985);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvZEQtKgsmNAJQgjABgQgCQgcgCgUgKQgXgLgOgWQgOgYAHgXIAFgLQgRgfgDgrQgBgWADg6QAGh7gTiwQgYjHgKhjQgMiAgEifQgDhggCjAIgL12QAAgtALgeIAGgNIgBgRQAOAWAYAFQAYAFAXgPQAWgOALgYQAKgUAEgcIADghQGggQGdhNQEUgzAigFQCwgaCHAMQBQAHCFAdQCbAhA6AIQB8ASC/gDIDxgDQBJA9A+AiQA4AeAngDQAJAAAIgCIAFAbQAaClgZDuQgkEOgLCHQgMCWACEJQAIMvBBMsQADAogBAUQAAASgEAPQgBASgMASQgNATgWAKQgSAJgZADQgOACggACQhuADiJAAQmGAApagegApWWQQDHAGGrAWQM1ApGqgRQgIjKgVlqQgYmUgHjFQgcq8A8nwQAYjGADg/QAGiMgehpImlgBQhaAAgtgBQhKgDg7gIQg5gIiVgiQiBgehNgGQhkgHh/ATQgyAHiwAiQnaBcniAYQADAcgbASIABAUIAMWzQACCRACBJQAEB5AIBhIAeD9QASCZABBlIAABoQACA8AJArQAJAnADAUQBugDB6AAQCmAAC7AGg");
	this.shape_2.setTransform(30.6115,19.8982);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paintcan, new cjs.Rectangle(-112.5,-242.7,289.3,426.1), null);


(lib.ladderandbrush = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ag9LsQgcgeAHgyQADgbAWg3QASgwAih2QAPg4AEgcQAEgagBgaQgBgiADgOIgBgCQgPgpgQg4Igjh+QgIAEgIADQgYAIgxAAIh6AAQgdAAgQgCQgZgDgRgLQgdgPgUgrQgPgegCgcQgCghAQgWQANgRAXgHQAWgGAVAGQAUAGAQARQAPAQAGAWQAYAGAjgBIA9gEQAcgBAXAFIgahGQgMgjgGgdIgiAAQhAgBgqgcQgegTgKgaQgHgRgBgiQgBgrAIhlIAHg+QAFglALgoQAPg3AZgVQAZgUA4gGQAogEAVgBQAlgCAVAEQAVAEArAXQArAXAUARQAhAaAKAfQAGARABArQACBJgDArQgDAegGAlQgEAXgEANQgHAUgLANQgTAYgxASIgKADQAFAgAPAnIAMAfQAdgMANgLQANgNAMgbQAOgiAHgKQANgSAVgKQAVgLAVACQAXABASAPQATAPAFAVQAEATgGAYQgEAQgMAZQgZA2gUAXQgfAlhBAaIgVAHIA7C6IAGABQAUAFAVAOQAOAKAWAUQA/A5AfAiQAwA1AYA1QAUAvgIAgQgFASgNAOQgNAOgRAGQgSAGgSgDQgUgDgOgMQgRgNgOgdIgXgzQgUgkgqgkIgNgLQgEAqgLAvQgJApgbBUIgtCTQgMAmgNAOQgVAYgeABIgCAAQgdAAgWgWgAh7poQgWAHgGAAQgKAhgDAUIgBAeIAAAeIgIAvQgFAdADASQA5AFA3gRQATgHAHgJQAEgGADgPQAJgzAAg0QgBgagIgJQgGgHgMgFIgVgHIgMgGQgIgDgFgBIgJgBQgIAAgMADg");
	this.shape.setTransform(-217.8542,114.7713);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhSGLQgRgGgMgPQgLgOgEgRQgGgdARgiIACgEQhzigg8hIQgggmgKgUQgSgmAPgfQAEgIAPgTQANgQADgLQADgKgCgRQgBgTABgIQACgRAMgOQALgOAQgHQAfgMAlAKQAAgJAGgMIAKgWQACgJgCgQQgDgTABgHQABgYAWgSQAUgRAbgBQAlgDA7AfIASALIAFAAQAVABAQAKQANAIAZAcQAlAqA9AyIBrBUQAhAbAIAWQAIAWgIAeQgFAUgRAdIgfA7QgQAcgKALIgFAFIgSALIgYAOQgYAPgYAbIgpAyQgbAhgPAQIgBABIgZAaQgPAPgJAMIgUAcQgLAQgMAIQgOAKgTACIgJAAQgOAAgMgFg");
	this.shape_1.setTransform(12.553,-4.0301);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AC+JbQgQgJgTgTIggggIgggdQgVgSgLgLQgegegqhFIhUiCQgYgkgLgWQgSghgIgdQgGgZgCgkIgCg+QgGiNg4iBQgjhRgtgqIgoggQgYgUgNgRIgCgDQAPgQAbghIApgyQAZgbAXgPIAZgOIARgLIAYAxQAPAXArAjQAqAjAPAWQAPAWAPAuQAQAxALAUQAUAjAyAnQBGA2AMAMQAXAWAWAhQAPAWAWAnIA8BoQAXAmALAWQARAiAIAdQAIAZAGAoIALBCIAPA+QAKAnADAXQANBLgaAyQgYAxg4ARQgXAHgVAAQgfAAgcgQg");
	this.shape_2.setTransform(59.4431,69.4725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AGaSXQgagFgPgTQgMgPgEgYQgDgPAAgdIgDjMIAAg0IhegDQhTgDgqgFQgZgCg+gJQg2gIgggDQgagChIAAQg9gBgkgEIg6gIQgngHgUgCIghgEIgFB8QgDBhAPA2IAMAnQAGAXgCARQgEAcgZAUQgYATgcgDQgYgDgVgSQgTgQgLgYQgPgigDhBQgKjSAWk2QAdlaAIisQARlMggjuIgSiEQgLhNgBg4QgCiaA/hlQARgcAXgPQAcgSAZAHQASAFANARQALAPAEAUQADARgCAWIgFAmQgNBWgGBnQB9gCCcADQBXACDSAGIBcADQAYABATADIgKhsQgDgjACgUQACgeALgVQANgaAZgNQAbgNAYAJQAaALANAhQAIAYADAoQAIB8ACA4QADBlgFBQIgHBYIgHBXQgHBcACC3QAGASgEASIgBAGIAFHlQAaAHAPASQAUAXgHAiQgGAigbAPQgIAFgLADIACDSQANAUgDAbQgCAQgHAMIADEKQABAqgHAaQgJAlgZAQQgQAKgTAAIgMgBgAlcJeQATABAdAGIAvAIQArAHBHAAQBXAAAbACQAeACA0AJIBTALQAuAFBUACIBLADIgCioQg4gGhHgLQijgahBgEIhagCQg4AAgjgEQgYgChFgLQgzgIgigCIgLC+QAMgCANAAIAJAAgAleg1QgBB+gLDGQAeACAlAGQBgAOAWACQAdADAzAAIBPABQBAADCTAYQBWANA+AFIgEmyQgjgHgrgCQgegCg4AAInAgDQgiAAgUgEQgMgCgKgFIABA+gAlsokQAHC0AECCQALgFAOgDQATgEAiAAIGHAAQBZAAAsABQAuACApAEQgBi1AJhkIAJhcQAFgnABgfIgHABQgOAAgcgBQlagTlDACIgGAAQgBBKACBRg");
	this.shape_3.setTransform(-104.0265,9.8618);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AilLJQgTgEgOgNQgPgNgGgSQgJgcAMglIAKgeIALgfQADgNAEgbIALhIQAGgpAIgeQAPg4AZgzQgKgWgCghQgDgzANhNIAEgXIAQhSIgPgBIhJACQgqAAgcgLQgcgKglggQgugpgNgkQgJgZAFgYQAFgaATgPQASgNAZAAQAXAAAWALIAKAFQAOAJAOAMIAjAeQAMAKAJAEQAPAHAXgBIAlgCIAbAAIAPgxQAFgPABgNQADgSgEgOQgqgCgmgXQgmgXgVglQgOgYgGgcQgCgOgBgPQgBgsATgmQAJgRAQgVIAcglIAlgwQAWgbAYgKQARgIAagCQAJgBAiAAIA3ABQAgAAAXAEQA/ANAdAqQAVAfAAAxQAAAqgOApQgOAogbAhIgPASIgqAtQghAlgHAiQgBAKAAAPIgBAMQABAZgCALIgCAOIAwgNQAqgMAOgPQAFgEAEgHIAIgNQAKgTAFgHQANgQAUgHQAUgHAUAFQAgAIAQAjQALAWgBAWQAAAMgDAMQgQA7hKApQghASgrAPIgKAEQgaAIgsAMQgfAJgTADQgFAegMAtIgGAbQgMAyAAAfIAAAxIAIAJQAHALACAKQAXAHAZAOQAbARAgAaIA3AwQA6AzBGA5IAnAgQAXAWAHAWQAHAVgIAXQgHAWgSANQgSANgXACQgXACgVgKQgRgIgUgUQgWgYgMgKIgqgiIgrgqQgWgVgyglQgXgPgPgNIgYgSIgGAZQgNA0gDAfQgCAbgDAJIgGAZQgCANABAZQgBANgLAcIgOAiQgMAagMANQgOAOgTAGQgLAEgLAAQgHAAgIgCgAgBo0QgMAFgLARIgoA6QgHAKgBAGQgDALAIAGQAGADAKgCIAmgJIARgEQALgCAHgEQAHgEARgRQATgVAJgOQANgVAAgUIhEgBQgPAAgFADg");
	this.shape_4.setTransform(-114.8917,81.255);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996600").s().p("AC+JbQgQgJgTgTIghggIgggdQgVgSgKgLQgfgegqhFIhUiCQgXgkgMgWQgSghgHgdQgHgZgBgkIgDg+QgGiNg4iBQgjhRgtgqIgoggQgYgUgMgRIgCgDIAqgxIApgyQAYgbAYgPIAYgOQALgGAHgFIAYAxQAPAXAqAjQArAjAPAWQAOAWAPAuQAQAxAMAUQAUAjAyAnQBGA2AMAMQAWAWAWAhQAPAWAWAnIA9BoQAWAmALAWQARAiAJAdQAHAZAHAoIAKBCIAPA+QAKAnAEAXQAMBLgZAyQgZAxg4ARQgWAHgVAAQgfAAgcgQg");
	this.shape_5.setTransform(59.0056,70.135);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhSGLQgRgGgMgPQgLgOgEgRQgGgdARgiIACgEQhzigg8hIQgggmgKgUQgSgmAPgfQAEgIAPgTQANgQADgLQADgKgCgRQgBgTABgIQACgRAMgOQALgOAQgHQAfgMAlAKQAAgJAGgMIAKgWQACgJgCgQQgDgTABgHQABgYAWgSQAUgRAbgBQAlgDA7AfIASALIAFAAQAVABAQAKQANAIAZAcQAlAqA9AyIBrBUQAhAbAIAWQAIAWgIAeQgFAUgRAdIgfA7QgQAcgKALIgFAFQgHAFgLAGIgYAOQgYAPgYAbIgpAyIgqAxIgBABIgZAaQgPAPgJAMIgUAcQgLAQgMAIQgOAKgTACIgJAAQgOAAgMgFg");
	this.shape_6.setTransform(12.103,-3.3801);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AGaSXQgagFgPgTQgMgPgEgYQgDgPAAgdIgDjMIAAg0IhegDQhTgDgqgFQgZgCg+gJQg2gIgggDIgggBIAGgbQAMguAFgfQATgDAfgJQArgLAagJIBLAKQAuAFBUACIBLADIgCioQgtgFg2gIQABgWgLgVQgQgjgggIQgUgFgUAHQgUAHgNAQQgFAGgKATIgIANQhCgJgkgCIgGAAQAAgPABgJQAHgiAggmIAqgsQA2AHBLAMQBWANA+AFIgEmyQgjgHgrgCQgegCg4AAInAgDQgiAAgUgEQgMgCgKgFIABA+QgBB9gLDHIAkADQAFAcAPAZQAVAlAmAWQAmAXAqACQADAPgCARIgbgCQgYgChFgLQgzgIgigCIgCAiIgKgGQgWgLgXAAQgZAAgSAOQgTAOgFAaQgFAZAJAYQANAkAuApQAlAgAcALQAcALAqAAIBJgCIAPAAIgQBUIgEAWIgLgBIg6gIQgngHgUgCIghgEIgFB8QgDBhAPA2IAMAnQAGAXgCARQgEAcgZAUQgYATgcgDQgYgDgVgSQgTgQgLgYQgPgigDhBQgKjSAWk2QAdlaAIisQARlMggjuIgSiEQgLhNgBg4QgCiaA/hlQARgcAXgPQAcgSAZAHQASAFANARQALAPAEAUQADARgCAWIgFAmQgNBVgGBoQB9gCCcADQBXACDSAGIBcADQAYABATADIgKhsQgDgjACgUQACgeALgVQANgaAZgNQAbgNAYAJQAaALANAhQAIAYADAoQAIB8ACA4QADBlgFBQIgHBYIgHBXQgHBcACC3QAGASgEASIgBAGIAFHlQAaAHAPASQAUAXgHAiQgGAigbAPQgIAFgLADIACDSQANAUgDAbQgCAQgHAMIADEKQABAqgHAaQgJAlgZAQQgQAKgTAAIgMgBgAlsokQAHC0AECCQALgFAOgDQATgEAiAAIGHAAQBZAAAsABQAuACApAEQgBi1AJhkIAJhcQAFgnABgfIgHABQgOAAgcgBQlagTlDACIgGAAQgBBKACBRg");
	this.shape_7.setTransform(-104.4765,10.5118);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBGQgggHgQgcQgIgOgBgQQgBgQAFgOQAJgVATgMQAXgPAcAEQAWADAPAMQATAPAFAaQAFAYgLAWQgMAVgXAKQgQAHgPAAQgIAAgHgBg");
	this.shape_8.setTransform(-330.9069,23.0885);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACtMEQgjgOgXgyIgIgUIgJgVQgKgYgKgPQgLgPghgfQgegdgKgUIgLgVQgFgKgFgHIgDgEIgGgGIgCAKIgVBZQgJAtgLAYQgGAOgHALQgMASgPAMQgRANgVAEQgWAEgTgGQgUgHgOgQQgOgRgCgVIAAgCQAAgOAGgSQADgLALgXQAYg2AOg6QAIgjAEglIAFgmQADgUAIgNIACgDQAMgVAZgJIgBgKIABgiIAAguQAAgbADgTQAEghAZhDIAKgbQgQgGgQgOQgKgKgTgUQgXgbgWgUQgegcgagRIgvgcQgZgSgHgWQgIgWAKgYQAKgWATgNIACgBQAVgMAZAAQAYgBAYAKQAUAIAXARIAeAaIAIAIQAfAcAWAWIACgLIAJghIAEgOIAEgSQACgNgDgpIAAgBIgIgVIgUhBQgGgRgZgyQgVgpgGgbQgFgWABghIABg4IgBgpIAAgGQACgTAFgOQAIgWAZgZQAbgeAZgJQAOgEAUgBIAjABIAfgBQATAAAMADQAYAFAYAVQAQANAXAbQAhAoAOAYIADAFQAKATAKAdQAgBdgFBBQgDAigNASQgIAJgNAJIgYAOQgWALg1AjQgNAJgIAHIAAALQgBAZgIAoIgCAKIgIAqIAAAAQAigPASgTIAGgIIAPgVQANgUAJgJQAQgQAXgGQAXgGAWAGQAWAIAOATQAPAUgBAWIgBAGQgBALgGANQgEAKgLASQgTAggLAPQgSAZgUAPIgLAHQgQAKgWAJIg1AVIgtASIgHACIgBAMQgFAfgaBDQgYA+gCAkQgBANABAWIABAjQgBAdgKAVIAUAMIADACQAPAJAHAGQAXASAaAsQAVAiAHAJQAIAKATAQIARAPIAKAKQARATAVAsIAUAqQAPAeAFASQAFASgBAPQAAAIgCAIQgIAggeAOQgQAJgQAAQgNAAgOgGgAAPp1QgCAjAAARQABAeAFAWQAHAaAdA1QAGAJAEACQAGACAIgGIAMgLIAOgHQAJgEACgFQADgGgBgKQgGhBgpg3QgNgQgLgHQgKgGgKAAQgGAAgGACg");
	this.shape_9.setTransform(-110.8197,5.5679);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhSGLQgRgGgMgPQgLgOgEgRQgGgdARgiIACgEQhzigg8hIQgggmgKgUQgSgmAPgfQAEgIAPgTQANgQADgLQADgKgCgRQgBgTABgIQACgRAMgOQALgOAQgHQAfgMAlAKQAAgJAGgMIAKgWQACgJgCgQQgDgTABgHQABgYAWgSQAUgRAbgBQAlgDA7AfIASALIAFAAQAVABAQAKQANAIAZAcQAlAqA9AyIBrBUQAhAbAIAWQAIAWgIAeQgFAUgRAdIgfA7QgQAcgKALIgFAFQgHAFgLAGIgYAOQgYAPgYAbIgpAyIgqAxIgBABIgZAaQgPAPgJAMIgUAcQgLAQgMAIQgOAKgTACIgJAAQgNAAgNgFg");
	this.shape_10.setTransform(12.153,-3.3801);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AGaSXQgagFgPgTQgMgPgEgYQgDgPAAgdIgDjMIAAg0IhegDQhTgDgqgFQgZgCg+gJQg2gIgggDQgagChIAAQg9gBgkgEIg6gIQgngHgUgCIghgEIgFB8QgDBhAPA2IAMAnQAGAXgCARQgEAcgZAUQgYATgcgDQgYgDgVgSQgTgQgLgYQgPgigDhBQgKjSAWk2QAdlaAIisQARlMggjuIgSiEQgLhNgBg4QgCiaA/hlQARgcAXgPQAcgSAZAHQASAFANARQALAPAEAUQADARgCAWIgFAmQgNBVgGBoQB9gCCcADQBXACDSAGIBcADQAYABATADIgKhsQgDgjACgUQACgeALgVQANgaAZgNQAbgNAYAJQAaALANAhQAIAYADAoQAIB8ACA4QADBlgFBQIgHBYIgHBXQgHBcACC3QAGASgEASIgBAGIAFHlQAaAHAPASQAUAXgHAiQgGAigbAPQgIAFgLADIACDSQANAUgDAbQgCAQgHAMIADEKQABAqgHAaQgJAlgZAQQgQAKgTAAIgMgBgAiLJ0QBXAAAbACQAaACAqAHIAIATQAXAyAjAOQAeANAdgPQAegPAIggQACgHAAgJIA+ACIBLADIgCioQg4gGhHgLIhkgPIgRgQQgTgQgIgJQgHgJgVgiQgagtgWgSQgHgFgPgJIgDgCIALAAQBAADCTAYQBWANA+AFIgEmyQgjgHgrgCQgegCg4AAIgMAAIALgIQAUgOASgZQALgPATggQALgSAEgKQAGgNABgMQAnACAjADQgBi1AJhkIAJhcQAFgnABgfIgHABQgOAAgcgBIiVgHQgPgYghgoQgXgcgQgNQgYgUgYgGQgMgDgSABIgfAAIgkAAQgUAAgOAFQgZAIgbAeQgZAagIAVQgFAOgBAUIijgBIgGAAQgBBKACBRIAJD7QgTANgKAVQgKAYAIAXQAHAVAZASIAvAdQAbAQAeAdIgZgBQgiAAgUgEQgMgCgKgFIABA+QgBB9gLDHQAeACAlAGIBFAKQgIAOgDATIgFAmQgEAlgIAkIgggFQgzgIgigCIgLC+QAQgDASABQAPABAVAEIAAACQACAUAOARQAOARAUAGQATAHAWgFQAVgEARgMQAPgMANgTIAQAAgAhmG9IACgJIAGAGIADAEIgLgBgAiyjzIgIgHIBNAAIgFAOIgJAgIgCAMQgWgXgfgcgAAqj6IAzAAIgHAIQgSATgiAOIAAABg");
	this.shape_11.setTransform(-104.4265,10.5118);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACaKbQgXgDgRgRQgRgSgEgWIgBgUIgBgUIgBgDQgBgLgGgOQgSgwgogjIgTgQQgHAUgNAYIgdA2IgKAVIgMAWQgOAYgRALQgWAPgcgFQgcgEgQgUQgTgYADgiIAAgEQADggASghIAjg6QATgjAEgbQABgMgBg0QgBgSADgPQgJgIgGgLQgHgQAAgiIAAghIAAgtQAAgnADgTIAFgWQADgNAAgJIAAAAQABgJgCgTQgBgTABgKQACgLAGgVQADgOAAgcIgBhmIgMgLQgMgMhEg3QgygpgYggQgIgLgFgKQgKgTgBgRQgBgVAMgSQAMgTATgJQASgIAWACQAWABASALQALAHAMAMIABgEQAJgbADgRIACgTIACgSQAEgOANgRQAIgKAKgLQAZgbASgMQAbgSAbABQANAAATAHIAhALIAdAHQARAEAKAHQAPALALAZIAEAKQANAjgCAiQAAAMgEAXIgIAtIgEAZIAAABQAHgJAIgRIAGgMQAOgbAJgNQAQgUAZgKQAYgLAZAFQAZAEASAVQATAVgBAZQAAALgFANQgEALgIALQgIAPgUAcQgJAPgQAgQgOAcgRANQgNAKgXAJQggAMgHAEQgYAMgtAhQgdATgYADIABBDQAAAugEASIgGAcIgBAYIAAAFIAAAeQgBANgFAbQgEAagBAOIABAfIAAACIABAeQAAAOgBAMQAUAMAUAcIAVAfQAMASAMAKIAWARQAPAKAHAIIANAQIANAQQAVAPAIAJQANANANAfQAiBSgDA3IAAABQgCAagIAQQgLAVgVALQgRAJgRAAIgLgBg");
	this.shape_12.setTransform(-110.4484,-16.5348);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996600").s().p("AC+JbQgQgJgTgTIghggIgggdQgVgSgKgLQgfgegqhFIhUiCQgXgkgMgWQgSghgHgdQgHgZgBgkIgDg+QgGiNg4iBQgjhRgtgqIgoggQgYgUgMgRIgCgDIAqgxIApgyQAYgbAYgPIAYgOIASgLIAYAxQAPAXAqAjQArAjAPAWQAOAWAPAuQAQAxAMAUQAUAjAyAnQBGA2AMAMQAWAWAWAhQAPAWAWAnIA9BoQAWAmALAWQARAiAJAdQAHAZAHAoIAKBCIAPA+QAKAnAEAXQAMBLgZAyQgZAxg4ARQgWAHgVAAQgfAAgcgQg");
	this.shape_13.setTransform(59.0056,69.135);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhSGLQgRgGgMgPQgLgOgEgRQgGgdARgiIACgEQhzigg8hIQgggmgKgUQgSgmAPgfQAEgIAPgTQANgQADgLQADgKgCgRQgBgTABgIQACgRAMgOQALgOAQgHQAfgMAlAKQAAgJAGgMIAKgWQACgJgCgQQgDgTABgHQABgYAWgSQAUgRAbgBQAlgDA7AfIASALIAFAAQAVABAQAKQANAIAZAcQAlAqA9AyIBrBUQAhAbAIAWQAIAWgIAeQgFAUgRAdIgfA7QgQAcgKALIgFAFIgSALIgYAOQgYAPgYAbIgpAyIgqAxIgBABIgZAaQgPAPgJAMIgUAcQgLAQgMAIQgOAKgTACIgJAAQgOAAgMgFg");
	this.shape_14.setTransform(12.103,-4.3801);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AGaSXQgagFgPgTQgMgPgEgYQgDgPAAgdIgDjMIAAg0IhegDQhTgDgqgFQgZgCg+gJQg2gIgggDQgagChIAAQg9gBgkgEIg6gIQgngHgUgCIghgEIgFB8QgDBhAPA2IAMAnQAGAXgCARQgEAcgZAUQgYATgcgDQgYgDgVgSQgTgQgLgYQgPgigDhBQgKjSAWk2QAdlaAIisQARlMggjuIgSiEQgLhNgBg4QgCiaA/hlQARgcAXgPQAcgSAZAHQASAFANARQALAPAEAUQADARgCAWIgFAmQgNBVgGBoQBMgBBXABQgNARgEAOIgDASIgCASQgCASgJAaIgBAFQgNgMgLgHQgSgLgVgCQgWgCgTAJQgTAJgLASQgMATAAAUQABASALATIABBsQAHC0AECCQALgFAOgDQATgEAiAAIBQAAQgBAJgDAMIgEAWQgEATAAAoIAAAtIhEgBQgiAAgUgEQgMgCgKgFIABA+QgBB9gLDHQAeACAlAGIAdAEQgCAjASAXQAQAUAdAFQAcAEAWgOQARgMAOgXIALgXIAQAAIBPABQAUABAdADIAAAEIABAUIABATQAEAXARARQASARAXAEQAXADAVgLQAWgMAKgUQAJgRACgaIALACQBWANA+AFIgEmyQgjgHgrgCQgegCg4AAIjogBIgBgCIAAggQABgNAFgbQAFgaAAgOIAAgeIAAgEIClAAQBZAAAsABQAuACApAEQgBi1AJhkIAJhcQAFgnABgfIgHABQgOAAgcgBIg5gDQAFgNAAgMQABgZgSgVQgSgUgagFQgYgEgZAKQgYAKgQAVQgKAMgNAcIgGAMIgLgBIAHgsQAEgXABgMQABgigMgjICVAEIBcADQAYABATADIgKhsQgDgjACgUQACgeALgVQANgaAZgNQAbgNAYAJQAaALANAhQAIAYADAoQAIB8ACA4QADBlgFBQIgHBYIgHBXQgHBcACC3QAGASgEASIgBAGIAFHlQAaAHAPASQAUAXgHAiQgGAigbAPQgIAFgLADIACDSQANAUgDAbQgCAQgHAMIADEKQABAqgHAaQgJAlgZAQQgQAKgTAAIgMgBgAlcJeQATABAdAGIAvAIQArAHBHAAQBXAAAbACQAeACA0AJIBTALQAuAFBUACIBLADIgCioQg4gGhHgLQijgahBgEIhagCQg4AAgjgEQgYgChFgLQgzgIgigCIgLC+QAMgCANAAIAJAAg");
	this.shape_15.setTransform(-104.4765,9.5118);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABRKbQgmgIgNgfQgFgMgCgTIgBgKIgCgWQgJhHhAg6IgNALQgPAOgHAIQgXAcgBAkIACAgIABAWIgBAKQgDAXgQARQgRASgVAEQgWAFgWgJQgXgKgLgTQgJgQgCgXIgBgNQgBgSACglIgBgqQABgZAGgQQAIgSAWgVQAdgcAGgIQAEgGASgiQAHgLAGgJQgEgLgCgNQgDgSABgfQABgzAEgqQAFg2AIgmIgQgEQghgNgogmIggggQgTgSgPgLQgKgHgYgOIgEgDQgTgLgKgIQgVgQgcglQgggsgKgfQgFgSABgRIAAgIQADgXAMgRQALgPASgIQASgJASACQATACAQALQAQALAIARIAIAUQAEANAFAHQAEAFAHAHIAMALQAMASAIAIQAHAIAMAHIAVAMQAoAWArAvIAZAYIAEgpQABgOgEgGQgDgGgIgDIgPgEQgUgGgQgOQgPgNgJgTQgLgYgBg0QgDhoAHg3QALhYAlg8QAXglAcgKQAPgGAYABIAoACIAtgCQAbAAARAIQAOAGARASIAdAcIAgAYQATAPAJANQALAQAEAYQACAOABAeQAAA+gIAeQgMAtgnAtQgYAcg0AtQgUARgEAMQgDAIAAAWQABAVgBAVIABAAQBcgMBWgmQAjgPARgQQAJgIANgSQAOgSAIgIQAfgeAnABQATABARAJQAKAFAHAHQAGAHAFAHQALASgCAXQgBAWgNAQIgUAWIgNASIgNASQgMAPgUAPQgOAJgRAJQhAAkg8ASIgXAFQgWAFgpAHQgrAGgTAFQgjAIgLABIAAAAIgIAkQgHAigEAiQgFApAAAoQAAAkgCANIgBAIIACABQAOAJAVASQCYCIgGCJIgBAKQgFArgXAWQgSARgbAAQgIAAgKgCgAgXoJQgKABgDADQgCACgCAKQgBAIgKAZQgJAdABAwQABBDgBANIAKACIA4g3QAfghALgfQAHgTgEgOQgEgJgKgKIgTgRQgOgOgEgDQgGgDgMAAIgGAAg");
	this.shape_16.setTransform(-106.4804,-74.3306);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AGaR6QgagEgPgTQgMgQgEgXQgDgPAAgdIgDjNIAAgzIhegEQhTgDgqgEQgZgDg+gJQg2gIgggCQgagChIgBQg9gBgkgEIg6gIQgngGgUgCIghgEIgFB8QgDBhAPA1IAMAnQAGAXgCARQgEAdgZATQgYAUgcgEQgYgCgVgSQgTgRgLgYQgPghgDhCQgKjRAWk2QAdlaAIitQARlLggjvIgSiEQgLhNgBg3QgCiZA+hlQgBARAFASQAKAfAgAsQAcAlAVAQQAKAIATALQgEApgDAtIBvgBQAoAnAhANIAQAEQgIAmgFA2QhegBhcABIgGAAQgBBKACBRQAHCzAECDQALgGAOgDQATgEAhAAQACAXAJAQQALATAXAKQAWAJAWgFQAVgEARgSQAQgRADgXIABgKICDAAIABAKQACATAFAMQANAfAmAIQAmAIAZgXQAXgWAFgrIBhACQAuACApAEQgBi2AJhjIAJhdQAFgnABgeIgHAAQgOABgcgCQipgJijgEQAFgiAHgiIAIgkIAAAAQAKgBAjgIQATgFArgGQApgHAWgFIAXgGIAbABIBcADQAYABATACIgHhPQAUgPAMgPIANgSIANgSIAUgWQANgQABgWQACgXgLgSQgFgIgGgGQANgBANAFQAaAKANAiQAIAXADAoQAIB8ACA5QADBlgFBQIgHBXIgHBYQgHBcACC3QAGARgEASIgBAGIAFHlQAaAIAPARQAUAYgHAiQgGAhgbAQQgIAFgLADIACDSQANATgDAbQgCAQgHANIADEJQABArgHAZQgJAlgZAQQgQAKgTAAIgMgBgAlcJCQATABAdAFIAvAJQArAHBHAAQBXAAAbACQAeACA0AIIBTAMQAuAFBUACIBLACIgCioQg4gGhHgLQijgahBgDIhagCQg4gBgjgDQgYgDhFgLQgzgIgigCIgLC/QAMgDANAAIAJABgAlehSQgBB+gLDGQAeACAlAGQBgAPAWACQAdACAzABIBPABQBAACCTAYQBWAOA+AFIgEmyQgjgIgrgCQgegCg4AAInAgCQgiAAgUgEQgMgDgKgEIABA9g");
	this.shape_17.setTransform(-104.4765,12.3846);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ADQMeQgTgCgQgMQgQgMgIgRQgFgMgCgUIgBgHIgDgZQgIguglgsQgWgZgjgdQgNAcgEANQgHASgHAfIgLAyIgIAZQgRAogcAUQgVAPgaABQgcABgTgRQgYgWABgpIAAAAQACgaAPgqIBKjOQAIgYAGgLQAGgMAHgIIgCgDQgHgRAAgaIABgtQABgVgEgfIgGg0QgDgmAAg9IAAgRQgXABgdgFQgagEgngLQhDgShNgWIg1gPQgugOgWgJQhCgbgKgsQgEgSAGgSQAHgSANgMQAOgMATgFQASgFASAEQALACANAGIAXALQAbAMA9ASQB4AlBGAMQAxAIAPAFIADACIAEgYQAOhagBgyIgBgcIgCAAQgQgDgNgKQgNgKgHgOQgJgSAAgmIAAkAQAAg6AKgcQALgiAdgZQAdgZAjgKQAigJAnAEQAjAFAjAPQAkARAcAaQAdAbAOAiQAJATAGAbQAUBUgBBcQgBAggHAVQgGAUgRAVQgKAOgWAWIg/A/QgPAQgKAIQgPAMgPAGIgKADIgCBEIgCAbIA8gBQAqgBAVgEQAfgHAPgDQASgCAjAAIBlgBQAbAAAOACQAXAEAPAKQAOAJAIAPQAIAPABARQAAARgIAPQgIAQgNAJQgPAKgXAEQgPADgbAAIhdACQgYAAgSADIgXAFIgYAFQgWAEgtAAIhsAAQgEASAAAaQgBAaAEAyIAJCLQACAkgCASQgEAbgNASQAhAIAhAcQARAPAXAaIAmArIAbAbQAQAQAIANQAcAqADBPQABAVgBAPIgBAIQgEAYgLAQQgLAPgSAJQgPAGgPAAIgHAAgAA3qEQgGAEAAAOIABESIBNhHQARgOAFgMQAGgNgCgZQgDghgNg8QgFgVgEgKQgHgQgLgJQgNgIgYgDIgHgBQgIAAgDAEg");
	this.shape_18.setTransform(-109.4035,-146.5773);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AGaSXQgagFgPgTQgMgPgEgYQgDgPAAgdIgDjMIAAg0IhegDQhTgDgqgFQgZgCg+gJQg2gIgggDQgagChIAAQg9gBgkgEIg6gIQgngHgUgCIghgEIgFB8QgDBhAPA2IAMAnQAGAXgCARQgEAcgZAUQgYATgcgDQgYgDgVgSQgTgQgLgYQgPgigDhBQgKjSAWk2QAdlaAIisQARlMggjuIgSiEQgLhNgBg4QgCiaA/hlQARgcAXgPQAcgSAZAHQASAFANARQALAPAEAUQADARgCAWIgFAmQgNBVgGBoQBAgBBHAAQgCApAZAWQASARAcgBQAbgBAVgPQAcgUAQgoICbAEIABAHQADAUAFAMQAHARAQAMQAQAMATACQATACASgIQASgJALgPQAMgQADgYIABgIIBGACQAYABATADIgKhsQgDgjACgUQACgeALgVQANgaAZgNQAbgNAYAJQAaALANAhQAIAYADAoQAIB8ACA4QADBlgFBQIgHBYIgHBXQgHBcACC3QAGASgEASIgBAGIAFHlQAaAHAPASQAUAXgHAiQgGAigbAPQgIAFgLADIACDSQANAUgDAbQgCAQgHAMIADEKQABAqgHAaQgJAlgZAQQgQAKgTAAIgMgBgAlcJeQATABAdAGIAvAIQArAHBHAAQBXAAAbACQAeACA0AJIBTALQAuAFBUACIBLADIgCioQg4gGhHgLQijgahBgEIhagCQg4AAgjgEQgYgChFgLQgzgIgigCIgLC+QAMgCANAAIAJAAgAleg1QgBB9gLDHQAeACAlAGQBgAOAWACQAdADAzAAIBPABQBAADCTAYQBWANA+AFIgEmyQgjgHgrgCQgegCg4AAInAgDQgiAAgUgEQgMgCgKgFIABA+gAlsokQAHC0AECCQALgFAOgDQATgEAiAAIGHAAQBZAAAsABQAuACApAEQgBi1AJhkIAJhcQAFgnABgfIgHABQgOAAgcgBQlagTlDACIgGAAQgBBKACBRg");
	this.shape_19.setTransform(-104.4765,9.5118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape_3},{t:this.shape}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:59.0056}},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_4},{t:this.shape_8},{t:this.shape_5,p:{x:59.0056}}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_5,p:{x:59.0556}},{t:this.shape_9}]},1).to({state:[{t:this.shape_10},{t:this.shape_5,p:{x:59.0556}},{t:this.shape_11},{t:this.shape_9}]},3).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_15},{t:this.shape_12}]},3).to({state:[{t:this.shape_17},{t:this.shape_14},{t:this.shape_13},{t:this.shape_16}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_16},{t:this.shape_17}]},3).to({state:[{t:this.shape_19},{t:this.shape_14},{t:this.shape_13},{t:this.shape_18}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_18},{t:this.shape_19}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338.2,-226.4,436.7,418.20000000000005);


(lib.circlebutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALaAAQAAEvjWDVQjVDWkvAAQkuAAjWjWQjVjVAAkvQAAkuDVjWQDWjVEuAAQEvAADVDVQDWDWAAEug");
	this.shape.setTransform(-2.95,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AoEIEQjVjWAAkuQAAkuDVjWQDXjVEtAAQEvAADVDVQDWDWAAEuQAAEujWDWQjVDWkvAAQktAAjXjWg");
	this.shape_1.setTransform(-2.95,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ALaAAQAAEvjWDVQjVDWkvAAQktAAjXjWQjVjVAAkvQAAkuDVjWQDXjVEtAAQEvAADVDVQDWDWAAEug");
	this.shape_2.setTransform(0.05,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF00").s().p("AoDIEQjWjVAAkvQAAktDWjXQDWjVEtAAQEuAADWDVQDWDXAAEtQAAEvjWDVQjWDWkuAAQktAAjWjWg");
	this.shape_3.setTransform(0.05,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF00").s().p("Ap1J2QkEkFAAlxQAAlvEEkFQEFkFFwAAQFxAAEEEFQEFEFAAFvQAAFxkFEFQkEEElxAAQlwAAkFkEg");
	this.shape_4.setTransform(0.05,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AoDIEQjWjWAAkuQAAktDWjWQDWjWEtAAQEuAADWDWQDWDWAAEtQAAEujWDWQjWDWkuAAQktAAjWjWg");
	this.shape_5.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:-2.95,y:-1}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:0.5,y:0.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-88,178,178);


// stage content:
(lib.Schmidt_haiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {haiku:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		this.click_btn.addEventListener("click",changeFrame);
		
		function changeFrame(){
			console.log("frame will change");
			root.gotoAndStop("artwork");
		}
		this.line01_txt.addEventListener("click",changeLine01);
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text=line01;
		}
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text=line02;
		}
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text=line03;
		}
		
		var line01= "A blue can of paint"
		var line02= "A ladder and a paint brush"
		var line03= "And a cool painter"
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		this.toFrame01_btn.addEventListener("click",changeFrame01);
		
		function changeFrame01(){
			console.log("frame will change");
			root.gotoAndStop("haiku");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// button
	this.click_btn = new lib.circlebutton();
	this.click_btn.name = "click_btn";
	this.click_btn.setTransform(496.25,547.6);
	new cjs.ButtonHelper(this.click_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.toFrame01_btn = new lib.circlebutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(472.25,559.6);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.click_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// ladderbrush
	this.instance = new lib.ladderandbrush();
	this.instance.setTransform(206.7,314.65,1,1,0,0,0,-80.4,42);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// painter
	this.instance_1 = new lib.painter();
	this.instance_1.setTransform(770.6,303.1,1,1,0,0,0,-29.5,25.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// can
	this.instance_2 = new lib.paintcan();
	this.instance_2.setTransform(514.6,213,1,1,0,0,0,32.1,-29.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line three", "40px 'Verdana'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 51;
	this.line03_txt.lineWidth = 397;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(486.65,363.8);

	this.line02_txt = new cjs.Text("Line two", "40px 'Verdana'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 51;
	this.line02_txt.lineWidth = 367;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(493.95,235.25);

	this.line01_txt = new cjs.Text("Line one", "40px 'Verdana'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 51;
	this.line01_txt.lineWidth = 295;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(497.9,118.45);

	this.text = new cjs.Text("Haiku", "40px 'Verdana'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 296;
	this.text.parent = this;
	this.text.setTransform(458.6,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhOUg1hMCcpAAAMAAABrDMicpAAAg");
	this.shape.setTransform(487.95,338.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9933FF").s().p("EhOUA1iMAAAhrDMCcoAAAMAAABrDg");
	this.shape_1.setTransform(487.95,338.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EhONg1GMCcbAAAMAAABqNMicbAAAg");
	this.shape_2.setTransform(484.625,333.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9999FF").s().p("EhONA1HMAAAhqNMCcbAAAMAAABqNg");
	this.shape_3.setTransform(484.625,333.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(463.1,312.4,527.1,369.9);
// library properties:
lib.properties = {
	id: '367A576535C64023BBE166E9CD26160C',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['367A576535C64023BBE166E9CD26160C'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;