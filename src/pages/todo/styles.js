import styles from "styled-components";

export const BoxMain = styles.div`
    width: 100%;
    min-height: 924px;
    display: flex;
    flex-direction: row;
`
export const BoxRow = styles.div`
    width: 100%;
    height: 100vh;
`
export const Container = styles.div`
    width: 100%;
    height: 714px;
`
export const BoxInfos = styles.div`
    max-width: 800px;
    height: 680px;
    margin: auto;
    margin-top: 40px;
`
export const BoxInput = styles.div`
    width: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 60px;
`
export const Input = styles.input`
  width: 500px;
  min-height: 60px;
  background-color: #0D60E5;
  border-radius: 20px;
  border:none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding-left: 20px;

  &:: placeholder {
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }
`
export const Button = styles.button`
    width: 60px;
    min-height: 60px;
    background-color: #0D60E5;
    margin-left: 40px;
    border: 1px solid black;
    border-radius: 60px;
`
export const List= styles.li`
    width: 780px;
    min-height: 62px;
    padding: 0px 20px;
    margin-left: 10px;
    background-color: ${(props) => (props.checked ? "#0080EF" : "#F3F6FA" )};
    box-shadow: 1px 1px 4px black;
    border-radius: 13px;
    margin-top: 13px;
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    p {
        text-decoration-line: ${(props) => (props.checked ? "line-through" : "" )};
        color: ${(props) => (props.checked ? "black" : "black" )};
        font-size: 24px;
        font-weight: 600;
        padding-left: 10px;
        line-height: 24px;
        width: 70%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    button {
        background-color: transparent;
        border:none;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
    }
`