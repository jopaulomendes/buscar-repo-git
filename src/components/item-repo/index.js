import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo({ repo, handleRemoveRepo }) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target='_blank' rel="noreferrer">Ver repositório</a> <br />
            <button className='remover' onClick={handleRemove} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                Remover
            </button>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo
