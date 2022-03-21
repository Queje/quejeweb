import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import {  FaWix } from 'react-icons/fa/'
import { DiRuby } from 'react-icons/di'
import { SiRubyonrails, 
        SiPostgresql } from 'react-icons/si'

export default function AboutMeLogo2() {
    return(
        <>
            <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={
                <Tooltip id="text">
                Wix
                </Tooltip>
            }
            >
                <span>
                <FaWix size={60} />
                </span>
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                <Tooltip id="text">
                    Ruby
                </Tooltip>
                }
            >
                <span>
                <DiRuby size={54} />
                </span>
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                <Tooltip id="text">
                    Ruby on Rails
                </Tooltip>
                }
            >
                <span>
                <SiRubyonrails size={60} />
                </span>
            </OverlayTrigger>  
            
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                <Tooltip id="text">
                    PostgreSQL
                </Tooltip>
                }
            >
                <span>
                <SiPostgresql size={54} />
                </span>
            </OverlayTrigger>
        </>
    )
}