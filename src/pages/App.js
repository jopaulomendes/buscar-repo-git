import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/input';
import ItemRepo from '../components/item-repo';
import { Container } from './styles';
import Button from '../components/button';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repo, setRepo] = useState([])

  const handleSearchrepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`)

      if (data.id) {
        const isExist = repo.find(repo => repo.id === data.id)
        if (!isExist) {
          setRepo(prev => [...prev, data])
          setCurrentRepo('')
        } else {
          alert('Repositório já adicionado')
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Repositório não encontrado')
      } else {
        console.error('Erro ao buscar repositório', error)
      }
    }
  }

  const handleRemoveRepo = (id) => {
    const updatedRepoList = repo.filter(repo => repo.id !== id)
    setRepo(updatedRepoList)
  }

  return (
    <Container>
      <img src={gitLogo} alt="logo github" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchrepo} />
      {repo.map(repo => (
        <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
