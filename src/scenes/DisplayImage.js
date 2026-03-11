class DisplayImage extends Phaser.Scene {
    constructor() {
        super("imageScene");
    }

    init(data) {
        this.image = data.image;
        this.prevScene = data.prevScene;
        this.addGraderText = data.addGraderText;
    }

    create() {
        // setting BG
        setBG(this);

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
        this.add.image(width/2, height/2, this.image).setOrigin(0.5);   // will always be in center of screen

        // if grader mode on and image need grader text, add it
        if (this.addGraderText != undefined) {
            this.addGraderText();
        }
       
    }   

}