import { combineReducers } from 'redux';
import memes from './memes';
import ui from './ui';
import duel from './duel';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  memes,
  ui,
  duel
})