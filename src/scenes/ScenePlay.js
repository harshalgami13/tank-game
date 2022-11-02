
// You can write more code here

/* START OF COMPILED CODE */

class ScenePlay extends Phaser.Scene {

	constructor() {
		super("ScenePlay");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// welcomescreen
		this.add.image(960, 541, "welcomescreen");

		// wallet
		this.add.image(175, 92, "wallet");

		// recruit_btn
		const recruit_btn = this.add.image(1613, 92, "recruit-btn");

		// settings_icon
		const settings_icon = this.add.image(1817, 92, "settings-icon");

		// inventory_img
		const inventory_img = this.add.image(131, 949, "inventory-img");

		// story_icon
		const story_icon = this.add.image(1777.25, 949, "story-icon");
		story_icon.scaleX = 1.5;
		story_icon.scaleY = 1.5;

		// playnow
		const playnow = this.add.image(960, 893, "playnow");

		// reward_icon
		this.add.image(1817, 233, "reward-icon");

		// text_1
		const text_1 = this.add.text(175, 92, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "2000";
		text_1.setStyle({ "fontFamily": "Normandia", "fontSize": "30px" });

		this.recruit_btn = recruit_btn;
		this.settings_icon = settings_icon;
		this.inventory_img = inventory_img;
		this.story_icon = story_icon;
		this.playnow = playnow;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	recruit_btn;
	/** @type {Phaser.GameObjects.Image} */
	settings_icon;
	/** @type {Phaser.GameObjects.Image} */
	inventory_img;
	/** @type {Phaser.GameObjects.Image} */
	story_icon;
	/** @type {Phaser.GameObjects.Image} */
	playnow;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.playnow.setInteractive().on('pointerdown',function (){
			this.scene.start('BackgroundSelect');	
		},this)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
