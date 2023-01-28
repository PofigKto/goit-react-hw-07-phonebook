import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "https://63bd511bd660062388a16152.mockapi.io/contacts"

export const fetchContacts = createAsyncThunk(
    "/contacts/fetchAll", async (_, thunkAPI) => {
        try {
            const response = await axios.get(BASE_URL)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact", async ({ name, phone }, thunkAPI) => {
        try {
            const response = await axios.post(BASE_URL, { name, phone }) 
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${contactId}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)