/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'

const dispatchAction = require('../../common/dispatcher/dispatchAction')
const tabActionConstants = require('../../common/constants/tabAction')

const tabActions = {
  // TODO(bridiver) - this is an action anti-pattern and the code that uses it should be refactored
  // to be declarative
  reload: (tabId, ignoreCache) => {
    dispatchAction(tabActionConstants.RELOAD, {
      tabId,
      ignoreCache
    })
  },

  didFinishNavigation: (tabId, navigationState, windowId) => {
    dispatchAction(tabActionConstants.FINISH_NAVIGATION, {
      tabId,
      navigationState,
      queryInfo: {
        windowId
      }
    })
  },

  didStartNavigation: (tabId, navigationState, windowId) => {
    dispatchAction(tabActionConstants.START_NAVIGATION, {
      tabId,
      navigationState,
      queryInfo: {
        windowId
      }
    })
  }
}

module.exports = tabActions
