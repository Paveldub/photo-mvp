import Modal from 'react-modal'
import './styles.scss'

Modal.setAppElement('#root')

export const ModalComponent = ({ onClose, children, isOpen, opacity }) => (
  <Modal
    isOpen={isOpen}
    onAfterOpen={() => {
      document.body.style.overflow = 'hidden'
    }}
    onAfterClose={() => {
      document.body.removeAttribute('style')
    }}
    className="modal"
    contentLabel="modal"
    overlayClassName={opacity ? 'overlay overlay__opacity' : 'overlay'}
    // shouldCloseOnOverlayClick={true}
    onRequestClose={onClose}
  >
    {children}
  </Modal>
)
