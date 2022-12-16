import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-bootstrap/esm/Modal";
import { Input } from "../../Inputs/InputStyle";
import { Button } from "../../Buttons/buttonStyle";


interface ModalProps {
    title?: string;
    setModalOpen?: React.Dispatch<React.SetStateAction<'edit' | 'create' | 'close'>>;
    editOrCreated: string;
}

export const OpenModal: React.FC<ModalProps> = ({
    title,
    setModalOpen,
    editOrCreated,
}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button style={{ fontSize: '1.8rem' }} onClick={handleShow}>
                Launch demo modal
            </Button>

            {show ?
                <Modal.Dialog >
                    <Modal.Header style={{ backgroundColor: '#ff7f2f', color: 'white', border: '1px solid rgb(210,210,210, 0.2)', borderRadius: '4px 4px 0px 0px' }}>
                        <IoCloseOutline style={{ position: 'absolute', left: '92%', justifyContent: 'end', color: 'white', height: '40px', width: '50px', fontSize: '12px', top: '4px' }} onClick={handleClose} />
                        <Modal.Title style={{ textAlign: 'center' }} ><h3>{title ? title : "Modal"}</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{editOrCreated !== 'delete' ?
                        <><div>
                            <p style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Nome:</p>
                            <Input
                                placeholder="Nome"
                                style={false ? { backgroundColor: 'rgb(210,210,210, 0.2)', color: 'white', border: '1px solid rgb(210,210,210, 0.2)' } : { backgroundColor: '##f0efef' }}
                                type="text"
                            ></Input>
                        </div>
                            <p style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
                                Abrv:</p>
                            <Input
                                placeholder="Abreviação"
                                style={false ? { backgroundColor: 'rgb(210,210,210, 0.2)', color: 'white', border: '1px solid rgb(210,210,210, 0.2)' } : { backgroundColor: '##f0efef' }}
                                type="text"
                            />
                        </>
                        : ''}

                    </Modal.Body>
                    <Modal.Footer>
                        {editOrCreated === 'delete' ? (
                            <Button style={{ width: '100%', fontSize: '1.8rem' }}>
                                Deletar
                            </Button>

                        ) : editOrCreated === 'edit' ? (
                            <Button style={{ width: '100%', fontSize: '1.8rem' }}>
                                Salvar
                            </Button>
                        ) : (
                            <Button style={{ width: '100%', fontSize: '1.8rem' }}>
                                Criar
                            </Button>
                        )}
                    </Modal.Footer>
                </Modal.Dialog>
                : ""}
        </div>
    )
};