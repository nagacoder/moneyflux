import Modal from '@/components/Modal';
import {useEffect,  useState } from 'react';
import { useAppContext } from '@/context/AppContext';
interface SetupPinProps {
 isOpen:boolean
}

export default function SetupPin({isOpen}:SetupPinProps) {
    const { savePin } = useAppContext();
    const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
    const [pin, setPin] = useState<string>("");

    useEffect(()=>{
       if(!isOpen){
        setIsPinModalOpen(false)
       }else{
        setIsPinModalOpen(true)
       }
        
    },[isOpen])
    return <Modal
        isOpen={isPinModalOpen}
        title='Enter your PIN'
        onClose={() => setIsPinModalOpen(false)}
        onConfirm={() => {
            savePin(pin)
            setPin('')
            setIsPinModalOpen(false)
        } }
    >
        <input
            type="number"
            id="pin_value"
            value={pin}
            onChange={(e) =>setPin(e.target.value)}
            required
        />
    </Modal>
}