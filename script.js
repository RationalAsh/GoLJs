//Js file for the game of life web app.
//Created by rationalAsh :D
//Now live on github.io

var cellSize = 20;

var cont = document.getElementById('container');
var sBox = document.getElementById('SettingsBox');
var posDisp = document.getElementById('mPos');
var mpFlag = 0;



//cont.onmousemove = function(e){

//if((e.pageX > 1500) && (e.pageY < 410))
//    {
//	sBox.style.opacity = 0.8;
//	sBox.style.zIndex = 1;
//	sBox.style.visibility = "visible";
//    }
//    else
//    {
//	//sBox.style.opacity = 0.1;
//	sBox.style.zIndex  = -1;
//	sBox.style.visibility = "hidden";
//    }
//
//}

sBox.style.opacity = 0.8;
sBox.style.zIndex = 1;
sBox.style.visibility = "visible";

var wHeight = screen.availHeight;
var wWidth  = screen.availWidth;

var i=0;
var j=0;

var rows = Math.round(wHeight/cellSize);
var cols = wWidth/cellSize;

//alert('rows: '+rows+' cols: '+cols);

var gridLinesY = new Array();
var gridLinesX = new Array();
var cells = new Array();
var cTemp = new Array();

cont.onclick = function(e){
    alert("Click at: "+ e.pageX + "," + e.pageY);
}

var stage = new Kinetic.Stage({
        container: 'container',
        width: wWidth,
        height: wHeight
      });

var animLayer = new Kinetic.Layer();
var statLayer = new Kinetic.Layer();

// add the layer to the stage
stage.add(animLayer).add(statLayer);


//Loop to make Y gridlines
for(i=0; i<rows; i++)
{
    gridLinesY.push(
	new Kinetic.Line(
		{
		    points: [0, i*cellSize, wWidth, i*cellSize],
		    stroke: 'gray',
		    strokeWidth: 0.8,
		    lineCap: 'round',
		    lineJoin: 'round'
		}
	)
    )
}
//Loop to make X gridlines
for(j=0; j<cols; j++)
{
    gridLinesX.push(
	new Kinetic.Line(
		{
		    points: [j*cellSize, 0, j*cellSize, wHeight],
		    stroke: 'gray',
		    strokeWidth: 0.8,
		    lineCap: 'round',
		    lineJoin: 'round'
		}
	)
    )
}

//Adding Y lines to canvas
for(i=0; i<rows; i++)
{
    statLayer.add(gridLinesY[i]);
}

//Adding X lines to canvas
for(j=0; j<cols; j++)
{
    statLayer.add(gridLinesX[j]);
}

//Making the cells
for(i=0; i<rows; i++)
{
    cTemp = new Array();
    for(j=0; j<cols; j++)
    {
	cTemp.push(
	    new Kinetic.Rect(
		{
		    x: j*cellSize + 1,
		    y: i*cellSize + 1,
		    width: cellSize - 2,
		    height: cellSize - 2,
		    fill: 'green',
		    stroke: 'black',
		    strokeWidth: 0
                }
	    )
        )
    }
    cells.push(cTemp);
}

//for(i=0; i<rows; i++)
//{
//    for(j=0; j<cols; j++)
//    {
//	layer.add(cells[i][j]);
//    }
//}

animLayer.add(cells[0][0]);
animLayer.add(cells[0][1]);
cells[0][0].remove();
animLayer.draw();
statLayer.draw();

var anim = new Kinetic.Animation(function(frame){
    var time = frame.time,
        timeDIff = frame.timeDiff,
        frameRate = frame.frameRate;
    
    //update stuff
    mPos.innerHTML = "framerate: " + frameRate;

    cells[0][1].setX(50*Math.sin(frame.time * 2  * Math.PI/2000) + cellSize);
}, animLayer);

anim.start();

//var tween = new Kinetic.Tween(
//    {
//	node: rect,
//	duration: 0.3,
//	x: 500,
//	y: 200,
//	rotation: 0,
//	opacity: 0.9,
//	scaleX: 0,
//	scaleY: 0,
//	easing: Kinetic.Easings.StrongEaseOut,
  //  }
//);
//
//tween.play();
