import { resolve } from 'path'

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  config.resolve.alias['~'] = resolve(__dirname, 'src')
  config.resolve.alias['preact-cli/async-component'] = resolve(__dirname, 'src', 'components', 'async')
}
