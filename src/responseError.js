export async function responseErrorMessage(response) {
  const body = await response.text()
  const fallback = `HTTP error ${response.status}`
  if (!body.trim()) return fallback
  try {
    const data = JSON.parse(body)
    return data?.detail || data?.error || fallback
  } catch {
    return body
  }
}
