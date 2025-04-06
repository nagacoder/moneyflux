import Modal from '@/components/Modal';
import { useEffect, useState } from 'react';
interface SetupPinProps {

}

export default function SetupPin() {
    const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
    return <Modal
        isOpen={isPinModalOpen}
        title='Enter your PIN'
        onClose={() => setIsPinModalOpen(false)}
        onConfirm={() => setIsPinModalOpen(false)}
    >
        <input
            type="number"
            value={0}
            id="pin_value"
            onChange={(e) => console.log(e.target.value)}
            required
        />
    </Modal>
}