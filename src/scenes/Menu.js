class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {

        this.cameras.main.setBackgroundColor(blackHex);

        // display menu text
        
        this.startText = this.add.bitmapText(width/2, height/2, "typedFont", "START", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("blueScene"); 
        })
        .on("pointerover", () => {this.startText.setTint(redHex)})
        .on("pointerout", () => {this.startText.setTint(0xFFFFFF)});


    }

}