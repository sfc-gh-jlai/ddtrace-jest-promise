describe('test', () => {
  it('should pass because Jest cannot compare promises', () => {
    const a = new Promise(() => {})
    const b = new Promise(() => {})
    expect(a).toEqual(b)
  })
})
