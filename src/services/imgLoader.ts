import starkImg from '@/assets/img/stark.png'
import arrynImg from '@/assets/img/arryn.png'
import baratheonImg from '@/assets/img/arryn.png'
import baelishImg from '@/assets/img/baelish.png'
import boltonImg from '@/assets/img/bolton.png'
import greyjoyImg from '@/assets/img/greyjoy.png'
import lannisterImg from '@/assets/img/lannister.png'
import martellImg from '@/assets/img/martell.png'
import targaryenImg from '@/assets/img/targaryen.png'
import tarlyImg from '@/assets/img/tarly.png'
import tarthImg from '@/assets/img/tarth.png'
import tullyImg from '@/assets/img/tully.png'
import tyrellImg from '@/assets/img/tyrell.png'

export const getHouseImage = (slug: string) => {
  switch (slug) {
    case 'stark':
      return starkImg
    case 'arryn':
      return arrynImg
    case 'baelish':
      return baelishImg
    case 'bolton':
      return boltonImg
    case 'baratheon':
      return baratheonImg
    case 'greyjoy':
      return greyjoyImg
    case 'lannister':
      return lannisterImg
    case 'martell':
      return martellImg
    case 'targaryen':
      return targaryenImg
    case 'tarly':
      return tarlyImg
    case 'tarth':
      return tarthImg
    case 'tully':
      return tullyImg
    case 'tyrell':
      return tyrellImg
    default:
      return ''
  }
}
