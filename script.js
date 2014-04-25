//Js file for the game of life web app.
//Created by rationalAsh :D
//Now live on github.io

var cellSize = 20;

var cont = document.getElementById('container');
var sBox = document.getElementById('SettingsBox');
var posDisp = document.getElementById('mPos');
var mpFlag = 0;



cont.onmousemove = function(e){

    if((e.pageX > 1500) && (e.pageY < 410))
    {
	sBox.style.opacity = 0.8;
	sBox.style.zIndex = 1;
	sBox.style.visibility = "visible";
    }
    else
    {
	//sBox.style.opacity = 0.1;
	sBox.style.zIndex  = -1;
	sBox.style.visibility = "hidden";
    }

}
    

sBox.onmousedown = function(){
    mpFlag = 1;
}
sBox.onmouseup = function(){
    mpFlag = 0;
}

sBox.onmouseover = function(e){
    
    //if(mpFlag==1)
    //{
	posDisp.innerHTML = 'Mouse pressed!'+ '(' + e.pageX + ',' + e.pageY+')';
	
    //}
    //else
    //{
	//posDisp.innerHTML = 'Mouse released!'+ '(' + e.pageX + ',' + e.pageY+')';
    //}
}


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
    //alert("Click at: "+ e.pageX + "," + e.pageY);
}

var stage = new Kinetic.Stage({
        container: 'container',
        width: wWidth,
        height: wHeight
      });

      var layer = new Kinetic.Layer();

      var rect = new Kinetic.Rect({
        x: 500,
        y: 200,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4
      });

      // add the shape to the layer
      layer.add(rect);

      // add the layer to the stage
      stage.add(layer);


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
    layer.add(gridLinesY[i]);
}

//Adding X lines to canvas
for(j=0; j<cols; j++)
{
    layer.add(gridLinesX[j]);
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

for(i=0; i<rows; i++)
{
    for(j=0; j<cols; j++)
    {
	setTimeout(function(){
	}, 1000); 
	layer.add(cells[i][j]);
	//layer.draw();
    }
}


cells[0][0].remove()
layer.draw();



var tween = new Kinetic.Tween(
    {
	node: rect,
	duration: 0.3,
	x: 500,
	y: 200,
	rotation: 0,
	opacity: 0.9,
	scaleX: 0,
	scaleY: 0,
	easing: Kinetic.Easings.StrongEaseOut,
    }
);

tween.play();
