
import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { SongModel } from "../songLandingPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface RowSongInput{
    _deleteSong:any,
    rowSong:SongModel
}

export const RowOfSong = ({rowSong,_deleteSong}:RowSongInput) => {
    const [row,setRow]=useState<SongModel>(rowSong);
    const navigate=useNavigate();
    return (
        <>
            <TableRow sx={{ marginLeft: 15 }}>
                <TableCell align="right" scope="row">{row.title}</TableCell>
                <TableCell align="right">{row.artist}</TableCell>
                <TableCell align="right">{row.genre}</TableCell>
                <TableCell align="right">{row.length}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <IconButton size="large" sx={{ marginRight: 2, marginLeft: 10, background: "rgb(206, 8, 58)", ":hover": { background: "rgb(53 44 173)" } }} onClick={() => { _deleteSong(row._id || "0") }}>
                    <DeleteIcon />
                </IconButton>
                <IconButton size="large" sx={{ marginRight: 5, marginLeft: 10, background: "rgb(206, 8, 58)", ":hover": { background: "rgb(53 44 173)" } }} onClick={() => { navigate(`/song/edit/${row._id}`) }}>
                    <ModeEditIcon />
                </IconButton>
            </TableRow>
        </>
    )
}