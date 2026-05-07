import { Header } from '@/components/layouts';
import { Container } from '@/components/layouts/index'
import './MainLayout.css';

export function MainLayout (props) {
    return (
        <div className="main-layout">
            <Header />
            <main className="main-layout__content">
                <Container>
                    { props.children }
                </Container>
            </main>
        </div>
    )
}