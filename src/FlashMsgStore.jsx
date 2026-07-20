import { atom, useAtom } from "jotai";

const flashMessageAtom = atom({
    "message": "",
    "type": "Info"
})

export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);
    
    const showMessage = (message, type="info") => {
        setFlashMessage({
            message, type
        });
        setTimeout(clearMessage, 6500);
    }

    const clearMessage = () => {
        setFlashMessage({
            "message": "",
            "type": "info"
        })
    }

    return {
        showMessage,
        flashMessage
    }
}