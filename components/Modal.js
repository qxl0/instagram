import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        opClose={setOpen}
      >
        <div className="flex items-end"></div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
