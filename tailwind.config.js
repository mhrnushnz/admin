/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../tailwind/html_play_page/*.html',
    "./node_modules/flowbite/**/*.js",
    './serial_pages/*.html',
  ],
  
  
  theme: {
    fontFamily: {
      'vazir_bold': 'Vazir-Bold',
      'vazir_light': 'Vazir-Light',
    },


    extend: {
      colors: {
        'dark_purple': 'rgb(6, 6, 15)',
        'dark_purple_opacity': ' rgba(6, 6, 15 , 0.70)',
        'dark_purple_navbar': 'rgb(4, 3, 24)',
        'blue':' rgb(121, 188, 194)',
        'none': 'rgba(6, 6, 15 , 0.30)',
      },
      fontSize:{
        '15px': '15px',
        'font_s_26px': '26px',
      },
      container:{
        'center': 'true',
      },
      spacing:{
        '4px': '4px',
        '0px': '0px',
        '48px': '48px',
      },
      backdropBlur:{
        'back_blur': '7px'
      },
      boxShadow:{
        'shadow_list_item': '5px 4px 8px rgb(121, 188, 194)'
      },
      backgroundImage:{
        'gardanzani': 'url(https://www.uptvs.com/wp-contents/uploads/2024/09/Gardan-Zani-Back.jpg)',
        'bony': 'url(https://assets.myket.ir/movies/lands/xxlarge/bc3cbbfa-0f13-43e0-aa4b-b082b4aac43f.jpg)',
        'dead': 'url(https://static.cdn.asset.aparat.cloud/avt/61206536-1429-l__5824.jpg?width=900&quality=90&secret=x449Zh_v8oggFCuoetEqBA)',
        'raese': 'url(https://www.uptvs.com/wp-contents/uploads/2024/10/Thalavan-2024-Trailer.jpg)',
        'rebel': 'url(https://upko.ir/wp-content/uploads/2024/10/84515841da0a08d5f2d2d9dbef6dd7a8-1.jpg)',
        'panguan': 'url(https://filmkio.run/wp-content/uploads/2024/09/the-penguin-wallpaper-v3.jpg)',
        'khejalat_nakesh': 'url(https://www.filimo.com/shot/wp-content/uploads/2024/10/Khejalat-Nakesh-2-12.jpg)',
        'masaeb_shirin': 'url(https://www.digikala.com/mag/wp-content/uploads/2024/08/masaebe_shirin_2-movie-review.jpg)',
        'hotel': 'url(https://mag.vidao.org/wp-content/uploads/2024/07/hotel.jpg)',
        'aseman_gharb': 'url(https://media.mehrnews.com/d/2024/03/22/4/4911311.jpg?ts=1711102048826)',
        'abi_roshan': 'url(https://borna.news/files/fa/news/1403/3/22/12448149_860.jpg)',
        'daryosh': 'url(https://i.ytimg.com/vi/vsnS0smi2Wk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDtgBCB_b5oL2LWn_k3xP5A4wIx_Q)',
        'dar_entehaie_shab': 'url(https://gamefa.com/wp-content/uploads/2024/05/556745686789.jpg)',
        'afie_tehran': 'url(https://api2.zoomg.ir/media/2024-6-cover-1-66cc7d122b5676090d02f10f)',
        'shab_ahangi': 'url(https://zardfilm.in/wp-content/uploads/2024/01/shab-ahangi-3.webp)',
      }
      

    },
  },


  plugins: [
    require('flowbite/plugin')
  ],
}

