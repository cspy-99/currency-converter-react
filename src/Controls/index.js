import './style.css'
const Controls = () => (
<p>
<label>
  <span className="controls__labelText">Wybierz Walutę:</span>
  <select className="controls__field js-currency">
    <option value="USD">Dolar Amerykański (USD)</option>
    <option value="CZK">Korona Czeska (CZK)</option>
    <option value="GBP">Funt Brytyjski (GBP)</option>
    <option value="EUR">Euro (EUR)</option>
  </select>
</label>
</p>
)
export default Controls