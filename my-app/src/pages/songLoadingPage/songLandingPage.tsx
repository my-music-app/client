
import { SongModel } from "../../model/songModel";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SearchIcon from '@mui/icons-material/Search';
// import { addSong, _addSongs, _deleteSong } from "../../store/action";
import Home from "../../components/home/home";
import './songLoadingPage.css'
import { Isong } from "../wrapsComponent";
import { RowOfSong } from "./subComponent/rowOfSong";


export function SongLandingPage({ _songs, _getData, _deleteSong, _searchByArtist }: Isong) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchByArtist = async () => {
    debugger
    if (search === "") {
      await _getData();
      return;
    }
    await _searchByArtist(search);
  }

  const tableCellsArr: string[] = ['title', 'artist', 'genre', 'length', 'price']
  return (
    <>
      <Home />
      <TableContainer sx={{ marginTop: 20 }} className='table' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow className='table'>
              {tableCellsArr.map((cellData: string) => (
                <TableCell sx={{ color: 'rgb(206, 8, 58)', fontSize: 'x-large' }} key={cellData} align='right'><b>{cellData}</b>
                </TableCell>
              ))}
              <TableCell>
                <TextField sx={{
                  backgroundColor: 'rgba(254, 254, 254, 0.877)',
                  ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
                }} id="filled-basic" label="search by artist" variant="filled" onChange={(e) => { setSearch(e.target.value) }} />
                <IconButton sx={{ marginLeft: 2, background: "rgb(206, 8, 58)", ":hover": { background: "rgb(53 44 173)" } }} onClick={() => { searchByArtist() }}><SearchIcon /></IconButton>
              </TableCell>
              <TableCell>
                <IconButton size="large" sx={{ background: "rgb(206, 8, 58)", ":hover": { background: "rgb(53 44 173)" }, padding: 2, display: 'flex', margin: 5 }} onClick={() => { navigate("song/add") }}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ marginLeft: 15 }}>
            {_songs?.map((row: any) => (
              <RowOfSong _deleteSong={_deleteSong}rowSong={row} key={row._id}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export type { SongModel }