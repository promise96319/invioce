
import { handleActions } from 'redux-actions'
import { UPDATECOMPANY } from '../types/company'

const company = []

export default handleActions({
	[UPDATECOMPANY](state, action){
		return action.payload
	}
}, company)
