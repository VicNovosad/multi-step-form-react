export default function TextInput({id, value, onChange}) {
    return (
        <form className="text-input flex" action="">
            <input
                type="text"
                id={id}
                onChange={onChange}
                placeholder={value}
            />
        </form>
    ) 
}
  