class Letter extends Phaser.Scene {
    constructor() {
        super("letterScene");
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

        this.add.image(0, 0, "safeWithLetter").setOrigin(0);

        // clickable letter
        this.letterButton = this.add.image(408, 439, "redLetter").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 146, 34), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            if (!sigilComplete) {
                this.scene.start("sigilScene");
            } else {
                this.scene.start("imageScene", {image: "23Card", prevScene: this.scene.key})
            }
            
        })
        .on("pointerover", () => {this.letterButton.setTint(grayHex)})
        .on("pointerout", () => {this.letterButton.setTint(0xFFFFFF)});

    }

}