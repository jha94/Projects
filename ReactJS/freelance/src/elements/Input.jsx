export const Input = (props) => {
    const {name, value, onChange, type, style, htmlFor, labelStyle, labelText} = props;
    return(
        <>
        <input onChange={onChange} type={type} style={style} name={name} value={value}/>
        {(htmlFor||labelText)&&<label style={labelStyle} htmlFor={htmlFor}>{labelText}</label>}
        </>
    )
}