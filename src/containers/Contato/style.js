import styled from 'styled-components'

const Container = styled.main`

li{
    .containerInputs{
        background: rgba(128, 128, 128, 0.5);
        padding: 0 .3rem .8rem .3rem;
        border-radius: 1rem;
        border: 1px solid white;

    }

    .containerBotoes{
        display: flex;
        flex-direction: row;
        gap: .5rem;

        button{
            margin: .5rem 0 2rem;
        }
    }
}
  
`

export default Container