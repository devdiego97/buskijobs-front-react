import { ReactNode } from "react"
import { Button, Tooltip, Whisper } from "rsuite"

type Props={
    placement:'top'
    | 'bottom'
    | 'right'
    | 'left'
    | 'bottomStart'
    | 'bottomEnd'
    | 'topStart'
    | 'topEnd'
    | 'leftStart'
    | 'leftEnd'
    | 'rightStart'
    | 'rightEnd'
    | 'auto'
    | 'autoVerticalStart'
    | 'autoVerticalEnd'
    | 'autoHorizontalStart'
    | 'autoHorizontalEnd',
    trigger:'active' | 'hover' | 'click' | 'focus' | 'none',
    children:ReactNode,
    text:string,
    color?:string
}


export default ({placement,trigger,children,text,color,...rest}:Props)=>{
    return  <Whisper
        placement={placement}
        trigger={trigger}
        speaker={<Tooltip  {...rest} color={color}  arrow={false}>{text}</Tooltip>}
      >
        {children}
      </Whisper>
}