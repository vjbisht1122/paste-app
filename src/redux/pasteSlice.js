import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}
const pasteSlice = createSlice({
    name: "pastes",
    initialState,
    reducers: {
        addToPastes: (state, action) => {
            const paste = action.payload;
            state.pastes.push(paste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast("Paste created successfully")

        },
        updateToPastes: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex((item)=>item.id === paste.id)

            if(index>=0){
                state.pastes[index] = paste;
                localStorage.setItem("pastes",JSON.stringify(state.pastes));

                toast("Paste updated successfully");

            }
        },

        resetAllPastes: (state, action) => {
            state.pastes=[];
            localStorage.removeItem("pastes");

        },
        removeFromPastes: (state, action) => {

            const pasteId = action.payload;
            console.log(pasteId);
            const index = state.pastes.findIndex((item)=> item.id === pasteId);

            if(index >= 0 ){
                state.pastes.splice(index , 1 );
                localStorage.setItem("pastes",JSON.stringify(state.pastes));

                toast("Paste deleted");
            }

        },
    },

})

export const {addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions
export default pasteSlice.reducer