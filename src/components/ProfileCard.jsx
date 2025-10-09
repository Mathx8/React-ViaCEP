import React from "react";
import './ProfileCard.css';

const ProfileCard = ({ name, age, isStudent }) => {
    const ifStudent = () => {
        if (isStudent) {
            return ("É estudante")
        } else {
            return ("Não é estudante")
        }
    }

    const handleName = () => {
        alert(name)
    }

    return (
        <div className="containerCard">
            <div>
                <p>👤 {name} - {age} anos </p>
                <p>👨‍🎓 {ifStudent()} </p>
            </div>
            <button onClick={handleName}>MOSTRAR NOME</button>
        </div>
    );
};

export default ProfileCard;