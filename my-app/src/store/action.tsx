import { SongModel } from "../model/songModel";

export const addSong = (song: SongModel) => {
    return { type: "ADD_SONG", payload: song }
}

export const deleteSong = (id: String) => {
    return { type: "DELETE_SONG", payload: id }
}

export const editSong = (song: SongModel) => {
    return { type: "EDIT_SONG", payload: song }
}

export const getSongs = (songs: SongModel[]) => {
    return { type: "GET_SONGS", payload: songs }
}

