import { createSlice } from '@reduxjs/toolkit'
import { CanvasProps } from '../interfaces/CanvasProps.interface'
import inchToPixel from '../utils/inchToPixel'
import { canvasHeightInch, canvasWidthInch } from '../variables'

export const initialState: CanvasProps = {
    width: inchToPixel(canvasWidthInch),
    height: inchToPixel(canvasHeightInch),
    image: {
        src: null,
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        scale: 1,
        ratio: 1,
    },
    message: '',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        moveRight: (state) => {
            const {
                width: canvasWidth,
                image: { scale, ratio, width, x },
            } = state
            const newX = x - 0.05 * width
            const scaledImageWidth = width * scale * ratio

            if (scaledImageWidth - canvasWidth + newX >= 0) {
                state.image.x = newX
            } else {
                state.image.x = canvasWidth - scaledImageWidth
            }
        },
        moveLeft: (state) => {
            const {
                image: { width, x },
            } = state
            const newX = x + 0.05 * width

            if (newX <= 0) {
                state.image.x = newX
            } else {
                state.image.x = 0
            }
        },
        moveDown: (state) => {
            const {
                height: canvasHeight,
                image: { scale, ratio, height, y },
            } = state
            const newY = y - 0.05 * height
            const scaledImageHeight = height * scale * ratio

            if (scaledImageHeight - canvasHeight + newY >= 0) {
                state.image.y = newY
            } else {
                state.image.y = canvasHeight - scaledImageHeight
            }
        },
        moveUp: (state) => {
            const {
                image: { height, y },
            } = state
            const newY = y + 0.05 * height

            if (newY <= 0) {
                state.image.y = newY
            } else {
                state.image.y = 0
            }
        },
        scaleUp: (state) => {
            const {
                image: { scale },
            } = state
            const newScale = parseFloat((scale + 0.1).toFixed(1))

            state.image.scale = newScale
        },
        scaleDown: (state) => {
            const {
                width: canvasWidth,
                height: canvasHeight,
                image: { scale, width, height, ratio },
            } = state
            const newScale = parseFloat((scale - 0.1).toFixed(1))
            const scaledImageWidth = width * newScale * ratio
            const scaledImageHeight = height * newScale * ratio
            if (
                scaledImageWidth >= canvasWidth &&
                scaledImageHeight >= canvasHeight
            ) {
                state.image.scale = newScale
                state.image.x = 0
                state.image.y = 0
            }
        },
        uploadFile: (state, action) => {
            state.image = action.payload
            state.message = ''
        },
        setErrorMessage: (state, action) => {
            state.message = action.payload
        },
    },
})

export const {
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    scaleDown,
    scaleUp,
    setErrorMessage,
    uploadFile,
} = appSlice.actions

export default appSlice.reducer
