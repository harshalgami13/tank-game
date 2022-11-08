class SoundManager {
    constructor(oSceneObj) {
        this.oSceneObj = oSceneObj
        this.ingameSound = this.oSceneObj.sound.add('ingameSound');
        this.clickSound = this.oSceneObj.sound.add('clickSound');
        this.bombartillery = this.oSceneObj.sound.add('bombartillery')
        this.defence = this.oSceneObj.sound.add('Defence 3')
        this.explosion = this.oSceneObj.sound.add('explosion')
        this.fireSound = this.oSceneObj.sound.add('Fireball damage 6')
        this.healTank = this.oSceneObj.sound.add('healTank')
        this.loseSound = this.oSceneObj.sound.add('loseSound')
        this.shootTank = this.oSceneObj.sound.add('shootTank')
        this.thunderDamage = this.oSceneObj.sound.add('thunder damage 5 ')
        this.winSound = this.oSceneObj.sound.add('winSound')
        this.soundArray = [
             this.bombartillery, this.defence, this.explosion, this.fireSound, this.healTank, this.loseSound, this.shootTank, this.thunderDamage, this.winSound
        ]
    }

    playSound(key, loop) {
        key.play();
        key.loop = loop;
    }

    pauseSound(key) {
        key.pause();
    }

    resumeSound(key) {
        key.resume();
    }

    stopSound(key, loop) {
        key.stop();
        key.loop = loop;
    }

    setSoundsVolume(volume) {
        for (let i = 0; i < this.soundArray.length; i++) {
            this.soundArray[i].setVolume(volume);
        }
    }
    setBackgroundVolume(volume) {
        this.ingameSound.setVolume(volume);
    }

    setClickSoundVolume(volume){
        this.clickSound.setVolume(volume)
    }
}