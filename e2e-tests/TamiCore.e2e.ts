import { expect, Page, test } from '@playwright/test'
import testUtils, { Statistics } from './utils/testUtils'
const host =
  'http://localhost:6006/iframe.html?globals=backgrounds.grid%3A!false%3Bbackgrounds.value%3A!hex(F8F8F8)&id=tamicore--default&viewMode=story'

const loadTami = async (page: Page) =>
  await test.step('Load Tami in storybook', async () => {
    await page.goto(host, { waitUntil: 'networkidle' })
  })
test.describe('TamiCore Test', () => {
  test('run through', async ({ page }) => {
    const {
      assertButtonsVisible,
      assertButtonsInvisible,
      assertStatistics,
      assertExpression,
      clickButton
    } = testUtils(page)

    await loadTami(page)

    await test.step('Assert initial values', async () => {
      await assertExpression('(o o)')
      await assertStatistics([
        'Hunger:       █████     ',
        'Happiness:    █████     ',
        'Energy:       █████     ',
        'Age:          1'
      ])
      await assertButtonsVisible(['Feed', 'Play', 'Sleep', 'Nothing'])
    })
    await test.step('Assert switched translation to DE', async () => {
      await page.getByRole('button', { name: 'DE', exact: true }).click()
      await expect(page.getByText('(o o)')).toBeVisible()

      const statisticsEn: Statistics = [
        'Happiness:    █████     ',
        'Energy:       █████     ',
        'Age:          1'
      ]
      statisticsEn.invisible = true
      await assertStatistics(statisticsEn)
      await assertButtonsInvisible(['Feed', 'Play', 'Sleep', 'Nothing'])

      await assertStatistics([
        'Glück:        █████     ',
        'Kraft:        █████     ',
        'Alter:        1'
      ])
      await assertButtonsVisible(['Füttern', 'Spielen', 'Schlafen', 'Nichts'])
    })
    await test.step('Assert switched translation to EN', async () => {
      await page.getByRole('button', { name: 'EN', exact: true }).click()
      await expect(page.getByText('(o o)')).toBeVisible()
      const statisticsDe: Statistics = [
        'Glück:        █████     ',
        'Kraft:        █████     ',
        'Alter:        1'
      ]
      statisticsDe.invisible = true
      await assertStatistics(statisticsDe)
      await assertButtonsInvisible(['Füttern', 'Spielen', 'Schlafen', 'Nichts'])

      await assertStatistics([
        'Hunger:       █████     ',
        'Happiness:    █████     ',
        'Energy:       █████     ',
        'Age:          1'
      ])
      await assertButtonsVisible(['Feed', 'Play', 'Sleep', 'Nothing'])
    })
    await test.step('Handle button FEED', async () => {
      await clickButton('Feed')
      await assertStatistics([
        'Hunger:       ████      ',
        'Happiness:    █████     ',
        'Energy:       ██████    ',
        'Age:          2'
      ])
      await assertExpression('(o o)')
    })
    await test.step('Handle button PLAY', async () => {
      await clickButton('Play')

      await assertStatistics([
        'Hunger:       ██████   ',
        'Happiness:    ██████   ',
        'Energy:       ████     ',
        'Age:          3'
      ])
      await assertExpression('(o o)')
    })
    await test.step('Handle button SLEEP', async () => {
      await clickButton('Sleep')

      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:    █████    ',
        'Energy:       █████    ',
        'Age:          4'
      ])
      await assertExpression('(x x)')
    })
    await test.step('Handle button NOTHING', async () => {
      await clickButton('Nothing')

      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:    ████      ',
        'Energy:       ████      ',
        'Age:          5'
      ])
      await assertExpression('(x x)')
    })
  })
  test('test FEED', async ({ page }) => {
    const { assertButtonsVisible, assertStatistics, assertExpression, clickButton } =
      testUtils(page)

    await loadTami(page)

    await test.step('Assert initial values', async () => {
      await assertExpression('(o o)')
      await assertStatistics([
        'Hunger:       █████     ',
        'Happiness:    █████     ',
        'Energy:       █████     ',
        'Age:          1'
      ])
      await assertButtonsVisible(['Feed', 'Play', 'Sleep', 'Nothing'])
    })

    await test.step('Handle button FEED 1', async () => {
      await clickButton('Feed')
      await assertStatistics([
        'Hunger:       ████      ',
        'Happiness:    █████     ',
        'Energy:       ██████    ',
        'Age:          2'
      ])
      await assertExpression('(o o)')
    })
    await test.step('Handle button FEED 2', async () => {
      await clickButton('Feed')
      await assertStatistics([
        'Hunger:       ███       ',
        'Happiness:    █████     ',
        'Energy:       ███████   ',
        'Age:          3'
      ])
      await assertExpression('(u u)')
    })
    await test.step('Handle button FEED 3', async () => {
      await clickButton('Feed')
      await assertStatistics([
        'Hunger:       ██        ',
        'Happiness:    █████     ',
        'Energy:       ████████  ',
        'Age:          4'
      ])
      await assertExpression('(u u)')
    })
    await test.step('Handle button FEED 4', async () => {
      await clickButton('Feed')
      await assertStatistics([
        'Hunger:       █         ',
        'Happiness:    █████     ',
        'Energy:       █████████ ',
        'Age:          5'
      ])
      await assertExpression('(u u)')
    })
    await test.step('Handle button FEED 5', async () => {
      await clickButton('Feed')
      await assertStatistics([
        'Hunger:                 ',
        'Happiness:    █████     ',
        'Energy:       ██████████',
        'Age:          6'
      ])
      await assertExpression('(u u)')
    })
  })
  test('test PLAY', async ({ page }) => {
    const { assertButtonsVisible, assertStatistics, assertExpression, clickButton } =
      testUtils(page)

    await loadTami(page)

    await test.step('Assert initial values', async () => {
      await assertExpression('(o o)')
      await assertStatistics([
        'Hunger:       █████     ',
        'Happiness:    █████     ',
        'Energy:       █████     ',
        'Age:          1'
      ])
      await assertButtonsVisible(['Feed', 'Play', 'Sleep', 'Nothing'])
    })

    await test.step('Handle button PLAY 1', async () => {
      await clickButton('Play')
      await assertStatistics([
        'Hunger:       ███████   ',
        'Happiness:    ██████    ',
        'Energy:       ███       ',
        'Age:          2'
      ])
      await assertExpression('(- - )')
    })

    await test.step('Handle button PLAY 2', async () => {
      await clickButton('Play')
      await assertStatistics([
        'Hunger:       █████████ ',
        'Happiness:    ███████   ',
        'Energy:       █         ',
        'Age:          3'
      ])
      await assertExpression('(x x)')
    })

    await test.step('Handle button PLAY 3', async () => {
      await clickButton('Play')
      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:    ████████  ',
        'Energy:                 ',
        'Age:          4'
      ])
      await assertExpression('(u u)')
    })

    await test.step('Handle button PLAY 4', async () => {
      await clickButton('Play')
      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:    █████████ ',
        'Energy:                 ',
        'Age:          5'
      ])
      await assertExpression('(u u)') // <- BUG, should be not this expression
    })
    await test.step('Handle button PLAY 5', async () => {
      await clickButton('Play')
      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:    ██████████',
        'Energy:                 ',
        'Age:          6'
      ])
      await assertExpression('(u u)')
    })
  })

  test('test SLEEP', async ({ page }) => {
    const { assertButtonsVisible, assertStatistics, assertExpression, clickButton } =
      testUtils(page)

    await loadTami(page)

    await test.step('Assert initial values', async () => {
      await assertExpression('(o o)')
      await assertStatistics([
        'Hunger:       █████     ',
        'Happiness:    █████     ',
        'Energy:       █████     ',
        'Age:          1'
      ])
      await assertButtonsVisible(['Feed', 'Play', 'Sleep', 'Nothing'])
    })

    await test.step('Handle button SLEEP 1', async () => {
      await clickButton('Sleep')
      await assertStatistics([
        'Hunger:       █████████ ',
        'Happiness:    ████      ',
        'Energy:       ██████    ',
        'Age:          2'
      ])
      await assertExpression('(x x)')
    })

    await test.step('Handle button SLEEP 2', async () => {
      await clickButton('Sleep')
      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:    ███       ',
        'Energy:       ███████   ',
        'Age:          3'
      ])
      await assertExpression('(x x)')
    })

    await test.step('Handle button SLEEP 3', async () => {
      await clickButton('Sleep')
      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:    ██        ',
        'Energy:       ████████  ',
        'Age:          4'
      ])
      await assertExpression('(x x)')
    })

    await test.step('Handle button SLEEP 4', async () => {
      await clickButton('Sleep')
      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:    █         ',
        'Energy:       █████████ ',
        'Age:          5'
      ])
      await assertExpression('(x x)')
    })
    await test.step('Handle button SLEEP 5', async () => {
      await clickButton('Sleep')
      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:              ',
        'Energy:       ██████████',
        'Age:          6'
      ])
      await assertExpression('(x x)')
    })
  })

  test('test NOTHING', async ({ page }) => {
    const { assertButtonsVisible, assertStatistics, assertExpression, clickButton } =
      testUtils(page)

    await loadTami(page)

    await test.step('Assert initial values', async () => {
      await assertExpression('(o o)')
      await assertStatistics([
        'Hunger:       █████     ',
        'Happiness:    █████     ',
        'Energy:       █████     ',
        'Age:          1'
      ])
      await assertButtonsVisible(['Feed', 'Play', 'Sleep', 'Nothing'])
    })

    await test.step('Handle button NOTHING 1', async () => {
      await clickButton('Nothing')
      await assertStatistics([
        'Hunger:       ██████    ',
        'Happiness:    ████      ',
        'Energy:       ████      ',
        'Age:          2'
      ])
      await assertExpression('(o o)')
    })

    await test.step('Handle button NOTHING 2', async () => {
      await clickButton('Nothing')
      await assertStatistics([
        'Hunger:       ███████   ',
        'Happiness:    ███       ',
        'Energy:       ███       ',
        'Age:          3'
      ])
      await assertExpression('(- - )')
    })

    await test.step('Handle button NOTHING 3', async () => {
      await clickButton('Nothing')
      await assertStatistics([
        'Hunger:       ████████  ',
        'Happiness:    ██        ',
        'Energy:       ██        ',
        'Age:          4'
      ])
      await assertExpression('(- - )')
    })

    await test.step('Handle button NOTHING 4', async () => {
      await clickButton('Nothing')
      await assertStatistics([
        'Hunger:       █████████ ',
        'Happiness:    █         ',
        'Energy:       █         ',
        'Age:          5'
      ])
      await assertExpression('(x x)')
    })
    await test.step('Handle button NOTHING 5', async () => {
      await clickButton('Nothing')
      await assertStatistics([
        'Hunger:       ██████████',
        'Happiness:              ',
        'Energy:                 ',
        'Age:          6'
      ])
      await assertExpression('(u u)') // <- BUG, should be not this expression
    })
  })
})
