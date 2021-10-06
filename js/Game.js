class Game{
    constructor(){}
    start(){
        if (gameState===0){
            background(bgImg1); 
            player=new Player();
            form=new Form();
            form.display();
        }
        bg=createSprite(width/2,height/2-150,100,100);
        bg.addImage(bgImg2);
        bg.x = bg.width /2;
        bg.velocityX=-6;
        //bg.scale=0.5;


        pikachu=createSprite(200,550,10,10);
        pikachu.addAnimation("running",pikachuImg);
        pikachu.scale=0.7;
        pikachu.debug=true;

        invisibleGround = createSprite(550,650,2000,10);
        invisibleGround.visible = false;

    }

    play(){
        background("white"); 
        if(keyDown("UP") && pikachu.y >= 150) {
            pikachu.velocityY = -8;
          }

         pikachu.velocityY = pikachu.velocityY + 0.8;
         pikachu.collide(invisibleGround)

         if (bg.x < 0){
            bg.x = bg.width/2;
          }

        drawSprites();
    }
}