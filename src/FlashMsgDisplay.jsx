import { useFlashMessage } from "./FlashMsgStore";

export default function FlashMessageDisplay() {
    
    const { flashMessage } = useFlashMessage();

    return <>
    {
        flashMessage.message && (
            <div className={`flash alert alert-${flashMessage.type}`}>
                {flashMessage.message}
            </div>
        )
    }
    </>
}