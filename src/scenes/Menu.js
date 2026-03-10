class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {

        this.cameras.main.setBackgroundColor(blackHex);

        this.bgImage = this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        this.time.addEvent({
            delay: 700,
            callback: () => {
                if (this.bgImage.y < 0) {
                    this.bgImage.y = 0;
                    this.bgImage.setFlipY(true);
                } else {
                    this.bgImage.y = -50;
                    this.bgImage.setFlipY(false);
                }
            },
            callbackScope: this,
            repeat: -1
        })

        // display menu text
        
        this.startText = this.add.bitmapText(width/2, height/2, "typedFont", "START", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("frontScene"); 
        })
        .on("pointerover", () => {this.startText.setTint(blueHex)})
        .on("pointerout", () => {this.startText.setTint(0xFFFFFF)});

        this.input.keyboard.createCombo('GRADER');

        this.input.keyboard.on("keycombomatch", () => {
            graderMode = true;
            this.add.bitmapText(width/2, height/2 + 100, "handwrittenFont", "GRADER MODE: ON", 36).setOrigin(0.5).setTint(pinkHex).setAngle(2);
        })
    }

    update() {
        
    }

}