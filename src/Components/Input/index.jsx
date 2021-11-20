import { Container, InputContainer } from "./style"

function Input ({label, icon, ...rest}){
    return (
        <Container>
            <div>{label}</div>
            <InputContainer>
            <input {...rest} />
            </InputContainer>
        </Container>
    )
}

export default Input;