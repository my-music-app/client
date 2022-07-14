import axios from "axios"
import { url } from '../config/apiConfig'
import { SongModel } from "../model/songModel"
import { addSong, getSongs, deleteSong, editSong } from "./action"

export const addSongThunk = (song: SongModel) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.post(url, song,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
                //
                console.log("succes")
            dispatch(addSong(res.data))
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}
export const deleteSongThunk = (id: String) => {
    return async (dispatch: any) => {
        try {
            await axios.delete(url+`/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            dispatch(deleteSong(id));
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}
export const editSongThunk = (song: SongModel, id: String) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.put(url+`/${id}`, song,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            dispatch(editSong(res.data));
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}
export const addSongsThunk = () => {
    debugger;
    return async (dispatch: any) => {
        try {
            debugger
            const res = await axios.get(url);
            dispatch(getSongs(res.data));
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}
export const searchByArtistThunk = (search: String) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(url+`/byArtist/${search}`)
            dispatch(getSongs(res.data));
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}

