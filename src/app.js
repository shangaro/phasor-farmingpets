//phaser

var game = new Phaser.Game(640,360,Phaser.AUTO);

var GameState={
   preload: function(){
    this.load.image('background',"./src/assets/background.png");
    this.load.image('chicken',"./src/assets/chicken.png");
    this.load.image('horse',"./src/assets/horse.png");
    this.load.image('pig',"./src/assets/pig.png");
    this.load.image('sheep',"./src/assets/sheep3.png");
    this.load.image('arrow',"./src/assets/arrow.png");

   },
   //executed after everything is loaded
   create:function(){

    this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally=true;
    this.scale.pageAlignVertically=true;

    this.background=this.game.add.sprite(0,0,'background');
    //center of the world
    // this.chicken=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'chicken');
    // //place the sprite by its center not the top-left corner
    // this.chicken.anchor.setTo(0.5,0.5);
    // this.chicken.scale.setTo(0.75,0.75);

    //animalData
    var animalData=[
        { key:'chicken',text:'CHICKEN'},
        { key:'pig', text:'PIG'},
        {key:'sheep',text:'SHEEP'},
        {key:'horse',text:'HORSE'}
    ];
    this.animals=this.game.add.group();
    var self=this;
    var animal;
    animalData.forEach(function(element){
       animal= self.animals.create(-1000,self.game.world.centerY,element.key);
       animal.customParams={text:element.text};
       animal.anchor.setTo(0.5);
       animal.inputEnabled=true;
       animal.input.pixelPerfectClick=true;
       animal.events.onInputDown.add(self.animateAnimal,self);

    });
    this.currentAnimal=this.animals.previous();

    this.currentAnimal.position.set(this.game.world.centerX,this.game.world.centerY);
    // right arrow
    this.rightArrow=this.game.add.sprite(580,this.game.world.centerY,'arrow');
    this.rightArrow.scale.setTo(0.5);
    this.rightArrow.anchor.setTo(0.5);
    this.rightArrow.customParams={direction:1};
    this.rightArrow.inputEnabled=true;
    this.rightArrow.input.pixelPerfectClick=true;
    this.rightArrow.events.onInputDown.add(this.switchAnimal,this);

    //left arrow;
    this.leftArrow=this.game.add.sprite(60,this.game.world.centerY,'arrow');
    this.leftArrow.anchor.setTo(0.5);
    this.leftArrow.scale.setTo(-0.5,0.5);
    this.leftArrow.customParams={direction:-1};
    this.leftArrow.inputEnabled=true;
    this.leftArrow.pixelPerfectClick=true;
    this.leftArrow.events.onInputDown.add(this.switchAnimal,this);
    

    // // horse
    // this.horse=this.game.add.sprite(120,10,'horse');
    // this.horse.scale.setTo(0.5);

    //pig
    // this.pig=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'pig');
    // this.pig.anchor.setTo(0.5);
    

    //sheep
    // this.sheep=this.game.add.sprite(100,250,'sheep');
    // this.sheep.anchor.setTo(0.5);
    // this.sheep.scale.setTo(0.75,0.75);
    // this.sheep.angle=45;

    //left arrow

   },

   update:function(){
   },
   switchAnimal:function(sprite,event){
       console.log("move animal");
   },
   animateAnimal:function(sprite,event){
    console.log("animate animal");
   }



};
game.state.add('GameState',GameState);
game.state.start('GameState');