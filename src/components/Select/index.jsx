import "./index.css"

export default function Select({change, value}) {
  return (
    <div>
      <select onChange={change} value={value}>
        <option value="uz">Uzbek</option>
        <option value="eng">English</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  )
}
