const Interactive = ({result}) => (
<div>
<p>
    <button className="interactive__button">Przelicz</button>
  </p>
  <label>
    <span className="form__result">
      Wartość w wybranej walucie:
      <p>
        <strong>{result}</strong>
      </p>
      <p>*Kurs z dnia 03.03.2023</p>
    </span>
  </label>
  </div>
)
 export default Interactive
