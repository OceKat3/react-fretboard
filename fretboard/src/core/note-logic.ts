import './modFix'

export type Scale = boolean[]

const range = (n:number) => Array(n).map((_, index) => index)

const scaleFromPitchClasses = (pitchClasses:number[]) => range(12).map((index) => pitchClasses.find((x) => x == index) !== undefined)

export function shiftScale(scale:Scale, shift:number):Scale {

    return range(12).map((index) => scale[(index + shift) % 12])

}

const MAJOR = scaleFromPitchClasses([0,2,4,5,7,9,11])
const MINOR = shiftScale(MAJOR, -4)