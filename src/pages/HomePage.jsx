import ProfileCard from '../components/ProfileCard'

function HomePage() {
    return (
        <>
            <h1>Perfil Interativo</h1>
            <div className="containerProfile">
                <ProfileCard name={"Matheus"} age={20} isStudent={true}></ProfileCard>
                <ProfileCard name={"Tiago"} age={20} isStudent={false}></ProfileCard>
            </div>
        </>
    );
}

export default HomePage;