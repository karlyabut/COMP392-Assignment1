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
            cubeHead.material.color.setRGB(Math.random());
            cubeBody.material.color.setRGB(Math.random());
            cubeLeftarm.material.color.setRGB(Math.random());
            cubeRightarm.material.color.setRGB(Math.random());
            cubeLeftleg.material.color.setRGB(Math.random());
            cubeRightleg.material.color.setRGB(Math.random());
            cubeLeftfoot.material.color.setRGB(Math.random());
            cubeRightfoot.material.color.setRGB(Math.random());
            
            //scene.add(cubeManColor)
        }
	}
}
