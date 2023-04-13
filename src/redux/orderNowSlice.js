import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeStep: "address",
    stepperData: {
        address: { addressId: "", address: "" },
        services: {
            wash: { items: [] }, washAndIron: { items: [] }, ironing: { items: [], }, dryCleaning: { items: [] }
        },
        collection: {
            collectionTime: {
                time: "",
                message: "",
                notes: ""
            }, deliveryTime: {
                time: "",
                message: "",
                notes: ""
            }, frquency: ""
        },

        contact: {
            name: "",
            surname: "",
            email: "",
            mobile: ""
        },
        payment: ""

    }
}

export const orderNowSlice = createSlice({
    name: 'orderNow',
    initialState,
    reducers: {
        setActiveStep: (state, { payload }) => {
            state.activeStep = payload
        },
        resetStep: (state) => {
            state.activeStep = "address"
            state.stepperData = {
                address: { addressId: "", address: "" },
                services: {
                    wash: { items: [] }, washAndIron: { items: [] }, ironing: { items: [], dryCleaning: [] },
                    collection: {
                        collectionTime: {
                            time: "",
                            message: "",
                            notes: ""
                        }, deliveryTime: {
                            time: "",
                            message: "",
                            notes: ""
                        }, frquency: ""
                    },
                    contact: {
                        name: "",
                        surname: "",
                        email: "",
                        mobile: ""
                    },
                    payment: ""

                }
            }
        },
        setAddress: (state, { payload }) => {
            state.stepperData.address = payload
        },
        setService: (state, { payload }) => {
            state.stepperData.services = payload
        },
        setCollection: (state, { payload }) => {
            state.stepperData.collection = payload
        },

        setContact: (state, { payload }) => {
            state.stepperData.contact = payload
        },
        setPayment: (state, { payload }) => {
            state.stepperData.payment = payload
        },

    }
})

// Action creators are generated for each case reducer function
export const { setActiveStep, resetStep, setService, setAddress, setCollection, setContact, setPayment } = orderNowSlice.actions

export default orderNowSlice.reducer