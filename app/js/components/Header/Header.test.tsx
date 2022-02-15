import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import Header from '.'
import store from '../../store/store'

describe('renders components and children with no errors', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )
    })
    test('renders component without errors', () => {
        expect(screen.getByTestId('header-component')).toBeInTheDocument()
    })
    test('renders logo without errors', () => {
        expect(screen.getByTestId('logo')).toBeInTheDocument()
    })
    test('renders file upload button without errors', () => {
        expect(screen.getByTestId('file-upload-button')).toBeInTheDocument()
    })
    test('renders file upload input without errors', () => {
        expect(screen.getByTestId('logo')).toBeInTheDocument()
    })
})
