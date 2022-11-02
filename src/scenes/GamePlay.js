
// You can write more code here

/* START OF COMPILED CODE */

class GamePlay extends Phaser.Scene {

	constructor() {
		super("GamePlay");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// genaral
		const genaral = this.add.container(0, 0);

		// backgroundImage
		const backgroundImage = this.add.sprite(960, 540, "Grassland");
		backgroundImage.scaleX = 1.6;
		backgroundImage.scaleY = 1.5;
		genaral.add(backgroundImage);

		// wallet
		const wallet = this.add.image(960, 179, "wallet");
		wallet.scaleX = 1.2;
		genaral.add(wallet);

		// wallet_1
		const wallet_1 = this.add.image(960, 121, "wallet");
		wallet_1.scaleX = 0.3;
		genaral.add(wallet_1);

		// settings_icon
		const settings_icon = this.add.image(1795, 100, "settings-icon");
		genaral.add(settings_icon);

		// homeicon
		const homeicon = this.add.image(123, 100, "homeicon");
		homeicon.scaleX = 1.35;
		homeicon.scaleY = 1.35;
		genaral.add(homeicon);

		// player_2_name_1
		const player_2_name_1 = this.add.text(960, 179, "", {});
		player_2_name_1.setOrigin(0.5, 0.5);
		player_2_name_1.text = "Player 1 Turn";
		player_2_name_1.setStyle({ "fontFamily": "Normandia", "fontSize": "25px" });
		genaral.add(player_2_name_1);

		// player_2_name_2
		const player_2_name_2 = this.add.text(960, 121, "", {});
		player_2_name_2.setOrigin(0.5, 0.5);
		player_2_name_2.text = "7";
		player_2_name_2.setStyle({ "fontFamily": "Normandia", "fontSize": "30px" });
		genaral.add(player_2_name_2);

		// player2
		const player2 = this.add.container(0, 0);

		// player_2_tank_2
		const player_2_tank_2 = this.add.image(1349, 591, "tank1");
		player_2_tank_2.scaleX = 0.9;
		player_2_tank_2.scaleY = 0.9;
		player_2_tank_2.flipX = true;
		player2.add(player_2_tank_2);

		// player_2_tank_3
		const player_2_tank_3 = this.add.image(1599, 846, "tank3");
		player_2_tank_3.scaleX = 0.9;
		player_2_tank_3.scaleY = 0.9;
		player_2_tank_3.flipX = true;
		player2.add(player_2_tank_3);

		// player_2_tank_1
		const player_2_tank_1 = this.add.image(1539, 354, "tank2");
		player_2_tank_1.scaleX = 0.9;
		player_2_tank_1.scaleY = 0.9;
		player_2_tank_1.flipX = true;
		player2.add(player_2_tank_1);

		// life_player_2
		const life_player_2 = this.add.image(1716, 177, "life-btn");
		player2.add(life_player_2);

		// shield_player_2
		const shield_player_2 = this.add.image(1636, 177, "shield-btn");
		player2.add(shield_player_2);

		// bomb_player_2
		const bomb_player_2 = this.add.image(1796, 177, "bomb-btn");
		player2.add(bomb_player_2);

		// player2_Name
		const player2_Name = this.add.image(1597, 100, "wallet");
		player2.add(player2_Name);

		// player_2_name
		const player_2_name = this.add.text(1597, 100, "", {});
		player_2_name.setOrigin(0.5, 0.5);
		player_2_name.text = "Player 2";
		player_2_name.setStyle({ "fontFamily": "Normandia", "fontSize": "25px" });
		player2.add(player_2_name);

		// fire_group
		const fire_group = this.add.container(0, 0);

		// player1
		const player1 = this.add.container(0, 0);

		// player_1_tank_1
		const player_1_tank_1 = this.add.sprite(513, 391, "popup-tank1");
		player_1_tank_1.scaleX = 2;
		player_1_tank_1.scaleY = 2;
		player1.add(player_1_tank_1);

		// player_1_tank_2
		const player_1_tank_2 = this.add.sprite(238, 639, "popup-tank1");
		player_1_tank_2.scaleX = 2;
		player_1_tank_2.scaleY = 2;
		player1.add(player_1_tank_2);

		// player_1_tank_3
		const player_1_tank_3 = this.add.sprite(489, 888, "popup-tank1");
		player_1_tank_3.scaleX = 2;
		player_1_tank_3.scaleY = 2;
		player1.add(player_1_tank_3);

		// shield_player_1
		const shield_player_1 = this.add.image(283, 177, "shield-btn");
		player1.add(shield_player_1);

		// life_player_1
		const life_player_1 = this.add.image(203, 177, "life-btn");
		player1.add(life_player_1);

		// bomb_player_1
		const bomb_player_1 = this.add.image(123, 177, "bomb-btn");
		player1.add(bomb_player_1);

		// player1_Name
		const player1_Name = this.add.image(318, 100, "wallet");
		player1.add(player1_Name);

		// player_1_name
		const player_1_name = this.add.text(318, 100, "", {});
		player_1_name.setOrigin(0.5, 0.5);
		player_1_name.text = "Player 1";
		player_1_name.setStyle({ "fontFamily": "Normandia", "fontSize": "25px" });
		player1.add(player_1_name);

		this.backgroundImage = backgroundImage;
		this.homeicon = homeicon;
		this.player_2_tank_2 = player_2_tank_2;
		this.player_2_tank_3 = player_2_tank_3;
		this.player_2_tank_1 = player_2_tank_1;
		this.fire_group = fire_group;
		this.player_1_tank_1 = player_1_tank_1;
		this.player_1_tank_2 = player_1_tank_2;
		this.player_1_tank_3 = player_1_tank_3;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	backgroundImage;
	/** @type {Phaser.GameObjects.Image} */
	homeicon;
	/** @type {Phaser.GameObjects.Image} */
	player_2_tank_2;
	/** @type {Phaser.GameObjects.Image} */
	player_2_tank_3;
	/** @type {Phaser.GameObjects.Image} */
	player_2_tank_1;
	/** @type {Phaser.GameObjects.Container} */
	fire_group;
	/** @type {Phaser.GameObjects.Sprite} */
	player_1_tank_1;
	/** @type {Phaser.GameObjects.Sprite} */
	player_1_tank_2;
	/** @type {Phaser.GameObjects.Sprite} */
	player_1_tank_3;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.backgroundImage.setTexture(sessionStorage.getItem("BackgroundImage"))

		this.player_1_tank_1.setTexture(sessionStorage.getItem("selected_image_0"))
		this.player_1_tank_2.setTexture(sessionStorage.getItem("selected_image_1"))
		this.player_1_tank_3.setTexture(sessionStorage.getItem("selected_image_2"))


		this.homeicon.setInteractive().on('pointerdown', function () {
			this.scene.start('ScenePlay')
		}, this)

		this.player_1_X = 0
		this.player_1_Y = 0

		this.player_2_X = 0
		this.player_2_Y = 0

		this.isPlayer_1_select = false
		this.isPlayer_2_select = false

		// player 1 tank selections
		this.player_1_tank_1.setInteractive().on('pointerdown', function () {
			if (this.isPlayer_1_select == false && this.isPlayer_2_select == false) {
				this.player_1_X = this.player_1_tank_1.x
				this.player_1_Y = this.player_1_tank_1.y
				this.glowCard()
				this.isPlayer_1_select = true
			}
		}, this)

		this.player_1_tank_2.setInteractive().on('pointerdown', function () {
			if (this.isPlayer_1_select == false && this.isPlayer_2_select == false) {
				this.player_1_X = this.player_1_tank_2.x
				this.player_1_Y = this.player_1_tank_2.y
				this.glowCard()
				this.isPlayer_1_select = true
			}
		}, this)

		this.player_1_tank_3.setInteractive().on('pointerdown', function () {
			if (this.isPlayer_1_select == false && this.isPlayer_2_select == false) {
				this.player_1_X = this.player_1_tank_3.x
				this.player_1_Y = this.player_1_tank_3.y
				this.glowCard()
				this.isPlayer_1_select = true
			}
		}, this)

		// player 2 tank selections
		this.player_2_tank_1.setInteractive().on('pointerdown', function () {
			if (this.isPlayer_1_select == true && this.isPlayer_2_select == false) {
				this.player_2_X = this.player_2_tank_1.x
				this.player_2_Y = this.player_2_tank_1.y
				this.fireAnimation()
				this.isPlayer_1_select = false
				this.isPlayer_2_select == true
			}
		}, this)

		this.player_2_tank_2.setInteractive().on('pointerdown', function () {
			if (this.isPlayer_1_select == true && this.isPlayer_2_select == false) {
				this.player_2_X = this.player_2_tank_2.x
				this.player_2_Y = this.player_2_tank_2.y
				this.fireAnimation()
				this.isPlayer_1_select = false
				this.isPlayer_2_select == true
			}
		}, this)

		this.player_2_tank_3.setInteractive().on('pointerdown', function () {
			if (this.isPlayer_1_select == true && this.isPlayer_2_select == false) {
				this.player_2_X = this.player_2_tank_3.x
				this.player_2_Y = this.player_2_tank_3.y
				this.fireAnimation()
				this.isPlayer_1_select = false
				this.isPlayer_2_select == true
			}
		}, this)



	}

	glowCard() {
		this.glow_card = this.add.image(this.player_1_X, this.player_1_Y, "glow-card");
		this.glow_card.scaleX = 1.5;
		this.glow_card.scaleY = 1.5;
		this.fire_group.add(this.glow_card);

		this.glowAni = this.tweens.add({
			targets: this.glow_card,
			scaleX: 1.55,
			scaleY: 1.55,
			duration: 200
		})

	}

	fireAnimation() {
		this.fire = this.add.image(this.player_1_X, this.player_1_Y, "fire");

		this.red_glow = this.add.image(this.player_2_X, this.player_2_Y, "red-glow");
		this.red_glow.scaleX = 1.5;
		this.red_glow.scaleY = 1.5;
		this.fire_group.add(this.red_glow);

		if (this.player_1_X == 489 && this.player_1_Y == 888 && this.player_2_X != 1599 && this.player_2_Y != 846) {
			this.fire.angle = -46
		}
		else {
			this.fire.angle = -26;
		}
		this.fire_group.add(this.fire);

		this.fireAni = this.tweens.add({
			targets: this.fire,
			duration: 300,
			delay: 200,
			props: {
				x: this.player_2_X,
				y: this.player_2_Y,
			},
			onComplete: () => {
				this.fire.destroy()
				this.glow_card.destroy()
				this.red_glow.destroy()
				this.explode3 = this.add.image(this.player_2_X, this.player_2_Y, "explode-3").setAlpha(0.7).setScale(1.5)
				this.explode1 = this.add.image(this.player_2_X, this.player_2_Y, "explode-1")
				this.explode2 = this.add.image(this.player_2_X, this.player_2_Y, "explode-2").setAlpha(1.5).setScale(1.3)
				this.sparkle = this.add.image(this.player_2_X, this.player_2_Y, "sparkle").setScale(0.5)
				this.bombAni = this.tweens.add({
					targets: this.explode3,
					// duration: 2000,
					completeDelay: 800,
					onComplete: () => {
						this.explode3.destroy()
						this.explode1.destroy()
						this.explode2.destroy()
						this.sparkle.destroy()
					}
				})
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
