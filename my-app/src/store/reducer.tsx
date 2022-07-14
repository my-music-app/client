import { SongModel } from "../model/songModel";

const initialState: { songs: SongModel[] } = {
    songs: []
};

//change to {song:SongModel}

type Action =
    | { type: "ADD_SONG", payload: SongModel}
    | { type: "DELETE_SONG", payload: String }
    | { type: "EDIT_SONG", payload: SongModel }
    | { type: "GET_SONGS", payload: SongModel[] }

export const songReducer = (state: { songs: SongModel[] } = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_SONG":
            return {
                ...state, songs: [...state.songs, action.payload]
            };
        case "DELETE_SONG":
            return {
                ...state, songs: state.songs.filter((event) => event._id !== action.payload)
            };
        case "EDIT_SONG":
            //find 
            return {
                ...state, songs: [...state.songs.map((event) => {
                    if (event._id === action.payload._id) {
                        event.title = action.payload.title;
                        event.artist = action.payload.artist;
                        event.genre = action.payload.genre;
                        event.price = action.payload.price;
                        event.length = action.payload.length;
                    }
                    return event;
                })]
            };
        case "GET_SONGS":
            return {
                ...state,
                songs: action.payload
            };
        default: return { ...state }
    }

}