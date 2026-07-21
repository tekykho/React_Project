import { atom, useAtom } from "jotai";

const flashMessageAtom = atom({
    "message": "",
    "type": "primary"
})

export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);
    
    const showMessage = (message, type="primary") => {
        setFlashMessage({
            message, type
        });
        setTimeout(clearMessage, 6500);
    }

    const clearMessage = () => {
        setFlashMessage({
            "message": "",
            "type": "primary"
        })
    }

    return {
        showMessage,
        flashMessage
    }
}