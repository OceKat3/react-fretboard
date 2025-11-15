export type Scale = boolean[]

export type Tuning = number[]

export const STANDARD_TUNING = [
    4,
    4 + 5,
    4 + 5 * 2,
    4 + 5 * 3,
    4 + 5 * 3 + 4,
    4 + 5 * 4 + 4
].map(x => x % 12)

export const range = (n: number) => Array(n).fill(0).map((_, index) => index)

const scaleFromPitchClasses = (pitchClasses: number[]) => range(12).map((index) => pitchClasses.find((x) => x == index) !== undefined)

export function shiftScale(scale: Scale, shift: number): Scale {

    return range(12).map((index) => scale[(index - shift + 12) % 12])

}

const NATURAL_NOTE_NAMES: { [key: number]: string } = {
    0: 'C',
    2: 'D',
    4: 'E',
    5: 'F',
    7: 'G',
    9: 'A',
    11: 'B'
}

export function getNoteName(pitchClass: number, accidental: 'sharp' | 'flat' | 'both' = 'flat'): string {

    pitchClass = pitchClass % 12

    if (pitchClass in NATURAL_NOTE_NAMES) return NATURAL_NOTE_NAMES[pitchClass]

    if(accidental == 'both') 
        return `${getNoteName(pitchClass, 'flat')}/${getNoteName(pitchClass, 'sharp')}`

    if (accidental == 'flat')
        return NATURAL_NOTE_NAMES[(pitchClass + 1) % 12] + '♭'
    else
        return NATURAL_NOTE_NAMES[(pitchClass + 11) % 12] + '♯'

}

const MAJOR = scaleFromPitchClasses([0, 2, 4, 5, 7, 9, 11])
const MINOR = shiftScale(MAJOR, -3)
const HARMONIC_MINOR = scaleFromPitchClasses([0, 2, 3, 5, 7, 8, 11])

export function pitchClassesOnFretboard(tuning: Tuning) {

}

export { MAJOR, MINOR, HARMONIC_MINOR }