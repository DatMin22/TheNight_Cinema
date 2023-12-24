import {combineReducers} from 'redux'
import { BookingPageReducer } from './BookingPagesSlice/slice'
import { UserReducer } from './LogInPagesSlice/slice'

export const rootReducer = combineReducers({
    BookingPage: BookingPageReducer,
    User: UserReducer,
})