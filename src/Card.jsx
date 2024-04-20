function card(props) {
  const { item } = props
  return (
    <div className="card">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  )
}
