import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Bscexchange Finance',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Bscexchange Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Bscexchange Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Bscexchange Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Bscexchange Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Bscexchange Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Bscexchange Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Bscexchange Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Bscexchange Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Bscexchange Finance')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Bscexchange Finance')}`,
      }
    default:
      return null
  }
}
