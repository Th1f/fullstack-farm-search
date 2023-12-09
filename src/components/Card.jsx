import './Card.css';

export default function Card({ animal }) {
    return (
        <div class="card-container">
            <li key={animal.i}>
                <strong>{animal.name}</strong> is a {animal.age} year old {animal.type}
            </li>
        </div>
        
    );
}