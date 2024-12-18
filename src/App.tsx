import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('http://adelb.univ-lyon1.fr/portal/RestApi/portal/projects/0/resourcesEventsPortal/resources;6161/startdate;12312023/enddate;12062025/level;=8/field;Nom;CODEZ_RESOURCE;OWNER;', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJraWQiOiJsaXRsZWtpZHBsYXlzZm9vdGJhbGwiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBZGVSZXN0QXBpIiwiYXVkIjoiQWRlSnNvbkFwaSIsImV4cCI6MTczNDUxMTQyOCwianRpIjoiVjBpWXlVckk3djhqWlMwaEJDYVZjUSIsImlhdCI6MTczNDUwOTYyOCwibmJmIjoxNzM0NTA5NTA4LCJzdWIiOiJldHVkaWFudCIsInJvbGUiOiJ1c2VyIiwiaWRlbnRpZmllciI6Ijg0ODIzOWY3NTQ3ZTgyZGQxOTliMmM5ODlmNTFhMjg1dzU5NjAyIn0.OhR78IC5hmpO9PBwHWqnRChSxqMzadG0yqFQXHnR5mqiJuttS1unq8rVL16GGR9XYdQ-BierghppUggyDhJ15uS9AOG4NK21VuJGF0k4K7KCaX3XUX4m3OC56eudOoYmXmmFkV5oO66EyqRnMywNOAqAmG-8bitSmxjOtN7elnzsNyDaX9eyxZ1SY6GkI2iUfqd7ckAQI3U1Qn6cMNqKm3GgzjHG9B3YUFFNIpEPNqFTiyItOInXEuDkToWDEDuTSUtoElPOhAFHUKsEx9E59k0dqpylyzAA_e4BBXDjwBznpF-MLGaNi6Lu2cyUIvKUv_EQTTE4dGsXi8SCqPZppA',
        'Cookie': 'JSESSIONID=D3B270EE769C208E37A497786EB7D191;; JSESSIONID=A012E90BE7338A768B50F3F792EEECF7',
      }
    })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
