import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        onClose={setOpen}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div
          className="flex min-h-[800px] items-end justify-center px-4 pt-4 pb-20 
          text-center sm:block sm:min-h-screen sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="inline-block transform overflow-hidden rounded-lg bg-white px-4
            pt-5 pb-4 text-left align-bottom shadow-xl transition-all
            sm:my-8 sm:w-full sm:max-w-sm sm:p-6
            "
            >
              <h1>Hello</h1>{' '}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
