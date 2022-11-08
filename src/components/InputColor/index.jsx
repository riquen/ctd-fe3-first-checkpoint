export const InputColor = ({ color, setColor }) => {
    const handleChange = (e) => {
        setColor(e.target.value)
    }

    return(
        <>
            <label htmlFor="input-color">Cor</label>
            <input
                id="input-color"
                placeholder="Insita sua cor no formato Hexadecimal"
                type="text"
                value={color}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}