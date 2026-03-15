class Letter extends Phaser.Scene {
    constructor() {
        super("letterScene");
    }

    init() {

    }

    create() {
        // setting BG
        setBG(this);

        this.bigLetter = this.add.image(width/2, height/2, "letterBack").setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 363, 231), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("finalScene");
        })
        .on("pointerover", () => {this.bigLetter.setTint(grayHex)})
        .on("pointerout", () => {this.bigLetter.setTint(0xFFFFFF)});
        this.bigLetter.setVisible(false)

        // adding scene art
        this.safe = this.add.image(0, 0, "safeWithLetter").setOrigin(0);

        // clickable letter
        this.letterButton = this.add.image(408, 439, "redLetter").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 146, 34), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            
            this.safe.setVisible(false);
            this.letterButton.setVisible(false);
            this.bigLetter.setVisible(true);

            // particle emitter for when letter is opened
            this.starEmitter = this.add.particles(width/2, height/2, "star", {
                advance: 5000,
                speed: 50,
                lifespan: 100000,
                frequency: 300,
                tint: redHex,
                alpha: 0.5
            }).setBelow(this.bigLetter);
        })
        .on("pointerover", () => {this.letterButton.setTint(grayHex)})
        .on("pointerout", () => {this.letterButton.setTint(0xFFFFFF)});

        

    }

}