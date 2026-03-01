class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {

        this.cameras.main.setBackgroundColor(blackHex);

        this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        // display menu text
        
        this.startText = this.add.bitmapText(width/2, height/2, "typedFont", "START", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("safeScene"); 
        })
        .on("pointerover", () => {this.startText.setTint(blueHex)})
        .on("pointerout", () => {this.startText.setTint(0xFFFFFF)});


    }

}