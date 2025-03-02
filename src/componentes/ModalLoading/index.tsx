import ReactLoading from 'react-loading'
import { GlobalStyle } from '../../globalStyle'
import { useGlobalContext } from '../../context/globalContext'
import { Box } from './style'

type Props={
    text:string
}
export default ({text}:Props)=>{
    const {stateModalLoading}=useGlobalContext()

    return <Box visible={stateModalLoading}>
        <div className="content">
           <div className="box-content">
             <p>{text}</p>
             <ReactLoading className='spin' type={'spinningBubbles'} color={`${GlobalStyle.bgTheme}`} height={'20%'} width={'20%'} />
           </div>
        </div>
    </Box>
}