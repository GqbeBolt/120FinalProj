class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
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

        this.safeText = this.add.bitmapText(width/2, height/2, "typedFont", "SAFE", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("safeScene"); 
        })
        .on("pointerover", () => {this.safeText.setTint(blueHex)})
        .on("pointerout", () => {this.safeText.setTint(0xFFFFFF)});

        this.sigilText = this.add.bitmapText(width/2, height/2 + 30, "typedFont", "SIGIL", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("sigilScene"); 
        })
        .on("pointerover", () => {this.sigilText.setTint(blueHex)})
        .on("pointerout", () => {this.sigilText.setTint(0xFFFFFF)});

        this.lockText = this.add.bitmapText(width/2, height/2 + 60, "typedFont", "LOCK", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("lockScene"); 
        })
        .on("pointerover", () => {this.lockText.setTint(blueHex)})
        .on("pointerout", () => {this.lockText.setTint(0xFFFFFF)});
    }

    update() {
                 

    }
}