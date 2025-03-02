import ReactLoading from 'react-loading'
 import { LoadingType } from 'react-loading'
import { Container } from './style'

type Props={
    type:LoadingType,
    color:string,
    text:string
}
export default ({type,color,text}:Props) => (
    <Container>
      <div className="card">
        <p className="text">{text}</p>
        <ReactLoading type={type} color={color} height={67} width={75} />
      </div>
    </Container>
);
 
