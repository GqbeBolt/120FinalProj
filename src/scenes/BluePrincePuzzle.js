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

    }

    create() {
        this.cameras.main.setBackgroundColor(blackHex);

        this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        this.outerCircle = this.add.sprite(width/2, 162, "outerCircle").setOrigin(0.5);
        this.add.sprite(width/2, 25, "colorCircle").setOrigin(0.5, 0);
        this.add.sprite(width/2, 25, "centerSymbol").setOrigin(0.5, 0);

        this.colorRing = this.add.sprite(width/2, 50, `${this.currColor}-ring`);

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
        this.colorText = this.add.bitmapText(width/2, height/2+90, "typedFont", "Color", 24).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currColor = (this.currColor+1) % this.colorArr.length;
            console.log(this.colorArr[this.currColor]);
            this.updateSigil(this.colorText);
        })
        .on("pointerover", () => {this.colorText.setTint(redHex)})
        .on("pointerout", () => {this.colorText.setTint(0xFFFFFF)});

        this.travelText = this.add.bitmapText(width/2, height/2+120, "typedFont", "Travel", 24).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currTravel = (this.currTravel+1) % this.travelArr.length;
            console.log(this.travelArr[this.currTravel]);
            this.updateSigil(this.travelText);
        })
        .on("pointerover", () => {this.travelText.setTint(redHex)})
        .on("pointerout", () => {this.travelText.setTint(0xFFFFFF)});

        this.weatherText = this.add.bitmapText(width/2, height/2+150, "typedFont", "Weather", 24).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currWeather = (this.currWeather+1) % this.weatherArr.length;
            console.log(this.weatherArr[this.currWeather]);
            this.updateSigil(this.weatherText);
        })
        .on("pointerover", () => {this.weatherText.setTint(redHex)})
        .on("pointerout", () => {this.weatherText.setTint(0xFFFFFF)});

        this.societyText = this.add.bitmapText(width/2, height/2+180, "typedFont", "Society", 24).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currSociety = (this.currSociety+1) % this.societyArr.length;
            console.log(this.societyArr[this.currSociety]);
            this.updateSigil(this.societyText);
        })
        .on("pointerover", () => {this.societyText.setTint(redHex)})
        .on("pointerout", () => {this.societyText.setTint(0xFFFFFF)});

        this.buttons = this.add.group([this.colorText, this.travelText, this.weatherText, this.societyText]);

        

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
            case this.colorText:
                this.colorRing.setVisible(false);
                this.colorRing.setTexture(`${this.colorArr[this.currColor]}-ring`);
                this.time.delayedCall(this.buttonCooldownTime, () => {
                    this.colorRing.setVisible(true);
                }, null, this);
                break;

            case this.travelText:
                for (let i=0;i<8;i++) { 
                    this.allRays[i].setVisible(false);
                }
                for (let i=0;i<16;i++) { 
                    this.allMotes[i].setVisible(false);
                }
                this.time.delayedCall(this.buttonCooldownTime, () => {
                    this.updateRayAndMoteLocation();
                }, null, this);
                break;

            case this.weatherText:
                for (let i=0;i<8;i++) { 
                    this.allRays[i].setVisible(false); 
                    this.allRays[i].setTexture(`${this.weatherArr[this.currWeather]}-ray`);
                }
                this.time.delayedCall(this.buttonCooldownTime, () => {
                    this.updateRayAndMoteLocation(); 
                }, null, this);
                break;

            case this.societyText:
                for (let i=0;i<16;i++) { 
                    this.allMotes[i].setVisible(false);
                    this.allMotes[i].setTexture(`${this.societyArr[this.currSociety]}-mote`);
                }
                this.time.delayedCall(this.buttonCooldownTime, () => {
                    this.updateRayAndMoteLocation(); 
                }, null, this);
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
}