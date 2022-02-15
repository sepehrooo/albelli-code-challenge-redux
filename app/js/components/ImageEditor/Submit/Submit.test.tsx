import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import Submit from '.'
import store from '../../../store/store'

describe('Error', () => {
    test("render's without error", () => {
        render(
            <Provider store={store}>
                <Submit />
            </Provider>
        )
        expect(screen.getByTestId('submit-button')).toBeInTheDocument()
    })
})
