import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const journalModule = {
    namespaced: true,
    actions,    // Pueden ser acciones asincronas que pueden mandar llamar a una mutación
    getters,    // Para traer información del state
    mutations,  // Son sincronas y son para realizar la modificación del state
    state       // El state es reactivo por lo que al cambiar el estado se notifica a todos los componentes
}

export default journalModule