export const state = () => ({
  loading: false,
  listGenre: [],
  genre: null,
  listCategory: [],
  listManga: [],
  listNovel: [],
  listDoujinshi: [],
  listDoujin: [],
  listCategoryDoujin: [
    'all',
    'Ahegao',
    'NTR',
    'SM',
    'Uncensored',
    'Yaoi',
    'Yuri',
    'ฮาเร็ม',
    'โลลิ',
    'ข่มขืน',
    'ครอบครัว',
    'คอมดี้',
    'โรแมนติก',
    'ซิสเตอร์',
    'ดราม่า',
    'ตำรวจ',
    'นมใหญ่',
    'นมปานกลาง',
    'นมเล็ก',
    'นักเรียน',
    'ปีศาล นางฟ้า แวมไพร์',
    'ผี-ซอมบี้',
    'พยาบาล',
    'พี่สาว น้องสาว',
    'ฟุตะนาริ',
    'ภาพสี',
    'มิโกะ',
    'ลักหลับ',
    'สลับร่าง ชาย หญิง',
    'สะกดจิต',
    'สาวกีฬา',
    'สาวดุ้น',
    'สาวผิวแทน',
    'สาวมอนเตอร์',
    'สาวหูสัตว์',
    'สาวออฟฟิศ',
    'สาวเกล',
    'สาวใหญ่/แม่บ้าน',
    'หนวด-สัตว์',
    'หยุดเวลา',
    'อาจารย์',
    'ฮาร์ดคอร์',
    'เมด สาวใช้ สาวคาเฟ่',
    'เอลฟ์',
    'แฟนตาซี',
    'โซตะ',
    'โดนรุม',
    'ไอดอล',
  ],
  category: null,
  lastEvaluatedKey: null,
  tab: 0,
  countLoadmore: 0,

  listCartoons: [],
  listCartoonsPopular: [],
  cartoon: {},
  cartoonEp: [],
  episodeId: null,
  readCartoon: [],
  searchList: [],
  localData: [],

  localCartoonId: null,
  localCartoonEp: null,
})
export const mutations = {
  SET_COUNT_LOADMORE(state, payload) {
    state.countLoadmore = payload
  },
  SET_TAB(state, payload) {
    state.tab = payload
  },
  SET_EPISODE_ID(state, payload) {
    state.episodeId = payload
  },
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_GENRE(state, payload) {
    state.genre = payload
  },
  SET_CATEGORY(state, payload) {
    state.category = payload
  },
  SET_LIST_CATEGORY(state, payload) {
    state.listCategory = payload
  },
  SET_LIST_MANGA(state, payload) {
    state.listManga = payload
  },
  SET_LIST_NOVEL(state, payload) {
    state.listNovel = payload
  },
  SET_LIST_DOUJINSHI(state, payload) {
    state.listDoujinshi = payload
  },
  SET_LIST_DOUJIN(state, payload) {
    state.listDoujin = payload
  },
  SET_SEARCH_LIST(state, payload) {
    state.searchList = payload
  },
  SET_LIST_CARTOONS(state, payload) {
    state.listCartoons = payload
  },
  SET_LASTEVALUATEDKEY(state, payload) {
    state.lastEvaluatedKey = payload
  },
  ADD_LIST_CARTOONS(state, payload) {
    state.listCartoons.push(payload)
  },
  SET_LIST_CARTOONS_POPULAR(state, payload) {
    state.listCartoonsPopular = payload
  },
  SET_CARTOON(state, payload) {
    state.cartoon = payload
  },
  SET_CARTOON_EP(state, payload) {
    state.cartoonEp = payload
  },
  SET_READCARTOON(state, payload) {
    state.readCartoon = payload
  },
}
