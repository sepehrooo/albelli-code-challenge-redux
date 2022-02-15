import React from 'react'
import useAppSelector from '../../../hooks/useAppSelector'
import createJsonAndDownload from '../../../utils/createJsonAndDownload'
import Button from '../../General/Button'
import Row from '../../General/Row'

function Submit(): JSX.Element {
    const appState = useAppSelector((state) => state.app)
    const submitHandler = (): void => {
        createJsonAndDownload(appState)
    }
    return (
        <Row className="image-editor__row row">
            <Button
                data-testid="submit-button"
                type="button"
                onClick={submitHandler}
                className="btn btn--submit"
            >
                Submit
            </Button>
        </Row>
    )
}

export default Submit
