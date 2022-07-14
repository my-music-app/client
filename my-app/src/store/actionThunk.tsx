import axios from "axios"
import { useState } from "react"
import { url } from '../config/apiConfig'
import { Genre, SongModel } from "../model/songModel"
import { addSong, getSongs, deleteSong, editSong } from "./action"

export const addSongThunk = (song: SongModel) => {
    const _song:{song:SongModel}={song:{
         _id:"",
        title:"",
        artist:"",
        genre: Genre.CLASSICAL,
        length: 0,
        price: 0}};
    return async (dispatch: any) => {
        try {
            const res = await axios.post(url, song,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
                _song.song=res.data;
            dispatch(addSong(_song))
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
    const _id:{id:String}={id:id}
    return async (dispatch: any) => {
        try {
            await axios.delete(url+`/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            dispatch(deleteSong(_id));
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
    const _song:{song:SongModel}={song:{
        _id:"",
        title:"",
        artist:"",
        genre: Genre.CLASSICAL,
        length: 0,
        price: 0}};

    return async (dispatch: any) => {
        try {
            const res = await axios.put(url+`/${id}`, song,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
                _song.song=res.data
            dispatch(editSong(_song));
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
    const _songs:{songs:SongModel[]}={songs:[]};
    return async (dispatch: any) => {
        try {
            debugger
            const res = await axios.get(url);
            _songs.songs=res.data;
            dispatch(getSongs(_songs));
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
    const _songs:{songs:SongModel[]}={songs:[]};
    return async (dispatch: any) => {
        try {
            const res = await axios.get(url+`/byArtist/${search}`)
            _songs.songs=res.data
            dispatch(getSongs(_songs));
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

