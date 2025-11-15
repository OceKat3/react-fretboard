import React, { useContext } from "react";
import './Fretboard.css'
import { getNoteName, range, Scale, Tuning } from "../../core/noteLogic";
import { ScaleContext } from "../../core/scaleContext";

interface Props {
    handleNotePressed: (pitchClass: number) => void
}

export default function Fretboard({ handleNotePressed }: Props) {

    const scaleContext = useContext(ScaleContext);

    const { scale, tuning, root } = scaleContext;

    const noteMarkup = (fret: number, string: number) => {
        const pitchClass = (fret + string) % 12;

        return (
            <td
                onClick={() => handleNotePressed(pitchClass)}
                key={fret}
            >
                <b className="note" style={{ visibility: scale[pitchClass] ? 'visible' : 'hidden' }}>
                    {getNoteName(pitchClass, 'sharp')}
                </b>
            </td>
        )
    }

    return (
        <table className="fretboard">
            <tbody>
                {[...tuning].reverse().map((openString, index) => {
                    return <tr key={index} >
                        {range(12).map(fret => noteMarkup(fret, openString))}
                    </tr>
                })}
            </tbody>
        </table>
    )
}