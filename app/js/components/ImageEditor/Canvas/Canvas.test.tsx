import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import Canvas from '.'
import store from '../../../store/store'

describe('Canvas', () => {
    test('renders without error', () => {
        render(
            <Provider store={store}>
                <Canvas />
            </Provider>
        )
        expect(screen.getByTestId('canvas')).toBeInTheDocument()
    })
})
