import { Leaf } from 'lucide-react';

export function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-group">
                <Leaf color="#37AD3B" size={36}/>
                <h3>EcoFuture</h3>
            </div>
            <div className="nav-group">
                <p>Home</p>
                <p>Sobre</p>
                <p>Benefícios</p>
                <p>Depoimentos</p>
                <p>Contato</p>
            </div>
            <p className="button button-small">Participe</p>
        </div>
    )
}