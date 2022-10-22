import React, { useState } from "react";
import "../../App.css";
import { Button, Card, Form } from 'react-bootstrap';



function Todo({ todo, index, markTodo, removeTodo }) {
    return (
        <div
            className="todo"

        >
            <span>{todo.text}</span>
            <div>
                <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    );
}


function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}

function Main() {
    const obj = { text: '', isDone: true };
    const [todos, setTodos] = useState([

    ]);
    const [donetodos, setDoneTodos] = useState([

    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        obj.text = newTodos[index].text;
        donetodos.push(obj);
        setDoneTodos(donetodos);
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <h1 className="text-center mb-4">Add Task</h1>
            <FormTodo addTodo={addTodo} />
            <div className="app">

                <div className="container">
                    <h1 className="text-center mb-4">Pending Tasks</h1>


                    <div>
                        {todos.map((todo, index) => (
                            <Card>
                                <Card.Body>
                                    <Todo
                                        key={index}
                                        index={index}
                                        todo={todo}
                                        markTodo={markTodo}
                                        removeTodo={removeTodo}
                                    />
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>



                <div className="container">
                    <h1 className="text-center mb-4">Completed List</h1>

                    <div>
                        {donetodos.map((todo, index) => (
                            <Card>
                                <Card.Body>
                                    {todo.text}
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;