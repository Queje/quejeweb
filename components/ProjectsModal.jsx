import { Modal } from "react-bootstrap"

export default function ProjectsModal ({show, handleClose, title, work, details, icon1, icon2}) {

    return(
        <Modal 
            show={show} 
            onHide={handleClose} 
            centered
        >
            <Modal.Header closeButton closeVariant="white">
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {work}
                {details}
            </Modal.Body>
            <Modal.Footer>
                {icon1}
                {icon2}
            </Modal.Footer>
        </Modal>
    )
}