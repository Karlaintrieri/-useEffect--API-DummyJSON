export default function Usuarios({ user }) {
    return (
        <div className="card">
            <img src={user.image} alt={user.firtsName}/>
            <h2>
                {user.firtsName} {user.lastName}
            </h2>
            <p>Idade: {user.age}</p>
            <p>Gênero: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.phone}</p>
        </div>
    );
}