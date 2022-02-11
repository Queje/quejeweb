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
                size="lg"
            >
                <Modal.Header 
                    closeButton 
                    closeVariant="white"  
                    className={styles.modalheader}
                >   
                    
                    <Image
                        src={project.background}
                        layout="fill"
                        quality={80}
                        alt="cover image"
                        className={styles.modalimagestyle}
                    />
                    
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.modaltitle}>
                        <Image 
                            className={styles.logoitem}
                            src={project.logosource}
                            alt={project.logoalt}
                            width={100}
                            height={100}
                        />
                        <span
                            className={styles.logotitle}
                        >
                            {project.title}
                        </span>
                    </div>
                    <div>
                        <p>
                            {project.work}
                        </p>
                        <p>
                            {project.details}
                        </p>
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