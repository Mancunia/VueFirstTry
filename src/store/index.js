import { createStore } from 'vuex'
import Data from '@/data.json'

export default createStore({
  state () {
    return {
      Data
    }
  }

})
