export const InputName = ({ name, setName }) => {
    const handleChange = (e) => {
        setName(e.target.value.trim())
    }

    return (
        <>
            <label htmlFor="input-name">Nome</label>
            <input 
                id="input-name"
                type="text"
                value={name}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}