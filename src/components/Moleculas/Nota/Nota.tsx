import Input from "../../Atoms/Input/Input"
import Textarea from "../../Atoms/Textarea/Textarea";


export type NotaProps = {
    title: string;
    notes: string;
    color: string;
    setAtributes: () => void;
    setToggleClose: () => void;
};

const Nota = ({ title, notes, color, setAtributes, setToggleClose }: NotaProps) => {
    return (
        <div className="relative bg-white h-64 w-60 rounded m-5  border shadow-xl cursor-pointer">
            <Input
                type="text"
                value={title}
                placeholder="Escreva um titulo..."
                disabled={true}
                className={`w-full px-2 py-3 text-center font-semibold`}
                style={{ backgroundColor: color }}
            />
            <Textarea
                className={`line-clamp-6 overflow-hidden`}
                value={notes}
                disabled={false}
            />
        </div>
    );
}

export default Nota;