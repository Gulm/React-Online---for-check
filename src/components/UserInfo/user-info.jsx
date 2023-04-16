import Avatar from './../../assets/male-avatar.jpg'
import style from './user-info.module.css'

export const UserInfo = ({ name, age, description, deleteUser, id }) => {
    const alertName = (personName) => {
        alert('You clicked ' + personName)
    }
    return (
        <div className={style.personWrapper}>
            <img className={style.profileImage} src={Avatar}></img>
            <div className={style.infoContainer}>
                <h3 style={{ color: checked ? 'red' : 'black' }}>{name}</h3>
                <p
                    className={
                        checked
                            ? style.descriptionTextCrossed
                            : style.descriptionText
                    }
                >
                    {description}
                </p>
                <p>And my age is {age + 5}</p>
                <a href=''>Visit my page</a>
                <div
                    style={{
                        display: 'inline-flex',
                    }}
                >
                    <button
                        onClick={() => alertName(name)}
                        className={style.btn}
                    >
                        Click me
                    </button>
                    <button
                        onClick={() => deleteUser(id)}
                        className={style.btn}
                    >
                        Delete me
                    </button>
                    <button onClick={() => checkUser(id)} className={style.btn}>
                        Check me
                    </button>
                </div>
            </div>
        </div>
    )
}
