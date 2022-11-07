import { useState, useEffect } from 'react'
import '../styles/components/content.sass'

const Content = () => {
    const [getUser, setGetUser] = useState('')
    const [user, setUser] = useState('')
    const [gitUser, setGitUser] = useState('')
    const [opacity, setOpacity] = useState('')

    const getInputUser = () => {
        setUser(getUser)
    }

    const cleanFields = () => {
        setGitUser('')
        setOpacity('divOpacity0')
        setGetUser('')
    }
    
    useEffect(() => {
        setOpacity('divOpacity1')
        fetch(`https://api.github.com/users/${user}`)
            .then((res) => res.json())
            .then((json) => setGitUser(json))
        console.log(user.name)
    }, [user])

    useEffect(() => {
        setOpacity('divOpacity0')
    }, [])

    return (
        <div className='content'>
            <div className="main-content">
                <div className="title">
                    Consulte um perfil do Github!
                </div>
                <div className={`result ${opacity}`}>
                    <img src={gitUser.avatar_url} alt="Foto perfil" />
                    <span>Nome: {gitUser.name}</span>
                    <span>Localização: {gitUser.location}</span>
                </div>
                <div className="info-name">
                    <span>Digite o nome de usuário</span>
                    <input
                        type="text"
                        value={getUser}
                        onChange={(e) => setGetUser(e.target.value)}
                        placeholder='PinheiroMatheus' />
                </div>
                <div className="action-buttons">
                    <button className='search' onClick={getInputUser}>Pesquisar</button>
                    <button className='clean' onClick={cleanFields}>Limpar</button>
                </div>
            </div>
        </div>
    )
}

export default Content