import { SongModel } from "../model/songModel";

export const addSong = (song: {song:SongModel}) => {
    return { type: "ADD_SONG", payload: song }
}

export const deleteSong = (id: {id:String}) => {
    return { type: "DELETE_SONG", payload: id }
}

export const editSong = (song:{song:SongModel}) => {
    return { type: "EDIT_SONG", payload: song }
}

export const getSongs = (songs: {songs:SongModel[]}) => {
    return { type: "GET_SONGS", payload: songs }
}

