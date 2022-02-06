import {Container} from "react-bootstrap";
import style from "./footer.module.css";

export const FooterApp = () => {
    return (
        <section>
            <Container className='my-xl-5'>
                <footer>
                    <div className={style.container}>
                        <div>
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </div>
                    </div>
                </footer>
            </Container>

        </section>
    )

}