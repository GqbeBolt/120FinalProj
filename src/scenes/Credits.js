class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create(data) {

        this.scene.bringToTop(this);

        this.prevScene = data.scene;
        this.prevScene.setButtonsInteractive(false);
        
        this.textBG = this.add.image(width/2, height/2, "creditsBG").setOrigin(0.5);

        this.backButton = this.add.bitmapText(width/2, 480, "typedFont", "BACK", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 160, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.prevScene.setButtonsInteractive(true);
            this.scene.stop();
            this.sound.play("uiButtonSFX");
        })
        .on("pointerover", () => {this.backButton.setTint(blueHex)})
        .on("pointerout", () => {this.backButton.setTint(0xFFFFFF)});

        this.add.bitmapText(width/2, 170, "typedFont", "Font: GGBotNet & Shaped Fonts\n\nSounds: Royalty Free from Pixabay\n\nArtwork & Design: Gabe Rybolt", 24, 1).setOrigin(0.5);

    }

    update() {
        
    }
}