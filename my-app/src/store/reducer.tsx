import { SongModel } from "../model/songModel";

const initialState: { songs: SongModel[] } = {
    songs: []
};

//change to {song:SongModel}

type Action =
    | { type: "ADD_SONG", payload: {song:SongModel}}
    | { type: "DELETE_SONG", payload: {id:String} }
    | { type: "EDIT_SONG", payload: {song:SongModel} }
    | { type: "GET_SONGS", payload:{songs: SongModel[] }}

export const songReducer = (state: { songs: SongModel[] } = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_SONG":
            return {
                ...state, songs: [...state.songs, action.payload.song]
            };
        case "DELETE_SONG":
            return {
                ...state, songs: state.songs.filter((event) => event._id !== action.payload.id)
            };
        case "EDIT_SONG":
            //find 
            return {
                ...state, songs: [...state.songs.map((event) => {
                    if (event._id === action.payload.song._id) {
                        event.title = action.payload.song.title;
                        event.artist = action.payload.song.artist;
                        event.genre = action.payload.song.genre;
                        event.price = action.payload.song.price;
                        event.length = action.payload.song.length;
                    }
                    return event;
                })]
            };
        case "GET_SONGS":
            return {
                ...state,
                songs: action.payload.songs
            };
        default: return { ...state }
    }

}