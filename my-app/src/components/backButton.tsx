import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
export  function BackButton() {
  const navigate=useNavigate();
    return (
        <>
          <ArrowBackIosNewIcon onClick={() => { navigate('/') }}/>
        </>
    )
}
export type {ArrowBackIosNewIcon}