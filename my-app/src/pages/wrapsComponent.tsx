import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AddSong } from "./addSong/addSong";
import { EditSong } from "./editSong/editSong";
import {SongLandingPage, SongModel } from "./songLoadingPage/songLandingPage";
import { addSongsThunk, addSongThunk, deleteSongThunk, editSongThunk, searchByArtistThunk } from '../store/actionThunk'
import type { } from 'redux-thunk/extend-redux'
import { store } from "..";

export type RootState = ReturnType<typeof store.getState>;

export interface Isong {
    _songs?: SongModel[],
    _getData?: any,
    _deleteSong?: any
    _searchByArtist?: any,
    _addSong?: any,
    _editSong?: any
  }
  
export function WrapsComponent() {
    const dispatch = useDispatch();
    const songs: SongModel[] = useSelector<RootState, { songs: SongModel[] }>((state) => state.songReducer).songs;
    const deleteSong = async (id: String) => {
        dispatch(deleteSongThunk(id));
    }
    const getData = () => {
        debugger;
        dispatch(addSongsThunk());
    }
    const addSong =  (song: SongModel) => {
        dispatch(addSongThunk(song))
    }
    const editSong = (song: SongModel, id: String) => {
        dispatch(editSongThunk(song, id));
    }
    const searchByArtist = (artistName: String) => {
        dispatch(searchByArtistThunk(artistName));
    }

    useEffect(() => {
        debugger
        getData();
    }, [])
    return (
        <>
            <Routes>
                <Route path="/" element={<SongLandingPage _songs={songs} _getData={getData} _deleteSong={deleteSong} _searchByArtist={searchByArtist} />} />
                <Route path="/song/edit/:id"element={<EditSong _editSong={editSong} _songs={songs} />} />
                <Route path="/song/add" element={<AddSong _addSong={addSong} />} />
            </Routes>
        </>
    )


}