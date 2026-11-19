import assert from 'node:assert/strict'
import test from 'node:test'
import { responseErrorMessage } from '../src/responseError.js'

test('reads JSON, text and empty error bodies once', async () => {
  for (const [body, expected] of [
    ['{"detail":"Unavailable"}', 'Unavailable'],
    ['Gateway timeout', 'Gateway timeout'],
    ['', 'HTTP error 503'],
  ]) {
    assert.equal(await responseErrorMessage(new Response(body, { status: 503 })), expected)
  }
})
