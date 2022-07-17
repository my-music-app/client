import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { Button, FormHelperText, InputAdornment, OutlinedInput } from '@mui/material';
import { Genre, SongModel } from '../../model/songModel';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/backButton';
import { Isong } from '../wrapsComponent';
import './editSong.css'

export function EditSong({ _editSong, _songs }: Isong) {
    const songs: SongModel[] = _songs!;
    const { id } = useParams();
    const [firstEntry, setFirstEntry] = useState(true);
    const [song, setSong] = useState<SongModel>({
        _id: "",
        genre:"CLASSICAL",
        title: "",
        artist: "",
        length: 0,
        price: 0
    });

    useEffect(() => {
        setSong(songs.filter((s) => { return s._id === id })[0])
    }, [])
    const setGanerFromSelect = (event: SelectChangeEvent<Genre>) => {
        setFirstEntry(false);
        setSong({ ...song, genre: event.target.value as Genre });
    }
    const handleChange = (prop: keyof SongModel) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setSong({ ...song, [prop]: event.target.value });
        validate({ [prop]: event.target.value });
    };
    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        if (formIsValid()) {
            await _editSong(song, id);
        }
    }

    //validation
    const [errors, setErrors] = useState({} as any);
    const validate: any = (fieldValues = song) => {
        let temp: any = { ...errors }

        if ("title" in fieldValues)
            temp.title = fieldValues.title ? "" : "This field is required."

        if ("artist" in fieldValues) {
            temp.artist = fieldValues.artist ? "" : "This field is required."
        }
        if ("ganer" in fieldValues) {
            temp.ganer = fieldValues.genre ? "" : "This field is required."
        }
        if ("length" in fieldValues) {
            temp.length = fieldValues.length ? "" : "This field is required."
        }
        if ("price" in fieldValues) {
            temp.price = fieldValues.price ? "" : "This field is required."
        }
        setErrors({
            ...temp
        });
    }
    const formIsValid: any = (fieldValues = song) => {
        const isValid =
            fieldValues.title &&
            fieldValues.artist &&
            fieldValues.length &&
            fieldValues.price &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    }


    return (
        <>
            <div className='editSong'>
                <h1>Edit Song</h1>
                <form onSubmit={handleFormSubmit}>
                    <FormHelperText sx={{ color: 'white' }} id="outlined-weight-helper-text">Title</FormHelperText>
                    <TextField    {...(errors["title"] && { error: true, helperText: errors["title"] })}
                        value={song.title} id="outlined-basic" variant="outlined" onChange={handleChange("title")}
                        sx={{
                            backgroundColor: 'rgba(254, 254, 254, 0.877)',
                            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
                        }} />
                    <FormHelperText sx={{ color: 'white' }} id="outlined-weight-helper-text">Artist name</FormHelperText>
                    <TextField    {...(errors["artist"] && { error: true, helperText: errors["artist"] })}
                        value={song.artist} id="outlined-basic" variant="outlined" onChange={handleChange("artist")} required
                        sx={{
                            backgroundColor: 'rgba(254, 254, 254, 0.877)',
                            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
                        }} />
                    <FormHelperText sx={{ color: 'white' }} id="outlined-weight-helper-text">Ganer</FormHelperText>
                    <Select
                        {...(errors["ganer"] && { error: true, helperText: errors["artist"] })}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Ganre"
                        value={
                            // firstEntry ?Object.keys(Genre)[Object.values(Genre).indexOf(song.genre)] :
                            song.genre
                        }
                        onChange={setGanerFromSelect}
                        required
                        sx={{
                            backgroundColor: 'rgba(254, 254, 254, 0.877)',
                            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
                        }}>
                        <MenuItem value={"CLASSICAL"}>CLASSICAL</MenuItem>
                        <MenuItem value={"ROCK"}>ROCK</MenuItem>
                        <MenuItem value={"POP"}>POP</MenuItem>
                        <MenuItem value={"RAP"}>RAP</MenuItem>

                    </Select>
                    <FormHelperText sx={{ color: 'white' }} id="outlined-weight-helper-text">Length</FormHelperText>
                    <OutlinedInput
                        {...(errors["length"] && { error: true, helperText: errors["artist"] })}
                        id="outlined-adornment-length"
                        value={song.length}
                        onChange={handleChange('length')}
                        endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'Length',
                        }}
                        required
                        sx={{
                            backgroundColor: 'rgba(254, 254, 254, 0.877)',
                            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
                        }}
                    />
                    <br />
                    <FormHelperText sx={{ color: 'white' }} id="outlined-weight-helper-text">Price</FormHelperText>
                    <OutlinedInput
                        {...(errors["price"] && { error: true, helperText: errors["artist"] })}
                        id="outlined-adornment-price"
                        value={song.price}
                        onChange={handleChange('price')}
                        endAdornment={<InputAdornment position="end">$</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'Price',
                        }}
                        required
                        sx={{
                            backgroundColor: 'rgba(254, 254, 254, 0.877)',
                            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
                        }}
                    />
                    <br></br>
                    <Button sx={{ backgroundColor: 'rgba(254, 254, 254, 0.877)' }} variant="outlined" size="small" type="submit" disabled={!formIsValid()}>Edit song</Button>
                    <br></br>
                    <BackButton />
                </form>
            </div>
        </>
    );

}

