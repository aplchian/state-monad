const { get } = require("crocks/State")
const { curry } = require("ramda")
const Pair = require("crocks/Pair")

const compose = require("crocks/helpers/compose")

// const m = State(state => Pair(state + 5, state))

// console.log(
//   m.runWith(45).snd()
// )

// const updateValue = x => State(s => Pair(s + x, s))

// console.log(
//   updateState(10)
//     .runWith(45)
//     .snd()
// )

/**
 * 2. Map and evaluate state with a stateful monad
 */

const getState = () => State(s => Pair(s, s))

const add = curry((x, y) => x + y)

const pluralize = curry(
  (single, plural, num) => `${num} ${Math.abs(num) === 1 ? single : plural}`
)

const makeAwesome = pluralize("Awesome", "Awesomes")

const flow = compose(makeAwesome, add(10))

// console.log(
//   getState()
//     .map(add(10))
//     .runWith(0)
// )
// console.log(
//   getState()
//     .map(add(10))
//     .map(makeAwesome)
//     .runWith(100)
// )

console.log(
  get()
    .map(flow)
    .runWith(100)
)
