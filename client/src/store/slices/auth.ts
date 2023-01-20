import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { UserProfileType } from '../../types'

// const coreUrl = import.meta.env.VITE_CORE_URL as string

interface IUser {
    user: UserProfileType | null
    isLoggedIn: boolean
}

const initialState:IUser = {
    user: null,
    isLoggedIn: false
}

export const getProfile = createAsyncThunk('get-profile', async(userId: string, thunkAPI) => {
    try {
        const response = await fetch(``, {
            method: 'GET',
        })
        const data = await response.json()
        return data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.message)
    }
})

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
            localStorage.setItem('teamwork-member', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.user = null
            state.isLoggedIn = false
            localStorage.removeItem('team-menber')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.pending, (state, action) => {}),
        builder.addCase(getProfile.fulfilled, (state, action) => {}),
        builder.addCase(getProfile.rejected, (state, action) => {})
    },
})

export const {login, logout} = auth.actions
export default auth.reducer