export async function getData(url = '') {
  try {
    const response = await fetch(url, {
      mode: "no-cors",
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        'Content-Type': 'application/json'
      }
    })
    return response
  } catch (e) {
    console.error(e)
    return e
  }
}
