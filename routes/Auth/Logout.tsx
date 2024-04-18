import {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import {Modal,ModalContent,ModalAction} from '../../theme/daisyui'
import {useAuth} from '../../contexts'
import { useToggle } from '../../hooks'

export default function Logout() {

  const [open, toggleOpen] = useToggle(true)

  const navigate = useNavigate()
  const {logout} = useAuth()
  const onAccept = useCallback(() => {
    logout(()=> {
      toggleOpen()
      navigate('/')
    })
  },[navigate, toggleOpen,logout])

  const onCancel = useCallback(() => {
    toggleOpen()
    navigate(-1)
  },[navigate, toggleOpen])

    return ( 
      <Modal open={open}>
        <ModalContent
        closeIconClassName='btn-primary btn-outline'
        onCloseIconClicked={onCancel}>
          <p className='text-xl text-center'>Are you sure you want to log out?</p>
          <ModalAction>
            <button className='btn btn-primary btn-sm' onClick={onAccept}>
              Logout
            </button>
            <button className='btn btn-primary btn-sm' onClick={onCancel}>
              Cancel
            </button>
          </ModalAction>
        </ModalContent>
      </Modal>
    )
  }


  
  