export class GameAudio extends Audio {
    constructor(src, baseVolume) {
        super(src);
        if (baseVolume) {
            this.baseVolume = baseVolume;
            this.volume = baseVolume;
            return;
        }
        this.baseVolume = 1;
    }
}
