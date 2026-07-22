import { useFlashMessage } from "./FlashMsgStore";

export default function FlashMessageDisplay() {
    const { flashMessage } = useFlashMessage();

    if (!flashMessage.message) return null;

    return (
        <div 
            className={`flash alert alert-${flashMessage.type} alert-dismissible fade show text-center shadow`}
            role="alert"
        >
            {flashMessage.message}
        </div>
    );
}