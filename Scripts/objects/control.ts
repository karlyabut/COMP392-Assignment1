module objects {
	export class Control {
        rotationX: number;
		rotationY: number;
        rotationZ: number;
        rotationXArms: number;
		//bouncingSpeed: number;
		constructor(rotationX: number, rotationY: number, rotationZ: number, rotationXArms: number) {
            this.rotationX = rotationX;
			this.rotationY = rotationY;
			this.rotationZ = rotationZ;
            
            this.rotationXArms = rotationXArms;
           
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
        public resetScene(): void{
            this.rotationX = 0;
            this.rotationY = 0;
            this.rotationZ = 0;
            
        }
       
	}
}
