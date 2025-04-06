import Modal from '@/components/Modal';
import {useState } from 'react';
interface DeleteTransactionProps {
onSuccess:()=> void
}

export default function DeleteTransaction({onSuccess}:DeleteTransactionProps) {
    const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(true);
    return <Modal
        isOpen={isPinModalOpen}
        title='Delete Entry'
        onClose={() => setIsPinModalOpen(false)}
        onConfirm={() =>{
            setIsPinModalOpen(false)
            onSuccess()
        } }
    >
         <p>Are you sure you want to delete this entry? (cannot be undone)</p>
    </Modal>
}