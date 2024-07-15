import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Noto Serif TC"', ...defaultTheme.fontFamily.serif],
      }
    }
  }
}
