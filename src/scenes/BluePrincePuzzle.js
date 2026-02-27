class BluePrincePuzzle extends Phaser.Scene {
    constructor() {
        super("blueScene");
    }

    init() {

        this.input.setPollAlways();

        this.buttonCooldownTime = 1000;

        this.colorArr = ["black", "red", "violet", "pink", "green", "yellow", "orange", "white"];
        this.travelArr = ["naval", "roads", "horseback", "trains", "aviation", "camels", "turtleback"];
        this.weatherArr = ["normal", "foggy", "hot", "rainy", "stormy", "snow", "windy"];
        this.societyArr = ["tribal", "agricultural", "martial", "metropolitan", "academic", "industrial", "spiritual", "poetic"];

        this.currColor = 0;
        this.currTravel = 0;
        this.currWeather = 0;
        this.currSociety = 0;

        this.rayAndMoteLocations = new Map([
            ["naval", {
                raysOn: [true, true, true, true, true, true, true, true],
                motesOn: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            }],
            ["roads", {
                raysOn: [false, true, false, true, false, true, false, true],
                motesOn: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            }],
            ["horseback", {
                raysOn: [false, false, true, true, false, true, true, false],
                motesOn: [false, true, false, true, false, false, false, false, false, false, false, false, false, true, false, true]
            }],
            ["trains", {
                raysOn: [false, true, false, false, true, false, false, true],
                motesOn: [true, false, false, false, true, false, true, false, false, false, true, false, true, false, false, false]
            }],
            ["aviation", {
                raysOn: [true, true, true, false, false, false, true, true],
                motesOn: [false, false, false, false, false, true, false, true, false, true, false, true, false, false, false, false]
            }],
            ["camels", {
                raysOn: [false, false, true, false, false, false, true, false],
                motesOn: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            }],
            ["turtleback", {
                raysOn: [true, true, true, false, true, false, true, false],
                motesOn: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            }]
        ]);

        this.correct = {
            color: "green",
            travel: "trains",
            weather: "snow",
            society: "academic"
        };

    }

    create() {
        this.cameras.main.setBackgroundColor(blackHex);

        this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        this.outerCircle = this.add.sprite(width/2, 162, "outerCircle").setOrigin(0.5);
        this.add.sprite(width/2, 25, "colorCircle").setOrigin(0.5, 0);
        this.add.sprite(width/2, 25, "centerSymbol").setOrigin(0.5, 0);

        this.colorRing = this.add.sprite(width/2, 63, `${this.colorArr[this.currColor]}-ring`).setOrigin(0.5, 0);

        this.allRays = [];
        for (let i=0;i<8;i++) {
            this.allRays[i] = this.add.sprite(width/2, 84, `${this.weatherArr[this.currWeather]}-ray`).setOrigin(0.5, 0);
            Phaser.Actions.RotateAround([this.allRays[i]], {x: width/2, y: 162}, (Math.PI*i)/4);
            this.allRays[i].setAngle(45*i);
        }

        this.allMotes = [];
        for (let i=0;i<16;i++) {
            this.allMotes[i] = this.add.sprite(width/2, 95, `${this.societyArr[this.currSociety]}-mote`).setOrigin(0.5, 0);
            Phaser.Actions.RotateAround([this.allMotes[i]], {x: width/2, y: 162}, (Math.PI*i)/8);
            this.allMotes[i].setAngle(22.5*i);
        }

        this.updateRayAndMoteLocation();  

        // buttons
        this.colorButton = this.add.image(width/2, 450, "colorSpinner").setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Circle(119, 119, 119),
            hitAreaCallback: Phaser.Geom.Circle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currColor = (this.currColor+1) % this.colorArr.length;
            console.log(this.colorArr[this.currColor]);
            this.updateSigil(this.colorButton);
        })
        .on("pointerover", () => {this.colorButton.setTint(blueHex)})
        .on("pointerout", () => {this.colorButton.setTint(0xFFFFFF)});

        this.travelButton = this.add.image(width/2, 450, "travelSpinner").setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Circle(88, 88, 88),
            hitAreaCallback: Phaser.Geom.Circle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currTravel = (this.currTravel+1) % this.travelArr.length;
            console.log(this.travelArr[this.currTravel]);
            this.updateSigil(this.travelButton);
        })
        .on("pointerover", () => {this.travelButton.setTint(blueHex)})
        .on("pointerout", () => {this.travelButton.setTint(0xFFFFFF)});
        
        this.weatherButton = this.add.image(width/2, 450, "raySpinner").setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Circle(51, 51, 51),
            hitAreaCallback: Phaser.Geom.Circle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currWeather = (this.currWeather+1) % this.weatherArr.length;
            console.log(this.weatherArr[this.currWeather]);
            this.updateSigil(this.weatherButton);
        })
        .on("pointerover", () => {this.weatherButton.setTint(blueHex)})
        .on("pointerout", () => {this.weatherButton.setTint(0xFFFFFF)});

        this.societyButton = this.add.image(width/2, 450, "moteSpinner").setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Circle(31, 31, 31),
            hitAreaCallback: Phaser.Geom.Circle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currSociety = (this.currSociety+1) % this.societyArr.length;
            console.log(this.societyArr[this.currSociety]);
            this.updateSigil(this.societyButton);
        })
        .on("pointerover", () => {this.societyButton.setTint(blueHex)})
        .on("pointerout", () => {this.societyButton.setTint(0xFFFFFF)});

        this.blueButton = this.add.image(width/2, 450, "blueButton").setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Circle(8, 8, 8),
            hitAreaCallback: Phaser.Geom.Circle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.checkAnswer(); 
        })
        .on("pointerover", () => {this.blueButton.setTint(0xBBBBBB)})
        .on("pointerout", () => {this.blueButton.setTint(0xFFFFFF)});

        this.buttons = this.add.group([this.colorButton, this.travelButton, this.weatherButton, this.societyButton, this.blueButton]);
    }

    updateRayAndMoteLocation() {
        let currRaysOn = this.rayAndMoteLocations.get(this.travelArr[this.currTravel]).raysOn;
        for (let i=0;i<8;i++) {
            this.allRays[i].setVisible(currRaysOn[i]);
        }
        
        let currMotesOn = this.rayAndMoteLocations.get(this.travelArr[this.currTravel]).motesOn;
        for (let i=0;i<16;i++) {
            this.allMotes[i].setVisible(currMotesOn[i]);
        }
    }

    updateSigil(button) {
        // turn off all buttons
        this.buttons.children.each( (button)=> {
            button.disableInteractive();
            button.setTint(0xFFFFFF);
        });

        // update the sigil sprites / locations
        switch (button) {
            case this.colorButton:
                this.colorRing.setVisible(false);
                this.colorRing.setTexture(`${this.colorArr[this.currColor]}-ring`);
                this.time.delayedCall(this.buttonCooldownTime, () => {
                    this.colorRing.setVisible(true);
                }, null, this);

                this.colorSpin = this.tweens.add({
                    targets: this.colorButton,
                    rotation: this.colorButton.rotation + Math.PI/4,
                    ease: 'Back',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                    duration: this.buttonCooldownTime,
                    repeat: 0,         
                    yoyo: false,
                });

                break;

            case this.travelButton:
                this.colorRing.setVisible(false);
                this.currColor = (this.currColor+3) % this.colorArr.length;
                this.colorRing.setTexture(`${this.colorArr[this.currColor]}-ring`);
                for (let i=0;i<8;i++) { 
                    this.allRays[i].setVisible(false);
                }
                for (let i=0;i<16;i++) { 
                    this.allMotes[i].setVisible(false);
                }
                this.time.delayedCall(this.buttonCooldownTime, () => {
                    this.updateRayAndMoteLocation();
                    this.colorRing.setVisible(true); 
                }, null, this);

                this.travelSpin = this.tweens.add({
                    targets: this.travelButton,
                    rotation: this.travelButton.rotation + Math.PI/2,
                    ease: 'Back',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                    duration: this.buttonCooldownTime,
                    repeat: 0,         
                    yoyo: false,
                });

                break;

            case this.weatherButton:
                this.colorRing.setVisible(false);
                this.currColor = (this.currColor+3) % this.colorArr.length;
                this.colorRing.setTexture(`${this.colorArr[this.currColor]}-ring`);
                for (let i=0;i<8;i++) { 
                    this.allRays[i].setVisible(false); 
                    this.allRays[i].setTexture(`${this.weatherArr[this.currWeather]}-ray`);
                }
                this.time.delayedCall(this.buttonCooldownTime, () => {
                    this.updateRayAndMoteLocation();
                    this.colorRing.setVisible(true); 
                }, null, this);

                this.weatherSpin = this.tweens.add({
                    targets: this.weatherButton,
                    rotation: this.weatherButton.rotation + Math.PI,
                    ease: 'Back',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                    duration: this.buttonCooldownTime,
                    repeat: 0,         
                    yoyo: false,
                });

                break;

            case this.societyButton:
                for (let i=0;i<16;i++) { 
                    this.allMotes[i].setVisible(false);
                    this.allMotes[i].setTexture(`${this.societyArr[this.currSociety]}-mote`);
                }
                this.time.delayedCall(this.buttonCooldownTime, () => {
                    this.updateRayAndMoteLocation(); 
                }, null, this);

                this.societySpin = this.tweens.add({
                    targets: this.societyButton,
                    rotation: this.societyButton.rotation + (4*Math.PI),
                    ease: 'Back',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                    duration: this.buttonCooldownTime,
                    repeat: 0,         
                    yoyo: false,
                });


                break;
        }

        // play outer ring spin anim
        this.outerSpin = this.tweens.add({
            targets: this.outerCircle,
            rotation: `+=${0.5}`,
            ease: 'Back',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: this.buttonCooldownTime,
            repeat: 0,         
            yoyo: false,
        }) 

        // make buttons deactivated while changing
        this.time.delayedCall(this.buttonCooldownTime, () => {
            this.buttons.children.each( (button)=> {
                button.setInteractive();
            })
        }, null, this);

    }

    checkAnswer() {
        if (
            this.colorArr[this.currColor] == this.correct.color &&
            this.travelArr[this.currTravel] == this.correct.travel &&
            this.weatherArr[this.currWeather] == this.correct.weather &&
            this.societyArr[this.currSociety] == this.correct.society
        ) {
            this.scene.start("menuScene");
        }
    }
}