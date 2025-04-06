import Modal from '@/components/Modal';
import {useState } from 'react';
interface DeleteTransactionProps {

}

export default function DeleteTransaction() {
    const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(true);
    return <Modal
        isOpen={isPinModalOpen}
        title='Delete Entry'
        onClose={() => setIsPinModalOpen(false)}
        onConfirm={() => setIsPinModalOpen(false)}
    >
         <p>Are you sure you want to delete this entry? (cannot be undone)</p>
    </Modal>
}