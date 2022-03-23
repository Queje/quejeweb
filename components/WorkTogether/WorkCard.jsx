import { isMobile } from 'react-device-detect';
import dynamic from 'next/dynamic'

export default function WorkCard ({ number, title, text }) {

    const WorkCardDesktop = dynamic(() => import('./WorkCardDesktop'))
    const WorkCardMobile = dynamic(() => import('./WorkCardMobile'))
        
    return(
        <>
        {
            !isMobile && 
                <WorkCardDesktop 
                    number={number} 
                    title={title} 
                    text={text}
                />
        }
        {
            isMobile && 
                <WorkCardMobile 
                    number={number} 
                    title={title} 
                    text={text}
                />
        }
    </>
    )
}