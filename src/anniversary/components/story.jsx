import { h } from 'preact'
import Handlebars from 'handlebars'
import { parse, stringify } from 'querystring'

const REAL_VALUES = {
  'occasion1': 'anniversary',
  'adjective1': 'married',
  'adverb1': 'vividly',
  'verb1': 'enjoy',
  'superlativeAdvjective1': 'best',
  'noun1': 'home',
  'verb2': 'cook',
  'pluralNoun1': 'neighborhoods',
  'gerund1': 'traveling',
  'noun2': 'myself',
  'adjective3': 'better',
  'pluralNoun2': 'adventures',
  'pluralNoun3': 'risks',
  'noun3': 'language learning',
  'noun4': 'freelance business',
  'pluralNoun4': 'years',
  'properNoun1': 'God',
  'maleName1': 'Joe'
}

const SOURCE = `
  <h1 class="text-xl font-bold mb-4">
    Happy {{occasion1}}!
  </h1>

  <p class="mb-2">
    Can you believe it? We've been {{adjective1}} for 5 years! Those years have flown by.
    I {{adverb1}} remember this day 5 years ago. We had put in so much work in the preceding
    months, and on that day all that work paid off and we were able to just {{verb1}} it.
  </p>

  <p class="mb-2">
    Marrying you was the {{superlativeAdjective1}} decision I've made. I've loved making a {{noun1}},
    learning to {{verb2}}, exploring new {{pluralNoun1}} in our cities, {{gerund1}} the world,
    and pretty much doing everything with you. Along the way you've taught me a lot about
    {{noun2}} and pushed me to become a {{adjective3}} person.
  </p>

  <p class="mb-2">
    I've watched you take on new {{pluralNoun2}} and take big {{pluralNoun3}} (such as leaving
    your job and embarking on the current adventure of {{noun3}} and building a {{noun4}}).
    I know it hasn't always been easy, but I'm so proud of you.
  </p>

  <p class="mb-2">
    I can't wait for the next 5 {{pluralNoun4}} (and then the 5 {{pluralNoun4}} after that, and the
    5 {{pluralNoun4}} after that, and so on). I don't know where life is going to take us,
    but I'm so thankful {{properNoun1}} has brought us together so that you'll be by my side.
  </p>

  <p>
    I love you!
    <br />
    – {{maleName1}}
  </p>
`

const TEMPLATE = Handlebars.compile(SOURCE)

function Story() {
  const values = parse(location.search.slice(1))
  const template = TEMPLATE(values)

  return (
    <div>
      <div class="w-full max-w-xl bg-white shadow-md rounded p-8 sm:p-12 mb-4">
        <div dangerouslySetInnerHTML={{ __html: TEMPLATE(values) }} />
      </div>
      <p class="text-center">
        <a
          class="text-blue-500 underline"
          href={`/so-lucky/right?${stringify(REAL_VALUES)}`}
        >
          Read the real deal.
        </a>
      </p>
    </div>
  )
}

export default Story
