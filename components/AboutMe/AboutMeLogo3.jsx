import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import {  FaReact } from 'react-icons/fa/'
import { 
    SiJavascript, 
    SiNextdotjs, 
    SiHeroku, 
    SiVercel } from 'react-icons/si'

export default function AboutMeLogo3() {
    return(
        <>
            <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="text">
                Javascript
              </Tooltip>
            }
          >
            <span>
              <SiJavascript size={54} />
            </span>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="text">
                React
              </Tooltip>
            }
          >
            <span>
              <FaReact size={54} />
            </span>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="text">
                NextJs
              </Tooltip>
            }
          >
            <span>
              <SiNextdotjs size={54} />
            </span>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="text">
                Heroku
              </Tooltip>
            }
          >
            <span>
              <SiHeroku size={54} />
            </span>
          </OverlayTrigger>  
          
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="text">
                Vercel
              </Tooltip>
            }
          >
            <span>
              <SiVercel size={54} />
            </span>
          </OverlayTrigger>
        </>
    )
}