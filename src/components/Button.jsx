export const Button = ({ title, icon, background, onClick, fontSize }) => (
    <button 
    style={{
        background,
        fontSize
    }}
    onClick={onClick}
    className="rounded-xl p-2 font-medium text-black flex gap-1 items-center cursor-pointer">
            {title} {icon && (<ion-icon style={{
            fontSize: "16px",
        }} name={icon}></ion-icon>)}
    </button>
)