class Safe extends Phaser.Scene {
    constructor() {
        super("safeScene");
    }

    init() {
        this.correct = ["1", "2", "3", "4"];

        this.currentCode = [];
    }

    create() {

        this.cameras.main.setBackgroundColor(blackHex);
        this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        this.add.image(width/2, height/2, "keypadCircle").setOrigin(0.5);

        this.button1 = this.add.image(407, 199, "button1").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("1");
            this.currentCode.push("1");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button1.setTint(blueHex)})
        .on("pointerout", () => {this.button1.setTint(0xFFFFFF)});

        this.button2 = this.add.image(464, 199, "button2").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("2");
            this.currentCode.push("2");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button2.setTint(blueHex)})
        .on("pointerout", () => {this.button2.setTint(0xFFFFFF)});

        this.button3 = this.add.image(521, 199, "button3").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("3");
            this.currentCode.push("3");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button3.setTint(blueHex)})
        .on("pointerout", () => {this.button3.setTint(0xFFFFFF)});

        this.button4 = this.add.image(407, 256, "button4").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("4");
            this.currentCode.push("4");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button4.setTint(blueHex)})
        .on("pointerout", () => {this.button4.setTint(0xFFFFFF)});

        this.button5 = this.add.image(464, 256, "button5").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("5");
            this.currentCode.push("5");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button5.setTint(blueHex)})
        .on("pointerout", () => {this.button5.setTint(0xFFFFFF)});

        this.button6 = this.add.image(521, 256, "button6").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("6");
            this.currentCode.push("6");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button6.setTint(blueHex)})
        .on("pointerout", () => {this.button6.setTint(0xFFFFFF)});

        this.button7 = this.add.image(407, 313, "button7").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("7");
            this.currentCode.push("7");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button7.setTint(blueHex)})
        .on("pointerout", () => {this.button7.setTint(0xFFFFFF)});

        this.button8 = this.add.image(464, 313, "button8").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("8");
            this.currentCode.push("8");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button8.setTint(blueHex)})
        .on("pointerout", () => {this.button8.setTint(0xFFFFFF)});

        this.button9 = this.add.image(521, 313, "button9").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("9");
            this.currentCode.push("9"); 
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button9.setTint(blueHex)})
        .on("pointerout", () => {this.button9.setTint(0xFFFFFF)});

        this.button0 = this.add.image(464, 370, "button0").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("0");
            this.currentCode.push("0");
            console.log(this.currentCode);
        })
        .on("pointerover", () => {this.button0.setTint(blueHex)})
        .on("pointerout", () => {this.button0.setTint(0xFFFFFF)});

        this.buttonClear = this.add.image(407, 370, "buttonClear").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("Clear");
            this.currentCode = [];
        })
        .on("pointerover", () => {this.buttonClear.setTint(blueHex)})
        .on("pointerout", () => {this.buttonClear.setTint(0xFFFFFF)});

        this.buttonEnter = this.add.image(511, 370, "buttonEnter").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            console.log("Enter");
            console.log(JSON.stringify(this.correct));
            if (JSON.stringify(this.correct) == JSON.stringify(this.currentCode)) {
                this.scene.start("menuScene");
            } else {
                this.currentCode = [];
            }
        })
        .on("pointerover", () => {this.buttonEnter.setTint(blueHex)})
        .on("pointerout", () => {this.buttonEnter.setTint(0xFFFFFF)});

    }

}
