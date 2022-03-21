import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FaHtml5, 
    FaCss3Alt, 
    FaBootstrap, 
    FaGithub, 
    FaWordpressSimple } from 'react-icons/fa/'

export default function AboutMeLogo1() {
    return(
        <>
            <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="text">
                html 5
              </Tooltip>
            }
            >
                <span>
                <FaHtml5 size={60}/>
                </span>
            </OverlayTrigger>
          
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                <Tooltip id="text">
                    css 3
                </Tooltip>
                }
            >
                <span>
                <FaCss3Alt size={60}/>
                </span>
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                <Tooltip id="text">
                    Bootstrap
                </Tooltip>
                }
            >
                <span>
                <FaBootstrap size={60} />
                </span>
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                <Tooltip id="text">
                    Github
                </Tooltip>
                }
            >
                <span>
                <FaGithub size={54} />
                </span>
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                <Tooltip id="text">
                    Wordpress
                </Tooltip>
                }
            >
                <span>
                <FaWordpressSimple size={54} />
                </span>
            </OverlayTrigger>
        </>
    )
}