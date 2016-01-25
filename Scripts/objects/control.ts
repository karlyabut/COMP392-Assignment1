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
            cubeHead.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeBody.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftarm.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightarm.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftleg.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightleg.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftfoot.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightfoot.material.color.setRGB(Math.random(), Math.random(), Math.random());
            
            //scene.add(cubeManColor)
        }
	}
}
