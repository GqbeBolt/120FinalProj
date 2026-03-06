class Image extends Phaser.Scene {
    constructor() {
        super("imageScene");
    }

    init(data) {
        this.image = data.image;
        this.prevScene = data.prevScene
    }

    create() {
        // setting BG
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

        // back button
        this.backButton = this.add.image(width - 64, height - 64, "backButton").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start(this.prevScene);
        })
        .on("pointerover", () => {this.backButton.setTint(blueHex)})
        .on("pointerout", () => {this.backButton.setTint(0xFFFFFF)});

        //show unique image
        this.add.image(width/2, height/2, this.iamge).setOrigin(0.5);   // will always be in center of screen

    }   

}