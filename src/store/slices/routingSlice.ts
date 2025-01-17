import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RoutingState {
    href: string;
    pathname: string;
}

const initialState: RoutingState = {
    href: typeof window.location !== 'undefined' ? window.location.href : '',
    pathname:
        typeof window.location !== 'undefined' ? window.location.pathname : '/',
};

export const RoutingSlice = createSlice({
    name: 'routing',
    initialState,
    reducers: {
        setWindowLocation: (state, action: PayloadAction<Location>) => {
            state.href = action.payload.href;
            state.pathname = action.payload.pathname;
        },
        setUrl: (state, action: PayloadAction<string>) => {
            state.pathname = action.payload;
        },
    },
});

export const { setWindowLocation, setUrl } = RoutingSlice.actions;

export default RoutingSlice.reducer;
