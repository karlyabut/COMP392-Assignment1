module objects {
	export class Control {
        rotationX: number;
		rotationY: number;
        rotationZ: number;
      //this was done for fun
        //rotationXArms: number;
        //rotationZArms: number;
		//bouncingSpeed: number;
		constructor(rotationX: number, rotationY: number, rotationZ: number) {
            this.rotationX = rotationX;
			this.rotationY = rotationY;
			this.rotationZ = rotationZ;
            
          //this was done for fun
            //this.rotationXArms = rotationXArms;
            //this.rotationZArms = rotationZArms;
           
		}
        //randomize the color of every cube
        public randomColor(): void{
            cubeHead.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeBody.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftarm.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightarm.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftleg.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightleg.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeLeftfoot.material.color.setRGB(Math.random(), Math.random(), Math.random());
            cubeRightfoot.material.color.setRGB(Math.random(), Math.random(), Math.random());
            
        }
        //attempt of resetting the scene **control not added this will only stop the rotation not reset it
        public resetScene(): void{
            this.rotationX = 0;
            this.rotationY = 0;
            this.rotationZ = 0;
            
        }
       
	}
}
