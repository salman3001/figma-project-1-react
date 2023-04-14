import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeStep: "address",
    stepperData: {
        address: { addressId: "", address: "" },
        services: {
            wash: { items: [] }, washAndIron: { items: [] }, ironing: { items: [], }, dryCleaning: { items: [] },
            serviceType: ""
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
        setServiceType: (state, { payload }) => {
            state.stepperData.services.serviceType = payload
        },
        addWashItem: (state, { payload }) => {
            state.stepperData.services.wash.items.push(payload)
        },
        removeWashItem: (state, { payload }) => {


            const newItems = state.stepperData.services.wash.items.filter(item => item.name !== payload.name)

            state.stepperData.services.wash.items = newItems
        },
        incrementWashItem: (state, { payload }) => {
            const newItems = state.stepperData.services.wash.items.map(item => {
                if (item.name === payload.name) {
                    item.quantity += 1
                    return item
                } else {
                    return item
                }
            })

            state.stepperData.services.wash.items = newItems

        },
        decrementWashItem: (state, { payload }) => {
            const newItems = state.stepperData.services.wash.items.map(item => {
                if (item.name === payload.name && item.quantity > 1) {
                    item.quantity -= 1

                    return item
                } else {
                    return item
                }
            })

            state.stepperData.services.wash.items = newItems
        },
        addWashAndIronItem: (state, { payload }) => {
            state.stepperData.services.washAndIron.items.push(payload)
        },
        removeWashAndIronItem: (state, { payload }) => {


            const newItems = state.stepperData.services.washAndIron.items.filter(item => item.name !== payload.name)

            state.stepperData.services.washAndIron.items = newItems
        },
        incrementWashAndIronItem: (state, { payload }) => {
            const newItems = state.stepperData.services.washAndIron.items.map(item => {
                if (item.name === payload.name) {
                    item.quantity += 1
                    return item
                } else {
                    return item
                }
            })

            state.stepperData.services.washAndIron.items = newItems

        },
        decrementWashAndIronItem: (state, { payload }) => {
            const newItems = state.stepperData.services.washAndIron.items.map(item => {
                if (item.name === payload.name && item.quantity > 1) {
                    item.quantity -= 1

                    return item
                } else {
                    return item
                }
            })

            state.stepperData.services.washAndIron.items = newItems
        },
        addIroningItem: (state, { payload }) => {
            state.stepperData.services.ironing.items.push(payload)
        },
        removeIroningItem: (state, { payload }) => {


            const newItems = state.stepperData.services.ironing.items.filter(item => item.name !== payload.name)

            state.stepperData.services.ironing.items = newItems
        },
        incrementIroningItem: (state, { payload }) => {
            const newItems = state.stepperData.services.ironing.items.map(item => {
                if (item.name === payload.name) {
                    item.quantity += 1
                    return item
                } else {
                    return item
                }
            })

            state.stepperData.services.ironing.items = newItems

        },
        decrementIroningItem: (state, { payload }) => {
            const newItems = state.stepperData.services.ironing.items.map(item => {
                if (item.name === payload.name && item.quantity > 1) {
                    item.quantity -= 1
                    return item
                } else {
                    return item
                }
            })

            state.stepperData.services.ironing.items = newItems
        },
        addDryCleanItem: (state, { payload }) => {
            state.stepperData.services.dryCleaning.items.push(payload)
        },
        removeDrycleanItem: (state, { payload }) => {


            const newItems = state.stepperData.services.dryCleaning.items.filter(item => item.name !== payload.name)

            state.stepperData.services.dryCleaning.items = newItems
        },
        incrementDryCleanItem: (state, { payload }) => {
            const newItems = state.stepperData.services.dryCleaning.items.map(item => {
                if (item.name === payload.name) {
                    item.quantity += 1
                    return item
                } else {
                    return item
                }
            })

            state.stepperData.services.dryCleaning.items = newItems

        },
        decrementDryCleanItem: (state, { payload }) => {
            const newItems = state.stepperData.services.dryCleaning.items.map(item => {
                if (item.name === payload.name && item.quantity > 1) {
                    item.quantity -= 1
                    console.log(item);
                    return item
                } else {
                    return item
                }
            })

            state.stepperData.services.dryCleaning.items = newItems
        },

        //start code here
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
export const { setActiveStep, resetStep, setService, setServiceType, addWashItem, removeWashItem, incrementWashItem, decrementWashItem, addWashAndIronItem, removeWashAndIronItem, incrementWashAndIronItem, decrementWashAndIronItem, addIroningItem, removeIroningItem, incrementIroningItem, decrementIroningItem, addDryCleanItem, removeDrycleanItem, incrementDryCleanItem, decrementDryCleanItem, setAddress, setCollection, setContact, setPayment } = orderNowSlice.actions

export default orderNowSlice.reducer