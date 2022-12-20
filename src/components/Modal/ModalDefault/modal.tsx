import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-bootstrap/esm/Modal";
import { Input } from "../../Inputs/InputStyle";
import { Button } from "../../Buttons/buttonStyle";
import { If } from "../../../operators";
import { ComboBoxDefault } from "../../ComboBox/ComboBoxDefault/ComboBox";
import { Blocks } from "../../Card-Block/Card-Block-Default/card";
import { CheckBoxDefault } from "../../CheckBox/CheckBoxDefault/CheckBox";


interface ModalProps {
    title: string;
    editOrCreated: 'edit' | 'create' | 'delete' | 'close';
    isHistory?: boolean;
    deleteParameter?: string;
    parametersListEdit?: string[];
}

export const OpenModal: React.FC<ModalProps> = ({
    title,
    editOrCreated,
    isHistory,
    deleteParameter,
    parametersListEdit
}) => {

    const [modalOpen, setModalOpen] = useState<'edit' | 'create' | 'delete' | 'close'>(editOrCreated)
    const [leafParentTrue, setLeafParent] = useState<boolean>(false);



    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            {isHistory !== undefined && isHistory ?
                <Button active={true} width={15} style={{ fontSize: '1.8rem' }} onClick={() => setModalOpen(editOrCreated)}>
                    Abrir modal
                </Button>
                : ''}
            {modalOpen !== 'close' ?
                <Modal.Dialog >
                    <Modal.Header style={{ backgroundColor: '#ff7f2f', color: 'white', border: '1px solid rgb(210,210,210, 0.2)', borderRadius: '4px 4px 0px 0px' }}>
                        <IoCloseOutline style={{ position: 'absolute', left: '92%', justifyContent: 'end', color: 'white', height: '40px', width: '50px', fontSize: '12px', top: '4px' }} onClick={() => setModalOpen('close')} />
                        <Modal.Title style={{ textAlign: 'center' }} ><h3>{title}</h3></Modal.Title>
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
                        {editOrCreated === 'edit' ?
                            <ComboBoxDefault widthSize={100} option={parametersListEdit}></ComboBoxDefault>
                            : ''}
                        {editOrCreated === 'create' ?
                            <>
                                <p>Arquivo KML</p>
                                <CheckBoxDefault changeBoolean={leafParentTrue} onChange={() => setLeafParent(!leafParentTrue)} />
                                {!leafParentTrue ? <div>TestCheck</div> : ''}
                            </>
                            : ''}
                        {editOrCreated === 'delete' ? <div>
                            Deseja realmente excluir o bloco <b>{deleteParameter} ?</b>
                        </div> : ''}

                    </Modal.Body>
                    <Modal.Footer>
                        {editOrCreated === 'delete' ? (
                            <Button active={true} width={100} style={{ width: '100%', fontSize: '1.8rem' }}>
                                Deletar
                            </Button>

                        ) : editOrCreated === 'edit' ? (
                            <Button active={true} width={100} style={{ width: '100%', fontSize: '1.8rem' }}>
                                Salvar
                            </Button>
                        ) : (
                            <Button active={true} width={100} style={{ width: '100%', fontSize: '1.8rem' }}>
                                Criar
                            </Button>
                        )}
                    </Modal.Footer>
                </Modal.Dialog>
                : ""}
        </div>
    )
};