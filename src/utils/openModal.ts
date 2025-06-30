export const openModal = (ref: React.RefObject<HTMLDialogElement | null>) => {
    ref.current?.showModal()
}
