import './Page404.css'
import { Button } from '@mui/material/';
import { Link } from 'react-router-dom'
const Page404 = () => {
  return(
    <div className='errorPage'>
      <h1>404!</h1>
      <h2>Esta pagina no existe</h2>
      <Link to="/"><Button variant="contained">Go Back Home</Button></Link>
    </div>
  )
}

export default Page404;