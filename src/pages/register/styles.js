import styles from "styled-components";

export const BoxMain = styles.div`
    width: 100%;
    padding-top: 90px;
    min-height: 924px;
`
export const Container = styles.div`
    width: 500px;
    height: 750px;
    background-color: #FAFAFA;
    box-shadow: 0px 3px 10px black;
    margin: auto;
    border-radius: 8px;
`
export const TitleBox = styles.h1`
    text-align: center;
    padding-top: 73px;
    font-size: 40px;
    letter-spacing: 4px;
    font-weight: 800;
`
export const BoxRegister = styles.div`
    max-width: 340px;
    margin: auto;
    margin-top: 66px;
`
export const P = styles.p`
    font-size: 17px;
    margin-top: 30px;
    font-weight: bold;
`
export const A = styles.a`
    text-decoration: none;
    color: blue;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 10px;
`
export const ButtonLogin = styles.button`
    width: 100%;
    min-height: 40px;
    margin-top: 30px;
    border: none;
    border-radius: 20px;
    background: rgb(14,0,255);
    background: linear-gradient(90deg, rgba(14,0,255,1) 0%, rgba(101,9,121,1) 50%, rgba(198,16,44,1) 100%);
    box-shadow: 0px 3px 6px black;
    color: white;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
`
export const Input = styles.input`
    width: 340px;
    min-height: 40px;
    border: none;
    border-bottom: 2px solid grey;
    border-radius: 1px;
    background-color: transparent;
    margin-top: 0px;
`
