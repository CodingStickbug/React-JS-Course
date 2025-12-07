export function HomeContent(props) {
  return (
    <div>
      <h1>{props.advice}</h1>
      <button onClick={props.getAdvice}>Get Advice</button>
      <p>You Asked for Advice <strong>{props.number}</strong> times</p>
    </div>
  )
}