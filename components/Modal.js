import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
      <h1>Modal</h1>
      {open && <div>Modal Open</div>}
    </div>
  )
}

export default Modal
