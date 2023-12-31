"use strict";

var gl;
var points;

window.onload = function init(){
	var canvas = document.getElementById( "triangle-canvas" );
	gl = WebGLUtils.setupWebGL( canvas );
	if( !gl ){
		alert( "WebGL isn't available" );
	}

	// Three Vertices
	//三角形
	// var vertices = [
	// 	-1.0, -1.0, 
	// 	 0.0,  1.0, 
	// 	 1.0, -1.0, 
	// 	/*0.0, -1.0,
	// 	 1.0, -1.0,
	// 	 1.0,  1.0,
	// 	 0.0, -1.0,
	// 	 1.0,  1.0,
	// 	 0.0,  1.0*/
	// 	 /*-0.5, -0.5,
	// 	 0.0, 0.5,
	// 	 0.5, -0.5*/
	// ];
	
	//四边形
	// var vertices = [
	// 		-0.5, -0.5,
	// 		 0.5, -0.5,
	// 		 0.5,  0.5,
	// 		-0.5,  0.5,
	// 		//-0.5, -0.5,
	// 		// 0.5, 0.5
	// 	];
	
	//四边形and三角形
	var vertices = [
			-0.5,  0.5,
			-1.0, -0.5,
			 0.0, -0.5,
			 1.0, -0.5,
			 1.0,  0.5,
			 0.0,  0.5
		];

	//不同颜色的四边形and三角形
	// var vertices = [
	//         -0.5, 0.5,
	//         -1.0, -0.5,
	//         0.0, -0.5
	//     ];
	
	    // var vertices2 = [
	    //     0.0, -0.5,
	    //     1.0, -0.5,
	    //     1.0, 0.5,
	    //     1.0, 0.5,
	    //     0.0, 0.5,
	    //     0.0, -0.5
	    // ];
		var vertcolors = [
			1.0, 0.0, 0.0,
			0.0, 1.0, 0.0,
			0.0, 0.0, 1.0
		];
	// Configure WebGL
	gl.viewport( 0, 0, canvas.width, canvas.height );
	// gl.viewport( 0, 0, canvas.width/2, canvas.height/2 );
	gl.clearColor( 0.7, 1.0, 1.0, 1.0 );

	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	
	//彩色
	// var cbufferId = gl.createBuffer();
	// gl.bindBuffer( gl.ARRAY_BUFFER, cbufferId );
	// gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertcolors ), gl.STATIC_DRAW );

	// var aColor = gl.getAttribLocation( program, "aColor" );
	// gl.vertexAttribPointer( aColor, 3, gl.FLOAT, false, 0, 0 );
	// gl.enableVertexAttribArray( aColor );

	render();
	
	// var program2 = initShaders( gl, "vertex-shader", "fragment2-shader" );
	//  gl.useProgram( program2 );
	
 //    var bufferId2 = gl.createBuffer();
 //    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId2);
 //    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);

 //    var vPosition2 = gl.getAttribLocation( program2, "vPosition" );
 //    gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
 //    gl.enableVertexAttribArray( vPosition2 );
 //    render2();
}

function render(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	//四边形
	// gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
	//三角形
	// gl.drawArrays( gl.TRIANGLES, 0, 3 );
	//四边形and三角形
	gl.drawArrays( gl.TRIANGLES, 0, 3 );
	gl.drawArrays( gl.TRIANGLE_FAN, 2, 4 );
	
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}
// function render2() {
//     //gl.clear(gl.COLOR_BUFFER_BIT);
//     //gl.drawArrays(gl.TRIANGLES, 0, 3);
//     gl.drawArrays(gl.TRIANGLES, 0, 6);
//     //gl.drawArrays( gl.TRIANGLES, 0, 9 );
//     //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
// }