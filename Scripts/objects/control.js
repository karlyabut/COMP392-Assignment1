var objects;
(function (objects) {
    var Control = (function () {
        //bouncingSpeed: number;
        function Control(rotationX, rotationY, rotationZ, rotationXArms) {
            this.rotationX = rotationX;
            this.rotationY = rotationY;
            this.rotationZ = rotationZ;
            this.rotationXArms = rotationXArms;
        }
        Control.prototype.randomColor = function () {
            cubeHead.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeBody.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftarm.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightarm.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftleg.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightleg.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftfoot.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightfoot.material.color.setRGB(Math.random(), Math.random(), Math.random());
            //scene.add(cubeManColor)
        };
        Control.prototype.resetScene = function () {
            this.rotationX = 0;
            this.rotationY = 0;
            this.rotationZ = 0;
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map