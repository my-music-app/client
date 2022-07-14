import { Theme } from "@emotion/react";
import { createStyles, makeStyles } from "@mui/material"
import { url } from "inspector";
import Image from '../../../public/Image.jpg'

export const useStyles = makeStyles({
    Root:{
        backgroundImage: 'url($Image.jpg)'
    }
})