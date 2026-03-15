class FinalMessage extends Phaser.Scene {
    constructor() {
        super("finalScene");
    }

    init() {
        this.input.setPollAlways();
    }

    create() {
        // setting BG
        setBG(this);

        if (graderMode) {
            this.add.image(width/2, height/2, "graderLetter");
        } else {
            this.add.image(width/2, height/2, "lyricLetter");
        }
        

        this.restartButton = this.add.bitmapText(width/2 - 250, 550, "typedFont", "RESTART", 36).setOrigin(0.5).setInteractive({
        hitArea: new Phaser.Geom.Rectangle(-5, 10, 160, 35), 
        hitAreaCallback: Phaser.Geom.Rectangle.Contains,
        useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            lockOpened = false;
            sigilComplete = false;
            graderMode = false;
            this.scene.start("menuScene");
        })
        .on("pointerover", () => {this.restartButton.setTint(blueHex)})
        .on("pointerout", () => {this.restartButton.setTint(0xFFFFFF)});

        this.creditsButton = this.add.bitmapText(width/2+250, 550, "typedFont", "CREDITS", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 160, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.creditsButton.setTint(0xFFFFFF)
            this.scene.launch("creditsScene", {scene: this});
        })
        .on("pointerover", () => {this.creditsButton.setTint(blueHex)})
        .on("pointerout", () => {this.creditsButton.setTint(0xFFFFFF)});   

        this.buttons = this.add.group([this.restartButton, this.creditsButton]);

    }

    setButtonsInteractive(bool) {
        this.buttons.children.each((button) => {
            if (bool){
                button.setInteractive();
            } else {
                button.disableInteractive();
            }
            
        })
    }

}

