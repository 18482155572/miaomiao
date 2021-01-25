const state = {
    nm: window.localStorage.getItem('nowNm') || '北京',
    id: window.localStorage.getItem('nowId') || 'B0'
}

const actions = {

}

const mutations = {
    CITY_INFO(state,payload){
        state.nm = payload.nm,
        state.id = payload.id
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}