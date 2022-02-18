import {HeaderApp} from "./Components/Header/HeaderApp";
import {FooterApp} from "./Components/Footer/footerApp";
import {BodyApp} from "./Components/BodyApp/BodyApp";
import {ActionsTypes, AppStateType} from "./Components/Redux/State";

export type AppType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

export default function App(props: AppType) {
    return (
        <>
            <HeaderApp/>
            <BodyApp state={props.state} dispatch={props.dispatch}/>
            <FooterApp/>
        </>
    )
}

