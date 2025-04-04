import styled from 'styled-components'

const Wrapper = styled.main`
    min-height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width:90vw;
        max-width: 600px;
        display: block;
        margin-bottom: 2rem;
        margin-top: -3rem;
    }
    p{
        line-height: 1.5;
        margin-bottom: 1rem;
        color: var(--grey-300)
    }
    a{
        color: var(--primary-500);
        text-transform: capitalize;
    }

`;

export default Wrapper;