module objects {
	export class Control {
        rotationX: number;
		rotationY: number;
        rotationZ: number;
		//bouncingSpeed: number;
		constructor(rotationX: number, rotationY: number, rotationZ: number) {
            this.rotationX = rotationX;
			this.rotationY = rotationY;
			this.rotationZ = rotationZ;
           
		}
        
        public randomColor(): void{
            var cubeManColor: LambertMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
            //scene.add(cubeManColor)
        }
	}
}
