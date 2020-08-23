import { h } from 'preact'
import { useReducer, useState } from 'preact/hooks'

const FIELDS = [
  { label: 'Occasion (e.g. "Christmas")', name: 'occasion1' },
  { label: 'Adjective', name: 'adjective1' },
  { label: 'Adverb', name: 'adverb1' },
  { label: 'Verb (e.g. "hold")', name: 'verb1' },
  { label: 'Superlative adjective (e.g. "runniest")', name: 'superlativeAdjective1' },
  { label: 'Noun', name: 'noun1' },
  { label: 'Verb', name: 'verb2' },
  { label: 'Plural noun', name: 'pluralNoun1' },
  { label: 'Gerund (e.g. "jumping")', name: 'gerund1' },
  { label: 'Noun', name: 'noun2' },
  { label: 'Adjective', name: 'adjective3' },
  { label: 'Plural noun', name: 'pluralNoun2' },
  { label: 'Another plural noun', name: 'pluralNoun3' },
  { label: 'Noun', name: 'noun3' },
  { label: 'Another noun', name: 'noun4' },
  { label: 'Plural noun', name: 'pluralNoun4' },
  { label: 'Proper noun', name: 'properNoun1' },
  { label: 'Male name', name: 'maleName1' }
]

function Form() {
  const [index, setIndex] = useState(0)
  const [values, setValues] = useReducer(
    (oldValues, newValues) => ({ ...oldValues, ...newValues }),
    {}
  )

  const ready = index === FIELDS.length - 1
  const field = FIELDS[index]

  function renderButton() {
    return (
      <button
        class="transition bg-blue-500 w-full mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={!values[field.name]}
        type="submit"
      >
        {ready ? 'Ready' : 'Next!'}
      </button>
    )
  }

  return (
    <div class="w-full max-w-xs">
      <form
        action="so-lucky/right"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(event) => {
          if (!ready) {
            setIndex(index + 1)
            event.preventDefault()
          }
        }}
      >
        <div class="mb-4">
          <label class="block font-bold mb-2" htmlFor={field.name}>
            {field.label}
          </label>
          <input
            autoFocus
            class="border px-4 py-2 rounded w-full"
            id={field.name}
            onInput={({ target }) => {
              setValues({ [field.name]: target.value })
            }}
            type="text"
            value={values[field.name] || ''}
          />
        </div>
        {renderButton()}
        {Object.keys(values).map(name => (
          <input type="hidden" name={name} value={values[name]} />
        ))}
      </form>
      {index > 0 && (
        <p class="text-center">
          <button
            class="transition text-blue-500 hover:text-blue-700 underline"
            onClick={() => {
              setIndex(index - 1)
            }}
          >
            Back
          </button>
        </p>
      )}
    </div>
  )
}

export default Form
