function QuaternionCanvas(glcanvas) {
    SimpleMeshCanvas(glcanvas, "GLEAT/DrawingUtils"); //Call the boilerplate code to set up mouse interaction

    glcanvas.colorBlack = vec3.fromValues(0.0, 0.0, 0.0);
    glcanvas.colorWhite = vec3.fromValues(1.0, 1.0, 1.0);

    //Setup repaint function	
    glcanvas.repaint = function() {
        glcanvas.gl.viewport(0, 0, glcanvas.gl.viewportWidth, glcanvas.gl.viewportHeight);
        glcanvas.gl.clear(glcanvas.gl.COLOR_BUFFER_BIT | glcanvas.gl.DEPTH_BUFFER_BIT);

        var pMatrix = mat4.create();
        mat4.perspective(pMatrix, 45, glcanvas.gl.viewportWidth / glcanvas.gl.viewportHeight, glcanvas.camera.R/100.0, glcanvas.camera.R*2);
        var mvMatrix = glcanvas.camera.getMVMatrix();
        var m2 = mat4.create();
        mat4.fromQuat(m2, qslerp);
        mat4.mul(mvMatrix, mvMatrix, m2);

		glcanvas.mesh.render(glcanvas.gl, glcanvas.shaders, pMatrix, mvMatrix, glcanvas.ambientColor, glcanvas.light1Pos, glcanvas.light2Pos, glcanvas.lightColor, false, false, false, COLOR_SHADING);
	
    }
	
}
