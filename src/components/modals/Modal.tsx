import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    width?: string
}

const Modal = ({ children, isOpen, onClose, width }: Props) => {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-white bg-opacity-20 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className={`relative transform  overflow-hidden  rounded-lg  bg-zinc-900  p-3 text-left  shadow-xl  transition-all ${width ? width : 'w-full sm:max-w-xl'}`} >
                                <div
                                    className="absolute top-3 right-2"
                                >
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="rounded-full focus:outline-none focus:ring-0 hover:bg-gray-500 duration-300"
                                    >
                                        <span className="sr-only">
                                            Close panel
                                        </span>
                                        <IoMdClose size=
                                            {24}
                                            className="text-gray-300"
                                        />
                                    </button>
                                </div>
                                <div className=''>
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Modal;
