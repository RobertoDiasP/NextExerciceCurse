import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';

export default function PdvComponent() {
    const idVenda = 1;
    // Estado para os produtos
    const [produtos, setProdutos] = useState([]);
    // Estado para os campos do formulário
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');

    // Função para adicionar um produto
    const addProduto = () => {
        if (descricao.trim() && quantidade > 0 && valor > 0) {
            setProdutos([
                ...produtos,
                {
                    id: produtos.length + 1,
                    descricao,
                    quantidade: Number(quantidade),
                    valor: Number(valor)
                }
            ]);
            // Limpar os campos após adicionar
            setDescricao('');
            setQuantidade('');
            setValor('');
        }
        console.log(produtos);
    };

    const removeProduto = (id) => {
        setProdutos(produtos.filter((produto) => produto.id !== id));
        console.log('removeProduto', id);

    };

    return (
        <div className="container">    
            <div className="row justify-content-center mt-5">
                <div className="col-8">
                    <Card style={{ width: '100%' }}>                
                        <Card.Body>
                            <Card.Title>Compra #{idVenda}</Card.Title>
                            <div className="row">
                                <div className="col-6">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Descrição   
                                        </InputGroup.Text>
                                        <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                        />
                                    </InputGroup>        
                                </div>
                                <div className="col-6">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Quantidade   
                                        </InputGroup.Text>
                                        <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="number"
                                        value={quantidade}
                                        onChange={(e) => setQuantidade(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                                <div className="col-12">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Valor   
                                        </InputGroup.Text>
                                        <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="number"
                                        value={valor}
                                        onChange={(e) => setValor(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </div>                        
                            <Button onClick={addProduto} variant="primary">Adicionar</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-8">
                    <Card style={{ width: '100%' }}>                
                        <Card.Body>
                            <Card.Title>Itens</Card.Title>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Quantidade</th>
                                        <th>Valor</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {produtos.map((produto) => (
                                        <tr key={produto.id}>
                                            <td>{produto.descricao}</td>
                                            <td>{produto.quantidade}</td>
                                            <td>{produto.valor}</td>
                                            <td>{produto.valor * produto.quantidade}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => removeProduto(produto.id)}>Remover</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Button variant="success">Finalizar Venda</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}
