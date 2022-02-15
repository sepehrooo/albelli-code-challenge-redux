import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'

const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>()

export default useAppDispatch
