import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { Registration } from 'components/RegistrationForm/RegistrationForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const Layout = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const onShowModal = () => setIsShowModal(true);
  
    const onCloseModal = () => setIsShowModal(false);

    const createUser = data => {
        const UserId = uuidv4();
        const User = {
          ...data,
          id: UserId,
        };
        console.log(User);
      };

  return (
    <>
      <Header showModal={onShowModal} />
      <Outlet />
      {isShowModal && (
        <Modal closeModal={onCloseModal}>
          <Registration createUser={createUser} closeModal={onCloseModal} />
        </Modal>)}
    </>
  )
};
