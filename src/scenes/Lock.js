class Lock extends Phaser.Scene {
    constructor() {
        super("lockScene");
    }

    init() {
        // the number of each "spot"
        this.spot1 = 0;
        this.spot2 = 0;
        this.spot3 = 0;
        this.spot4 = 0;

        // correct combo
        this.correct = [1, 1, 2, 4];
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
            this.scene.start("frontScene");
        })
        .on("pointerover", () => {this.backButton.setTint(blueHex)})
        .on("pointerout", () => {this.backButton.setTint(0xFFFFFF)});

        // clickable latch, will be how the user checks the code answer
        this.latch = this.add.image(352, 111, "latch").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 257, 193),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.checkAnswer();
            this.sound.play("uiButtonSFX", {rate: 0.75});
        })
        .on("pointerover", () => {this.latch.setTint(blueHex)})
        .on("pointerout", () => {this.latch.setTint(0xFFFFFF)});

        // adding lock sprite
        this.add.image(width/2, height/2, "lockBrick").setOrigin(0.5);

        // adding numbers
        this.num1 = this.add.image(368, 380, `button${this.spot1}`).setOrigin(0);
        this.num2 = this.add.image(432, 380, `button${this.spot2}`).setOrigin(0);
        this.num3 = this.add.image(496, 380, `button${this.spot3}`).setOrigin(0);
        this.num4 = this.add.image(560, 380, `button${this.spot4}`).setOrigin(0);


        // arrow buttons
        this.oneUp = this.add.image(368, 336, "arrowUp").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 14, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.spot1 = this.mod(this.spot1+1, 10);
            this.num1.setTexture(`button${this.spot1}`);
            this.sound.play("physButtonSFX", {rate: 9.5});
        })
        .on("pointerover", () => {this.oneUp.setTint(blueHex)})
        .on("pointerout", () => {this.oneUp.setTint(0xFFFFFF)});

        this.twoUp = this.add.image(432, 336, "arrowUp").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 14, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.spot2 = this.mod(this.spot2+1, 10);
            this.num2.setTexture(`button${this.spot2}`);
            this.sound.play("physButtonSFX", {rate: 9.5});
        })
        .on("pointerover", () => {this.twoUp.setTint(blueHex)})
        .on("pointerout", () => {this.twoUp.setTint(0xFFFFFF)});

        this.threeUp = this.add.image(496, 336, "arrowUp").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 14, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.spot3 = this.mod(this.spot3+1, 10);
            this.num3.setTexture(`button${this.spot3}`);
            this.sound.play("physButtonSFX", {rate: 9.5});
        })
        .on("pointerover", () => {this.threeUp.setTint(blueHex)})
        .on("pointerout", () => {this.threeUp.setTint(0xFFFFFF)});

        this.fourUp = this.add.image(560, 336, "arrowUp").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 14, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.spot4 = this.mod(this.spot4+1, 10);
            this.num4.setTexture(`button${this.spot4}`);
            this.sound.play("physButtonSFX", {rate: 9.5});
        })
        .on("pointerover", () => {this.fourUp.setTint(blueHex)})
        .on("pointerout", () => {this.fourUp.setTint(0xFFFFFF)});

        this.oneDown = this.add.image(368, 424, "arrowUp").setOrigin(0).setFlipY(true).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.spot1 = this.mod(this.spot1-1, 10);
            this.num1.setTexture(`button${this.spot1}`);
            this.sound.play("physButtonSFX", {rate: 9.5});
        })
        .on("pointerover", () => {this.oneDown.setTint(blueHex)})
        .on("pointerout", () => {this.oneDown.setTint(0xFFFFFF)});

        this.twoDown = this.add.image(432, 424, "arrowUp").setOrigin(0).setFlipY(true).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.spot2 = this.mod(this.spot2-1, 10);
            this.num2.setTexture(`button${this.spot2}`);
            this.sound.play("physButtonSFX", {rate: 9.5});
        })
        .on("pointerover", () => {this.twoDown.setTint(blueHex)})
        .on("pointerout", () => {this.twoDown.setTint(0xFFFFFF)});

        this.threeDown = this.add.image(496, 424, "arrowUp").setOrigin(0).setFlipY(true).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.spot3 = this.mod(this.spot3-1, 10);
            this.num3.setTexture(`button${this.spot3}`);
            this.sound.play("physButtonSFX", {rate: 9.5});
        })
        .on("pointerover", () => {this.threeDown.setTint(blueHex)})
        .on("pointerout", () => {this.threeDown.setTint(0xFFFFFF)});

        this.fourDown = this.add.image(560, 424, "arrowUp").setOrigin(0).setFlipY(true).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.spot4 = this.mod(this.spot4-1, 10);
            this.num4.setTexture(`button${this.spot4}`);
            this.sound.play("physButtonSFX", {rate: 9.5});
        })
        .on("pointerover", () => {this.fourDown.setTint(blueHex)})
        .on("pointerout", () => {this.fourDown.setTint(0xFFFFFF)});

        // if grader mode, add skip button
        if (graderMode) {
            this.skipButton = this.add.image(800, height/2, "skipButton").setOrigin(0, 0.5).setInteractive({
                hitArea: new Phaser.Geom.Rectangle(0, 0, 64, 32),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
                useHandCursor: true
            })
            .on("pointerdown", () => {
                this.tweens.add({
                    targets: this.latch,
                    y: this.latch.y - 30,
                    ease: 'Back.easeInOut',    
                    easeParams: [1],
                    duration: 1000,
                    repeat: 0,         
                    yoyo: false,
                    onComplete: () => {
                        lockOpened = true;
                        this.scene.start("imageScene", {image: "julyCard", prevScene: "frontScene"});
                    },
                    completeDelay: 500
                });
            })
            .on("pointerover", () => {this.skipButton.setTint(redHex)})
            .on("pointerout", () => {this.skipButton.setTint(0xFFFFFF)});
        }
    }

    // checks the inputted answer to answer array
    // plays lock open animation
    checkAnswer() {
        let curr = [this.spot1, this.spot2, this.spot3, this.spot4];
        if (JSON.stringify(this.correct) == JSON.stringify(curr)) {
            // animates the latch when correct
            this.tweens.add({
                targets: this.latch,
                y: this.latch.y - 30,
                ease: 'Back.easeInOut',    
                easeParams: [1],
                duration: 1000,
                repeat: 0,         
                yoyo: false,
                onComplete: () => {
                    lockOpened = true;
                    this.scene.start("imageScene", {image: "julyCard", prevScene: "frontScene"});
                },
                completeDelay: 500
            });
        } else {
            // screen shake when wrong
            this.cameras.main.shake(75, 0.005);
        }
    }

    // True modulo for js
    // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
    // used for flipping through the numbers on the lock
    mod(n, m) {
        return ((n % m) + m) % m;
    }
}