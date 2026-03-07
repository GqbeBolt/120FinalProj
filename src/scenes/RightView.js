class RightView extends Phaser.Scene {
    constructor() {
        super("rightScene");
    }

    init() {

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

        this.add.image(0, 0, "rightScene").setOrigin(0);


        // letter
        this.letterButton = this.add.image(722, 345, "smallLetter").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 64, 18), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("imageScene", {image: "bigLetter", prevScene: this.scene.key});
        })
        .on("pointerover", () => {this.letterButton.setTint(grayHex)})
        .on("pointerout", () => {this.letterButton.setTint(0xFFFFFF)});

        // left & right buttons
        this.leftButton = this.add.image(32, height - 64, "arrowButton").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("frontScene");
        })
        .on("pointerover", () => {this.leftButton.setTint(blueHex)})
        .on("pointerout", () => {this.leftButton.setTint(0xFFFFFF)});

        this.rightButton = this.add.image(width - 64, height - 64, "arrowButton").setOrigin(0).setFlipX(true).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("backScene");
        })
        .on("pointerover", () => {this.rightButton.setTint(blueHex)})
        .on("pointerout", () => {this.rightButton.setTint(0xFFFFFF)});

        //this.add.bitmapText(width/2, height/2, "handwrittenFont", "RIGHT", 36).setOrigin(0.5);
    }

    update() {
                 

    }
}