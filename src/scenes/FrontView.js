class FrontView extends Phaser.Scene {
    constructor() {
        super("frontScene");
    }

    create() {
        // setting BG
        setBG(this);

        // changing BG sprite based on if lock is opened
        // lock is on ground if opened
        if (lockOpened) {
            this.add.image(0, 0, "frontSceneOpened").setOrigin(0);

            // clickable file cabinet
            this.cabinetButton = this.add.image(727, 191, "clickableCabinet").setOrigin(0).setInteractive({
                hitArea: new Phaser.Geom.Rectangle(0, 0, 119, 96), 
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
                useHandCursor: true
            })
            .on("pointerdown", () => {
                this.sound.play("uiButtonSFX");
                this.scene.start("imageScene", {image: "julyCard", prevScene: "frontScene"});

            })
            .on("pointerover", () => {this.cabinetButton.setTint(grayHex)})
            .on("pointerout", () => {this.cabinetButton.setTint(0xFFFFFF)});
        } else {
            this.add.image(0, 0, "frontScene").setOrigin(0);

            // small lock
            this.lockButton = this.add.image(749, 253, "smallLock").setOrigin(0).setInteractive({
                hitArea: new Phaser.Geom.Rectangle(0, 0, 30, 32), 
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
                useHandCursor: true
            })
            .on("pointerdown", () => {
                this.sound.play("uiButtonSFX");
                this.scene.start("lockScene");
            })
            .on("pointerover", () => {this.lockButton.setTint(grayHex)})
            .on("pointerout", () => {this.lockButton.setTint(0xFFFFFF)});
        }
        

        // post it note
        this.postItButton = this.add.image(683, 211, "postIt").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 29, 26), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("imageScene", {image: "postItBig", prevScene: this.scene.key, 
                addGraderText: graderMode ? () => {
                    this.scene.get("imageScene").add.bitmapText(width/2, height/2 + 100, "handwrittenFont", "11/24", 36).setOrigin(0.5).setTint(darkPinkHex);
                } : undefined
            });
        })
        .on("pointerover", () => {this.postItButton.setTint(grayHex)})
        .on("pointerout", () => {this.postItButton.setTint(0xFFFFFF)});


        // small document 
        this.docButton = this.add.image(416, 339, "smallDoc").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 51, 38), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("imageScene", {image: "bigDoc", prevScene: this.scene.key});
        })
        .on("pointerover", () => {this.docButton.setTint(grayHex)})
        .on("pointerout", () => {this.docButton.setTint(0xFFFFFF)});

        // left & right buttons
        this.leftButton = this.add.image(32, height - 64, "arrowButton").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("leftScene");
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
            this.scene.start("rightScene");
        })
        .on("pointerover", () => {this.rightButton.setTint(blueHex)})
        .on("pointerout", () => {this.rightButton.setTint(0xFFFFFF)});
    }
}