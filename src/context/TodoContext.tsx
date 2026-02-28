import React, { createContext, useContext, useState } from 'react';

// Define the shape of our data
const TodoContext = createContext<any>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Feed the dog',
      desc: 'By 6pm, give Mia the crumbles',
      done: true,
    },
    {
      id: 2,
      title: 'Go to the market',
      desc: 'Make sure to buy pepper and beans',
      done: false,
    },
  ]);

  const checkTodo = (passedId: number) => {
    setTodos((prev) =>
      prev.map(
        (todo) =>
          // 1. Check if this is the task we want to change
          todo.id === passedId
            ? { ...todo, done: !todo.done } // 2. Create a copy and flip the 'done' status
            : todo // 3. Leave the others exactly as they are
      )
    );
  };

  const deleteTodo = (passedId: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== passedId));
  };

  const addTodo = (newTodo: any) => {
    setTodos((prev) => [...prev, { ...newTodo, id: Date.now() }]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, checkTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook for easy access
export const useTodos = () => useContext(TodoContext);
