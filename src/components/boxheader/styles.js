import styles from "styled-components";
import ImgLogo from "../../assets/images/student-removebg-preview.png"

export const BoxHeader = styles.div`
    width: 100%;
    height: 170px;
    background-color: white;
    border-bottom: 2px solid #9AA1A1;
`
export const ContainerHeader = styles.div`
   width: 1600px;
   height: 200px;
   margin: auto;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`
export const ImgUser = styles.div`
    width: 120px;
    height: 120px;
    border: 3px solid #0D60E5;
    border-radius: 60px;
    background-image: url(${ImgLogo});
    background-position: center;
    background-size: cover;
`
export const H1 = styles.h1`
    letter-spacing: 3px;
    font-weight: 600;
    font-size: 37px;
    color: black; 
`
export const Span = styles.span`
    letter-spacing: 0px;
    font-weight: bold;
    font-size: 39px;
    color: #0D60E5; 
`
