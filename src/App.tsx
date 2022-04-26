import {HeaderApp} from "./Components/Header/HeaderApp";
import {FooterApp} from "./Components/Footer/footerApp";
import {BodyApp} from "./Components/BodyApp/BodyApp";
import {getAuthDataTC} from "./Redux/Reducers/auth-reducer";
import {useDispatch} from "react-redux";
import Loader from "./Components/UI/Loader";
import React from "react";


// export type AppType = {
//     state: any
// }

export default function App() {
   const dispatch = useDispatch()
    dispatch(getAuthDataTC())
    return (
        <>
            <HeaderApp/>
            <BodyApp />
            <FooterApp/>
        </>
    )
}

