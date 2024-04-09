import Container from "./style"

/* eslint-disable react/prop-types */
const Input = ({placeholder, type, value, onChange, onClick, ...rest}) => {

  return(
    <Container 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      {...rest}
    />
  )
}

export default Input