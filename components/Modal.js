import React, { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CameraIcon } from '@heroicons/react/solid'

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const captionRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  const uploadPost = async () => {
    if (loading) return
    setLoading(true)

    // create post, add to filrestore
    // get the post ID
    // upload image to firebase storage with post id
    // get download URL from storage and update post with download URL
  }
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
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block transform overflow-hidden rounded-lg bg-white px-4
            pt-5 pb-4 text-left align-bottom shadow-xl transition-all
            sm:my-8 sm:w-full sm:max-w-sm sm:p-6
            "
            >
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    alt="selected file"
                    className="w-full cursor-pointer object-contain"
                    onClick={() => setSelectedFile(null)}
                  />
                ) : (
                  <div
                    className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full
                bg-red-100
                "
                    onClick={() => filePickerRef.current.click()}
                  >
                    <CameraIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>

              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Upload a photo
                  </Dialog.Title>
                  <div>
                    <input
                      onChange={addImageToPost}
                      ref={filePickerRef}
                      type="file"
                      hidden
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      ref={captionRef}
                      placeholder="Please enter a caption"
                      className="w-full border-none text-center focus:ring-0"
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="focus:shadow-outline inline-flex items-center justify-center rounded-md border
                   border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium
                    leading-5 text-white transition duration-150 
                    ease-in-out hover:bg-indigo-500 focus:outline-none"
                  >
                    Upload Post
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
