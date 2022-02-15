import React, { useEffect, useRef } from 'react'
import useAppSelector from '../../../hooks/useAppSelector'
import drawImageToCanvas from '../../../utils/drawImageToCanvas'
import './canvas.scss'

function Canvas(): JSX.Element {
    const appState = useAppSelector((state) => state.app)
    const {
        width: canvasWidth,
        height: canvasHeight,
        image: { src, height, ratio, scale, width, x, y },
    } = appState
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const canvas = canvasRef.current
        if (src && canvas) {
            drawImageToCanvas({
                canvas,
                src,
                x,
                y,
                width,
                height,
                ratio,
                scale,
            })
        }
    }, [src, x, y, scale, ratio, width, height])
    return (
        <canvas
            data-testid="canvas"
            className="canvas"
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
        />
    )
}

export default Canvas
