// import ToDolist from './ToDoList'
import Card from './component/Card'
import Counter from './component/Counter'

function App() {

  const productInfo = {
    image:
      "https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg",
    brand: {
      id: 123,
      name: "Dolce & Gabbana"
    },
    description: "cropped leaf-print shirt",
    price: 795,
    formattedPrice: "$795"
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
      <Counter />
      <Card />

    </div>

  )
}

export default App
