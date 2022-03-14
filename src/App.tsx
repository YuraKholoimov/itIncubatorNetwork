import {HeaderApp} from "./Components/Header/HeaderApp";
import {FooterApp} from "./Components/Footer/footerApp";
import {BodyApp} from "./Components/BodyApp/BodyApp";


// export type AppType = {
//     state: any
// }

export default function App() {
    return (
        <>
            <HeaderApp/>
            <BodyApp />
            <FooterApp/>
        </>
    )
}

