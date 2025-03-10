import Input from "@/shared/components/input";

const Header = () => {
    return (
        <div>
            <Input type="text" required={false} label='Поиск'/>
        </div>
    );
};

export default Header;