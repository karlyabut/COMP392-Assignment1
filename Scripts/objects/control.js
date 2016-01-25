var objects;
(function (objects) {
    var Control = (function () {
        //bouncingSpeed: number;
        function Control(rotationX, rotationY, rotationZ) {
            this.rotationX = rotationX;
            this.rotationY = rotationY;
            this.rotationZ = rotationZ;
        }
        Control.prototype.randomColor = function () {
            var cubeManColor = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });
            //scene.add(cubeManColor)
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map