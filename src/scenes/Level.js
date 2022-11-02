
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// IntroPage
		const introPage = this.add.container(0, 0);

		// banner_img
		const banner_img = this.add.image(960, 540, "banner-img");
		introPage.add(banner_img);

		// sign_in
		const sign_in = this.add.image(960, 822, "sign_in");
		introPage.add(sign_in);

		// Select_Wallet
		const select_Wallet = this.add.container(0, 0);
		select_Wallet.visible = false;

		// wallete_bg
		const wallete_bg = this.add.image(960, 540, "wallete-bg");
		select_Wallet.add(wallete_bg);

		// coin_base_btn
		const coin_base_btn = this.add.image(960, 732, "coin-base-btn");
		select_Wallet.add(coin_base_btn);

		// metamask_btn
		const metamask_btn = this.add.image(960, 540, "metamask-btn");
		select_Wallet.add(metamask_btn);

		// trust_wallet_btn
		const trust_wallet_btn = this.add.image(960, 348, "trust-wallet-btn");
		select_Wallet.add(trust_wallet_btn);

		// settings_close
		const settings_close = this.add.image(1339, 167, "settings-close");
		settings_close.scaleX = 0.85;
		settings_close.scaleY = 0.85;
		select_Wallet.add(settings_close);

		this.sign_in = sign_in;
		this.select_Wallet = select_Wallet;
		this.coin_base_btn = coin_base_btn;
		this.metamask_btn = metamask_btn;
		this.trust_wallet_btn = trust_wallet_btn;
		this.settings_close = settings_close;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	sign_in;
	/** @type {Phaser.GameObjects.Container} */
	select_Wallet;
	/** @type {Phaser.GameObjects.Image} */
	coin_base_btn;
	/** @type {Phaser.GameObjects.Image} */
	metamask_btn;
	/** @type {Phaser.GameObjects.Image} */
	trust_wallet_btn;
	/** @type {Phaser.GameObjects.Image} */
	settings_close;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.sign_in.setInteractive().on('pointerdown',function (){
			this.select_Wallet.visible = true;
		},this)
		this.settings_close.setInteractive().on('pointerdown',function (){
			this.select_Wallet.visible = false;
		},this)

		this.coin_base_btn.setInteractive().on('pointerdown',function (){
			this.scene.start("ScenePlay")	
		},this)

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
