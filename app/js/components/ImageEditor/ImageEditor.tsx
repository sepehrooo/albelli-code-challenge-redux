import React from 'react'
import {
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    scaleDown,
    scaleUp,
} from '../../store/appSlice'
import Button from '../General/Button'
import Row from '../General/Row'
import Error from '../General/Error'
import Canvas from './Canvas'
import './image-editor.scss'
import useAppSelector from '../../hooks/useAppSelector'
import useAppDispatch from '../../hooks/useAppDispatch'
import Submit from './Submit'

function ImageEditor(): JSX.Element {
    const src = useAppSelector((state) => state.app.image.src)
    const message = useAppSelector((state) => state.app.message)
    const dispatch = useAppDispatch()

    return (
        <section data-testid="image-editor-component" className="image-editor">
            {src && (
                <>
                    <Row className="image-editor__row row">
                        <Button
                            data-testid="move-up-button"
                            onClick={() => dispatch(moveUp())}
                            className="btn"
                        >
                            Move Up &#8593;
                        </Button>
                    </Row>

                    <Row className="image-editor__row row">
                        <Button
                            data-testid="move-left-button"
                            onClick={() => dispatch(moveLeft())}
                            className="btn"
                        >
                            &#8592; Move Left
                        </Button>

                        <Canvas />
                        <Button
                            data-testid="move-right-button"
                            onClick={() => dispatch(moveRight())}
                            className="btn"
                        >
                            Move Right &#8594;
                        </Button>
                    </Row>

                    <Row className="image-editor__row row">
                        <Button
                            data-testid="move-down-button"
                            onClick={() => dispatch(moveDown())}
                            className="btn"
                        >
                            Move Down &#8595;
                        </Button>
                    </Row>
                    <Row className="image-editor__row row">
                        <Button
                            data-testid="zoom-in-button"
                            onClick={() => dispatch(scaleUp())}
                            className="btn"
                        >
                            Zoom In &#8853;
                        </Button>
                        <Button
                            data-testid="zoom-out-button"
                            onClick={() => dispatch(scaleDown())}
                            className="btn"
                        >
                            Zoom Out &#8854;
                        </Button>
                    </Row>
                    <Submit />
                </>
            )}
            {message && <Error data-testid="error-msg">Error: {message}</Error>}
        </section>
    )
}

export default ImageEditor
