import { createPortal } from 'react-dom';

const PopupContent = ({ copied }) => {
    return createPortal(
    <section>
        {copied && (
            <div style={{ position: "absolute", top: "3rem" }}>Copied to ClipBoard</div>
        )}
    </section>,
    document.querySelector("#popup-content")
    );
};

export default PopupContent;