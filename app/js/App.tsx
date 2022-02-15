import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Header from './components/Header/Header'
import ImageEditor from './components/ImageEditor/ImageEditor'
import '../styles/app.scss'
import store from './store/store'

function App(): ReactElement {
    return (
        <Provider store={store}>
            <>
                <Header />
                <ImageEditor />
            </>
        </Provider>
    )
}

export default hot(module)(App)
