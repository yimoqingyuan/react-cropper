import * as types from '../constants/ActionTypes';
import {combinedReducers} from 'redux';

const initialState = {
	info: {
            e_name: '',
            c_name: '',
            group: '',
            contact: {
                qq: '',
                wechat: '',
                call: '',
                mobile: ''
            },
            lists: []
        },
        style: {
            logo: '',
            co_title: '#000000',
            co_item: '#999999',
            co_icon: '#648fe7',
            co_bg:'#eeeeee',
            co_line: '#000050'
        },
        cropper: null,
        flag: {
            showBrowserUnsupport: false,
            needLoadSign: true,
            showColorSetting: false,
            imgHasLoad: false,
            cropperHasInit: false,
            previewHasCreate: false
        },
        img: null,
        helper: {
            support: !!(window.FileReader && window.CanvasRenderingContext2D && (window.URL || window.webkitURL)),

        }
}

export default (state = initialState ,action) => {
	// Obejct.assign() 方法，该方法用于产生新的对象
	// 延展操作符 Spread operator : ...
	// Immutable.js
	let newState ;
	switch(action.type) {
		case types.TOGGLE_FLAG_SHOWCOLORSETTING :
			newState = Object.assign({},state,{
				flag : {
					...state.flag,
					showColorSetting : !state.flag.showColorSetting
				}
			})
			return newState;
		case types.TOGGLE_FLAG_LOADSIGN : 
			newState = Object.assign({},state,{
				flag : {
					...state.flag,
					needLoadSign : !state.flag.needLoadSign
				}
			})
			return newState;
		case types.SET_BROWSERUNSUPPORT:
			newState = Object.assign({},state,{
				flag : {
					...state.flag,
					showBrowserUnsupport : !state.flag.showBrowserUnsupport
				}
			})
			return newState;
		case types.SET_IMGHASLOAD :
			newState = Object.assign({},state,{
				flag:{
					...state.flag,
					imgHasLoad : action.param
				}
			})
			return newState;
		case types.SET_CROPPER :
			newState = Object.assign({},state,{
				cropper : action.param
			})
			return newState;
		case types.SET_CROPPERHASINIT :
			newState = Object.assign({},state,{
				flag :{
					...state.flag,
					cropperHasInit : action.param
				}
			})
			return newState;
		case types.SET_IMG :
			newState = Object.assign({},state,{
				img : action.param
			})
			return newState;
		case types.SET_USERNAME :
			newState = Object.assign({},state,{
				info : {
					...state.info,
					c_name : action.param
				}
			})
			return newState;
		case types.SET_COLOR :
			newState = Object.assign({},state,{
				style : {
					...state.style,
					co_bg : action.param
				}
			})
			return newState;
		case types.GET_SUCCESS :
			newState = Object.assign({},state,{
				info :{
					...state.info,
					lists : action.json
				} 
			})
			return newState;
		default : 
			return state;
	}

};