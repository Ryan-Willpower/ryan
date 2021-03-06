import Ryan from "../lib/"

describe("`INSERT` query", () => {
  it("Should build `INSERT` query correctly", () => {
    const query = Ryan.insertInto(`table`, ["userid", "username"])
      .values("xxxx", "ryan")
      .buildQuery()

    expect(query).toBe(
      "INSERT INTO `table` (`userid`, `username`) VALUES (`xxxx`, `ryan`)"
    )
  })
})
