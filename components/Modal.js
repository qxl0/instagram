import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState)
  return <Transition.Root></Transition.Root>
}

export default Modal
