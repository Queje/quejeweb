import { Modal, OverlayTrigger, Tooltip, Button } from "react-bootstrap"
import Image from 'next/image'
import { useState } from "react"
import styles from '../Projects/ProjectsModal.module.css'

export default function ProjectsModal ({project}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <div className={styles.slideritem}>
            <Image
                src={project.imagesource}
                alt={project.alt} 
                height={ 304 }
                width={ 601 }
            />
            <div 
                id="neontext" 
                className={styles.slideroverlay} 
                onClick={handleShow}
            >
                <p id="text" className={styles.slidertext}>En savoir plus</p>
            </div>
            <Modal 
                show={show} 
                onClick={handleClose} 
                centered
                size="lg"
            >
                <Modal.Header 
                    closeButton 
                    closeVariant="white"  
                    className={styles.modalheader}
                >   
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.modalbody}>
                        <div className={styles.textcontainer}>
                            <p className={styles.modaltitle}>
                                {project.title}
                            </p>
                            <p id="textmodal">
                                {project.work}
                            </p>
                            <p id="textmodal">
                                {project.details}
                            </p>
                            <div className={styles.centerbutton}>
                                <a 
                                    href={project.url}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.modallink}
                                >
                                    <Button className={styles.modalbutton}>
                                        Visiter
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className={styles.overlay}></div>
                            <Image
                                src={project.background}
                                width={400}
                                height={300}
                                alt="cover image"
                                className={styles.modalimagestyle}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer
                    className={styles.modalfooter}
                >
                    { project.iconlist.map((icon) =>(
                        <OverlayTrigger
                            key={icon.id}
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="text">
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
        </div>
    )
}