// App.jsx
import React from "react";

const produtos = [
  { nome: "Bolo de Chocolate", descricao: "Recheio cremoso e cobertura de brigadeiro", preco: "R$ 45,00" },
  { nome: "Cupcake de Baunilha", descricao: "Cobertura de chantilly com confeitos", preco: "R$ 8,00" },
  { nome: "Torta de Limão", descricao: "Massa crocante com recheio suave", preco: "R$ 35,00" },
];

function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <header className="bg-pink-200 p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">Delícias da Júlia</h1>
        <p className="text-center text-sm mt-2">Bolos e Doces feitos com amor</p>
      </header>

      <main className="p-6 grid md:grid-cols-3 gap-6">
        {produtos.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{item.nome}</h2>
            <p className="text-sm mt-2">{item.descricao}</p>
            <p className="text-pink-600 font-bold mt-4">{item.preco}</p>
          </div>
        ))}
      </main>

      <footer className="text-center p-4 mt-6 text-sm text-gray-500">
        © 2025 Delícias da Júlia. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
