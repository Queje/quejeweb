import { Modal, OverlayTrigger, Tooltip, Button } from "react-bootstrap"
import Image from 'next/image'
import { useState } from "react"
import styles from '../Projects/ProjectsModal.module.css'
import { useTranslation } from 'next-i18next'

export default function ProjectsModal ({project}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { t } = useTranslation('common');
    
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
                <p id="text" className={styles.slidertext}>{t('projectoverlay')}</p>
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
                                        {t('projectbutton')}
                                    </Button>
                                </a>
                            </div>
                        </div>
                        { project.imagelist.map((image) => (
                            <div className={styles.modalwrapper} key={image.id}>
                                <Image
                                    src={image.imageitem}
                                    layout="responsive"
                                    width={600}
                                    height={300}
                                    alt={"website image " + image.id }
                                    className={styles.modalimagestyle}
                                />
                                <div className={styles.modaloverlay}></div>
                            </div>
                        ))}
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