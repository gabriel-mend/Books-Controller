import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border-spacing: 0px;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${props => (props.blackColor ? '#121212' : '#ffffff')};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
    button, input {
        cursor: pointer;
        outline: none;
        border: none;
    }
`

export const Container = styled.div`
    width: 90%;
    max-width: 1110px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const Title = styled.div`
    width: 100%;
    padding: 24px 0;
    margin-top: 200px;

    font-size: 32px;
    font-weight: 500;
    text-align: center;
    color: #fff;
    background: #283593;
`

export const Table = styled.table`
    width: 100%;
    background: #e8eaf6;

    & tr th {
        background: #3f51b5;
        color: #fff;
    }

    & tr {
        text-align: center;
    }
    & tr th, td {
        padding: 10px;
        border: 0.5px solid rgba(0, 0, 0, 0.1);
    }
`

export const ButtonUpdate = styled.button`
    width: 60px;
    height: 30px;
    margin-right: 20px;
    background: #ffc107;

    border: 1px solid #000;

    transition: .35s;

    &:hover {
        background: #ffb300;
    }
`

export const ButtonDelete = styled.button`
    width: 60px;
    height: 30px;
    background: #f44336;

    border: 1px solid #000;

    transition: .35s;

    &:hover {
        background: #e53935;
    }
`

export const BookForm = styled.form`
    width: 100%;
    padding:24px;

    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: #fff;
    background: #283593;

    & div {
        display: flex;
        margin-top: 24px;
        padding: 30px;
        background: #3949ab;
    }

    & div input {
        width: 100%;
        padding: 5px 10px;
        margin-right: 20px;

        font-size: 14px;
        color: #fff;

        background: transparent;
        border-bottom: 1px solid #fff;
    }

    & div input::placeholder {
        color: #fff;
    }

    & div button {
        font-size: 14px;
        font-weight: 500;
        color: #fff;

        padding: 5px 10px;
        background: #4caf50;
        border: 1px solid #000;
        transition: .35s;
    }

    & div button:hover {
        background: #43a047;
    }
`