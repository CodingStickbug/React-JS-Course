import { useEffect, useState } from "react"
import { HomeContent } from "./Home/home"

export default function App() {
  const [number, setNumber] = useState(-2)
  const [advice, setAdvice] = useState("Click the button below to start...")
  async function getAdvice() {
    var response = await fetch("http://localhost:9010/api/advice")
    if (response.status === 200) {
      var data = await response.json()
      setAdvice(data[0]["advice"])
      setNumber((num) => num + 1)
    } else {
      console.log("Oh no")
    }
  }

  useEffect(function () {
    getAdvice()
  }, [])

  return (
    <HomeContent getAdvice={getAdvice} advice={advice} number={number}></HomeContent>
  )
}