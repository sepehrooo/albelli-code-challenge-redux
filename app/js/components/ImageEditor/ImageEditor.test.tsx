/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import ImageEditor from '.'
import store from '../../store/store'

describe('Image Editor', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <ImageEditor />
            </Provider>
        )
    })
    test('image editor component should load with no errors', () => {
        expect(
            screen.queryByTestId('image-editor-component')
        ).toBeInTheDocument()
    })
    test('move up button should not show', () => {
        expect(screen.queryByTestId('move-up-button')).not.toBeInTheDocument()
    })
    test('move down button should not show', () => {
        expect(screen.queryByTestId('move-down-button')).not.toBeInTheDocument()
    })
    test('move left button should not show', () => {
        expect(screen.queryByTestId('move-left-button')).not.toBeInTheDocument()
    })
    test('move right button should not show', () => {
        expect(
            screen.queryByTestId('move-right-button')
        ).not.toBeInTheDocument()
    })
    test('zoom in button should not show', () => {
        expect(screen.queryByTestId('zoom-in-button')).not.toBeInTheDocument()
    })
    test('zoom out button should not show', () => {
        expect(screen.queryByTestId('zoom-out-button')).not.toBeInTheDocument()
    })
    test('submit button should not show', () => {
        expect(screen.queryByTestId('submit-button')).not.toBeInTheDocument()
    })
    test('canvas element should show', () => {
        expect(screen.queryByTestId('canvas')).not.toBeInTheDocument()
    })
})
