import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import Image from 'next/image'
import { useState } from "react"
import styles from '../styles/Home.module.css'

export default function ProjectsModal ({project}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Image
                className={styles.SliderItem}
                src={project.imagesource}
                alt={project.alt} 
                onClick={handleShow}
            />
            <Modal 
                show={show} 
                onHide={handleClose} 
                centered
            >
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title>
                        {project.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {project.work}
                    {project.details}
                </Modal.Body>
                <Modal.Footer>
                    { project.iconlist.map((icon) =>(
                        <OverlayTrigger
                            key={icon.id}
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                            <Tooltip className={styles.text}>
                                {icon.tooltip}
                            </Tooltip>
                            }
                        >
                        <span>
                            <icon.name key={icon.id} size={40}/>
                        </span>
                      </OverlayTrigger>
                    ))}
                </Modal.Footer>
            </Modal>
        </>
    )
}