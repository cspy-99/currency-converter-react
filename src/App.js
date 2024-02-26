import Form from './Form'
import Controls from './Controls'
import Request from './Request'
import Interactive from './Interactive'

function App() {
  return (
    <body className="form__body">
      <div className="form">
        <form className="form  js-form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicz Walutę</legend>
       <Controls/>
            <p>
              <label>
                <span className="controls__labelText">Podaj ilość w PLN:</span>
                <input
                  type="number"
                  className="js-amount controls__field"
                  step="0.01"
                  required
                />
              </label>
            </p>
           <Interactive/>
          </fieldset>
        </form>
      </div>
    </body>
  )
}

export default App
