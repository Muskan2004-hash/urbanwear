function App() {

  const products = [
    {
      id: 1,
      name: "Oversized Hoodie",
      price: "$59",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 2,
      name: "Black T-Shirt",
      price: "$29",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
    },
    {
      id: 3,
      name: "Cargo Pants",
      price: "$49",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
    }
  ]

  return (
    <div>

      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 40px',
          background: '#000'
        }}
      >
        <h2>UrbanWear</h2>

        <div style={{ display: 'flex', gap: '20px' }}>
          <p>Home</p>
          <p>Products</p>
          <p>Cart</p>
          <p>Login</p>
        </div>
      </nav>

      <section
        style={{
          textAlign: 'center',
          padding: '80px 20px',
          background: '#222'
        }}
      >
        <h1 style={{ fontSize: '60px' }}>
          Modern Fashion Store
        </h1>

        <p style={{ fontSize: '20px' }}>
          Premium Clothing Collection
        </p>
      </section>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '40px'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: '#222',
              borderRadius: '10px',
              overflow: 'hidden'
            }}
          >

            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }}
            />

            <div style={{ padding: '20px' }}>
              <h2>{product.name}</h2>

              <p style={{ fontSize: '18px' }}>
                {product.price}
              </p>

              <button
                style={{
                  padding: '10px 20px',
                  background: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Add To Cart
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default App
