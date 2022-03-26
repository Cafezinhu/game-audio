import { GameAudio } from "./GameAudio";
export declare class GameAudioManager {
    static createAudio(src: string, tag: string, baseVolume?: number): GameAudio;
    static addAudioToTag(audio: GameAudio, tag: string): void;
    static setTagVolume(volume: number, tag: string): void;
    static getTagVolume(tag: string): number | undefined;
    static setGeneralVolume(volume: number): void;
    static getGeneralVolume(): number;
}
