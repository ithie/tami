import { expect, Page } from '@playwright/test'

export type Statistics = string[] & {
  invisible?: boolean
}

export default (page: Page) => {
  const getButton = (name: string) => page.getByRole('button', { name, exact: true })
  const getText = (name: string) => page.getByText(name, { exact: true })
  const clickButton = async (name: string) => getButton(name).click()

  const assertExpression = async (expression: string) =>
    expect(page.getByText(expression)).toBeVisible()

  const assertStatistics = async (statistics: Statistics) =>
    statistics.forEach(async (statistic) => {
      const text = getText(statistic)
      if (statistics.invisible) {
        await expect(text).not.toBeVisible()
      } else {
        await expect(text).toBeVisible()
      }
    })

  const assertButtonInvisible = async (name: string) => expect(getButton(name)).not.toBeVisible()
  const assertButtonVisible = async (name: string) => expect(getButton(name)).toBeVisible()
  const assertButtonsVisible = async (names: string[]) =>
    names.forEach(async (name) => {
      await assertButtonVisible(name)
    })
  const assertButtonsInvisible = async (names: string[]) =>
    names.forEach(async (name) => {
      await assertButtonInvisible(name)
    })

  return {
    assertButtonsInvisible,
    assertButtonsVisible,
    assertStatistics,
    assertExpression,
    clickButton
  }
}
