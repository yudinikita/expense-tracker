import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/be'
import 'dayjs/locale/es'
import 'dayjs/locale/ko'
import 'dayjs/locale/uk'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)

dayjs.updateLocale('ru', {
  monthsShort: [
    'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь',
    'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
  ]
})

export default dayjs
