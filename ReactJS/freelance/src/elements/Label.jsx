export const Label = (props) => {
   const {id, text} = props
    return(
        <label for={id}>{text}</label>
    )
}