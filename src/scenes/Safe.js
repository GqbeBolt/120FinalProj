class Safe extends Phaser.Scene {
    constructor() {
        super("safeScene");
    }

    init() {
        // correct answer
        this.correct = ["0", "7", "2", "3"];

        // tracker for current input
        this.currentCode = [];
    }

    create() {

        // setting BG
        setBG(this);

        // brings back to previous scene
        this.backButton = this.add.image(width - 64, height - 64, "backButton").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("backScene");
        })
        .on("pointerover", () => {this.backButton.setTint(blueHex)})
        .on("pointerout", () => {this.backButton.setTint(0xFFFFFF)});

        // unchanging keypad sprite
        this.add.image(width/2, height/2, "keypadCircle").setOrigin(0.5);

        // all number buttons
        this.button1 = this.add.image(407, 199, "button1").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("1");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button1.setTint(blueHex)})
        .on("pointerout", () => {this.button1.setTint(0xFFFFFF)});

        this.button2 = this.add.image(464, 199, "button2").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("2");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button2.setTint(blueHex)})
        .on("pointerout", () => {this.button2.setTint(0xFFFFFF)});

        this.button3 = this.add.image(521, 199, "button3").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("3");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button3.setTint(blueHex)})
        .on("pointerout", () => {this.button3.setTint(0xFFFFFF)});

        this.button4 = this.add.image(407, 256, "button4").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("4");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button4.setTint(blueHex)})
        .on("pointerout", () => {this.button4.setTint(0xFFFFFF)});

        this.button5 = this.add.image(464, 256, "button5").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("5");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button5.setTint(blueHex)})
        .on("pointerout", () => {this.button5.setTint(0xFFFFFF)});

        this.button6 = this.add.image(521, 256, "button6").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("6");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button6.setTint(blueHex)})
        .on("pointerout", () => {this.button6.setTint(0xFFFFFF)});

        this.button7 = this.add.image(407, 313, "button7").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("7");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button7.setTint(blueHex)})
        .on("pointerout", () => {this.button7.setTint(0xFFFFFF)});

        this.button8 = this.add.image(464, 313, "button8").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("8");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button8.setTint(blueHex)})
        .on("pointerout", () => {this.button8.setTint(0xFFFFFF)});

        this.button9 = this.add.image(521, 313, "button9").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("9"); 
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button9.setTint(blueHex)})
        .on("pointerout", () => {this.button9.setTint(0xFFFFFF)});

        this.button0 = this.add.image(464, 370, "button0").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currentCode.push("0");
            this.sound.play("physButtonSFX");
        })
        .on("pointerover", () => {this.button0.setTint(blueHex)})
        .on("pointerout", () => {this.button0.setTint(0xFFFFFF)});

        // clear and enter buttons
        // clears the current input
        this.buttonClear = this.add.image(407, 370, "buttonClear").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("physButtonSFX");
            this.currentCode = [];
        })
        .on("pointerover", () => {this.buttonClear.setTint(blueHex)})
        .on("pointerout", () => {this.buttonClear.setTint(0xFFFFFF)});

        // checks the current input to correct answer, clears input if wrong
        this.buttonEnter = this.add.image(511, 370, "buttonEnter").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("physButtonSFX");
            if (JSON.stringify(this.correct) == JSON.stringify(this.currentCode)) {
                this.scene.start("letterScene");
            } else {
                this.currentCode = [];
                this.cameras.main.shake(75, 0.005);
            }
        })
        .on("pointerover", () => {this.buttonEnter.setTint(blueHex)})
        .on("pointerout", () => {this.buttonEnter.setTint(0xFFFFFF)});

        // adds skip button for grader mode
        if (graderMode) {
            this.skipButton = this.add.image(800, height/2, "skipButton").setOrigin(0, 0.5).setInteractive({
                hitArea: new Phaser.Geom.Rectangle(0, 0, 64, 32),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
                useHandCursor: true
            })
            .on("pointerdown", () => {
                this.scene.start("letterScene");
            })
            .on("pointerover", () => {this.skipButton.setTint(redHex)})
            .on("pointerout", () => {this.skipButton.setTint(0xFFFFFF)});
        }

    }

}
